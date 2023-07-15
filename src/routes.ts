import { Router } from "express";
import { CreateProductController } from "./controller/CreateProductController";
import { CreateCategoryController } from "./controller/CreateCategoryController";
import { CreateProductCategoryController } from "./controller/CreateProductCategoryController";

const router = Router();

const CreateProduct = new CreateProductController;
const CreateCategory= new CreateCategoryController;
const CreateProductCategory= new CreateProductCategoryController;

router.post("/product", CreateProduct.handle);
router.post("/category", CreateCategory.handle);
router.post("/categoryProduct", CreateProductCategory.handle);

export { router };