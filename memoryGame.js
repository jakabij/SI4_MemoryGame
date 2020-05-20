document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'cake',
            img: 'images/cake.jpg'
        },
        {
            name: 'cake',
            img: 'images/cake.jpg'
        },
        {
            name: 'peter',
            img: 'images/peter.jpg'
        },
        {
            name: 'peter',
            img: 'images/peter.jpg'
        },
        {
            name: 'sw',
            img: 'images/sw.png'
        },
        {
            name: 'sw',
            img: 'images/sw.png'
        },
        {
            name: 'pigeon',
            img: 'images/pigeon.jpg'
        },
        {
            name: 'pigeon',
            img: 'images/pigeon.jpg'
        },
        {
            name: 'rose',
            img: 'images/rose.jpg'
        },
        {
            name: 'rose',
            img: 'images/rose.jpg'
        },
        {
            name: 'present',
            img: 'images/present.jpg'
        },
        {
            name: 'present',
            img: 'images/present.jpg'
        }
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const grid=document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result'); 
    let chosenCards = [];
    let chosenCardsIds = [];
    let matchedCards = [];

    //Create board
    function createBoard(){
        for(let i=0;i<cardArray.length;i++){
            let card=document.createElement('img');
            card.setAttribute('src','images/blank.jpg');    
            card.setAttribute('data-id',i);             
            card.addEventListener("click",flipCard);
            grid.appendChild(card);
        }
    }

    //check matches
    function checkForMatch(){
        let cards=document.querySelectorAll('img');
        const firstCardId = chosenCardsIds[0];
        const secondCardId = chosenCardsIds[1];
        console.log(firstCardId)
        console.log(secondCardId)


        if(chosenCards[0] === chosenCards[1]){
            alert("You got one! (.  )(.  )");
            cards[firstCardId].setAttribute('src','images/match.jpg');
            cards[secondCardId].setAttribute('src','images/match.jpg');
            matchedCards.push(chosenCards);
        }
        else{
            cards[firstCardId].setAttribute('src','images/blank.jpg');
            cards[secondCardId].setAttribute('src','images/blank.jpg');
            alert("Try again!");
        }
        chosenCards = [];
        chosenCardsIds = [];
        resultDisplay.textContent=matchedCards.length;

        if(matchedCards.length === cardArray.length/2){
            resultDisplay.textContent = "Well done! You found all of them!";
            let end = document.createElement("img")
            end.setAttribute("src","images/end.jpg")

            document.querySelector("#ending").appendChild(end);
        }   
    }

    //flip cards
    function flipCard(){
        let cardId=this.getAttribute('data-id');
        console.log(cardId)
        if(chosenCardsIds.includes(cardId)){
            alert("You can't choose the same card! Choose an other one please!")
        }
        else{
            chosenCards.push(cardArray[cardId].name);
            chosenCardsIds.push(cardId);
            this.setAttribute('src', cardArray[cardId].img);
            if(chosenCards.length === 2){
                setTimeout(checkForMatch, 500);
            }
        }
    }
    createBoard();
});