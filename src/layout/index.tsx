import { useState, type ReactNode } from 'react'
import Header from './Header'
import Voxel from '@/components/views/Voxel'
import Main from './Main'
import Footer from './Footer'
import TopButton from '@/components/views/TopButton'
import { useAppSelector } from '@/redux/hook'
import SearchLoader from '@/components/views/SearchLoader'

const Layout = ({ children }: { children: ReactNode }) => {
  const { search } = useAppSelector((state) => state.search)
  const [voxelLoad, setVoxelLoad] = useState(false)

  const onLoadVoxel = () => {
    setVoxelLoad(true)
  }

  return (
    <>
      {search && <SearchLoader />}
      <div className="relative max-w-screen-lg mx-auto  px-lg md:px-xlg pt-header">
        <Header />
        <Voxel load={voxelLoad} onLoad={onLoadVoxel} />
        <Main>{children}</Main>
        <Footer />
        <TopButton />
      </div>
    </>
  )
}

export default Layout
