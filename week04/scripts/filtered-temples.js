// const hammenu = document.querySelector('.hammenu');
// const navUl = document.querySelector('#ul-li');

// hammenu.addEventListener('click', () => {
//   navUl.classList.toggle('show');
// });

// document.getElementById('currentyear').innerHTML = new Date().getFullYear();
// const lastModifiedElement = document.getElementById('lastModified');
// if (lastModifiedElement) {
//     lastModifiedElement.innerHTML = `Last modification: ${document.lastModified}`;
// }

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...

  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 12",
    area: 41010,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
  },
  {
    templeName: "Kinshasa Democratic Republic of The Congo",
    location: "Kinshasa, DR Congo",
    dedicated: "2019, April, 14",
    area: 12000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/kinshasa-democratic-republic-of-the-congo-temple/kinshasa-democratic-republic-of-the-congo-temple-3533-main.jpg"
  },
  {
    templeName: "Lisbon Portugal",
    location: "Lisbon, Portugal",
    dedicated: "2019, September, 15",
    area: 23730,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/lisbon-portugal-temple/lisbon-portugal-temple-6315-main.jpg"
  },
];

         
const hammenu = document.querySelector('.hammenu');
const navUl = document.querySelector('#ul-li');

hammenu.addEventListener('click', () => {
  navUl.classList.toggle('show');
});

document.getElementById('currentyear').innerHTML = new Date().getFullYear();
const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
    lastModifiedElement.innerHTML = `Last modification: ${document.lastModified}`;
}

function createTempleCard(templesArray = temples) {
  const picGrid = document.querySelector(".pic-grid");
  picGrid.innerHTML = '';
  templesArray.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="lable">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="lable">Dedication:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="lable">Size:</span>  ${temple.area} sq ft`
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    picGrid.appendChild(card);
  })
}

function filterTemples(category) {
  let filteredTemples;
  let categoryName;
  switch (category) {
    case 'old':
      filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
      categoryName = 'Old Temples';
      break;
    case 'new':
      filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
      categoryName = 'New Temples';
      break;
    case 'large':
      filteredTemples = temples.filter(temple => temple.area > 90000);
      categoryName = 'Large Temples';
      break;
    case 'small':
      filteredTemples = temples.filter(temple => temple.area < 10000);
      categoryName = 'Small Temples';
      break;
    default:
      filteredTemples = temples;
      categoryName = 'Home';
  }
  document.querySelector('h2').textContent = categoryName;
  createTempleCard(filteredTemples);
}

document.querySelectorAll('#ul-li a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const category = link.getAttribute('data-filter');
    filterTemples(category);
    document.querySelectorAll('#ul-li a').forEach(a => a.classList.remove('active'));
    link.classList.add('active');
  });
});

createTempleCard();