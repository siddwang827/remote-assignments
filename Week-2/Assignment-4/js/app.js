const banner = document.getElementById('banner');
const wlcText = document.getElementById('wlc-text');
const show = document.querySelector('.show');
const hidden = document.querySelector('.hidden');

banner.addEventListener('click', () => {

    wlcText.textContent = 'Have a Good Time! :)';
    wlcText.style.fontSize = '67px';
    wlcText.style.fontFamily = 'Courier New';
    wlcText.style.color = 'black';

}
)

show.addEventListener('click', () => {
    let text;

    if (hidden.style.display === 'none') {
        text = "Hide"
        hidden.removeAttribute('style')
        show.innerHTML = `<h3>${text}</h3>`;

    } else {
        text = "Click to see more";
        hidden.style.display = 'none';
        show.innerHTML = `<h3>${text}</h3>`;
    }
})