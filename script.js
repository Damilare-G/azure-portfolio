const functionUrl = "https://damilare-visitor-counter-gafsbxcteeawfth0.francecentral-01.azurewebsites.net/api/visitorCounter";

async function updateVisitorCount() {
  const visitorElement = document.getElementById("visitor-count");

  try {
    const response = await fetch(functionUrl);
    const data = await response.json();

    visitorElement.textContent = `Visitors: ${data.visitors}`;
  } catch (error) {
    console.error("Error fetching visitor count:", error);
    visitorElement.textContent = "Visitors: unavailable";
  }
}

updateVisitorCount();