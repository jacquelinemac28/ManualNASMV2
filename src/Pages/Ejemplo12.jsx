import React from 'react'
import '../Styles/Ejemplo.css'
import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import '../Styles/Fundamentos.css'
import { FaRegClipboard, FaClipboardCheck } from "react-icons/fa";
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Ejemplo12 = () => {
    const codeE12 = `section .data
    num dd 25.0             ; Número de entrada
    fmt db "Raíz cuadrada: %lf", 10, 0  ; %lf para double

section .bss
    res resq 1              ; Espacio para un número de 8 bytes (double)

section .text
    global main
    extern printf

main:
    finit                   ; Inicializar la FPU para "unidades de punto flotante"
    fld dword [num]         ; Cargar el número en la FPU
    fsqrt                   ; Calcular la raíz cuadrada
    fstp qword [res]        ; Guardar el resultado en 64 bits

    push dword [res+4]      ; Parte alta del double
    push dword [res]        ; Parte baja del double
    push fmt
    call printf
    add esp, 12             ; Limpiar la pila

    xor eax, eax
    ret`;
    const codeEE12 = `nasm -f elf32 raiz.asm -o raiz.o`;
    const codeEEN12 = `gcc -m32 raiz.o -o raiz -no-pie`;
    const codeEEJ12 = `./raiz              `;

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
            <div className='div-title'>Ejemplo 6 GCC - Raiz</div>
            <p className='p-c'><strong>Propósito:</strong>  Este programa en ensamblador calcula la raíz cuadrada de un número en punto
                flotante y muestra el resultado en pantalla. Utiliza la Unidad de Punto Flotante (FPU) para realizar
                la operación matemática y la función printf de la biblioteca estándar de C para la salida del
                resultado.
            </p>
            <div className='div-code'>
                <div className='div-code-title'>
                    <p className='p-title-example'>Ejemplo Raiz</p>
                    <button onClick={() => copyToClipBoard(codeE12, 'codeE12')} className='button-copy-code-install'>
                        {copiedStates['codeE12'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                        {copiedStates['codeE12'] ? 'Copiado' : 'Copiar'}
                    </button>
                </div>
                <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                    padding: '20px',
                    border: '10px'
                }}
                >
                    {codeE12}
                </SyntaxHighlighter>
            </div>
            <p className='p-c-subtitle'>Ensambaje</p>
            <div className='div-code'>
                <div className='div-code-title'>
                    <p className='p-title-example'>raiz.asm</p>
                    <button onClick={() => copyToClipBoard(codeEE12, 'codeEE12')} className='button-copy-code-install'>
                        {copiedStates['codeEE12'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                        {copiedStates['codeEE12'] ? 'Copiado' : 'Copiar'}
                    </button>
                </div>
                <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                    padding: '20px',
                    border: '10px'
                }}
                >
                    {codeEE12}
                </SyntaxHighlighter>
            </div>
            <p className='p-c-subtitle'>Enlazado</p>
            <div className='div-code'>
                <div className='div-code-title'>
                    <p className='p-title-example'>raiz.asm</p>
                    <button onClick={() => copyToClipBoard(codeEEN12, 'codeEEN12')} className='button-copy-code-install'>
                        {copiedStates['codeEEN12'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                        {copiedStates['codeEEN12'] ? 'Copiado' : 'Copiar'}
                    </button>
                </div>
                <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                    padding: '20px',
                    border: '10px'
                }}
                >
                    {codeEEN12}
                </SyntaxHighlighter>
            </div>
            <p className='p-c-subtitle'>Enjecución</p>
            <div className='div-code'>
                <div className='div-code-title'>
                    <p className='p-title-example'>raiz.asm</p>
                    <button onClick={() => copyToClipBoard(codeEEJ12, 'codeEEJ12')} className='button-copy-code-install'>
                        {copiedStates['codeEEJ12'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                        {copiedStates['codeEEJ12'] ? 'Copiado' : 'Copiar'}
                    </button>
                </div>
                <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                    padding: '20px',
                    border: '10px'
                }}
                >
                    {codeEEJ12}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

export default Ejemplo12
