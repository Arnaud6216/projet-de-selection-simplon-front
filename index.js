let blagues = [];

fetch("https://projet-de-selection-cda.onrender.com/api/v1/blagues")
  .then(response => response.json())
  .then(data => {
    blagues = data.jokes;
  })
  .catch(() => {
    document.getElementById('joke').textContent = "Erreur lors du chargement des blagues.";
  });

document.getElementById('btnJoke').addEventListener('click', () => {
  if (blagues.length === 0) {
    document.getElementById('joke').textContent = "Chargement des blagues...";
    return;
  }
  const randomIndex = Math.floor(Math.random() * blagues.length);
  const blague = blagues[randomIndex];
document.getElementById('joke').innerHTML = `${blague.question}<br>— ${blague.answer}`;
});