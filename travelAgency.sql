CREATE DATABASE  IF NOT EXISTS `travel_agency` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `travel_agency`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: travel_agency
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `agents`
--

DROP TABLE IF EXISTS `agents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agents` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `surnames` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `phone` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agents`
--

LOCK TABLES `agents` WRITE;
/*!40000 ALTER TABLE `agents` DISABLE KEYS */;
INSERT INTO `agents` VALUES (1,'Kayla','McCarl','Apt 9501','kmccarl0@engadget.com','825-274-8016'),(2,'Andrei','Fane','PO Box 55343','afane1@princeton.edu','264-957-9741'),(3,'Jamaal','Poyner','Apt 307','jpoyner2@cbc.ca','443-406-1472'),(4,'Evvy','Schruur','18th Floor','eschruur3@tuttocitta.it','178-923-6379'),(5,'Gilberte','Riches','Flores 15','griches4@trellian.com','841-171-2755'),(14,'Diego','Perez Quevedo','Marques 83','diego122@gmail.com','65080623555');
/*!40000 ALTER TABLE `agents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clients` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `surnames` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `dni` varchar(45) DEFAULT NULL,
  `phone` varchar(50) NOT NULL,
  `postal_code` varchar(20) DEFAULT NULL,
  `city` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (1,'Stevie','Bickerdyke','4th Floor','sbickerdyke0@adobe.com','52041990C','907-731-1689','756 12','Lidečko'),(2,'Kevan','Wheatley','9th Floor','kwheatley1@moonfruit.com','52492214P','141-953-9582','1728','København'),(3,'Lexy','Haugen','Room 979','lhaugen2@netscape.com','52446664O','737-363-8932',NULL,'He’an'),(4,'Rubina','Bunney','PO Box 99231','rbunney3@forbes.com','52489545G','660-327-0672',NULL,'Diawara'),(5,'Rockie','Sharman','Apt 359','rsharman4@mlb.com','52054293B','416-759-2500','3636','General Enrique Mosconi'),(6,'Althea','Pohlke','Apt 206','apohlke5@pen.io','52716582Y','146-436-7620','507 52','Ostroměř'),(7,'Alex','Hast','5th Floor','ahast6@merriam-webster.com','52184922F','727-302-4332','5900','Villa María'),(8,'Farrel','Bruyntjes','14th Floor','fbruyntjes7@dion.ne.jp','52487762L','494-472-6326',NULL,'Hefu'),(9,'Odette','Oller','Suite 90','ooller8@npr.org','52924480U','646-210-6037',NULL,'Taramana'),(10,'Lauritz','Warren','Room 127','lwarren9@yahoo.com','52260787W','906-594-7888',NULL,'Xiamujiao'),(11,'Emery','Moro','Room 897','emoroa@meetup.com','52358698A','507-574-8169','77529 CEDEX','Coulommiers'),(12,'Amie','Bamber','PO Box 73916','abamberb@mail.ru','52390166V','687-852-4784',NULL,'Mirimire'),(13,'Kimberley','Belf','Apt 1030','kbelfc@sourceforge.net','52548046A','173-416-7932',NULL,'Fuzhiping'),(14,'Gil','Crookshank','18th Floor','gcrookshankd@prweb.com','52092672M','997-348-8040',NULL,'Metsamor'),(15,'Adda','Glaves','Apt 1378','aglavese@cnn.com','52546834L','283-201-1089',NULL,'Gēdo'),(16,'Jean','Mulmuray','Room 1434','jmulmurayf@nbcnews.com','52641512Y','413-611-2984','6041','Manaloal'),(17,'Rosanna','Sloane','Room 755','rsloaneg@huffingtonpost.com','52971640Y','240-834-7264',NULL,'Sangmélima'),(19,'Maurits','Shitliffe','10th Floor','mshitliffei@php.net','52674634W','131-778-4594','18190','Kut Chum'),(20,'Chandal','Tolland','PO Box 64897','ctollandj@163.com','52766332P','191-504-1318',NULL,'Qaryat al Qābil'),(21,'Ursula','Torres Villa','Pintor 20','ursulator@gmail.com','52163227g','630506227','38007','Málaga'),(46,'Alvaro','Perez Salcedo','Tesla 120','Alvaro@gmail.com','53153449k','735506227','39307','Cadiz');
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `travels`
--

DROP TABLE IF EXISTS `travels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `travels` (
  `id` int NOT NULL AUTO_INCREMENT,
  `destination_country` varchar(100) DEFAULT NULL,
  `destination_city` varchar(100) DEFAULT NULL,
  `length_of_stay` varchar(45) DEFAULT NULL,
  `price` decimal(8,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `travels`
--

LOCK TABLES `travels` WRITE;
/*!40000 ALTER TABLE `travels` DISABLE KEYS */;
INSERT INTO `travels` VALUES (1,'Canada','Baie-Saint-Paul','8',3433.39),(2,'South Africa','Dordrecht','11',4852.74),(3,'Japan','Shōbara','4',4309.61),(4,'China','Chengtou','4',4066.70),(5,'Denmark','København','16',3469.94),(6,'Iran','Semīrom','9',4200.08),(7,'Philippines','Calanogas','2',4559.48),(8,'China','Dong’an','3',4947.98),(9,'Philippines','Lucapon','6',5627.65),(10,'Canada','Iqaluit','19',4578.24),(11,'China','Qian’an','5',4206.38),(12,'Greece','Lamía','4',3669.78),(13,'Sweden','Stockholm','1',4955.22),(15,'Mauritius','Dubreuil','7',3285.16),(16,'Russia','Emar','10',3925.58),(17,'China','Simao','1',4493.73),(18,'Honduras','Nueva Ocotepeque','14',4575.70),(19,'China','Jihuluntu Sumu','5',4000.52),(20,'Czech Republic','Libouchec','11',3975.67),(21,'Spain','Madrid','4',2500.50);
/*!40000 ALTER TABLE `travels` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-11 16:28:48
