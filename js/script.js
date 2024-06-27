let progress = 0;

function updateProgress(increment) {
  progress += increment;
  let elem = document.getElementById("myBar");
  elem.style.width = progress + '%';
}

document.addEventListener("DOMContentLoaded", function() {
    const maleButton = document.getElementById("male-btn");
    const femaleButton = document.getElementById("female-btn");
    const relationshipSection = document.getElementById("relationship-status");
  
    maleButton.addEventListener("click", function() {
      // Show relationship status section
      relationshipSection.classList.remove("hidden");
      // Hide gender selection section
      document.getElementById("gender-selection").classList.add("hidden");
      updateProgress(3.8);
    });
  
    femaleButton.addEventListener("click", function() {
      // Show relationship status section
      relationshipSection.classList.remove("hidden");
      // Hide gender selection section
      document.getElementById("gender-selection").classList.add("hidden");
      updateProgress(3.8);
    });
});

function showGoal() {
    document.getElementById('relationship-status').classList.add('hidden');
    document.getElementById('goal-status').classList.remove('hidden');
    updateProgress(3.8);
}

function showGoalPage(){
    document.getElementById('goal-status').classList.add('hidden');
    document.getElementById('first-goal').classList.remove('hidden');
    updateProgress(3.8);
}

function showKnowledge(){
    document.getElementById('first-goal').classList.add('hidden');
    document.getElementById('astrology-knowledge').classList.remove('hidden');
    updateProgress(3.8);
}

function showBirth(){
    document.getElementById('astrology-knowledge').classList.add('hidden');
    document.getElementById('birth-date').classList.remove('hidden');
    updateProgress(3.8);
}

/* SELECT BIRTH */

function fillDays() {
    let select = document.getElementById("day");
    select.innerHTML = "";
    // Añadir la opción predeterminada "Day"
    let defaultOption = document.createElement("option");
    defaultOption.text = "Day";
    defaultOption.value = "";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    select.appendChild(defaultOption);
    for (let i = 1; i <= 31; i++) {
        let option = document.createElement("option");
        option.text = i;
        option.value = i;
        select.appendChild(option);
    }
}


function fillMonths() {
    let select = document.getElementById("month");
    select.innerHTML = "";
    
    let defaultOption = document.createElement("option");
    defaultOption.text = "Month";
    defaultOption.value = "";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    select.appendChild(defaultOption);
    
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for (let i = 0; i < months.length; i++) {
        let option = document.createElement("option");
        option.text = months[i];
        option.value = i + 1; 
        select.appendChild(option);
    }
}

function fillYears() {
    let select = document.getElementById("year");
    select.innerHTML = "";
    
    let defaultOption = document.createElement("option");
    defaultOption.text = "Year";
    defaultOption.value = "";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    select.appendChild(defaultOption);
    for (let i = 2024; i >= 1920; i--) {
        let option = document.createElement("option");
        option.text = i;
        option.value = i;
        select.appendChild(option);
    }
}

fillDays();
fillMonths();
fillYears();

/* SELECT SIGN */

