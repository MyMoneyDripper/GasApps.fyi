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
          <p>${app.description}</p>
          <a href="${app.link}" target="_blank">Visit Website</a>
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
   // Get the modal
    var modal = document.getElementById("contactModal");

    // Get the button that opens the modal
    var btn = document.querySelector(".contact-button");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }