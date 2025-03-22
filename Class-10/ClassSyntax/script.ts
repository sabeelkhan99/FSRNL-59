class Car{
    constructor(private name: string) {
        this.name = name;
    }

    get getName() {
        return this.name;
    }
}

const c1: Car = new Car('BMW');
c1.getName