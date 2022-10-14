const {Students} = require('../models');

const studentdata = [
    {
        first_name:'Harry',
        last_name: 'Potter',
        grade_level: 1,
       
    },
    {
        first_name:'Hermion',
        last_name: 'Granger',
        grade_level: 2,
       
    },
    {
        first_name:'Tom',
        last_name: 'Cruise',
        grade_level: 3,
       
    },
];

const seedStudents = () => Students.bulkCreate(studentdata);

module.exports = seedStudents;