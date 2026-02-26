/*
  Warnings:

  - You are about to drop the column `demoPassword` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `demoUsername` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "demoPassword",
DROP COLUMN "demoUsername";
