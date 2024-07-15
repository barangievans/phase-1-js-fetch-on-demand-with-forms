document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchByID');
    const movieDetails = document.getElementById('movieDetails');
  
    searchForm.addEventListener('submit', async function(event) {
      event.preventDefault(); // Prevent form submission
      
      const searchValue = searchInput.value.trim();
      if (!searchValue) {
        return; // Do nothing if input is empty
      }
  
      try {
        const response = await fetch(`https://api.example.com/movies/${searchValue}`);
        if (!response.ok) {
          throw new Error('Movie not found');
        }
        const movie = await response.json();
  
        // Update movie details section
        movieDetails.innerHTML = `
          <h4>${movie.title}</h4>
          <p>${movie.summary}</p>
        `;
      } catch (error) {
        console.error('Error fetching movie:', error);
        // Display an error message in the movie details section
        movieDetails.innerHTML = `<p>Error: ${error.message}</p>`;
      }
    });
  });
  