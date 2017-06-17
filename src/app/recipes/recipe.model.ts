export class Recipe {
    
    public name: string;
    public description: string;
    public imageRecipePath: string;

    constructor(name: string, desc: string, imgRecipePath: string){
        this.name = name;
        this.description = desc;
        this.imageRecipePath = imgRecipePath;
    }
}