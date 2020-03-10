import Stations from '../core/collections/stations.collection';

const stations: Stations = new Stations([]);
stations.addStation({
  id: '24',
  car: {},
  supervisor: {},
  mechanics: [],
});
stations.addStation({
  id: '13',
  car: {},
  supervisor: {},
  mechanics: [],
});

export default stations;
