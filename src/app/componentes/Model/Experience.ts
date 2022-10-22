export class experience {
    id?: number;
    company: String;
    position: String;
    start: Date;
    end: Date;

    constructor(company: String, position: String, start: Date, end: Date){
        this.company = company;
        this.position = position;
        this.start = start;
        this.end = end;
    }
}