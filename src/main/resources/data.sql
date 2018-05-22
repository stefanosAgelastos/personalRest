/*SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;*/

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

INSERT INTO `user` (`id`, `email`, `enabled`, `firstname`, `lastname`,`lastpasswordresetdate`,`password`,`username`) VALUES
(1,'sagelastos@gmail.com', 'true', 'Stefanos', 'Agelastos', '2018-05-15 22:46:36.871', '$2a$10$Uf67RZe3wG5wG5vpYxeLj.j.aXQDSlOi3GlRPGCDuxV3u/MRfwFW2', 'sa');

INSERT INTO `user` (`id`, `email`, `enabled`, `firstname`, `lastname`,`lastpasswordresetdate`,`password`,`username`) VALUES
(2,'sadfa@asda.gr', 'true', 'Skjg', 'Alkj', '2018-05-21 22:46:36.871', '$2a$10$Uf67RZe3wG5wG5vpYxeLj.j.aXQDSlOi3GlRPGCDuxV3u/MRfwFW2', 'sas');


INSERT INTO AUTHORITY (ID, NAME) VALUES (1, 'ROLE_USER');
INSERT INTO AUTHORITY (ID, NAME) VALUES (2, 'ROLE_ADMIN');

INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_ID) VALUES (1, 1);
INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_ID) VALUES (2, 1);

INSERT INTO `contact` (`id`, `label`, `value`, `user_id`) VALUES
(8, 'email', 'sagelastos@gmail.com',1),
(9, 'telephone', '+45 7158 7288',1),
(10, 'linkedin', 'linkedin.com/stefanosagelastos',1);


INSERT INTO `personal` (`id`, `label`, `value`, `user_id`) VALUES
(1, 'First name', 'Stefanos',1),
(2, 'Lastname', 'Agelastos',1),
(7, 'gender', 'fluid',1),
(16, 'Dob', '07.98.98',1);


COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
