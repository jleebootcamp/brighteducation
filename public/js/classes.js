const newFormHandler = async (event) => {
  event.preventDefault();

  const subject = document.querySelector('#subject-name').value.trim();
  const grade_level = document.querySelector('#grade_level').value.trim();
  const tutor_id = document.querySelector('#tutor_id').value.trim();
  
  // Add Class 
  if ( subject && grade_level && tutor_id ) {
    const response = await fetch(`/api/subjects`, {
      method: 'POST',
      body: JSON.stringify({ subject, grade_level, tutor_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/classes');
    } else {
      alert('Failed to create classes');
    }
  }
};

//Display subjects
const subs = async () => {
  const response = await fetch('/api/subjects', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/classes');
  } else {
    alert('Failed to display classes');
  }
};


// Delete Class
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/subjects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/classes');
    } else {
      alert('Failed to delete classes');
    }
  }
};

document
  .querySelector('.new-class-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.class-list')
  .addEventListener('click', delButtonHandler);

subs();