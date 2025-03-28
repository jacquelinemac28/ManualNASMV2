import React from 'react'
import '../Styles/Ejemplo.css'
import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import '../Styles/Fundamentos.css'
import { FaRegClipboard, FaClipboardCheck } from "react-icons/fa";
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Ejemplo6 = () => {

    const codeE6 =  `section .data
 
   ; Mensajes
 
   msg1     db    10,'-Calculadora-',10,0
   lmsg1    equ      $ - msg1
 
   msg2     db    10,'Numero 1: ',0
   lmsg2    equ      $ - msg2
 
   msg3     db    'Numero 2: ',0
   lmsg3    equ      $ - msg3
 
   msg4     db    10,'1. Sumar',10,0
   lmsg4    equ      $ - msg4
 
   msg5     db    '2. Restar',10,0
   lmsg5    equ      $ - msg5
 
   msg6     db    '3. Multiplicar',10,0
   lmsg6    equ      $ - msg6
 
   msg7     db    '4. Dividir',10,0
   lmsg7    equ      $ - msg7
 
   msg8     db    'Operacion: ',0
   lmsg8    equ      $ - msg8
 
   msg9     db    10,'Resultado: ',0
   lmsg9    equ      $ - msg9
 
   msg10    db    10,'Opcion Invalida',10,0
   lmsg10      equ      $ - msg10
 
   nlinea      db    10,10,0
   lnlinea     equ      $ - nlinea
 
section .bss
 
   ; Espacios en la memoria reservados 
 
   opcion:     resb  2
   num1:       resb  2
   num2:       resb  2
   resultado:  resb  2
 
section .text
 
   global _start
 
_start:
 
   ; Imprimimos en pantalla el mensaje 1
   mov eax, 4
   mov ebx, 1
   mov ecx, msg1
   mov edx, lmsg1
   int 80h
 
   ; Imprimimos en pantalla el mensaje 2
   mov eax, 4
   mov ebx, 1
   mov ecx, msg2
   mov edx, lmsg2
   int 80h
 
   ; Obtenemos el numero 1
   mov eax, 3
   mov ebx, 0
   mov ecx, num1
   mov edx, 2
   int 80h
 
   ; Imprimimos en pantalla el mensaje 3
   mov eax, 4
   mov ebx, 1
   mov ecx, msg3
   mov edx, lmsg3
   int 80h
 
   ; Obtenemos el numero 2
   mov eax, 3
   mov ebx, 0
   mov ecx, num2
   mov edx, 2
   int 80h
 
   ; Imprimimos en pantalla el mensaje 4
   mov eax, 4
   mov ebx, 1
   mov ecx, msg4
   mov edx, lmsg4
   int 80h
 
   ; Imprimimos en pantalla el mensaje 5
   mov eax, 4
   mov ebx, 1
   mov ecx, msg5
   mov edx, lmsg5
   int 80h
 
   ; Imprimimos en pantalla el mensaje 6
   mov eax, 4
   mov ebx, 1
   mov ecx, msg6
   mov edx, lmsg6
   int 80h
 
   ; Imprimimos en pantalla el mensaje 7
   mov eax, 4
   mov ebx, 1
   mov ecx, msg7
   mov edx, lmsg7
   int 80h
 
   ; Print on screen the message 8
   mov eax, 4
   mov ebx, 1
   mov ecx, msg8
   mov edx, lmsg8
   int 80h
 
   ; Obtenemos la opcion seleccionada por el usuario
   mov ebx, 0
   mov ecx, opcion
   mov edx, 2
   mov eax, 3
   int 80h
 
   mov ah, [opcion]  ; Movemos la opcion seleccionada a el registro AH
   sub ah, '0'    ; Convertimos el valor ingresado de ascii a decimal
 
   ; Comparamos el valor ingresado por el usuario para saber que operacion realizar.
   ; JE = Jump if equal = Saltamos si el valor comparado es igual
 
   cmp ah, 1
   je sumar
 
   cmp ah, 2
   je restar
 
   cmp ah, 3
   je multiplicar
 
   cmp ah, 4
   je dividir
 
   ; Mensaje de error
   ; la ejecucion del programa
   mov eax, 4
   mov ebx, 1
   mov ecx, msg10
   mov edx, lmsg10
   int 80h
 
   jmp salir
 
sumar:
   ; Movemos los numeros ingresados a los registro AL y BL
   mov al, [num1]
   mov bl, [num2]
 
   ; Convertimos los valores ingresados de ascii a decimal
   sub al, '0'
   sub bl, '0'
 
   ; Sumamos el registro AL y BL
   add al, bl
 
   ; Convertimos el resultado de la suma de decimal a ascii
   add al, '0'
 
   ; Movemos el resultado a un espacio reservado en la memoria
   mov [resultado], al
 
   ; Imprimimos en pantalla el mensaje 9
   mov eax, 4
   mov ebx, 1
   mov ecx, msg9
   mov edx, lmsg9
   int 80h
 
   ; Imprimimos en pantalla el resultado
   mov eax, 4
   mov ebx, 1
   mov ecx, resultado
   mov edx, 2
   int 80h
 
   ; Finalizamos el programa
   jmp salir
 
restar:
   ; Movemos los numeros ingresados a los registro AL y BL
   mov al, [num1]
   mov bl, [num2]
 
   ; Convertimos los valores ingresados de ascii a decimal
   sub al, '0'
   sub bl, '0'
 
   ; Restamos el registro AL y BL
   sub al, bl
 
   ; Convertimos el resultado de la resta de decimal a ascii
   add al, '0'
 
   ; Movemos el resultado a un espacio reservado en la memoria
   mov [resultado], al
 
   ; Imprimimos en pantalla el mensaje 9
   mov eax, 4
   mov ebx, 1
   mov ecx, msg9
   mov edx, lmsg9
   int 80h
 
   ; Imprimimos en pantalla el resultado
   mov eax, 4
   mov ebx, 1
   mov ecx, resultado
   mov edx, 1
   int 80h
 
   ; Finalizamos el programa
   jmp salir
 
multiplicar:
 
   ; Movemos los numeros ingresados a los registro AL y BL
   mov al, [num1]
   mov bl, [num2]
 
   ; Convertimos los valores ingresados de ascii a decimal
   sub al, '0'
   sub bl, '0'
 
   ; Multiplicamos. AX = AL X BL
   mul bl
 
   ; Convertimos el resultado de la resta de decimal a ascii
   add ax, '0'
 
   ; Movemos el resultado a un espacio reservado en la memoria
   mov [resultado], ax
 
   ; Imprimimos en pantalla el mensaje 9
   mov eax, 4
   mov ebx, 1
   mov ecx, msg9
   mov edx, lmsg9
   int 80h
 
   ; Imprimimos en pantalla el resultado
   mov eax, 4
   mov ebx, 1
   mov ecx, resultado
   mov edx, 1
   int 80h
 
   ; Finalizamos el programa
   jmp salir
 
dividir:
 
   ; Movemos los numeros ingresados a los registro AL y BL
   mov al, [num1]
   mov bl, [num2]
 
   ; Igualamos a cero los registros DX y AH
   mov dx, 0
   mov ah, 0
 
   ; Convertimos los valores ingresados de ascii a decimal
   sub al, '0'
   sub bl, '0'
 
   ; Division. AL = AX / BL. AX = AH:AL
   div bl
 
   ; Convertimos el resultado de la resta de decimal a ascii
   add ax, '0'
 
   ; Movemos el resultado a un espacio reservado en la memoria
   mov [resultado], ax
 
   ; Print on screen the message 9
   mov eax, 4
   mov ebx, 1
   mov ecx, msg9
   mov edx, lmsg9
   int 80h
 
   ; Imprimimos en pantalla el resultado
   mov eax, 4
   mov ebx, 1
   mov ecx, resultado
   mov edx, 1
   int 80h
 
   ; Finalizamos el programa
   jmp salir
 
salir:
   ; Imprimimos en pantalla dos nuevas lineas
   mov eax, 4
   mov ebx, 1
   mov ecx, nlinea
   mov edx, lnlinea
   int 80h
 
   ; Finalizamos el programa
   mov eax, 1
   mov ebx, 0
   int 80h `;
    const codeEE6 =  `nasm -f elf32 calculadora.asm -o calculadora.o `;
    const codeEEN6 =  `ld -m elf_i386 -s -o calculadora calculadora.o `;
    const codeEEJ6 =  `./calculadora                  `;

    
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
      <div className='div-title'>Ejemplo 6 - Calculadora</div>
      <p className='p-c'><strong>Propósito:</strong>  El programa es una calculadora básica que solicita al usuario dos números de un solo
dígito y una operación (suma, resta, multiplicación o división). Realizar la operación seleccionada
y mostrar el resultado en formato ASCII. Manejar opciones inválidas mostrando un mensaje de
error. Terminar la ejecución de manera ordenada.
 </p>
                  <div className='div-code'>
                      <div className='div-code-title'>
                          <p className='p-title-example'>Ejemplo Calculadora</p>
                          <button onClick={() => copyToClipBoard(codeE6, 'codeE6')} className='button-copy-code-install'>
                              {copiedStates['codeE6'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                              {copiedStates['codeE6'] ? 'Copiado' : 'Copiar'}
                          </button>
                      </div>
                      <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                          padding: '20px',
                          border: '10px'
                      }}
                      >
                          {codeE6}
                      </SyntaxHighlighter>
                  </div>
                  <p className='p-c-subtitle'>Ensambaje</p>
                  <div className='div-code'>
                      <div className='div-code-title'>
                          <p className='p-title-example'>calculadora.asm</p>
                          <button onClick={() => copyToClipBoard(codeEE6, 'codeEE6')} className='button-copy-code-install'>
                              {copiedStates['codeEE6'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                              {copiedStates['codeEE6'] ? 'Copiado' : 'Copiar'}
                          </button>
                      </div>
                      <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                          padding: '20px',
                          border: '10px'
                      }}
                      >
                          {codeEE6}
                      </SyntaxHighlighter>
                  </div>
                  <p className='p-c-subtitle'>Enlazado</p>
                  <div className='div-code'>
                      <div className='div-code-title'>
                          <p className='p-title-example'>calculadora.asm</p>
                          <button onClick={() => copyToClipBoard(codeEEN6, 'codeEEN6')} className='button-copy-code-install'>
                              {copiedStates['codeEEN6'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                              {copiedStates['codeEEN6'] ? 'Copiado' : 'Copiar'}
                          </button>
                      </div>
                      <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                          padding: '20px',
                          border: '10px'
                      }}
                      >
                          {codeEEN6}
                      </SyntaxHighlighter>
                  </div>
                  <p className='p-c-subtitle'>Enjecución</p>
                  <div className='div-code'>
                      <div className='div-code-title'>
                          <p className='p-title-example'>calculadora.asm</p>
                          <button onClick={() => copyToClipBoard(codeEEJ6, 'codeEEJ6')} className='button-copy-code-install'>
                              {copiedStates['codeEEJ6'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                              {copiedStates['codeEEJ6'] ? 'Copiado' : 'Copiar'}
                          </button>
                      </div>
                      <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                          padding: '20px',
                          border: '10px'
                      }}
                      >
                          {codeEEJ6}
                      </SyntaxHighlighter>
                  </div>
    </div>
  )
}

export default Ejemplo6
