export class Flights {

    id !: number;
    name !: string;
    fromLoc !: string;
    toLoc !: string;
    price !: number;

    constructor(id: number, name: string, fromLoc: string, toLoc: string, price: number){
        this.id = id;
        this.name = name;
        this.fromLoc = fromLoc;
        this.toLoc = toLoc;
        this.price = price;
    }
}
