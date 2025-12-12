(() => {
  const $buttons = document.querySelectorAll("[data-theme-id]");
  // const $buttons = document.querySelectorAll(".btn");

  const setTheme = async (id) => {
    const response = await fetch(`https://www.pgm.gent/data/web-2/themes/theme-${id}.json`);
    const data = await response.json();

    console.log(data);
    // variabelen aanpassen op basis van data
    document.documentElement.style.setProperty("--bg-color", data.background);
    document.documentElement.style.setProperty("--text-color", data.text);
    document.documentElement.style.setProperty("--font-family", data.fontFamily);
  };

  for (const $button of $buttons) {
    $button.addEventListener("click", function (e) {
      const themeId = e.currentTarget.dataset.themeId;

      setTheme(themeId);
    });
  }
})();
