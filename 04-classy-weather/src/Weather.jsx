import React from "react";
import Day from "./Day";

class Weather extends React.Component {
  render() {
    console.log("wae ", this.props.weather);

    const {
      temperature_2m_max: max,
      temperature_2m_min: min,
      time: dates,
      weathercode: codes,
    } = this.props.weather;

    console.log(max, min, codes);

    console.log(this.props);

    return (
      <div>
        <h2>Weather {this.props.location}</h2>
        <ul className="weather">
          {dates.map((date, i) => (
            <Day
              date={date}
              min={min.at(i)}
              max={max.at(i)}
              code={codes.at(i)}
              key={date}
              isToday={i === 0}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Weather;
