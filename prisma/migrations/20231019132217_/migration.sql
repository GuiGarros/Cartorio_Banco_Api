-- AlterTable
ALTER TABLE `compras` ADD COLUMN `endereco` VARCHAR(191) NOT NULL DEFAULT 'Alameda jequitiba 7777, JD. Calegaris';

-- AlterTable
ALTER TABLE `vendas` ADD COLUMN `endereco` VARCHAR(191) NOT NULL DEFAULT 'Alameda jequitiba 7777, JD. Calegaris';
