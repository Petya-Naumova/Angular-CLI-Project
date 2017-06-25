import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
    public name: string;
    public description: string;
    public imageRecipePath: string;
    public backgroundColor: string;
    public ingredients: Ingredient[];    

    constructor(name: string, desc: string, 
    imgRecipePath: string, backgroundColor: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imageRecipePath = imgRecipePath;
        this.backgroundColor = backgroundColor;
        this.ingredients = ingredients;
    }
}
