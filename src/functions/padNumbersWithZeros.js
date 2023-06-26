function padNumberWithZeros(number, desiredLength=4) {
    const numberString = number.toString();
    const zerosToAdd = Math.max(0, desiredLength - numberString.length);
    return '0'.repeat(zerosToAdd) + numberString;
}

export default padNumberWithZeros