class Car {
    private make: string;
    private model: string;
    private year: number;
    private mileage: number;
    private isMaintenanceRequired: boolean;

    constructor(make: string, model: string, year: number, initialMileage: number) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = initialMileage;
        this.isMaintenanceRequired = false;
    }

    drive(distance: number): void {
        this.mileage += distance;
        if (this.mileage >= 10000) {
            this.isMaintenanceRequired = true;
            console.log(`Maintenance required for ${this.make} ${this.model}`);
        }
    }

    getMake(): string {
        return this.make;
    }

    getModel(): string {
        return this.model;
    }

    getYear(): number {
        return this.year;
    }

    getMileage(): number {
        return this.mileage;
    }

    needsMaintenance(): boolean {
        return this.isMaintenanceRequired;
    }
}

// Usage:
const car1 = new Car('Toyota', 'Camry', 2020, 5000);
const car2 = new Car('Honda', 'Civic', 2018, 8000);

car1.drive(6000); // Exceeds 10000 miles, maintenance required
car2.drive(4000);

console.log(`${car1.getMake()} ${car1.getModel()} mileage: ${car1.getMileage()}`);
console.log(`${car2.getMake()} ${car2.getModel()} mileage: ${car2.getMileage()}`);

console.log(`${car1.getMake()} ${car1.getModel()} needs maintenance: ${car1.needsMaintenance()}`);
console.log(`${car2.getMake()} ${car2.getModel()} needs maintenance: ${car2.needsMaintenance()}`);
