export default class TravelServiceApi {
  static getUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          email: 'quoctrungdh@gmai.com',
          repository: 'https://github.com/quoctrungdh',
        });
      }, 3000);
    });
  }

  static getDeparture(user) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          userId: user.email,
          flightId: 'AR1973',
          date: '10/27/2016 16:00PM',
        });
      }, 2500);
    });
  }

  static getFlight(flightId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: flightId,
          pilot: 'John Bravo',
          plane: {
            make: 'Airbus A380',
            model: 'TA-321',
          },
          state: 'onTime',
        });
      }, 4500);
    });
  }

  static getForecast(date) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          date,
          forecast: 'rain',
        });
      }, 2000);
    });
  }
}
