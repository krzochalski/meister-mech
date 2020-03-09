import CarInterface from '../interfaces/car.interface';
import StationInterface from '../interfaces/station.interface';
import MechanicInterface from '../interfaces/mechanic.interface';

export default class Station {
  id: string;

  car: CarInterface | object;

  supervisor: MechanicInterface | object;

  mechanics: MechanicInterface[] | Array<any>;

  constructor({
    id,
    car,
    supervisor,
    mechanics,
  }: StationInterface) {
    this.id = id || '0';
    this.car = car || {};
    this.supervisor = supervisor || {};
    this.mechanics = mechanics || [];
  }

  changeCar(car: CarInterface): void {
    this.car = car;
  }

  assignSupervisor(supervisor: MechanicInterface): void {
    this.supervisor = supervisor;
  }

  addMechanicsToTeam(mechanics: MechanicInterface[]): void {
    mechanics.forEach((mechanic: MechanicInterface) => {
      const mechanicWithSameID = (mech: MechanicInterface): boolean => mechanic.id === mech.id;
      if (!this.mechanics.find(mechanicWithSameID)) {
        this.mechanics.push(mechanic);
      }
    });
  }
}
