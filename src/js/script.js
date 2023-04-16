setInterval(function () {
    var now = new Date();
    var clock = document.getElementById("clock");
    clock.innerHTML = now.toLocaleTimeString();
}, 1000);

/* document.addEventListener("DOMContentLoaded", function() {
    const cardClick = document.getElementsByClassName("card");
    for (i = 0; i < cardClick.length; i++) {
        cardClick[i].addEventListener("click", function() {
            if (!this.classList.contains("card_active")) {
                this.classList.add("card_active");
            } else {
                this.classList.remove("card_active");
            }
    });
    }
}) */

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("on-of").addEventListener("click", function() {
        if (!document.querySelector(".main").classList.contains("card_active")) {
            document.querySelector(".main").classList.add("card_active");
            document.getElementById("on-of").classList.add("card_active");
        } else {
            document.querySelector(".main").classList.remove("card_active");
            document.getElementById("on-of").classList.remove("card_active");
        }
    });
})

const openPopUp = document.getElementById('pop-up_open');
const closePopUp = document.getElementById('pop-up_close');
const popUp = document.getElementById('pop-up');

openPopUp.addEventListener('click', function(e) {
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})