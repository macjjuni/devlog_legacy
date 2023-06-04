import LottieItem from '@/components/common/LottieItem'
import Search from '@/assets/lottie/search.json'

// Lottie Option
const defaultOption = {
  loop: true,
  play: true,
  style: { width: '400px', height: '500px' },
}

const SearchLoader = () => {
  return (
    <div className="fixed top-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.33)] z-[9999]">
      <LottieItem className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" defaultOption={defaultOption} animationData={Search} />
    </div>
  )
}
export default SearchLoader
