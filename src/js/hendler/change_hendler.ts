import { range } from '../const'

const change_hendler = (audio: HTMLAudioElement): void => {
   if (range) {
      range.addEventListener("change", (e) => {
         audio.volume = +(e.currentTarget as HTMLInputElement).value / 100;
      })
   }
}

export default change_hendler