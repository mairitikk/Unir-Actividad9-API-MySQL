-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Blog
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `Blog` ;

-- -----------------------------------------------------
-- Schema Blog
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Blog` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;
USE `Blog` ;

-- -----------------------------------------------------
-- Table `Blog`.`autores`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Blog`.`autores` ;

CREATE TABLE IF NOT EXISTS `Blog`.`autores` (
  `idautores` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `imagen_url` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idautores`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Blog`.`posts`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Blog`.`posts` ;

CREATE TABLE IF NOT EXISTS `Blog`.`posts` (
  `idposts` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `description` MEDIUMTEXT NULL,
  `fecha de creacion` DATE NOT NULL,
  `categoria` VARCHAR(45) NOT NULL,
  `autores_idautores` INT NOT NULL,
  PRIMARY KEY (`idposts`, `autores_idautores`),
  INDEX `fk_posts_autores_idx` (`autores_idautores` ASC) VISIBLE,
  CONSTRAINT `fk_posts_autores`
    FOREIGN KEY (`autores_idautores`)
    REFERENCES `Blog`.`autores` (`idautores`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
