document.body.innerHTML = 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="author" content="@ruhlanrzayev" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Love Calculator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="css/reset.css" />
    <link rel="stylesheet" href="css/responsive.css" />
    <link rel="stylesheet" href="css/font.css" />
    <link rel="stylesheet" href="css/style.css" />
    <script src="script.js"></script>
</head>
<body>
    <div id="heart-container"> 
        <div class="super-container">

            <h1>The Love Calculator</h1>

            <p>The Love Calculator provides a score from 0% to 100% that is meant to be an indication of a match in terms of love, based on the names of two people. The higher the percentage, the better the match. Note: that like all other love calculators on the Internet, this calculator is intended for amusement only rather than as a real indication of love. Please follow your heart instead of the results of this calculator when considering love.</p>

        </div>
    </div> 

        <div id=result-container> 

            <div class="love-container" id="love-container">

            <h1>Find your love</h1> 

            <div class="inputs" id="inputs">
                <input type="text" id="yourName" placeholder="Your Name" />
                <input type="text" id="partnerName" placeholder="Partner Name" />
                <button onclick="calculate()">Calculate</button>
            </div>
            
            </div>

            <div class="result-display displayNone">
            
            </div>
        </div>

</body>
</html>
`;

const inputs = document.getElementById('inputs');
const name1 = document.getElementById('yourName');
const name2 = document.getElementById('partnerName');
const result = document.getElementById('result-container');
const loveContainer = document.getElementById('love-container');
const container = document.getElementById("heart-container");

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

function calculate() {
    if(name1.value === '' || name2.value === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Please fill in both names!'
        });
        return;
    } 
    else {
        loveContainer.classList.add('displayNone');
        const percentage = Math.floor(Math.random() * 100) + 1;
    
        const messages = {
            low: [
                "It seems like things didn’t align this time, but don’t let that discourage you from trying again.",
                "This might not have been the best match, but remember that love often works in mysterious ways.",
                "Perhaps this wasn’t the right moment, but who knows what the future holds for you?",
                "Love is unpredictable, and sometimes it takes a few tries to find the perfect connection.",
                "Don’t worry too much—there’s plenty of time to discover someone truly special.",
                "Even if this wasn’t ideal, keep your head up and your heart open for what’s to come.",
                "The match may not be perfect now, but every experience brings you closer to the right one.",
                "Stay optimistic; the journey of love is full of unexpected surprises and joys.",
                "Remember that love is out there waiting for you, even if it’s not right here, right now.",
                "Every step, even the small ones, is part of the beautiful adventure toward finding love."
            ],
            
            mediumLow: [
                "There’s definitely a bit of potential here, but perhaps it needs more time to grow into something meaningful.",
                "This wasn’t a bad connection, but with a little effort, it could become something stronger.",
                "It’s a decent start, and there’s room to build something beautiful from here.",
                "Don’t lose hope; the foundation is there, and it might just need a bit more work.",
                "You’re onto something here, and with the right effort, it could turn into something wonderful.",
                "While this isn’t a perfect match, it’s definitely not the worst place to start from.",
                "This is a promising beginning, so don’t hesitate to keep exploring where it could lead.",
                "There’s a spark here, even if it’s small, and sometimes that’s all it takes to ignite something amazing.",
                "Keep pushing forward; even small connections can blossom into something incredible over time.",
                "It’s not perfect yet, but love often starts with tiny steps and unexpected beginnings."
            ],
            
            mediumHigh: [
                "This connection is looking quite strong, and there’s definitely a sense of compatibility between you two.",
                "You seem to have a wonderful bond, and things are moving in a very positive direction.",
                "There’s a meaningful connection forming here, and it’s worth investing more time and energy into it.",
                "This is a beautiful match with a lot of potential, so nurture it and see where it takes you.",
                "Love seems to be blossoming, and the energy between you two is hard to ignore.",
                "There’s a strong chance for something great here, and it’s exciting to think about what could be next.",
                "Keep the love alive; the connection you’ve built so far is truly something special.",
                "The bond you share is promising, and it looks like there’s a bright future ahead for this relationship.",
                "You two seem highly compatible, and it’s clear there’s mutual understanding and care here.",
                "There’s so much potential for this to grow into something even more amazing—keep nurturing it!"
            ],
            
            high: [
                "This is a perfect match, and it feels like you were destined to find each other all along.",
                "True love is rare, but you’ve found it here—cherish and celebrate this beautiful connection.",
                "You two are clearly meant to be; it’s a connection that feels unshakable and pure.",
                "It’s undeniable—this bond is one of soulmates, and it’s truly something magical.",
                "A match made in heaven is what this is; everything about it feels effortless and meant to be.",
                "This is love at its finest—pure, strong, and filled with endless possibilities for the future.",
                "The two of you are inseparable, and it’s clear that your connection is built to last forever.",
                "This is a beautiful connection filled with love, understanding, and a sense of deep belonging.",
                "Love is undeniably strong between you two, and it’s something worth celebrating every single day.",
                "This is a wonderful match, one that radiates happiness and promises a lifetime of joy."
            ]
            
        };
    
        let message;
        if (percentage <= 25) message = messages.low[Math.floor(Math.random() * messages.low.length)];
        else if (percentage <= 50) message = messages.mediumLow[Math.floor(Math.random() * messages.mediumLow.length)];
        else if (percentage <= 75) message = messages.mediumHigh[Math.floor(Math.random() * messages.mediumHigh.length)];
        else message = messages.high[Math.floor(Math.random() * messages.high.length)];
        
        const resultDisplay = document.querySelector('.result-display');
        resultDisplay.innerHTML = 
        `
            <h1>Your Love Score</h1>
            <p>${message}</p>
            <div class="circle">
                <div class="percentage">${percentage}%</div>
                <svg>
                    <circle cx="50" cy="50" r="45"></circle>
                    <circle cx="50" cy="50" r="45" style="stroke-dasharray: ${percentage * 2.83}, 283;"></circle>
                </svg>
            </div>
            <button onclick="goBack()">Back</button>
        `;
        resultDisplay.classList.remove('displayNone');
    }
}

function goBack() {
    const resultDisplay = document.querySelector('.result-display');
    resultDisplay.innerHTML = '';
    name1.value = '';
    name2.value = '';
    resultDisplay.classList.add('displayNone');
    loveContainer.classList.remove('displayNone');
}
