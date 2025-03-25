document.addEventListener("DOMContentLoaded", () => {
  const accordionButtons = document.querySelectorAll(".accordion__button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const accordionItem = button.parentElement;
      const isActive = accordionItem.classList.contains(
        "accordion__item--active"
      );

      // Close all accordion items first
      document.querySelectorAll(".accordion__item").forEach((item) => {
        item.classList.remove("accordion__item--active");
      });

      // Toggle the clicked item if it wasn't already active
      if (!isActive) {
        accordionItem.classList.add("accordion__item--active");
      }
    });
  });

  // Open the first item by default
  if (accordionButtons.length > 0) {
    accordionButtons[0].parentElement.classList.add("accordion__item--active");
  }
});
