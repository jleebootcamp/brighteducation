// import models
const Tutors = require('./Tutors');
const Subjects = require('./Subjects');
const Students= require('./Students');
const Parents = require('./Parents');
const Enrollments = require('./Enrollments');

// Tutors has many enrollment

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

Enrollments.belongsTo(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',  
  onDelete: 'CASCADE',
});



module.exports = {
 Tutors,
 Subjects,
 Students,
 Parents,
 Enrollments,
};