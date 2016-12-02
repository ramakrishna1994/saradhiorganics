

--
-- Database: `saradhi_organics`
--

CREATE DATABASE `saradhi_organics`;
-- --------------------------------------------------------

--
-- Table structure for table `chemicals_details`
--

DROP TABLE IF EXISTS `saradhi_organics`.`chemicals_details`;
CREATE TABLE IF NOT EXISTS `saradhi_organics`.`chemicals_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `catalogue_no` varchar(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `cas_no` varchar(255) NOT NULL,
  `application` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;


