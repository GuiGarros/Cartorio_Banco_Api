-- AlterTable
ALTER TABLE `compras` ADD COLUMN `id_venda` INTEGER NOT NULL DEFAULT 21;

-- AlterTable
ALTER TABLE `vendas` ADD COLUMN `id_compra` INTEGER NOT NULL DEFAULT 4;
