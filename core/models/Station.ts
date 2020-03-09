import Car from './Car';
import Mechanic from './Mechanic';

export default class Station {
    id: string = '0';
    car: Car;
    supervisor: Mechanic;
    mechanics: Mechanic[];

    changeCar(car: Car) {
        this.car = car;
    }

    assignSupervisor(supervisor: Mechanic) {
        this.supervisor = supervisor;
    }

    addMechanicsToTeam(mechanics: Mechanic[]) {
        mechanics.map((mechanic: Mechanic) => {
            if (!this.mechanics.find(({ id }) => mechanic.id)) {
                this.mechanics.push(mechanic);
            }
            console.log('Mechanic already assigned');
        });
    }
}

