import { Router } from "express";
import { GetDeliveries } from "./controllers/GetDeliveriesController";
import { RegisterDelivery } from "./controllers/RegisterDeliveriesController";

const router = Router();

router.post("/createdelivery", RegisterDelivery);
router.get("/getdeliveries", GetDeliveries);
router.get("/deliveries", GetDeliveries);

export { router };
