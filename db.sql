create database exercicios;

-- ************************************** `usuario`
use exercicios;
CREATE TABLE `usuario`
(
 `id_user` integer(45) NOT NULL AUTO_INCREMENT ,
 `email`   varchar(45) NOT NULL ,
 `pass`    varchar(45) NOT NULL ,

PRIMARY KEY (`id_user`)
);


-- ************************************** `imc`
USE exercicios;
CREATE TABLE `imc`
(
 `id_imc`     integer(45) NOT NULL auto_increment ,
 `id_user`    integer(45) NOT NULL ,
 `valor_imc`  float NOT NULL ,
 `created_at` timestamp NOT NULL ,

PRIMARY KEY (`id_imc`),
KEY `fkIdx_63` (`id_user`),
CONSTRAINT `FK_63` FOREIGN KEY `fkIdx_63` (`id_user`) REFERENCES `usuario` (`id_user`)
);


-- ************************************** `grupo`
USE exercicios;
CREATE TABLE `grupo`
(
 `id_grupo`    integer(20) NOT NULL auto_increment ,
 `nome`        varchar(45) NOT NULL ,
 `description` varchar(75) ,

PRIMARY KEY (`id_grupo`)
);

-- ************************************** `alimentos`
USE exercicios;
CREATE TABLE `alimentos`
(
 `id_alimento`      integer(45) NOT NULL auto_increment,
 `id_user`          integer(45) NOT NULL ,
 `id_grupo`         integer(20) NOT NULL ,
 `nome`             varchar(45) NOT NULL ,
 `quatidade`        int NOT NULL ,
 `valor`            float ,
 `proteina`         float NOT NULL ,
 `carboidrato`      float NOT NULL ,
 `valor_energetico` float NOT NULL ,

PRIMARY KEY (`id_alimento`),
KEY `fkIdx_30` (`id_grupo`),
CONSTRAINT `FK_30` FOREIGN KEY `fkIdx_30` (`id_grupo`) REFERENCES `grupo` (`id_grupo`),
KEY `fkIdx_57` (`id_user`),
CONSTRAINT `FK_57` FOREIGN KEY `fkIdx_57` (`id_user`) REFERENCES `usuario` (`id_user`)
);




-- ************************************** `receita`
use exercicios;
CREATE TABLE `receita`
(
 `id_receita` integer(45) NOT NULL auto_increment,
 `nome`       varchar(45) NOT NULL ,
 `descricao`  varchar(100) NOT NULL ,

PRIMARY KEY (`id_receita`)
);

-- ************************************** `ingredientes`
use exercicios;
CREATE TABLE `ingredientes`
(
 `id_alimento`     integer(45) NOT NULL ,
 `id_ingredientes` integer(45) NOT NULL auto_increment,
 `id_receita`      integer(45) NOT NULL ,

PRIMARY KEY (`id_ingredientes`),
KEY `fkIdx_80` (`id_alimento`),
CONSTRAINT `FK_80` FOREIGN KEY `fkIdx_80` (`id_alimento`) REFERENCES `alimentos` (`id_alimento`),
KEY `fkIdx_83` (`id_receita`),
CONSTRAINT `FK_83` FOREIGN KEY `fkIdx_83` (`id_receita`) REFERENCES `receita` (`id_receita`)
);

-- ************************************** `combinacao`
USE exercicios;
CREATE TABLE `combinacao`
(
 `id_combinacao`   integer(45) NOT NULL auto_increment,
 `nome`            varchar(45) NOT NULL ,
 `id_ingredientes` integer(45) NOT NULL ,
 `descricao`       varchar(45) NOT NULL ,

PRIMARY KEY (`id_combinacao`),
KEY `fkIdx_93` (`id_ingredientes`),
CONSTRAINT `FK_93` FOREIGN KEY `fkIdx_93` (`id_ingredientes`) REFERENCES `ingredientes` (`id_ingredientes`)
);
