export enum ProductType {
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
    tags: any[];
    nutritionalInfo: any[];
    slug: string;
    shortDescription: string;


    constructor(options:{
        id: number;
        name: string;
        type: string;
        description: string;
        stock: number;
        photo: string;
        price: number;
        tags: any[];
        nutritionalInfo: any[];
        slug: string;
        shortDescription: string;
    }){
        // Object.assign(this, options); <= tout initialiser d'un coup mais sale
        this.id = options.id;
        this.name = options.name;
        // this.type = options.type;
        switch (options.type){
            case 'STARTER' :
                this.type = ProductType.Entree;
                break;
            case 'MAIN_COURSE':
                this.type = ProductType.Plat;
                break;
            case 'DESSERT':
                this.type = ProductType.Dessert;
                break;
            default: this.type = ProductType.Plat;
        }

        this.description = options.description;
        this.stock = options.stock;
        this.photo = options.photo;
        this.price = options.price;
        this.tags = options.tags;
        this.nutritionalInfo = options.nutritionalInfo;
        this.slug = options.slug;
        this.shortDescription = options.description.substring(0, 100);
    }
}

