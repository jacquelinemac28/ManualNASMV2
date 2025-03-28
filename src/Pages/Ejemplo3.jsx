import React from 'react'
import '../Styles/Ejemplo.css'
import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import '../Styles/Fundamentos.css'
import { FaRegClipboard, FaClipboardCheck } from "react-icons/fa";
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Ejemplo3 = () => {

  const codeE3 = `section .bss
    num1 resb 2    ; Reservar espacio para num1
    num2 resb 2    ; Reservar espacio para num2
    resultado resb 64  ; Reservar espacio para el resultado

section .data
    msg1 db "Ingresa el primer número?", 0
    msg2 db "Ingresa el segundo número?", 0
    msg_result db "La suma es: ", 0
    newline db 10, 0  ; Salto de línea

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

    ; Salir del programa
    mov eax, 1          ; syscall exit
    xor ebx, ebx        ; Código de salida 0
    int 0x80`;

  const codeEE3 = `nasm -f elf32 suma.asm -o suma.o`;
  const codeEEN3 = `ld -m elf_i386 suma.o -o suma`;
  const codeEEJ3 = `./suma                        `;

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
      <div className='div-title'>Ejemplo 3 - Suma</div>
      <p className='p-c'><strong>Propósito:</strong> Leer dos números ingresados por el usuario, sumarlos y mostrar el resultado en
        pantalla. </p>
      <div className='div-code'>
        <div className='div-code-title'>
          <p className='p-title-example'>Ejemplo Suma</p>
          <button onClick={() => copyToClipBoard(codeE3, 'codeE3')} className='button-copy-code-install'>
            {copiedStates['codeE3'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
            {copiedStates['codeE3'] ? 'Copiado' : 'Copiar'}
          </button>
        </div>
        <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
          padding: '20px',
          border: '10px'
        }}
        >
          {codeE3}
        </SyntaxHighlighter>
      </div>
      <p className='p-c-subtitle'>Ensambaje</p>
      <div className='div-code'>
        <div className='div-code-title'>
          <p className='p-title-example'>suma.asm</p>
          <button onClick={() => copyToClipBoard(codeEE3, 'codeEE3')} className='button-copy-code-install'>
            {copiedStates['codeEE3'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
            {copiedStates['codeEE3'] ? 'Copiado' : 'Copiar'}
          </button>
        </div>
        <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
          padding: '20px',
          border: '10px'
        }}
        >
          {codeEE3}
        </SyntaxHighlighter>
      </div>
      <p className='p-c-subtitle'>Enlazado</p>
      <div className='div-code'>
        <div className='div-code-title'>
          <p className='p-title-example'>suma.asm</p>
          <button onClick={() => copyToClipBoard(codeEEN3, 'codeEEN3')} className='button-copy-code-install'>
            {copiedStates['codeEEN3'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
            {copiedStates['codeEEN3'] ? 'Copiado' : 'Copiar'}
          </button>
        </div>
        <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
          padding: '20px',
          border: '10px'
        }}
        >
          {codeEEN3}
        </SyntaxHighlighter>
      </div>
      <p className='p-c-subtitle'>Enjecución</p>
      <div className='div-code'>
        <div className='div-code-title'>
          <p className='p-title-example'>suma.asm</p>
          <button onClick={() => copyToClipBoard(codeEEJ3, 'codeEEJ3')} className='button-copy-code-install'>
            {copiedStates['codeEEJ3'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
            {copiedStates['codeEEJ3'] ? 'Copiado' : 'Copiar'}
          </button>
        </div>
        <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
          padding: '20px',
          border: '10px'
        }}
        >
          {codeEEJ3}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default Ejemplo3
