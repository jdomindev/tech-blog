const commentFormHandler = async (event) => {
    event.preventDefault();
    // Collect values from the login form
    const description = document.querySelector('#comment_description').innerHTML.trim();
  
    if (description) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/comment/:id', {
        method: 'POST',
        body: JSON.stringify({ description }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the oneBlog post page
        console.log('response ok');
        document.location.replace('/blog/:id');
        
      } else {
        alert(response.statusText);
      }
    }
  };

  document
    .querySelector('.comment')
    .addEventListener('submit', commentFormHandler);