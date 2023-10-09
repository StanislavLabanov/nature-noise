import { buttons } from './const'
import click_hendler from './hendler/click_hendler'

const buttons_forEach = () => {
   buttons.forEach(button => {
      button.addEventListener('click', () => click_hendler(button))
   })
}

export default buttons_forEach