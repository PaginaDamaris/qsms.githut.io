const inicio = new Date(2023, 8, 2);

function actualizarContador() {
  const ahora = new Date();

  let years = ahora.getFullYear() - inicio.getFullYear();
  let months = ahora.getMonth() - inicio.getMonth();
  let days = ahora.getDate() - inicio.getDate();

  if (days < 0) {
    months--;
    const ultimoMes = new Date(
      ahora.getFullYear(),
      ahora.getMonth(),
      0
    ).getDate();
    days += ultimoMes;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const hours = ahora.getHours();
  const minutes = ahora.getMinutes();
  const seconds = ahora.getSeconds();

  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(actualizarContador, 1000);
actualizarContador();
