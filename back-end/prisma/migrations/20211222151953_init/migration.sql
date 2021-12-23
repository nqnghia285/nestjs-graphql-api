-- CreateEnum
CREATE TYPE "MimeType" AS ENUM ('gif', 'jpeg', 'pipeg', 'png', 'svg');

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "mime_type" "MimeType" NOT NULL DEFAULT E'jpeg';
