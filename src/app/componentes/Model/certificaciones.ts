export class certificaciones {
    id?: number;
    title: String;
    school: String;
    img: String;
    url: String;

    constructor(title: String, school: String, img: String, url: String){
        this.title = title;
        this.school = school;
        this.img = img;
        this.url = url;
    }
}