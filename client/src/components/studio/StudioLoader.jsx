import { Html, useProgress } from '@react-three/drei';
import { useEffect } from 'react';

const StudioLoader = () => {
  const { progress } = useProgress();

  useEffect(() => {
    const minDelay = setTimeout(() => {
      setShowContent(true);
    }, 2000); // 🕒 Minimum 2 seconds (you can tweak to 1000–3000)

    return () => clearTimeout(minDelay);
  }, []);

  return (
    <Html fullscreen>
      <div className="w-full h-full flex flex-col justify-center items-center bg-black text-white">
        <p className="text-2xl mb-4 animate-pulse font-[halimun]">Loading your studio experience...</p>
        <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm mt-2 text-white/60">{Math.floor(progress)}%</p>
      </div>
    </Html>
  );
};

export default StudioLoader;
