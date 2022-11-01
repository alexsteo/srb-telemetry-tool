const csvHeader = 'globalYellow,globalYellow1,globalYellow2,globalYellow3,globalWhite,globalGreen,globalChequered,globalRed,laps,position,sessionTimeLeft,distanceTraveled,clock,PitWindowStart,PitWindowEnd,driverStintTotalTimeLeft,driverStintTimeLeft,currentTime,lastTime,bestTime,split,deltaLapTime,estimatedLapTime,lastSectorTime,iCurrentTime,iLastTime,iBestTime,iDeltaLapTime,iEstimatedLapTime,iSplit,gapAhead,gapBehind,isValidLap,activeCars,carCoordinates_1_1,carCoordinates_1_2,carCoordinates_1_3,carCoordinates_2_1,carCoordinates_2_2,carCoordinates_2_3,carCoordinates_3_1,carCoordinates_3_2,carCoordinates_3_3,carCoordinates_4_1,carCoordinates_4_2,carCoordinates_4_3,carCoordinates_5_1,carCoordinates_5_2,carCoordinates_5_3,carCoordinates_6_1,carCoordinates_6_2,carCoordinates_6_3,carCoordinates_7_1,carCoordinates_7_2,carCoordinates_7_3,carCoordinates_8_1,carCoordinates_8_2,carCoordinates_8_3,carCoordinates_9_1,carCoordinates_9_2,carCoordinates_9_3,carCoordinates_10_1,carCoordinates_10_2,carCoordinates_10_3,carCoordinates_11_1,carCoordinates_11_2,carCoordinates_11_3,carCoordinates_12_1,carCoordinates_12_2,carCoordinates_12_3,carCoordinates_13_1,carCoordinates_13_2,carCoordinates_13_3,carCoordinates_14_1,carCoordinates_14_2,carCoordinates_14_3,carCoordinates_15_1,carCoordinates_15_2,carCoordinates_15_3,carCoordinates_16_1,carCoordinates_16_2,carCoordinates_16_3,carCoordinates_17_1,carCoordinates_17_2,carCoordinates_17_3,carCoordinates_18_1,carCoordinates_18_2,carCoordinates_18_3,carCoordinates_19_1,carCoordinates_19_2,carCoordinates_19_3,carCoordinates_20_1,carCoordinates_20_2,carCoordinates_20_3,carCoordinates_21_1,carCoordinates_21_2,carCoordinates_21_3,carCoordinates_22_1,carCoordinates_22_2,carCoordinates_22_3,carCoordinates_23_1,carCoordinates_23_2,carCoordinates_23_3,carCoordinates_24_1,carCoordinates_24_2,carCoordinates_24_3,carCoordinates_25_1,carCoordinates_25_2,carCoordinates_25_3,carCoordinates_26_1,carCoordinates_26_2,carCoordinates_26_3,carCoordinates_27_1,carCoordinates_27_2,carCoordinates_27_3,carCoordinates_28_1,carCoordinates_28_2,carCoordinates_28_3,carCoordinates_29_1,carCoordinates_29_2,carCoordinates_29_3,carCoordinates_30_1,carCoordinates_30_2,carCoordinates_30_3,carCoordinates_31_1,carCoordinates_31_2,carCoordinates_31_3,carCoordinates_32_1,carCoordinates_32_2,carCoordinates_32_3,carCoordinates_33_1,carCoordinates_33_2,carCoordinates_33_3,carCoordinates_34_1,carCoordinates_34_2,carCoordinates_34_3,carCoordinates_35_1,carCoordinates_35_2,carCoordinates_35_3,carCoordinates_36_1,carCoordinates_36_2,carCoordinates_36_3,carCoordinates_37_1,carCoordinates_37_2,carCoordinates_37_3,carCoordinates_38_1,carCoordinates_38_2,carCoordinates_38_3,carCoordinates_39_1,carCoordinates_39_2,carCoordinates_39_3,carCoordinates_40_1,carCoordinates_40_2,carCoordinates_40_3,carCoordinates_41_1,carCoordinates_41_2,carCoordinates_41_3,carCoordinates_42_1,carCoordinates_42_2,carCoordinates_42_3,carCoordinates_43_1,carCoordinates_43_2,carCoordinates_43_3,carCoordinates_44_1,carCoordinates_44_2,carCoordinates_44_3,carCoordinates_45_1,carCoordinates_45_2,carCoordinates_45_3,carCoordinates_46_1,carCoordinates_46_2,carCoordinates_46_3,carCoordinates_47_1,carCoordinates_47_2,carCoordinates_47_3,carCoordinates_48_1,carCoordinates_48_2,carCoordinates_48_3,carCoordinates_49_1,carCoordinates_49_2,carCoordinates_49_3,carCoordinates_50_1,carCoordinates_50_2,carCoordinates_50_3,carCoordinates_51_1,carCoordinates_51_2,carCoordinates_51_3,carCoordinates_52_1,carCoordinates_52_2,carCoordinates_52_3,carCoordinates_53_1,carCoordinates_53_2,carCoordinates_53_3,carCoordinates_54_1,carCoordinates_54_2,carCoordinates_54_3,carCoordinates_55_1,carCoordinates_55_2,carCoordinates_55_3,carCoordinates_56_1,carCoordinates_56_2,carCoordinates_56_3,carCoordinates_57_1,carCoordinates_57_2,carCoordinates_57_3,carCoordinates_58_1,carCoordinates_58_2,carCoordinates_58_3,carCoordinates_59_1,carCoordinates_59_2,carCoordinates_59_3,carCoordinates_60_1,carCoordinates_60_2,carCoordinates_60_3,playerCar,carId_1,carId_2,carId_3,carId_4,carId_5,carId_6,carId_7,carId_8,carId_9,carId_10,carId_11,carId_12,carId_13,carId_14,carId_15,carId_16,carId_17,carId_18,carId_19,carId_20,carId_21,carId_22,carId_23,carId_24,carId_25,carId_26,carId_27,carId_28,carId_29,carId_30,carId_31,carId_32,carId_33,carId_34,carId_35,carId_36,carId_37,carId_38,carId_39,carId_40,carId_41,carId_42,carId_43,carId_44,carId_45,carId_46,carId_47,carId_48,carId_49,carId_50,carId_51,carId_52,carId_53,carId_54,carId_55,carId_56,carId_57,carId_58,carId_59,carId_60,track,airTemp,roadTemp,surfaceGrip,windSpeed,windDirection,trackGripStatus,rainIntensity,rainIntensityIn10min,rainIntensityIn30min,penaltyTime,mandatoryPitDone,tyres,tc,tcCut,engineMap,abs,fuelXLap,rainLights,flashingLights,lightsStage,exhaustTemperature,wiperLV,usedFuel,fuelEstimatedLaps,directionLightsLeft,directionLightsRight,currentTyreSet,carDamage,tcAction,absAction,pitLimiterOn,turboBoost,brakeBias,gas,brake,fuel,gear,rpm,steerAngle,speedKmh,accG_1,accG_2,accG_3,velocity_1,velocity_2,velocity_3,heading,pitch,roll,localAngularVel_1,localAngularVel_2,localAngularVel_3,localVelocity_1,localVelocity_2,localVelocity_3,wheelSlip_1,wheelSlip_2,wheelSlip_3,wheelSlip_4,slipRatio_1,slipRatio_2,slipRatio_3,slipRatio_4,slipAngle_1,slipAngle_2,slipAngle_3,slipAngle_4,wheelPressure_1,wheelPressure_2,wheelPressure_3,wheelPressure_4,wheelAngularSpeed_1,wheelAngularSpeed_2,wheelAngularSpeed_3,wheelAngularSpeed_4,tyreCoreTemp_1,tyreCoreTemp_2,tyreCoreTemp_3,tyreCoreTemp_4,tyreContactPoint_1_1,tyreContactPoint_1_2,tyreContactPoint_1_3,tyreContactPoint_2_1,tyreContactPoint_2_2,tyreContactPoint_2_3,tyreContactPoint_3_1,tyreContactPoint_3_2,tyreContactPoint_3_3,tyreContactPoint_4_1,tyreContactPoint_4_2,tyreContactPoint_4_3,tyreContactNormal_1_1,tyreContactNormal_1_2,tyreContactNormal_1_3,tyreContactNormal_2_1,tyreContactNormal_2_2,tyreContactNormal_2_3,tyreContactNormal_3_1,tyreContactNormal_3_2,tyreContactNormal_3_3,tyreContactNormal_4_1,tyreContactNormal_4_2,tyreContactNormal_4_3,tyreContactHeading_1_1,tyreContactHeading_1_2,tyreContactHeading_1_3,tyreContactHeading_2_1,tyreContactHeading_2_2,tyreContactHeading_2_3,tyreContactHeading_3_1,tyreContactHeading_3_2,tyreContactHeading_3_3,tyreContactHeading_4_1,tyreContactHeading_4_2,tyreContactHeading_4_3,brakeTemp_1,brakeTemp_2,brakeTemp_3,brakeTemp_4,frontBrakeCompound,rearBrakeCompound,padLife_1,padLife_2,padLife_3,padLife_4,discLife_1,discLife_2,discLife_3,discLife_4,suspensionTravel_1,suspensionTravel_2,suspensionTravel_3,suspensionTravel_4';

const objToCSVHeader = (data) => {
    let headerString = ""
    for (let key of Object.keys(data)) {
        if(typeof data[key] === 'object') {
            if (typeof data[key][0] === 'object') {
                const arrayLength1 = data[key].length
                const arrayLength2 = data[key][0].length
                for(let i = 1; i <= arrayLength1; i++) {
                    for(let j = 1; j <= arrayLength2; j++) {
                        headerString += key + "_" + i + "_" + j + ",";
                    }
                }
            } else {
                const arrayLength = data[key].length
                for(let i = 1; i <= arrayLength; i++) {
                    headerString += key + "_" + i + ",";
                }
            }
        } else {
            headerString += key + ","
        }
    }
    return headerString.slice(0, -1);
}

const objToCSVValues = (data) => {
    let valuesString = ""
    for (let key of Object.keys(data)) {
        if(typeof data[key] === 'object') {
            const arrayLength = data[key].length
            for(let i = 0; i < arrayLength; i++) {
                valuesString += data[key][i] + ",";
            }
        } else {
            valuesString += data[key] + ","
        }
    }
    return valuesString.slice(0, -1);
}


module.exports = {
    csvHeader,
    objToCSVHeader,
    objToCSVValues
}
