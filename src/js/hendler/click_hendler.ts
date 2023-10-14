import { audios, wrapper, range } from '../const'
import type_hendler from './type_hendler'
import change_hendler from './change_hendler'

const click_hendler = (button: HTMLButtonElement): void => {
   if (wrapper) wrapper.style.background = `no-repeat center/cover url(${type_hendler(button.className)})`

   audios.forEach(audio => {
      if (audio.className === button.className) {
         if (audio.paused) {
            audio.play()
            if (range) audio.volume = +range.value / 100

            change_hendler(audio)
         } else {
            audio.pause()
         }
      } else {
         audio.pause()
         audio.currentTime = 0;
      }
   })
}

export default click_hendler