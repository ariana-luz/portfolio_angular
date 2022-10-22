export class education {
    id?: number;
    school: String;
    career: String;
    start: Date;
    end: Date;

    constructor(schoool: String, career: String, start: Date, end: Date){
        this.school = schoool;
        this.career = career;
        this.start = start;
        this.end = end;
    }
}