import React from "react";

const WeatherDisplay=(props)=>{
    const {temperature,conditions} = props.data;
    return(<>
    <p style={temperature>20?{color:'red':{color:'black'}}>Temperature: {temperature}</p>
    <p>conditions:{conditions}</p>
    </>)
}


export default WeatherDisplay;