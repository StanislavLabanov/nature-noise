import sbg from '../../../public/assets/summer-bg.jpg'
import rbg from '../../../public/assets/rainy-bg.jpg'
import wbg from '../../../public/assets/winter-bg.jpg'

const type_hendler = (type: string): string | undefined => {
   switch (type) {
      case 'summer': return sbg
      case 'rain': return rbg
      case 'winter': return wbg
      default: return
   }
}

export default type_hendler