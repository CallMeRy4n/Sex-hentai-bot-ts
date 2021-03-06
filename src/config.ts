import { config } from "dotenv";
config();

export const token: string = process.env.TOKEN;
export const prefix: string = process.env.PREFIX;
export const ownerID: string = process.env.OWNERID;