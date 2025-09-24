import { getCardapioRepository, searchProductsreposotory } from "../repositories/cardapio.js";

export function getCardapioService() {
    const cardapio = getCardapioRepository();
    return cardapio;
}

export function searchproductsService(nomeBusca){
    const results = searchProductsreposotory(nomeBusca);
    return results;
}