//Populate tables

const students = async () => {
    const response = await fetch('/api/students/', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json'},
    });
  
    if (response.ok) {
      console.log('Fetched Students OK');
      //console.log(JSON.stringify(response));
      //document.location.replace('/my-student');
    } else {
      alert('No student records.');
      console.log('fetch NOT OK');
    }
  };

document.addEventListener('click', students);