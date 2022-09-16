-- CreateTable
CREATE TABLE "deliveries" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "delivery_date" TEXT NOT NULL,
    "start_address_name" TEXT NOT NULL,
    "start_coordinates" JSONB NOT NULL,
    "dest_addres_name" TEXT NOT NULL,
    "destiny_coordinates" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "deliveries_pkey" PRIMARY KEY ("id")
);
