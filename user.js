function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

const username = localStorage.getItem('username');
if (username) {
  document.getElementById("username").textContent = `Welcome, ${username}!`;
} else {
  window.location.href = "/login.html"; // redirect if not logged in
}

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.clear();
  // Perform logout logic here
  window.location.href = "./login.html";
});

const quotes = [
  "“The best way to find yourself is to lose yourself in the service of others.” – Mahatma Gandhi",
  "“No one has ever become poor by giving.” – Anne Frank",
  "“We make a living by what we get. We make a life by what we give.” – Winston Churchill",
  "“It’s not how much we give but how much love we put into giving.” – Mother Teresa",
  "“Giving is not just about making a donation. It is about making a difference.” – Kathy Calvin" , "Giving is caring ,caring is love (✿◡‿◡)" , "Be the spark of Hope (●'◡'●)" , " Your Generosity, Their Strength (✿◠‿◠)" , "A Nest of Kindness for the World"
];

let currentIndex = 0;
const quoteText = document.getElementById("quoteText");

function updateQuote() {
  quoteText.textContent = quotes[currentIndex];
  currentIndex = (currentIndex + 1) % quotes.length;
}

// Start rotating quotes
updateQuote(); // Show first quote immediately
setInterval(updateQuote, 6000);

function showForm(type) {
  document.getElementById('foodForm').style.display = 'none';
  document.getElementById('clothesForm').style.display = 'none';
  document.getElementById('moneyForm').style.display = 'none';

  if (type === 'food') document.getElementById('foodForm').style.display = 'block';
  if (type === 'clothes') document.getElementById('clothesForm').style.display = 'block';
  if (type === 'money') document.getElementById('moneyForm').style.display = 'block';
}

function submitDonation(e, donationType) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const data = {
    username: localStorage.getItem("username"),
    type: donationType,
    amount: donationType === "Money" ? formData.get("amount") : formData.get("quantity"),
    item: formData.get("item") || "",
  };

  fetch("/api/donate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(response => {
      alert("Donation successful!");
      form.reset();
    });
}