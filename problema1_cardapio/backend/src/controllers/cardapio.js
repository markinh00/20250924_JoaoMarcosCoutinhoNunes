import { getCardapioService, searchproductsService } from "../services/cardapio.js";

export function getCardapioHandler(req, res) {
    const cardapio = getCardapioService();

    if (!cardapio) return res.json([]);

    res.json(cardapio);
}

export function searchProductsHandler(req, res) {
    const nome = req.query.nome;

    if (!nome) {
        return res.status(400).json({ error: "Parâmetro 'nome' é obrigatório" });
    }

    const resultados = searchproductsService(nome);

    res.json(resultados);
}
