import { Decal, Float, Html, OrbitControls, useTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Tooltip from './Tooltip';

const SkillIcosahedron = ({ imageURL, imageSize, animationOn }) => {
    const texture = useTexture(imageURL, undefined, { preload: false });

    return (
        <Float speed={animationOn ? 3 : 0} rotationIntensity={animationOn ? 0.5 : 0} floatIntensity={animationOn ? 0.5 : 0}>
            <mesh>
                <icosahedronGeometry args={[1.3, 2]} />
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
                <icosahedronGeometry args={[1.3, 2]} />
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

const SkillOrb = ({ imageURL, label, imageSize, animationOn }) => {
    return (
        <div className="group relative mb-5 overflow-visible">
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
                    <SkillIcosahedron imageURL={imageURL} imageSize={imageSize} animationOn={animationOn} />
                </Suspense>
                {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
            </Canvas>

            <Tooltip label={label} classes={"-bottom-4"} />
        </div>


    )
}

export default React.memo(SkillOrb)

