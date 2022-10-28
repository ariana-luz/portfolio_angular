export class proyectos {
    id?: number;
    name: String;
    school: String;
    img: String;
    url: String;

    constructor(name: String, school: String, img: String, url: String){
        this.name = name;
        this.school = school;
        this.img = img;
        this.url = url;
    }
}