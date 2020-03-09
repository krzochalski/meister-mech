import Station from './classes/station.class';
import StationInterface from './interfaces/station.interface';

const stationOneProps: StationInterface = {
  id: '13',
  car: {},
  supervisor: {},
  mechanics: [],
};
const stationOne: Station = new Station(stationOneProps);
stationOne.addMechanicsToTeam([{
  id: '1', email: 'piciu@example.com', firstName: 'Pjoter', lastName: 'Krzochalski',
}]);
stationOne.addMechanicsToTeam([{
  id: '1', email: 'piciu@example.com', firstName: 'Pjoter', lastName: 'Krzochalski',
}]);
stationOne.addMechanicsToTeam([{
  id: '3', email: 'piciu@example.com', firstName: 'Andrzej', lastName: 'Dupa',
}]);
