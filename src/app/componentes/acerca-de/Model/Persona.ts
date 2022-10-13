export class persona {
    id?: number;
    fullname: String;
    back_image: String;
    image: String;
    profession: String;
    location: String;
    contact: String;
    about: String;
    company: String;
    school: String;

    constructor(fullname: String, back_image: String, image: String, profession: String, location: String, contact: String, about: String, company: String, school: String){
        this.fullname = fullname;
        this.back_image = back_image;
        this.image = image;
        this.profession = profession;
        this.location = location;
        this.contact = contact;
        this.about= about;
        this.company = company;
        this.school = school;
    }
}