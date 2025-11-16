import { defineStore } from 'pinia'
import Jak from '@/assets/community/Jak.png'
import Shirt from '@/assets/community/Shirt.png'
import Music from '@/assets/community/Music.png'
import Cabinet from '@/assets/community/Cabinet.png'
import Bag from '@/assets/community/Bag.png'

export const useCommunityStore = defineStore('community', {
  state: () => ({
    list : [
      {
        name: 'นก นางแอ่น',
        about: 'จักรตัวนี้เคยใช้เย็บเสื้อผ้าให้ลูกสาวตอนเรียนมหาลัย ตอนนี้ไม่ได้ใช้งานแล้วค่ะ แต่ภูมิใจมากๆจักรตัวนี้นี่แหละที่ทำให้ลูกเรียนจบ',
        imageUrl: Jak,
        reviewscore: '4.8'
      },
      {
        name: 'สุชาวดี สีใจ',
        about: 'เสื้อตัวนี้เป็นเสื้อที่สวยและใส่สบาย เพะราลูกสาวบอกว่าแม่ใส่ตัวนี้แล้วสวยแต่ตอนนี้แม่ป่วย คงใส่เสื้อตัวนี้ไปไหนไม่ได้แล้ว',
        imageUrl: Shirt,
        reviewscore: '4.5'
      },
      {
        name: 'กัลยา นักเย็บ',
        about: 'ลำโพงจากเพื่อนเก่าไม่ถูกกันไม่อยากเก็บไว้',
        imageUrl: Music,
        reviewscore: '4.5'
      },
      {
        name: 'ยายจื้น นิสา ยืนยง',
        about: 'ปกติก็ไม่เคยรู้เลยว่าอะไรที่ของดีแบบนี้อยากส่งต่อ',
        imageUrl: Cabinet,
        reviewscore: '5.0'
      },
      {
        name:'ยายจื้น นักเย็บ',
        about: 'ปกติก้ไปนะ ไปบ่อยมากเลยถ้าไม่รู้ไปไหนลองทักมา',
        imageUrl: Bag,
        reviewscore: '4.5'
      }
    ]
  }),

})
