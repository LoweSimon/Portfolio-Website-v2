const dropdownBtn = document.querySelectorAll(".dropdown-btn");
const dropdown = document.querySelectorAll(".dropdown");
const hamburgerBtn = document.querySelectorAll(".hamburger");
const navMenu = document.querySelectorAll(".menu");
const links = document.querySelectorAll(".dropdown a");

function setAriaExpandedFalse() {
    dropdownBtn.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
}

function closeDropdownmenu() {
    dropdown.forEach((drop) => {
        drop.classList.remove("active");
        drop.addEventListener("click", (e) => e.stopPropagation());
    });
}

function toggleHamburger() {
    navMenu.classList.toggle("show");
    hamburgerBtn.setAttribute(
        "aria-expanded",
        hamburgerBtn.getAttribute("aria-expanded") === "false" ? "true" : "false"
    );
}

dropdownBtn.forEach((btn) => {
    btn.addEventListener("click", function(e) {
        const dropdownIndex = e.currentTarget.dataset.dropdown;
        const dropdownElement = document.getElementById(dropdownIndex);

        dropdownElement.classList.toggle("active");
        dropdown.forEach((drop) => {
            if (drop.id !== btn.dataset["dropdown"]) {
                drop.classList.remove("active");
            }
        })
        e.stopPropagation()

        btn.setAttribute(
            "aria-expanded",
            btn.getAttribute("aria-expanded") === "false" ? "true" : "false"
        );
    });
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        closeDropdownmenu();
        setAriaExpandedFalse();
    })
});

document.documentElement.addEventListener("click", () => {
    closeDropdownmenu();
    setAriaExpandedFalse();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeDropdownmenu();
        setAriaExpandedFalse();
    }
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        closeDropdownmenu();
        setAriaExpandedFalse();
        toggleHamburger();
    })
});

hamburgerBtn.addEventListener("click", toggleHamburger());


const contact = document.getElementsByClassName("contact-button");

contact.addEventListener("click", () => {
    window.location.href('../contact-page.html');
});
