(() => {
  const $btn = document.querySelector("[data-js-trigger]");
  const $output = document.querySelector("[data-js-output]");
  const items = [
    {
      name: "1PGMb",
      amount: 30,
    },
    {
      name: "1PGMa",
      amount: 20,
    },
  ];

  $btn.addEventListener("click", function () {
    localStorage.setItem("classes", JSON.stringify(items));
  });

  const classes = localStorage.getItem("classes");
  if (classes) {
    console.log(JSON.parse(classes));
    $output.innerText = classes;
  }
})();
