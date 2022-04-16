/*
  Warnings:

  - A unique constraint covering the columns `[value]` on the table `Discount` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `Person` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Person` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[price]` on the table `PriceMap` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[A,B]` on the table `_DiscountToLaptop` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[A,B]` on the table `_ImageToLaptop` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[A,B]` on the table `_ImageToPost` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[A,B]` on the table `_LaptopToPost` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[A,B]` on the table `_LaptopToPurchase` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[A,B]` on the table `_LaptopToVideo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[A,B]` on the table `_PostToVideo` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Discount_value_key";

-- DropIndex
DROP INDEX "Person_email_key";

-- DropIndex
DROP INDEX "Person_phone_key";

-- DropIndex
DROP INDEX "PriceMap_price_key";

-- DropIndex
DROP INDEX "_DiscountToLaptop_AB_unique";

-- DropIndex
DROP INDEX "_DiscountToLaptop_B_index";

-- DropIndex
DROP INDEX "_ImageToLaptop_AB_unique";

-- DropIndex
DROP INDEX "_ImageToLaptop_B_index";

-- DropIndex
DROP INDEX "_ImageToPost_AB_unique";

-- DropIndex
DROP INDEX "_ImageToPost_B_index";

-- DropIndex
DROP INDEX "_LaptopToPost_AB_unique";

-- DropIndex
DROP INDEX "_LaptopToPost_B_index";

-- DropIndex
DROP INDEX "_LaptopToPurchase_AB_unique";

-- DropIndex
DROP INDEX "_LaptopToPurchase_B_index";

-- DropIndex
DROP INDEX "_LaptopToVideo_AB_unique";

-- DropIndex
DROP INDEX "_LaptopToVideo_B_index";

-- DropIndex
DROP INDEX "_PostToVideo_AB_unique";

-- DropIndex
DROP INDEX "_PostToVideo_B_index";

-- CreateIndex
CREATE UNIQUE INDEX "Discount_value_key" ON "Discount"("value");

-- CreateIndex
CREATE UNIQUE INDEX "Person_phone_key" ON "Person"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Person_email_key" ON "Person"("email" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "PriceMap_price_key" ON "PriceMap"("price");

-- CreateIndex
CREATE UNIQUE INDEX "_DiscountToLaptop_AB_unique" ON "_DiscountToLaptop"("A", "B");

-- CreateIndex
CREATE INDEX "_DiscountToLaptop_B_index" ON "_DiscountToLaptop"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ImageToLaptop_AB_unique" ON "_ImageToLaptop"("A", "B");

-- CreateIndex
CREATE INDEX "_ImageToLaptop_B_index" ON "_ImageToLaptop"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ImageToPost_AB_unique" ON "_ImageToPost"("A", "B");

-- CreateIndex
CREATE INDEX "_ImageToPost_B_index" ON "_ImageToPost"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LaptopToPost_AB_unique" ON "_LaptopToPost"("A", "B");

-- CreateIndex
CREATE INDEX "_LaptopToPost_B_index" ON "_LaptopToPost"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LaptopToPurchase_AB_unique" ON "_LaptopToPurchase"("A", "B");

-- CreateIndex
CREATE INDEX "_LaptopToPurchase_B_index" ON "_LaptopToPurchase"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LaptopToVideo_AB_unique" ON "_LaptopToVideo"("A", "B");

-- CreateIndex
CREATE INDEX "_LaptopToVideo_B_index" ON "_LaptopToVideo"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PostToVideo_AB_unique" ON "_PostToVideo"("A", "B");

-- CreateIndex
CREATE INDEX "_PostToVideo_B_index" ON "_PostToVideo"("B");
