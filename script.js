document.getElementById("stockForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const ticker = document.getElementById("ticker").value;
  document.getElementById("results").innerText = `You searched for ${ticker}. (Analysis coming soon!)`;
});
