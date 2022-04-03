const banner = document.getElementById('banner');
const wlcText = document.getElementById('wlc-text');
const show = document.getElementsByClassName('show')[0];
const hidden = document.getElementsByClassName('hidden')[0];

banner.addEventListener('click', () => {
    wlcText.innerHTML = 'Have a Good Time! :)';
    wlcText.style.fontSize = '67px';
    wlcText.style.fontFamily = 'Courier New';
    wlcText.style.color = 'black';

}
)

show.addEventListener('click', () => {
    hidden.style.display = 'block';
    show.innerText = '';
})

