import React from "react";

const WeatherDisplay = (props) => {
  const { temperature, conditions } = props.data;

  return (
    <>
      <span style={{ color: temperature > 20 ? 'red' : 'black' }}>
        Temperature: {temperature}
      </span>
      <span>Conditions: {conditions}</span>
    </>
  );
};

export default WeatherDisplay;
