// import models
const Tutors = require('./Tutors');
const Subjects = require('./Subjects');
const Students= require('./Students');
const Parents = require('./Parents');
const Enrollments = require('./Enrollments');
const Users = require('./Users');


Tutors.hasMany(Enrollments, {
  foreignKey: 'tutor_id',
  onDelete: 'CASCADE',
});

Subjects.hasMany(Enrollments, {
  foreignKey:'subject_id',
  onDelete: 'CASCADE',
});

Students.hasMany(Parents, {
  foreignKey:'student_id',
  onDelete: 'CASCADE',
});

Students.hasMany(Enrollments, {
  foreignKey:'student_id',
  onDelete: 'CASCADE',
});

Parents.hasMany(Students, {
  foreignKey:'student_id',
  onDelete: 'CASCADE',
});

Enrollments.belongsTo(Subjects, {
  foreignKey:'subject_id',  
  onDelete: 'CASCADE',
});

Enrollments.belongsTo(Students, {
  foreignKey:'student_id',  
  onDelete: 'CASCADE',
});

Enrollments.belongsTo(Tutors, {
  foreignKey:'tutor_id',  
  onDelete: 'CASCADE',
});

Parents.belongsTo(Users, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  });



module.exports = {
 Tutors,
 Subjects,
 Students,
 Parents,
 Enrollments,
 Users,
};