// Fetch (Promise)
(() => {
  const url = "https://www.pgm.gent/data/web-2/hobbies.json";

  const $list = document.querySelector('[data-list="hobbies"]');

  // async function loadData() {
  const loadData = async () => {
    const response = await fetch(url);
    const hobbies = await response.json();
    const html = hobbies
      .map((hobby) => {
        return `<li>${hobby.hours} uur ${hobby.name} per week</li>`;
      })
      .join("");
    $list.innerHTML = html;
  };

  loadData();
})();
