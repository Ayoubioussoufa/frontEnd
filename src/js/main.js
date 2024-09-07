document.addEventListener('DOMContentLoaded', function () {
  const contentDiv = document.getElementById('app');

  // Initial route based on hash or default to landing page
  const route = window.location.hash.slice(1) || 'landing';
  loadPage(route);

  // Function to handle navigation
  function navigateTo(page) {
    // location.hash = page;
    history.pushState({ page }, '', `#${page}`);
    loadPage(page);
  }

  // Function to load page content dynamically
  function loadPage(page) {
    const navbar = `
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="nav-link" href="#home">Home</a>
        <a class="nav-link" href="#leaderboard">Leaderboard</a>
        <a class="nav-link" href="#about">About us</a>
      </nav>
    `;

    // Remove any previously added CSS files for pages
    const existingLink = document.getElementById('page-style');
    if (existingLink) {
      existingLink.remove(); // Remove the old CSS file
    }

    // Dynamically load CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `src/css/${page}.css`; // Dynamic CSS based on page
    link.id = 'page-style'; // Assign an ID to the link tag for future removal
    document.head.appendChild(link);

    // Handle special cases for landing and login
    if (page === 'landing' || page === 'login') {
      contentDiv.innerHTML = '';
      if (page === 'landing') {
        fetch('src/components/landing.html')
          .then(response => {
            if (!response.ok) throw new Error('Page not found');
            return response.text();
          })
          .then(html => {
            contentDiv.innerHTML = html;
            // Add event listener for the Start button after loading the page
            document.getElementById('startButton').addEventListener('click', function () {
              navigateTo('login'); // Use navigateTo function
            });
          })
          .catch(error => {
            contentDiv.innerHTML = '<h1>404 Page Not Found</h1>';
          });
      } else if (page === 'login') {
        fetch('login.html')
          .then(response => {
            if (!response.ok) throw new Error('Page not found');
            return response.text();
          })
          .then(html => {
            contentDiv.innerHTML = html;
            // Add event listener for the login form submission
            document.getElementById('loginForm').addEventListener('submit', function (event) {
              // event.preventDefault();
              navigateTo('home'); // Use navigateTo function
            });
          })
          .catch(error => {
            console.log(error);
            contentDiv.innerHTML = '<h1>404 Page Not Found</h1>';
          });
      }
    } else {
      // Load components from src/components
      fetch(`src/components/${page}.html`)
        .then(response => {
          if (!response.ok) throw new Error('Page not found');
          return response.text();
        })
        .then(html => {
          contentDiv.innerHTML = `${navbar}${html}`;
        })
        .catch(error => {
          contentDiv.innerHTML = '<h1>404 Page Not Found</h1>';
        });
    }
    
  // Remove existing script if necessary
    const existingScript = document.getElementById('dynamic-script');
    if (existingScript) {
      existingScript.remove(); // Remove the old script
    }

    // Dynamically load JavaScript
    const script = document.createElement('script');
    script.src = `src/js/${page}.js`; // Dynamic JS based on page
    script.id = 'dynamic-script'; // Assign an ID to the script tag for future removal
    document.body.appendChild(script);
  
    window.addEventListener('popstate', (event) => {
      const page = window.location.hash.slice(1) || 'landing';
      loadPage(page);
  });
}
});


  // Handle browser Back/Forward button clicks with popstate event
  // window.addEventListener('popstate', (event) => {
  //   const page = (event.state && event.state.page) || window.location.hash.slice(1) || 'landing';
  //   loadPage(page);
  // });