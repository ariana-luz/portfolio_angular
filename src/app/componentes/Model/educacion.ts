export class educacion {
    id?: number;
    school: String;
    career: String;
    img: String;
    url: String;

    constructor(schoool: String, career: String, img: String, url: String){
        this.school = schoool;
        this.career = career;
        this.img = img;
        this.url = url;
    }
}