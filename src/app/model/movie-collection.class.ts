import { Movie } from "./movie.class";
import { User } from "./user.class";

export class MovieCollection {

    id: number;
    user: User;
    movie: Movie;
    purchasePrice: number;

    constructor(id: number = 0, user: User = new User(), movie: Movie = new Movie(), purchasePrice: number){
        this.id = id;
        this.user = user;
        this.movie = movie;
        this.purchasePrice = purchasePrice;
    }
}