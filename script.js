// Dark mode //
document.querySelector(".but2").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

//Fetch Countries
document.addEventListener("DOMContentLoaded", () => {
  let Main = document.querySelector("main"),
    Section = document.querySelector("section"),
    Input = document.querySelector("input");
  async function fetchCountries() {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await response.json();
    console.log(data);
    // allCountries = data
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
          <p><b>Timezone</b>:${country["timezones"]}</p>
        </div>
                    `;
      Main.appendChild(countryCard);
    });
  }
  fetchCountries();
  Input.addEventListener("input", () => {
    async function fetchSearchCountries() {
      try {
        const response2 = await fetch(
          `https://restcountries.com/v3.1/name/${Input.value}?fullText=true`
        );
        const data2 = await response2.json();
        console.log(data2);
        if (response2.ok) {
          Main.style.display = "none";
        }
        data2.forEach((country) => {
          let countryCard = document.createElement("div");
          countryCard.classList.add("country-card");
          countryCard.innerHTML = `
            <img src="${country["flags"].png}" alt="${country["flags"].alt}">
            <div class="content">
              <h1>${country["name"].common}</h1>
              <p><b>Population</b>:${country["population"]}</p>
              <p><b>Region</b>:${country["region"]}</p>
              <p><b>Capital</b>:${country["capital"]}</p>
              <p><b>Timezone</b>:${country["timezones"]}</p>
            </div>
                    `;
          Section.appendChild(countryCard);
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchSearchCountries();
  });
});
