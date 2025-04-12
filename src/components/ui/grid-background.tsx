import React from "react";

export const GridBackground = ({ className }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      <div 
        className="absolute h-full w-full bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(255 255 255 / 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(255 255 255 / 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
        }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#1C2951,transparent)]"
      />
    </div>
  );
}; 