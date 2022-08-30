const NodeIPC = require('@fynnix/node-easy-ipc');
const binutils = require("binutils");
const readUtils = require("../../util/readUtils");

const readPhysics = () => {

    const m_physics_length = 712;
    const m_physics_buffer = Buffer.alloc(m_physics_length);
    const m_physics = new NodeIPC.FileMapping();
    const FilePhysics_Path = "Local\\acpmf_physics";

    m_physics.createMapping(null, FilePhysics_Path, m_physics_length);
    m_physics.readInto(0, m_physics_length, m_physics_buffer)

    const data = {}
    const reader = new binutils.BinaryReader(m_physics_buffer, 'little')

    data.packetId = reader.ReadInt32();

    data.gas = reader.ReadFloat();
    data.brake = reader.ReadFloat();

    data.fuel = reader.ReadFloat();
    data.gear = reader.ReadUInt32();
    data.rpm = reader.ReadUInt32();

    data.steerAngle = reader.ReadFloat();
    data.speedKmh = reader.ReadFloat();

    data.velocity = readUtils.readArray(reader, 'float', 3);
    data.accG = readUtils.readArray(reader, 'float', 3);

    data.wheelSlip = readUtils.readArray(reader, 'float', 4);
    data.wheelLoad = readUtils.readArray(reader, 'float', 4);
    data.wheelPressure = readUtils.readArray(reader, 'float', 4);
    data.wheelAngularSpeed = readUtils.readArray(reader, 'float', 4);
    data.tyreWear = readUtils.readArray(reader, 'float', 4);
    data.tyreDirtyLevel = readUtils.readArray(reader, 'float', 4);
    data.tyreCoreTemp = readUtils.readArray(reader, 'float', 4);
    data.camberRAD = readUtils.readArray(reader, 'float', 4);
    data.suspensionTravel = readUtils.readArray(reader, 'float', 4);

    data.drs = reader.ReadFloat();
    data.tc = reader.ReadFloat();

    data.heading = reader.ReadFloat();
    data.pitch = reader.ReadFloat();
    data.roll = reader.ReadFloat();

    data.cgHeight = reader.ReadFloat();

    data.carDamage = readUtils.readArray(reader, 'float', 5);

    data.numberOfTyresOut = reader.ReadUInt32();

    data.pitLimiterOn = reader.ReadUInt32();
    data.abs = reader.ReadFloat();

    data.kersCharge = reader.ReadFloat();
    data.kersInput = reader.ReadFloat();

    data.autoshifterOn = reader.ReadUInt32();

    data.rideHeight = readUtils.readArray(reader, 'float', 2);

    data.turboBoost = reader.ReadFloat();

    data.ballast = reader.ReadFloat();
    data.airDensity = reader.ReadFloat();

    data.airTemp = reader.ReadFloat();
    data.roadTemp = reader.ReadFloat();

    data.localAngularVel = readUtils.readArray(reader, 'float', 3);
    data.finalFF = reader.ReadFloat();

    data.performanceMeter = reader.ReadFloat();
    data.engineBrake = reader.ReadUInt32();
    data.ersRecoveryLevel = reader.ReadUInt32();
    data.ersPowerLevel = reader.ReadUInt32();
    data.ersHeatCharging = reader.ReadUInt32();
    data.ersIsCharging = reader.ReadUInt32();
    data.kersCurrentKJ = reader.ReadFloat();
    data.drsAvailable = reader.ReadUInt32();
    data.drsEnabled = reader.ReadUInt32();

    data.brakeTemp = readUtils.readArray(reader, 'float', 4);
    data.clutch = reader.ReadFloat();

    data.tyreTempI = readUtils.readArray(reader, 'float', 4);
    data.tyreTempM = readUtils.readArray(reader, 'float', 4);
    data.tyreTempO = readUtils.readArray(reader, 'float', 4);

    data.isAIControlled = reader.ReadUInt32();

    data.tyreContactPoint = readUtils.readMatrix(reader, 'float', 4, 3);
    data.tyreContactNormal = readUtils.readMatrix(reader, 'float', 4, 3);
    data.tyreContactHeading = readUtils.readMatrix(reader, 'float', 4, 3);

    data.brakeBias = reader.ReadFloat();
    data.localVelocity = readUtils.readArray(reader, 'float', 3);

    data.p2pActivation = reader.ReadUInt32();
    data.p2pStatus = reader.ReadUInt32();

    data.currentMaxRpm = reader.ReadFloat();

    data.mz = readUtils.readArray(reader, 'float', 4);
    data.fx = readUtils.readArray(reader, 'float', 4);
    data.fy = readUtils.readArray(reader, 'float', 4);

    data.slipRatio = readUtils.readArray(reader, 'float', 4);
    data.slipAngle = readUtils.readArray(reader, 'float', 4);

    data.tcinAction = reader.ReadUInt32();
    data.absInAction = reader.ReadUInt32();

    data.suspensionDamage = readUtils.readArray(reader, 'float', 4);
    data.tyreTemp = readUtils.readArray(reader, 'float', 4);

    data.waterTemp = reader.ReadFloat();
    data.brakePressure = readUtils.readArray(reader, 'float', 4);

    data.frontBrakeCompound = reader.ReadUInt32();
    data.rearBrakeCompound = reader.ReadUInt32();
    data.padLife = readUtils.readArray(reader, 'float', 4);
    data.discLife = readUtils.readArray(reader, 'float', 4);

    data.ignitionOn = reader.ReadUInt32();
    data.starterEngineOn = reader.ReadUInt32();
    data.isEngineRunning = reader.ReadUInt32();

    data.kerbVibration = reader.ReadFloat();
    data.slipVibrations = reader.ReadFloat();
    data.gVibrations = reader.ReadFloat();
    data.absVibrations = reader.ReadFloat();

    return data;
}

