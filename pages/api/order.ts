import { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

export default methods({
  async post(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({
      query: req.query.productId,
    });
  },
});
