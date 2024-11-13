-- Active: 1730718587983@@127.0.0.1@3306
CREATE DATABASE 
    SCHOOL;
    USE SCHOOL;

    
        CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT NOT NULL,
    course VARCHAR(100)
);
USE SCHOOL;
    INSERT INTO students (id, name, email, age,course)
    VALUES ('001','KAMOGA AKRAM','akramkamoga@gmail.com',21,'COMPUTER SCIENCE');