-- AlterTable
ALTER TABLE "Laptop" ADD COLUMN     "battery" VARCHAR(255) NOT NULL DEFAULT E'None',
ADD COLUMN     "origin" VARCHAR(255) NOT NULL DEFAULT E'None';