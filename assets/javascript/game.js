$(document).ready(function() {

    let wins = 0;
    let losses = 0;
    let hero;
    let currentVillian;
    let isHeroChosen = false;
    let isVillianChosen = false;
    let characters = [
        {
            name: 'Miles Morales',
            id: 'miles',
            value: 'miles-morales',
            HP: 123,
            AP: 12,
            CP: 8,
            image: "assets/images/miles.png"
        },
        {
            name: 'Gwen Stacey',
            id: 'gwen',
            value: 'gwen-stacey',
            HP: 108,
            AP: 10,
            CP: 10,
            image: "assets/images/gwen.png"
        },
        {
            name: 'Spiderman Noir',
            id: 'noir',
            value: 'spiderman-noir',
            HP: 114,
            AP: 17,
            CP: 11,
            image: "assets/images/noir.png"
        },
        {
            name: 'Spider Ham',
            id: 'ham',
            value: 'spider-ham',
            HP: 97,
            AP: 12,
            CP: 8,
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
            currentVillian = this.id;
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

                $("#villian-div")
                    .append(addCharacterImage)
                    .append(characters[i].name);
            };
        };
    };

    $(document).on("click", "#attack-button", function(){
        console.log("attack!");
    });

    function displayAlert(){
        alert("You've already chosen a Villian. You must defeat them before choosing another.");
    };

});