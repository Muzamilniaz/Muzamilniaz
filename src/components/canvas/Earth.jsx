import { Component, Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bounds, Center, useGLTF } from "@react-three/drei";
import { useReducedMotionPreference } from "../../hooks/useReducedMotionPreference";
import CanvasLoader from "../Loader";

const planetUrl = `${import.meta.env.BASE_URL}planet/scene.gltf`;
const StaticEarth = () => <div className='earth-static' role='img' aria-label='Earth globe'><i /><i /></div>;
class EarthBoundary extends Component {
  state = { unavailable: false };
  static getDerivedStateFromError() { return { unavailable: true }; }
  render() { return this.state.unavailable ? <StaticEarth /> : this.props.children; }
}
const EarthModel = ({ rotating }) => {
  const earth = useGLTF(planetUrl);
  const group = useRef(null);
  useFrame((_, delta) => { if (rotating && group.current) group.current.rotation.y += Math.min(delta, 0.05) * 0.13; });
  return <group ref={group}><Center><primitive object={earth.scene} /></Center></group>;
};
const EarthCanvas = ({ visible = true }) => {
  const reduced = useReducedMotionPreference();
  const [supported, setSupported] = useState(null);
  useEffect(() => {
    const probe = document.createElement('canvas');
    try { const context = probe.getContext('webgl2') || probe.getContext('webgl');setSupported(!!context);context?.getExtension('WEBGL_lose_context')?.loseContext(); }
    catch { setSupported(false); }
  }, []);
  if (!supported) return <StaticEarth />;
  return <EarthBoundary><Canvas frameloop={visible && !reduced ? 'always' : 'demand'} dpr={[1,1.5]} camera={{ position: [0,1,7], fov: 42 }} gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }} style={{pointerEvents:'none'}} aria-label='Rotating Earth globe'><ambientLight intensity={1.4} /><directionalLight position={[4,5,5]} intensity={2} /><Suspense fallback={<CanvasLoader />}><Bounds fit clip observe margin={1}><EarthModel rotating={visible && !reduced} /></Bounds></Suspense></Canvas></EarthBoundary>;
};
export default EarthCanvas;
