document.addEventListener("DOMContentLoaded", () => {
  let blagues = [];

  fetch("https://projet-de-selection-cda.onrender.com/api/v1/blagues")
    .then(response => {
      if (!response.ok) throw new Error("Erreur HTTP " + response.status);
      return response.json();
    })
    .then(data => {
      console.log("Données reçues :", data);
      if (Array.isArray(data)) {
        blagues = data;
      } else {
        console.error("Format inattendu:", data);
      }
    })
    .catch((error) => {
      console.error("Erreur fetch :", error);
      document.getElementById('joke').textContent = "Erreur lors du chargement des blagues.";
    });

  document.getElementById('btnJoke').addEventListener('click', () => {
    if (!Array.isArray(blagues) || blagues.length === 0) {
      document.getElementById('joke').textContent = "Chargement des blagues...";
      return;
    }

    const randomIndex = Math.floor(Math.random() * blagues.length);
    const blague = blagues[randomIndex];
    document.getElementById('joke').innerHTML = `${blague.question}<br>— ${blague.answer}`;
  });
});