function determineZodiac() {
    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let zodiacSign = "";

    switch (month) {
        case 1: // January
            if (day <= 19) zodiacSign = { name: "Capricorn", image: "./img/capricorn.png", description: "Capricorns are ambitious, disciplined, and responsible individuals. They are practical and hardworking, often striving for success and stability in their careers and personal lives." };
            else zodiacSign = { name: "Aquarius", image: "./img/aquarius.png", description: "Aquarians are independent, innovative, and intellectual individuals. They are often seen as eccentric or unconventional, with a strong desire to create positive change in the world." };
            break;
        case 2: // February
            if (day <= 18) zodiacSign = { name: "Aquarius", image: "./img/aquarius.png", description: "Aquarians are independent, innovative, and intellectual individuals. They are often seen as eccentric or unconventional, with a strong desire to create positive change in the world." };
            else zodiacSign = { name: "Pisces", image: "./img/pisces.png", description: "Pisceans are empathetic, imaginative, and compassionate individuals. They are deeply intuitive and sensitive, often displaying a strong connection to their emotions and the arts." };
            break;
        case 3: // March
            if (day <= 20) zodiacSign = { name: "Pisces", image: "./img/pisces.png", description: "Pisceans are empathetic, imaginative, and compassionate individuals. They are deeply intuitive and sensitive, often displaying a strong connection to their emotions and the arts." };
            else zodiacSign = { name: "Aries", image: "./img/aries.png", description: "Aries are known for their boldness, energy, and enthusiasm. They are natural leaders who are often adventurous and competitive, with a strong desire to take on challenges head-on." };
            break;
        case 4: // April
            if (day <= 19) zodiacSign = { name: "Aries", image: "./img/aries.png", description: "Aries are known for their boldness, energy, and enthusiasm. They are natural leaders who are often adventurous and competitive, with a strong desire to take on challenges head-on." };
            else zodiacSign = { name: "Taurus", image: "./img/taurus.png", description: "Taureans are dependable, practical, and grounded individuals. They value stability and security, often displaying a strong work ethic and a love for the finer things in life." };
            break;
        case 5: // May
            if (day <= 20) zodiacSign = { name: "Taurus", image: "./img/taurus.png", description: "Taureans are dependable, practical, and grounded individuals. They value stability and security, often displaying a strong work ethic and a love for the finer things in life." };
            else zodiacSign = { name: "Gemini", image: "./img/gemini.png", description: "Geminis are curious, adaptable, and sociable. They have a quick wit and love to communicate, often juggling multiple interests and relationships simultaneously." };
            break;
        case 6: // June
            if (day <= 20) zodiacSign = { name: "Gemini", image: "./img/gemini.png", description: "Geminis are curious, adaptable, and sociable. They have a quick wit and love to communicate, often juggling multiple interests and relationships simultaneously." };
            else zodiacSign = { name: "Cancer", image: "./img/cancer.png", description: "Cancerians are nurturing, intuitive, and emotional beings. They are deeply connected to their families and homes, often displaying empathy and sensitivity towards others." };
            break;
        case 7: // July
            if (day <= 22) zodiacSign = { name: "Cancer", image: "./img/cancer.png", description: "Cancerians are nurturing, intuitive, and emotional beings. They are deeply connected to their families and homes, often displaying empathy and sensitivity towards others." };
            else zodiacSign = { name: "Leo", image: "./img/leo.png", description: "Leos are confident, charismatic, and passionate individuals. They love being in the spotlight and thrive on attention, often displaying leadership qualities and a generous spirit." };
            break;
        case 8: // August
            if (day <= 22) zodiacSign = { name: "Leo", image: "./img/leo.png", description: "Leos are confident, charismatic, and passionate individuals. They love being in the spotlight and thrive on attention, often displaying leadership qualities and a generous spirit." };
            else zodiacSign = { name: "Virgo", image: "./img/virgo.png", description: "Virgos are practical, analytical, and detail-oriented perfectionists. They have a strong sense of duty and are often dedicated to helping others, though they can be critical at times." };
            break;
        case 9: // September
            if (day <= 22) zodiacSign = { name: "Virgo", image: "./img/virgo.png", description: "Virgos are practical, analytical, and detail-oriented perfectionists. They have a strong sense of duty and are often dedicated to helping others, though they can be critical at times." };
            else zodiacSign = { name: "Libra", image: "./img/libra.png", description: "Libras are diplomatic, charming, and sociable individuals. They value harmony and balance in all aspects of life, often seeking justice and fairness in their relationships and endeavors." };
            break;
        case 10: // October
            if (day <= 22) zodiacSign = { name: "Libra", image: "./img/libra.png", description: "Libras are diplomatic, charming, and sociable individuals. They value harmony and balance in all aspects of life, often seeking justice and fairness in their relationships and endeavors." };
            else zodiacSign = { name: "Scorpio", image: "./img/scorpio.png", description: "Scorpios are intense, passionate, and mysterious individuals. They are known for their deep emotions and strong willpower, often displaying a desire for transformation and uncovering hidden truths." };
            break;
        case 11: // November
            if (day <= 21) zodiacSign = { name: "Scorpio", image: "./img/scorpio.png", description: "Scorpios are intense, passionate, and mysterious individuals. They are known for their deep emotions and strong willpower, often displaying a desire for transformation and uncovering hidden truths." };
            else zodiacSign = { name: "Sagittarius", image: "./img/sagittarius.png", description: "Sagittarians are adventurous, optimistic, and philosophical individuals. They love freedom and exploration, often seeking knowledge and new experiences to broaden their horizons." };
            break;
        case 12: // December
            if (day <= 21) zodiacSign = { name: "Sagittarius", image: "./img/sagittarius.png", description: "Sagittarians are adventurous, optimistic, and philosophical individuals. They love freedom and exploration, often seeking knowledge and new experiences to broaden their horizons." };
            else zodiacSign = { name: "Capricorn", image: "./img/capricorn.png", description: "Capricorns are ambitious, disciplined, and responsible individuals. They are practical and hardworking, often striving for success and stability in their careers and personal lives." };
            break;
    }

    document.getElementById("sign-name").textContent = zodiacSign.name;
    document.getElementById("sign-name2").textContent = zodiacSign.name;
    document.getElementById("sign-name3").textContent = zodiacSign.name;
    document.getElementById("sign-name4").textContent = zodiacSign.name;
    document.getElementById("sign-img").src = zodiacSign.image;

    document.getElementById("sign-description").textContent = zodiacSign.description;

    document.getElementById("sign-info").classList.remove("hidden");
    document.getElementById("birth-date").classList.add("hidden");

    return zodiacSign;
}




