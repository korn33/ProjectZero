import '../styles/index.scss'
import {Link, Route, Routes} from "react-router";
import {Suspense} from "react";
import {About} from "../pages/About";
import {MainPage} from "../pages/MainPage";

export const App = () => {
    return (
       <div>
           <Link to={'/'}>Main</Link>
           <Link to={'/about'}>About</Link>
           <Suspense fallback={<div>Loading...</div>}>
               <Routes>
                   <Route path={'/about'} element={<About/>}/>
                   <Route path={'/'} element={<MainPage/>}/>
               </Routes>
           </Suspense>
       </div>
    );
};