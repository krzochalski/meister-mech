import StationInterface from '../interfaces/station.interface';

export default class Stations {
  stations: StationInterface[];

  constructor(stations: StationInterface[]) {
    this.stations = stations || [];
  }

  addStation(station: StationInterface): void {
    this.stations.push(station);
  }
}