/* CONTINUE WITH FLOW */

function showStatement(){
    document.getElementById('sign-info').classList.add('hidden');
    document.getElementById('statement').classList.remove('hidden');
    updateProgress(3.8);
}

function showIntroPersonality() {
    document.getElementById('statement').classList.add('hidden');
    document.getElementById('intro-personality').classList.remove('hidden');
    updateProgress(3.8);
}

function showChatStatement(){
    document.getElementById('intro-personality').classList.add('hidden');
    document.getElementById('chat-statement').classList.remove('hidden');
    updateProgress(3.8);
}

function showThoughts() {
    document.getElementById('chat-statement').classList.add('hidden');
    document.getElementById('thoughts-focus').classList.remove('hidden');
    updateProgress(3.8);
}

function showCriticism() {
    document.getElementById('thoughts-focus').classList.add('hidden');
    document.getElementById('sensitive-criticism').classList.remove('hidden');
    updateProgress(3.8);
}

function showOverthink(){
    document.getElementById('sensitive-criticism').classList.add('hidden');
    document.getElementById('overthink-criticism').classList.remove('hidden');
    updateProgress(3.8);
}

function showMostImportant(){
    document.getElementById('overthink-criticism').classList.add('hidden');
    document.getElementById('most-important').classList.remove('hidden');
    updateProgress(3.8);
}

function showEmotionalControl(){
    document.getElementById('most-important').classList.add('hidden');
    document.getElementById('emotional-control').classList.remove('hidden');
    updateProgress(3.8);
}

function showPagePersonality(){
    document.getElementById('emotional-control').classList.add('hidden');
    document.getElementById('page-personality').classList.remove('hidden');
    updateProgress(3.8);
}

function showJob () {
    document.getElementById('page-personality').classList.add('hidden');
    document.getElementById('job-question').classList.remove('hidden');
    updateProgress(3.8);
}

function showKnow(){
    document.getElementById('job-question').classList.add('hidden');
    document.getElementById('know-question').classList.remove('hidden');
    updateProgress(3.8);
}

function showRelaxing(){
    document.getElementById('know-question').classList.add('hidden');
    document.getElementById('trouble-relaxing').classList.remove('hidden');
    updateProgress(3.8);
}

function showRelationship(){
    document.getElementById('trouble-relaxing').classList.add('hidden');
    document.getElementById('intro-relationship').classList.remove('hidden');
    updateProgress(3.8);
}

function showSexStatement(){
    document.getElementById('intro-relationship').classList.add('hidden');
    document.getElementById('sex-statement').classList.remove('hidden');
    updateProgress(3.8);
}

function showCommunication(){
    document.getElementById('sex-statement').classList.add('hidden');
    document.getElementById('satisfied-communication').classList.remove('hidden');
    updateProgress(3.8);
}

function showEnhancement(){
    document.getElementById('satisfied-communication').classList.add('hidden');
    document.getElementById('enhancement-statement').classList.remove('hidden');
    updateProgress(3.8);
}

function showPartnerCharact() {
    document.getElementById('enhancement-statement').classList.add('hidden');
    document.getElementById('partner-characteristics').classList.remove('hidden');
    updateProgress(3.8);
}

