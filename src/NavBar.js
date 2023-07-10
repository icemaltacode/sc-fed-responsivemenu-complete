import { useState } from 'react';
import ColorModeToggle from './ColorModeToggle';

function NavBar({ appName, menuItems, clickHandler, isDarkMode, colorModeHandler, searchHandler }) {
    const onClick = (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      clickHandler(evt.target.innerHTML)
    }
  
    return <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarToggler'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarToggler'>
          <a className='navbar-brand' href='index.html'>{appName}</a>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            {menuItems.map((menuItem, i) => (
              <NavItem 
                key={i}
                title={menuItem.title}
                link={menuItem.link}
                clickHandler={onClick}
                active={menuItem.active}
                disabled={menuItem.disabled}
              />
            ))}
          </ul>
          <SearchForm searchHandler={searchHandler}/>
        </div>
        <ColorModeToggle isDarkMode={isDarkMode} colorModeHandler={colorModeHandler}/>
      </div>
    </nav>
  }

  function NavItem({ title, link, clickHandler, active = false, disabled = false }) {
    return <li className='nav-item'>
      <a className={`nav-link ${active ? 'active' : disabled ? 'disabled' : ''}`} aria-current='page' href={link} onClick={clickHandler}>{title}</a>
    </li>
  }

  function SearchForm({ searchHandler }) {
    const [currentSearch, setCurrentSearch] = useState('');
  
    const onChange = (evt) => {
      setCurrentSearch(evt.target.value);
    }
  
    const onSubmit = (evt) => {
      evt.preventDefault();
      searchHandler(currentSearch);
    }
    
    return <form className='d-flex' role='search' onSubmit={onSubmit}>
      <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' value={currentSearch} onChange={onChange} />
      <button className='btn btn-outline-success' type='submit'>Search</button>
    </form>
  }

  export default NavBar;