import { Response } from "express";
export const demo = (_: any, res: Response) => {
  res.json({ status: "ok 2023" });
};
