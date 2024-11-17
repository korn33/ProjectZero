import {Counter} from "../counter/Counter";
import '../styles/index.scss'
import {useTheme} from "../theme/useTheme";
import {classNames} from "../helpers/classNames";

export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            dsjfkhdsj dkjshf dkjshf sdjfs sf dhs
            <Counter/>
            <button onClick={toggleTheme}>
                theme: {theme}
            </button>
        </div>
    );
};