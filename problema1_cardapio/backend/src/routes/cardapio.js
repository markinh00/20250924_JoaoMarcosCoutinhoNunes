import { getCardapioHandler, searchProductsHandler } from "../controllers/cardapio.js";
import express from "express";

export const cardapioRoutes = express.Router();

cardapioRoutes.get("/", getCardapioHandler);
cardapioRoutes.get("/search", searchProductsHandler)