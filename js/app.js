class Tamagotchi {
    constructor(name) {
        name = name;
        this.hunger = 0;
        this.sleep = 0;
        this.bordeom = 0;
        this.age = 0;
    }
}

const pet = new Tamagotchi(name);

let seconds = 0;
const timePassing = () => {
    	seconds++;
		if(seconds % 5 == 0) {
            pet.hunger++;
            $('#hunger-stat').empty().append(pet.hunger);
            console.log(`the pet is ${pet.hunger} hungry`)
			
        }
        
		if(seconds % 6 == 0) {
            pet.sleep++;
            $('#sleep-stat').empty().append(pet.sleep);
        }
        
		if(seconds % 8 == 0) {
            pet.bordeom++;
            $('#boredom-stat').empty().append(pet.bordeom);
        }
        
		if(seconds % 10 == 0) {
            pet.age++;
            $('#age-stat').empty().append(pet.age);

            }

        if (pet.age === 3) {
            $('#shiba').attr('src', 'images/AW866286_00.gif');

        }

        if (pet.age === 2) {
            $('#shiba').attr('src', 'images/AW866286_20.gif');

        }

        if (pet.age === 1) {
            $('#shiba').attr('src', 'images/bd88876ac5a2f093d5f9112ae13f02fe.gif');

        }


        if (pet.hunger === 10 || pet.bordeom === 10 || pet.sleep === 10) {
            clearInterval(passTime);
            $('.modal').modal('show');

            // $('section').css('background-image', "url('https://imgflip.com/i/2io2f4')" );
            }
		}
    var passTime = setInterval(timePassing, 500);

    $('.start-game button').on('click', () => {


        const $input = $('input').val();
      
        console.log($input);
        
      });


    $('#hunger-btn').on('click', () => {
        if ( pet.hunger > 0) {
        pet.hunger --;
        $('#hunger-stat').text(pet.hunger);
        $('#shiba').attr('src', 'images/AW305605_17.gif');
        }
    });

    $('#sleep-btn').on('click', () => {
       if ( pet.sleep > 0) { 
           
        pet.sleep --;
        $('#sleep-stat').text(pet.sleep);
        $('#shiba').attr('src', 'images/AW866286_00.gif');
        $('section').css('background-image', "url('images/night.png')" );
        
        const switchImage = () => {
            $('section').css('background-image', "url('images/day.png')" );
           }
    
       const turnOffNight = () => {
           turnOnDay = setTimeout(switchImage, 3000);
       }

      turnOffNight();

    }

    $('#bored-btn').on('click', () => {
        console.log('button works');

        if ( pet.bordeom > 0) {
        pet.bordeom --;
        $('#boredom-stat').text(pet.bordeom);
        $('#shiba').attr('src', 'images/AW526511_03.gif');
        }
    });

    $('#try-again').on('click', () => {
        location.reload();
    });

    });





    


