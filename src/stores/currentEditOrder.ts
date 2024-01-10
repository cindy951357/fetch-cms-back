import { defineStore } from 'pinia';

export interface ICurrentEditOrder {
    date: string;
    orderId: string;
    orderStatus: string;
    dealerType: string;
    phone: string;
}

export const useCurrentEditOrderStore = defineStore('CurrentEditOrder', {
    state: () => ({
        date: '',
        orderId: '',
        orderStatus: '',
        dealerType: '',
        phone: '',
    }),
    getters: {
      //
    },
    actions: {
      updateOrder(newValue:ICurrentEditOrder) {
        this.$state = newValue;
      },
      setCurrentOrder(current:ICurrentEditOrder) {
        this.$state = current;
      }
    },
})