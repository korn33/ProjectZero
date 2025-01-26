import {classNames} from "../helpers/classNames";
import {Counter} from "../counter/Counter";
import {useTheme} from "../theme/useTheme";

export const MainPage = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            dsjfkhdsj dkjshf dkjshf sdjfs sf dhs
            <Counter/>
            <button onClick={toggleTheme}>
                theme: {theme}
            </button>
        </div>
    )
}