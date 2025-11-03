'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, useTexture, Html, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// 3D Face with your photo
const PhotoFace = ({ mousePosition }: { mousePosition: { x: number; y: number } }) => {
  const faceRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const texture = useTexture('/images/rishi.jpg');

  useFrame((state) => {
    if (faceRef.current && mousePosition) {
      // Smoother rotation based on mouse position
      const targetRotationY = (mousePosition.x / window.innerWidth - 0.5) * 0.5;
      const targetRotationX = -(mousePosition.y / window.innerHeight - 0.5) * 0.3;

      faceRef.current.rotation.y = THREE.MathUtils.lerp(
        faceRef.current.rotation.y,
        targetRotationY,
        0.1
      );
      faceRef.current.rotation.x = THREE.MathUtils.lerp(
        faceRef.current.rotation.x,
        targetRotationX,
        0.1
      );

      // Subtle floating animation
      faceRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={faceRef}>
      {/* Main Face with Photo Texture */}
      <Sphere args={[1.5, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          map={texture}
          distort={0.3}
          speed={2}
          roughness={0.4}
          metalness={0.1}
        />
      </Sphere>

      {/* Glow Effect */}
      <Sphere args={[1.6, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#00ffff"
          transparent
          opacity={0.1}
          wireframe
        />
      </Sphere>

      {/* Rim Light Effect */}
      <Sphere args={[1.7, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#ff00ff"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
};

// Floating Particles
const FloatingParticle = ({ position, color, delay }: { position: [number, number, number]; color: string; delay: number }) => {
  const particleRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (particleRef.current) {
      particleRef.current.position.y += Math.sin(state.clock.elapsedTime * 1.5 + delay) * 0.01;
      particleRef.current.rotation.x += 0.01;
      particleRef.current.rotation.z += 0.005;
    }
  });

  return (
    <Sphere ref={particleRef} args={[0.08, 16, 16]} position={position}>
      <meshPhongMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </Sphere>
  );
};

// Orbiting Ring
const OrbitingRing = ({ radius, speed, color }: { radius: number; speed: number; color: string }) => {
  const ringRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * speed;
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={ringRef}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.02, 16, 100]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} />
      </mesh>
      {/* Orbiting particle */}
      <Sphere args={[0.06, 16, 16]} position={[radius, 0, 0]}>
        <meshPhongMaterial color={color} emissive={color} emissiveIntensity={0.8} />
      </Sphere>
    </group>
  );
};

const Photo3DFace = () => {
  const [mousePosition, setMousePosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        setMousePosition({
          x: event.touches[0].clientX,
          y: event.touches[0].clientY,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} color="#00ffff" intensity={0.5} />
        <pointLight position={[0, 0, 10]} color="#ff00ff" intensity={0.3} />
        <spotLight
          position={[5, 5, 5]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          color="#00ffff"
        />

        {/* Main Photo Face */}
        <PhotoFace mousePosition={mousePosition} />

        {/* Floating Particles */}
        <FloatingParticle position={[-2.5, 1.5, 0]} color="#00ffff" delay={0} />
        <FloatingParticle position={[2.5, 1, -1]} color="#ff00ff" delay={1} />
        <FloatingParticle position={[-2, -1.5, 0.5]} color="#ffbf00" delay={2} />
        <FloatingParticle position={[2, -1, -1.5]} color="#00ff80" delay={3} />
        <FloatingParticle position={[0, 2.5, -0.5]} color="#8a2be2" delay={4} />
        <FloatingParticle position={[-1.5, -2, 1]} color="#ff4500" delay={5} />

        {/* Orbiting Rings */}
        <OrbitingRing radius={2.2} speed={0.3} color="#00ffff" />
        <OrbitingRing radius={2.5} speed={-0.2} color="#ff00ff" />
        <OrbitingRing radius={2.8} speed={0.25} color="#ffbf00" />

        {/* Data Particles - scattered around */}
        {Array.from({ length: 30 }).map((_, i) => {
          const phi = Math.acos(-1 + (2 * i) / 30);
          const theta = Math.sqrt(30 * Math.PI) * phi;
          const x = Math.cos(theta) * Math.sin(phi) * 3.5;
          const y = Math.sin(theta) * Math.sin(phi) * 3.5;
          const z = Math.cos(phi) * 3.5;
          const colors = ['#00ffff', '#ff00ff', '#ffbf00', '#00ff80'];
          const color = colors[i % colors.length];

          return (
            <Sphere key={i} args={[0.02, 8, 8]} position={[x, y, z]}>
              <meshBasicMaterial color={color} transparent opacity={0.6} />
            </Sphere>
          );
        })}
      </Canvas>

      {/* Overlaying HTML elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating code streams */}
        <div className="absolute top-1/4 left-1/4 text-cyber-cyan font-mono text-xs opacity-60 animate-data-flow">
          {'{ "dev": "Rishi Chowdary", "role": "AI Engineer" }'}
        </div>
        <div className="absolute top-3/4 right-1/4 text-neon-pink font-mono text-xs opacity-60 animate-data-flow" style={{ animationDelay: '2s' }}>
          {'portfolio.render()'}
        </div>
        <div className="absolute top-1/2 left-1/3 text-cyber-amber font-mono text-xs opacity-60 animate-data-flow" style={{ animationDelay: '4s' }}>
          {'AI.innovate()'}
        </div>
      </div>
    </div>
  );
};

export default Photo3DFace;

