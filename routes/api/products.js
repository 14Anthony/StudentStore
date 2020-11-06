import { router } from "express";
import productController from "../../controllers/productController.js";

// Matches with "/api/products"
router
    .route("/")
    .get(productController.findAll)
    .post(productController.create);

// Matches with "/api/products/:id"
router
  .route("/:id")
  .get(productController.findById)
  .put(productController.update)
  .delete(productController.remove);

  export default router;