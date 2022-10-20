//Populate tables

const students = async () => {
    const response = await fetch('/api/students/', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json'},
    })
    //.then(response => response.json())
  
    if (response.ok) {
      console.log('Fetched Students OK');
      console.log(response.json());
      console.log(response);
      //document.location.replace('/my-student');

    } else {
      alert('No student records.');
      console.log('fetch NOT OK');
    }
};

document.addEventListener('click', students);