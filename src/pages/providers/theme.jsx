import { createContext, useEffect, useState } from "react";
import { useContext } from "react";

const MyThemeContext = createContext({
    isDarkTheme: true,
    toggleThemeHandler: () => { },
});

export function MyThemeContextProvider(props) {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    useEffect(() => initialThemeHandler(), []);

    function isLocalStorageEmpty() {
        return !localStorage.getItem("isDarkTheme");
    }

    function initialThemeHandler() {
        if (isLocalStorageEmpty()) {
            localStorage.setItem("isDarkTheme", `true`);
            document.querySelector("body").classList.add("dark");
            setIsDarkTheme(true);
            document.querySelector("html").setAttribute("data-theme", "dark");
        } else {
            const isDarkTheme = JSON.parse(localStorage.getItem("isDarkTheme"));
            isDarkTheme && document.querySelector("body").classList.add("dark");
            document.querySelector("html").setAttribute("data-theme", isDarkTheme ? "dark" : "light");
            setIsDarkTheme(isDarkTheme);
        }
    }

     

    function toggleDarkClassToBody() {
        document.querySelector("body").classList.toggle("dark");
       // add attribute to html tag
        document.querySelector("html").setAttribute("data-theme", isDarkTheme ? "light" : "dark");
    }

    function setValueToLocalStorage() {
        localStorage.setItem("isDarkTheme", `${!isDarkTheme}`);
    }


    function toggleThemeHandler() {
        toggleDarkClassToBody();
        setValueToLocalStorage();
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <MyThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler }}>
            {props.children}
        </MyThemeContext.Provider>
    );
}


export default MyThemeContext;

