const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e']

function encrypt (message){
    encryptedMessage = ''
    for (let i in message){
        if (message[i] === ' '){
            encryptedMessage += ' '
        }else{
            for(let j in alphabet){
                if (alphabet[j] === message[i].toLowerCase){
                    let index = j + 5;
                    encryptedMessage += alphabet[index];
                }
            }
        }
    }
    console.log(encryptedMessage);
}

encrypt('I Love Cryptology');