
export class Movie {
    // public title: string;
    // public year: number;
    // public rating: number;
    // public awards: string[];

    constructor(
        public id: number,
        public title: string,
        public year: number,
        public rating: number,
        public awards = []) {

    }
}