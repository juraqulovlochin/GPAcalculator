let boshlash = document.querySelector('#boshlash');
let div = document.getElementById('container');
let ishchidiv = document.getElementById('ishchi');
let satryigish = document.getElementById('satryigish');

let fanlar = [];
let baxolar = [];
let kreditlar = [];

boshlash.addEventListener('click', function () {
    ishchidiv.textContent = "";
    satryigish.innerHTML = "";
    fanlar = [];
    baxolar = [];
    kreditlar = [];

    let soni = parseInt(document.getElementById('fan_s').value);
    atribut_jadval();
    fanjadval(soni);
    GPA();
});

let fanjadval = (soni) => {
    for (let i = 0; i < soni; i++) {
        let fan = document.createElement('input');
        let baxo = document.createElement('input');
        let kredit = document.createElement('input');

        baxo.type = "number";
        kredit.type = "number";

        fanlar.push(fan);
        baxolar.push(baxo);
        kreditlar.push(kredit);

        satryigish.appendChild(fan);
        satryigish.appendChild(baxo);
        satryigish.appendChild(kredit);
    }
    ishchidiv.appendChild(satryigish);
};

let atribut_jadval = () => {
    let fan_nomi = document.createElement('p');
    let fan_nomi_qiymat = document.createTextNode('Fan nomi');
    let fan_baxo = document.createElement('p');
    let fan_baxo_qiymat = document.createTextNode('Fan baxosi');
    let fan_kredit = document.createElement('p');
    let fan_kredit_qiymat = document.createTextNode('Fan krediti');

    fan_nomi.appendChild(fan_nomi_qiymat);
    fan_baxo.appendChild(fan_baxo_qiymat);
    fan_kredit.appendChild(fan_kredit_qiymat);

    satryigish.appendChild(fan_nomi);
    satryigish.appendChild(fan_baxo);
    satryigish.appendChild(fan_kredit);
};

let GPA = () => {
    let div2 = document.createElement('div');
    div2.style.marginTop = "20px";
    let gpa = document.createElement('button');
    gpa.textContent = "GPA";
    let natija = document.createElement('p');
    natija.textContent = "0.00";


    gpa.addEventListener('click', function () {
        let ummum = 0;
        let ummum_kredit = 0;

        for (let i = 0; i < baxolar.length; i++) {
            let grade = baxolar[i].value.trim();
            let credit = kreditlar[i].value.trim();
            if (grade === "" || credit === "") {
                alert("Barcha maydonlarni to‘ldiring!");
                return;
            }

            let gradeValue = parseFloat(grade) || 0;
            let creditValue = parseFloat(credit) || 0;

            ummum += gradeValue * creditValue;
            ummum_kredit += creditValue;
        }

        let GPA_qiymati = ummum_kredit > 0 ? (ummum / ummum_kredit).toFixed(2) : "0.00";
        natija.textContent = GPA_qiymati;
    });

    satryigish.appendChild(gpa);
    satryigish.appendChild(natija);
};
let oq = document.getElementById('oq');
let qora = document.getElementById('qora');
oq.addEventListener('click', function () {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
});
qora.addEventListener('click', function () {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
});






