import React from "react";

const WeatherDisplay = (props) => {
  const { temperature, conditions } = props.data;

  return (
    <>
      <p >
        Temperature:<span style={{ color: temperature > 20 ? 'red' : 'black' }}>{temperature}</span>
      </p>
      <p>Conditions:<span style={{ color: temperature > 20 ? 'red' : 'black' }}> {conditions}</span></p>
    </>
  );
};

export default WeatherDisplay;
