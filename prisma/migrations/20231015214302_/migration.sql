/*
  Warnings:

  - You are about to drop the column `metros_quadrados` on the `imovel` table. All the data in the column will be lost.
  - You are about to drop the column `metros_quadrados_construidos` on the `imovel` table. All the data in the column will be lost.
  - You are about to drop the column `valor` on the `imovel` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `compras_id_carro_fkey` ON `compras`;

-- AlterTable
ALTER TABLE `compras` ADD COLUMN `descricao` VARCHAR(191) NULL,
    ADD COLUMN `titulo` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `imovel` DROP COLUMN `metros_quadrados`,
    DROP COLUMN `metros_quadrados_construidos`,
    DROP COLUMN `valor`,
    ADD COLUMN `titulo` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `vendas` ADD COLUMN `descricao` VARCHAR(191) NULL,
    ADD COLUMN `titulo` VARCHAR(191) NULL;
