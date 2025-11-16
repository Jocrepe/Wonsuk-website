import { defineStore } from 'pinia'

import Sonyradio from '@/assets/exchange/Sonyradio.png'
import Watch from '@/assets/exchange/Watch.png'
import Bag from '@/assets/exchange/Bag.png'
import Chair from '@/assets/exchange/Chair.png'
import Gramophone from '@/assets/exchange/Gramophone.png'
import Shirt from '@/assets/exchange/Shirt.png'

export const useExchangeStore = defineStore('exchange', {
  state: () => ({
    list : [
    {
      name: 'เครื่องเล่นวิทยุเทป SONY',
      seller: 'เอก เอนก',
      about: 'เครื่องนี้มีตำหนิที่ปุ่มปรับคลื่นวิทยุ 1 ปุ่ม ลำโพงดังทั้งสองข้างใส่เทปเล่นได้ปกติ วิทยุฟังได้ปกติ ',
      reviewscore: '4.8',
      imageUrl: Sonyradio
    },
    {
      name: 'นาฬิกาผู้ชาย',
      seller: 'สมชาย สายเสมอ',
      about: 'นาฬิกาเรือนนี้ผมซื้อมาสองเรือนซ้ำกัน เรือนนี้ใช้งานมาไม่บ่อย เลยอยากส่งต่อครับ',
      reviewscore: '4.2',
      imageUrl: Watch
    },
    {
      name: 'กระเป๋าสานเส้นพลาสติก',
      seller: 'สีนวล เองจ้า',
      about: 'งานฝีมือ ทำเองช่วงโควิด อยากส่งต่อกระเป๋านี้ให้คนที่ได้ใช้งานเพราะไม่มีโอกาสได้ใช้เลย แลกเปลี่ยนได้ ซื้อได้ค่ะ',
      reviewscore: '4.5',
      imageUrl: Bag 
    },
    {
      name: 'เก้าอี้พักผ่อนเอนกประสงค์',
      seller: 'สมพง',
      about: 'มุมพักผ่อนที่สมบูรณ์แบบ! เก้าอี้ไม้เนื้อแข็งเคลือบเงา สวยงามหรูหรา วางมุมไหนก็ดูดี ปรับนอนได้',
      reviewscore: '5.0',
      imageUrl: Chair
    },
    {
      name: 'เครื่องเล่นแผ่นเสียงวินเทจ',
      seller: 'สรัน',
      about: 'ความหรูหราที่มาพร้อมกาลเวลา ส่งต่อหีบเสียงแตรทองเหลือง สภาพสมบูรณ์ สวยงามวิจิตรทุกรายละเอียด',
      reviewscore: '4.7',
      imageUrl: Gramophone
    },
    {
      name: 'เสื้อผ้าลูกไม้ลายดอก',
      seller: 'ยายนี',
      about: 'เติมความหวานให้วันพิเศษ ด้วยเสื้อลูกไม้ฉลุสีพีช/ส้มอ่อน ลายสวยทั้งตัว ตัดเย็บปราณีต ดูสุภาพและอ่อนหวานในชุดเดียว',
      reviewscore:'4.3',
      imageUrl: Shirt
    }]
  })

})
