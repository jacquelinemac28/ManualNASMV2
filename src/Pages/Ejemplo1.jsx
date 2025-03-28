import React from 'react'
import '../Styles/Ejemplo.css'
import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import '../Styles/Fundamentos.css'
import { FaRegClipboard, FaClipboardCheck } from "react-icons/fa";
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Ejemplo1 = () => {

  const codeE1 = `section .data
    mensaje db "Hola, mundo!", 0xA  ; Mensaje con salto de línea (0xA representa un salto de línea (\n en ASCII).)
                                    ;msg db "Hola, mundo!", 10  ; Mensaje con salto de línea
    len equ $ - mensaje             ; Longitud del mensaje, $ representa la posición actual en la memoria. 
                                    ;len tendrá la cantidad de bytes del mensaje (incluyendo 0xA).

section .text
    global _start             ; seccion ELF                         

_start:
    ; Llamada al sistema write (syscall número 1 en Linux)
    mov eax, 4       ; syscall número 4 -> sys_write (Carga el número de syscall 4 (sys_write))
    mov ebx, 1       ; File descriptor 1 -> stdout (Elige la salida estándar (stdout), que tiene el descriptor de archivo 1.)
    mov ecx, mensaje ; Dirección del mensaje ( Carga la dirección del mensaje en ecx.)
    mov edx, len     ; Longitud del mensaje ( Carga la longitud del mensaje en edx.)
    int 0x80         ; Llamado a la interrupción de Linux (Llama al kernel de Linux para ejecutar la syscall.)

    ; Llamada al sistema exit (syscall número 1 en Linux)
    mov eax, 1       ; syscall número 1 -> sys_exit ( Carga el número de syscall 1 (sys_exit).)
    xor ebx, ebx     ; Código de salida 0 (Coloca 0 en ebx, indicando que el programa terminó sin errores.)
    int 0x80         ; Llamado a la interrupción de Linux (Llama al kernel de Linux para ejecutar la syscall.)`;

const codeEE1 = `nasm -f elf32 hola.asm -o hola.o`;
const codeEEN1 = `ld -m elf_i386 -s -o hola hola.o`;
const codeEEJ1 = `./hola                     `;


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
      <div className='div-title'>Ejemplo 1 - Hola Mundo!</div>
      <p className='p-c'><strong>Propósito:</strong> Imprimir el mensaje "Hola, mundo!" en la salida estándar y posteriormente finaliza la
        ejecución. </p>
      <div className='div-code'>
        <div className='div-code-title'>
          <p className='p-title-example'>Ejemplo Hola Mundo!</p>
          <button onClick={() => copyToClipBoard(codeE1, 'codeE1')} className='button-copy-code-install'>
            {copiedStates['codeE1'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
            {copiedStates['codeE1'] ? 'Copiado' : 'Copiar'}
          </button>
        </div>
        <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
          padding: '20px',
          border: '10px'
        }}
        >
          {codeE1}
        </SyntaxHighlighter>
      </div>
      <p className='p-c-subtitle'>Ensambaje</p>
      <div className='div-code'>
        <div className='div-code-title'>
          <p className='p-title-example'>hola.asm</p>
          <button onClick={() => copyToClipBoard(codeEE1, 'codeEE1')} className='button-copy-code-install'>
            {copiedStates['codeEE1'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
            {copiedStates['codeEE1'] ? 'Copiado' : 'Copiar'}
          </button>
        </div>
        <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
          padding: '20px',
          border: '10px'
        }}
        >
          {codeEE1}
        </SyntaxHighlighter>
      </div>
      <p className='p-c-subtitle'>Enlazado</p>
      <div className='div-code'>
        <div className='div-code-title'>
          <p className='p-title-example'>hola.asm</p>
          <button onClick={() => copyToClipBoard(codeEEN1, 'codeEEN1')} className='button-copy-code-install'>
            {copiedStates['codeEEN1'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
            {copiedStates['codeEEN1'] ? 'Copiado' : 'Copiar'}
          </button>
        </div>
        <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
          padding: '20px',
          border: '10px'
        }}
        >
          {codeEEN1}
        </SyntaxHighlighter>
      </div>
      <p className='p-c-subtitle'>Enjecución</p>
      <div className='div-code'>
        <div className='div-code-title'>
          <p className='p-title-example'>hola.asm</p>
          <button onClick={() => copyToClipBoard(codeEEJ1, 'codeEEJ1')} className='button-copy-code-install'>
            {copiedStates['codeEEJ1'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
            {copiedStates['codeEEJ1'] ? 'Copiado' : 'Copiar'}
          </button>
        </div>
        <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
          padding: '20px',
          border: '10px'
        }}
        >
          {codeEEJ1}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default Ejemplo1
