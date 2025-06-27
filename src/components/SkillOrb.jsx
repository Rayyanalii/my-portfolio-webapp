import { Decal, Float, Html, OrbitControls, Preload, useTexture } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React, { Suspense, useRef, useState } from 'react'
import * as THREE from 'three';
import Tooltip from './Tooltip';
import { LuLoaderCircle } from 'react-icons/lu';
import ErrorBoundary from './ErrorBoundary';

const SkillIcosahedron = ({ imageURL, imageSize, animationOn }) => {
    const texture = useTexture(imageURL);

    return (
        <Float speed={animationOn ? 2 : 0} rotationIntensity={animationOn ? 1 : 0} floatIntensity={animationOn ? 2 : 0}>
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
    );
};

const ResetControls = ({ controlsRef, animationOn }) => {
    const defaultPosition = new THREE.Vector3(0, 0, 3);
    const { camera } = useThree();

    const [shouldReset, setShouldReset] = useState(false);
    useFrame(() => {
        if (!shouldReset || !controlsRef.current || !animationOn) return;

        camera.position.lerp(defaultPosition, 0.1);
        controlsRef.current.target.lerp(new THREE.Vector3(0, 0, 0), 0.1);
        controlsRef.current.update();

        const distance = camera.position.distanceTo(defaultPosition);
        if (distance < 0.01) {
            setShouldReset(false);
        }
    });

    return (
        <OrbitControls
            ref={controlsRef}
            enableZoom={false}
            enablePan={false}
            onEnd={() => {
                setTimeout(() => {

                    setShouldReset(true);
                }, 2000)
            }}
        />
    );
};

const SkillOrb = ({ imageURL, label, imageSize, animationOn }) => {
    const controlsRef = useRef();

    const fallbackDiv = (
        <div className="w-[150px] h-[150px] flex flex-col items-center justify-center bg-zinc-800 rounded-md">
            <img src={imageURL} alt={label} className="w-12 h-12 object-contain mb-1" />
            <span className="text-zinc-200 text-xs">{label}</span>
        </div>
    );

    return (
        <div className="group relative mb-5 overflow-visible">
            <ErrorBoundary fallback={fallbackDiv}>

                <Canvas

                    frameloop={animationOn ? "always" : "demand"}
                    shadows={false}
                    camera={{ position: [0, 0, 3] }}
                    style={{ width: '150px', height: '150px', cursor: "pointer" }}
                    gl={{ preserveDrawingBuffer: true }}
                >
                    <ambientLight intensity={4} />
                    <directionalLight position={[2, 2, 2]} />
                    <Suspense fallback={
                        <Html><LuLoaderCircle className='animate-spin' /></Html>
                    }>
                        <SkillIcosahedron imageURL={imageURL} imageSize={imageSize} animationOn={animationOn} />
                    </Suspense>

                    <ResetControls controlsRef={controlsRef} animationOn={animationOn} />
                    <Preload all />
                </Canvas>
            </ErrorBoundary>

            <Tooltip label={label} classes={"-bottom-4"} />
        </div>
    );
};

export default React.memo(SkillOrb);
