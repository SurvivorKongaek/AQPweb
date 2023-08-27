-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 27, 2023 at 01:08 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbaqp`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbcustomer`
--

CREATE TABLE `tbcustomer` (
  `cus_id` int(5) NOT NULL,
  `cus_name` varchar(50) NOT NULL,
  `cus_code` varchar(5) NOT NULL,
  `cus_picName` varchar(50) NOT NULL,
  `cus_tel` varchar(10) NOT NULL,
  `cus_credit` varchar(3) NOT NULL,
  `cus_email` varchar(50) NOT NULL,
  `cus_address` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbcustomer`
--

INSERT INTO `tbcustomer` (`cus_id`, `cus_name`, `cus_code`, `cus_picName`, `cus_tel`, `cus_credit`, `cus_email`, `cus_address`) VALUES
(1, 'Ekornese Thailand Co.,Ltd.', 'EKN', 'คุณฝน', '0984658795', '30', 'numfon@ekornese.com', 'ฉะเชิงเทรา'),
(2, 'Siam Okamototo Co.,Ltd.3', 'SOC', 'คุณนุช', '0264987532', '30', 'Noppawan@siamokamoto.com', 'ปทุมธานี'),
(5, 'Siam H Top', 'STH', 'Balleee', '0915465966', '30', 'Ball@gmail.com', 'ปทุมธานี'),
(6, '945 Holding Co.,Ltd', '945', 'Ball', '0915465966', '30', 'Ball@gmail.com', 'Pathum'),
(7, 'Sony Thailand Co.,Ltd.', 'STT', 'Ball', '0264987532', '30', 'Ball@gmail.com', 'Pathum');

-- --------------------------------------------------------

--
-- Table structure for table `tbeventsstore`
--

CREATE TABLE `tbeventsstore` (
  `eventsStore_id` int(10) NOT NULL,
  `eventsStore_timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `goods_id` int(50) NOT NULL,
  `goods_partNo` varchar(50) NOT NULL,
  `eventsStore_quantity` int(50) NOT NULL,
  `eventsStore_action` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbeventsstore`
--

INSERT INTO `tbeventsstore` (`eventsStore_id`, `eventsStore_timestamp`, `goods_id`, `goods_partNo`, `eventsStore_quantity`, `eventsStore_action`) VALUES
(1, '2023-02-28 03:25:45', 1, 'P12C11', 1500, 'Pick up'),
(2, '2023-02-28 03:25:45', 1, 'P12C11', 2500, 'Add Goods'),
(3, '2023-02-28 09:36:56', 2, 'P12C12', 500, 'Pick up'),
(4, '2023-02-28 09:36:56', 2, 'P12C12', 1000, 'Add Goods');

-- --------------------------------------------------------

--
-- Table structure for table `tbfgin`
--

CREATE TABLE `tbfgin` (
  `fgIn_id` int(5) NOT NULL,
  `fgIn_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `goods_partNo` varchar(50) NOT NULL,
  `fgIn_qty` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbfgin`
--

INSERT INTO `tbfgin` (`fgIn_id`, `fgIn_date`, `goods_partNo`, `fgIn_qty`) VALUES
(20, '2023-07-07 03:34:07', 'P12', 200),
(22, '2023-07-07 03:28:50', 'P13', 100),
(24, '2023-07-07 06:17:53', 'P12', 1200),
(25, '2023-07-07 06:26:43', 'P13', 2000);

-- --------------------------------------------------------

--
-- Table structure for table `tbfgout`
--

CREATE TABLE `tbfgout` (
  `fgOut_id` int(5) NOT NULL,
  `fgOut_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `goods_partNo` varchar(50) NOT NULL,
  `fgOut_qty` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbfgout`
--

INSERT INTO `tbfgout` (`fgOut_id`, `fgOut_date`, `goods_partNo`, `fgOut_qty`) VALUES
(16, '2023-07-07 03:34:19', 'P12', 100),
(18, '2023-07-07 03:34:22', 'P13', 50),
(20, '2023-07-07 06:17:31', 'P13', 50),
(21, '2023-07-07 06:17:40', 'P12', 100),
(22, '2023-07-07 07:01:47', 'P13', 1000),
(23, '2023-07-07 07:01:58', 'P12', 150);

-- --------------------------------------------------------

--
-- Table structure for table `tbgoodsdetail`
--

CREATE TABLE `tbgoodsdetail` (
  `goods_id` int(5) NOT NULL,
  `goods_partNo` varchar(50) NOT NULL,
  `goods_name` varchar(50) NOT NULL,
  `goods_typeId` varchar(10) NOT NULL,
  `rm_id` varchar(10) NOT NULL,
  `goods_price` int(10) NOT NULL,
  `stockFg` int(10) NOT NULL,
  `cus_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbgoodsdetail`
--

INSERT INTO `tbgoodsdetail` (`goods_id`, `goods_partNo`, `goods_name`, `goods_typeId`, `rm_id`, `goods_price`, `stockFg`, `cus_id`) VALUES
(1, 'P12', 'Super Cleaner', '1', '1', 27, 1, 1),
(15, 'P13', 'Cleanner', '1', '1', 27, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbgoodstype`
--

CREATE TABLE `tbgoodstype` (
  `goodsType_id` int(5) NOT NULL,
  `goodsType_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbgoodstype`
--

INSERT INTO `tbgoodstype` (`goodsType_id`, `goodsType_name`) VALUES
(1, 'Carton Box'),
(2, 'Paper Pallete'),
(3, 'Sleeve + Cover');

-- --------------------------------------------------------

--
-- Table structure for table `tbnewmodel`
--

CREATE TABLE `tbnewmodel` (
  `newmodel_id` int(50) NOT NULL,
  `cus_id` int(50) NOT NULL,
  `newmodel_no` int(50) NOT NULL,
  `rm_id` int(50) NOT NULL,
  `w` int(50) NOT NULL,
  `l` int(50) NOT NULL,
  `h` int(50) NOT NULL,
  `profit` int(50) NOT NULL,
  `saleprice` int(50) NOT NULL,
  `cost` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbnewmodel`
--

INSERT INTO `tbnewmodel` (`newmodel_id`, `cus_id`, `newmodel_no`, `rm_id`, `w`, `l`, `h`, `profit`, `saleprice`, `cost`) VALUES
(1, 2, 26959, 2, 200, 200, 200, 20, 130, 78),
(2, 2, 200, 2, 200, 200, 200, 20, 130, 78),
(3, 1, 0, 2, 500, 500, 500, 30, 210, 152),
(4, 1, 0, 2, 500, 500, 500, 30, 210, 152),
(5, 1, 0, 2, 500, 500, 600, 30, 88, 77),
(6, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(7, 1, 0, 1, 200, 200, 200, 200, 99, 39),
(8, 1, 24242, 2, 200, 200, 300, 30, 99, 23),
(9, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(10, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(11, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(12, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(13, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(14, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbrawmaterial`
--

CREATE TABLE `tbrawmaterial` (
  `rm_id` int(11) NOT NULL,
  `rm_name` varchar(50) NOT NULL,
  `rm_type` varchar(20) NOT NULL,
  `rm_price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbrawmaterial`
--

INSERT INTO `tbrawmaterial` (`rm_id`, `rm_name`, `rm_type`, `rm_price`) VALUES
(1, 'KA150', 'BC', 1),
(2, 'KL150', 'C', 2),
(8, 'KS', 'B', 5),
(9, 'KA150', 'BC', 1),
(10, 'KL150', 'C', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbstore`
--

CREATE TABLE `tbstore` (
  `store_id` int(5) NOT NULL,
  `store_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbstore`
--

INSERT INTO `tbstore` (`store_id`, `store_name`) VALUES
(1, 'Pallete Store'),
(2, 'FG Store '),
(3, 'Raw Material Store'),
(4, 'Store9955');

-- --------------------------------------------------------

--
-- Table structure for table `tbuser`
--

CREATE TABLE `tbuser` (
  `userId` int(5) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `posId` int(5) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbuser`
--

INSERT INTO `tbuser` (`userId`, `username`, `password`, `posId`, `status`) VALUES
(1, 'kong', '123', 1, 'admin'),
(2, 'tong', '123', 2, 'sale'),
(3, 'noo', '123', 3, 'store'),
(4, 'nut', '123', 4, 'manager');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbcustomer`
--
ALTER TABLE `tbcustomer`
  ADD PRIMARY KEY (`cus_id`);

--
-- Indexes for table `tbeventsstore`
--
ALTER TABLE `tbeventsstore`
  ADD PRIMARY KEY (`eventsStore_id`);

--
-- Indexes for table `tbfgin`
--
ALTER TABLE `tbfgin`
  ADD PRIMARY KEY (`fgIn_id`);

--
-- Indexes for table `tbfgout`
--
ALTER TABLE `tbfgout`
  ADD PRIMARY KEY (`fgOut_id`);

--
-- Indexes for table `tbgoodsdetail`
--
ALTER TABLE `tbgoodsdetail`
  ADD PRIMARY KEY (`goods_id`);

--
-- Indexes for table `tbgoodstype`
--
ALTER TABLE `tbgoodstype`
  ADD PRIMARY KEY (`goodsType_id`);

--
-- Indexes for table `tbnewmodel`
--
ALTER TABLE `tbnewmodel`
  ADD PRIMARY KEY (`newmodel_id`);

--
-- Indexes for table `tbrawmaterial`
--
ALTER TABLE `tbrawmaterial`
  ADD PRIMARY KEY (`rm_id`);

--
-- Indexes for table `tbstore`
--
ALTER TABLE `tbstore`
  ADD PRIMARY KEY (`store_id`);

--
-- Indexes for table `tbuser`
--
ALTER TABLE `tbuser`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbcustomer`
--
ALTER TABLE `tbcustomer`
  MODIFY `cus_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbeventsstore`
--
ALTER TABLE `tbeventsstore`
  MODIFY `eventsStore_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbfgin`
--
ALTER TABLE `tbfgin`
  MODIFY `fgIn_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `tbfgout`
--
ALTER TABLE `tbfgout`
  MODIFY `fgOut_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `tbgoodsdetail`
--
ALTER TABLE `tbgoodsdetail`
  MODIFY `goods_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `tbgoodstype`
--
ALTER TABLE `tbgoodstype`
  MODIFY `goodsType_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tbnewmodel`
--
ALTER TABLE `tbnewmodel`
  MODIFY `newmodel_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `tbrawmaterial`
--
ALTER TABLE `tbrawmaterial`
  MODIFY `rm_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tbstore`
--
ALTER TABLE `tbstore`
  MODIFY `store_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbuser`
--
ALTER TABLE `tbuser`
  MODIFY `userId` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
