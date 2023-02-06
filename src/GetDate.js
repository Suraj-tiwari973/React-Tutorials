import React from "react";


export default function GetDate(){
    const date = new Date();
    const Hours = date.getHours();
    
    let wish;

    if(Hours<12){
        wish = 'Good Morning';
    }
    else if(Hours>=12 && Hours<=17){
        wish = 'Good Evening';
    }
    else{
        wish = 'Good Night';
    }
    return(
        
        <h1>{wish} Captain Suraj </h1>
    )
}