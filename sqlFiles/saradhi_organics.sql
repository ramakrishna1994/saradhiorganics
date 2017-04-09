-- phpMyAdmin SQL Dump
-- version 4.0.10.14
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Apr 08, 2017 at 11:07 PM
-- Server version: 5.6.33-cll-lve
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `saradhi_organics`
--

-- --------------------------------------------------------

--
-- Table structure for table `chemicals_details`
--

CREATE TABLE IF NOT EXISTS `chemicals_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `cas_no` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=110 ;

--
-- Dumping data for table `chemicals_details`
--

INSERT INTO `chemicals_details` (`id`, `product_name`, `cas_no`) VALUES
(24, '4-(Methyl amino)-3-nitrobenzoic acid', '41263-74-5'),
(22, 'Benzyl 2-cyanopropan-2-ylcarbamate', '100134-82-5'),
(23, 'N-BOC-derivatives of glycin,prolin,alanine,leucine', '4530-20-5,15761-39-4,15761-38-3,13139-15-6'),
(25, 'tert-butyl carbazate', '870-46-2'),
(26, '4-Methoxyphenylpropanal', '4530-20-5'),
(27, '2-chloroethoxy acetic acid', '14869-41-1'),
(28, '4-chlorobenzhydryl pierazine', '303-26-4'),
(29, '1-phenethylimidazole', '49823-14-5'),
(30, '7-ethyl tryptophol', '41340-36-7'),
(31, '2-chloro phenylglycine', '88744-36-9'),
(32, 'L-valine methylester HCl', '6306-52-1'),
(33, '4-bromo methyl propionic acid', '111128-12-2'),
(35, 'L-2-Aminobutanamide hydrochloride', '7682-20-4'),
(36, ' Methyl isothiocyanate', ' 556-61-6  '),
(37, 'N-Methyl-1-(methylthio)-2-nitroethylen-1-amine(NMSM)', '61832-41-5'),
(38, 'Acotiamide hydrochloride trihydrate', '773092-05-0'),
(41, 'HATU', '148893-10-1'),
(42, 'DTT', '3483-12-3'),
(43, 'IPTG', '367-93-1'),
(44, 'Bispinacolato Diboron', '73183-34-3'),
(45, 'X-Phos', '564483-18-7'),
(46, '4,5-Bis(Diphenylphosphino)-9,9-dimethylxanthene(Xantphos)', '161265-03-8'),
(47, 'S-Phos', '657408-07-6'),
(48, '2-(Trimethylsilyl) Ethoxymethyl Chloride', '76513-69-4'),
(49, '(R)-(+)-2,2-Bis(diphenylphosphino)-1,1-binaphthyl', '76189-55-4'),
(50, 'S-BINAP', '76189-56-5'),
(51, '(S)-(-)-2-Methyl-2-propanesulfinamide', '343338-28-3'),
(52, '2,2''-Bis(diphenylphosphino)-1,1''-binaphthalene', '98327-87-8'),
(53, '(R)-(+)-2-Methyl-2-propanesulfinamide', '196929-78-9'),
(54, 'TBTU', '125700-67-6'),
(55, 'N-(3-Dimethylaminopropyl)-N-ethylcarbodiimide hydrochloride (EDAC HCL)', '25952-53-8'),
(56, '1-Hydroxy-7-azabenzotriazole (HOAT)', '39968-33-7'),
(57, '1-Hydroxybenzotriazole anhydrous (HOBT Anhydrous)', '2592-95-2'),
(58, '1-Hydroxy benzotriazole hydrate (HOBT Monohydrate)', '123333-53-9'),
(59, 'PYBOP', '128625-52-5'),
(60, 'BOP Reagent', '56602-33-6'),
(61, 'H-b (2-Thienyl) Ala-OH', '2021-58-1'),
(62, 'PGCA', '83-30-7'),
(63, 'Phloroglucinol', '108-73-6'),
(64, '1,3,5-Trimethoxy Benzene', '621-23-8'),
(65, 'Boc-S-Benzyl-L-cysteine', '5068-28-0'),
(66, 'Boc-Lys (2-Z-Cl)-OH', '54613-99-9'),
(67, 'Boc-L-Alanine', '15761-38-3'),
(68, 'Boc-L-Serine', '3262-72-4'),
(69, 'Boc-D-Phenylalanine', '18492-49-9'),
(70, 'Boc-L-Proline', '15761-39-4'),
(71, 'Boc-L-Threonine', '2592-18-9'),
(72, 'Boc-L-Arginine HCL', '35897-34-8'),
(73, '8 Hydroxy Quinoline', '148-24-3'),
(74, 'N-Acetyl Glycine', '543-24-8'),
(75, 'Cupric Carbonate', '12069-69-1'),
(76, 'Dimedone', '126-81-8'),
(77, '4 Hydroxy Benzaldehyde', '123-08-0'),
(78, 'H-Amino adapic acid', '1118-90-7'),
(80, 'Trityl Alcohol', '76-84-6'),
(81, 'Trityl chloride', '76-83-5'),
(82, '2-CL-Z-ONSU', '65853-65-8'),
(83, 'DMAM', '97708-56-0'),
(84, '9-Fluorenyl methanol', '24324-17-2'),
(85, 'FMOC-CL', '28920-43-6'),
(86, 'FMOC Osu', '82911-69-1'),
(87, 'Benzyl chloro formate', '501-53-1'),
(88, 'Proteaseenzyme', '37259-58-8'),
(89, 'Methyl magnesium chloride', '676-58-4'),
(90, 'Iso Butyle chloro formate', '543-27-1'),
(91, 'Z-L-Tryptophan', '7432-21-5'),
(92, 'Z Tyr (tBu) OH - DCHA', '198828-72-7'),
(93, 'Z-Arg(Z2)-OH', '14611-34-8'),
(94, 'Fmoc-L-Alanine', '35661-39-3'),
(95, 'Fmoc-Lys (Z)-OH', '86060-82-4'),
(96, 'Fmoc-L-Valine', '68858-20-8'),
(97, 'Fmoc-L-isoleucine', '71989-23-6'),
(98, 'Fmoc-Glycine', '29022-11-5'),
(99, 'Fmoc-Glu(Obzl)-OH', '123639-61-2'),
(100, 'Fmoc-L-phenylalanine', '35661-40-6'),
(101, '1,3,5-Trymethyl Benzene', '108-67-8'),
(102, 'chloro sulphonic acid', '7790-94-5'),
(103, '2,3,5-Trimethyl Phenol', '697-82-5'),
(104, 'Z ONSU', '13139-17-8'),
(105, 'Benzyl Chloride', '100-44-7'),
(106, '5-Bromo-7-Azaindole', '183208-35-7'),
(107, 'cinnamyl bromide  (3-bromo-1-phenyl-1-propene)', '4392-24-9'),
(108, '2-â€‹(4-â€‹Bromophenyl)â€‹Ethylbromide', '1746-28-7'),
(109, '4-Bromo-3-Chlorosulfonylbenzoic Acid', '50803-23-1');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_name`, `password`) VALUES
(1, 'saradhi66', 'Saradhi@2');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
