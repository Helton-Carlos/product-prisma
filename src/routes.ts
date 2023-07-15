import { Router } from "express";
import { CreateProductController } from "./controller/CreateProductController";

const router = Router();

const CreateProduct = new CreateProductController;

router.post("/product", CreateProduct.handle);

export { router };