import { Router } from "express";
import { DeleteDelivery } from "./controllers/DeleteDeliveryController";
import { GetDeliveries } from "./controllers/GetDeliveriesController";
import { RegisterDelivery } from "./controllers/RegisterDeliveriesController";

const router = Router();

router.post("/createdelivery", RegisterDelivery);
router.get("/getdeliveries", GetDeliveries);
router.delete("/deletedelivery", DeleteDelivery);

export { router };
