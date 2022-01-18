const timer = (deadline) => {
    const timerDays = document.getElementById('timer-days');
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = Math.floor((dateStop - dateNow) / 1000)
        let days = Math.floor(timeRemaining / 60 / 60 / 24)
        let hours = Math.floor((timeRemaining / 60 / 60) % 24)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)

        return { timeRemaining, days, hours, minutes, seconds }
    }

    const pad = (n) => {
        if (n <= 9) { return '0' + n }
        return n
    }

    const updateClock = () => {
        let getTime =  getTimeRemaining()
        if (getTime.timeRemaining >= 0) {
            timerDays.textContent = pad(getTime.days)
            timerHours.textContent = pad(getTime.hours)
            timerMinutes.textContent = pad(getTime.minutes)
            timerSeconds.textContent = pad(getTime.seconds)
        } else { clearInterval(idInterval) }
    }

    const idInterval = setInterval(() => {
        updateClock()
    }, 1000)
}

export default timer;