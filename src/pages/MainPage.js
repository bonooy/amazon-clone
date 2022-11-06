import Header from "../Header";
import {Outlet} from 'react-router-dom'

export default function MainPage(){
    return(
        <>
            <Header/>
            <Outlet/>
        </>
    );
}