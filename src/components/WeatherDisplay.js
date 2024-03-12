import React from "react";

const WeatherDisplay = (props) => {
  const { temperature, conditions } = props.data;

  return (
    <>
      <p style={{ color: temperature > 20 ? 'red' : 'black' }}>
        Temperature: {temperature}
      </p>
      <p>Conditions: {conditions}</p>
    </>
  );
};

export default WeatherDisplay;
