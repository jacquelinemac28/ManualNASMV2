import React from 'react'
import '../Styles/Ejemplo.css'
import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import '../Styles/Fundamentos.css'
import { FaRegClipboard, FaClipboardCheck } from "react-icons/fa";
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Ejemplo11 = () => {
    const codeE11 = `section .data
    prompt db "Ingrese el numero de filas: ", 0
    fmt_in db "%d", 0
    fmt_out db "%c", 0
    newline db 10, 0
    space db " ", 0
    asterisk db " * ", 0

section .bss
    filas resd 1

section .text
    global main
    extern printf, scanf

main:
    ; Pedir el número de filas
    push prompt
    call printf
    add esp, 4

    push filas
    push fmt_in
    call scanf
    add esp, 8

    ; Cargar el número de filas en ECX
    mov ecx, [filas]
    mov edi, 1   ; Controla la cantidad de asteriscos por fila

fila_loop:
    push ecx  ; Guardar ECX en la pila

    ; Imprimir espacios antes de los asteriscos
    mov eax, [filas]
    sub eax, edi  ; Calcular los espacios a imprimir
    mov ebx, eax

espacio_loop:
    cmp ebx, 0
    je imprimir_asteriscos
    push space
    call printf
    add esp, 4
    dec ebx
    jmp espacio_loop

imprimir_asteriscos:
    mov ebx, edi  ; EBX controla la cantidad de asteriscos en la fila

asterisco_loop:
    cmp ebx, 0
    je nueva_linea
    push asterisk
    call printf
    add esp, 4
    dec ebx
    jmp asterisco_loop

nueva_linea:
    push newline
    call printf
    add esp, 4

    pop ecx   ; Restaurar ECX
    inc edi   ; Aumentar la cantidad de asteriscos en la siguiente fila
    loop fila_loop  ; Repetir hasta completar todas las filas

    xor eax, eax
    ret
`;
    const codeEE11 = `nasm -f elf32 piramide.asm -o piramide.o`;
    const codeEEN11 = `gcc -m32 piramide.o -o piramide -no-pie`;
    const codeEEJ11 = `./piramide                    `;

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
            <div className='div-title'>Ejemplo 5 GCC - Piramide</div>
            <p className='p-c'><strong>Propósito:</strong>  Este programa en ensamblador genera una pirámide de asteriscos basada en un
                número de filas ingresado por el usuario. Utiliza llamadas a funciones de la biblioteca estándar de
                C (scanf y printf) para interactuar con la entrada y salida de datos.
            </p>
            <div className='div-code'>
                <div className='div-code-title'>
                    <p className='p-title-example'>Ejemplo Piramide</p>
                    <button onClick={() => copyToClipBoard(codeE11, 'codeE11')} className='button-copy-code-install'>
                        {copiedStates['codeE11'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                        {copiedStates['codeE11'] ? 'Copiado' : 'Copiar'}
                    </button>
                </div>
                <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                    padding: '20px',
                    border: '10px'
                }}
                >
                    {codeE11}
                </SyntaxHighlighter>
            </div>
            <p className='p-c-subtitle'>Ensambaje</p>
            <div className='div-code'>
                <div className='div-code-title'>
                    <p className='p-title-example'>piramide.asm</p>
                    <button onClick={() => copyToClipBoard(codeEE11, 'codeEE11')} className='button-copy-code-install'>
                        {copiedStates['codeEE11'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                        {copiedStates['codeEE11'] ? 'Copiado' : 'Copiar'}
                    </button>
                </div>
                <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                    padding: '20px',
                    border: '10px'
                }}
                >
                    {codeEE11}
                </SyntaxHighlighter>
            </div>
            <p className='p-c-subtitle'>Enlazado</p>
            <div className='div-code'>
                <div className='div-code-title'>
                    <p className='p-title-example'>piramide.asm</p>
                    <button onClick={() => copyToClipBoard(codeEEN11, 'codeEEN11')} className='button-copy-code-install'>
                        {copiedStates['codeEEN11'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                        {copiedStates['codeEEN11'] ? 'Copiado' : 'Copiar'}
                    </button>
                </div>
                <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                    padding: '20px',
                    border: '10px'
                }}
                >
                    {codeEEN11}
                </SyntaxHighlighter>
            </div>
            <p className='p-c-subtitle'>Enjecución</p>
            <div className='div-code'>
                <div className='div-code-title'>
                    <p className='p-title-example'>piramide.asm</p>
                    <button onClick={() => copyToClipBoard(codeEEJ11, 'codeEEJ11')} className='button-copy-code-install'>
                        {copiedStates['codeEEJ11'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                        {copiedStates['codeEEJ11'] ? 'Copiado' : 'Copiar'}
                    </button>
                </div>
                <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                    padding: '20px',
                    border: '10px'
                }}
                >
                    {codeEEJ11}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

export default Ejemplo11
