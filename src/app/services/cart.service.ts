import { Injectable } from '@angular/core';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productInfo: Array<{ product: Product, quantity: number; }> = [];
  totalAmount: number;
  totalProducts: number;

  constructor() {
    this.emptyCart();
  }

  // Ajoute / Incrémente un produit au panier
  addProduct(product: Product) {
    // le produit en cours est-il déjà dans le panier?
    const index = this.productInfo.findIndex(pInfo => pInfo.product.id === product.id);
    if (index !== -1) {// trouvé !
      const pInfo = this.productInfo[index]; // produit + quantité
  //    this.productInfo[index]  = {...pInfo, quantity: pInfo.quantity + 1};
  // ligne ci-dessus fait un clonage de l'objet. On evite de modifier l'objet directement.
      this.productInfo[index].quantity++;
    } else { // pas trouvé
       this.productInfo.push({product, quantity: 1});
    }
    // Incrémente le nombre total d'articles et recalcule le montant total
    this.totalProducts++;
    this.totalAmount = this.totalAmount + product.price;
  }

  // Décrémente / Retire un produit du panier
  removeProduct(product: Product) {
    const index = this.productInfo.findIndex(pInfo => pInfo.product.id === product.id);
    if (index !== -1) {  // trouvé !
      this.productInfo[index].quantity--;
      if (this.productInfo[index].quantity === 0) {
        this.productInfo.splice(index, 1);
      }
      // Décrémente le nombre total d'articles et recalcule le montant total
      this.totalProducts--;
      this.totalAmount = this.totalAmount - product.price;
    }
  }

  // Renvoie le nb d'unités dans le panier pour un produit précis
  getNumForProduct(productId: number): number {
    const pInfo = this.productInfo.find(pInf => pInf.product.id === productId);
    return pInfo ? pInfo.quantity : 0;
  }

  // Renvoie le contenu du panier
  getAllProducts() {
    return this.productInfo;
  }

    emptyCart() {
    this.productInfo   = [];
    this.totalAmount = 0;
    this.totalProducts = 0;
  }

}
