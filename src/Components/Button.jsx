import {useState} from 'react';
import { FaRegClipboard, FaClipboardCheck } from "react-icons/fa";
import '../Styles/Button.css'

const Button = ({code}) => {

    const [copied, setCopied] = useState(false);
    const copyToClipBoard = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <button onClick={copyToClipBoard} className='button-copy-code-install'>
            {copied ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
            {copied ? "Copiado" : "Copiar"}
        </button>
    )
}

export default Button
