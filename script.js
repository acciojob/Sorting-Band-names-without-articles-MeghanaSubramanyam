//your code here

let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort the band names ignoring articles
touristSpots.sort((a, b) => {
  const nameA = stripArticle(a).toLowerCase();
  const nameB = stripArticle(b).toLowerCase();
  return nameA.localeCompare(nameB);
});

// Append sorted names to the <ul id="bands">
const ul = document.getElementById('bands');
touristSpots.forEach(spot => {
  const li = document.createElement('li');
  li.textContent = spot;
  ul.appendChild(li);
});
