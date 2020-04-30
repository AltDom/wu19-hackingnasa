function generateDate(input) {
    let outputArray = [];
    const inputArray = input.split('-')
    outputArray[0] = inputArray[2];
    if (inputArray[1]==='01') {
        outputArray[1] = 'January';
    } else if (inputArray[1]==='02') {
        outputArray[1] = 'February';
    } else if (inputArray[1]==='03') {
        outputArray[1] = 'March';
    } else if (inputArray[1]==='04') {
        outputArray[1] = 'April';
    } else if (inputArray[1]==='05') {
        outputArray[1] = 'May';
    } else if (inputArray[1]==='06') {
        outputArray[1] = 'June';
    } else if (inputArray[1]==='07') {
        outputArray[1] = 'July';
    } else if (inputArray[1]==='08') {
        outputArray[1] = 'August';
    } else if (inputArray[1]==='09') {
        outputArray[1] = 'September';
    } else if (inputArray[1]==='10') {
        outputArray[1] = 'October';
    } else if (inputArray[1]==='11') {
        outputArray[1] = 'November';
    } else {
        outputArray[1] = 'December';
    }
    outputArray[2] = inputArray[0];
    const output = outputArray.join(' ')
    return output;
}

export default generateDate;