const readPhysicsAccFiltered = () => {

    const m_physics_length = 712;
    const m_physics_buffer = Buffer.alloc(m_physics_length);
    const m_physics = new NodeIPC.FileMapping();
    const FilePhysics_Path = "Local\\acpmf_physics";

    m_physics.createMapping(null, FilePhysics_Path, m_physics_length);
    m_physics.readInto(0, m_physics_length, m_physics_buffer)

    const data = {}
    const reader = new binutils.BinaryReader(m_physics_buffer, 'little')

    data.packetId = reader.ReadInt32();

    data.gas = reader.ReadFloat();
    data.brake = reader.ReadFloat();

    data.fuel = reader.ReadFloat();
    data.gear = reader.ReadUInt32();
    data.rpm = reader.ReadUInt32();

    data.steerAngle = reader.ReadFloat();
    data.speedKmh = reader.ReadFloat();

    data.velocity = readUtils.readArray(reader, 'float', 3);
    data.accG = readUtils.readArray(reader, 'int', 3);

    data.wheelSlip = readUtils.readArray(reader, 'float', 4);
    readUtils.readArray(reader.ReadFloat(), 4);
    data.wheelPressure = readUtils.readArray(reader, 'float', 4);
    data.wheelAngularSpeed = readUtils.readArray(reader, 'float', 4);
    readUtils.readArray(reader.ReadFloat(), 4);
    readUtils.readArray(reader.ReadFloat(), 4);
    data.tyreCoreTemp = readUtils.readArray(reader, 'float', 4);
    readUtils.readArray(reader.ReadFloat(), 4);
    data.suspensionTravel = readUtils.readArray(reader, 'float', 4);

    data.drs = reader.ReadFloat();
    data.tc = reader.ReadFloat();

    data.heading = reader.ReadFloat();
    data.pitch = reader.ReadFloat();
    data.roll = reader.ReadFloat();

    reader.ReadFloat();

    data.carDamage = readUtils.readArray(reader, 'float', 5);

    data.numberOfTyresOut = reader.ReadUInt32();

    data.pitLimiterOn = reader.ReadUInt32();
    data.abs = reader.ReadFloat();

    reader.ReadFloat();
    reader.ReadFloat();

    data.autoshifterOn = reader.ReadUInt32();

    readUtils.readArray(reader, 'float', 2);

    data.turboBoost = reader.ReadFloat();

    reader.ReadFloat();
    reader.ReadFloat();

    data.airTemp = reader.ReadFloat();
    data.roadTemp = reader.ReadFloat();

    data.localAngularVel = readUtils.readArray(reader, 'float', 3);
    data.finalFF = reader.ReadFloat();

    reader.ReadFloat();
    reader.ReadUInt32();
    reader.ReadUInt32();
    reader.ReadUInt32();
    reader.ReadUInt32();
    reader.ReadUInt32();
    reader.ReadFloat();
    reader.ReadUInt32();
    reader.ReadUInt32();

    data.brakeTemp = readUtils.readArray(reader, 'float', 4);
    data.clutch = reader.ReadFloat();

    readUtils.readArray(reader, 'float', 4);
    readUtils.readArray(reader, 'float', 4);
    readUtils.readArray(reader, 'float', 4);

    data.isAIControlled = reader.ReadUInt32();

    data.tyreContactPoint = readUtils.readMatrix(reader, 'float', 4, 3);
    data.tyreContactNormal = readUtils.readMatrix(reader, 'float', 4, 3);
    data.tyreContactHeading = readUtils.readMatrix(reader, 'float', 4, 3);

    data.brakeBias = reader.ReadFloat();
    data.localVelocity = readUtils.readArray(reader, 'float', 3);

    reader.ReadUInt32();
    reader.ReadUInt32();

    reader.ReadFloat();

    readUtils.readArray(reader, 'float', 4);
    readUtils.readArray(reader, 'float', 4);
    readUtils.readArray(reader, 'float', 4);

    data.slipRatio = readUtils.readArray(reader, 'float', 4);
    data.slipAngle = readUtils.readArray(reader, 'float', 4);

    data.tcinAction = reader.ReadUInt32();
    data.absInAction = reader.ReadUInt32();

    readUtils.readArray(reader, 'float', 4);
    readUtils.readArray(reader, 'float', 4);

    data.waterTemp = reader.ReadFloat();
    data.brakePressure = readUtils.readArray(reader, 'float', 4);

    data.frontBrakeCompound = reader.ReadUInt32();
    data.rearBrakeCompound = reader.ReadUInt32();
    data.padLife = readUtils.readArray(reader, 'float', 4);
    data.discLife = readUtils.readArray(reader, 'float', 4);

    data.ignitionOn = reader.ReadUInt32();
    data.starterEngineOn = reader.ReadUInt32();
    data.isEngineRunning = reader.ReadUInt32();

    data.kerbVibration = reader.ReadFloat();
    data.slipVibrations = reader.ReadFloat();
    data.gVibrations = reader.ReadFloat();
    data.absVibrations = reader.ReadFloat();

    return data;
}

module.exports = {
    readPhysics,
    readPhysicsAccFiltered
}
