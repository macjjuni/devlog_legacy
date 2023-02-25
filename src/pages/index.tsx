import PageHead from '@/components/common/PageHead'
import Mail from '@/components/views/Mail'
import { text } from '@/styles/global'

const CName = `${text.light} text-xlg`

const Home = () => {
  return (
    <>
      <PageHead subTitle="Home" />
      <section className="flex justify-between items-center min-h-main select-none md:flex-row flex-col">
        <div className="w-full m-0 md:h-[500px] h-[400px]" />
        <div className="flex flex-col justify-start gap-8  w-full m-0 pretendard">
          <h1 className={`${text.black} text-head_lg fwb italic`}>About</h1>

          <h2 className={CName}>
            안녕하세요? 👋
            <br />
            이것저것 만들기 좋아하는 프론트엔드 개발자 이준희입니다.
          </h2>

          <h2 className={CName}>
            <span className="fwb text-primary">꾸준함이 생명</span>이라는 인생 모토를 가지고 있으며 새로 알게 된 개발 지식을
            <a rel="noreferrer" href="https://juni-official.tistory.com/" title="꾸생의 DevLog" target="_blank" className="text-BLG1000 dark:text-BLG0">
              {' '}
              <u>블로그</u>
            </a>
            에 기록하는 습관을 가지고 있습니다.
          </h2>

          <h2 className={CName}>겉으로 드러나지 않는 예민한 성격으로 개발할 때는 사소한 디테일에도 신경을 쓰는 편이고 프로젝트 완성도를 높이는데 열정적입니다.</h2>

          <h2 className={CName}>
            저에게 관심이 있으시거나 궁금한 점이 있다면
            <br className="hidden lg:block" />
            <span className="lg:hidden">, </span>
            {/* 이력서 또는 언제든 메일을 보내주세요! */}
            언제든 메일을 보내주세요!
          </h2>
          <Mail />
        </div>
      </section>
    </>
  )
}

export default Home
