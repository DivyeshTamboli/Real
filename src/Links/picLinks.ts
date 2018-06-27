export class picLinks {
    imageLinks: string[] = [];
    imgUrl1: string = "./assets/images/Klas (1mm folder).jpg";
    imgUrl2: string = "./assets/images/Real Kitche CD and VT (Digital).jpg";
    imgUrl3: string = "./assets/images/Real Touch (Laminate Bank).jpg";

    constructor() {

    }
    getAllLinks() {
        this.imageLinks.push(this.imgUrl1);
        this.imageLinks.push(this.imgUrl2);
        this.imageLinks.push(this.imgUrl3);
        return this.imageLinks;
    }
}