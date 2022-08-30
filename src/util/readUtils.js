const readArray = (reader, count) => {
    let result = [];
    for (let i = 0; i < count; i++) {
        result.push(reader);
    }
    return result;
}

const readMatrix = (reader, x, y) => {
    let result = [];
    for (let i = 0; i < x; i++) {
        let inner = [];
        for (let i = 0; i < y; i++) {
            inner.push(reader);
        }
        result.push(inner);
    }
    return result;
}

const readWideString = (reader, count) => {
    let result = "";
    for (let i = 0; i < count; i++) {
        const byte = reader.ReadBytes(2);
        result = result.concat(byte.toString().split("\x00")[0]);
    }
    return result;
}

module.exports = {
    readArray,
    readMatrix,
    readWideString
}
