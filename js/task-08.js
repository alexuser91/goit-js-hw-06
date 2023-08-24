document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login-form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    if (emailInput.value === "" || passwordInput.value === "") {
      alert("Toate câmpurile trebuie completate.");
    } else {
      const formData = {
        email: emailInput.value,
        password: passwordInput.value,
      };

      console.log("Datele introduse:", formData);

      loginForm.reset();
    }
  });
});
