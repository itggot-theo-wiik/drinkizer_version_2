function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function shower() {
    element = document.querySelector(".results");
    console.log(element)
    element.classList.add("display");
}

async function typeWriter() {
    quote = "Which Drink?";

    loops = 0;

    console.log(quote.length);
    while (loops < quote.length) {
        $(".mega_h1").append(quote[loops]);
        await sleep(100);
        loops += 1;
    }
    // var sound = document.getElementById("audio");
    // sound.play();
}

totalSpins = 0;
antiSpam = true;
resultsNotBeenDisplayed = true;

async function which_drink(laktos) {
    if (antiSpam) {
        antiSpam = false;
        i = 0;
        element = document.querySelector(".mega_h1");

        element.classList.remove("tealColor");

        if (laktos) {
            console.log("Det är den laktosfria")
            var drinks = ["Not Mjölk", "Inte mjölk i alla fall...", "Yoggi Yalla / Drick kvarg"]
        } else {
            console.log("Det är den med mjölk")
            var drinks = ["Sprite", "Sprite Zero", "Powerking", "Zingo", "Zingo Passion", "Dr Pepper", "Mountain Dew Burk", "Mountain Dew Flaska", "Trocadero Burk", "Trodacera Flaska", "Aloe Vera", "Vatten", "Eget val"];
        }

        while (i < 15) {
            await sleep(120);
            var random = Math.floor(Math.random() * (drinks.length));
            $('.mega_h1').html(drinks[random]);
            i += 1;
        }
        element.classList.add("tealColor");

        // BLUR START

        // element.classList.toggle("blurry-text");
        // await sleep(2000);
        // element.classList.toggle("blurry-text");

        // BLUR END

        totalSpins += 1;
        console.log(totalSpins);

        if (laktos) {
            console.log("Det är den laktosfria")
            output = "<div>" + totalSpins.toString() + ") " + drinks[random].toString() + "*" + "</div>";
        } else {
            console.log("Det är den med mjölk")
            output = "<div>" + totalSpins.toString() + ") " + drinks[random].toString() + "</div>";
        }

        $(".results").append(output);

        if (totalSpins > 1) {
            antiCheat = ("Spins: " + totalSpins.toString());
            $('.totalSpins').html(antiCheat);
            if (resultsNotBeenDisplayed) {
                shower();
                resultsNotBeenDisplayed = false;
            }
        }
        antiSpam = true;
    }
}

function formFunction() {
    var hello = document.getElementById("frm1").submit();
    console.log(hello)
}

function amountUsers() {
    var person = prompt("Hur många skall dricka?", "1");
    console.log(parseInt(person))
    if (person != null) {
        document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
        i = 0;
        while (i < parseInt(person)) {
            i += 1;
            output = "hello ";
            $("#demo").append(output);
            console.log("idjasijdsa");
        }
    }
}

if (window.performance) {
    console.info("window.performance work's fine on this browser");
}
if (performance.navigation.type == 1) {
    console.info("This page is reloaded");
    refreshCheck()
} else {
    console.info("This page is not reloaded");
}

async function refreshCheck() {
    await sleep(200);
    $('.refreshed').html("Refreshed");
}

function rules() {
    element = document.querySelector(".rules");
    element.classList.toggle("display");
}

function settings() {
    element = document.querySelector(".settings");
    element.classList.toggle("display");
}