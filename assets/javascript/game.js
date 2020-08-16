$(document).ready(function() {

    let wins = 0;
    let losses = 0;
    let villianCount = 0;
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
            health: 123,
            attack: 12,
            counterAttack: 8,
            image: "assets/images/miles.png"
        },
        {
            name: 'Gwen Stacey',
            id: 'gwen',
            value: 'gwen-stacey',
            health: 108,
            attack: 10,
            counterAttack: 10,
            image: "assets/images/gwen.png"
        },
        {
            name: 'Spiderman Noir',
            id: 'noir',
            value: 'spiderman-noir',
            health: 114,
            attack: 17,
            counterAttack: 11,
            image: "assets/images/noir.png"
        },
        {
            name: 'Spider Ham',
            id: 'ham',
            value: 'spider-ham',
            health: 97,
            attack: 12,
            counterAttack: 8,
            image: "assets/images/spiderham.png"
        }
    ];

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
            villianCount++;
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

                $("#hero-div")
                    .append(addCharacterImage)
                    .append(characters[i].name);

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

                $("#villian-div").empty();
                $("#villian-div")
                    .append(addCharacterImage)
                    .append(characters[i].name);

                villianStats.health = characters[i].health;
                villianStats.counterAttack = characters[i].counterAttack;
                console.log(villianStats);
            };
        };
    };

    $(document).on("click", "#attack-button", function(){
        if(heroStats.health > 0 && villianStats.health > 0){
            villianStats.health -= heroStats.attack;
            heroStats.attack += heroStats.attack;
            heroStats.health -= villianStats.counterAttack;
            console.log("hero attack = " + heroStats.attack);
            console.log("hero health = " + heroStats.health);
            console.log("villian health = " + villianStats.health);
            if(villianStats.health <= 0){
                currentVillian = "";
                isVillianChosen = false;
                villianStats = {};
                console.log(villianStats);
                alert("choose another villian!");
            }
        }
    });

    function displayAlert(){
        alert("You've already chosen a Villian. You must defeat them before choosing another.");
    };

});