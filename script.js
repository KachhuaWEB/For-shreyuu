
const modal = document.getElementById("letterModal");
const openButton = document.getElementById("openLetter");
const closeButton = document.getElementById("closeLetter");
const sendHugButton = document.getElementById("sendHug");
const hugMessage = document.getElementById("hugMessage");

// Open the surprise letter
function openModal() {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

// Close the surprise letter
function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// Button interactions
openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

// Close when clicking outside the popup
modal.querySelector(".modal-backdrop").addEventListener("click", closeModal);

// Close using Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Virtual hug interaction
sendHugButton.addEventListener("click", () => {
  hugMessage.classList.add("show");

  // Create floating hearts and flowers
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("span");

    heart.className = "heart-pop";

    heart.textContent = ["♡", "♥", "✿", "✧"][
      Math.floor(Math.random() * 4)
    ];

    heart.style.left = `${35 + Math.random() * 30}%`;
    heart.style.top = `${55 + Math.random() * 20}%`;

    heart.style.setProperty(
      "--x",
      `${(Math.random() - 0.5) * 260}px`
    );

    document.body.appendChild(heart);

    // Remove after animation
    setTimeout(() => {
      heart.remove();
    }, 1500);
  }
});

// Animated memory cards on scrolling
document.querySelectorAll(".memory-card").forEach((card, index) => {

  card.style.opacity = "0";
  card.style.transform = "translateY(16px)";

  const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        card.style.transition =
          `opacity .6s ease ${index * 120}ms,
           transform .6s ease ${index * 120}ms`;

        card.style.opacity = "1";
        card.style.transform = "translateY(0)";

        observer.disconnect();
      }

    });

  }, {
    threshold: 0.15
  });

  observer.observe(card);
});
