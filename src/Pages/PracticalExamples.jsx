import React, { useState } from 'react'
import '../Styles/PracticalExamples.css'
import Ejemplo1 from '../Pages/Ejemplo1'
import Ejemplo2 from '../Pages/Ejemplo2'
import Ejemplo3 from '../Pages/Ejemplo3'
import Ejemplo4 from './Ejemplo4'
import Ejemplo5 from './Ejemplo5'
import Ejemplo6 from './Ejemplo6'
import Ejemplo7 from './Ejemplo7'
import Ejemplo8 from './Ejemplo8'
import Ejemplo9 from './Ejemplo9'
import Ejemplo10 from './Ejemplo10'
import Ejemplo11 from './Ejemplo11'
import Ejemplo12 from './Ejemplo12'
import Ejemplo13 from './Ejemplo13'


import { FaBook, FaBookOpen, FaCalculator, FaExclamationCircle, FaGlobe, FaMountain, FaPlus, FaSplotch, FaSquareRootAlt, FaSync, FaUndo } from "react-icons/fa";

const PracticalExamples = () => {
  const [contenidoActual, setContenidoActual] = useState('ejemplo1');

  const renderContenido = () => {
    switch (contenidoActual) {
      case 'ejemplo1':
        return <Ejemplo1 />;
      case 'ejemplo2':
        return <Ejemplo2 />;
      case 'ejemplo3':
        return <Ejemplo3 />;
      case 'ejemplo4':
        return <Ejemplo4 />;
      case 'ejemplo5':
        return <Ejemplo5 />;
      case 'ejemplo6':
        return <Ejemplo6 />;
      case 'ejemplo7':
        return <Ejemplo7 />;
      case 'ejemplo8':
        return <Ejemplo8 />;
      case 'ejemplo9':
        return <Ejemplo9 />;
      case 'ejemplo10':
        return <Ejemplo10 />;
      case 'ejemplo11':
        return <Ejemplo11 />;
      case 'ejemplo12':
        return <Ejemplo12 />;
      case 'ejemplo13':
        return <Ejemplo13 />;
      default:
        return <Ejemplo1 />;
    }
  };

  return (
    <div className='div-body'>
      <div className='div-menu'>
        <div className='div-title-menu'>Menu</div>
        <button onClick={() => setContenidoActual('ejemplo1')} className='button-copy-code'>
          <FaGlobe size={18} />
          Ejemplo 1 - Hola Mundo
        </button>
        <button onClick={() => setContenidoActual('ejemplo2')} className='button-copy-code'>
          <FaBookOpen size={18} />
          Ejemplo 2 - Leer
        </button>
        <button onClick={() => setContenidoActual('ejemplo3')} className='button-copy-code'>
          <FaPlus size={18} />
          Ejemplo 3 - Suma
        </button>
        <button onClick={() => setContenidoActual('ejemplo4')} className='button-copy-code'>
          <FaUndo size={18} />
          Ejemplo 4 - Ciclo
        </button>
        <button onClick={() => setContenidoActual('ejemplo5')} className='button-copy-code'>
          <FaSync size={18} />
          Ejemplo 5 - Hola + Suma
        </button>
        <button onClick={() => setContenidoActual('ejemplo6')} className='button-copy-code'>
          <FaCalculator size={18} />
          Ejemplo 6 - Calculadora
        </button>
        <div className='div-linea'></div>
        <button onClick={() => setContenidoActual('ejemplo7')} className='button-copy-code'>
          <FaMountain size={18} />
          Ejemplo 1 GCC - Calculadora
        </button>
        <button onClick={() => setContenidoActual('ejemplo8')} className='button-copy-code'>
          <FaSplotch size={18} />
          Ejemplo 2 GCC - Es par
        </button>
        <button onClick={() => setContenidoActual('ejemplo9')} className='button-copy-code'>
          <FaExclamationCircle size={18} />
          Ejemplo 3 GCC - Factorial
        </button>
        <button onClick={() => setContenidoActual('ejemplo10')} className='button-copy-code'>
          <FaBook size={18} />
          Ejemplo 4 GCC - Leer
        </button>
        <button onClick={() => setContenidoActual('ejemplo11')} className='button-copy-code'>
          <FaSquareRootAlt size={18} />
          Ejemplo 5 GCC - Piramide
        </button>
        <button onClick={() => setContenidoActual('ejemplo12')} className='button-copy-code'>
          <FaSquareRootAlt size={18} />
          Ejemplo 6 GCC - Raiz
        </button>
        <button onClick={() => setContenidoActual('ejemplo13')} className='button-copy-code'>
          <FaSquareRootAlt size={18} />
          Ejemplo 7 GCC - Suma
        </button>
      </div>
      <div className='div-principal'>
        {renderContenido()}
      </div>
    </div>
  )
}

export default PracticalExamples
