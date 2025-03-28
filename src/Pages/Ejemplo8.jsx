import React from 'react'
import '../Styles/Ejemplo.css'
import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import '../Styles/Fundamentos.css'
import { FaRegClipboard, FaClipboardCheck } from "react-icons/fa";
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Ejemplo8 = () => {

    const codeE8 =  `section .data
    num dd 10
    par db "El número es par", 10, 0
    inpar db "El número es impar", 10, 0

section .text
    global main
    extern printf

main:
    mov eax, dword [num]
    test eax, 1         ; Comprobar si el bit menos significativo es 1
    jz print_par       ; "saltar si no es cero".
    push inpar
    call printf
    add esp, 4
    jmp end_programa

print_par:
    push par
    call printf
    add esp, 4

end_programa:
    xor eax, eax
    ret
`;
    const codeEE8 =  `nasm -f elf32 es_par.asm -o es_par.o`;
    const codeEEN8 =  `gcc -m32 es_par.o -o es_par -no-pie`;
    const codeEEJ8 =  `./es_par                    `;

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
      <div className='div-title'>Ejemplo 2 GCC - Es Par</div>
      <p className='p-c'><strong>Propósito:</strong>  : Este programa en ensamblador verifica si un número almacenado en memoria es par
o impar. Utiliza la operación bit a bit TEST para comprobar si el bit menos significativo del número
es 1 (indicando que es impar) o 0 (indicando que es par). Dependiendo del resultado, imprime un
mensaje en pantalla informando si el número es par o impar.

             </p>
                              <div className='div-code'>
                                  <div className='div-code-title'>
                                      <p className='p-title-example'>Ejemplo Es Par</p>
                                      <button onClick={() => copyToClipBoard(codeE8, 'codeE8')} className='button-copy-code-install'>
                                          {copiedStates['codeE8'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                                          {copiedStates['codeE8'] ? 'Copiado' : 'Copiar'}
                                      </button>
                                  </div>
                                  <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                                      padding: '20px',
                                      border: '10px'
                                  }}
                                  >
                                      {codeE8}
                                  </SyntaxHighlighter>
                              </div>
                              <p className='p-c-subtitle'>Ensambaje</p>
                              <div className='div-code'>
                                  <div className='div-code-title'>
                                      <p className='p-title-example'>es_par.asm</p>
                                      <button onClick={() => copyToClipBoard(codeEE8, 'codeEE8')} className='button-copy-code-install'>
                                          {copiedStates['codeEE8'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                                          {copiedStates['codeEE8'] ? 'Copiado' : 'Copiar'}
                                      </button>
                                  </div>
                                  <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                                      padding: '20px',
                                      border: '10px'
                                  }}
                                  >
                                      {codeEE8}
                                  </SyntaxHighlighter>
                              </div>
                              <p className='p-c-subtitle'>Enlazado</p>
                              <div className='div-code'>
                                  <div className='div-code-title'>
                                      <p className='p-title-example'>es_par.asm</p>
                                      <button onClick={() => copyToClipBoard(codeEEN8, 'codeEEN8')} className='button-copy-code-install'>
                                          {copiedStates['codeEEN8'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                                          {copiedStates['codeEEN8'] ? 'Copiado' : 'Copiar'}
                                      </button>
                                  </div>
                                  <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                                      padding: '20px',
                                      border: '10px'
                                  }}
                                  >
                                      {codeEEN8}
                                  </SyntaxHighlighter>
                              </div>
                              <p className='p-c-subtitle'>Enjecución</p>
                              <div className='div-code'>
                                  <div className='div-code-title'>
                                      <p className='p-title-example'>es_par.asm</p>
                                      <button onClick={() => copyToClipBoard(codeEEJ8, 'codeEEJ8')} className='button-copy-code-install'>
                                          {copiedStates['codeEEJ8'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                                          {copiedStates['codeEEJ8'] ? 'Copiado' : 'Copiar'}
                                      </button>
                                  </div>
                                  <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                                      padding: '20px',
                                      border: '10px'
                                  }}
                                  >
                                      {codeEEJ8}
                                  </SyntaxHighlighter>
                              </div>
    </div>
  )
}

export default Ejemplo8
