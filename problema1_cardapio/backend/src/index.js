import express from "express";
import {cardapioRoutes} from "./routes/cardapio.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/cardapio", cardapioRoutes);

app.get("/", (req, res) => {
  res.send("Servidor Express está rodando");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
