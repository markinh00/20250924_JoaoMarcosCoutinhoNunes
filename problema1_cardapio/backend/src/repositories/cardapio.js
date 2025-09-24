import fs from "fs";
import path from "path";

const filePath = path.resolve("cardapio.json");

export function getCardapioRepository() {
  const data = fs.readFileSync(filePath, "utf-8");
  const cardapio = JSON.parse(data);

  cardapio.sort((a, b) => {
    if (a.categoria < b.categoria) return -1;
    if (a.categoria > b.categoria) return 1;
    return 0;
  });

  return cardapio;
}

export function searchProductsreposotory(nomeBusca) {
  const data = fs.readFileSync(filePath, "utf-8");
  const cardapio = JSON.parse(data);

  const results = cardapio.filter(produto =>
    produto.nome.toLowerCase().includes(nomeBusca.toLowerCase())
  );

  return results;
}
