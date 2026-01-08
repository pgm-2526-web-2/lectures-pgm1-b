(() => {
  console.log(window.location.search);

  const params = new URLSearchParams(window.location.search);
  const $name = document.getElementById("name");

  console.log(params);

  let name = "";

  if (params.has("name")) {
    name = params.get("name");
  } else {
    name = "anonieme gebruiker";
  }

  $name.textContent = name;
})();
