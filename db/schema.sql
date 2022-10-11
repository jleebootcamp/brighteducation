DROP DATABASE IF EXISTS bright_db;

CREATE DATABASE bright_db;

USE bright_db;

CREATE TABLE tutors (
  tutor_id INT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  years_experience INT,
  active BOOLEAN NOT NULL,
  PRIMARY KEY (tutor_id)
);

CREATE TABLE students (
  student_id INT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  grade_level INT,
  active BOOLEAN NOT NULL,
  PRIMARY KEY (student_id)
);

CREATE TABLE parents (
  parent_id INT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  student_id INT,
  PRIMARY KEY (parent_id),
  FOREIGN KEY (student_id) REFERENCES students(student_id) ON DELETE SET NULL
);

CREATE TABLE subjects (
  subject_id INT NOT NULL,
  subject VARCHAR(30),
  grade_level INT,
  tutor_id INT,
  active BOOLEAN NOT NULL,
  PRIMARY KEY (subject_id),
  FOREIGN KEY (tutor_id) REFERENCES tutors(tutor_id) ON DELETE SET NULL
);

CREATE TABLE enrollments (
  class_id INT NOT NULL,
  subject_id INT,
  student_id INT,
  tutor_id INT,
  PRIMARY KEY (class_id),
  FOREIGN KEY (subject_id) REFERENCES subjects(subject_id) ON DELETE SET NULL,
  FOREIGN KEY (student_id) REFERENCES students(student_id) ON DELETE SET NULL,
  FOREIGN KEY (tutor_id) REFERENCES tutors(tutor_id) ON DELETE SET NULL
);