export const xWidth = 10

export const MainAnimation = {
  initial: {
    opacity: 0,
    x: xWidth,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  transition: {
    type: 'spring',
    stiffness: 100,
    damping: 20,
  },
}
