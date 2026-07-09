const taxi = document.querySelector(".taxi");

setInterval(() => {
    taxi.style.transform =
    `translateY(${Math.random() * 10}px)`;
}, 300);