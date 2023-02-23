import { useEffect, useState, useRef, memo, useCallback } from 'react'
import { PerspectiveCamera, PresentationControls, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useRouter } from 'next/router'
import Spinner from '../Spinner'
import Model from './components/Model'

// 트래픽을 줄이겠다는 강한 의지!
const voxelURL = 'https://tistory4.daumcdn.net/tistory/3617178/skin/images/juni-coding-voxel.gltf'

// 해당 페이지 경로에서만 모델 보이기
const accessRoutes = ['/']

interface IVoxel {
  load: boolean
  onLoad: () => void
}

const Voxel = ({ load, onLoad }: IVoxel) => {
  const { route } = useRouter()
  const [isTransparent, setTransparent] = useState<boolean>(false)
  const { progress } = useProgress()
  const [rotate, setRotate] = useState(3.15)
  const intervalId: { current: NodeJS.Timeout | null } = useRef(null)

  // Voxel 회전
  const spinRotate = () => {
    if (intervalId.current === null && accessRoutes.includes(route)) {
      intervalId.current = setInterval(() => {
        setRotate((prev: number) => prev + 0.03)
      }, 100)
    }
  }
  // Voxel 회전 중지
  const stopSpin = useCallback(() => {
    clearInterval(intervalId.current || 0)
    intervalId.current = null
  }, [])

  // Window Event Hanlder
  const browserEventHandler = useCallback((e: globalThis.FocusEvent) => {
    if (e.type === 'blur') {
      stopSpin()
      return
    }
    spinRotate()
  }, [])

  // 브라우저 focus/blur 이벤트 효과 적용
  useEffect(() => {
    window.addEventListener('blur', browserEventHandler)
    window.addEventListener('focus', browserEventHandler)
    return () => {
      window.removeEventListener('blur', browserEventHandler)
      window.removeEventListener('focus', browserEventHandler)
    }
  }, [])

  useEffect(() => {
    if (accessRoutes.includes(route)) {
      spinRotate()
      setTransparent(false)
      return
    }
    stopSpin()
    setTransparent(true)
  }, [route])

  // progress 100% 일 경우 스피너 제거 및 자동회전
  useEffect(() => {
    if (progress === 100) {
      onLoad()
      const isFocus = document.hasFocus()
      if (isFocus) spinRotate()
    }
  }, [progress])

  return (
    <div className={`${isTransparent ? 'z-[-1]' : ''} absolute top-0 left-0 h-main`}>
      <div className="sticky w-voxelPC h-voxelPC top-voxelTop left-0">
        {!load && <Spinner />}
        <Canvas className={`${load ? 'opacity-100	' : ''} ${isTransparent ? 'transparent' : ''} ease duration-300`}>
          <PerspectiveCamera position={[0, -2.6, 0]} far={1000}>
            <directionalLight intensity={0.2} />
            <ambientLight intensity={0.3} />
            <spotLight intensity={0.5} angle={2} penumbra={1} position={[10, 15, 10]} castShadow />
            <PresentationControls
              global
              speed={1}
              config={{ mass: 2, tension: 500, friction: 30 }}
              snap={{ mass: 4, tension: 1500 }}
              rotation={[0.3, rotate, 0]}
              polar={[-Math.PI / 3, Math.PI / 3]}
              azimuth={[-Math.PI / 1.4, Math.PI / 2]}
            >
              <Model url={voxelURL} />
            </PresentationControls>
          </PerspectiveCamera>
        </Canvas>
      </div>
    </div>
  )
}

export default memo(Voxel)
