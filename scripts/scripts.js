window.onload = function() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const featuredAppsList = document.getElementById('featured-apps');
      const loyaltyProgramsList = document.getElementById('loyalty-programs');
      const fuelRewardsList = document.getElementById('fuel-rewards');

      data.forEach(app => {
        const appElement = document.createElement('div');
        appElement.classList.add('app');
        appElement.innerHTML = `
          <img src="${app.icon}" alt="${app.title}">
          <h2>${app.title}</h2>
          <p>${app.author}</p>
          <div class="button-container">
            <a href="${app.link}" class="btn btn-secondary" target="_blank">Visit Website</a>
            <a href="article.html?path=${app['article-path']}" class="btn btn-primary" target="_blank">View Guide</a>
          </div>
        `;

        // Append to the appropriate section based on the category
        switch (app.category) {
          case 'Featured':
            featuredAppsList.appendChild(appElement);
            break;
          case 'Loyalty':
            loyaltyProgramsList.appendChild(appElement);
            break;
          case 'Rewards':
            fuelRewardsList.appendChild(appElement);
            break;
        }
      });
    })
    .catch(error => console.error('Error fetching data:', error));
};

// Modal logic remains unchanged
var modal = document.getElementById("contactModal");
var btn = document.querySelector(".contact-button");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.querySelector(".cancel-button").onclick = function() {
  modal.style.display = "none";
}
