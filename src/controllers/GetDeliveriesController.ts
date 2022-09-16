import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export async function GetDeliveries(request: Request, response: Response) {
	const deliveries = await prismaClient.delivery.findMany();
	response.status(200).json(deliveries);
}
