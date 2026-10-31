import { Component, Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bounds, Center, OrbitControls, useGLTF } from "@react-three/drei";
import { useReducedMotionPreference } from "../../hooks/useReducedMotionPreference";
import CanvasLoader from "../Loader";

const computerModelUrl = `${import.meta.env.BASE_URL}desktop_pc/scene.gltf`;

const StaticComputer = () => <div className='workstation-static' role='img' aria-label='Developer desktop workstation'><div className='workstation-static-screen'><span>&lt;/&gt;</span><i /><i /><i /></div><div className='workstation-static-stand' /><div className='workstation-static-keyboard' /></div>;

class ComputerBoundary extends Component {
  state = { unavailable: false };
  static getDerivedStateFromError() { return { unavailable: true }; }
  render() { return this.state.unavailable ? <StaticComputer /> : this.props.children; }
}

const ComputerModel = ({ rotating }) => {
  const computer = useGLTF(computerModelUrl);
  const group = useRef(null);
  useFrame((_, delta) => {
    if (rotating && group.current) group.current.rotation.y += Math.min(delta, 0.05) * 0.22;
  });
  return <group ref={group}><Center><primitive object={computer.scene} rotation={[-0.01, -0.2, -0.1]} /></Center></group>;
};

const ComputersCanvas = ({ visible = true }) => {
  const reduced = useReducedMotionPreference();
  const [supported, setSupported] = useState(null);
  const [finePointer, setFinePointer] = useState(false);
  useEffect(() => {
    const probe = document.createElement("canvas");
    try {
      const context = probe.getContext("webgl2") || probe.getContext("webgl");
      setSupported(!!context);
      context?.getExtension("WEBGL_lose_context")?.loseContext();
    } catch { setSupported(false); }
    const pointer = window.matchMedia("(pointer: fine)");
    const updatePointer = () => setFinePointer(pointer.matches);
    updatePointer();
    pointer.addEventListener("change", updatePointer);
    return () => pointer.removeEventListener("change", updatePointer);
  }, []);
  if (!supported) return <StaticComputer />;
  return (
    <ComputerBoundary>
      <Canvas frameloop={visible && !reduced ? 'always' : 'demand'} dpr={[1, 1.5]} camera={{ position: [14, 9, 14], fov: 40 }} gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }} style={{ touchAction: 'pan-y' }} aria-label='Rotating 3D developer workstation'>
        <hemisphereLight intensity={1.2} groundColor='#251039' />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 15, 10]} intensity={1.6} />
        <pointLight position={[-10, 8, -10]} intensity={1} color='#b59aff' />
        <Suspense fallback={<CanvasLoader />}>
          <Bounds fit clip observe margin={1.06}><ComputerModel rotating={visible && !reduced} /></Bounds>
        </Suspense>
        {finePointer && <OrbitControls makeDefault enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2.1} />}
      </Canvas>
    </ComputerBoundary>
  );
};

export default ComputersCanvas;
