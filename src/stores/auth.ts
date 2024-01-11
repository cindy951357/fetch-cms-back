import { defineStore } from 'pinia';

export const useAuthStore = defineStore('Auth', {
    state: () => ({ isLoggedIn: false }),
    getters: {
      
    },
    actions: {
        logIn(){
            this.isLoggedIn = true;
        },
        logOut(){
            this.isLoggedIn = false;
        }
    },
});