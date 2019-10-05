const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // Если буква имеет длинну более 10 символов то вместо недостающих символов добавляем 0.
    let str='';
    for (let i=0, length = expr.length; i<length; i+=10){
        //result.push(expr.substr(i, 10).replace(/10/g,'.').replace(/11/g,'-').replace(/00/g,'').replace(/\*{10}/, ' '));
        let letter = expr.substr(i, 10).replace(/10/g,'.').replace(/11/g,'-').replace(/00/g,'').replace(/\*{10}/, ' ');
        letter === ' ' ? str+=letter : str+=MORSE_TABLE[letter];
    }
    return str;
}
module.exports = {
    decode
}
