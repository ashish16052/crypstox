import React from 'react'
import { useState } from 'react';


const ThemeBtn = (props) => {

    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);

    const toggleTheme = () => {
        setTheme((theme) => (theme === "light" ? "dark" : "light"));
    }

    return (
        <div className="ThemeBtn">
            <input
                checked={theme !== "light"}
                className="ThemeBtn-checkbox"
                id="ThemeBtn-new"
                type="checkbox"
                onChange={toggleTheme}
            />
            <label className="ThemeBtn-label" htmlFor="ThemeBtn-new">
                <span className={'ThemeBtn-button'} />
            </label>
        </div>
    );
}

export default ThemeBtn