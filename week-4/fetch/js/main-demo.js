// For of loop
(() => {
  const hobbies = [
    {
      name: "klimmen",
      hours: 2,
    },
    {
      name: "voetbal",
      hours: 4,
    },
  ];

  const $list = document.getElementById("list");

  let html = "";

  for (const hobby of hobbies) {
    html += `<li>${hobby.hours} uur ${hobby.name} per week</li>`;
  }

  $list.innerHTML = html;
})();

// Map
(() => {
  const hobbies = [
    {
      name: "klimmen",
      hours: 2,
    },
    {
      name: "voetbal",
      hours: 4,
    },
  ];

  const $list = document.querySelector('[data-list="hobbies"]');

  const html = hobbies
    .map((hobby) => {
      return `<li>${hobby.hours} uur ${hobby.name} per week</li>`;
    })
    .join("");

  $list.innerHTML = html;
})();

// Fetch (then)
(() => {
  const url = "https://www.pgm.gent/data/web-2/hobbies.json";

  const $list = document.querySelector('[data-list="hobbies"]');

  fetch(url)
    .then((response) => response.json())
    .then((hobbies) => {
      const html = hobbies
        .map((hobby) => {
          return `<li>${hobby.hours} uur ${hobby.name} per week</li>`;
        })
        .join("");

      $list.innerHTML = html;
    })
    .catch((error) => {
      window.alert(error);
    });
})();

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
