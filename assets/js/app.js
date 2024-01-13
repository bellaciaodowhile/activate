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
const mainContent = document.querySelector('section.main');
triggerSidebar.onclick = (e) => {
    e.preventDefault();
    sidebarActivate.classList.toggle('active');
    mainContent.classList.toggle('active');
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
if (document.querySelector('.chart-container') != null) {
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
}


// * FormStep
// Obtener los elementos del DOM
let currentManual = 0;
const stepsForms = [...document.querySelectorAll('.steps__form')];
stepsForms.map(stepForm => {
    const nextBtn = stepForm.querySelector(".nextBtn");
    const prevBtn = stepForm.querySelector(".prevBtn");
    // Establecer el paso inicial
    let stepsArr = [];
    let currentStep = 0;
    showStep(currentStep);
    // Función para mostrar el paso actual
    function showStep(n) {
        console.log('Este es el actual ', n, '- step point:', stepPoint(n))
        const steps = stepForm.querySelectorAll(".steps-main > div");
        steps.forEach((step, index) => {
            if (step.getAttribute('step') != undefined) {
                if (step.getAttribute('step') != 'hidden') {
                    step.style.display = index === n ? "block" : "none";
                    stepsArr.push(step);
                }
                // TODO: Tips Zero
                if (step.style.display == 'block') {
                    if (step.getAttribute('step') == 'tips__zero') {
                        document.querySelector('.tips__zero').style.display = 'block';
                    } else {
                        document.querySelector('.tips__zero').style.display = 'none';
                    }
                }
            }
        });
    }

    // Función para ir al siguiente paso
    function nextStep() {
        if (currentStep < stepsArr.length - 1) {
            currentStep++;
            console.log(currentStep)
            showStep(currentStep);
            if (stepForm.getAttribute('item') == 'one') {
                // TODO: Tema de la campaña
                if (currentStep == 2) {
                    let valid = [...document.querySelectorAll('.options-menu-item')].filter(option => {
                        return option.classList.contains('active');
                    });
                    if (valid.length == 0) {
                        currentStep--;
                        showStep(currentStep);
                        alert('Debe seleccionar una opción para continuar')
                    }
                }
                // TODO: Como quieres escribir tu campaña
                if (currentStep == 3) {
                    let valid = [...document.querySelectorAll('.option__writer')].filter(option => {
                        return option.classList.contains('active');
                    });
                    if (valid.length == 0) {
                        currentStep--;
                        showStep(currentStep);
                        alert('Debe seleccionar una opción para continuar')
                    }
                    console.log(valid[0])
                    if (valid[0] != undefined) {
                        if (valid[0].getAttribute('item') == 'create__ia') {
                            // TODO: OpenAI
                            document.querySelector('.steps__form__ia').style.display = 'block';
                            document.querySelector('.steps__form[item="one"]').style.display = 'none';
                            showStep(2);
                            currentStep--;
                            currentOpenAI = 0;
                            localStorage.setItem('form','openai')
                        } else {
                            // TODO: Manual
                            document.querySelector('.steps__form__manual').classList.add('active');
                            document.querySelector('.steps__form[item="one"]').style.display = 'none';
                            showStep(2);
                            currentStep--;
                            localStorage.setItem('form','manual')
                            document.querySelector('.tips__zero').style.display = 'block';
                            currentManual = 0;
                        }
                    }
                }
            }
        }
    }

    // Función para ir al paso anterior
    function prevStep() {
        console.log('Atrás - ', currentStep)

        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    }

    // Función para ir al step específico
    function stepPoint(point) {
        return point;
    }
    // Agregar los eventos a los botones de siguiente y atrás
    nextBtn.addEventListener("click", nextStep);
    prevBtn.addEventListener("click", prevStep);

});
const stepsManual = document.querySelector('.steps__form__manual');
// if (localStorage.getItem('form') == 'openai') {
//     currentManual = 2;
// }
stepsManual.querySelector('.nextBtn').onclick = (e) => {
    if (e.currentTarget.textContent == 'Enviar petición') {
        alert('Mostrando revisión')
        document.querySelector('.container__mail').style.display = 'block';
        document.querySelector('.content__main').style.display = 'none';
    }
    currentManual++;
    if (document.querySelector('#title__campaign').value == '') {
        alert('Se requiere el titulo')
        currentManual--;
    } else {
        nextBtnManual(currentManual);
    }
    
};
stepsManual.querySelector('.prevBtn').onclick = (e) => {
    currentManual--;
    console.log(currentManual);
    prevBtnManual(currentManual);
};
document.querySelector('.preview').onclick = (e) => {
    e.preventDefault();
    document.querySelector('.container__check').style.display = 'block';
    document.querySelector('.container__mail').style.display = 'none';
}

function nextBtnManual(n, status = '') {
    console.log('Nextmanual')
    console.log(n)
    console.log(localStorage.getItem('form'))
    if (n == 0) {
        // if (localStorage.getItem('form') != 'openai') {
        if (document.querySelector('#title__campaign').value == '') {
            alert('Se requiere el título de la campaña para continuar')
            currentManual--;
        }
        // }
    }
    if (n == 1) {
        document.querySelector('div[step="tips__zero"]').style.display = 'none';
        document.querySelector('.tips__zero-1').style.display = 'block';
        document.querySelector('.tips__zero__1').style.display = 'none';
    }
    if (n == 2) {
        console.log(document.querySelector('.note-editable').innerHTML)
        if (status != '') {
            document.querySelector('.tips__zero-1').style.display = 'none';
            document.querySelector('.tips__zero-2').style.display = 'block';
            document.querySelector('.tips__zero__2').style.display = 'block';
        } else {
            if (document.querySelector('.note-editable').innerHTML == '<p><br></p>') {
                alert('Debe llenar el campo antes de continuar');
                currentManual--;
            } else {
                document.querySelector('.tips__zero-1').style.display = 'none';
                document.querySelector('.tips__zero-2').style.display = 'block';
                document.querySelector('.tips__zero__2').style.display = 'block';
            }
        }
    }
    if (n == 3) {
        document.querySelector('.tips__zero-2').style.display = 'none';
        document.querySelector('.tips__zero-3').style.display = 'block';
        document.querySelector('.tips__zero__2').style.display = 'none';
    }
    if (n == 4) {
        document.querySelector('.tips__zero-3').style.display = 'none';
        document.querySelector('.tips__zero-4').style.display = 'block';
        document.querySelector('.tips__phone').style.display = 'block';
    }
    if (n == 5) {
        document.querySelector('.tips__zero-4').style.display = 'none';
        document.querySelector('.tips__zero-5').style.display = 'block';
        document.querySelector('.tips__phone').style.display = 'none';
        document.querySelector('.btn__remove').remove();
        document.querySelector('.send__campaign').textContent = 'Enviar petición';

        console.log(document.querySelector('.btn__remove'))
        console.log(document.querySelector('.send__campaign'))
    }
}

function prevBtnManual(n) {
    console.log(n)
    if (n == 0) {
        document.querySelector('div[step="tips__zero"]').style.display = 'block';
        document.querySelector('.tips__zero-1').style.display = 'none';
        document.querySelector('.tips__zero__1').style.display = 'block';
    }
    // TODO: Volver a la principal para cambiar modo "Manual" o "IA"
    if (n < 0) {
        document.querySelector('.steps__form__manual').classList.remove('active');
        document.querySelector('.steps__form[item="one"]').style.display = 'block';
        document.querySelectorAll(".steps-main > div")[2].style.display = 'block';
    }
    if (n == 1) {
        document.querySelector('.tips__zero-1').style.display = 'block';
        document.querySelector('.tips__zero-2').style.display = 'none';
        document.querySelector('.tips__zero__2').style.display = 'none';
    }
    if (n == 2) {
        document.querySelector('.tips__zero-2').style.display = 'block';
        document.querySelector('.tips__zero__2').style.display = 'block';
        document.querySelector('.tips__zero-3').style.display = 'none';
    }
    if (n == 3) {
        document.querySelector('.tips__zero-3').style.display = 'block';
        document.querySelector('.tips__zero-4').style.display = 'none';
        document.querySelector('.tips__phone').style.display = 'none';
    }
    if (n == 4) {
        document.querySelector('.tips__zero-4').style.display = 'block';
        document.querySelector('.tips__zero-5').style.display = 'none';
    }
}
// * IA
let currentOpenAI = 0;
const stepsOpenAI = document.querySelector('.steps__form__ia');
let stepsOnlyOpenAI = [...stepsOpenAI.querySelectorAll('div[step]')];
stepsOpenAI.querySelector('.nextBtn').onclick = (e) => {
    currentOpenAI++;
    nextBtnOpenAI(currentOpenAI);
};
stepsOpenAI.querySelector('.prevBtn').onclick = (e) => {
    currentOpenAI--;
    prevBtnOpenAI(currentOpenAI);
};
stepsOnlyOpenAI.map(step => {
    let current = step.getAttribute('step');
    if (current == 'step_' + currentOpenAI) {
        console.log('step_' + currentOpenAI)
        step.style.display = 'block';
    } else {
        step.style.display = 'none';
    }
});
function nextBtnOpenAI(n) {
    console.log(n)
    let opentai__one = document.querySelector('textarea[name="openai__one"]');
    if (n == 1) {
        if (opentai__one.value == '') {
            alert('Se requiere llenar este paso para continuar')
            currentOpenAI--;
        } else {
            document.querySelector('[step="step_0"]').style.display = 'none';
            document.querySelector('[step="step_1"]').style.display = 'block';
            stepsOpenAI.querySelector('.openai__controls').style.display = 'none';

            // TODO: Realizando proceso con OPENAI
            // ? opentai__one.value

            setTimeout(() => {
                nextBtnOpenAI(currentOpenAI = 2);
            }, 5000);
            let text = 'Mientras lees esto, están corriendo 5 seg. para cambiar al otro paso, solo es una simulación de espera. Este es el contenido que leerá OpenAI: ' + opentai__one.value;
            alert(text);
        }
    }
    if (n == 2) {
        stepsOpenAI.querySelector('.openai__controls').style.display = 'block';
        document.querySelector('[step="step_1"]').style.display = 'none';
        document.querySelector('[step="step_2"]').style.display = 'block';
        // TODO: Titulo de la campañana por OpenAI
        document.querySelector('#title__campaign__openai').value = 'Este es el título que eligió OpenAI para ti: ' + opentai__one.value.slice(0, 20);
        // TODO: Descripción de la campaña por OpenAI
        var contenido = `<p>${'Esta es la descripción que elegió OpenAI para ti: ' + opentai__one.value }</p>`;
        $('#summernote__openai').summernote('code', contenido);
    }
    if (n == 3) {
        document.querySelector('[step="step_2"]').style.display = 'none';
        document.querySelector('[step="step_3"]').style.display = 'block';
    }
    if (n == 4) {
        document.querySelector('.steps__form__ia').style.display = 'none';
        document.querySelector('.steps__form__manual').classList.add('active');
        document.querySelector('[step="tips__zero"]').style.display = 'none';
        nextBtnManual(currentManual = 2, 'true');
    }
}
function prevBtnOpenAI(n) {
    console.log(n)
    if (n < 0) {
        document.querySelector('.steps__form__ia').style.display = 'none';
        document.querySelector('.steps__form[item="one"]').style.display = 'block';
        currentOpenAI = 0;
    }
    if (n == 1) {
        document.querySelector('[step="step_0"]').style.display = 'block';
        document.querySelector('[step="step_2"]').style.display = 'none';
        currentOpenAI--;
    }
    if (n == 2) {
        document.querySelector('[step="step_3"]').style.display = 'none';
        document.querySelector('[step="step_2"]').style.display = 'block';
    }
}




// * Search step one
var searchIndex = ['Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Chiapas', 'Chihuahua', 'Coahuila de Zaragoza', 'Colima', 'Ciudad de México', 'Durango', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco', 'Estado de Mexico', 'Michoacan de Ocampo', 'Morelos', 'Nayarit', 'Nuevo Leon', 'Oaxaca', 'Puebla', 'Queretaro de Arteaga', 'Quintana Roo', 'San Luis Potosi', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz de Ignacio de la Llave', 'Yucatan', 'Zacatecas'];

// TODO: De aquí saqué la información de los estados 
// ? https://gist.github.com/ramirors/5a53bbe135e0dc32728b

var input = document.getElementById("searchBox"),
    ul = document.getElementById("searchResults"),
    inputTerms, termsArray, prefix, terms, results, sortedResults;


var search = function () {
    inputTerms = input.value.toLowerCase();
    results = [];
    termsArray = inputTerms.split(' ');
    prefix = termsArray.length === 1 ? '' : termsArray.slice(0, -1).join(' ') + ' ';
    terms = termsArray[termsArray.length - 1].toLowerCase();

    for (var i = 0; i < searchIndex.length; i++) {
        var a = searchIndex[i].toLowerCase(),
            t = a.indexOf(terms);

        if (t > -1) {
            results.push(a);
        }
    }

    evaluateResults();
};

var evaluateResults = function () {
    if (results.length > 0 && inputTerms.length > 0 && terms.length !== 0) {
        sortedResults = results.sort(sortResults);
        appendResults();
    } else if (inputTerms.length > 0 && terms.length !== 0) {
        ul.innerHTML = '<li>No se encuentra <strong>' +
            inputTerms +
            '</strong> en este buscador';

    } else if (inputTerms.length !== 0 && terms.length === 0) {
        return;
    } else {
        clearResults();
    }
};

var sortResults = function (a, b) {
    if (a.indexOf(terms) < b.indexOf(terms)) return -1;
    if (a.indexOf(terms) > b.indexOf(terms)) return 1;
    return 0;
}

var appendResults = function () {
    clearResults();

    for (var i = 0; i < sortedResults.length && i < 5; i++) {
        var li = document.createElement("li"),
            result = prefix +
            sortedResults[i].toLowerCase().replace(terms, '<strong>' +
                terms +
                '</strong>');
        li.classList.add('option__list');
        li.innerHTML = result;
        ul.appendChild(li);
    }

    if (ul.className !== "term-list") {
        ul.className = "term-list";
    }

    // *
    [...document.querySelectorAll('.option__list')].map(option => {
        option.onclick = (e) => {
            e.preventDefault();
            document.querySelector('#searchBox').value = option.textContent;
            document.querySelector('#searchResults').classList.add('hidden');
            console.log(option)
        }
    });
};

var clearResults = function () {
    ul.className = "term-list hidden";
    ul.innerHTML = '';
};

input.addEventListener("keyup", search, false);

// * Seleccionando tema
const optionsStepTwo = [...document.querySelectorAll('nav.step .options-menu-item')];
optionsStepTwo.map(option => {
    option.addEventListener('click', () => {
        optionsStepTwo.map(option => option.classList.remove('active'));
        option.classList.add('active');
    });
});
const optionsStepThree = [...document.querySelectorAll('.option__writer')];
optionsStepThree.map(option => {
    option.addEventListener('click', () => {
        optionsStepThree.map(option => option.classList.remove('active'));
        option.classList.add('active');
    });
});
// * Editor Manual
$('#summernote').summernote({
    placeholder: '',
    tabsize: 2,
    height: 100,
    toolbar: [
        ['font', ['bold', 'italic']],
        ['para', ['ol', 'ul']],
        ['insert', ['link', 'video', 'picture']],
        ['view', ['help']]
    ]
});

// * Editor OpenAI
$('#summernote__openai').summernote({
    placeholder: '',
    tabsize: 2,
    height: 100,
    toolbar: [
        ['font', ['bold', 'italic']],
        ['para', ['ol', 'ul']],
        ['insert', ['link', 'video', 'picture']],
        ['view', ['help']]
    ]
});

// * Accordion
// Data
accButtons = document.querySelectorAll('.acc-btn');
// Functions
function toggleAccordion() {
    this.classList.toggle('acc-btn--is-active');
}
// Events
accButtons.forEach(button => button.addEventListener('click', toggleAccordion));

// * Upload Image
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('.image-upload-wrap').hide();
            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();
            $('.image-title').html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);

    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});