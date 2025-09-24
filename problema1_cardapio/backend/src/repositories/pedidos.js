import fs from "fs";
import path from "path";

const filePath = path.resolve("pedidos.json");

export function createorderRepository(newOrder) {
    try {
        let pedidos = [];
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, "utf-8");
            pedidos = JSON.parse(data);
        }

        pedidos.push(newOrder);

        fs.writeFileSync(filePath, JSON.stringify(pedidos, null, 2), "utf-8");

        return newOrder;
    } catch (error) {
        console.error("Erro ao salvar o pedido:", error);
        throw error;
    }
}
