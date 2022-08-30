const NodeIPC = require('@fynnix/node-easy-ipc');
const binutils = require("binutils");
const readUtils = require("../../util/readUtils");

const readGraphics = () => {

    const m_graphics_length = 1580;
    const m_graphics_buffer = Buffer.alloc(m_graphics_length);
    const m_graphics = new NodeIPC.FileMapping();
    const FileGraphics_Path = "Local\\acpmf_graphics";

    m_graphics.createMapping(null, FileGraphics_Path, m_graphics_length);
    m_graphics.readInto(0, m_graphics_length, m_graphics_buffer);

    let data = {};
    const reader = new binutils.BinaryReader(m_graphics_buffer, 'little');

    data.packetId = reader.ReadUInt32();

    data.acc_status = reader.ReadUInt32();
    data.acc_session_type = reader.ReadUInt32();

    data.currentTime = readUtils.readWideString(reader, 15);
    data.lastTime = readUtils.readWideString(reader, 15);
    data.bestTime = readUtils.readWideString(reader, 15);
    data.split = readUtils.readWideString(reader, 15);

    data.completedLaps = reader.ReadUInt32();
    data.position = reader.ReadUInt32();
    data.iCurrentTime = reader.ReadUInt32();
    data.iLastTime = reader.ReadUInt32();
    data.iBestTime = reader.ReadUInt32();

    data.sessionTimeLeft = reader.ReadFloat();
    data.distanceTraveled = reader.ReadFloat();

    data.isInPit = reader.ReadUInt32();
    data.currentSectorIndex = reader.ReadUInt32();
    data.lastSectorTime = reader.ReadUInt32();
    data.numberOfLaps = reader.ReadUInt32();

    data.tyreCompund = readUtils.readWideString(reader, 34);

    data.replayTimeMultiplier = reader.ReadFloat();

    data.normalizedCarPosition = reader.ReadFloat();

    data.activeCars = reader.ReadUInt32();

    data.carCoordinates = readUtils.readMatrix(reader, 'float', 60, 3);

    data.carId = readUtils.readArray(reader, 'int', 60);
    data.playerCarId = reader.ReadUInt32();

    data.penaltyTime = reader.ReadFloat();

    data.flag = reader.ReadUInt32();
    data.penalty = reader.ReadUInt32();

    data.idealLineOn = reader.ReadUInt32();

    data.isInPitLane = reader.ReadUInt32();

    data.surfaceGrip = reader.ReadFloat();

    data.mandatoryPitDone = reader.ReadUInt32();

    data.windSpeed = reader.ReadFloat();
    data.windDirection = reader.ReadFloat();

    data.isSetupMenuVisible = reader.ReadUInt32();

    data.mainDisplayIndex = reader.ReadUInt32();
    data.secondaryDisplyIndex = reader.ReadUInt32();
    data.tc = reader.ReadUInt32();
    data.tcCut = reader.ReadUInt32();
    data.engineMap = reader.ReadUInt32();
    data.abs = reader.ReadUInt32();
    data.fuelXLap = reader.ReadFloat();
    data.rainLights = reader.ReadUInt32();
    data.flashingLights = reader.ReadUInt32();
    data.lightsStage = reader.ReadUInt32();
    data.exhaustTemperature = reader.ReadFloat();
    data.wiperLV = reader.ReadUInt32();

    data.driverStintTotalTimeLeft = reader.ReadUInt32();
    data.driverStintTimeLeft = reader.ReadUInt32();

    data.rainTyres = reader.ReadUInt32();

    data.sessionIndex = reader.ReadUInt32();

    data.usedFuel = reader.ReadFloat();

    data.deltaLapTime = readUtils.readWideString(reader, 15);
    data.iDeltaLapTime = reader.ReadUInt32();
    data.estimatedLapTime = readUtils.readWideString(reader, 15);
    data.iEstimatedLapTime = reader.ReadUInt32();
    data.isDeltaPositive = reader.ReadUInt32();
    data.iSplit = reader.ReadUInt32();
    data.isValidLap = reader.ReadUInt32();

    data.fuelEstimatedLaps = reader.ReadFloat();

    data.trackStatus = readUtils.readWideString(reader, 33);

    data.missingMandatoryPits = reader.ReadUInt32();

    data.clock = reader.ReadFloat();

    data.directionLightsLeft = reader.ReadUInt32();
    data.directionLightsRight = reader.ReadUInt32();

    data.globalYellow = reader.ReadUInt32();
    data.globalYellow1 = reader.ReadUInt32();
    data.globalYellow2 = reader.ReadUInt32();
    data.globalYellow3 = reader.ReadUInt32();
    data.globalWhite = reader.ReadUInt32();
    data.globalGreen = reader.ReadUInt32();
    data.globalChequered = reader.ReadUInt32();
    data.globalRed = reader.ReadUInt32()

    data.mfdTyreSet = reader.ReadUInt32();
    data.mfdFuelToAdd = reader.ReadFloat();
    data.mfdTyrePressureLF = reader.ReadFloat();
    data.mfdTyrePressureRF = reader.ReadFloat();
    data.mfdTyrePressureLR = reader.ReadFloat();
    data.mfdTyrePressureRR = reader.ReadFloat();

    data.trackGripStatus = reader.ReadUInt32()
    data.rainIntensity = reader.ReadUInt32();
    data.rainIntensityIn10min = reader.ReadUInt32();
    data.rainIntensityIn30min = reader.ReadUInt32();

    data.currentTyreSet = reader.ReadUInt32();
    data.strategyTyreSet = reader.ReadUInt32();
    data.gapAhead = reader.ReadUInt32();
    data.gapBehind = reader.ReadUInt32();

    return data;
}

