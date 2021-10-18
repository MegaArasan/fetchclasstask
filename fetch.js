//  fetch("https://restcountries.com/v3.1/all")
//   .then((data)=>data.json())
//   .then((countries)=>console.log(countries))
//   .then((countries)=> console.log(countries.filter((countries)=>countries.population>100_00_000)))

const container=document.createElement("div")
container.className="container"
document.body.append(container)
const rowdata=document.createElement("div")
rowdata.className="row"
document.querySelector(".container").append(rowdata)
fetch("https://restcountries.com/v3/all")
  .then((data) => data.json())
  .then((countries) =>
    countries.forEach((data) => {
      const flags = document.querySelector(".row");
      flags.innerHTML += `
  <div class="col-12 col-sm-6 col-md-3">
  <div class="flag">
  <img
     src=${data.flags[0]} class="flag-responsive" 
  />
  <div class="flag_detail">
  <p class="heading">${data.name.common}</p>
  <p><b>population:</b>${data.population}</p>
  <p><b>region:</b>${data.region}</p>
  <p><b>capital:</b>${data.capital}</p>
  </div></div></div>`;
    })
  );