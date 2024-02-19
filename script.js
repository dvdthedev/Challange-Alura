/*As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"*/


function encripta(str){
    let novaString = '';
    for(let i = 0; i < str.length; i++){
        let letra = str[i]
        switch(letra){
            case 'a':
                novaString += 'ai';
                break
            case 'e':
                novaString += 'enter';
                break
            case 'i':
                novaString += 'imes';
                break
            case 'o':
                novaString += 'ober';
                break
            case 'u':
                novaString += 'ufat';
                break
            default:
                novaString += letra
        }
    } 
    return novaString
}



function desencripta(str){
    str = str.replaceAll('imes', 'i');
    str = str.replaceAll('ai', 'a');
    str = str.replaceAll('ufat', 'u');
    str = str.replaceAll('ober', 'o');
    str = str.replaceAll('enter', 'e');
    return str

}
let newStr = encripta('o rato roeu a roupa do rei de roma!')
console.log(desencripta('pairaibenterns poberr enterncairair enterssenter dentersaifimesober enter tenterr fimesnailimeszaidober enterlenter coberm sufatcenterssober!'))
console.log(desencripta(newStr))    