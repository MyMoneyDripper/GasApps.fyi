window.onload = function() {
  // Only run the data.json fetching if we're on the index page
  if (document.getElementById('featured-apps')) {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const featuredAppsList = document.getElementById('featured-apps');
        const loyaltyProgramsList = document.getElementById('loyalty-programs');
        const fuelRewardsList = document.getElementById('fuel-rewards');
        // Note: There is no 'external-apps' container on the index page yet.
        // The 'External' category items will not be displayed until a container is added.

        data.forEach(app => {
          const appElement = document.createElement('div');
          appElement.classList.add('app');

          const isExternal = app['article-path'].startsWith('redirects/');
          const guideLink = isExternal ? app['article-path'] : `article.html?path=${app['article-path']}`;
          const target = isExternal ? '_blank' : '_self';

          appElement.innerHTML = `
            <img src="${app.icon}" alt="${app.title}">
            <h2>${app.title}</h2>
            <p>${app.author}</p>
            <div class="button-container">
              <a href="${app.link}" class="btn btn-secondary" target="_blank">Visit Website</a>
              <a href="${guideLink}" class="btn btn-primary" target="${target}">View Guide</a>
            </div>
          `;

          // Append to the appropriate section based on the category
          switch (app.category) {
            case 'Featured':
              if (featuredAppsList) featuredAppsList.appendChild(appElement);
              break;
            case 'Loyalty':
              if (loyaltyProgramsList) loyaltyProgramsList.appendChild(appElement);
              break;
            case 'Rewards':
              if (fuelRewardsList) fuelRewardsList.appendChild(appElement);
              break;
            case 'External':
              // Intentionally not adding to a list, as the container does not exist on index.html
              // This prevents errors and avoids displaying them in the wrong section.
              break;
          }
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  // Modal logic - only run if modal elements exist
  const modal = document.getElementById("contactModal");
  const btn = document.querySelector(".contact-button");
  const span = document.getElementsByClassName("close")[0];
  const cancelButton = document.querySelector(".cancel-button");

  if (btn && modal) {
    btn.onclick = function() {
      modal.style.display = "block";
    }
  }

  if (span && modal) {
    span.onclick = function() {
      modal.style.display = "none";
    }
  }

  if (cancelButton && modal) {
    cancelButton.onclick = function() {
      modal.style.display = "none";
    }
  }

  // Global click handler for modal
  window.onclick = function(event) {
    if (modal && event.target == modal) {
      modal.style.display = "none";
    }
  }
};
