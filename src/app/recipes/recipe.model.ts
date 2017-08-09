import { Ingredient } from '../shared/models/ingredient.model';

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


// import { Ingredient } from '../shared/models';

// export class Recipe {
//     public name: string;
//     public description: string;
//     public imageRecipePath: string;
//     public backgroundColor: string;
//     public ingredients: Ingredient[];

//     constructor(rawObject:IRecipeInput) {
//         this.name = rawObject.name;
//         this.description = rawObject.description;
//         this.imageRecipePath = rawObject.imageRecipePath;
//         this.backgroundColor = rawObject.backgroundColor;
//         this.ingredients = rawObject.ingredients;
//     }
// }

// export interface IRecipeInput{
//     name: string;
//     description: string;
//     imageRecipePath: string;
//     backgroundColor: string;
//     ingredients: Array<Ingredient>;
// }
