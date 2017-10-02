import TravelServiceApi from '../API/travelServiceApi';

function loadUser() {
  console.log('loading user');
  return TravelServiceApi.getUser();
}

function loadDeparture(user) {
  console.log('loading departure');
  return TravelServiceApi.getDeparture(user);
}

function loadFlight(flightId) {
  console.log('loading flight');
  return TravelServiceApi.getFlight(flightId);
}

function loadForecast(date) {
  console.log('loading forecast');
  return TravelServiceApi.getForecast(date);
}

export {
  loadUser,
  loadDeparture,
  loadFlight,
  loadForecast,
};
