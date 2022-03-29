const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let arRandom = [];

const RotageNumberShows = $$('.rotage__number-show');
const RotageNumberShow = $('.rotage__number-show')
const RotageNumberRun = $('.rotate__number-run');
const RotageBtn = $('.rotage__btn');
const ShowBtn = $('.show__btn');
const ListShow = $('.show__number-list');
const ResultNumber = $('.rotate__number-run');
const HideResult = $('.hide-result');

let arNextRandom = [];
for(var i = 0; i<=40; i++) {
    arNextRandom.push(i);
}






const app = {
    

    handleEvents: function() {
        const _this = this;
        let arRandoms = [];
        var i = 0;
        var runCol;
        const RotageNumberShowsLength = RotageNumberShows.length;

        function RandomNumber() {
            let randomNumber;
        do {
            if(arRandom.length >= 40) {
                arRandom.splice(0,arRandom.length)
            }

            randomNumber = Math.floor(Math.random() * 40); 
        
            if(arRandom.indexOf(randomNumber) === -1) {
                arRandom.push(randomNumber);
                _this._isRandom = true;
            }else {
                _this._isRandom = false;
            }
            ShowRandomNumber = randomNumber;
        } while (!_this._isRandom);
        return arRandom;
        
        }
        
        RotageBtn.onclick = function() {
            var i = 0;
            function ColRun() {
                
                if(i < RotageNumberShowsLength ) {
                   
                    if(i == 0) {
                        document.getElementsByClassName(RotageNumberShow.classList.value)[RotageNumberShowsLength -1].style.transform = `translateY(100%)`;
                        document.getElementsByClassName(RotageNumberShow.classList.value)[i].style.transform = `translateY(-${100 *i}%)`;
                        i+=1;
                    }else {
                        document.getElementsByClassName(RotageNumberShow.classList.value)[i-1].style.transform = `translateY(100%)`;
                        document.getElementsByClassName(RotageNumberShow.classList.value)[i].style.transform = `translateY(-${100 *i}%)`;
                        i+=1;
                    }
                    
                }else {
                    
                    i = 0;
                    document.getElementsByClassName(RotageNumberShow.classList.value)[RotageNumberShowsLength -1].style.transform = `translateY(100%)`;
                    document.getElementsByClassName(RotageNumberShow.classList.value)[i].style.transform = `translateY(-${100 *i}%)`;
                    i+=1;
                }

            }
            RandomNumber();
            render2();
            
            RotageBtn.style.display = "none"
            ShowBtn.style.display = "block";
            
            return runCol = setInterval(ColRun, 1200);
        }

        // Show kết quả
        ShowBtn.onclick = function() {
            clearInterval(runCol)
            RotageBtn.style.display = "block";
            ShowBtn.style.display = "none";
            // RandomNumber();
            render();
        }

        
        function render() {
            
            let abc = arRandom;
            let NumRD = arRandom[arRandom.length - 1];
            const htmls = abc.map(function(ab) {
                return `<li class="show__number-item">${ab}</li>`
            })
            
            ListShow.innerHTML = htmls.join('');
            ResultNumber.innerHTML = `<span class="rotage__number-show">${NumRD}</span>`;
           
            
            
            console.log(abc);
            // console.log(arRandom)
        }

        function render2() {
            var randomNumberList = [];
            let abc =   arRandom
            let NumRD = arRandom[arRandom.length - 1];
            HideResult.innerHTML = `<span>${NumRD}</span>`;
            for(var i =0; i<=10; i++) {
                randomNumberList.push(Math.floor(Math.random() * 40));

            }
          var arListNext = randomNumberList.filter(function(list) {
                return abc.indexOf(list) == -1;
            })
            let htmlss = arListNext.map(function(arLN){
                return `<span class="rotage__number-show">${arLN}</span>`
            })
            ResultNumber.innerHTML = htmlss.join('');

            // return arListNext;
        }
        
    },


    start : function() {
        this.handleEvents();
    }
}

app.start();


// let randomNumber;
// do {
//     if(arRandom.length >= 20) {
//         arRandom.splice(0,arRandom.length)
//     }

//     randomNumber = Math.floor(Math.random() * 20); 
   
//     if(arRandom.indexOf(randomNumber) === -1) {
//         arRandom.push(randomNumber);
//         _this._isRandom = true;
//     }else {
//         _this._isRandom = false;
//     }
//     ShowRandomNumber = randomNumber;
// } while (!_this._isRandom);







// var arr1 = [1,2,3,4,5,6,7,8]

// var arr2 = [1,2,3,4]

// let az = arr1.filter(function(ar1) {
//     return arr2.indexOf(ar1) == -1;
// })

// console.log(az)

