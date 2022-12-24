import Product from "../model/productSchema.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    return res.status(200).json(products);
  } catch (error) {
    console.log("Get Product Error:", error.message);
    return res.status(500).json({ Error_Message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;

    const product = await Product.findOne({ id: id });

    return res.status(200).json(product);

    
  } catch (error) {
    console.log("Get Product by Id Error:", error.message);
    return res.status(500).json({ Error_Message: error.message });
  }
};
