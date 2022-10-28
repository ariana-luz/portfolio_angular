export class persona {
    id?: number;
    fullname: String;
    backImage: String;
    image: String;
    profession: String;
    location: String;
    contact: String;
    company: String;
    school: String;

    constructor(fullname: String, backImage: String, image: String, profession: String, location: String, contact: String, company: String, school: String){
        this.fullname = fullname;
        this.backImage = backImage;
        this.image = image;
        this.profession = profession;
        this.location = location;
        this.contact = contact;
        this.company = company;
        this.school = school;
    }
}