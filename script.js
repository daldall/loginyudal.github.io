document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");


    const correctUsername = "afdal"; 
    const correctPassword = "ganteng"; 

  
    errorMessage.textContent = "";

  
    if (username === "" || password === "") {
      errorMessage.textContent = "Username atau password tidak boleh kosong.";
    } else if (username !== correctUsername || password !== correctPassword) {
      errorMessage.textContent = " Sorry Username / password salah der.";
    } else {
      alert("Login berhasil dalll");
       window.location.href = "selanjutnya.html"; 
    
    }
  });
