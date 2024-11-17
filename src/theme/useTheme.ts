import {Theme, THEME_CONTEXT_LOCALSTORAGE_KEY, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

export interface UseThemeResult {
    toggleTheme: () => void,
    theme: Theme
}

export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme: Theme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme)
        localStorage.setItem(THEME_CONTEXT_LOCALSTORAGE_KEY, newTheme)
    }

    return {theme, toggleTheme}
}