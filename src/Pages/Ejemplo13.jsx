import React from 'react'
import '../Styles/Ejemplo.css'
import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import '../Styles/Fundamentos.css'
import { FaRegClipboard, FaClipboardCheck } from "react-icons/fa";
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Ejemplo13 = () => {
    const codeE13 = `section .data
    num1 dd 500
    num2 dd 10
    fmt db "Resultado: %d", 10, 0

section .bss
    res resb 4

section .text
    global main
    extern printf

main:
    mov eax, dword [num1]  ; Cargar num1 en eax
    add eax, dword [num2]  ; Sumar num2
    mov [res], eax         ; Guardar resultado

    push dword [res]       ; Pasar el resultado a printf
    push fmt
    call printf
    add esp, 8             ; Limpiar pila

    xor eax, eax
    ret
`;
    const codeEE13 = `nasm -f elf32 suma.asm -o suma.o`;
    const codeEEN13 = `gcc -m32 suma.o -o suma -no-pie`;
    const codeEEJ13 = `./suma               `;

            const [copiedStates, setCopiedStates] = useState({});
                    const copyToClipBoard = (code, codeId) => {
                        navigator.clipboard.writeText(code);
                        setCopiedStates((prev) => ({ ...prev, [codeId]: true }));
                        setTimeout(() => {
                            setCopiedStates((prev) => ({ ...prev, [codeId]: false }));
                        }, 1500);
                    };

  return (
    <div className='div-principal'>
      <div className='div-title'>Ejemplo 7 GCC - Suma</div>
      <p className='p-c'><strong>Propósito:</strong>  Este programa en ensamblador calcula la raíz cuadrada de un número en punto
                      flotante y muestra el resultado en pantalla. Utiliza la Unidad de Punto Flotante (FPU) para realizar
                      la operación matemática y la función printf de la biblioteca estándar de C para la salida del
                      resultado.
                  </p>
                  <div className='div-code'>
                      <div className='div-code-title'>
                          <p className='p-title-example'>Ejemplo Suma</p>
                          <button onClick={() => copyToClipBoard(codeE13, 'codeE13')} className='button-copy-code-install'>
                              {copiedStates['codeE13'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                              {copiedStates['codeE13'] ? 'Copiado' : 'Copiar'}
                          </button>
                      </div>
                      <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                          padding: '20px',
                          border: '10px'
                      }}
                      >
                          {codeE13}
                      </SyntaxHighlighter>
                  </div>
                  <p className='p-c-subtitle'>Ensambaje</p>
                  <div className='div-code'>
                      <div className='div-code-title'>
                          <p className='p-title-example'>suma.asm</p>
                          <button onClick={() => copyToClipBoard(codeEE13, 'codeEE13')} className='button-copy-code-install'>
                              {copiedStates['codeEE13'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                              {copiedStates['codeEE13'] ? 'Copiado' : 'Copiar'}
                          </button>
                      </div>
                      <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                          padding: '20px',
                          border: '10px'
                      }}
                      >
                          {codeEE13}
                      </SyntaxHighlighter>
                  </div>
                  <p className='p-c-subtitle'>Enlazado</p>
                  <div className='div-code'>
                      <div className='div-code-title'>
                          <p className='p-title-example'>suma.asm</p>
                          <button onClick={() => copyToClipBoard(codeEEN13, 'codeEEN13')} className='button-copy-code-install'>
                              {copiedStates['codeEEN12'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                              {copiedStates['codeEEN12'] ? 'Copiado' : 'Copiar'}
                          </button>
                      </div>
                      <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                          padding: '20px',
                          border: '10px'
                      }}
                      >
                          {codeEEN13}
                      </SyntaxHighlighter>
                  </div>
                  <p className='p-c-subtitle'>Enjecución</p>
                  <div className='div-code'>
                      <div className='div-code-title'>
                          <p className='p-title-example'>suma.asm</p>
                          <button onClick={() => copyToClipBoard(codeEEJ13, 'codeEEJ13')} className='button-copy-code-install'>
                              {copiedStates['codeEEJ13'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                              {copiedStates['codeEEJ13'] ? 'Copiado' : 'Copiar'}
                          </button>
                      </div>
                      <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                          padding: '20px',
                          border: '10px'
                      }}
                      >
                          {codeEEJ13}
                      </SyntaxHighlighter>
                  </div>
    </div>
  )
}

export default Ejemplo13
