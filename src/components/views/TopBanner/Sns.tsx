import SvgGithub from '@/components/icons/GithubSvg'
import SvgTistory from '@/components/icons/TistorySvg'
import SvgInstagram from '@/components/icons/InstagramSvg'

const githubURL = process.env.NEXT_PUBLIC_GITHUB || 'https://github.com/macjjuni/'
const tistoryURL = process.env.NEXT_PUBLIC_TISTORY || 'https://juni-official.tistory.com/'
const instaURL = process.env.NEXT_PUBLIC_INSTA || 'https://www.instagram.com/juni.btc/'

const size = 'w-[32px] h-[32px]'

const Sns = () => {
  return (
    <div className="sns-list relative flex justify-center items-end gap-[12px] w-[136px] h-[auto] md:h-[60px] pb-[4px]">
      <a className={`sns-item-1 {${size}}`} target="_blank" rel="noreferrer" href={githubURL} title="Github Blog">
        <SvgGithub width={32} height={32} />
      </a>
      <a className={`sns-item-2 {${size}}`} target="_blank" rel="noreferrer" href={tistoryURL} title="Tistory Blog">
        <SvgTistory />
      </a>
      <a className={`sns-item-3 {${size}}`} target="_blank" rel="noreferrer" href={instaURL} title="Instagram Blog">
        <SvgInstagram />
      </a>
    </div>
  )
}

export default Sns
