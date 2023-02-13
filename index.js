/*Самопроверка работы*/
console.log(
  "1. При нажатии на кнопки:Gardens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50\n2. Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50\n3. В разделе contacts реализован select с выбором городов +25\nИТОГО: 125"
);
/*Бургер меню*/
const menuBody = document.querySelector('.menu__body');
const iconMenu = document.querySelector('.menu__icon');
const menuList = document.querySelector('.menu__list');

iconMenu.addEventListener('click', ()=>{
    menuBody.classList.toggle('_active');
    iconMenu.classList.toggle('_active');
});

menuBody.addEventListener('click', ()=>{
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
});



/*Contacts popup*/
const dropdownHeader = document.querySelector('.dropdown__header');
const imageContacts = document.querySelector('.contacts__image');
const dropdownHeaderText = document.querySelectorAll('.dropdown__header-text');
const dropdownHeaderText0 = document.getElementById('dropdown__header-text-0');
const dropdownHeaderText1 = document.getElementById('dropdown__header-text-1');
const dropdownHeaderText2 = document.getElementById('dropdown__header-text-2');
const dropdownHeaderText3 = document.getElementById('dropdown__header-text-3');
const dropdownHeaderText4 = document.getElementById('dropdown__header-text-4');
const dropdownHeaderImg = document.querySelector('.dropdown__header-img');
const dropdownMain = document.querySelector('.dropdown__main');
const dropdownItem1 = document.getElementById('dropdown__item-1');
const dropdownItem2 = document.getElementById('dropdown__item-2');
const dropdownItem3 = document.getElementById('dropdown__item-3');
const dropdownItem4 = document.getElementById('dropdown__item-4');
const popupCard = document.querySelectorAll('.popup-card');
const popupCard1 = document.getElementById('popup-card-1');
const popupCard2 = document.getElementById('popup-card-2');
const popupCard3 = document.getElementById('popup-card-3');
const popupCard4 = document.getElementById('popup-card-4');

dropdownHeader.addEventListener('click', () =>{
  dropdownMain.classList.toggle('active')
  if((dropdownMain.classList.contains('active')) ||
     (popupCard.forEach(card =>{
        card.classList.contains('active')
      })))
      {
      dropdownHeaderImg.classList.add('active')
      dropdownHeader.classList.add('active')
      imageContacts.classList.add('active')

      popupCard.forEach(card =>{
        card.classList.remove('active')
      })

      dropdownHeaderText.forEach(drop => {
        drop.classList.remove('active')
      })

  }else{
      dropdownHeaderImg.classList.remove('active')
      dropdownHeader.classList.remove('active')
      imageContacts.classList.remove('active')
  }
});

dropdownItem1.addEventListener('click', () =>{
  dropdownMain.classList.remove('active')
  popupCard1.classList.add('active')
  dropdownHeaderText0.classList.add('active')
  dropdownHeaderText1.classList.add('active')
})
dropdownItem2.addEventListener('click', () =>{
  dropdownMain.classList.remove('active')
  popupCard2.classList.add('active')
  dropdownHeaderText0.classList.add('active')
  dropdownHeaderText2.classList.add('active')

})
dropdownItem3.addEventListener('click', () =>{
  dropdownMain.classList.remove('active')
  popupCard3.classList.add('active')
  dropdownHeaderText0.classList.add('active')
  dropdownHeaderText3.classList.add('active')

})
dropdownItem4.addEventListener('click', () =>{
  dropdownMain.classList.remove('active')
  popupCard4.classList.add('active')
  dropdownHeaderText0.classList.add('active')
  dropdownHeaderText4.classList.add('active')
})


/*Servise blure*/
const butG = document.querySelector('.service__button-gardens');
const butP = document.querySelector('.service__button-planting');
const butL = document.querySelector('.service__button-lawn');
const cardG = document.querySelectorAll('.box-service-garden');
const cardP = document.querySelectorAll('.box-service-planting');
const cardL = document.querySelectorAll('.box-service-lawn');

