import Image from 'next/image'

const TopBanner = () => {
  return (
    <section className="h-[300px] flex gap-[48px] py-[48px]">
      <Image src="/images/cover.png" alt="123" width="200" height="200" className="rounded-[32px] shadow-[0px 4px 4px 0px rgba(0, 0, 0, 0.25)]" />
      <div className="">123</div>
    </section>
  )
}
export default TopBanner
