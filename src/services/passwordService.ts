export default function generatePass() {
    let password: string = '';
    let passwordLength = 8;

    for (let i: number = 0; i < passwordLength; i++) {
        let randomNum: number = getRandomInt(33, 127)
        let character: string = String.fromCharCode(randomNum);

        password += character
    }

    return password;
}

function getRandomInt(min: number, max: number) {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)

    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}