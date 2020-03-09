import Mechanic from '../core/classes/mechanic.class';
import MechanicInterface from '../core/interfaces/mechanic.interface';

const mietek: MechanicInterface = new Mechanic({
  id: '23',
  firstName: 'Mietec',
  lastName: 'Wheelsky',
  email: 'mietek.wheelsky@example.com',
});
const radec: MechanicInterface = new Mechanic({
  id: '65',
  firstName: 'Radec',
  lastName: 'Hoodsky',
  email: 'radec.hoodsky@example.com',
});
const peter: MechanicInterface = new Mechanic({
  id: '455',
  firstName: 'Peter',
  lastName: 'Krzochalsky',
  email: 'peter.krzochalsky@example.com',
});
const matieu: MechanicInterface = new Mechanic({
  id: '321',
  firstName: 'Matieu',
  lastName: 'Foxinsky',
  email: 'matieu.foxinsky@example.com',
});

export default [mietek, radec, peter, matieu];
