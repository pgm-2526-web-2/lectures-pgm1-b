(() => {
  const url = "https://www.pgm.gent/data/emojis/emojis.json";
  const $list = document.getElementById("list");

  console.log("JS loaded");

  const loadData = async () => {
    console.log("async loaded");

    const response = await fetch(url);
    const emojis = await response.json();

    console.log("await");

    const html = emojis
      .map((emoji) => {
        return `<li>${emoji.symbol} ${emoji.title}</li>`;
      })
      .join("");

    $list.innerHTML = html;
  };

  loadData();
})();
