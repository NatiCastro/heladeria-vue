import { defineStore } from 'pinia'

export const useIceCream = defineStore('counter', {
  state: () => {
    return { amount: 0 } //cambió de nombre count por amount
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    setAmount(n) {
      this.amount = n;
    },
  },
})