const readGraphicsAccFiltered = () => {

    const m_graphics_length = 1580;
    const m_graphics_buffer = Buffer.alloc(m_graphics_length);
    const m_graphics = new NodeIPC.FileMapping();
    const FileGraphics_Path = "Local\\acpmf_graphics";

    m_graphics.createMapping(null, FileGraphics_Path, m_graphics_length);
    m_graphics.readInto(0, m_graphics_length, m_graphics_buffer);

    let data = {};
    const reader = new binutils.BinaryReader(m_graphics_buffer, 'little');

    data.packetId = reader.ReadUInt32();

    data.acc_status = reader.ReadUInt32();
    data.acc_session_type = reader.ReadUInt32();

    data.currentTime = readUtils.readWideString(reader, 15);
    data.lastTime = readUtils.readWideString(reader, 15);
    data.bestTime = readUtils.readWideString(reader, 15);
    data.split = readUtils.readWideString(reader, 15);

    data.completedLaps = reader.ReadUInt32();
    data.position = reader.ReadUInt32();
    data.iCurrentTime = reader.ReadUInt32();
    data.iLastTime = reader.ReadUInt32();
    data.iBestTime = reader.ReadUInt32();

    data.sessionTimeLeft = reader.ReadFloat();
    data.distanceTraveled = reader.ReadFloat();

    data.isInPit = reader.ReadUInt32();
    data.currentSectorIndex = reader.ReadUInt32();
    data.lastSectorTime = reader.ReadUInt32();
    data.numberOfLaps = reader.ReadUInt32();

    data.tyreCompund = readUtils.readWideString(reader, 34);

    reader.ReadFloat();

    data.normalizedCarPosition = reader.ReadFloat();

    data.activeCars = reader.ReadUInt32();
    data.carCoordinates = readUtils.readMatrix(reader, 'float', 60, 3);
    data.carId = readUtils.readArray(reader, 'int', 60);
    data.playerCarId = reader.ReadUInt32();

    data.penaltyTime = reader.ReadFloat();

    data.flag = reader.ReadUInt32();
    data.penalty = reader.ReadUInt32();

    data.idealLineOn = reader.ReadUInt32();

    data.isInPitLane = reader.ReadUInt32();

    data.surfaceGrip = reader.ReadFloat();

    data.mandatoryPitDone = reader.ReadUInt32();

    data.windSpeed = reader.ReadFloat();
    data.windDirection = reader.ReadFloat();

    data.isSetupMenuVisible = reader.ReadUInt32();

    data.mainDisplayIndex = reader.ReadUInt32();
    data.secondaryDisplyIndex = reader.ReadUInt32();
    data.tc = reader.ReadUInt32();
    data.tcCut = reader.ReadUInt32();
    data.engineMap = reader.ReadUInt32();
    data.abs = reader.ReadUInt32();
    data.fuelXLap = reader.ReadFloat();
    data.rainLights = reader.ReadUInt32();
    data.flashingLights = reader.ReadUInt32();
    data.lightsStage = reader.ReadUInt32();
    data.exhaustTemperature = reader.ReadFloat();
    data.wiperLV = reader.ReadUInt32();

    data.driverStintTotalTimeLeft = reader.ReadUInt32();
    data.driverStintTimeLeft = reader.ReadUInt32();

    data.rainTyres = reader.ReadUInt32();

    data.sessionIndex = reader.ReadUInt32();

    data.usedFuel = reader.ReadFloat();

    data.deltaLapTime = readUtils.readWideString(reader, 15);
    data.iDeltaLapTime = reader.ReadUInt32();
    data.estimatedLapTime = readUtils.readWideString(reader, 15);
    data.iEstimatedLapTime = reader.ReadUInt32();
    data.isDeltaPositive = reader.ReadUInt32();
    data.iSplit = reader.ReadUInt32();
    data.isValidLap = reader.ReadUInt32();

    data.fuelEstimatedLaps = reader.ReadFloat();

    data.trackStatus = readUtils.readWideString(reader, 33);

    data.missingMandatoryPits = reader.ReadUInt32();

    data.clock = reader.ReadFloat();

    data.directionLightsLeft = reader.ReadUInt32();
    data.directionLightsRight = reader.ReadUInt32();

    data.globalYellow = reader.ReadUInt32();
    data.globalYellow1 = reader.ReadUInt32();
    data.globalYellow2 = reader.ReadUInt32();
    data.globalYellow3 = reader.ReadUInt32();
    data.globalWhite = reader.ReadUInt32();
    data.globalGreen = reader.ReadUInt32();
    data.globalChequered = reader.ReadUInt32();
    data.globalRed = reader.ReadUInt32();

    data.mfdTyreSet = reader.ReadUInt32();
    data.mfdFuelToAdd = reader.ReadFloat();
    data.mfdTyrePressureLF = reader.ReadFloat();
    data.mfdTyrePressureRF = reader.ReadFloat();
    data.mfdTyrePressureLR = reader.ReadFloat();
    data.mfdTyrePressureRR = reader.ReadFloat();

    data.trackGripStatus = reader.ReadUInt32()
    data.rainIntensity = reader.ReadUInt32();
    data.rainIntensityIn10min = reader.ReadUInt32();
    data.rainIntensityIn30min = reader.ReadUInt32();

    data.currentTyreSet = reader.ReadUInt32();
    data.strategyTyreSet = reader.ReadUInt32();
    data.gapAhead = reader.ReadUInt32();
    data.gapBehind = reader.ReadUInt32();

    return data;
}

module.exports = {
    readGraphics,
    readGraphicsAccFiltered
}
