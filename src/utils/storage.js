export const Storage = {
    get() {
        return JSON.parse(localStorage.getItem('user_preferences'));
    },
    
    set(data) {
        localStorage.setItem('user_preferences', JSON.stringify(data))
    }
}