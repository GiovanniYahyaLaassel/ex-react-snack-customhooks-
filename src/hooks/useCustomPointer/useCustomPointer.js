import { useState, useEffect, useRef } from "react";


function useCustomPointer(content)  {
    const pointerRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    },[])

    useEffect(() => {
        if(pointerRef.current) {
            pointerRef.current.style.left = `${position.x}px`;
            pointerRef.current.style.top = `${position.y}px`;
        }
    },[position]);

    useEffect(() => {
        if(pointerRef.current) {
            pointerRef.current.textContent = content;
        }
    }, [content]);

    // console.log("Posizione Mouse:", position)
    return pointerRef;


}

export default useCustomPointer;