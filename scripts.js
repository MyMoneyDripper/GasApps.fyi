window.onload = function() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const featuredAppsList = document.getElementById('featured-apps');
      const allAppsList = document.getElementById('all-apps');

      data.forEach(app => {
        const appElement = document.createElement('div');
        appElement.classList.add('app');
        appElement.innerHTML = `
          <img src="${app.icon}" alt="${app.title}">
          <h2>${app.title}</h2>
          <p> ${app.author}</p>
          <p>${app.description}</p>
          <a href="${app.link}" target="_blank">Visit Website</a>
        `;

        // Always append to allAppsList
        allAppsList.appendChild(appElement);

        // Only append to featuredAppsList if the app is featured
        if (app.featured) {
          featuredAppsList.appendChild(appElement.cloneNode(true));
        }
      });
    })
    .catch(error => console.error('Error fetching data:', error));
};
