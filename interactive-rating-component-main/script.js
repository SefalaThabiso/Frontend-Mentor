const multipleRatings = document.querySelector("[data-ratings]");
const rating = multipleRatings.querySelectorAll("[data-rating]");

rating.forEach((x) => {
  x.addEventListener("click", (e) => {
    x.setAttribute(
      "style",
      "background-color: hsl(216, 12%, 54%); color: hsl(0, 0%, 100%)"
    );
  });
});
