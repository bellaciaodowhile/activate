console.log('AppJS')
// Carousel activate
$('.owl-carousel.nav-carousel').owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    dots: false,
    navText: ["<img src='assets/img/icons/prevFill.png'>", "<img src='assets/img/icons/nextFill.png'>"]
});
$('.owl-carousel.header').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<img src='assets/img/icons/prev.png'>", "<img src='assets/img/icons/next.png'>"],
    responsive: {
        0: {
            items: 1.3,
            margin: 20
        },
        420: {
            items: 2.3,
            margin: 30
        },
        600: {
            items: 2.5,
        },
        800: {
            items: 3,
        },
        1000: {
            items: 3
        }
    }
});
$('.owl-carousel.footer').owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    dots: false,
    navText: ["<img src='assets/img/icons/prevFill.png'>", "<img src='assets/img/icons/nextFill.png'>"]
});
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<img src='assets/img/icons/prevFill.png'>", "<img src='assets/img/icons/nextFill.png'>"],
    responsive: {
        0: {
            items: 1
        },
        420: {
            items: 2,
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});
// Cards Images
const bgImages = [...document.querySelectorAll('.card-activate')];
bgImages.map(img => {
    let dataBg = img.getAttribute('data-bg');
    img.style.background = `url(${ dataBg }) no-repeat`;
});

let iconMenu = document.querySelector('.menu-burguer');

iconMenu.addEventListener('click', function () {
    if (iconMenu.classList.contains('open')) {
        iconMenu.classList.remove('open');
    } else {
        iconMenu.classList.add('open');
    }
}, false);
// Sidebar Activate
const triggerSidebar = document.querySelector('.menu-burguer');
const sidebarActivate = document.querySelector('.sidebar-activate');
const closeSidebar = document.querySelector('.sidebar-close');
triggerSidebar.onclick = (e) => {
    e.preventDefault();
    sidebarActivate.classList.toggle('active');
}
/* Select Custom */
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

// * Chart
function setGaugeValue() {
    const needle = [...document.querySelectorAll('.needle')];
    needle.map(need => {
        let percentage = need.getAttribute('percentage');
        const angle = percentage * 1.8;
        need.style.transform = `translate(-50%, -100%) rotate(${angle}deg)`;
    })
}
setGaugeValue();
// * Doughnut ChartJS
if (document.getElementById("doughnut-chart") != undefined) {
    let chart = new Chart(document.getElementById("doughnut-chart"), {
        type: 'doughnut',
        data: {
            labels: ['Ambiente', 'Cultura', 'Economia', 'Educacion', 'Familia', 'Seguridad', 'Vida', 'Salud', 'Otro'],
            datasets: [{
                label: "Demandas do alimentador",
                backgroundColor: ["#44B4FA", "#D64265", "#6D82EB", "#E2A05C", "#5E8195", "#A1E2A7", "#5A7A51", "#6D82EB", "#444446"],
                data: [40, 40, 20, 38.01, 15.33, 18.29, 10, 0.13, 20]
            }, ]
        },
        options: {
            legend: false,
            responsive: true,
            tooltips: {
                displayColors: false,
                callbacks: {
                    title: function (tooltipItem, data) {
                        return data['labels'][tooltipItem[0]['index']];
                    },
                    label: function (tooltipItem, data) {
                        var dataset = data['datasets'][0];
                        var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)
                        return '%: ' + percent + '%';
                    },

                }
            }
        }
    });

    // Generar leyenda personalizada
    const legendContainer = document.getElementById("chart-legend");
    const legendItems = chart.data.labels.map((label, index) => {
        const backgroundColor = chart.data.datasets[0].backgroundColor[index];
        const legendItem = document.createElement("div");
        legendItem.classList.add("chart-legend-item");
        legendItem.innerHTML = `<img src="assets/img/menu/${label.toLowerCase()}.png" alt="${label}"><span>${label}</span>`;
        return legendItem;
    });

    // Agregar la leyenda al contenedor
    legendItems.forEach((item) => {
        legendContainer.appendChild(item);
    });
}

function updateChart(percentage) {
    const chartContainer = document.querySelector('.chart-container');
    const point = document.querySelector('.point');
    const percentageText = document.querySelector('.percentage');

    const chartRadius = chartContainer.offsetWidth / 2;
    const pointRadius = point.offsetWidth / 2;
    const angle = (percentage / 140) * 360;

    const radians = (angle - 90) * (Math.PI / 180);
    const x = Math.cos(radians) * (chartRadius - pointRadius);
    const y = Math.sin(radians) * (chartRadius - pointRadius);

    point.style.transform = `translate(${x - 16 }px, ${y - 16 }px)`;
    percentageText.children[0] = `0`; // Cantidad
}

updateChart(0); // Valor porcentual: en este caso tiene 10