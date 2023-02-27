import { useRouter } from 'next/router'
import { accessRoutes } from '../Voxel'

const Spinner = () => {
  const { route } = useRouter()

  return (
    <div className={`${!accessRoutes.includes(route) ? 'transparent' : ''} LoadBackground`}>
      <div className="LoadWrap">
        <span className="dot bg-primary" />
        <span className="dot bg-primary" />
        <span className="dot bg-primary" />
      </div>
    </div>
  )
}
export default Spinner
