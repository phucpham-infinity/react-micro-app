import { Response } from "express";
export const demo = (req: any, res: Response) => {
  res.json({ status: "ok 2023" });
};
