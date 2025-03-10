function prompt_positive_number(base) {
    let value, parsedValue;

    do {
        value = prompt(`Entrez un nombre positif en base ${base}`);

        parsedValue = parseInt(value, base); 
    } while (isNaN(parsedValue) || parsedValue <= 0);

    return parsedValue; 
}