function blurService(){
  butG.addEventListener('click',() => {
    if((butP.classList.contains('active')) && butL.classList.contains('active')){
      butG.classList.remove('active')
      cardG.forEach(box =>{
      box.classList.add('blur')
    })
    }else{
      if(butG.classList.contains('active')){
        if((!butP.classList.contains('active')) && (!butL.classList.contains('active'))){
          butG.classList.remove('active')
          cardG.forEach(box =>{
            box.classList.remove('blur')
          })
          cardP.forEach(box =>{
            box.classList.remove('blur')
          })
          cardL.forEach(box =>{
            box.classList.remove('blur')
          })
        }else{
          butG.classList.remove('active')
          cardG.forEach(box =>{
            box.classList.add('blur')
          })
        }
      }else{
        butG.classList.add('active')
        cardG.forEach(box =>{
          box.classList.remove('blur')
        })
        if(butP.classList.contains('active')){
          butP.classList.add('active')
          cardP.forEach(box =>{
            box.classList.remove('blur')
          })
        }else{
          butP.classList.remove('active')
          cardP.forEach(box =>{
            box.classList.add('blur')
          })
        }
        if(butL.classList.contains('active')){
          butL.classList.add('active')
          cardL.forEach(box =>{
            box.classList.remove('blur')
          })
        }else{
          butL.classList.remove('active')
          cardL.forEach(box =>{
            box.classList.add('blur')
          })
        }
      }
    }
  })


  butP.addEventListener('click',() => {
    if((butG.classList.contains('active')) && butL.classList.contains('active')){
      butP.classList.remove('active')
      cardP.forEach(box =>{
      box.classList.add('blur')
    })
    }else{
      if(butP.classList.contains('active')){
        if((!butG.classList.contains('active')) && (!butL.classList.contains('active'))){
          butP.classList.remove('active')
          cardG.forEach(box =>{
            box.classList.remove('blur')
          })
          cardP.forEach(box =>{
            box.classList.remove('blur')
          })
          cardL.forEach(box =>{
            box.classList.remove('blur')
          })
        }else{
          butP.classList.remove('active')
          cardP.forEach(box =>{
            box.classList.add('blur')
          })
        }
      }else{
        butP.classList.add('active')
        cardP.forEach(box =>{
          box.classList.remove('blur')
        })
        if(butG.classList.contains('active')){
          butG.classList.add('active')
          cardG.forEach(box =>{
            box.classList.remove('blur')
          })
        }else{
          butG.classList.remove('active')
          cardG.forEach(box =>{
            box.classList.add('blur')
          })
        }
        if(butL.classList.contains('active')){
          butL.classList.add('active')
          cardL.forEach(box =>{
            box.classList.remove('blur')
          })
        }else{
          butL.classList.remove('active')
          cardL.forEach(box =>{
            box.classList.add('blur')
          })
        }
      }
    }
  })



  butL.addEventListener('click',() => {
    if((butG.classList.contains('active')) && butP.classList.contains('active')){
      butL.classList.remove('active')
      cardL.forEach(box =>{
      box.classList.add('blur')
    })
    }else{
      if(butL.classList.contains('active')){
        if((!butP.classList.contains('active')) && (!butG.classList.contains('active'))){
          butL.classList.remove('active')
          cardG.forEach(box =>{
            box.classList.remove('blur')
          })
          cardP.forEach(box =>{
            box.classList.remove('blur')
          })
          cardL.forEach(box =>{
            box.classList.remove('blur')
          })
        }else{
          butL.classList.remove('active')
          cardL.forEach(box =>{
            box.classList.add('blur')
          })
        }
      }else{
        butL.classList.add('active')
        cardL.forEach(box =>{
          box.classList.remove('blur')
        })
        if(butG.classList.contains('active')){
          butG.classList.add('active')
          cardG.forEach(box =>{
            box.classList.remove('blur')
          })
        }else{
          butG.classList.remove('active')
          cardG.forEach(box =>{
            box.classList.add('blur')
          })
        }
        if(butP.classList.contains('active')){
          butP.classList.add('active')
          cardP.forEach(box =>{
            box.classList.remove('blur')
          })
        }else{
          butP.classList.remove('active')
          cardP.forEach(box =>{
            box.classList.add('blur')
          })
        }
      }
    }
  })
}
blurService()


// Price Accordion

const itemBasics = document.querySelector('.prices__dropdown-basics');
const itemStandard = document.querySelector('.prices__dropdown-standard');
const itemProCare = document.querySelector('.prices__dropdown-proCare');

const downBasics = document.querySelector('.button__down-basics');
const downStandard = document.querySelector('.button__down-standard');
const downProCare = document.querySelector('.button__down-proCare');

const upBasics = document.querySelector('.button__up-basics');
const upStandard = document.querySelector('.button__up-standard');
const upProCare = document.querySelector('.button__up-proCare');

const cardBasics = document.querySelector('.prices__card-basics');
const cardStandard = document.querySelector('.prices__card-standard');
const cardProCare = document.querySelector('.prices__card-proCare');

const cardButtonBasics = document.querySelector('.button__card-basics');
const cardButtonStandard = document.querySelector('.button__card-standard');
const cardButtonProCare = document.querySelector('.button__card-proCare');

const boxPrices = document.querySelector('.prices__box');


downBasics.addEventListener('click',() =>{
  cardBasics.classList.add('active')
  itemStandard.classList.add('active')
  itemProCare.classList.add('active')
  boxPrices.classList.add('active')
  cardStandard.classList.remove('active')
  cardProCare.classList.remove('active')
})
upBasics.addEventListener('click',() =>{
  cardBasics.classList.remove('active')
  itemStandard.classList.remove('active')
  itemProCare.classList.remove('active')
  boxPrices.classList.remove('active')
})

downStandard.addEventListener('click',() =>{
  cardStandard.classList.add('active')
  itemProCare.classList.add('active')
  itemStandard.classList.add('active')
  boxPrices.classList.add('active')
  cardProCare.classList.remove('active')
  cardBasics.classList.remove('active')
})
upStandard.addEventListener('click',() =>{
  cardStandard.classList.remove('active')
  itemStandard.classList.remove('active')
  itemBasics.classList.remove('active')
  itemProCare.classList.remove('active')
  boxPrices.classList.remove('active')
})

downProCare.addEventListener('click',() =>{
  cardProCare.classList.add('active')
  boxPrices.classList.add('active')
  cardStandard.classList.remove('active')
  cardBasics.classList.remove('active')
  itemStandard.classList.remove('active')
})
upProCare.addEventListener('click',() =>{
  cardProCare.classList.remove('active')
  itemStandard.classList.remove('active')
  itemBasics.classList.remove('active')
  itemProCare.classList.remove('active')
  boxPrices.classList.remove('active')
})
