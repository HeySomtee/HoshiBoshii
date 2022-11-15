// remove loader divs 

const win1 = document.getElementById('up');
const win2 = document.getElementById('down');
const switch_btn = document.getElementById('switch');
const light_switch = document.getElementById('light-switch')
const DOM = document.getElementById('dom');
const border = document.getElementById('circle');
const anchor = document.getElementsByTagName('a');
const logo_img = document.getElementById('logo');
const Clogo = document.getElementById('xxx');
const page_2 = document.getElementById('page2');
const fa2 = document.getElementById('twitter');
const fa1 = document.getElementById('insta');
const fa3 = document.getElementById('discord');
const page_3 = document.getElementById('page3')
const andriod = document.getElementById('andriodd');
const iphone = document.getElementById('iphonee');
const mpc = document.getElementById('mpc');
const videoo = document.getElementById('vid');
const macBook = document.getElementById('mac');
const ifram = document.getElementById('xvx');
// for text btns
const btn = document.getElementById('t');
const btn1 = document.getElementById('t1');
const btn2 = document.getElementById('t2');
// for video btns 
const btnn = document.getElementById('v');
const btnn1 = document.getElementById('v1');
const btnn2 = document.getElementById('v2');


setTimeout( function () {
    win1.style.display = 'none';
    win2.style.display = 'none';
} , 38000);

setTimeout( function () {
    switch_btn.style.display = 'block';
} , 4000);

light_switch.addEventListener('click', sw);
function sw() {
    DOM.style.backgroundColor = 'pink';
    border.style.borderColor = 'goldenrod';
    border.style.background = '';
    logo_img.src = '/logo2.png'
    Clogo.style.color = 'goldenrod'
   
    for (var a in document.getElementsByTagName('a')) { 
        // Skip the collection elements that are not indexed by numbers, such as 'length'
        if (!isNaN(a) === true) {
            document.getElementsByTagName('a')[a].style.color = 'black'; 
        }
    }


}

document.getElementById('lampadario').addEventListener('click', IO)
function IO(params) {
    if(document.getElementById('true').checked == true) {  
        for (var a in document.getElementsByTagName('a')) { 
            // Skip the collection elements that are not indexed by numbers, such as 'length'
            if (!isNaN(a) === true) {
                document.getElementsByTagName('a')[a].style.color = 'black'; 
            }
        } 
        DOM.style.backgroundColor = 'pink';
        border.style.borderColor = 'goldenrod';
        border.style.background = '';
        logo_img.src = '/logo2.png';
        Clogo.style.color = 'goldenrod';
      
        
} 
     
} 

document.getElementById('lampadario').addEventListener('click', OI)

function OI(params) {
   if (document.getElementById('false').checked == true) {
    DOM.style.backgroundColor = '';
    border.style.borderColor = '';
    border.style.background = '';
    logo_img.src = '/logo.png'
    Clogo.style.color = ''
    for (var a in document.getElementsByTagName('a')) { 
        // Skip the collection elements that are not indexed by numbers, such as 'length'
        if (!isNaN(a) === true) {
            document.getElementsByTagName('a')[a].style.color = ''; 
        }
    }  
   }
}


// function bulb_on(){
//     document.getElementById('bulb').src='https://i.postimg.cc/6QyTynzr/bulb-on.png';
// }
// function bulb_off(){
//     document.getElementById('bulb').src='https://i.postimg.cc/KjK1wL3c/bulb-off.png';
// }

// $(document).ready(function(){
//     setTimeout(function(){
//       $('#light-switch').trigger('click');
//     },500);
//     setTimeout(function(){
//       $('#light-switch').trigger('click');
//     },1000)
//   });

// const page_2 = document.getElementById('page2');
        document.getElementById('lampadario').addEventListener('click', OIO)
        document.getElementById('lampadario').addEventListener('click', OO1)

        function OIO(params) {
            if (document.getElementById('true').checked == true) {
                page_2.style.backgroundColor = 'rgb(132, 153, 158)';
            }
        }

        function OO1(params) {
            if(document.getElementById('false').checked == true){
                page_2.style.backgroundColor = '';
            }
        }

document.getElementById('social_icons').addEventListener('click', name);        
function name(params) {
    fa1.style.animationName = 'bounce2'
    fa2.style.animationName = 'bounce2'
    fa3.style.animationName = 'bounce'
}        


document.getElementById('lampadario').addEventListener('click', OIO3)
document.getElementById('lampadario').addEventListener('click', OO13)
function OIO3(params) {
    if (document.getElementById('true').checked == true) {
        page_3.style.backgroundColor = 'bisque';
    }
}

function OO13(params) {
    if(document.getElementById('false').checked == true){
        page_3.style.backgroundColor = '';
    }
}



       
       andriod.addEventListener('click', display);
       iphone.addEventListener('click', display);
        function display(params) {
            document.getElementById('andriod').style.display = 'block';
            macBook.style.display = "none";

        }

        mpc.addEventListener('click', disPlay1);
        function disPlay1(params) {
            macBook.style.display = "block";
            document.getElementById('andriod').style.display = 'none';
        }


        btn.addEventListener('click', fram);
        btn1.addEventListener('click', fram);
        btn2.addEventListener('click', fram);
        function fram() {
            document.getElementById('xvx').src = "https://baixarapk.gratis/en/app/1511435444/vtube-studio";
            document.getElementById('iscreen').src = "https://baixarapk.gratis/en/app/1511435444/vtube-studio";
        }

        btnn.addEventListener('click', func)
        btnn1.addEventListener('click', func)
        btnn2.addEventListener('click', func)
        function func(params) {
            document.getElementById('xvx').src = "https://www.youtube.com/embed/3mic4A44w2Q";
        }

        document.getElementById('aboutV').addEventListener('click', npx);
        function npx(e) {
            document.getElementById('ggrid').style.display = 'block';

            e.stopImmediatePropagation();
                this.removeEventListener("click", npx);
                var doc = document.getElementById('aboutV')
                doc.onclick = npm;
        }

        function npm(e) {
            document.getElementById('ggrid').style.display = 'none';

            e.stopImmediatePropagation();
                this.removeEventListener("click", npm);
                var doc = document.getElementById('aboutV')
                doc.onclick = npx;

        }
document.getElementById('a3').addEventListener('click', cosPlay)
function cosPlay(e) {
    document.getElementById('cosplay').style.display = 'block';

    e.stopImmediatePropagation();
    this.removeEventListener('click', cosPlay)
    doc = document.getElementById('a3');
    doc.onclick = cosPlay1;
}

function cosPlay1(e) {
    document.getElementById('cosplay').style.display = 'none';  

    e.stopImmediatePropagation();
    this.removeEventListener('click', cosPlay)
    doc = document.getElementById('a3');
    doc.onclick = cosPlay;
}

function mnm() {
    var sample = document.getElementById('ma');
    sample.play();
}

mnm();

document.getElementById('aboutV').addEventListener('click', ff)

function ff(){
    var sample = document.getElementById('ma');
    sample.play();
}