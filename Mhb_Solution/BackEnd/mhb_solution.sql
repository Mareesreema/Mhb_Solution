-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 28, 2024 at 10:33 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mhb_solution`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs_news`
--

CREATE TABLE `blogs_news` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blogs_news`
--

INSERT INTO `blogs_news` (`id`, `image`, `title`, `description`, `date`) VALUES
(5, '1724875014446.png', 'Epic Chronicles: Cosmic Convergence ', 'Join our Marvel heroes in an animated odyssey as they unite against cosmic threats, unravel secrets, and forge alliances to save the multiverse from impending chaos.', '23/09/2024'),
(6, '1724875077005.png', 'Spider man', 'Spider-Man swings through skyscrapers, battling villains with acrobatic finesse and witty banter, while navigating the challenges of dual identities and responsibilities in New York City\'s chaos.', '23/08/2024'),
(7, '1724876538422.png', 'End game', 'Marvel\'s \'Avengers: Endgame\' marks the ultimate showdown as heroes confront destiny, sacrifice, and the formidable Thanos in an epic battle for the universe\'s fate.', '23/12/2024'),
(8, '1724876669822.png', 'Iron Man', 'Iron Man, billionaire genius Tony Stark, transforms into a high-tech superhero, battling villains and navigating the complexities of power and responsibility in Marvel\'s iconic saga.', '23/12/2024');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs_news`
--
ALTER TABLE `blogs_news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blogs_news`
--
ALTER TABLE `blogs_news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
