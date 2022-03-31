const express = require("express");
const router = express.Router();
const stockController = require("../controllers/stockController");

router.get("/klikdaily/stocks", stockController.allStock);

router.get("/klikdaily/logs/:id", stockController.getStockById);

router.put("/klikdaily/adjustment/:id", stockController.adjustmentStock);

router.use((err, req, res, next) => {
  const code = err.code || 500;
  const message = err.message || "Internal server error";

  res.status(code).json({ code, message });
});

module.exports = router;
