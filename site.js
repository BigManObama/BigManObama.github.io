const copyright = document.querySelector('.copyright');
copyright.textContent = `\u00A9 ${new Date().getFullYear()} James website.`;

const hours = new Date().getHours();

const isMorning = hours >= 4 && hours < 12;
const isAfternoon = hours >= 12 && hours < 17;
const isEvening = hours >= 17 || hours < 4;

const goodDay = document.querySelector('#welcome');

if (isMorning) {
    goodDay.textContent = 'Good Morning! Thank you for visiting!';
}
else if (isAfternoon) {
    goodDay.textContent = 'Good Afternoon! Thank you for visiting!';
}
else {
    goodDay.textContent = 'Good Evening! Thank you for visiting!';
}

localStorage.setItem("It's a secret to everybody.", 'You got Marin! Is this your big chance?');