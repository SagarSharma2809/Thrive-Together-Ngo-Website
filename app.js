const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;

function update(cursorPosition){
    parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx;

        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.03;

        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedx * 1.1}px)) perspective(2300px) translateZ(${zValue}px)`;
    });
}

update(0);

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;
    update(e.clientX);
});
/*
let timeline = gsap.timeline();

parallax_el.forEach((el) => {
    timeline.from(
        el,
        {
            top: `${el.offsetHeight / 2 + el.dataset.distance}px`,
            duration: 3.5,
        },
        "1"
    );
});

timeline.from(".text-2 h1", {
    y: window.innerHeight - document.querySelector(".text-2 h1").getBoundingClientRect().top,
    duration: 2,
}, "2.5");
*/