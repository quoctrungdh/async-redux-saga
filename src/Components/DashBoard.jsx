import React from 'react';

export default function DashBoard(props) {
  const { title, userData, dashboardData = {} } = props;
  const { flight, departure, forecast } = dashboardData;

  function Loader() {
    return <span>...</span>;
  }

  function displayUserName() {
    return <span>{ userData && userData.email ? userData.email : <Loader /> }</span>;
  }

  function displayDeparture() {
    return <span>{ departure ? departure.date : <Loader /> }</span>;
  }

  function displayFlight() {
    return <span>{ flight ? `${flight.id} - ${flight.plane.make}` : <Loader /> }</span>;
  }

  function displayForecast() {
    return <span>{ forecast ? forecast.forecast : <Loader /> }</span>;
  }

  return (
    <div>
      <h4 className="panel__title">{title}</h4>
      <div className="panel__body">
        <div className="user__name">
          <h5>Here is your itinerary:</h5>
          <span>User name: {displayUserName()}</span>
        </div>
        <div className="departure">
          <strong>Your departure: </strong> {displayDeparture()}
        </div>
        <div>
          <strong>Your flight: </strong> {displayFlight()}
        </div>
        <div className="forecast">
          <strong>Weather forecast: </strong> {displayForecast()}
        </div>
      </div>
    </div>
  );
}
