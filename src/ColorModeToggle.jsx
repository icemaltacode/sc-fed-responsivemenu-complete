function ColorModeToggle({ isDarkMode, colorModeHandler }) {
    const COLOR_MODE_STYLE = {
        marginLeft: "5px"
    };

    return <button type='button' onClick={colorModeHandler} className='btn btn-secondary float-end' style={COLOR_MODE_STYLE}>
        <i className={isDarkMode ? 'bi-sun' : 'bi-moon-stars'}></i>
    </button>
}

export default ColorModeToggle;