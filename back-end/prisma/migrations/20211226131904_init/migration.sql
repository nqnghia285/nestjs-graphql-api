/*
  Warnings:

  - You are about to drop the column `discount_id` on the `Laptop` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Laptop" DROP CONSTRAINT "Laptop_discount_id_fkey";

-- AlterTable
ALTER TABLE "Laptop" DROP COLUMN "discount_id";

-- CreateTable
CREATE TABLE "_DiscountToLaptop" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DiscountToLaptop_AB_unique" ON "_DiscountToLaptop"("A", "B");

-- CreateIndex
CREATE INDEX "_DiscountToLaptop_B_index" ON "_DiscountToLaptop"("B");

-- AddForeignKey
ALTER TABLE "_DiscountToLaptop" ADD FOREIGN KEY ("A") REFERENCES "Discount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DiscountToLaptop" ADD FOREIGN KEY ("B") REFERENCES "Laptop"("id") ON DELETE CASCADE ON UPDATE CASCADE;
