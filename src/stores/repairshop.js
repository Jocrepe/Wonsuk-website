import { defineStore } from 'pinia'

import BigRepair from '@/assets/icon/ช่างใหญ่.png'
import Building from '@/assets/icon/building.png'
import Electric from '@/assets/icon/electric.png'
import Clothes from '@/assets/icon/clothes.png'

export const useRepairshopStore = defineStore('repairshop', {
  state: () => ({
    list: [
    {
      name: 'ร้านซ่อมมอเตอร์ไซค๋ ช่างเหล็กใหญ่ service',
      imageUrl: BigRepair,
      reviewscore: '4.8',
      about: '"มาตรฐานที่คุณมั่นใจ บริการที่คุณประทับใจ ซ่อมด้วยเครื่องมือครบ อะไหล่แท้ ทีมช่างประสบการณ์สูง"',
      open: '9 โมงถึง 3 ทุ่ม',
    },
    {
      name: 'รับเหมาต่อเติมบ้านและอาคารทุกชนิด',
      imageUrl: Building,
      reviewscore: '4.5',
      about: '"✅ รับเหมาต่อเติมบ้านและอาคารทุกชนิด โดยทีมช่างมืออาชีพ ประสบการณ์สูง งานดี ราคายุติธรรม รับประกันความพึงพอใจ!"',
      open: '24 ชั่วโมง',
    },
    {
      name: 'ช่างไฟฟ้าด่วนๆ เช็คระบบไฟฟ้า และซ่อมบำรุงอุปกรณ์ไฟฟ้า รับซ่อม',
      imageUrl: Electric,
      reviewscore: '5.0',
      about: '✨ “ซ่อมด้วยช่างผู้เชี่ยวชาญ เครื่องมือทันสมัย งานเนี๊ยบทุกชิ้นงาน” รับซ่อมอุปกรณ์ไฟฟ้าทั้งบ้านและสำนักงาน',
      open: '9 โมงถึง 3 ทุ่ม',
    },
    {
      name: 'Anong รับปรับเปลี่ยน แก้ทรง เสื้อ กางเกง',
      imageUrl: Clothes,
      reviewscore: '4.8',
      about: '"รับแก้ทรงเสื้อ กางเกง เย็บ บริการที่คุณประทับใจ ซ่อมด้วยเครื่องมือครบ ทีมช่างประสบการณ์สูง"',
      open: '9 โมงถึง 3 ทุ่ม',
    }]
  })

})
