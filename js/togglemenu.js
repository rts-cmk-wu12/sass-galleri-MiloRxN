export function toggleMenu() {
  const toggleButtonElement = document.querySelector("#toggle-button");
  const navigationListElement = document.querySelector("#explorer__list");

  toggleButtonElement.addEventListener("click", () => {
    console.log("click");
    navigationListElement.classList.toggle("explorer__list--hidden");
  });

  navigationListElement.addEventListener("click", (e) => {
    if (e.target.id === 'list-item--more') {
      console.log(e.target.children);
      e.target.children[1].classList.toggle('explorer__sublist--hidden');
      
      if (e.target.children[1].classList.contains('explorer__sublist--hidden')) {
      e.target.children[0].style.transform = '';
      } else {
      e.target.children[0].style.transform = 'rotate(180deg)';
      }
    }
  });
}
