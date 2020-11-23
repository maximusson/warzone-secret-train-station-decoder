console.log("halle");

const reset = document.querySelector('.reset');
const middle = document.querySelector('.middle');
const sources = document.querySelectorAll('.source');
const adds = document.querySelectorAll('.add');
let counter = 0;

reset.addEventListener('click', (e) => {
    //middle.innerHTML = '<h2>Images</h2>';
    //const counter = 0;
});

let r1 = document.querySelectorAll('.plus1');
let r2 = document.querySelectorAll('.plus2');
let r3 = document.querySelectorAll('.plus3');
let r4 = document.querySelectorAll('.plus4');


sources.forEach(s => {
    s.addEventListener('click', (e) => {
        counter++;
        let outputImage = e.target.id;
        outputImage = outputImage.replace('source','');

        const innerHTML = `
        <div class="row">
            <div class="column">
                <img src="/images/out${outputImage}.png" class="output" id="output${counter}" style="width:70%">
            </div>
            <div class="column-add">
                <img src="/images/add??.png" class="output-add" id="output-add-${counter}"  style="width:100%">
            </div>
            <div class="column">
            <div class="row2">
                <div class="column">
                    <img src="/images/plus1.png" class="plus${counter}" data-counter="${counter}" data-value="1" style="width:100%">
                </div>
                <div class="column">
                    <img src="/images/plus2.png" class="plus${counter}" data-counter="${counter}" data-value="2" style="width:100%">
                </div>
                <div class="column">
                    <img src="/images/plus3.png" class="plus${counter}" data-counter="${counter}" data-value="3" style="width:100%">
                </div>
                <div class="column">
                    <img src="/images/plus4.png" class="plus${counter}" data-counter="${counter}" data-value="4" style="width:100%">
                </div>
                <div class="column">
                    <img src="/images/plus5.png" class="plus${counter}" data-counter="${counter}" data-value="5" style="width:100%">
                </div>
            </div>
            <div class="row2">
                <div class="column">
                    <img src="/images/plus6.png" class="plus${counter}" data-counter="${counter}" data-value="6" style="width:100%">
                </div>
                <div class="column">
                    <img src="/images/plus7.png" class="plus${counter}" data-counter="${counter}" data-value="7" style="width:100%">
                </div>
                <div class="column">
                    <img src="/images/plus8.png" class="plus${counter}" data-counter="${counter}" data-value="8" style="width:100%">
                </div>
                <div class="column">
                    <img src="/images/plus9.png" class="plus${counter}" data-counter="${counter}" data-value="9" style="width:100%">
                </div>
                <div class="column">
                    <img src="/images/plus10.png" class="plus${counter}" data-counter="${counter}" data-value="10" style="width:100%">
                </div>
            </div>
            </div>
        </div>`;

        middle.innerHTML += innerHTML;

         r1 = document.querySelectorAll('.plus1');
         r2 = document.querySelectorAll('.plus2');
         r3 = document.querySelectorAll('.plus3');
         r4 = document.querySelectorAll('.plus4');

         r1.forEach(r => {
            r.addEventListener('click', (e) => {
                r1.forEach(rC => {
                    rC.classList.remove('active');
                })

                e.target.classList.add('active');

            })
        })

        r2.forEach(r => {
            r.addEventListener('click', (e) => {
                r2.forEach(rC => {
                    rC.classList.remove('active');
                })

                e.target.classList.add('active');

            })
        })

        r3.forEach(r => {
            r.addEventListener('click', (e) => {
                r3.forEach(rC => {
                    rC.classList.remove('active');
                })

                e.target.classList.add('active');

            })
        })

        r4.forEach(r => {
            r.addEventListener('click', (e) => {
                r4.forEach(rC => {
                    rC.classList.remove('active');
                })

                e.target.classList.add('active');

            })
        })

    });
})

adds.forEach(a => {
    a.addEventListener('click', (e) => {
        let addImage = e.target.id;
        addImage = addImage.replace("add",'');

        const actImage = document.getElementById('output-add-' + counter);
        actImage.src = `/images/add${addImage}.png`;

    })
})


window.addEventListener('click', (e) => {
    const active = document.querySelectorAll('.active');
    if (active.length === 4) {
        // calculate code
        const add1 = document.getElementById('output-add-1');
        const add2 = document.getElementById('output-add-2');
        const add3 = document.getElementById('output-add-3');
        const add4 = document.getElementById('output-add-4');
        
        let a1 = add1.src
        a1 = a1.split('add')[1];
        a1 = a1.replace('.png');

        let a2 = add2.src
        a2 = a2.split('add')[1];
        a2 = a2.replace('.png');
        let a3 = add3.src
        a3 = a3.split('add')[1];
        a3 = a3.replace('.png');
        let a4 = add4.src
        a4 = a4.split('add')[1];
        a4 = a4.replace('.png');

        a1 = parseFloat(a1);
        a2 = parseFloat(a2);
        a3 = parseFloat(a3);
        a4 = parseFloat(a4);

        let p1 = 0;
        let p2 = 0;
        let p3 = 0;
        let p4 = 0;

        active.forEach(p => {
            console.log(p)
            if (parseFloat(p.getAttribute('data-counter')) ===1 ) {
                p1 = parseFloat(p.getAttribute('data-value'));
            }
            if (parseFloat(p.getAttribute('data-counter')) ===2 ) {
                p2 = parseFloat(p.getAttribute('data-value'));
            }
            if (parseFloat(p.getAttribute('data-counter')) ===3 ) {
                p3 = parseFloat(p.getAttribute('data-value'));
            }
            if (parseFloat(p.getAttribute('data-counter')) ===4 ) {
                p4 = parseFloat(p.getAttribute('data-value'));
            }
        })

        const a = String(a1) + ' ' + String(a2) + ' ' +String(a3) + ' ' +String(a4);
        const p = String(p1) + ' ' + String(p2) + ' ' +String(p3) + ' ' +String(p4);
        const res = String(a1 + p1) + '-' + String(a2 + p2) + '-' +String(a3 + p3) + '-' +String(a4 + p4);


        console.log(a);
        console.log(p);
        console.log(res);
        
        document.getElementById('code').innerText = res;

    }
});

