import { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    const productId = req.query.id;
    res.status(200).send(`Hola soy el GET de auth! ` + productId);
  },
});
