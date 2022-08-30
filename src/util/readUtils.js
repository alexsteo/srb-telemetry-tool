const readArray = (reader, type, count) => {
    let result = [];
    for (let i = 0; i < count; i++) {
        type === 'int' ? result.push(reader.ReadUInt32()) : result.push(reader.ReadFloat());
    }
    return result;
}

const readMatrix = (reader, type, x, y) => {
    let result = [];
    for (let i = 0; i < x; i++) {
        let inner = [];
        for (let j = 0; j < y; j++) {
            type === 'int' ? inner.push(reader.ReadUInt32()) : inner.push(reader.ReadFloat());
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
