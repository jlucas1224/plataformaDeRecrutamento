document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    if (registrationForm) {
      registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert('Registro bem-sucedido! Redirecionando para o perfil.');
        window.location.href = 'profile.html';  
      });
    }
  
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); 
        alert('Login bem-sucedido! Redirecionando para a página do candidato.');
        window.location.href = 'candidate.html'; 
      });
    }
});
  