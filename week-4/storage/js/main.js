(() => {
  const $input = document.querySelector("[data-js-input");
  const $output = document.querySelector("[data-js-output");
  const $btn = document.querySelector("[data-js-button");
  const $clear = document.querySelector("[data-js-reset");

  $output.textContent = localStorage.getItem("data");

  $btn.addEventListener("click", function () {
    const value = $input.value;

    localStorage.setItem("data", value);
  });

  $clear.addEventListener("click", function () {
    localStorage.clear();
    $output.textContent = "no data";
  });
})();
