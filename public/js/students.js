//Populate tables

// const students = async () => {
//     const response = await fetch('/api/students/', {
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json'},
//     })
//     //.then(response => response.json())
  
//     if (response.ok) {
//       console.log('Fetched Students OK');
//       console.log(response.json());
//       console.log(response);
//       //document.location.replace('/my-student');

//     } else {
//       alert('No student records.');
//       console.log('fetch NOT OK');
//     }
// };

const first_name;
const last_name;
const grade_level;

const students = async () => {
  document.location = '/api/students';
  if (response.ok) {
    console.log(response.json());
  }
  //document.addEventListener('click', students);
}

//document.addEventListener('click', students);