const categoryList = {
  food: ['example1.com', 'example2.com'],
  cocktails: ['example3.com', 'example4.com'],
  personal_finance: ['example5.com', 'example6.com'],
  home_improvement: ['example7.com', 'example8.com'],
  texas_gardening: ['example9.com', 'example10.com'],
};

const categorySelect = document.getElementById('category');
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('search');
const websiteList = document.getElementById('websiteList');

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
