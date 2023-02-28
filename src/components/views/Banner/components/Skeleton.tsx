import React from 'react'

const Skeleton = () => {
  return (
    <div className="relative w-full h-full bg-BLG100 dark:bg-BLG800 ease">
      <div className="skeleton-bar absolute l-[-100px] w-[200px] h-[120%] rotate-[12deg] blur-2xl bg-BLG50 dark:bg-BLG700 ease" />
    </div>
  )
}

export default Skeleton
