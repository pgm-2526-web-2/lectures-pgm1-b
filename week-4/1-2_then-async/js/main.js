// Optie 1
// (() => {
//   const url = "https://www.pgm.gent/data/web-2/info.json";
//   const $title = document.getElementById("title");
//   const $description = document.getElementById("description");

//   fetch(url)
//     .then((response) => response.json())
//     .then((info) => {
//       $title.textContent = info.title;
//       $description.textContent = info.description;
//     })
//     .catch((error) => {
//       window.alert(error);
//     });
// })();

// Optie 2
(() => {
  const url = "https://www.pgm.gent/data/web-2/info.json";
  const $title = document.getElementById("title");
  const $description = document.getElementById("description");

  // async function loadData() {
  const loadData = async () => {
    try {
      const response = await fetch(url);
      const info = await response.json();

      $title.textContent = `${info.title}`;
      $description.textContent = `${info.description}`;

      // console.error("test");
      // console.warn("test");
      // console.log("test");
    } catch (error) {
      window.alert(error);
    }
  };

  loadData();
})();
