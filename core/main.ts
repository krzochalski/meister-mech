import Station from './models/Station';

const stationOne = new Station();
stationOne.addMechanicsToTeam([{ id: '1', email: 'piciu@example.com', firstName: 'Pjoter', lastName: 'Krzochalski' }]);
console.log(stationOne.mechanics);
