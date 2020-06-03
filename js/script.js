const commentsInput = document.querySelector('.input-message');
const commentsContainer = document.querySelector('.comments');
const sentBtn = document.querySelector('.sent-btn');

const userName = 'Илон Маск';

const monthArr = [
    'Января',
    'Февраля',
    'Мартф',
    'Апрел',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
];

sentBtn.addEventListener('click', () => {
    sentMessage();
});

document.addEventListener('keydown', function (event) {
    event = event || window.event;
    if (event.keyCode == 13 && event.ctrlKey) {
        sentMessage();
    }
})

function sentMessage() {
    if (commentsInput.value !== '') {

        const today = new Date();
        const month = monthArr[today.getMonth()];
        const date = today.getDate();
        const year = today.getFullYear();

        commentsContainer.innerHTML +=
            `<div class="comment-item">
                <div class="comment-item__info">
                    <span class="comment-item__info-name">
                       ${userName}
                    </span>
                    <span class="comment-item__info-date">
                        ${date} ${month} ${year}
                    </span>
                </div>
                <p class="comment-item__message">
                  ${commentsInput.value}
                </p>`

        commentsInput.value = ''
    }
}


