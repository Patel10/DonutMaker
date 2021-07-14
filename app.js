import DonutMaker from "./DonutMaker.js";

const donutMaker = new DonutMaker(0,0,100,0,10);


const donutMakerButton = document.querySelector('.donut-button');
const donutCount= document.querySelector('.addDonut');
const donutValue = document.querySelector('donutvalue');
const autoClickerButton = document.querySelector('.autoClicker');
const autoClickerCost = document.querySelector('.autoClickerPrice');
const autoClickerCount = document.querySelector('.autoClickerCount');
const donutMultiplyButton = document.querySelector('.multiplierButton');
const donutMultiplyCount = document.querySelector('.multiplierCount');
const donutMultiplyCost = document.querySelector('.multiplierPrice');

const aboutUsButton = document.querySelector(".aboutSection");
const aboutUsDrop = document.getElementById('aboutSectionContent');
const learnUsButton = document.querySelector(".learnSection");
const learnUsDrop = document.getElementById('learnSectionContent');

// have to do same for contact 

donutMakerButton.addEventListener("click", () => {
    donutMaker.addDonut();
    donutCount.innerText = donutMaker.numDonuts;
    // donutMultiplierEnable()
    // autoClickerEnable()
    }); 
aboutUsButton.addEventListener("click", ()=>{
    if(aboutUsDrop.style.visibility=='hidden'){
        aboutUsDrop.style.visibility='visible';
        console.log("testing");
    } else if (aboutUsDrop.style.visibility=='visible'){
        aboutUsDrop.style.visibility='hidden';
    };
});

learnUsButton.addEventListener("click",()=>{
    if(learnUsDrop.style.visibility=='hidden'){
        learnUsDrop.style.visibility='visible';
    } else if (learnUsDrop.style.visibility=='visible'){
        learnUsDrop.style.visibility='hidden';
    }
})



autoClickerButton.addEventListener("click",()=>{
    donutMaker.addAutoClicker();
    
    
    donutCount.innerText = donutMaker.numDonuts;
    autoClickerCount.innerText = donutMaker.autoClickers;

    
});
donutMultiplyButton.addEventListener("click",() =>{
    donutMaker.addMultipler();
    
    

    donutCount.innerText = donutMaker.numDonuts;
    donutMultiplyCount.innerText = donutMaker.donutMultiply;
})


setInterval(() =>{
   
    donutMaker.activateAutoClickers();
    donutCount.innerText = donutMaker.numDonuts;
    autoClickerCount.innerText = donutMaker.autoClickers;
    
    
},1000);


document.getElementsByClassName("addDonut").innerHTML=Math.round(addDonut);
// document.addEventListener('click',()=>{
//     document.getElementById("learn-content").style.visibility = "visible";
    
// })
// aboutUs.addEventListener('click', ()=>{
//     aboutUs.getElementById('aboutus').style.visibility="visible";

// })
// document.querySelector('section').innerText = 'ITS ALIVE!!';
// document.querySelector('addDonut');
// document.querySelector('');







// contact-button.addEventListener("click", ()=>{
//     if(contactDropdownContent.style.visibility='hidden'){
//         contactDropdownContent.style.visibility='visible';
//         console.log("Expecting Click");

//     } else if 
//         (contactDropdownContent.style.visibility='visible'){
//             contactDropdownContent.style.visibility='hidden';
//             console.log('Click not needed');
//         };
    
// })