import { Request, Response } from "express";

export const healthStatus = (req: Request, res: Response) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
};
