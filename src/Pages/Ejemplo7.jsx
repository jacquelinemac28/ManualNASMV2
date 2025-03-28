import React from 'react'
import '../Styles/Ejemplo.css'
import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import '../Styles/Fundamentos.css'
import { FaRegClipboard, FaClipboardCheck } from "react-icons/fa";
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Ejemplo7 = () => {

    const codeE7 =  `section .data
    prompt1 db "Ingrese el primer numero: ", 0
    prompt2 db "Ingrese el segundo numero: ", 0
    prompt3 db "Ingrese la operacion (+, -, *, /): ", 0
    fmt_in_num db "%d", 0
    fmt_in_char db " %c", 0
    fmt_out db "Resultado: %d", 10, 0
    error_msg db "Error: Division por cero", 10, 0

section .bss
    num1 resd 1
    num2 resd 1
    oper resb 1
    result resd 1

section .text
    global main
    extern printf, scanf

main:
    ; Pedir primer número
    push prompt1
    call printf
    add esp, 4

    push num1
    push fmt_in_num
    call scanf
    add esp, 8

    ; Pedir segundo número
    push prompt2
    call printf
    add esp, 4

    push num2
    push fmt_in_num
    call scanf
    add esp, 8

    ; Pedir operación
    push prompt3
    call printf
    add esp, 4

    push oper
    push fmt_in_char
    call scanf
    add esp, 8

    ; Cargar operandos en registros
    mov eax, [num1]  ; Cargar primer número en EAX
    mov ebx, [num2]  ; Cargar segundo número en EBX

    ; Evaluar la operación ingresada
    mov cl, [oper]   
    cmp cl, '+'
    je sumar
    cmp cl, '-'
    je restar
    cmp cl, '*'
    je multiplicar
    cmp cl, '/'
    je dividir
    jmp fin          ; Si no es una operación válida, termina

sumar:
    add eax, ebx
    jmp guardar_resultado

restar:
    sub eax, ebx
    jmp guardar_resultado

multiplicar:
    imul ebx
    jmp guardar_resultado

dividir:
    cmp ebx, 0
    je error_division
    cdq            ; Extender signo en EDX:EAX para división
    idiv ebx
    jmp guardar_resultado

error_division:
    push error_msg
    call printf
    add esp, 4
    jmp fin

guardar_resultado:
    mov [result], eax

    ; Imprimir resultado
    push dword [result]
    push fmt_out
    call printf
    add esp, 8

fin:
    xor eax, eax
    ret
`;
    const codeEE7 =  `nasm -f elf32 calculadora.asm -o calculadora.o`;
    const codeEEN7 =  `gcc -m32 calculadora.o -o calculadora -no-pie`;
    const codeEEJ7 =  `./calculadora                        `;

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
      <div className='div-title'>Ejemplo 1 GCC - Calculadora</div>
      <p className='p-c'><strong>Propósito:</strong>  Este programa en ensamblador implementa una calculadora básica que solicita al
usuario ingresar dos números enteros y una operación aritmética (+, -, *, /). Luego, realiza la
operación correspondiente y muestra el resultado en pantalla. En caso de una división por cero, se
muestra un mensaje de error. El programa utiliza funciones de la biblioteca estándar de C para la
entrada y salida de datos.
       </p>
                        <div className='div-code'>
                            <div className='div-code-title'>
                                <p className='p-title-example'>Ejemplo Calculadora</p>
                                <button onClick={() => copyToClipBoard(codeE7, 'codeE7')} className='button-copy-code-install'>
                                    {copiedStates['codeE7'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                                    {copiedStates['codeE7'] ? 'Copiado' : 'Copiar'}
                                </button>
                            </div>
                            <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                                padding: '20px',
                                border: '10px'
                            }}
                            >
                                {codeE7}
                            </SyntaxHighlighter>
                        </div>
                        <p className='p-c-subtitle'>Ensambaje</p>
                        <div className='div-code'>
                            <div className='div-code-title'>
                                <p className='p-title-example'>calculadora.asm</p>
                                <button onClick={() => copyToClipBoard(codeEE7, 'codeEE7')} className='button-copy-code-install'>
                                    {copiedStates['codeEE7'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                                    {copiedStates['codeEE7'] ? 'Copiado' : 'Copiar'}
                                </button>
                            </div>
                            <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                                padding: '20px',
                                border: '10px'
                            }}
                            >
                                {codeEE7}
                            </SyntaxHighlighter>
                        </div>
                        <p className='p-c-subtitle'>Enlazado</p>
                        <div className='div-code'>
                            <div className='div-code-title'>
                                <p className='p-title-example'>calculadora.asm</p>
                                <button onClick={() => copyToClipBoard(codeEEN7, 'codeEEN7')} className='button-copy-code-install'>
                                    {copiedStates['codeEEN7'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                                    {copiedStates['codeEEN7'] ? 'Copiado' : 'Copiar'}
                                </button>
                            </div>
                            <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                                padding: '20px',
                                border: '10px'
                            }}
                            >
                                {codeEEN7}
                            </SyntaxHighlighter>
                        </div>
                        <p className='p-c-subtitle'>Enjecución</p>
                        <div className='div-code'>
                            <div className='div-code-title'>
                                <p className='p-title-example'>calculadora.asm</p>
                                <button onClick={() => copyToClipBoard(codeEEJ7, 'codeEEJ7')} className='button-copy-code-install'>
                                    {copiedStates['codeEEJ7'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                                    {copiedStates['codeEEJ7'] ? 'Copiado' : 'Copiar'}
                                </button>
                            </div>
                            <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                                padding: '20px',
                                border: '10px'
                            }}
                            >
                                {codeEEJ7}
                            </SyntaxHighlighter>
                        </div>
    </div>
  )
}

export default Ejemplo7
