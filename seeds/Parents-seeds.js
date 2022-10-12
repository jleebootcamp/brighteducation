const {Parents} = require('../models');

const parentdata = [
    {
        first_name:'Lily',
        last_name: 'Potter',
        student_id: 001,
    },
    {
        first_name:'Wendell',
        last_name: 'Wilkins',
        student_id: 002,
    },
    {
        first_name: 'Christin',
        last_name: 'Harrisan',
        student_id: 003,
    },
];

const seedParents = () => Parents.bulkCreate(parentdata);

module.exports = seedParents;