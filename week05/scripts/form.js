const productArray = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const productNameSelect = document.getElementById("product-name");

productArray.forEach((product) => {
  const option = document.createElement("option");
  option.value = product.name;
  option.textContent = product.name;
  productNameSelect.appendChild(option);
});

// Add event listener to form submission
document.getElementById("review-form").addEventListener("submit", (e) => {
  e.preventDefault();
  // Get the number of reviews from local storage
  let reviewCount = localStorage.getItem("reviewCount");
  if (reviewCount === null) {
    reviewCount = 0;
  } else {
    reviewCount = parseInt(reviewCount);
  }
  // Increment the review count
  reviewCount++;
  // Store the review count in local storage
  localStorage.setItem("reviewCount", reviewCount);
  // Redirect to the review page
  window.location.href = "review.html";
});

document.getElementById('currentyear').innerHTML = new Date().getFullYear();
const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
    lastModifiedElement.innerHTML = `Last modification: ${document.lastModified}`;
};