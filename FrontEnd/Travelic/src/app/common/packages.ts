export class Packages {
    id !: number;
    location !: string;
    price !: number;
    description !: string;

    constructor(id: number, location: string, price: number, description: string) {
        this.id = id;
        this.location = location;
        this.price = price;
        this.description = description;
    }
}
