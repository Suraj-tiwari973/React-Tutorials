import React from "react";
import ReactDOM  from "react-dom";
import App from './App';
import GetDate from './GetDate';
import PropsReact from "./PropsReact";
import ArrayData from "./ArrayData";

function MainPage(){

    const ArrayElements =  ArrayData.map(item=>{
        return <PropsReact name={item.name} Mob = {item.Mobile}/>
    })

    return(
        <div>
            <App/>
            <GetDate/>
            {ArrayElements}
        </div>
    )
}

ReactDOM.render(<MainPage/>,document.getElementById('root'));
