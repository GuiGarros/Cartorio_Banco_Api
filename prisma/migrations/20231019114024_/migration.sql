-- AlterTable
ALTER TABLE `compras` ALTER COLUMN `id_venda` DROP DEFAULT;

-- AlterTable
ALTER TABLE `vendas` ALTER COLUMN `id_compra` DROP DEFAULT;
