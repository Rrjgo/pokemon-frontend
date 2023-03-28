import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader';

const Pokemon = () => {
    const pokemon = useGLTF('./pokemon_center_scene/scene.gltf')

    return (
        <mesh>
            <hemisphereLight intensity={0.75}
                groundColor="black" />
            <pointLight intensity={20} />
            <primitive
                object={pokemon.scene}

            />
        </mesh>
    )
}

const PokemonCanvas = () => {
    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [0, 10, 10], fov: 20 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    minPolarAngle={Math.PI / 2 - Math.PI / 6}
                    maxPolarAngle={Math.PI / 2 - Math.PI / 12}
                    maxAzimuthAngle={Math.PI / 12}
                    minAzimuthAngle={- Math.PI / 12}
                />
                <Pokemon />
            </Suspense>

            <Preload all />
        </Canvas>

    )
}

export default PokemonCanvas