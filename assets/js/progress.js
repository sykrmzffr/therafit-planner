const STORAGE_KEY = 'exercise-planner-progress';

const ProgressManager = {
    getCompleted() {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    },

    saveCompleted(completed) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
    },

    markAsCompleted(id, name) {
        const completed = this.getCompleted();
        const today = new Date().toDateString();

        const alreadyCompletedToday = completed.some(
            ex => ex.id === id && new Date(ex.completedAt).toDateString() === today
        );

        if (alreadyCompletedToday) return false;

        completed.push({ id, name, completedAt: new Date().toISOString() });
        this.saveCompleted(completed);
        return true;
    },

    isCompletedToday(id) {
        const completed = this.getCompleted();
        const today = new Date().toDateString();
        return completed.some(
            ex => ex.id === id && new Date(ex.completedAt).toDateString() === today
        );
    },
    
    removeCompletion(id) {
        let completed = this.getCompleted();
        completed = completed.filter(ex => ex.id !== id);
        this.saveCompleted(completed);
    },

    getStats() {
        return {
            total: this.getCompleted().length
        };
    }
};
