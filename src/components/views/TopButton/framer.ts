export const topButtonAnimation = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 50,
  },
  transition: {
    type: 'spring',
    stiffness: 700,
    damping: 26,
    duration: 2000,
  },
}
