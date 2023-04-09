import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useGLTF } from "@react-three/drei";
import NavBar from '../NavBar';

const mouse = new THREE.Vector2();
const prevMouse = new THREE.Vector2();

function clampAngle(angle, min, max) {
    return Math.max(min, Math.min(max, angle));
}


const Pokemon = () => {
    const pokemon = useGLTF('./pokemon_center_scene/scene.gltf')
    const cubeRef = useRef();
    const rotationSpeed = 0.001;
    const minRotation = -Math.PI / 12;
    const maxRotation = Math.PI / 12;

    useFrame(() => {
        if (!mouse.isInsideContainer) return;

        const rotationDirection = (mouse.x > prevMouse.x) ? 1 : -1;
        const newRotationY = cubeRef.current.rotation.y + (rotationSpeed * rotationDirection);
        cubeRef.current.rotation.y = clampAngle(newRotationY, minRotation, maxRotation);
    });

    return (
        <mesh ref={cubeRef}>
            <hemisphereLight intensity={0.75}
                groundColor="black" />
            <pointLight intensity={20} />
            <primitive
                object={pokemon.scene}
            />
        </mesh>
    );
}

const PokemonCanvas = () => {
    const containerRef = useRef();


    const setCubeRotation = (angle) => {
        cubeRef.current.rotation.y = angle;
    };

    useEffect(() => {
        const container = containerRef.current;

        const onMouseMove = (event) => {
            event.preventDefault();
            prevMouse.copy(mouse);
            mouse.x = ((event.clientX / container.clientWidth) * 2) - 1;
            mouse.y = -((event.clientY / container.clientHeight) * 2) + 1;
        };

        const onMouseEnter = () => {
            mouse.isInsideContainer = true;
        };

        const onMouseLeave = () => {
            mouse.isInsideContainer = false;
        };

        container.addEventListener('mousemove', onMouseMove);
        container.addEventListener('mouseenter', onMouseEnter);
        container.addEventListener('mouseleave', onMouseLeave);

        return () => {
            container.removeEventListener('mousemove', onMouseMove);
            container.removeEventListener('mouseenter', onMouseEnter);
            container.removeEventListener('mouseleave', onMouseLeave);
        };
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>


            <Canvas
                camera={{ position: [0, 10, 12], fov: 20 }}
                gl={{ preserveDrawingBuffer: true }}
            >
                <Pokemon />
            </Canvas >
            <NavBar ref={containerRef} />
        </div>

    );
}

export default PokemonCanvas