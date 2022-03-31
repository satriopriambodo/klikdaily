// const { Stock } = require("../models");

// class Controller {
//   static allStock(req, res) {
//     Stock.findAll()
//       .then((result) => {
//         res.status(200).json(result);
//       })
//       .catch((err) => {
//         res.status(500).json({ message: err.message });
//       });
//   }

//   static adjustmentProduct(req, res) {
//     const input = {
//       location: req.body.location,
//       product: req.body.product,
//       quantity: req.body.quantity,
//     };

//     Stock.update(input, {
//       where: {
//         id: +req.params.id,
//       },
//     })
//     .then(() => {
//         res.status(200).json({message: "Stock Updated"})
//     })
//     .catch((err) => {

//     })
//   }
// }

// module.exports = Controller;

const { Stock } = require("../models");

const allStock = async (req, res) => {
  try {
    const result = await Stock.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const getStockById = async (req, res) => {
  try {
    const id = +req.params.id;
    const result = await Stock.findByPk(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const adjustmentStock = async (req, res) => {
  try {
    const { location, product, quantity } = req.body;
    const { id } = req.params;

    const findStock = await Stock.findByPk(id);
    if (findStock) {
      const result = await Stock.update(
        { location, product, quantity },
        {
          where: { id },
          returning: true,
        }
      );
      res.status(200).json({ result: result[1][0] });
    } else {
      res.status(404).json({ message: `Stock with id ${id} not found` });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { allStock, adjustmentStock, getStockById };
