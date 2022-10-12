const {Tutors} = require('../models');

const tutorsdata = [
    {
        first_name:'Severus',
        last_name: 'Snape',
        years_experience: 10,
    },
    {
        first_name: 'Albus',
        last_name: 'Dumbledore',
        years_experience: 20,
    },
    {
        first_name: 'Chris',
        last_name: 'Harris',
        years_experience: 12,
    },
];

const seedTutors = () => Tutors.bulkCreate(tutorsdata);

module.exports = seedTutors;