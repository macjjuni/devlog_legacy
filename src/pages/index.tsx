import PageHead from '@/components/common/PageHead'
import Mail from '@/components/views/Mail'
import { text } from '@/styles/global'

const CName = `${text.light} text-xlg`

const Home = () => {
  return (
    <>
      <PageHead subTitle="Home" />
      <section className="flex justify-start items-center min-h-main select-none md:flex-row flex-col">
        <div className="w-full m-0 md:h-[500px] h-[400px]" />
        <div className="flex flex-col justify-start gap-8  w-full m-0 pretendard">
          <h1 className={`${text.black} text-head_lg fwb italic`}>About</h1>

          <h2 className={CName}>
            안녕하세요? 👋
            <br />
            이것저것 만들기 좋아하는 <span className="fwb text-primary">꾸생</span>입니다.
          </h2>

          <h2 className={CName}>
            <span className="fwb text-primary">
              <u>꾸준함이 생명</u>
            </span>
            이라는 인생 모토를 가지고 있으며 개발 공부나 취미 등 기록하기 위해 노력하고 있습니다.
          </h2>

          <h2 className={CName}>겉으로 드러나지 않는 예민한 성격으로 사소한 디테일에도 신경을 쓰는 편이고 프로젝트 완성도를 높이는데 열정적입니다.</h2>

          <h2 className={CName}>
            저에게 관심이 있으시거나 궁금한 점이 있다면
            <br className="hidden lg:block" />
            <span className="lg:hidden">, </span>
            언제든 메일을 보내주세요!
          </h2>
          <Mail />
        </div>
      </section>
    </>
  )
}

export default Home
