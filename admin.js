document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem('username');
    if(username){
      document.querySelector("header h2").textContent = `welcome, ${username}`;
    }
    fetchDonations();
    fetchMessages();
  });
  
  function fetchDonations() {
    fetch('/api/donations')
      .then(res => res.json())
      .then(data => {
        const list = document.getElementById("donationList");
        list.innerHTML = '';
        data.forEach(d => {
          const row = `<tr>
            <td>${d.donor}</td>
            <td>${d.type}</td>
            <td>${d.details}</td>
            <td>${new Date(d.date).toLocaleDateString()}</td>
          </tr>`;
          list.innerHTML += row;
        });
      });
  }
  
  function fetchMessages() {
    fetch('/api/messages')
      .then(res => res.json())
      .then(data => {
        const list = document.getElementById("messageList");
        list.innerHTML = '';
        data.forEach(m => {
          const item = `<li><strong>${m.name}:</strong> ${m.message}</li>`;
          list.innerHTML += item;
        });
      });
  }
  
  function searchDonations() {
    const name = document.getElementById("searchName").value.trim();
    fetch(`/api/donations?name=${name}`)
      .then(res => res.json())
      .then(data => {
        const list = document.getElementById("donationList");
        list.innerHTML = '';
        data.forEach(d => {
          const row = `<tr>
            <td>${d.donor}</td>
            <td>${d.type}</td>
            <td>${d.details}</td>
            <td>${new Date(d.date).toLocaleDateString()}</td>
          </tr>`;
          list.innerHTML += row;
        });
      });
  }
  
  function logout() {
    window.location.href = './login.html';
  }