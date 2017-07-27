function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function shower() {
    element = document.querySelector(".results");
    element.classList.add("display");
}

async function typeWriter() {
    quote = "Which Drink?";

    loops = 0;
    while (loops < quote.length) {
        $(".mega_h1").append(quote[loops]);
        await sleep(100);
        loops += 1;
    }
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
            var drinks = ["Not Mjölk", "Inte mjölk i alla fall...", "Yoggi Yalla / Drick kvarg"]
        } else {
            var drinks = ["Sprite", "Sprite Zero", "Powerking", "Zingo", "Zingo Passion", "Dr Pepper", "Mountain Dew Burk", "Mountain Dew Flaska", "Trocadero Burk", "Trodacera Flaska", "Aloe Vera", "Vatten", "Eget val"];
        }

        sleepTime = 1;
        // 34 SNURR
        while (i < 34) {
            await sleep(Math.pow(1.2, sleepTime) + 60);
            sleepTime += 1;
            var random = Math.floor(Math.random() * (drinks.length));
            $('.mega_h1').html(drinks[random]);
            i += 1;
            // var sound = document.getElementById("audio");
            // sound.play();
        }
        element.classList.add("tealColor");

        // BLUR START

        // element.classList.toggle("blurry-text");
        // await sleep(2000);
        // element.classList.toggle("blurry-text");

        // BLUR END

        totalSpins += 1;

        if (laktos) {
            output = "<div>" + totalSpins.toString() + ") " + drinks[random].toString() + "*" + "</div>";
        } else {
            output = "<div>" + totalSpins.toString() + ") " + drinks[random].toString() + "</div>";
        }

        doubleTrouble = (Math.floor(Math.random() * 10) + 1);
        console.log(doubleTrouble);

        if (doubleTrouble == 1) {
            quote = "Oops...";
            await sleep(2000)
            $('.mega_h1').html("");

            loops = 0;
            while (loops < quote.length) {
                $(".mega_h1").append(quote[loops]);
                await sleep(100);
                loops += 1;
            }
            await sleep(2000)
            element = document.querySelector("body");
            element.classList.toggle("HELL");
            await sleep(2000)
            $('.mega_h1').html("Stor Kaffe");
            await sleep(2000)
            element.classList.toggle("HELL");

            output = "<div>" + totalSpins.toString() + ") " + "Stor Kaffe" + "</div>";
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
}

function amountUsers() {
    var person = prompt("Hur många skall dricka?", "1");
    if (person != null) {
        document.getElementById("demo").innerHTML =
            "Hello " + person + "! How are you today?";
        i = 0;
        while (i < parseInt(person)) {
            i += 1;
            output = "hello ";
            $("#demo").append(output);
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