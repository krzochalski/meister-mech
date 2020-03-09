import Station from '../core/classes/station.class';
import StationInterface from '../core/interfaces/station.interface';

const stationOne: StationInterface = new Station({
  id: '13',
  car: {},
  supervisor: {},
  mechanics: [],
});
const stationTwo: StationInterface = new Station({
  id: '24',
  car: {},
  supervisor: {},
  mechanics: [],
});

export default [stationOne, stationTwo];
