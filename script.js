const btn1 = document.querySelector("#faq1");
const btn2 = document.querySelector("#faq2");
const btn3 = document.querySelector("#faq3");
const btn4 = document.querySelector("#faq4");
const btn5 = document.querySelector("#faq5");
const btn6 = document.querySelector("#faq6");

btn1.addEventListener("click", destroy);
btn2.addEventListener("click", destroy);
btn3.addEventListener("click", destroy);
btn4.addEventListener("click", destroy);
btn5.addEventListener("click", destroy);
btn6.addEventListener("click", destroy);

function destroy() {
    list.forEach(answer =>{
        if (answer.lastElementChild.style.display == "block" && answer.firstElementChild != this) {
            answer.firstElementChild.lastElementChild.style.transform = "rotate(0deg)";
            answer.lastElementChild.style.display = "none";
        }
    });
    let element = this.nextElementSibling;
    if (element.style.display == "none") {
        this.lastElementChild.style.transform = " rotate(45deg)";
        element.style.display = "block";

    }else {
        this.lastElementChild.style.transform = " rotate(0deg)";
        element.style.display = "none";
    }

}