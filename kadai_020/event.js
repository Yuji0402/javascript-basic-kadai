const clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click', () => {
    const h2 = document.querySelector('h2');
    h2.textContent = ('ボタンをクリックしました');
});