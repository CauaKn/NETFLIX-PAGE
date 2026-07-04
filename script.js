const profiles = document.querySelectorAll(".profile-item");
const container = document.querySelector(".profiles-container");

profiles.forEach(profile => {
    profile.addEventListener("click", () => {
        profile.classList.add("active");
        container.classList.add("fade");

        setTimeout(() => {
            alert("Entrando no perfil...");
        }, 500);
    });
});


