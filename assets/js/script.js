
async function fetchDataAndUpdate(country) {
    const url = `https://covid-193.p.rapidapi.com/statistics?country=${country}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9f88650456msh5631892d5280bfdp163355jsn2b308e57af8e',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      const obj = JSON.parse(result);
      const kasusAktif = obj.response[0].cases.active;

      document.getElementById('Active Cases').textContent = `Active Cases : ${kasusAktif}`;
      document.getElementById('New Cases').textContent = `New Cases : ${obj.response[0].cases.new}`;
      document.getElementById('Recovered Cases').textContent = `Recovered Cases : ${obj.response[0].cases.recovered}`;
      document.getElementById('Total Cases').textContent = `Total Cases : ${obj.response[0].cases.total}`;
      document.getElementById('Total Deaths').textContent = `Total Deaths : ${obj.response[0].deaths.total}`;
      document.getElementById('Total Tests').textContent = `Total Tests : ${obj.response[0].tests.total}`;
    } catch (error) {
      console.error(error);
    }
  }

  document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const countryInput = document.getElementById('negara').value;
    fetchDataAndUpdate(countryInput);
  });

