import { useEffect, useRef, useMemo } from "react";


const CosmicBackground = () => {
  // استخدام Refs للطبقات لتحديث الحركة مباشرة بدون إعادة التصيير (Performance)
  const backLayerRef = useRef(null);
  const midLayerRef = useRef(null);
  const frontLayerRef = useRef(null);

  // دالة مساعدة لتوليد النجوم بشكل عشوائي
  const generateStars = (count) => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1 + "px",
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 3 + 2 + "s",
    }));
  };

  // إنشاء النجوم مرة واحدة فقط عند تحميل المكون
  const backStars = useMemo(() => generateStars(50), []);
  const midStars = useMemo(() => generateStars(70), []);
  const frontStars = useMemo(() => generateStars(30), []);

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      // حساب موضع الماوس بالنسبة لمنتصف الشاشة (من -1 إلى 1)
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const x = (e.clientX - centerX) / centerX;
      const y = (e.clientY - centerY) / centerY;

      // استخدام requestAnimationFrame لحركة ناعمة جداً وبدون تقطيع
      animationFrameId = requestAnimationFrame(() => {
        // كل طبقة تتحرك بعمق مختلف (الطبقة الأمامية تتحرك أسرع من الخلفية)
        // الإشارة السالبة تعني أن النجوم تتحرك عكس اتجاه الماوس لتعطي إحساساً بالعمق 3D
        if (backLayerRef.current) {
          backLayerRef.current.style.transform = `translate3d(${x * -10}px, ${y * -10}px, 0)`;
        }
        if (midLayerRef.current) {
          midLayerRef.current.style.transform = `translate3d(${x * -25}px, ${y * -25}px, 0)`;
        }
        if (frontLayerRef.current) {
          frontLayerRef.current.style.transform = `translate3d(${x * -50}px, ${y * -50}px, 0)`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // وضعنا الـ CSS هنا ليكون الملف ذاتي الاحتواء ويسهل نقله
  const styles = `
    .cosmic-bg {
      position: fixed;
      inset: 0;
      z-index: -1;
      overflow: hidden;
      background: radial-gradient(circle, #1e2129 0%, #111318 100%);
      width: 100vw;
      height: 100vh;
    }

    .layer {
      position: absolute;
      /* قمنا بتوسيع الطبقة لتفادي ظهور حواف الشاشة عند تحريك الماوس */
      top: -10%;
      left: -10%;
      width: 120%;
      height: 120%;
      will-change: transform;
      /* انتقال ناعم في حال توقف الماوس */
      transition: transform 0.1s ease-out; 
    }

    .stars-container {
      position: absolute;
      inset: 0;
    }

    .star {
      position: absolute;
      background: white;
      border-radius: 50%;
      opacity: 0.6;
      animation: twinkle var(--duration) infinite ease-in-out;
    }

    @keyframes twinkle {
      0%, 100% {
        opacity: 0.3;
        transform: scale(1);
      }
      50% {
        opacity: 1;
        transform: scale(1.5); /* زيادة بسيطة لإعطاء تأثير لمعان أجمل */
      }
    }

    .nebula {
      position: absolute;
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(88,101,242,0.15) 0%, transparent 70%);
      filter: blur(80px);
      z-index: -1;
      pointer-events: none; /* لمنع السديم من اعتراض الماوس */
    }

    .nebula-1 {
      top: -100px;
      left: -100px;
    }

    .nebula-2 {
      bottom: -100px;
      right: -100px;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="cosmic-bg">
        {/* السديم الثابت */}
        <div className="nebula nebula-1"></div>
        <div className="nebula nebula-2"></div>

        {/* طبقة النجوم الخلفية - الأبطأ */}
        <div className="layer" ref={backLayerRef}>
          <div className="stars-container">
            {backStars.map((star) => (
              <div
                key={`back-${star.id}`}
                className="star"
                style={{
                  width: star.size,
                  height: star.size,
                  left: star.left,
                  top: star.top,
                  "--duration": star.duration,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* طبقة النجوم الوسطى */}
        <div className="layer" ref={midLayerRef}>
          <div className="stars-container">
            {midStars.map((star) => (
              <div
                key={`mid-${star.id}`}
                className="star"
                style={{
                  width: star.size,
                  height: star.size,
                  left: star.left,
                  top: star.top,
                  "--duration": star.duration,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* طبقة النجوم الأمامية - الأسرع */}
        <div className="layer" ref={frontLayerRef}>
          <div className="stars-container">
            {frontStars.map((star) => (
              <div
                key={`front-${star.id}`}
                className="star"
                style={{
                  width: star.size,
                  height: star.size,
                  left: star.left,
                  top: star.top,
                  "--duration": star.duration,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CosmicBackground;