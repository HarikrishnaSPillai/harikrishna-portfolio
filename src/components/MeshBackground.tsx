"use client";

import React from 'react';

const MeshBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-40">
            <div
                className="absolute inset-0 bg-[#f9f7f2]"
                style={{
                    backgroundImage: `
            radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
            radial-gradient(at 50% 0%, hsla(225,39%,30%,0.15) 0, transparent 50%), 
            radial-gradient(at 100% 0%, hsla(339,49%,30%,0.05) 0, transparent 50%), 
            radial-gradient(at 0% 50%, hsla(225,39%,30%,0.1) 0, transparent 50%), 
            radial-gradient(at 100% 50%, hsla(253,16%,7%,0.05) 0, transparent 50%), 
            radial-gradient(at 0% 100%, hsla(339,49%,30%,0.05) 0, transparent 50%), 
            radial-gradient(at 50% 100%, hsla(225,39%,30%,0.1) 0, transparent 50%), 
            radial-gradient(at 100% 100%, hsla(253,16%,7%,1) 0, transparent 50%)
          `,
                    backgroundSize: '100% 100%',
                }}
            />
            <div className="absolute inset-0 backdrop-blur-[100px]" />

            {/* Animated blob 1 */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-primary/5 mix-blend-multiply filter blur-[80px] animate-mesh-slow" />

            {/* Animated blob 2 */}
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brand-primary/10 mix-blend-multiply filter blur-[100px] animate-mesh-slower" />

            {/* Animated blob 3 */}
            <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-gray-200/50 mix-blend-multiply filter blur-[120px] animate-mesh-slowest" />

            <style jsx>{`
        @keyframes mesh-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes mesh-slower {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40% { transform: translate(-40px, 40px) scale(1.2); }
          80% { transform: translate(40px, -20px) scale(0.8); }
        }
        @keyframes mesh-slowest {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, 50px) scale(1.1); }
          75% { transform: translate(-50px, -30px) scale(0.9); }
        }
        .animate-mesh-slow {
          animation: mesh-slow 20s infinite ease-in-out;
        }
        .animate-mesh-slower {
          animation: mesh-slower 25s infinite ease-in-out;
        }
        .animate-mesh-slowest {
          animation: mesh-slowest 30s infinite ease-in-out;
        }
      `}</style>
        </div>
    );
};

export default MeshBackground;
