import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const computerModelUrl = `${import.meta.env.BASE_URL}desktop_pc/scene.gltf`;

const Computers = ({ isMobile }) => {
  const computer = useGLTF(computerModelUrl);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.85}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      if (!gl) {
        setIsSupported(false);
        console.warn('WebGL not supported');
      }
    } catch (e) {
      setIsSupported(false);
      console.warn('WebGL check failed:', e);
    }

    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  if (!isSupported) {
    return (
      <div className='w-full h-full bg-gradient-to-b from-gray-900 to-black' />
    );
  }

  return (
    <Canvas
      frameloop='demand'
      shadows={!isMobile}
      dpr={isMobile ? 1 : [1, 2]}
      camera={{ position: isMobile ? [0, 0, 20] : [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, antialias: !isMobile, powerPreference: 'high-performance' }}
      className='h-full w-full'
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={!isMobile}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate={!isMobile}
          autoRotateSpeed={2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

useGLTF.preload(computerModelUrl);
