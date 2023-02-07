import React from "react";

export default function PropsReact(props){
    
    return(
        <div>

            {props.name && <h1>Hello This is {props.name}.</h1>}
            <p style={{display:props.Mob ? "block" : "none"}}>Mobile Number is : {props.Mob}</p>
        </div>
    )
}


// props are used here to take the dynamic data..

// (props.name &&) is for validation that is either that thing is present or not. If present then print else not..