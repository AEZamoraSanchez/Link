import { useEffect, useState } from 'react';
// import {characterMovible} from "../../helpers/taildwindConsts"
import abajo1 from "../../Images/abajo1.png"
import abajo2 from "../../Images/abajo2.png"
import arriba1 from "../../Images/arriba1.png"
import arriba2 from "../../Images/arriba2.png"
import derecha1 from "../../Images/derecha1.png"
import derecha2 from "../../Images/derecha2.png"
import izquierda1 from "../../Images/izquierda1.png"
import izquierda2 from "../../Images/izquierda2.png"
import Imgdefault from "../../Images/default.png"

const CharacterMovible = () => {
  const [position, setPosition] = useState({x: 30, y: 30});
  const [link, setLink] = useState(Imgdefault)
  const [lastArrowPressTime, setLastArrowPressTime] = useState(0); // Variable para rastrear el tiempo de la última tecla presionada.
  const width = window.innerWidth;

  const moveElement = (x, y) => {
    setPosition(prevPosition => ({
      ...prevPosition,
      x: prevPosition.x + x,
      y: prevPosition.y + y,
    }));
  };

  


  useEffect(() => {
    console.log("Position:", position); // Imprime la posición actualizada

  }, [position]);

  const handleKeyDown = (event) => {

    setLastArrowPressTime(Date.now());
    switch (event.key) {
      case 'ArrowUp':
        moveElement(0, -50);
        setLink(arriba1)
        setTimeout(()=> {
          setLink(arriba2)
        }, 100)
        setTimeout(()=> {
          setLink(arriba1)
        }, 200)
        break;
      case 'ArrowDown':
        moveElement(0, 50);
        setLink(abajo1)
        setTimeout(()=> {
          setLink(abajo2)
        }, 100)
        setTimeout(()=> {
          setLink(abajo1)
        }, 200)
        break;
      case 'ArrowLeft':
        moveElement(-50, 0);
        setLink(izquierda1)
        setTimeout(()=> {
          setLink(izquierda2)
        }, 100)
        setTimeout(()=> {
          setLink(izquierda1)
        }, 200)
        break;
      case 'ArrowRight':
        moveElement(50, 0);
        setLink(derecha1)
        setTimeout(()=> {
          setLink(derecha2)
        }, 100)
        setTimeout(()=> {
          setLink(derecha1)
        }, 200)
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (width < 640) {setPosition({x: 20, y: 30})}
    if (width >= 768 && width < 1024){setPosition({x: 50, y: 50})}
    if (width >= 1024 ){setPosition({x: 55, y: 50})}

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [width]);

    // Verifica si no se ha presionado ninguna tecla en los últimos 2 segundos y establece link en Imgdefault si es así.
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        if (Date.now() - lastArrowPressTime >= 1000) {
          setLink(Imgdefault);
        }
      }, 1000);
  
      return () => clearTimeout(timeoutId);
    }, [lastArrowPressTime]);

  return (
      <img alt='character' src={link} className="relative w-[50px] h-[50px] sm:w-[75px] sm:h-[75px] lg:w-[100px] lg:h-[100px]" style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        
      }}/>
        
      
  );
};


export default CharacterMovible;
