'use strict';

let currentHour = new Date().getHours()
let currentDay = new Date().getDay()
let currentTime = new Date().toLocaleTimeString('en')
let dateNow = new Date().getTime()
let newYearDay = new Date('2023-01-01').getTime()
let timeRemaining = Math.floor((newYearDay - dateNow) / 1000)
let days = Math.floor(timeRemaining / 60 / 60 / 24)

const divGreetings = document.createElement('div')
const divDay = document.createElement('div')
const divTime = document.createElement('div')
const divNewYear = document.createElement('div')

const showGreeting = (hour) => {
    let greetings = ['Доброе утро', 'Добрый день', 'Добрый вечер', ' Доброй ночи'];

    if (hour >= 0 && hour <= 5) {
        return greetings[3];
    }

    if (hour >= 6 && hour <= 11) {
        return greetings[0];
    }

    if (hour >= 12 && hour <= 17) {
        return greetings[1];
    }

    if (hour >= 18 && hour <= 23) {
        return greetings[2];
    }
}

const showWeekDay = (indexDay) => {
    let days = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return days[indexDay];
}

divGreetings.className = 'greetings'
divGreetings.textContent = (showGreeting(currentHour))
document.body.appendChild(divGreetings)

divDay.className = 'days'
divDay.textContent = `Сегодня: ${(showWeekDay(currentDay))}`
document.body.appendChild(divDay)

divTime.className = 'current-time'
divTime.textContent = `Текущее время: ${currentTime}`
document.body.appendChild(divTime)

divNewYear.className = 'time-to-new-year'
divNewYear.textContent = `До нового года осталось ${days} дней`
document.body.appendChild(divNewYear)