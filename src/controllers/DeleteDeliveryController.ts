import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export async function DeleteDelivery(request: Request, response: Response) {
	const { id } = request.body;

	const setDeliveries = await prismaClient.delivery.delete({
		where: {
			id,
		},
	});
	response.status(200).json(setDeliveries);
}
