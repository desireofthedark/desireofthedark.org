console.log('Hello World!');

//-------------- SPECIAL DECLEARATIONS ------------------------

var date = new String(Date());
var daily_reward_amount_numbers = Number(date[8] + date[9] + "000");

//------------- ELEMENTS ------------------------

const mainDiv = document.getElementById('home');
const mainView = document.getElementById('Homeview');
const Location_box = document.getElementById('main');
const rewards_menu = document.getElementById("rewards_menu");
const event_box = document.getElementById("Event");
const daily_reward_amount = document.getElementById("daily_reward_amount");
const coins_status = document.getElementById("coins_status");
const number_of_coins = document.getElementById("number_of_coins");
const how_to_play_btn = document.getElementById("how_to_play");
const level_label = document.getElementsByClassName("level_label");
const level_description = document.getElementsByClassName("img_dsc");
const subheading_card = document.getElementsByClassName("subheading_card");
const reward_label = document.getElementsByClassName("reward_label");
const chest_images = document.getElementsByClassName("img_reward");

//------------- BUTTONS --------------------------

const Event_button = document.getElementById("events_btn");
const Location_button = document.getElementById('location_btn');
const Home_button = document.getElementById('Home_btn');
const rewards_button = document.getElementById("Rewards_btn");
const rewards_back_button = document.getElementById("back_btn_rewards");
const daily_reward_collect_button = document.getElementById("daily_reward_collect_btn");

//------------- STATEMENTS ------------------------
chest_images[0].innerHTML = '<img id="daily_reward_image" src="Images/EmptyChest.png" width="170px" alt=""><img>'

if (localStorage.getItem("date") != date[8] + date[9]) {
    chest_images[0].innerHTML = '<img id="daily_reward_image" src="Images/OpenChest.png" width="170px" alt=""><img>';
}
for (let i = 0; i < level_label.length; i++) {
    level_label[i].textContent = "Level " + (i + 1);
    level_description[i].textContent = descriptions[i];
    subheading_card[i].textContent = level_subheading[i];
}
for (let i = 0; i < reward_label.length; i++) {
    reward_label[i].innerHTML = reward_card_name[i];
}
const daily_reward_image = document.getElementById("daily_reward_image");


//-------------- FUNCTIONS ------------------------

const close_rewards = function() {
    rewards_menu.style.left = "200%";
    coins_status.style.opacity = 1;
}
const go_home = function() {
    rewards_menu.style.display = "none";
    Location_box.style.top = '200%';
    mainDiv.style.position = 'initial';
    mainDiv.style.display = "block";
    event_box.style.top = "200%";
    coins_status.style.opacity = 1;
    close_rewards();
}
const go_rewards_menu = function() {
    rewards_menu.style.display = "block";
    rewards_menu.style.left = "0px";
    coins_status.style.opacity = 0;
}
const ViewLocations = function() {
    Location_box.style.display = "block";
    Location_box.style.top = '50px';
    mainDiv.style.position = 'absolute';
    mainDiv.style.top = '200%';
    mainDiv.style.display = "none";
    coins_status.style.opacity = 0;
}
const ViewEvents = function() {
    event_box.style.position = "absolute";
    event_box.style.top = "50px";
    coins_status.style.opacity = 0;
}

const update_user_screen_coins = function() {
    number_of_coins.innerText = localStorage.getItem("sbsgames_the_forbidden_lovestory");
}

const collect_daily_amount = function() {
    if (localStorage.getItem("date") != Number(date[8] + date[9])) {
        increase_coins(daily_reward_amount_numbers);
        daily_reward_image.src = "Images/EmptyChest.png";
        localStorage.setItem("daily_amount_collected", true);
        localStorage.setItem("date", Number(date[8] + date[9]));
    } else {
        alert("Dear User! You have already collected your reward");
        daily_reward_image.src = "Images/EmptyChest.png"
    }
}

function officialSuiteRedirect() {
    window.location.href = "https://www.example.com";
}

//----------------------- STATEMENTS ------------------------------------



//----------- EXECUTIONS ------------------------

update_user_screen_coins();
//daily_reward_amount.innerHTML = "x" + daily_reward_amount_numbers;

//---------- EVENT LISTENERS ----------------------

daily_reward_collect_button.addEventListener("click", collect_daily_amount);
Location_button.addEventListener('click', ViewLocations);
Home_button.addEventListener('click', go_home);
rewards_button.addEventListener("click", go_rewards_menu);
Event_button.addEventListener("click", ViewEvents);
rewards_back_button.addEventListener("click", close_rewards);
how_to_play_btn.addEventListener("click", officialSuiteRedirect);