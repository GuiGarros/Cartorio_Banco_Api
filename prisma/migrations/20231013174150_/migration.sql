-- CreateTable
CREATE TABLE `carros` (
    `id_carro` INTEGER NOT NULL AUTO_INCREMENT,
    `ano` VARCHAR(191) NOT NULL,
    `modelo` VARCHAR(191) NOT NULL,
    `fabricacao` VARCHAR(191) NOT NULL,
    `marca` VARCHAR(191) NOT NULL,
    `motor` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `carros_id_carro_key`(`id_carro`),
    PRIMARY KEY (`id_carro`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `compras` (
    `id_compra` INTEGER NOT NULL AUTO_INCREMENT,
    `id_usuario` INTEGER NOT NULL,
    `cpf_comprador` VARCHAR(191) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `id_contrato` INTEGER NOT NULL,
    `endereco_meta_comprador` VARCHAR(191) NOT NULL,
    `endereco_meta_vendedor` VARCHAR(191) NOT NULL,
    `data` DATETIME(3) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `id_imovel` INTEGER NOT NULL,
    `endereco_bloco_compra` VARCHAR(191) NOT NULL,
    `id_carro` INTEGER NOT NULL,
    `tipo` INTEGER NOT NULL,

    UNIQUE INDEX `compras_id_compra_key`(`id_compra`),
    PRIMARY KEY (`id_compra`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contratos` (
    `id_contrato` INTEGER NOT NULL AUTO_INCREMENT,
    `endereco_contrato` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `contratos_id_contrato_key`(`id_contrato`),
    UNIQUE INDEX `contratos_endereco_contrato_key`(`endereco_contrato`),
    PRIMARY KEY (`id_contrato`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `imovel` (
    `id_patrimonio` INTEGER NOT NULL AUTO_INCREMENT,
    `valor` DOUBLE NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `metros_quadrados` VARCHAR(191) NOT NULL,
    `metros_quadrados_construidos` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `id_proprietario` INTEGER NOT NULL,

    UNIQUE INDEX `imovel_id_patrimonio_key`(`id_patrimonio`),
    PRIMARY KEY (`id_patrimonio`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios` (
    `id_usuarios` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `data_nascimento` VARCHAR(191) NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `endereco_meta_mask` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `usuarios_id_usuarios_key`(`id_usuarios`),
    UNIQUE INDEX `usuarios_usuario_key`(`usuario`),
    UNIQUE INDEX `usuarios_cpf_key`(`cpf`),
    UNIQUE INDEX `usuarios_email_key`(`email`),
    UNIQUE INDEX `usuarios_endereco_meta_mask_key`(`endereco_meta_mask`),
    PRIMARY KEY (`id_usuarios`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vendas` (
    `id_venda` INTEGER NOT NULL AUTO_INCREMENT,
    `id_vendedor` INTEGER NOT NULL,
    `cpf_vendedor` VARCHAR(191) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `endereco_contrato` VARCHAR(191) NOT NULL,
    `endereco_meta_comprador` VARCHAR(191) NOT NULL,
    `endereco_meta_vendedor` VARCHAR(191) NOT NULL,
    `data` DATETIME(3) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `id_patrimonio` INTEGER NOT NULL,
    `endereco_bloco_compra` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `vendas_id_venda_key`(`id_venda`),
    PRIMARY KEY (`id_venda`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `compras` ADD CONSTRAINT `compras_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios`(`id_usuarios`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compras` ADD CONSTRAINT `compras_id_contrato_fkey` FOREIGN KEY (`id_contrato`) REFERENCES `contratos`(`id_contrato`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compras` ADD CONSTRAINT `compras_id_imovel_fkey` FOREIGN KEY (`id_imovel`) REFERENCES `imovel`(`id_patrimonio`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compras` ADD CONSTRAINT `compras_id_carro_fkey` FOREIGN KEY (`id_carro`) REFERENCES `carros`(`id_carro`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `imovel` ADD CONSTRAINT `imovel_id_proprietario_fkey` FOREIGN KEY (`id_proprietario`) REFERENCES `usuarios`(`id_usuarios`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vendas` ADD CONSTRAINT `vendas_id_vendedor_fkey` FOREIGN KEY (`id_vendedor`) REFERENCES `usuarios`(`id_usuarios`) ON DELETE RESTRICT ON UPDATE CASCADE;
