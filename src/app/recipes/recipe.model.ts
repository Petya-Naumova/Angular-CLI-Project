export class Recipe {
    public name: string;
    public description: string;
    public imageRecipePath: string;
    public backgroundColor: string;

    constructor(name: string, desc: string, imgRecipePath: string, backgroundColor: string) {
        this.name = name;
        this.description = desc;
        this.imageRecipePath = imgRecipePath;
        this.backgroundColor = backgroundColor;
    }
}
