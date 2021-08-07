export class Actor{

    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    birthDate: Date;
    
    constructor(id: number = 0, firstName: string = "", lastName: string = "", gender: string = "", birthDate: Date = new Date(2000, 1, 1)){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.birthDate = birthDate;
    }
}