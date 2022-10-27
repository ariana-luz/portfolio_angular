export class experience {
    id?: number;
    company: String;
    position: String;
    img: String;
    url: String;

    constructor(company: String, position: String, img: String, url: String){
        this.company = company;
        this.position = position;
        this.img = img;
        this.url = url;
    }
}