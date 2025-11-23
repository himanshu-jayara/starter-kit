import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface OrbitalVortexProps {
  children?: any;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  baseHue?: number;
  // New: Controls the strength of the pull towards the center
  centerPull?: number;
  // New: Controls the angular (whirlpool) speed
  angularSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  isDarkMode?: boolean;
}

export const OrbitalVortex = (props: OrbitalVortexProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef(null);
  const animationFrameId = useRef<number>(0);

  const particleCount = props.particleCount || 700;
  // x, y, vx, vy, life, ttl, speed, radius, hue, angle (New: angle for orbital motion)
  const particlePropCount = 10;
  const particlePropsLength = particleCount * particlePropCount;

  const baseTTL = 100;
  const rangeTTL = 200;

  // Orbital Vortex Parameters
  const centerPull = props.centerPull || 0.005; // How strongly particles are pulled to center
  const angularSpeed = props.angularSpeed || 0.05; // Base angular velocity for rotation
  const baseRadius = props.baseRadius || 1;
  const rangeRadius = props.rangeRadius || 2;

  // Base Hue: Cooler colors (blues/purples) for Dark Mode, Warmer colors (reds/yellows) for Light Mode
  const baseHue = props.baseHue || (props.isDarkMode ? 220 : 30);
  const rangeHue = 100;

  // Background color based on mode
  const backgroundColor = props.isDarkMode ? "#000000" : "#ffffff";

  let tick = 0;
  // No more need for simplex-noise
  let particleProps = new Float32Array(particlePropsLength);
  let center: [number, number] = [0, 0];

  const TAU: number = 2 * Math.PI;
  const rand = (n: number): number => n * Math.random();
  const fadeInOut = (t: number, m: number): number => {
    let hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  };
  const lerp = (n1: number, n2: number, speed: number): number =>
    (1 - speed) * n1 + speed * n2;

  const setup = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (canvas && container) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        resize(canvas);
        initParticles();
        draw(canvas, ctx);
      }
    }
  };

  const initParticles = () => {
    tick = 0;
    particleProps = new Float32Array(particlePropsLength);

    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  };

  const initParticle = (i: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // x, y, vx, vy, life, ttl, speed, radius, hue, angle
    let x, y, vx, vy, life, ttl, speed, radius, hue, angle;

    // Position particles randomly within a wide radius around the center
    const radiusStart = Math.random() * (canvas.width / 2); 
    angle = rand(TAU);
    x = center[0] + radiusStart * Math.cos(angle);
    y = center[1] + radiusStart * Math.sin(angle);

    vx = 0;
    vy = 0;
    life = 0;
    ttl = baseTTL + rand(rangeTTL);
    speed = 0.5 + rand(1.5); // Small, constant speed is fine
    radius = baseRadius + rand(rangeRadius);
    hue = baseHue + rand(rangeHue);

    particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue, angle], i);
  };

  const draw = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    tick++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Fill background based on isDarkMode prop
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawParticles(ctx);
    renderGlow(canvas, ctx);

    animationFrameId.current = window.requestAnimationFrame(() =>
      draw(canvas, ctx),
    );
  };

  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i, ctx);
    }
  };

  const updateParticle = (i: number, ctx: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let i2 = 1 + i,
      i3 = 2 + i,
      i4 = 3 + i,
      i5 = 4 + i,
      i6 = 5 + i,
      i7 = 6 + i,
      i8 = 7 + i,
      i9 = 8 + i,
      i10 = 9 + i; // Angle index

    let x, y, vx, vy, life, ttl, speed, x2, y2, radius, hue, angle, dx, dy, dist;

    x = particleProps[i];
    y = particleProps[i2];
    life = particleProps[i5];
    ttl = particleProps[i6];
    speed = particleProps[i7];
    radius = particleProps[i8];
    hue = particleProps[i9];
    angle = particleProps[i10];

    // --- ORBITAL VORTEX LOGIC ---
    dx = center[0] - x;
    dy = center[1] - y;
    dist = Math.sqrt(dx * dx + dy * dy);

    // Calculate current angle to center
    angle = Math.atan2(dy, dx);

    // 1. Force towards center (decaying with distance)
    const pullForce = dist * centerPull;
    const centerVx = Math.cos(angle) * pullForce;
    const centerVy = Math.sin(angle) * pullForce;

    // 2. Tangential/Angular velocity (perpendicular to center vector)
    // Add 90 degrees (HALF_PI) to the angle to get the tangent direction
    const tangentialVx = Math.cos(angle + Math.PI / 2) * angularSpeed;
    const tangentialVy = Math.sin(angle + Math.PI / 2) * angularSpeed;

    // Combine forces
    vx = lerp(particleProps[i3], centerVx + tangentialVx, 0.5);
    vy = lerp(particleProps[i4], centerVy + tangentialVy, 0.5);

    x2 = x + vx * speed;
    y2 = y + vy * speed;

    drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx);

    life++;

    particleProps[i] = x2;
    particleProps[i2] = y2;
    particleProps[i3] = vx;
    particleProps[i4] = vy;
    particleProps[i5] = life;
    particleProps[i10] = angle; // Update the angle for next frame (less critical here, but good practice)

    // Re-initialize particles that reach the center (dist < 5) or reach the end of life
    (dist < 5 || life > ttl) && initParticle(i);
  };

  const drawParticle = (
    x: number,
    y: number,
    x2: number,
    y2: number,
    life: number,
    ttl: number,
    radius: number,
    hue: number,
    ctx: CanvasRenderingContext2D,
  ) => {
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineWidth = radius;

    const lightness = props.isDarkMode ? "60%" : "35%";

    ctx.strokeStyle = `hsla(${hue},100%,${lightness},${fadeInOut(life, ttl)})`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  };

  const resize = (canvas: HTMLCanvasElement) => {
    const { innerWidth, innerHeight } = window;

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    center[0] = 0.5 * canvas.width;
    center[1] = 0.5 * canvas.height;
  };

  const renderGlow = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
  ) => {
    ctx.save();
    ctx.filter = "blur(8px) brightness(200%)";
    ctx.globalCompositeOperation = props.isDarkMode ? "lighter" : "multiply";

    ctx.drawImage(canvas, 0, 0);
    ctx.restore();

    ctx.save();
    ctx.filter = "blur(4px) brightness(200%)";
    ctx.globalCompositeOperation = props.isDarkMode ? "lighter" : "multiply";

    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  const handleResize = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      resize(canvas);
    }
  };

  useEffect(() => {
    setup();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [props.isDarkMode]);

  return (
    <div className={cn("relative h-full w-full", props.containerClassName)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className="absolute inset-0 z-0 flex h-full w-full items-center justify-center bg-transparent"
      >
        <canvas ref={canvasRef}></canvas>
      </motion.div>

      <div className={cn("relative z-10", props.className)}>
        {props.children}
      </div>
    </div>
  );
};