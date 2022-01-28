const updateButtonHandler = async (event) => {
    event.preventDefault();
    
    const blog_title = document.querySelector('#blog-title').value.trim();
    const blog_description = document.querySelector('#blog-description').value.trim();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/dashboard/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ blog_title, blog_description }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update project');
    }
  };

document
  .querySelector('.blog-update')
  .addEventListener('click', updateButtonHandler);