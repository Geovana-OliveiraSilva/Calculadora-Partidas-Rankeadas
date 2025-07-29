// Alternar entre as telas (entrada/resultado)
function showScreen(id) {
  const screens = document.querySelectorAll(".screen");
  screens.forEach(screen => screen.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// Definir o rank com base nas vitórias
function getRank(victories) {
  if (victories < 10) {
    return { rank: "Iron", color: "#505050", image: "iron.jpg" };
  } else if (victories <= 20) {
    return { rank: "Bronze", color: "#cd7f32", image: "bronze.jpg" };
  } else if (victories <= 50) {
    return { rank: "Silver", color: "#c0c0c0", image: "silver.jpg" };
  } else if (victories <= 80) {
    return { rank: "Gold", color: "#ffd700", image: "gold.jpg" };
  } else if (victories <= 90) {
    return { rank: "Diamond", color: "#800080", image: "diamond.jpg" };
  } else if (victories <= 100) {
    return { rank: "Legendary", color: "#8ef4ff", image: "legendary.jpg" };
  } else {
    return { rank: "Immortal", color: "#ff0000", image: "imortal.jpg" };
  }
}

// Calcular e exibir o resultado do rank
function calculateRank() {
  const victories = parseInt(document.getElementById("victoriesInput").value);
  const defeats = parseInt(document.getElementById("defeatsInput").value);

  if (isNaN(victories) || isNaN(defeats)) {
    alert("Preencha os dois campos corretamente!");
    return;
  }

  const score = victories - defeats;
  const { rank, color, image } = getRank(victories);

  document.getElementById("finalMessage").innerHTML = `
    <p>O Herói tem saldo de <strong style="color:${color}">${score}</strong> e está no nível <strong style="color:${color}">${rank}</strong>.</p>
  `;

  document.getElementById("finalCard").innerHTML = `
    <div style="border: 4px solid ${color}; padding: 10px; border-radius: 12px; background: white;">
      <img src="assets/${image}" alt="${rank}" style="width: 150px; border-radius: 12px;">
    </div>
  `;

  showScreen("resultScreen");
}

// Reiniciar os campos e voltar para a tela de entrada
function resetCalculator() {
  document.getElementById("victoriesInput").value = "";
  document.getElementById("defeatsInput").value = "";
  showScreen("inputScreen");
}
