const { Subjects } = require('../models');

const subjectsdata = [
    {
        subject: 'Algebra 1',
        grade_level: 1,
        tutor_id: 001,
    },
    {
        subject: 'Algebra 2',
        grade_level: 2,
        tutor_id: 002,
    },
    {
        subject: 'English',
        grade_level: 3,
        tutor_id: 003,
    },
];

const seedSubjects= () => Tutors.bulkCreate(subjectsdata );

module.exports = seedSubjects;