function showAngry(){
    document.getElementById('partner-characteristics').classList.add('hidden');
    document.getElementById('angry-easily').classList.remove('hidden');
    updateProgress(3.8);
}

function showConflict(){
    document.getElementById('angry-easily').classList.add('hidden');
    document.getElementById('conflict-dealing').classList.remove('hidden');
    updateProgress(3.8);
}

function showAppreciated(){
    document.getElementById('conflict-dealing').classList.add('hidden');
    document.getElementById('appreciated-statement').classList.remove('hidden');
    updateProgress(3.8);
}

function showPageRelationship(){
    document.getElementById('appreciated-statement').classList.add('hidden');
    document.getElementById('page-relationship').classList.remove('hidden');
    updateProgress(3.8);
}

function showDecisions(){
    document.getElementById('page-relationship').classList.add('hidden');
    document.getElementById('decisions-question').classList.remove('hidden');
    updateProgress(3.8);
}

function showPercentage(){
    document.getElementById('decisions-question').classList.add('hidden');
    document.getElementById('page-percentage').classList.remove('hidden');
    updateProgress(3.8);
}

function showLoadingPage(){
    document.getElementById('page-percentage').classList.add('hidden');
    document.getElementById('loading-content').classList.remove('hidden');
    document.getElementById('progress-bar').classList.add('hidden');
    loadNumbers();
    loadNumbersWithDelay();
    loadNumbersWithDelay2();
}

//LOADING BAR - NUMBERS 1st
function loadNumbers() {
    let count = 0;
    const progressBar = document.querySelector('.loading-content-bar');
    const interval = setInterval(() => {
        document.getElementById('loading-numbers').textContent = count + '%';
        progressBar.style.width = count + '%';
        progressBar.classList.add('smooth-loading');
        count++;
        if (count > 100) {
            clearInterval(interval);
        }
    }, 100);
}

function loadNumbersWithDelay() {
    setTimeout(loadNumbers, 10000); 
}

//LOADING BAR - NUMBERS 2nd
function loadNumbers2() {
    let count = 0;
    const progressBar = document.getElementById('loading-content-bar2');
    const loadingNumbers = document.getElementById('loading-numbers2');
    const interval = setInterval(() => {
        loadingNumbers.textContent = count + '%';
        progressBar.style.width = count + '%';
        progressBar.classList.add('smooth-loading');
        count++;
        if (count > 100) {
            clearInterval(interval);
        }
    }, 100);
}

function loadNumbersWithDelay() {
    setTimeout(loadNumbers2, 10000); 
}

//LOADING BAR - NUMBERS 3rd
function loadNumbers3() {
    let count = 0;
    const progressBar = document.getElementById('loading-content-bar3');
    const interval = setInterval(() => {
        document.getElementById('loading-numbers3').textContent = count + '%';
        progressBar.style.width = count + '%';
        progressBar.classList.add('smooth-loading');
        count++;
        if (count > 100) {
            clearInterval(interval);
            document.getElementById('loading-bar-button').classList.remove('hidden');
        }
    }, 100);

}

function loadNumbersWithDelay2() {
    setTimeout(loadNumbers3, 20000); 
}


function showForm(){
    document.getElementById('loading-content').classList.add('hidden');
    document.getElementById('form-page').classList.remove('hidden');
}

function validateForm(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please fill out both email and password fields.");
        return false;
    } else {
        showWelcome();
    }
}

function showWelcome() {
    document.getElementById('form-page').classList.add('hidden');
    
    let welcomePage = document.getElementById('welcome-page');
    welcomePage.classList.remove('hidden');
    
    let h2Elements = welcomePage.querySelectorAll('h2');
    
    function showNextH2(index) {
        if (index < h2Elements.length) {
            let currentH2 = h2Elements[index];

            currentH2.classList.remove('hidden');
            currentH2.classList.add('fade-in');


            setTimeout(function() {

                currentH2.classList.add('fade-out');
                
                setTimeout(function() {
                    currentH2.classList.add('hidden');

                    showNextH2(index + 1);
                }, 1000);
            }, 3000);
        } else {
            // Después de mostrar todos los h2, muestra el botón
            let button = document.getElementById('welcome-button');
            button.classList.remove('hidden');
            button.classList.add('fade-in');
        }
    }

    // Comienza mostrando el primer h2
    showNextH2(0);
}