export default function CloudsBg() {
    const nubes = Array.from({ length: 55 }, (_, i) => {
        const size = `${Math.random() * 400 + 50}px`; 
        const top = `${Math.random() * 100}%`; 
        const delay = `-${Math.random() * 30}s`; 
        const duration = `${30 + Math.random() * 40}s`; 
        const opacity = `${0.3 + Math.random() * 0.5}`;
    
        return {
            id: i,
            size,
            top,
            delay,
            duration,
            opacity,
        };
    });

    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          {nubes.map((nube) => (
            <img
              key={nube.id}
              src="/nubeazuul.png"
              alt="nube"
              className="animate-cloud absolute"
              style={{
                top: nube.top,
                width: nube.size,
                opacity: nube.opacity,
                animationDelay: nube.delay,
                animationDuration: nube.duration,
              }}
            />
          ))}
        </div>
    );

}