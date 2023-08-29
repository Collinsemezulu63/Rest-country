//!Dark mode //
///////////////////////
//////////////////////
//////////////////////
document.querySelector(".but2").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

//!Fetch Countries//
////////////////////////
///////////////////////
//////////////////////
document.addEventListener("DOMContentLoaded", () => {
  let Main = document.querySelector("main"),
    Section = document.querySelector("section");
  async function fetchCountries() {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await response.json();
    console.log(data);
    data.forEach((country) => {
      let countryCard = document.createElement("div");
      countryCard.classList.add("country-card");
      countryCard.innerHTML = `
        <img src="${country["flags"].png}" alt="${country["flags"].alt}">
        <div class="content">
        <h1>${country["name"].common}</h1>
          <p><b>Population</b>:${country["population"]}</p>
          <p><b>Region</b>:${country["region"]}</p>
          <p><b>Capital</b>:${country["capital"]}</p>
          <p><b>Timezone</b>:${country["timezones"]["0"]}</p>
        </div>
        `;
      Main.appendChild(countryCard);
    });
  }
  fetchCountries();

  //!Filter selection//
  /////////////////////////////
  //////////////////////////////
  /////////////////////////////
  document.querySelector("input").addEventListener("input", () => {
    const input_value = document.querySelector("input").value.toUpperCase(),
      country_card = document.querySelectorAll(".country-card");
    for (let index = 0; index < country_card.length; index++) {
      const Name = country_card[index].querySelector(".content h1").innerText;
      if (Name.toUpperCase().indexOf(input_value) > -1)
        country_card[index].style.display = "";
      else country_card[index].style.display = "none";
    }
  });
});
