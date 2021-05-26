class Chronometer {
    constructor() {
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.interval = null;

        this.secondsElement = document.getElementById("seconds");
        this.minutesElement = document.getElementById("minutes");
        this.hoursElement = document.getElementById("hours");
    }

    play() {
        console.log( this.hoursElement)
        clearInterval(this.interval)
        this.interval = setInterval(this.tick.bind(this), 1000);
    }
    
    stop() {
        clearInterval(this.interval)
    }
    
    reset() {
        this.seconds = this.minutes = this.hours = 0;
    
        this.secondsElement.innerText = "00";
        this.minutesElement.innerText = "00";
        this.hoursElement.innerText = "00";
    }

    tick() {
        this.seconds++;
        if(this.seconds === 60){
            this.seconds = 0;
            this.minutes++;
    
            if(this.minutes === 60){
                this.minutes = 0;
                this.hours++;
            }
        }
    
        this.hoursElement.innerText =  `${this.hours}`.padStart(2, "0");
        this.minutesElement.innerText =  `${this.minutes}`.padStart(2, "0");
        this.secondsElement.innerText = `${this.seconds}`.padStart(2, "0");    
    }
}

const chronometer = new Chronometer();
