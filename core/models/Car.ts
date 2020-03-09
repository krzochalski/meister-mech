export default class Car {
    id: string = '0';
    model: string = '';
    VIN: string = '';
    startDate: Date = new Date();
    dueDate: Date | null = null;
}
