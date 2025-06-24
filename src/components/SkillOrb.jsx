import { Decal, Float, Html, OrbitControls, useTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

const SkillIcosahedron = ({ imageURL, imageSize }) => {
    const texture = useTexture(imageURL, undefined, { preload: false });

    return (
        <Float speed={3} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh>
                <icosahedronGeometry args={[1.3, 1]} />
                <meshStandardMaterial color="#27272a" />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[0, 0, 0]}
                    scale={imageSize}
                    map={texture}
                    flatShading
                />
            </mesh>

            <mesh scale={1}>
                <icosahedronGeometry args={[1.3, 1]} />
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

const SkillOrb = ({ imageURL, label, imageSize }) => {
    return (
        <div className="w-[150px] h-[150px] group relative">
            <Canvas
                dpr={[1, 1.5]}
                shadows={false}
                camera={{ position: [0, 0, 3] }}
                style={{ width: '150px', height: '150px', cursor: "pointer" }}
                gl={{ alpha: true }}
            >
                <ambientLight intensity={5} />
                <directionalLight position={[2, 2, 2]} />
                <Suspense fallback={
                    <Html center>
                        <div className="text-white text-sm bg-zinc-900 px-3 py-1 rounded shadow">
                            Loading...
                        </div>
                    </Html>
                }>
                    <SkillIcosahedron imageURL={imageURL} imageSize={imageSize} />
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>

            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 transition-all duration-150 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                <div className="relative inline-block bg-zinc-800 text-white px-4 py-2 rounded-lg shadow ring-1 ring-zinc-50/5 text-sm">
                    {label}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-zinc-800" />
                </div>
            </div>
        </div>


    )
}

export default React.memo(SkillOrb)

