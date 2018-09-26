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


    //    


        const $tamagotchiname = $('input').val();
        $('#name-stat').append($tamagotchiname);

        const moveLeft=()=>{
            if(pet.alive === true){
                $("#shiba").animate({"margin-left": "+350"}, 5000, moveLeftCenter);
            function moveLeftCenter() {
                $("#shiba").animate({"margin-left": "-30"}, 5000, moveLeft);
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

                if (pet.hunger === 1) {
                    $('#hunger-stat').css("width", "10%");
                }

                if (pet.hunger === 2) {
                    $('#hunger-stat').css("width", "20%");
                }

                if (pet.hunger === 3) {
                    $('#hunger-stat').css("width", "30%");
                }

                if (pet.hunger === 4) {
                    $('#hunger-stat').css("width", "40%");
                }

                if (pet.hunger === 5) {
                    $('#hunger-stat').css("width", "50%");
                }

                if (pet.hunger === 6) {
                    $('#hunger-stat').css("width", "60%");
                }

                if (pet.hunger === 7) {
                    $('#hunger-stat').css("width", "70%");
                }

                if (pet.hunger === 8) {
                    $('#hunger-stat').css("width", "80%");
                }

                if (pet.hunger === 9) {
                    $('#hunger-stat').css("width", "90%");
                }

                if (pet.hunger === 10) {
                    $('#hunger-stat').css("width", "100%");
                }
                // Progreass Bars sleep
                if (pet.sleep === 1) {
                    $('#sleep-stat').css("width", "10%");
                }

                if (pet.sleep === 2) {
                    $('#sleep-stat').css("width", "20%");
                }

                if (pet.sleep === 3) {
                    $('#sleep-stat').css("width", "30%");
                }

                if (pet.sleep === 4) {
                    $('#sleep-stat').css("width", "40%");
                }

                if (pet.sleep === 5) {
                    $('#sleep-stat').css("width", "50%");
                }

                if (pet.sleep === 6) {
                    $('#sleep-stat').css("width", "60%");
                }

                if (pet.sleep === 7) {
                    $('#sleep-stat').css("width", "70%");
                }

                if (pet.sleep === 8) {
                    $('#sleep-stat').css("width", "80%");
                }

                if (pet.sleep === 9) {
                    $('#sleep-stat').css("width", "90%");
                }
                if (pet.sleep === 10) {
                    $('#sleep-stat').css("width", "100%");
                }
                if(seconds % 6 == 0) {
                    pet.sleep++;
                    $('.sleep-stat-num').text(pet.sleep);
                }
                
// Boredom Stats
                if (pet.bordeom === 1) {
                    $('#boredom-stat').css("width", "10%");
                }

                if (pet.bordeom === 2) {
                    $('#boredom-stat').css("width", "20%");
                }

                if (pet.bordeom === 3) {
                    $('#boredom-stat').css("width", "30%");
                }

                if (pet.bordeom === 4) {
                    $('#boredom-stat').css("width", "40%");
                }

                if (pet.bordeom === 5) {
                    $('#boredom-stat').css("width", "50%");
                }

                if (pet.bordeom === 6) {
                    $('#boredom-stat').css("width", "60%");
                }

                if (pet.bordeom === 7) {
                    $('#boredom-stat').css("width", "70%");
                }

                if (pet.bordeom === 8) {
                    $('#boredom-stat').css("width", "80%");
                }

                if (pet.bordeom === 9) {
                    $('#boredom-stat').css("width", "90%");
                }

                if (pet.bordeom === 10) {
                    $('#boredom-stat').css("width", "100%");
                }
                if(seconds % 8 == 0) {
                    pet.bordeom++;
                    $('.boredom-stat-num').text(pet.bordeom);
                }
                
                if(seconds % 10 == 0) {
                    pet.age++;
                    $('#age-stat').empty().append(pet.age);
        
                    }
        
                // if (pet.age === 3) {
                //     $('#shiba').attr('src', 'images/AW866286_00.gif');
        
                // }
        
                // if (pet.age === 2) {
                //     $('#shiba').attr('src', 'images/AW866286_07.gif');
        
                // }
        
                // if (pet.age === 1) {
                //     $('#shiba').attr('src', 'images/bd88876ac5a2f093d5f9112ae13f02fe.gif');
        
                // }
                if (pet.hunger === 4) {
                    $('#shiba').attr('src', 'images/AW866286_07.gif');
                    
        
                    // $('section').css('background-image', "url('https://imgflip.com/i/2io2f4')" );
                    }

                if ( pet.bordeom === 4 ) {
                    $('#shiba').attr('src', 'images/AW866286_07.gif');
                    $('#modal-alert').modal('show');

                    $('#alert').text(`Please play with ${tamagotchiname}`);

                    
        
                    // $('section').css('background-image', "url('https://imgflip.com/i/2io2f4')" );
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
                $('#shiba').attr('src', 'images/AW305605_17.gif');
                }
            });
        
            $('#sleep-btn').on('click', () => {
               if ( pet.sleep > 0) { 
                   
                pet.sleep --;
                $('.sleep-stat-num').text(pet.sleep);
                $('#shiba').attr('src', 'images/8063622105f388f97a81d9f1115d7e48.gif');
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
                $('#shiba').attr('src', 'images/AW526511_03.gif');
                }
        
            });

            $('#try-again').on('click', () => {
                location.reload();
            })

       
        
 
      });






       // const moveShiba = () => {
        //     $("#shiba").velocity({ translateX: 100 }, { 
        //         easing: "easeOut",
        //         duration: 300,
        //     });

            // $("#shiba").velocity({ translateX: 200 }, { 
            //     easing: "easeOut",
            //     duration: 400,
            // });
            // $("#shiba").velocity({ translateX: 300 }, { 
            //     easing: "easeOut",
            //     duration: 400,
            // });

            // $("#shiba").velocity({ translateX: 100 }, { 
            //     easing: "easeOut",
            //     duration: 400,
            // });

            // $("#shiba").velocity({ translateX: 100 }, { 
            //     easing: "easeOut",
            //     duration: 400,
            // });
        // }
     
    //    moveShiba();