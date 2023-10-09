import { range } from '../const'

const change_hendler = (audio) => {
   range.addEventListener("change", (e) => {
      audio.volume = e.currentTarget.value / 100;
   })
}

export default change_hendler