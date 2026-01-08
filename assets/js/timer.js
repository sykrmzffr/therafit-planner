class ExerciseTimer {
    constructor(duration, displayElement, progressElement, onComplete) {
        this.duration = duration;
        this.timeLeft = duration;
        this.displayElement = displayElement;
        this.progressElement = progressElement;
        this.onComplete = onComplete;
        this.interval = null;
        this.isRunning = false;
        this.hasStarted = false;

        this.updateDisplay();
    }

    start() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.hasStarted = true;

        this.interval = setInterval(() => {
            this.tick();
        }, 1000);

        this.updateButtons();
    }

    pause() {
        this.isRunning = false;
        clearInterval(this.interval);
        this.updateButtons();
    }

    reset() {
        this.pause();
        this.timeLeft = this.duration;
        this.hasStarted = false;
        this.updateDisplay();
        this.updateButtons();
        if (this.onComplete) document.getElementById('timer-complete-msg').classList.add('d-none');
    }

    tick() {
        if (this.timeLeft <= 0) {
            this.complete();
            return;
        }
        this.timeLeft--;
        this.updateDisplay();
    }

    complete() {
        this.pause();
        if (this.onComplete) this.onComplete();
        this.updateButtons();
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    updateDisplay() {
        if (this.displayElement) {
            this.displayElement.textContent = this.formatTime(this.timeLeft);
        }
        if (this.progressElement) {
            const progress = ((this.duration - this.timeLeft) / this.duration) * 100;
            this.progressElement.style.width = `${progress}%`;
        }
    }

    bindControls(startBtn, pauseBtn, resetBtn) {
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;
        this.resetBtn = resetBtn;

        startBtn.onclick = () => this.start();
        pauseBtn.onclick = () => this.pause();
        resetBtn.onclick = () => this.reset();

        this.updateButtons();
    }

    updateButtons() {
        if (!this.startBtn) return;

        if (this.isRunning) {
            this.startBtn.classList.add('d-none');
            this.pauseBtn.classList.remove('d-none');
        } else {
            this.startBtn.classList.remove('d-none');
            this.pauseBtn.classList.add('d-none');
        }

        if (this.timeLeft === 0) {
            this.startBtn.disabled = true;
        } else {
            this.startBtn.disabled = false;
        }

        this.resetBtn.disabled = !this.hasStarted;
    }
}
