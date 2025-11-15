import { defineStore } from 'pinia'

export const useContactStore = defineStore('contact', {
  state: () => ({
    item : []
  }),
  actions: {
    addToitem (itemData) {
      this.item = []
      this.item.push(itemData)
      localStorage.setItem('item-data', JSON.stringify(this.item))
    },
    loadItem () {
      const prev = localStorage.getItem('item-data')
      if (prev) {
        this.item = JSON.parse(prev)
      }
    }
  }

})
