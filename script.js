const cim = document.querySelector('h2')
const input = document.querySelector('input#nev')
const button = document.querySelector('button#send')
console.log(cim, input, button)

button.addEventListener('click', OnClick)
function OnClick(){
    cim.innerHTML = `Üdvözöllek a weboldalaom ${input.value}!`;
}
console.log(cim);