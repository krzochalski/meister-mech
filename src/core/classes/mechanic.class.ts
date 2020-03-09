import MechanicInterface from '../interfaces/mechanic.interface';

export default class Mechanic {
  id: MechanicInterface['id'];

  firstName: MechanicInterface['firstName'];

  lastName: MechanicInterface['lastName'];

  email: MechanicInterface['email'];

  constructor(
    {
      id,
      firstName,
      lastName,
      email,
    }: MechanicInterface,
  ) {
    this.id = id || '0';
    this.firstName = firstName || '';
    this.lastName = lastName || '';
    this.email = email || '';
  }
}
