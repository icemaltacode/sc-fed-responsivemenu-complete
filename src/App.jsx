import { useEffect, createContext, useContext, useState } from 'react';
import NavBar from './NavBar.jsx';
import useToggle from './useToggle.jsx';
import Section from './Section.jsx';

const MENU_ITEMS = [
  {title: 'Home', link: 'index.html', active: true},
  {title: 'About', link: 'about.html'},
  {title: 'Contact', link: 'contact.html'},
  {title: 'Login', link: 'login.html', disabled: true}
]

const AppContext = createContext();

function Header() {
  const ctx = useContext(AppContext);

  return <header>
    <NavBar 
      appName='My Application'
      menuItems={ctx.menuItems} 
      clickHandler={ctx.menuClickHandler}
      isDarkMode={ctx.darkMode}
      colorModeHandler={ctx.colorModeHandler}
      searchHandler={ctx.searchHandler} />
  </header>
}

function Main() {
  const ctx = useContext(AppContext);

  return <Section role='tertiary'>
    <h1>{ctx.currentPage}</h1>

    {(ctx.currentPage === 'Home' &&  <p>You will be searching for {ctx.searchQuery}</p>)}
  </Section>
}

function App() {
  const [isDarkMode, toggleDarkMode] = useToggle(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [menuItems, setMenuItems] = useState(MENU_ITEMS);
  const [currentPage, setCurrentPage] = useState('Home');

  const menuClickHandler = (page) => {
    setMenuItems(menuItems.map(menuItem => menuItem.title === page ? {...menuItem, active: true} : {...menuItem, active: false}))
    setCurrentPage(page);
  }

  useEffect(() => {
    document.getElementsByTagName('html')[0].dataset.bsTheme = isDarkMode ? 'dark' : 'light';
  });

  return <div className='container'>
    <AppContext.Provider value={{
      darkMode: isDarkMode, 
      colorModeHandler: toggleDarkMode,
      menuItems: menuItems,
      menuClickHandler: menuClickHandler,
      searchQuery: searchQuery,
      searchHandler: setSearchQuery,
      currentPage: currentPage
    }
    }>
        <Header />
        <Main />
    </AppContext.Provider>
    </div>
}

export default App;