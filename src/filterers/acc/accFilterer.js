const {readAllAccFiltered} = require("../../readers/ac/reader");

const filterAccData = () => {
    const data = readAllAccFiltered();
    const filteredAndStructured = {
        timingAndSession: {
            flags: {
                globalYellow: data.graphics.globalYellow,
                globalYellow1: data.graphics.globalYellow1,
                globalYellow2: data.graphics.globalYellow2,
                globalYellow3: data.graphics.globalYellow3,
                globalWhite: data.graphics.globalWhite,
                globalGreen: data.graphics.globalGreen,
                globalChequered: data.graphics.globalChequered,
                globalRed: data.graphics.globalRed,
            },
            session: {
                laps: data.graphics.completedLaps,
                position: data.graphics.position,
                sessionTimeLeft: data.graphics.sessionTimeLeft,
                distanceTraveled: data.graphics.distanceTraveled,
                clock: data.graphics.clock,
                PitWindowStart: data.graphics.PitWindowStart,
                PitWindowEnd: data.graphics.PitWindowEnd,
                driverStintTotalTimeLeft: data.graphics.driverStintTotalTimeLeft,
                driverStintTimeLeft: data.graphics.driverStintTimeLeft,
            },
            stringTimings: {
                currentTime: data.graphics.currentTime,
                lastTime: data.graphics.lastTime,
                bestTime: data.graphics.bestTime,
                split: data.graphics.split,
                deltaLapTime: data.graphics.deltaLapTime,
                estimatedLapTime: data.graphics.estimatedLapTime,
            },
            milliTimings: {
                lastSectorTime: data.graphics.lastSectorTime,
                iCurrentTime: data.graphics.PitWindowEnd,
                iLastTime: data.graphics.iLastTime,
                iBestTime: data.graphics.iBestTime,
                iDeltaLapTime: data.graphics.iDeltaLapTime,
                iEstimatedLapTime: data.graphics.iEstimatedLapTime,
                iSplit: data.graphics.iSplit,
                gapAhead: data.graphics.gapAhead,
                gapBehind: data.graphics.gapBehind,
                isValidLap: data.graphics.isValidLap,
            }
        },
        carLocations: {
            activeCars: data.graphics.activeCars,
            carCoordinates: data.graphics.carCoordinates,
            playerCar: data.graphics.playerCarId,
            carId: data.graphics.carId
        },
        track: {
            track: data.physics.track,
            airTemp: data.physics.airTemp,
            roadTemp: data.physics.roadTemp,
            surfaceGrip: data.graphics.surfaceGrip,
            windSpeed: data.graphics.windSpeed,
            windDirection: data.graphics.windDirection,
            trackGripStatus: data.graphics.trackGripStatus,
            rainIntensity: data.graphics.rainIntensity,
            rainIntensityIn10min: data.graphics.rainIntensityIn10min,
            rainIntensityIn30min: data.graphics.rainIntensityIn30min,
        },
        player: {
            penaltyTime: data.graphics.penaltyTime,
            mandatoryPitDone: data.graphics.mandatoryPitDone
        },
        car: {
            info: {
                tyres: data.graphics.tyreCompund,
                tc: data.graphics.tc,
                tcCut: data.graphics.tcCut,
                engineMap: data.graphics.engineMap,
                abs: data.graphics.abs,
                fuelXLap: data.graphics.fuelXLap,
                rainLights: data.graphics.rainLights,
                flashingLights: data.graphics.flashingLights,
                lightsStage: data.graphics.lightsStage,
                exhaustTemperature: data.graphics.exhaustTemperature,
                wiperLV: data.graphics.wiperLV,
                usedFuel: data.graphics.usedFuel,
                fuelEstimatedLaps: data.graphics.fuelEstimatedLaps,
                directionLightsLeft: data.graphics.directionLightsLeft,
                directionLightsRight: data.graphics.directionLightsRight,
                currentTyreSet: data.graphics.currentTyreSet,
                carDamage: data.graphics.carDamage,
                tc: data.physics.tc,
                abs: data.physics.abs,
                pitLimiterOn: data.physics.pitLimiterOn,
                turboBoost: data.physics.turboBoost,
                brakeBias: data.physics.brakeBias,
            },
            inputs: {
                gas: data.physics.gas,
                brake: data.physics.brake,
                fuel: data.physics.fuel,
                gear: data.physics.gear,
                rpm: data.physics.rpm,
                steerAngle: data.physics.steerAngle,
                speedKmh: data.physics.speedKmh,
            },
            dynamics: {
                accG: data.physics.accG,
                velocity: data.physics.velocity,
                heading: data.physics.heading,
                pitch: data.physics.pitch,
                roll: data.physics.roll,
                localAngularVel: data.physics.localAngularVel,
                localVelocity: data.physics.localVelocity,
            },
            wheels: {
                wheelSlip: data.physics.wheelSlip,
                slipRatio: data.physics.slipRatio,
                slipAngle: data.physics.slipAngle,
                wheelPressure: data.physics.wheelPressure,
                wheelAngularSpeed: data.physics.wheelAngularSpeed,
                tyreCoreTemp: data.physics.tyreCoreTemp,
                tyreContactPoint: data.physics.tyreContactPoint,
                tyreContactNormal: data.physics.tyreContactNormal,
                tyreContactHeading: data.physics.tyreContactHeading,
            },
            brakes: {
                brakeTemp: data.physics.brakeTemp,
                frontBrakeCompound: data.physics.frontBrakeCompound,
                rearBrakeCompound: data.physics.rearBrakeCompound,
                padLife: data.physics.padLife,
                discLife: data.physics.discLife,
            },
            suspension: {
                suspensionTravel: data.physics.suspensionTravel,
            },
        }
    }
    return filteredAndStructured;
}

module.exports = {
    filterAccData,
}
