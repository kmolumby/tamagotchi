const displaySleepProgress = () => {
                let numSleep = pet.sleep * 10;
                let percent = `${numSleep}%`;
                $('#sleep-stat').css("width", percent);
            }

            displaySleepProgress();



            const displayHungerProgress = () => {
                let num = pet.hunger * 10;
                let percentSleep = `${num}%`;
                $('#hunger-stat').css("width", percentSleep);
            }

            displayHungerProgress();