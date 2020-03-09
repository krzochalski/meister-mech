import CarInterface from './car.interface';
import MechanicInterface from './mechanic.interface';

interface StationInterface {
  id: string;
  car: CarInterface | object;
  supervisor: MechanicInterface | object;
  mechanics: MechanicInterface[] | Array<any>;
}

export default StationInterface;
