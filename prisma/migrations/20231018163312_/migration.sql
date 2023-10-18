/*
  Warnings:

  - You are about to drop the column `cpf_comprador` on the `compras` table. All the data in the column will be lost.
  - You are about to drop the column `data` on the `compras` table. All the data in the column will be lost.
  - You are about to drop the column `endereco_bloco_compra` on the `compras` table. All the data in the column will be lost.
  - You are about to drop the column `id_carro` on the `compras` table. All the data in the column will be lost.
  - You are about to drop the column `id_contrato` on the `compras` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `compras` table. All the data in the column will be lost.
  - You are about to drop the column `cpf_vendedor` on the `vendas` table. All the data in the column will be lost.
  - You are about to drop the column `data` on the `vendas` table. All the data in the column will be lost.
  - You are about to drop the column `endereco_bloco_compra` on the `vendas` table. All the data in the column will be lost.
  - Added the required column `endereco_contrato` to the `compras` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `compras` DROP FOREIGN KEY `compras_id_contrato_fkey`;

-- AlterTable
ALTER TABLE `compras` DROP COLUMN `cpf_comprador`,
    DROP COLUMN `data`,
    DROP COLUMN `endereco_bloco_compra`,
    DROP COLUMN `id_carro`,
    DROP COLUMN `id_contrato`,
    DROP COLUMN `tipo`,
    ADD COLUMN `endereco_contrato` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `vendas` DROP COLUMN `cpf_vendedor`,
    DROP COLUMN `data`,
    DROP COLUMN `endereco_bloco_compra`;
