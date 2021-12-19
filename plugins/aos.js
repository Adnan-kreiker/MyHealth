import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({ app }) => {
  // eslint-disable-next-line new-cap
  app.AOS = new AOS.init({
    disable: window.innerWidth < 640,
    // offset: 200,
    duration: 400,
    easing: 'ease-in-out-cubic',
    once: false,
    mirror: false,
  }) // or any other options you need
}
