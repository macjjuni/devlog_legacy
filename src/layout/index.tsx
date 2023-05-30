import { useState, type ReactNode } from 'react'
import Header from './Header'
import Voxel from '@/components/views/Voxel'
import Main from './Main'
import Footer from './Footer'
import TopButton from '@/components/views/TopButton'

const Layout = ({ children }: { children: ReactNode }) => {
  const [voxelLoad, setVoxelLoad] = useState(false)

  const onLoadVoxel = () => {
    setVoxelLoad(true)
  }

  return (
    <div className="relative max-w-screen-lg mx-auto  px-lg md:px-xlg pt-header">
      <Header />
      <Voxel load={voxelLoad} onLoad={onLoadVoxel} />
      <Main>{children}</Main>
      <Footer />
      <TopButton />
    </div>
  )
}

export default Layout
