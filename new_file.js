class Clock {
    constructor() {
        const currentTime = new Date();
        this.hours = currentTime.getHours();
        this.minutes = currentTime.getMinutes();
        this.seconds = currentTime.getSeconds();

        this._tick();
        setInterval(this._tick.bind(this), 1000);

    }

    printTime() {
        const timeString = `${this.hours}:${this.minutes}:${this.seconds}`;
        console.log(timeString);
    }

    _tick() {
        this.seconds++;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
            if (this.minutes === 60) {
                this.minutes = 0;
                this.hours++;
                if (this.hours === 24) {
                    this.hours = 0;
                }
            }
        }

        this.printTime();


    }

}

const clock = new Clock();