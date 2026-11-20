
// GET THE DIFFERENT SCREENS

const welcomeScreen = document.getElementById("welcome");
const birthdayScreen = document.getElementById("birthday");
const letterScreen = document.getElementById("letter");

// GET THE BUTTONS

const surpriseBtn = document.getElementById("surpriseBtn");
const letterBtn = document.getElementById("letterBtn");


// FIRST BUTTON: OPEN THE BIRTHDAY SURPRISE

surpriseBtn.addEventListener("click", function() {

    welcomeScreen.classList.add("hidden");

    birthdayScreen.classList.remove("hidden");

});


// SECOND BUTTON: OPEN THE BIRTHDAY LETTER

letterBtn.addEventListener("click", function() {

    birthdayScreen.classList.add("hidden");

    letterScreen.classList.remove("hidden");

});


const garden = document.getElementById("gardenEffects");

// CREATE FLOATING FLOWERS AND FIREFLIES

function createGarden() {

    const flowers = ["🌸", "🌷", "✿", "🌼"];

    for (let i = 0; i < 18; i++) {

        const flower = document.createElement("span");

        flower.classList.add("floating-flower");

        flower.textContent =
            flowers[Math.floor(Math.random() * flowers.length)];

        flower.style.left = Math.random() * 100 + "%";
        flower.style.animationDuration = (8 + Math.random() * 12) + "s";
        flower.style.animationDelay = Math.random() * 10 + "s";

        garden.appendChild(flower);
    }

    for (let i = 0; i < 25; i++) {

        const firefly = document.createElement("span");

        firefly.classList.add("firefly");

        firefly.style.left = Math.random() * 100 + "%";
        firefly.style.top = Math.random() * 100 + "%";

        firefly.style.animationDelay = Math.random() * 5 + "s";

        garden.appendChild(firefly);
    }
}


// CREATE BIRTHDAY CONFETTI

function celebrate() {

    const confettiColors = [
        "#f6dba7",
        "#f5a6c8",
        "#a8dfc1",
        "#ffffff",
        "#d6b4fc"
    ];

    for (let i = 0; i < 100; i++) {

        const piece = document.createElement("span");

        piece.classList.add("confetti");

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.backgroundColor =
            confettiColors[
                Math.floor(Math.random() * confettiColors.length)
            ];

        piece.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        document.body.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 6500);
    }
}


// START THE GARDEN

createGarden();


// CELEBRATE WHEN THE BIRTHDAY SCREEN OPENS

surpriseBtn.addEventListener("click", celebrate);


const blowBtn = document.getElementById("blowBtn");

const birthdayCake = document.getElementById("birthdayCake");

const candleInstruction =
    document.getElementById("candleInstruction");

const wishMessage =
    document.getElementById("wishMessage");


blowBtn.addEventListener("click", function() {

    // Make the candles disappear
    birthdayCake.textContent = "🍰";

    // Hide the instruction
    candleInstruction.classList.add("hidden");

    // Hide the button
    blowBtn.classList.add("hidden");

    // Reveal the birthday wish
    wishMessage.classList.remove("hidden");

    // Small celebration!
    celebrate();

});


const openLetterBtn =
    document.getElementById("openLetterBtn");

const envelope =
    document.getElementById("envelope");

const letterContent =
    document.getElementById("letterContent");

const typedMessage =
    document.getElementById("typedMessage");

const envelopeInstruction =
    document.querySelector(".envelope-instruction");


const birthdayMessage = `Another year, another chapter, and another opportunity for life to surprise you in the most beautiful ways.

I hope this new chapter brings you happiness, genuine laughter, beautiful memories and countless reasons to smile.

Keep being the wonderful person you are. You deserve all the good things life has to offer.`;


openLetterBtn.addEventListener("click", function() {

    // Open the envelope
    envelope.classList.add("opened");

    // Hide the instruction and button
    envelopeInstruction.classList.add("hidden");
    openLetterBtn.classList.add("hidden");

    // Reveal the letter
    setTimeout(function() {

        letterContent.classList.remove("hidden");

        let index = 0;

        function typeText() {

            if (index < birthdayMessage.length) {

                typedMessage.textContent +=
                    birthdayMessage.charAt(index);

                index++;

                setTimeout(typeText, 35);
            }
        }

        typeText();

    }, 700);

});


/* CREATE THE STARRY SKY */

const starContainer = document.getElementById("stars");

for (let i = 0; i < 70; i++) {

    const star = document.createElement("span");

    star.classList.add("star");

    star.textContent = "✦";

    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    star.style.animationDuration =
        (1 + Math.random() * 3) + "s";

    starContainer.appendChild(star);
}
