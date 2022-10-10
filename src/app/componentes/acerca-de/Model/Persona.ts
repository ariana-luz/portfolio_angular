export class persona {
    id?: number;
    fullname: String;
    backImage: String;
    image: String;

    constructor(fullname: String,backImage: String, image: String){
        this.fullname = fullname;
        this.backImage = backImage;
        this.image = image;

    }
}