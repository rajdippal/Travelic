export class Bookings {

    id !: number;
    name !: string;
    email !: string;
    fromDate !: Date;
    packageName !: string;
    price !: number;

    constructor(id: number, name: string, email: string, fromDate: Date, packageName: string, price: number){
        this.id = id;
        this.name = name;
        this.email = email;
        this.fromDate = fromDate;
        this.packageName = packageName;
        this.price = price;
    }
}
