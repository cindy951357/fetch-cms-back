import { defineStore } from 'pinia';

export const useModalStore = defineStore('Modal', {
    state: () => ({ 
      open: false,
      current: 'sidebar',
      confirmStr: '',
    }),
    getters: {
      isOpen: (state) => state.open,
    },
    actions: {
      openModal(whichContent: string = 'sidebar') {
        this.current = whichContent;
        this.open = true;
      },
      close(){
         this.open = false;
         this.confirmStr = '';
         this.current = "sidebar";
      },
      rejectClicked() {
        this.confirmStr = 'reject';
        this.open = false;
      },
      confirmClicked() {
        this.confirmStr = 'confirm';
        this.open = false;
      }
    },
})