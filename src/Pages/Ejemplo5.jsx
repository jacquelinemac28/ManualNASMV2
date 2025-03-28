import React from 'react'
import '../Styles/Ejemplo.css'
import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import '../Styles/Fundamentos.css'
import { FaRegClipboard, FaClipboardCheck } from "react-icons/fa";
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Ejemplo5 = () => {

    const codeE5 = `section .bss
    num1 resb 1    ; Reservar espacio para num1
    num2 resb 1    ; Reservar espacio para num2
    resultado resb 1  ; Reservar espacio para el resultado
    aux resb 1  ; Reservar espacio para el resultado


section .data
    msg1 db "Ingresa el primer número?", 0
    msg2 db "Ingresa el segundo número?", 0
    msg_result db "La suma es: ", 0
    newline db 10, 0  ; Salto de línea

    hello db "Hello", 10  ; "Hello" seguido de un salto de línea
    hello_len equ $ - hello


section .text
    global _start

_start:
    ; Mostrar mensaje 1
    mov eax, 4          ; syscall write
    mov ebx, 1          ; stdout
    mov ecx, msg1       ; Dirección del mensaje
    mov edx, 25         ; Longitud del mensaje
    int 0x80            ; Llamado al sistema

    ; Leer primer número
    mov eax, 3          ; syscall read
    mov ebx, 0          ; stdin
    mov ecx, num1       ; Dirección donde guardar el número
    mov edx, 2          ; Longitud (1 dígito + Enter)
    int 0x80            ; Llamado al sistema

    ; Mostrar mensaje 2
    mov eax, 4
    mov ebx, 1
    mov ecx, msg2
    mov edx, 26
    int 0x80

    ; Leer segundo número
    mov eax, 3
    mov ebx, 0
    mov ecx, num2
    mov edx, 2
    int 0x80

    ; Convertir caracteres ASCII a números
    mov al, [num1]  
    sub al, '0'      ; Convierte de ASCII a valor numérico
    mov bl, [num2]  
    sub bl, '0'

    ; Sumar los números
    add al, bl
    add al, '0'      ; Convertir resultado de vuelta a ASCII
    mov [resultado], al
 

    ; Mostrar mensaje del resultado
    mov eax, 4
    mov ebx, 1
    mov ecx, msg_result
    mov edx, 13
    int 0x80

    ; Mostrar el resultado
    mov eax, 4
    mov ebx, 1
    mov ecx, resultado
    mov edx, 1
    int 0x80

    ; Imprimir salto de línea
    mov eax, 4
    mov ebx, 1
    mov ecx, newline
    mov edx, 1
    int 0x80

    ;la suma para el ciclo (HAY QUE VOLVER A HACERLA)

    ; Convertir caracteres ASCII a números
    mov al, [num1]  
    sub al, '0'      ; Convierte de ASCII a valor numérico
    mov bl, [num2]  
    sub bl, '0'

    add al, bl
    mov [resultado], al
    movzx ecx, byte[resultado] ;MOVZX — Move With Zero-Extend

.loop:
    push ecx        ; Guardamos el valor del contador
    mov edx, hello_len  ; Longitud del mensaje
    mov ecx, hello  ; Dirección del mensaje
    mov ebx, 1      ; Descriptor de archivo (stdout)
    mov eax, 4      ; syscall: sys_write
    int 0x80        ; Llamada al sistema
    pop ecx         ; Restauramos el contador
    loop .loop      ; Decrementa ECX y salta si no es 0

    mov eax, 1      ; syscall: sys_exit
    xor ebx, ebx    ; Código de salida 0
    int 0x80        ; Llamada al sistema`;
    const codeEE5 = `nasm -f elf32 suma_y_ciclo.asm -o suma_y_ciclo.o`;
    const codeEEN5 = `ld -m elf_i386 -s -o suma_y_ciclo suma_y_ciclo.o`;
    const codeEEJ5 = `./suma_y_ciclo                             `;


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
            <div className='div-title'>Ejemplo 5 - Hola + Suma</div>
            <p className='p-c'><strong>Propósito:</strong> Solicita al usuario ingresar dos números de un solo dígito, realiza su suma y muestra
                el resultado en formato ASCII. Utiliza el valor numérico de la suma como contador para imprimir
                repetidamente la cadena "Hello" seguida de un salto de línea. Termina la ejecución de manera
                ordenada. </p>
            <div className='div-code'>
                <div className='div-code-title'>
                    <p className='p-title-example'>Ejemplo Hola + Suma</p>
                    <button onClick={() => copyToClipBoard(codeE5, 'codeE5')} className='button-copy-code-install'>
                        {copiedStates['codeE5'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                        {copiedStates['codeE5'] ? 'Copiado' : 'Copiar'}
                    </button>
                </div>
                <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                    padding: '20px',
                    border: '10px'
                }}
                >
                    {codeE5}
                </SyntaxHighlighter>
            </div>
            <p className='p-c-subtitle'>Ensambaje</p>
            <div className='div-code'>
                <div className='div-code-title'>
                    <p className='p-title-example'>suma_y_ciclo.asm</p>
                    <button onClick={() => copyToClipBoard(codeEE5, 'codeEE5')} className='button-copy-code-install'>
                        {copiedStates['codeEE5'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                        {copiedStates['codeEE5'] ? 'Copiado' : 'Copiar'}
                    </button>
                </div>
                <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                    padding: '20px',
                    border: '10px'
                }}
                >
                    {codeEE5}
                </SyntaxHighlighter>
            </div>
            <p className='p-c-subtitle'>Enlazado</p>
            <div className='div-code'>
                <div className='div-code-title'>
                    <p className='p-title-example'>suma_y_ciclo.asm</p>
                    <button onClick={() => copyToClipBoard(codeEEN5, 'codeEEN5')} className='button-copy-code-install'>
                        {copiedStates['codeEEN5'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                        {copiedStates['codeEEN5'] ? 'Copiado' : 'Copiar'}
                    </button>
                </div>
                <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                    padding: '20px',
                    border: '10px'
                }}
                >
                    {codeEEN5}
                </SyntaxHighlighter>
            </div>
            <p className='p-c-subtitle'>Enjecución</p>
            <div className='div-code'>
                <div className='div-code-title'>
                    <p className='p-title-example'>suma_y_ciclo.asm</p>
                    <button onClick={() => copyToClipBoard(codeEEJ5, 'codeEEJ5')} className='button-copy-code-install'>
                        {copiedStates['codeEEJ5'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                        {copiedStates['codeEEJ5'] ? 'Copiado' : 'Copiar'}
                    </button>
                </div>
                <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                    padding: '20px',
                    border: '10px'
                }}
                >
                    {codeEEJ5}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

export default Ejemplo5
