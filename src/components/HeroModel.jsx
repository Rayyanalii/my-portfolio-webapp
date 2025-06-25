import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls, useGLTF } from '@react-three/drei'
import { LuLoaderCircle } from 'react-icons/lu'

const Model = () => {
    const { scene } = useGLTF('/model/gaming_setup_low-poly.glb')
    return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />
}

const HeroModel = () => {
    return (
        <Canvas camera={{ position: [2, 1.5, 2], fov: 60 }} style={{ height: 350, cursor: "grab" }}>
            <ambientLight intensity={1.2} />
            <directionalLight position={[2, 2, 2]} />
            <Suspense fallback={<Html><LuLoaderCircle className='animate-spin' /></Html>}>
                <Model />
            </Suspense>
            <OrbitControls enableZoom={true} target={[0, 0, 0]} />
        </Canvas>
    )
}

export default HeroModel
