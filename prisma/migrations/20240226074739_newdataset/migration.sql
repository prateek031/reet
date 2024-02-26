-- CreateTable
CREATE TABLE `user` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(255) NULL,
    `last_name` VARCHAR(255) NULL,
    `email` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LatestForSalePropertyData` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NULL,
    `propertyStatus` VARCHAR(255) NULL,
    `label` VARCHAR(255) NULL,
    `price` VARCHAR(255) NULL,
    `bed` INTEGER NOT NULL,
    `bath` INTEGER NOT NULL,
    `balcony` INTEGER NOT NULL,
    `area` INTEGER NOT NULL,
    `img` VARCHAR(255) NULL,
    `date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FeaturedProperty` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `city` VARCHAR(255) NULL,
    `title` VARCHAR(255) NULL,
    `label` VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,
    `type` VARCHAR(255) NULL,
    `img` VARCHAR(255) NULL,
    `imgLabel` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FindPropertiesInTheseCities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NULL,
    `img` VARCHAR(255) NULL,
    `city` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FeaturedPropertyInCorporateLayout` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NULL,
    `img` VARCHAR(255) NULL,
    `city` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LatestPropertyInClassicLayout` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `img` VARCHAR(255) NULL,
    `propertyStatus` VARCHAR(255) NULL,
    `label` VARCHAR(255) NULL,
    `country` VARCHAR(255) NULL,
    `title` VARCHAR(255) NULL,
    `price` VARCHAR(255) NULL,
    `details` VARCHAR(255) NULL,
    `home` VARCHAR(255) NULL,
    `bed` INTEGER NULL,
    `bath` INTEGER NULL,
    `sqft` INTEGER NULL,
    `rooms` INTEGER NULL,
    `date` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FeaturedPropertyInClassicLayout` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `img` VARCHAR(255) NULL,
    `title` VARCHAR(255) NULL,
    `place` VARCHAR(255) NULL,
    `details` VARCHAR(255) NULL,
    `sqft` VARCHAR(255) NULL,
    `price` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `listingpropertyinclassiclayout` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `img` VARCHAR(255) NULL,
    `propertyStatus` VARCHAR(255) NULL,
    `label` VARCHAR(255) NULL,
    `country` VARCHAR(255) NULL,
    `title` VARCHAR(255) NULL,
    `price` VARCHAR(255) NULL,
    `details` VARCHAR(255) NULL,
    `home` VARCHAR(255) NULL,
    `bed` INTEGER NULL,
    `bath` INTEGER NULL,
    `sqft` INTEGER NULL,
    `rooms` INTEGER NULL,
    `date` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ListingPropertyInModernVideoLayout` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `img` VARCHAR(255) NULL,
    `propertyStatus` VARCHAR(255) NULL,
    `label` VARCHAR(255) NULL,
    `country` VARCHAR(255) NULL,
    `title` VARCHAR(255) NULL,
    `price` VARCHAR(255) NULL,
    `details` VARCHAR(255) NULL,
    `home` VARCHAR(255) NULL,
    `bed` INTEGER NULL,
    `bath` INTEGER NULL,
    `sqft` INTEGER NULL,
    `rooms` INTEGER NULL,
    `date` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LatestPropertyData` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `img` VARCHAR(191) NULL,
    `propertyStatus` VARCHAR(255) NULL,
    `label` VARCHAR(255) NULL,
    `country` VARCHAR(255) NULL,
    `title` VARCHAR(255) NULL,
    `price` VARCHAR(255) NULL,
    `details` VARCHAR(255) NULL,
    `bed` INTEGER NULL,
    `bath` INTEGER NULL,
    `sqft` INTEGER NULL,
    `rooms` INTEGER NULL,
    `date` DATETIME(3) NULL,
    `rent` BOOLEAN NULL,
    `sale` BOOLEAN NULL,
    `propertyType` VARCHAR(255) NULL,
    `agencies` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PropertyOfTheDay` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(255) NULL,
    `title` VARCHAR(255) NULL,
    `img` VARCHAR(191) NULL,
    `place` VARCHAR(255) NULL,
    `address` VARCHAR(255) NULL,
    `details` VARCHAR(255) NULL,
    `sqft` VARCHAR(255) NULL,
    `price` VARCHAR(255) NULL,
    `path` VARCHAR(255) NULL,
    `date` DATETIME(3) NULL,
    `propertyStatus` VARCHAR(255) NULL,
    `label` VARCHAR(255) NULL,
    `country` VARCHAR(255) NULL,
    `home` VARCHAR(255) NULL,
    `bed` INTEGER NULL,
    `bath` INTEGER NULL,
    `rooms` INTEGER NULL,
    `propertyType` VARCHAR(255) NULL,
    `agencies` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PropertyListing` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `img` VARCHAR(191) NULL,
    `propertyStatus` VARCHAR(255) NULL,
    `label` VARCHAR(255) NULL,
    `country` VARCHAR(255) NULL,
    `title` VARCHAR(255) NULL,
    `price` VARCHAR(255) NULL,
    `details` VARCHAR(255) NULL,
    `home` VARCHAR(255) NULL,
    `bed` INTEGER NULL,
    `bath` INTEGER NULL,
    `sqft` INTEGER NULL,
    `rooms` INTEGER NULL,
    `date` DATETIME(3) NULL,
    `rent` BOOLEAN NULL,
    `sale` BOOLEAN NULL,
    `propertyType` VARCHAR(255) NULL,
    `agencies` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LatestPropertyListingInEnterprise` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `img` VARCHAR(191) NULL,
    `type` VARCHAR(255) NULL,
    `propertyStatus` VARCHAR(255) NULL,
    `label` VARCHAR(255) NULL,
    `country` VARCHAR(255) NULL,
    `title` VARCHAR(255) NULL,
    `price` VARCHAR(255) NULL,
    `details` VARCHAR(255) NULL,
    `home` VARCHAR(255) NULL,
    `bed` INTEGER NULL,
    `bath` INTEGER NULL,
    `sqft` INTEGER NULL,
    `rooms` INTEGER NULL,
    `date` DATETIME(3) NULL,
    `video` VARCHAR(255) NULL,
    `propertyType` VARCHAR(255) NULL,
    `agencies` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
