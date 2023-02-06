import React from "react";
import ReactDOM  from "react-dom";
import App from './App';
import GetDate from './GetDate';
import PropsReact from "./PropsReact";

function MainPage(){
    return(
        <div>
            <App/>
            <GetDate/>
            <PropsReact 
                name = "Cpatain Suraj"
                Mob = '34242422424234'
            />
            <PropsReact 
                name = "Cpatain Abhishek"
                Mob = '739023872234'
            />
            <PropsReact 
                name = "Cpatain Mohit"
                Mob = '73987234933'
            />
        </div>
    )
}

ReactDOM.render(<MainPage/>,document.getElementById('root'));

// hello captain suuraj