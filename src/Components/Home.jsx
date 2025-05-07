import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame} from '@react-three/fiber';
import { OrbitControls, Text, PerspectiveCamera } from '@react-three/drei';
import { AnimatePresence,motion} from 'framer-motion';
import * as THREE from 'three';
import About from './About';
import Navbar from './Navbar';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import EducationSection from './EducationSection';
import HomeSection from './HomeSection';
import Contact from './Contact';
import Footer from './Footer';
import { ArrowUp } from 'lucide-react';

function AnimatedSphere() {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.5; 
    meshRef.current.rotation.x = Math.sin(time / 4);
    meshRef.current.rotation.y = Math.sin(time / 2);
  });
  
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 24, 24]} />
      <meshStandardMaterial
        color="#4f8fef"
        wireframe={true}
        transparent={true}
        opacity={0.7}
      />
    </mesh>
  );
}

function FloatingParticles({ count = 150 }) {
  const particlesRef = useRef();
  const circleTexture = useMemo(() => {

    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext('2d');
    
 
    context.fillStyle = 'white';
    context.beginPath();
    context.arc(32, 32, 30, 0, Math.PI * 2);
    context.fill();
    
    
    const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.8, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
    context.fillStyle = gradient;
    context.beginPath();
    context.arc(32, 32, 32, 0, Math.PI * 2);
    context.fill();
    
    return new THREE.CanvasTexture(canvas);
  }, []);
  
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 5;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 4 * (0.8 + Math.random() * 0.4);
      
      temp.push({
        position: new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        ),
        speed: Math.random() * 0.001 + 0.001,
        initialX: radius * Math.sin(phi) * Math.cos(theta),
        initialZ: radius * Math.cos(phi)
      });
    }
    return temp;
  }, [count]);
  
 
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = particles[i].position.x;
      positions[i * 3 + 1] = particles[i].position.y;
      positions[i * 3 + 2] = particles[i].position.z;
      

      colors[i * 3] = 0.7 + Math.random() * 0.3; // r
      colors[i * 3 + 1] = 0.7 + Math.random() * 0.3; // g
      colors[i * 3 + 2] = 0.9 + Math.random() * 0.1; // b t
    }
    
    return [positions, colors];
  }, [count, particles]);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.8; 
    
    for (let i = 0; i < count; i++) {
      const p = particles[i];
      const theta = time * p.speed;
      
     
      p.position.x = p.initialX * Math.cos(theta) - p.initialZ * Math.sin(theta);
      p.position.z = p.initialZ * Math.cos(theta) + p.initialX * Math.sin(theta);
      
   
      p.position.y += Math.sin(time * 0.5 + i) * 0.0008;
      
     
      particlesRef.current.geometry.attributes.position.array[i * 3] = p.position.x;
      particlesRef.current.geometry.attributes.position.array[i * 3 + 1] = p.position.y;
      particlesRef.current.geometry.attributes.position.array[i * 3 + 2] = p.position.z;
    }
    
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.2}
        vertexColors
        transparent
        opacity={0.5}
        sizeAttenuation
        map={circleTexture}
        alphaTest={0.01}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-slate-900 z-0">
      <Canvas>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 10]} intensity={0.4} />
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <AnimatedSphere />
        <FloatingParticles count={150} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={1}
          rotateSpeed={0.2}
        />
      </Canvas>
    </div>
  );
}

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-50 transition-colors duration-300"
          onClick={scrollToTop}
        >
         <ArrowUp/>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function Home() {
  const [currentSection, setCurrentSection] = useState("home");
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });
      
      if (current !== currentSection && current) {
        setCurrentSection(current);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection]);
  
  return (
    <div className="relative font-sans bg-slate-900 text-white w-full ">
      <Background />
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <div className="overflow-hidden relative z-10">
        <HomeSection />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <EducationSection />
        <Contact />
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default Home;