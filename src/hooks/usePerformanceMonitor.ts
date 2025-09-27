import { useEffect } from 'react';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    let animationFrame: number;
    let lastTime = performance.now();
    let frameCount = 0;
    let fps = 60;

    const measureFPS = (currentTime: number) => {
      frameCount++;
      
      if (currentTime >= lastTime + 1000) {
        fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        frameCount = 0;
        lastTime = currentTime;
        
        // Se FPS estiver muito baixo, pausar animações desnecessárias
        if (fps < 30) {
          document.documentElement.style.setProperty('--performance-mode', 'low');
          // Pausar animações em elementos específicos
          const animatedElements = document.querySelectorAll('[class*="animate-"]');
          animatedElements.forEach(el => {
            (el as HTMLElement).style.animationPlayState = 'paused';
          });
        } else if (fps > 45) {
          document.documentElement.style.setProperty('--performance-mode', 'normal');
          // Reativar animações se performance melhorar
          const animatedElements = document.querySelectorAll('[class*="animate-"]');
          animatedElements.forEach(el => {
            (el as HTMLElement).style.animationPlayState = 'running';
          });
        }
      }
      
      animationFrame = requestAnimationFrame(measureFPS);
    };

    // Iniciar monitoramento apenas em dispositivos móveis
    if (window.innerWidth <= 768) {
      animationFrame = requestAnimationFrame(measureFPS);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);
};