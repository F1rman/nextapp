import React, { useContext, } from 'react';
import MyThemeContext from '../providers/theme';

const Header = () => {
    const themeCtx = useContext(MyThemeContext);
    console.log(themeCtx)
    return (
        <header className="header">
            <button onClick={themeCtx.toggleThemeHandler}>
                Switch to {themeCtx.isDarkTheme ? 'Light' : 'Dark'} Theme
            </button>
        </header>
    );
};

export default Header;