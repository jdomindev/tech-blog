const blogFormHandler = async (event) => {
    event.preventDefault();
    // Collect values from the login form
    const blog_title = document.querySelector('#blog-title').value.trim();
    const blog_description = document.querySelector('#blog-description').value.trim();
  
    if (blog_title && blog_description) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/dashboard/', {
        method: 'POST',
        body: JSON.stringify({ blog_title, blog_description }),
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


  document
  .querySelector('.blog-form')
  .addEventListener('submit', blogFormHandler);
  
  document
  .querySelector('.blog-delete')
  .addEventListener('click', delButtonHandler);
 
