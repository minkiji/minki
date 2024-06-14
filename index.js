
// fade in on scroll
const paragraphs = document.querySelectorAll(".animate-delay");

document.addEventListener("scroll", function () {
  paragraphs.forEach((paragraph) => {
    if (isInView(paragraph)) {
      paragraph.classList.add("paragraph--visible");
    }
  })
})

function isInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom > 0 &&
    rect.top <
    (window.innerheight - 50 || document.documentElement.clientHeight - 50)
  )
}

// Fade in landing page
document.addEventListener("DOMContentLoaded", function() {
  document.body.classList.add('fade-in');
});
