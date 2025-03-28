let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let items = document.querySelectorAll('.list .item');
let indicators = document.querySelectorAll('.indicators ul li');
let numberIndicator = document.querySelector('.indicators .number');

let activeIndex = 0;
let totalItems = items.length;

function updateSlider() {
    // Remove a classe "active" do item atual
    document.querySelector('.item.active').classList.remove('active');
    document.querySelector('.indicators ul li.active').classList.remove('active');

    // Adiciona a classe "active" ao novo item
    items[activeIndex].classList.add('active');
    indicators[activeIndex].classList.add('active');

    // Atualiza o número indicador
    numberIndicator.innerHTML = '0' + (activeIndex + 1);
}

nextButton.onclick = () => {
    activeIndex = (activeIndex + 1) % totalItems;
    updateSlider();
};

prevButton.onclick = () => {
    activeIndex = (activeIndex - 1 + totalItems) % totalItems;
    updateSlider();
};
