import React from 'react'
import '../Styles/Ejemplo.css'
import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import '../Styles/Fundamentos.css'
import { FaRegClipboard, FaClipboardCheck } from "react-icons/fa";
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Ejemplo9 = () => {
    const codeE9 = `section .data
    num dd 5
    fmt db "Factorial: %d", 10, 0

section .bss
    res resb 4

section .text
    global main
    extern printf

main:
    mov eax, 1       ; Inicializar resultado en 1
    mov ecx, dword [num]  ; Cargar número

factorial_loop:
    cmp ecx, 1       ; Si ecx <= 1, termina
    jle end_loop
    imul eax, ecx    ; Multiplicar eax * ecx
    dec ecx          ; Decrementar contador
    jmp factorial_loop

end_loop:
    mov [res], eax   ; Guardar resultado

    push dword [res]
    push fmt
    call printf
    add esp, 8

    xor eax, eax
    ret
`;
    const codeEE9 = `nasm -f elf32 factorial.asm -o factorial.o`;
    const codeEEN9 = `gcc -m32 factorial.o -o factorial -no-pie`;
    const codeEEJ9 = `./factorial                         `;

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
      <div className='div-title'>Ejemplo 3 GCC - Factorial!</div>
      <p className='p-c'><strong>Propósito:</strong>  Este programa en ensamblador calcula el factorial de un número entero positivo
almacenado en memoria. Utiliza un bucle para realizar la multiplicación sucesiva decreciendo el
valor del contador hasta llegar a 1. Finalmente, muestra el resultado en pantalla mediante la
función printf de la biblioteca estándar de C.
      
                   </p>
                                    <div className='div-code'>
                                        <div className='div-code-title'>
                                            <p className='p-title-example'>Ejemplo Factorial</p>
                                            <button onClick={() => copyToClipBoard(codeE9, 'codeE9')} className='button-copy-code-install'>
                                                {copiedStates['codeE9'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                                                {copiedStates['codeE9'] ? 'Copiado' : 'Copiar'}
                                            </button>
                                        </div>
                                        <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                                            padding: '20px',
                                            border: '10px'
                                        }}
                                        >
                                            {codeE9}
                                        </SyntaxHighlighter>
                                    </div>
                                    <p className='p-c-subtitle'>Ensambaje</p>
                                    <div className='div-code'>
                                        <div className='div-code-title'>
                                            <p className='p-title-example'>factorial.asm</p>
                                            <button onClick={() => copyToClipBoard(codeEE9, 'codeEE9')} className='button-copy-code-install'>
                                                {copiedStates['codeEE9'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                                                {copiedStates['codeEE9'] ? 'Copiado' : 'Copiar'}
                                            </button>
                                        </div>
                                        <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                                            padding: '20px',
                                            border: '10px'
                                        }}
                                        >
                                            {codeEE9}
                                        </SyntaxHighlighter>
                                    </div>
                                    <p className='p-c-subtitle'>Enlazado</p>
                                    <div className='div-code'>
                                        <div className='div-code-title'>
                                            <p className='p-title-example'>factorial.asm</p>
                                            <button onClick={() => copyToClipBoard(codeEEN9, 'codeEEN9')} className='button-copy-code-install'>
                                                {copiedStates['codeEEN9'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                                                {copiedStates['codeEEN9'] ? 'Copiado' : 'Copiar'}
                                            </button>
                                        </div>
                                        <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                                            padding: '20px',
                                            border: '10px'
                                        }}
                                        >
                                            {codeEEN9}
                                        </SyntaxHighlighter>
                                    </div>
                                    <p className='p-c-subtitle'>Enjecución</p>
                                    <div className='div-code'>
                                        <div className='div-code-title'>
                                            <p className='p-title-example'>es_par.asm</p>
                                            <button onClick={() => copyToClipBoard(codeEEJ9, 'codeEEJ9')} className='button-copy-code-install'>
                                                {copiedStates['codeEEJ9'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                                                {copiedStates['codeEEJ9'] ? 'Copiado' : 'Copiar'}
                                            </button>
                                        </div>
                                        <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                                            padding: '20px',
                                            border: '10px'
                                        }}
                                        >
                                            {codeEEJ9}
                                        </SyntaxHighlighter>
                                    </div>
    </div>
  )
}

export default Ejemplo9
