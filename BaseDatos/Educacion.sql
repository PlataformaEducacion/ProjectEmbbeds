-- phpMyAdmin SQL Dump
-- version 4.6.6deb5ubuntu0.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 07-12-2020 a las 10:13:49
-- Versión del servidor: 10.3.22-MariaDB-1:10.3.22+maria~bionic-log
-- Versión de PHP: 7.2.24-0ubuntu0.18.04.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `embebidos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Educacion`
--

CREATE TABLE `Educacion` (
  `ID` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `fechaini` date DEFAULT NULL,
  `fechafin` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;

--
-- Volcado de datos para la tabla `Educacion`
--

INSERT INTO `Educacion` (`ID`, `username`, `password`, `timestamp`, `fechaini`, `fechafin`) VALUES
(1, 'user0', 'pass1234', '2020-12-01 00:51:34', '2020-11-17', '2020-12-01'),
(2, 'whateva', 'whateva2', '2020-12-03 17:59:48', NULL, NULL),
(3, 'user1', 'pass1234', '2020-12-03 18:03:05', NULL, NULL),
(5, 'user08', 'pass1234', '2020-12-05 06:06:47', NULL, NULL),
(6, 'VAmos2332', 'Acepatalo232', '2020-12-05 06:22:22', NULL, NULL),
(7, 'AppTestUser1', 'Pass1234', '2020-12-05 16:07:07', NULL, NULL),
(8, 'WebUser1', 'Webpass123', '2020-12-05 18:23:01', NULL, NULL),
(9, 'WebUser2', 'WebPass123', '2020-12-05 18:29:29', NULL, NULL),
(10, 'WebUser3', 'WebPass3', '2020-12-05 19:16:40', NULL, NULL),
(11, 'WebUser4', 'WebPass1234', '2020-12-05 19:53:15', NULL, NULL),
(12, 'WebUser2', 'WebPass123', '2020-12-05 18:29:29', NULL, NULL),
(13, 'WebUser2', 'WebPass123', '2020-12-05 18:29:29', NULL, NULL),
(14, 'WebUser2', 'WebPass123', '2020-12-05 18:29:29', NULL, NULL),
(15, 'WebUser16', 'WebPass160', '2020-12-06 01:35:32', NULL, NULL),
(16, 'WebUser21', 'Eyeshield21', '2020-12-06 01:42:20', NULL, NULL),
(17, 'WebUser21', 'Eyeshield21', '2020-12-06 01:42:44', NULL, NULL),
(18, 'WebUser39', 'Password13', '2020-12-06 23:03:14', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Educacion`
--
ALTER TABLE `Educacion`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Educacion`
--
ALTER TABLE `Educacion`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
