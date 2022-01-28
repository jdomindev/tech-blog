const blogFormHandler = async (event) => {
    event.preventDefault();
    // Collect values from the login form
    const title = document.querySelector('#blog-title').value.trim();
    const description = document.querySelector('#blog-description').value.trim();
  
    if (title && description) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/dashboard/', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the dashboard page
        document.location.replace('/dashboard');
        
      } else {
        alert(response.statusText);
      }
    }
  };

  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/dashboard/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete project');
      }
    }
  };

//   const updateButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/dashboard/${id}`, {
//         method: 'PUT',
//       });
  
//       if (response.ok) {
//         document.location.replace('/dashboard');
//       } else {
//         alert('Failed to update project');
//       }
//     }
//   };

  document
  .querySelector('.blog-form')
  .addEventListener('submit', blogFormHandler);

  document
  .querySelector('.blog-list')
  .addEventListener('click', delButtonHandler);
 
//   document
//   .querySelector('')
//   .addEventListener('click', updateButtonHandler);