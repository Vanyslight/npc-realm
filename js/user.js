document.addEventListener("DOMContentLoaded", function () {
  const userDataString = localStorage.getItem("npcRealm_user");

  if (userDataString) {
    const userData = JSON.parse(userDataString);
    const displayElement = document.getElementById("nomeDisplay");

    if (displayElement) {
      displayElement.textContent = userData.name;
    }
  }
});
