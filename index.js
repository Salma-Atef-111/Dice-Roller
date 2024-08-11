function rollDice(){
    const numOfDice = document.getElementById('numOfDice').value ;
    const diceResult = document.getElementById("diceResult");
    const diceImges = document.getElementById("diceImges");

    const values = [];
    const images = [];

    for(let i = 0 ; i < numOfDice ; i++){
        const value = Math.floor(Math.random() * 6 ) + 1 ;
        values.push(value);
        images.push(`<img src="img/${value}.png">`);

    }
    diceResult.textContent = `Dice : ${values.join(', ')}`;
    diceImges.innerHTML = images.join('');
}