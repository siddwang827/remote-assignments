const url = 'https://appworks-school.github.io/Remote-Aassigiment-Data/products'
const btnCallback = document.getElementById('btn-callback')
const btnPromise = document.getElementById('btn-promise')
const result = document.querySelector('.result ');

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

// promise
function ajaxPromise(src) {
	return new Promise((resolve, reject) => {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', src);
		xhr.onload = () => {
			if (xhr.readyState === 4 && xhr.status === 200) {
				resolve(JSON.parse(xhr.responseText));
			} else {
				reject(Error(xhr.statusText))
			}
		};
		xhr.onerror = () => reject(Error('network error'))
		xhr.send();
	})
}

// async & await



function render(data) {

	data.forEach(item => {
		const dataHTML = document.createElement('div')
		const body = ` 
            <h2>${item.name}&emsp;<font size="2">售價:&nbsp; $${item.price}</font></h2>
            <p>- <em>${item.description}</em></p>
        `
		dataHTML.innerHTML = body
		result.appendChild(dataHTML)
	})
}

btnCallback.addEventListener('click', () => {
	ajaxCallback(url, render);
});

btnPromise.addEventListener('click', () => {
	ajaxPromise(url)
		.then(render)
		.catch(err => {
			result.innerHTML = '<h3>Something went wrong</h3>'
			console.log(err)
		});
});