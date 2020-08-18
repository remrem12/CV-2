import { TimelineMax as Timeline, Power1, gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'

export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.1
  let timeline
  timeline = getTimeLine(node, delay)

  timeline.play()
}

const getTimeLine = (node, delay) => {
  gsap.registerPlugin(CSSPlugin)
  const timeline = new Timeline({ paused: true })
  const avatar = node.querySelector('.avatar')
  const content = node.querySelector('.intro')
  const pageTitle = node.querySelector('.page-title')
  const edu = node.querySelector('.edu')
  const skills = node.querySelector('.skills')
  const projects = node.querySelector('.projects')
  const contactBlock = node.querySelector('.contact-block')
  const map = node.querySelector('.map')

  timeline.from(node, 0.2, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
  avatar && timeline.from(avatar, 0.4, { autoAlpha: 0, scale: 0.8, delay: -0.2, y: 35, ease: Power1.easeInOut })
  content && timeline.from(content, 0.4, { autoAlpha: 0, scale: 0.8, delay: -0.2, y: 25, ease: Power1.easeInOut })
  pageTitle && timeline.from(pageTitle, 0.4, { autoAlpha: 0, scale: 0.8, delay: -0.2, ease: Power1.easeInOut })
  edu && timeline.from(edu, 0.4, { autoAlpha: 0, y: 25, delay: -0.5, ease: Power1.easeInOut })
  skills && timeline.from(skills, 0.4, { autoAlpha: 0, y: 25, delay: -0.4, ease: Power1.easeInOut })
  projects && timeline.from(projects, 0.4, { autoAlpha: 0, y: 25, delay: -0.3, ease: Power1.easeInOut })
  contactBlock && timeline.from(contactBlock, 0.4, { autoAlpha: 0, y: 25, delay: -0.3, ease: Power1.easeInOut })
  map && timeline.from(map, 0.4, { autoAlpha: 0, y: 25, delay: -0.3, ease: Power1.easeInOut })

  return timeline
}

