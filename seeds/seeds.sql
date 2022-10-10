INSERT INTO TUTORS
  (tutor_id, first_name, last_name, years_experience, active)
VALUES
  (001, "Severus", "Snape", 10, true),
  (002, "Albus", "Dumbledore", 20, true);

INSERT INTO students
  (student_id, first_name, last_name, grade_level, active)
VALUES
  (001, "Harry", "Potter", 1, true),
  (002, "Hermione", "Granger", 2, true);

INSERT INTO parents
  (parent_id, first_name, last_name, student_id)
VALUES
  (001, "Lily", "Potter", 001),
  (002, "Wendell", "Wilkins", 002);

INSERT INTO subjects
  (subject_id, subject, grade_level, tutor_id, active)
VALUES
  (001, "Algebra 1", 1, 001, true),
  (002, "Algebra 2", 2, 002, true);

INSERT INTO enrollments
  (class_id, subject_id, student_id, tutor_id)
VALUES
  (001, 001, 001, 001),
  (002, 002, 002, 002);