/*
  Warnings:

  - A unique constraint covering the columns `[nip]` on the table `Enterprise` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `confirmPassword` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passwordResetExpires` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passwordResetToken` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surname` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "confirmPassword" TEXT NOT NULL,
ADD COLUMN     "passwordResetExpires" INTEGER NOT NULL,
ADD COLUMN     "passwordResetToken" TEXT NOT NULL,
ADD COLUMN     "surname" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Enterprise_nip_key" ON "Enterprise"("nip");
