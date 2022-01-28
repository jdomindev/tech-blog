const commentFormHandler = async (event) => {
    event.preventDefault();
    // Collect values from the login form
    const comment_description = document.querySelector('#comment-description').value.trim();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (comment_description) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/comment/', {
        method: 'POST',
        body: JSON.stringify({ comment_description, blog_id: id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the oneBlog post page
        document.location.replace(`/blog/${id}`);
        
      } else {
        alert(response.statusText);
      }
    }
  };

  document
    .querySelector('.comment')
    .addEventListener('submit', commentFormHandler);