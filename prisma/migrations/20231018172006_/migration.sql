/*
  Warnings:

  - You are about to alter the column `valor` on the `compras` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `valor` on the `vendas` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `compras` MODIFY `valor` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `vendas` MODIFY `valor` VARCHAR(191) NOT NULL;
