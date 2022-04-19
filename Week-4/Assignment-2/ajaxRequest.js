const url = 'https://appworks-school.github.io/Remote-Aassigiment-Data/products'
const btnCallback = document.getElementById('btn-callback')
const btnPromise = document.getElementById('btn-promise')
const btnFetch = document.getElementById('btn-fetch')
const btnAsync = document.getElementById('btn-async')
const btnClear = document.getElementById('clear')
const result = document.querySelector('.result ');


function render(data) {
  const container = document.createElement('div')
  result.appendChild(container)
  container.classList.add('flex-col')
  data.forEach(item => {
    const responseData = document.createElement('div')
    container.appendChild(responseData)
    responseData.innerHTML =
      ` 
        <h2>${item.name}&emsp;<font size="2">售價:&nbsp; $${item.price}</font></h2>
        <p>- <em>${item.description}</em></p>
      `
  })
}


// ajax callback
function ajaxCallback(src, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', src);
  xhr.onload = () => {
    if (xhr.status === 200)
      callback(JSON.parse(xhr.responseText));
  };
  xhr.send();
}

btnCallback.addEventListener('click', () => {
  ajaxCallback(url, render);
});


// promise
function ajaxPromise(src) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', src);
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(Error(xhr.statusText))
      }
    };
    xhr.onerror = () => reject(Error('network error'))
    xhr.send();
  })
}

btnPromise.addEventListener('click', () => {
  ajaxPromise(url)
    .then(render)
    .catch(err => {
      result.innerHTML = '<h3>Something went wrong</h3>'
      console.log(err)
    });
});


// Fetch
btnFetch.addEventListener('click', () => {
  fetch(url)
    .then(response => response.json())
    .then(render)
    .catch(err => {
      result.innerHTML = '<h3>Something went wrong</h3>'
      console.log(err)
    });
});

// async & await

async function ajaxAsync(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw (error)
  }
}

btnAsync.addEventListener('click', async () => {
  const product = await ajaxAsync(url)
  render(product)
});





btnClear.addEventListener('click', () => {
  result.innerHTML = ""
})