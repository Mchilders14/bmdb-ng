export class Actor{

    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    date: Date;
    
    constructor(id: number = 0, firstName: string = "", lastName: string = "", gender: string = "", date: Date = new Date()){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.date = date;
    }
}