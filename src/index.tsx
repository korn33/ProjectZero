import { createRoot } from 'react-dom/client';
import {App} from "./app/App";
import {ThemeProvider} from "./theme/ThemeProvider";
import { BrowserRouter } from "react-router";

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);