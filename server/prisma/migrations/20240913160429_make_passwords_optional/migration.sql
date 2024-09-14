-- AlterTable
ALTER TABLE "User" ALTER COLUMN "confirmPassword" DROP NOT NULL,
ALTER COLUMN "passwordResetExpires" DROP NOT NULL,
ALTER COLUMN "passwordResetToken" DROP NOT NULL;
