const seedTutors = require('./Tutors-seeds');
const seedSubjects = require('./Subjects-seeds');
const seedStudents = require('./Students-seeds');
const seedParents = require('./Parents-seeds');
const seedEnrollments = require('./Enrollments-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedTutors();
  console.log('\n----- TUTORSSEEDED -----\n');

  await seedSubjects();
  console.log('\n----- SUBJECTS SEEDED -----\n');

  await seedStudents();
  console.log('\n----- STUDENTS SEEDED -----\n');

  await seedParents();
  console.log('\n----- PATRENTS SEEDED -----\n');

  await seedEnrollments();
  console.log('\n----- ENROLLMENTS EEDED -----\n');

  process.exit(0);
};

seedAll();