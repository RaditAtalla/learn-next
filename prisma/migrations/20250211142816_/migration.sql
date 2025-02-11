-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_memberOfTeamId_fkey`;

-- DropIndex
DROP INDEX `User_memberOfTeamId_fkey` ON `User`;

-- AlterTable
ALTER TABLE `User` MODIFY `memberOfTeamId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_memberOfTeamId_fkey` FOREIGN KEY (`memberOfTeamId`) REFERENCES `Team`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
