import React from 'react'
import '../Styles/Ejemplo.css'
import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import '../Styles/Fundamentos.css'
import { FaRegClipboard, FaClipboardCheck } from "react-icons/fa";
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Ejemplo10 = () => {
    const codeE10 = `section .data
    prompt db "Ingrese un valor: ", 0
    fmt_in db "%d", 0
    fmt_out db "Valor ingresado: %d", 10, 0

section .bss
    num resd 1  ; Espacio para almacenar el número ingresado

section .text
    global main
    extern printf, scanf

main:
    ; Mostrar mensaje de entrada
    push prompt
    call printf
    add esp, 4

    ; Leer el valor desde la consola
    push num
    push fmt_in
    call scanf
    add esp, 8

    ; Imprimir el valor ingresado
    push dword [num]
    push fmt_out
    call printf
    add esp, 8

    ; Terminar el programa
    xor eax, eax
    ret
`;
    const codeEE10 = `nasm -f elf32 leer.asm -o leer.o`;
    const codeEEN10 = `gcc -m32 leer.o -o leer -no-pie`;
    const codeEEJ10 = `./leer                 `;

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
            <div className='div-title'>Ejemplo 4 GCC - Leer</div>
            <p className='p-c'><strong>Propósito:</strong>  Este programa en ensamblador permite leer un valor entero desde la entrada estándar
                y mostrarlo en la salida estándar. Para ello, utiliza las funciones scanf y printf de la biblioteca
                estándar de C, facilitando la interacción con el usuario.

            </p>
            <div className='div-code'>
                <div className='div-code-title'>
                    <p className='p-title-example'>Ejemplo Leer</p>
                    <button onClick={() => copyToClipBoard(codeE10, 'codeE10')} className='button-copy-code-install'>
                        {copiedStates['codeE10'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                        {copiedStates['codeE10'] ? 'Copiado' : 'Copiar'}
                    </button>
                </div>
                <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                    padding: '20px',
                    border: '10px'
                }}
                >
                    {codeE10}
                </SyntaxHighlighter>
            </div>
            <p className='p-c-subtitle'>Ensambaje</p>
            <div className='div-code'>
                <div className='div-code-title'>
                    <p className='p-title-example'>leer.asm</p>
                    <button onClick={() => copyToClipBoard(codeEE10, 'codeEE10')} className='button-copy-code-install'>
                        {copiedStates['codeEE10'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                        {copiedStates['codeEE10'] ? 'Copiado' : 'Copiar'}
                    </button>
                </div>
                <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                    padding: '20px',
                    border: '10px'
                }}
                >
                    {codeEE10}
                </SyntaxHighlighter>
            </div>
            <p className='p-c-subtitle'>Enlazado</p>
            <div className='div-code'>
                <div className='div-code-title'>
                    <p className='p-title-example'>leer.asm</p>
                    <button onClick={() => copyToClipBoard(codeEEN10, 'codeEEN10')} className='button-copy-code-install'>
                        {copiedStates['codeEEN10'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                        {copiedStates['codeEEN10'] ? 'Copiado' : 'Copiar'}
                    </button>
                </div>
                <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                    padding: '20px',
                    border: '10px'
                }}
                >
                    {codeEEN10}
                </SyntaxHighlighter>
            </div>
            <p className='p-c-subtitle'>Enjecución</p>
            <div className='div-code'>
                <div className='div-code-title'>
                    <p className='p-title-example'>leer.asm</p>
                    <button onClick={() => copyToClipBoard(codeEEJ10, 'codeEEJ10')} className='button-copy-code-install'>
                        {copiedStates['codeEEJ10'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                        {copiedStates['codeEEJ10'] ? 'Copiado' : 'Copiar'}
                    </button>
                </div>
                <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                    padding: '20px',
                    border: '10px'
                }}
                >
                    {codeEEJ10}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

export default Ejemplo10
