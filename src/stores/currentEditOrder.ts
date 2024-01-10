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
    },
    actions: {
      setWholeState(payload: any) {
        Object.assign(this, payload);
      },
    },
})
