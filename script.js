// if (performance.navigation.type == 1) {
//   // Halaman di-refresh, maka lakukan scroll ke atas
//   window.scrollTo(0, 0);
// }

function highlightLinkWhenScrolled() {
  const desktopNavLinks = document.querySelectorAll(
    "#desktop-nav a[href^='#']"
  );
  const mobileNavLinks = document.querySelectorAll("#mobile-nav a[href^='#']");
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let currentSectionIndex = 0;
    let minDistance = Math.abs(
      sections[currentSectionIndex].getBoundingClientRect().top
    );
    console.log(scroll);
    // Find the section closest to the top of the viewport
    sections.forEach((section, index) => {
      const distance = Math.abs(section.getBoundingClientRect().top);
      if (distance < minDistance) {
        minDistance = distance;
        currentSectionIndex = index;
      }
    });

    // Remove the highlight class from all links in both desktop and mobile navigation
    desktopNavLinks.forEach((link) => {
      link.classList.remove("text-sky-400", "dark:text-sky-400");
    });
    mobileNavLinks.forEach((link) => {
      link.classList.remove(
        "fill-sky-400",
        "dark:!fill-sky-400",
        "text-sky-400",
        "dark:text-sky-400"
      );
    });

    // Add the highlight class to the link corresponding to the current section in both desktop and mobile navigation
    const currentLinkDesktop = document.querySelector(
      `#desktop-nav a[href="#${sections[currentSectionIndex].id}"]`
    );
    const currentLinkMobile = document.querySelector(
      `#mobile-nav a[href="#${sections[currentSectionIndex].id}"]`
    );

    if (currentLinkDesktop) {
      currentLinkDesktop.classList.add("text-sky-400", "dark:text-sky-400");
    }
    if (currentLinkMobile) {
      currentLinkMobile.classList.add(
        "fill-sky-400",
        "dark:!fill-sky-400",
        "text-sky-400",
        "dark:text-sky-400"
      );
    }
  });
}

highlightLinkWhenScrolled();

// document.addEventListener("DOMContentLoaded", function () {
//   var inputElement = document.getElementById("inputId"); // Ganti "inputId" dengan ID elemen input Anda
//   inputElement.addEventListener("input", function () {
//     this.value = this.value.toUpperCase();
//   });
// });

function contactForm() {
  var headerElement = document.querySelector("header");
  return {
    formData: {
      access_key: "b9261871-9051-43d4-9167-c8d3cb179b4d", // Ganti dengan access key Anda
      subject: "Pesan Dari Portofolio",
      from_name: "",
      name: "",
      email: "",
      message: "",
    },
    loading: false,
    status: "",
    statusHtml: "",

    async submitForm() {
      this.status = "";
      this.statusHtml = "";
      this.loading = true;
      headerElement.classList.add("hidden");
      document.body.style.overflowY = "hidden";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(this.formData),
      });

      const result = await response.json();
      if (result.success) {
        this.statusHtml = `<p class="success">${
          result.message || "Success"
        }</p>`;
        this.showModal();
      } else {
        this.statusHtml = `<p class="error">${
          result.message || "An error occurred."
        }</p>`;
        this.showModal();
      }

      this.loading = false;
    },

    showModal() {
      this.status = true;
    },

    closeModal() {
      this.status = false;
      document.body.style.overflowY = "auto";
      headerElement.classList.remove("hidden");
    },
  };
}

fetch("dashboard.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("Dashboard").innerHTML = data));

fetch("services.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("Services").innerHTML = data));

fetch("portofolio.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("Portofolio").innerHTML = data));

fetch("contact.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("Contact").innerHTML = data));

function darkModeListener() {
  document.querySelector("html").classList.toggle("dark");
}
const checkboxDesktop = document.querySelector("input[type='checkbox']#theme");
const checkboxMobile = document.querySelector(
  "input[type='checkbox']#theme.mobile"
);
document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
  checkbox.addEventListener("click", darkModeListener);
});

const section = document.querySelector("section");
const height = section.height();
console.log(height);
