const btnAjax = document.getElementById('btn-ajax')

function ajax(src, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200)
            callback(JSON.parse(this.responseText));
    };
    xhr.open('GET', src);
    xhr.send();
}

function render(data) {
    const resultAjax = document.getElementById('result-ajax');

    for (dataItem of data) {
        const dataHTML = document.createElement('div')
        const body = ` 
            <h2>${dataItem.name}&emsp;<font size="2">售價:&nbsp; $${dataItem.price}</font></h2>
            <p>- <em>${dataItem.description}</em></p>
        `
        dataHTML.innerHTML = body
        resultAjax.appendChild(dataHTML)
    }
}

btnAjax.addEventListener('click', () => {
    const urlAjax = document.getElementById('url-ajax');
    ajax(urlAjax.value, render);



});