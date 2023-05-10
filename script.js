const categoryList = {
  food: ['seriouseats.com', 'foodwishes.blogspot.com','youtube.com/channel/UC54SLBnD5k5U3Q6N__UjbAw','youtube.com/@aragusea',
         'americastestkitchen.com','cookingissuestranscript.com',
         'cooksillustrated.com','modernistcuisine.com/mc-recipes/','maangchi.com','chefsteps.com','amazingribs.com',
         'rickbayless.com','177milkstreet.com/recipes','greatbritishchefs.com/','joepastry.com','ruhlman.com','Reddit.com/r/askculinary',
         'kingarthurflour.com/recipes'],
  cocktails: ['Reddit.com/r/cocktails','jeffreymorgenthaler.com','www.diffordsguide.com','imbibemagazine.com','liberandcompany.com'],
  personal_finance: ['bogleheads.org','early-retirement.org','jlcollinsnh.com','mrmoneymustache.com'],
  home_improvement: ['Reddit.com/r/homeimprovement','thisoldhouse.com','youtube.com'],
  texas_gardening: ['neilsperry.com','agrilifeextension.tamu.edu','wildflower.org','centraltexasgardener.org','bexarmg.org',
         'signaturegardens.blogspot.com','milbergernursery.com','facebook.com/NeilSperryTexas/'],
};

const categorySelect = document.getElementById('category');
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('search');
const websiteList = document.getElementById('websiteList');
const searchForm = document.getElementById('searchForm');

categorySelect.addEventListener('change', () => {
  websiteList.innerHTML = '';
  const selectedCategory = categorySelect.value;
  const websites = categoryList[selectedCategory];

  for (const site of websites) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'website';
    checkbox.value = site;
    checkbox.checked = true;

    const label = document.createElement('label');
    label.textContent = site;

    websiteList.appendChild(checkbox);
    websiteList.appendChild(label);
    websiteList.appendChild(document.createElement('br'));
  }

  websiteList.hidden = false;
});

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value;
  const checkedWebsites = Array.from(document.getElementsByName('website'))
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value)
    .join(' OR site:');

  if (searchTerm && checkedWebsites) {
    const query = encodeURIComponent(searchTerm + ' site:' + checkedWebsites);
    const searchUrl = `https://www.google.com/search?q=${query}`;
    window.open(searchUrl, '_blank');
  } else {
    alert('Please enter a search term and select at least one website.');
  }
});

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const searchTerm = searchInput.value;
  const checkedWebsites = Array.from(document.getElementsByName('website'))
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value)
    .join(' OR site:');

  if (searchTerm && checkedWebsites) {
    const query = encodeURIComponent(searchTerm + ' site:' + checkedWebsites);
    const searchUrl = `https://www.google.com/search?q=${query}`;
    window.open(searchUrl, '_blank');
  } else {
    alert('Please enter a search term and select at least one website.');
  }
});
