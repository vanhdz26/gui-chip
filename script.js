const envelope = document.getElementById("envelope");
const closeBtn = document.getElementById("closeBtn");


// ============================
// MỞ / ĐÓNG PHONG BÌ
// ============================

envelope.addEventListener("click", function () {

    envelope.classList.toggle("open");

});


// Nút đóng thư

closeBtn.addEventListener("click", function (event) {

    event.stopPropagation();

    envelope.classList.remove("open");

});


// ============================
// TẠO TIM BAY
// ============================

const heartsContainer = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = Math.random() > 0.5 ? "♡" : "♥";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.bottom = "-30px";

    heart.style.fontSize =
        (12 + Math.random() * 18) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 7) + "s";

    heart.style.animationDelay =
        Math.random() * 2 + "s";

    heartsContainer.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 14000);
}


// tạo tim liên tục

setInterval(createHeart, 700);


// tạo sẵn vài cái khi mở web

for (let i = 0; i < 12; i++) {

    setTimeout(createHeart, i * 300);

}