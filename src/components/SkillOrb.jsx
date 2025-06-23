import { Decal, Float, OrbitControls, useTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'

const SkillIcosahedron = ({ imageURL }) => {
    const texture = useTexture(imageURL)

    return (
        <Float speed={8} rotationIntensity={1} floatIntensity={1}>
            <mesh>
                <icosahedronGeometry args={[1.2, 1]} />
                <meshStandardMaterial color="#27272a" />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[0, 0, 0]}
                    scale={1.2}
                    map={texture}
                    flatShading
                />
            </mesh>

            <mesh scale={1}>
                <icosahedronGeometry args={[1.2, 1]} />
                <meshBasicMaterial
                    color={"#fafafa"}
                    wireframe
                    transparent
                    opacity={0.05}

                />
            </mesh>
        </Float>

    )
}

const SkillOrb = ({ imageURL, label }) => {
    const [showPopup, setShowPopup] = useState(false)
    return (
        <div className='w-[150px] h-[150px] mb-20'>
            <Canvas
                camera={{ position: [0, 0, 3] }}
                style={{ width: '150px', height: '150px', cursor: "pointer" }}
                gl={{ alpha: true }}
                onMouseEnter={() => { setShowPopup(true) }}
                onMouseLeave={() => { setShowPopup(false) }}
            >
                <ambientLight intensity={5} />
                <directionalLight position={[2, 2, 2]} />
                <Suspense fallback={null}>
                    <SkillIcosahedron imageURL={imageURL} />
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
            <div className="relative w-full text-center">
                <div className={`relative inline-block bg-zinc-800 text-white px-4 py-2 rounded-lg shadow transition-all duration-75
    ${showPopup ? "visible opacity-100" : "invisible opacity-0"}`}>
                    {label}

                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-zinc-800" />
                </div>
            </div>

        </div>

    )
}

export default SkillOrb
