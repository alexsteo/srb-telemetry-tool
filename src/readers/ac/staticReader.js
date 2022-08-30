const NodeIPC = require('@fynnix/node-easy-ipc');
const binutils = require("binutils");
const readUtils = require("../../util/readUtils");

const readStatic = () => {

    const m_static_length = 1580;
    const m_static_buffer = Buffer.alloc(m_static_length);
    const m_static = new NodeIPC.FileMapping();
    const FileStatic_Path = "Local\\acpmf_static";

    m_static.createMapping(null, FileStatic_Path, m_static_length);
    m_static.readInto(0, m_static_length, m_static_buffer);

    let data = {};
    const reader = new binutils.BinaryReader(m_static_buffer, 'little');

    data.packetId = reader.ReadUInt32();

    data.smVersion = readUtils.readWideString(reader, 15);
    data.acVersion = readUtils.readWideString(reader, 15);

    data.numberOfSessions = reader.ReadUInt32();
    data.numCars = reader.ReadUInt32();

    data.carModel = readUtils.readWideString(reader, 33);
    data.track = readUtils.readWideString(reader, 33);
    data.playerName = readUtils.readWideString(reader, 33);
    data.playerSurname = readUtils.readWideString(reader, 33);
    data.playerNick = readUtils.readWideString(reader, 33);

    data.sectorCount = reader.ReadUInt32();

    data.maxTorque = reader.ReadFloat();
    data.maxPower = reader.ReadFloat();
    data.maxRpm = reader.ReadUInt32();
    data.maxFuel = reader.ReadFloat();
    data.suspensionMaxTravel = readUtils.readArray(reader.ReadFloat(), 4);
    data.tyreRadius = readUtils.readArray(reader.ReadFloat(), 4);
    data.maxTurboBoost = reader.ReadFloat();
    data.deprecated_1 = reader.ReadFloat();
    data.deprecated_2 = reader.ReadFloat();

    data.penaltiesEnabled = reader.ReadUInt32();

    data.aidFuelRate = reader.ReadFloat();
    data.aidTireRate = reader.ReadFloat();
    data.aidMechanicalDamage = reader.ReadFloat();
    data.allowTyreBlankets = reader.ReadFloat();
    data.aidStability = reader.ReadFloat();
    data.aidAutoclutch = reader.ReadUInt32();
    data.aidAutoBlip = reader.ReadUInt32();

    data.hasDRS = reader.ReadUInt32();
    data.hasERS = reader.ReadUInt32();
    data.hasKERS = reader.ReadUInt32();
    data.kersMaxJ = reader.ReadFloat();
    data.engineBrakeSettingsCount = reader.ReadUInt32();
    data.ersPowerControllerCount = reader.ReadUInt32();

    data.trackSplineLength = reader.ReadFloat();
    data.trackSplineLength = readUtils.readWideString(reader, 34);

    data.ersMaxJ = reader.ReadFloat();

    data.isTimedRace = reader.ReadUInt32();
    data.hasExtraLap = reader.ReadUInt32();

    data.carSkin = readUtils.readWideString(reader, 33);

    data.reversedGridPositions = reader.ReadUInt32();

    data.PitWindowStart = reader.ReadUInt32();
    data.PitWindowEnd = reader.ReadUInt32();
    data.isOnline = reader.ReadUInt32();

    data.dryTyresName = readUtils.readWideString(reader, 33);
    data.wetTyresName = readUtils.readWideString(reader, 33);

    return data;
}

const readStaticAccFiltered = () => {

    const m_static_length = 1580;
    const m_static_buffer = Buffer.alloc(m_static_length);
    const m_static = new NodeIPC.FileMapping();
    const FileStatic_Path = "Local\\acpmf_static";

    m_static.createMapping(null, FileStatic_Path, m_static_length);
    m_static.readInto(0, m_static_length, m_static_buffer);

    let data = {};
    const reader = new binutils.BinaryReader(m_static_buffer, 'little');

    data.packetId = reader.ReadUInt32();

    data.smVersion = readUtils.readWideString(reader, 15);
    data.acVersion = readUtils.readWideString(reader, 15);

    data.numberOfSessions = reader.ReadUInt32();
    data.numCars = reader.ReadUInt32();

    data.carModel = readUtils.readWideString(reader, 33);
    data.track = readUtils.readWideString(reader, 33);
    data.playerName = readUtils.readWideString(reader, 33);
    data.playerSurname = readUtils.readWideString(reader, 33);
    data.playerNick = readUtils.readWideString(reader, 33);

    data.sectorCount = reader.ReadUInt32();

    reader.ReadFloat();
    reader.ReadFloat();
    data.maxRpm = reader.ReadUInt32();
    data.maxFuel = reader.ReadFloat();
    readUtils.readArray(reader.ReadFloat(), 4);
    readUtils.readArray(reader.ReadFloat(), 4);
    reader.ReadFloat();
    reader.ReadFloat();
    reader.ReadFloat();

    data.penaltiesEnabled = reader.ReadUInt32();

    data.aidFuelRate = reader.ReadFloat();
    data.aidTireRate = reader.ReadFloat();
    data.aidMechanicalDamage = reader.ReadFloat();
    data.allowTyreBlankets = reader.ReadFloat();
    data.aidStability = reader.ReadFloat();
    data.aidAutoclutch = reader.ReadUInt32();
    data.aidAutoBlip = reader.ReadUInt32();

    reader.ReadUInt32();
    reader.ReadUInt32();
    reader.ReadUInt32();
    reader.ReadFloat();
    reader.ReadUInt32();
    reader.ReadUInt32();

    reader.ReadFloat();
    readUtils.readWideString(reader, 34);

    reader.ReadFloat();

    reader.ReadUInt32();
    reader.ReadUInt32();

    readUtils.readWideString(reader, 33);

    reader.ReadUInt32();

    data.PitWindowStart = reader.ReadUInt32();
    data.PitWindowEnd = reader.ReadUInt32();
    data.isOnline = reader.ReadUInt32();

    data.dryTyresName = readUtils.readWideString(reader, 33);
    data.wetTyresName = readUtils.readWideString(reader, 33);

    return data;
}

module.exports = {
    readStatic,
    readStaticAccFiltered
}
