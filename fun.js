const button = document.querySelector('button');
const subInput = document.querySelector('input');
const result = document.querySelector('#result');

// fetchIt(subInput.value);

function renderList(json) {
  const posts = json;
    return `<table style="width:80%">
    <tr>
        <th>Brand</th>
        <th>Variety</th>
        <th>Style</th>
        <th>Country</th>
        <th>Stars</th>
        <th>Top Ten</th>
    </tr>
        ${posts.map(
          post => `<tr class="temp">
          <td> ${post.Brand} </td>
          <td> ${post.Variety} </td>
          <td> ${post.Style} </td>
          <td> ${post.Country} </td>
          <td> ${post.Stars} </td>
          <td> ${post["Top Ten"]} </td>     
          </tr>`
        ).join('')}
        </table>`;
}

async function fetchIt() {
  const URL = `http://starlord.hackerearth.com/TopRamen`;
  try {
    const fetchResult = fetch(new Request(URL, { method: 'GET', cache: 'reload' }));
    const response = await fetchResult;
    if (response.ok) {
      const jsonData = await response.json();
      result.innerHTML = renderList(jsonData);
    } else {
      result.innerHTML = `Response.status: ${response.status}`;
    }
  } catch (e) {
    result.innerHTML = e;
  }
}

button.addEventListener('click', () => {
  fetchIt(subInput.value);
});

function searchCountry(json) { 
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('temp');
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="table-row";                  
        } 
    } 
} 