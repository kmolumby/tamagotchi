
const game  = {
    boredAlert: false,

    hungerAlert:false,

    sleepAlert : false,
}


class Tamagotchi {
    constructor(name) {
        name = name;
        this.hunger = 0;
        this.sleep = 0;
        this.bordeom = 0;
        this.age = 0;
        this.alive = true;
    }
}

const pet = new Tamagotchi(name);


$( document ).ready(function() {
    console.log('does this work')
    $('#modal-start').modal('show');
});



    $('.start-game').on('click', () => {

        $('#modal-start').modal('hide');

        const $tamagotchiname = $('input').val();
        $('#name-stat').append($tamagotchiname);



        const moveLeft=()=>{
            if(pet.alive === true){
                
                $("#shiba").animate({"margin-left": "+80"}, 2000, moveLeftCenter);
            function moveLeftCenter() {
                $("#shiba").animate({"margin-left": "-30"}, 2000, moveLeft);
                }

                
            }
        };
        
        moveLeft();

       
       
    
        let seconds = 0;
        const timePassing = () => {
        
                
                seconds++;
                if(seconds % 5 == 0) {
                    pet.hunger++;
                    $('.hunger-stat-num').text(pet.hunger);
                    console.log(`the pet is ${pet.hunger} hungry`)
                    
                }
               
                const displayHungerProgress = () => {
                    let num = pet.hunger * 10;
                    let percent = `${num}%`;
                    $('#hunger-stat').css("width", percent);
                }
    
                displayHungerProgress();
               
                // Progreass Bars sleep

                if(seconds % 6 == 0) {
                    pet.sleep++;
                    $('.sleep-stat-num').text(pet.sleep);
                }
                const displaySleepProgress = () => {
                    let numSleep = pet.sleep * 10;
                    let percentSleep = `${numSleep}%`;
                    $('#sleep-stat').css("width", percentSleep);
                }
    
                displaySleepProgress();
                
               
                
// Boredom Stats

   const displayBoredProgress = () => {
                    let numBored = pet.bordeom * 10;
                    let percentBored = `${numBored}%`;
                    $('#boredom-stat').css("width", percentBored);
                }
    
                displayBoredProgress();
                

                if(seconds % 8 == 0) {
                    pet.bordeom++;
                    $('.boredom-stat-num').text(pet.bordeom);
                }


                
                if(seconds % 10 == 0) {
                    pet.age++;
                    $('#age-stat').empty().append(pet.age);
        
                    }
        
               
                if (pet.hunger === 8) {
                    $('#shiba').attr('src', 'images/angry-shiba.gif');
                    
        
                    // $('section').css('background-image', "url('https://imgflip.com/i/2io2f4')" );
                    }
                    
                    if ( pet.hunger === 5 && game.boredAlert === false) {
                    
                        game.hungerAlert = true;
                        $('#modal-alert').modal('show');
    
                        $('#alert').text('I\'m so hungry! Please feed me!');
                        } 
                        
                        if (pet.hunger <=4) {
                            game.boredAlert = false;
                        } 


                if ( pet.bordeom === 4 && game.boredAlert === false) {
                    
                    game.boredAlert = true;
                    $('#modal-alert').modal('show');

                    $('#alert').text('Please play with me');
                    } 
                    
                    if (pet.bordeom <=3) {
                        game.boredAlert = false;
                    }                    
        
                if (pet.hunger === 10 || pet.bordeom === 10 || pet.sleep === 10) {
                    pet.alive = false;
                    clearInterval(passTime);
                    $('#modal-die').modal('show');
        
                    // $('section').css('background-image', "url('https://imgflip.com/i/2io2f4')" );
                    }
                }
        
            var passTime = setInterval(timePassing, 500);
    
            $('#hunger-btn').on('click', () => {
                if ( pet.hunger > 0) {
                pet.hunger --;
                $('.hunger-stat-num').text(pet.hunger);
                $('#shiba').attr('src', 'images/fed-shiba.gif');
                }
            });
        
            $('#sleep-btn').on('click', () => {
               if ( pet.sleep > 0) { 
                   
                pet.sleep --;
                $('.sleep-stat-num').text(pet.sleep);
                $('#shiba').attr('src', 'images/sleep-shiba.gif');
                $('section').css('background-image', "url('images/night.png')" );
                
                const switchImage = () => {
                    $('section').css('background-image', "url('images/day.png')" );
                   }
            
               const turnOffNight = () => {
                   turnOnDay = setTimeout(switchImage, 3000);
               }
        
              turnOffNight();
        
            }
            });
        
            $('#bored-btn').on('click', () => {
                console.log('button works');
        
                if ( pet.bordeom > 0) {
                pet.bordeom --;
                $('.boredom-stat-num').text(pet.bordeom);
                $('#shiba').attr('src', 'images/play-shiba.gif');
                }
        
            });

            $('#try-again').on('click', () => {
                location.reload();
            })

       
        
 
      });






      