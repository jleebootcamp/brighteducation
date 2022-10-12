const {Enrollments} = require('../models');

const enrolldata = [
    {
        class_id: 001,
        subject_id: 001,
        student_id: 001,
        tutor_id: 001,
    },
    {
        class_id: 002,
        subject_id: 002,
        student_id: 002,
        tutor_id: 002,
    },
];

const seedEnrollments = () => Enrollments.bulkCreate(enrolldata);

module.exports = seedEnrollments;