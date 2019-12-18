enum ProductType {
    Entree,
    Plat,
    Dessert}

export class Product {
    id: number;
    name: string;
    type: ProductType;
    description: string;
    stock: number;
    photo: string;
    price: number;

    constructor(){}
}

