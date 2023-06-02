import * as _ from 'lodash'

export const topButtonEffect = {
  initial: {
    opacity: 0,
    x: 30,
    rotate: 120,
  },
  animate: {
    opacity: 1,
    x: 0,
    rotate: 0,
  },
  exit: {
    opacity: 0,
    x: 30,
    rotate: 120,
  },
  transition: {
    type: 'spring',
    stiffness: 700,
    damping: 26,
    duration: 5,
    delay: 0,
  },
}

export const secondEffect = () => {
  const effect = _.cloneDeep(topButtonEffect)
  effect.transition.delay = 0.1
  return effect
}
