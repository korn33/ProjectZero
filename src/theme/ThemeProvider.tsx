import {Theme, THEME_CONTEXT_LOCALSTORAGE_KEY, ThemeContext, ThemeContextProps} from "./ThemeContext";
import {ReactNode, useMemo, useState} from "react";

const definedTheme: Theme = localStorage.getItem(THEME_CONTEXT_LOCALSTORAGE_KEY) as Theme ?? Theme.LIGHT;

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState(definedTheme)

    const defaultProps: ThemeContextProps = useMemo(() => {
        return {
            theme: theme,
            setTheme: setTheme
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};