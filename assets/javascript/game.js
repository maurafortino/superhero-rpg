$(document).ready(function() {

    let hero;
    let currentVillian;
    let isHeroChosen = false;
    let isVillianChosen = false;
    let heroStats = {};
    let villianStats ={};
    let characters = [
        {
            name: 'Miles Morales',
            id: 'miles',
            value: 'miles-morales',
            health: 120,
            attack: 8,
            counterAttack: 15,
            image: "assets/images/miles.png"
        },
        {
            name: 'Gwen Stacey',
            id: 'gwen',
            value: 'gwen-stacey',
            health: 100,
            attack: 14,
            counterAttack: 5,
            image: "assets/images/gwen.png"
        },
        {
            name: 'Spiderman Noir',
            id: 'noir',
            value: 'spiderman-noir',
            health: 150,
            attack: 8,
            counterAttack: 20,
            image: "assets/images/noir.png"
        },
        {
            name: 'Spider Ham',
            id: 'ham',
            value: 'spider-ham',
            health: 180,
            attack: 7,
            counterAttack: 25,
            image: "assets/images/spiderham.png"
        }
    ];
    let villianCount = (characters.length - 1);

    function displayCharacters(){

        $("#choose-characters-row").empty();
    
        for(let i = 0; i < characters.length; i++){
            let addImageDiv = $("<div>")
                .addClass("col-2 character-div");
            
            let addCharacterImage = $("<img>")
                .attr({
                    src: characters[i].image,
                    width: 200,
                    height: 200,
                    id: characters[i].id,
                    class: "character"
                });
            
            $(addImageDiv)
                .append(addCharacterImage)
                .append(characters[i].name);

            $("#choose-characters-row").append(addImageDiv);
        };
    };

    displayCharacters();

    $(".character").on("click", function(){
        if(!isHeroChosen){
            hero = this.id;
            console.log("hero = " + hero);
            removeCharacter();
            isHeroChosen = true;
            displayHero();
        }else if(isHeroChosen && !isVillianChosen){
            currentVillian;
            currentVillian = this.id;
            console.log(villianCount);
            console.log("enemy = " + currentVillian);
            removeCharacter();
            isVillianChosen = true;
            displayVillian();
        }else{
            displayAlert();
        }
    });

    function removeCharacter(){
        $(".character-div").on("click", function(){
            $(this)
                .empty()
                .addClass("character-placeholder");
        });
    };

    function displayHero(){
        for(let i = 0; i < characters.length; i++){
            if(characters[i].id=== hero){
    
                let addCharacterImage = $("<img>")
                .attr({
                    src: characters[i].image,
                    width: 200,
                    height: 200,
                    id: characters[i].id,
                    class: "hero character"
                });

                let healthSpan = $("<span>")
                .attr("id", "hero-health")
                .text(" health: " + characters[i].health);
                $("#hero-div")
                    .append(addCharacterImage)
                    .append(characters[i].name)
                    .append(healthSpan);

                heroStats.health = characters[i].health;
                heroStats.attack = characters[i].attack;
                console.log(heroStats);
                
            };
        };

        let attackBtn = $("<button>");
        attackBtn.attr("id", "attack-button").text("attack!");
        $("#attack").append(attackBtn);
    };

    function displayVillian(){
        for(let i = 0; i < characters.length; i++){
            if(characters[i].id === currentVillian){
                let addCharacterImage = $("<img>")
                .attr({
                    src: characters[i].image,
                    width: 200,
                    height: 200,
                    id: characters[i].id,
                    class: "villian character"
                });

                let healthSpan = $("<span>")
                .attr("id", "villian-health")
                .text(" health: " + characters[i].health);

                $("#villian-div").empty();
                $("#villian-div")
                    .append(addCharacterImage)
                    .append(characters[i].name)
                    .append(healthSpan);

                villianStats.health = characters[i].health;
                villianStats.counterAttack = characters[i].counterAttack;
                console.log(villianStats);
            };
        };
    };

    $(document).on("click", "#attack-button", function(){
        if(heroStats < 0){
            alert("you lose!");
        } else if(heroStats.health > 0 && villianStats.health > 0){
           attack();
            if(villianStats.health <= 0 ){
                updateVillian();
            };
        };
    });

    function attack(){
        villianStats.health -= heroStats.attack;
        $("#villian-health").text(" health: " + villianStats.health);
        heroStats.attack += heroStats.attack;
        heroStats.health -= villianStats.counterAttack;
        $("#hero-health").text(" health: " + heroStats.health);
    };

    function updateVillian(){
        villianCount--;
        currentVillian = "";
        isVillianChosen = false;
        villianStats = {};
        alert("choose another villian!");
    }
    

    function displayAlert(){
        alert("You've already chosen a Villian. You must defeat them before choosing another.");
    };

});