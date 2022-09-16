import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export async function RegisterDelivery(request: Request, response: Response) {
	const {
		name,
		delivery_date,
		start_address_name,
		start_coordinates,
		dest_addres_name,
		destiny_coordinates,
	} = request.body.data;

	await prismaClient.delivery.create({
		data: {
			name,
			delivery_date,
			start_address_name,
			start_coordinates: JSON.parse(start_coordinates),
			dest_addres_name,
			destiny_coordinates: JSON.parse(destiny_coordinates),
		},
	});

	response.status(200).send();
}
