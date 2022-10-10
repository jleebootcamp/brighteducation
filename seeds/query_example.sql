select
  students.first_name as student_first_name,
  students.last_name as student_last_name,
  parents.first_name as parent_first_name,
  parents.last_name as parent_last_name,
  tutors.first_name as tutor_first_name,
  tutors.last_name as tutor_last_name,
  subjects.subject
from
  students
  join parents on parents.student_id = students.student_id
  join enrollments on students.student_id = enrollments.student_id
  join tutors on enrollments.tutor_id = tutors.tutor_id
  join subjects on tutors.tutor_id = subjects.tutor_id
where
  students.first_name like 'Harry' or students.first_name like 'Hermione';