export class school {
    id?: number;
    name: String;
    img: String;
    url: String;

    constructor(name: String, img: String, url: String){
        this.name = name;
        this.img = img;
        this.url = url;
    }
}