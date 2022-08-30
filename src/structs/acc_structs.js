int packetId Current step index
float gas Gas pedal input value (from -0 to 1.0)
float brake Brake pedal input value (from -0 to 1.0)
float fuel Amount of fuel remaining in kg
int gear Current gear
int rpm Engine revolutions per minute
float steerAngle Steering input value (from -1.0 to 1.0)
float speedKmh Car speed in km/h
float velocity[3] Car velocity vector in global coordinates
float accG[3] Car acceleration vector in global coordinates
float wheelSlip[4] Tyre slip for each tyre [FL, FR, RL, RR]
float wheelLoad[4] Wheel load for each tyre [FL, FR, RL, RR]
float wheelPressure[4] Tyre pressure [FL, FR, RL, RR]
float wheelAngularSpeed[4] Wheel angular speed in rad/s [FL, FR, RL, RR]
float tyreWear[4] Tyre wear [FL, FR, RL, RR]
float tyreDirtyLevel[4] Dirt accumulated on tyre surface [FL, FR, RL, RR]
float TyreCoreTemp[4] * Tyre rubber core temperature [FL, FR, RL, RR]
float camberRAD[4] Wheels camber in radians [FL, FR, RL, RR]
float suspensionTravel[4] Suspension travel [FL, FR, RL, RR]
float drs DRS on
float tc ** TC in action
float heading Car yaw orientation
float pitch Car pitch orientation
float roll Car roll orientation
float cgHeight Centre of gravity height
float carDamage[5] Car damage: front 0, rear 1, left 2, right 3, centre 4
int numberOfTyresOut Number of tyres out of track
int pitLimiterOn Pit limiter is on
float abs *** ABS in action
float kersCharge Not used in ACC
float kersInput Not used in ACC
int autoshifterOn Automatic transmission on
float rideHeight[2] Ride height: 0 front, 1 rear
float turboBoost Car turbo level
float ballast Car ballast in kg / Not implemented
float airDensity Air density
float airTemp Air temperature
float roadTemp Road temperature
float localAngularVel[3] Car angular velocity vector in local coordinates
float finalFF Force feedback signal
float performanceMeter Not used in ACC
int engineBrake Not used in ACC
int ersRecoveryLevel Not used in ACC
int ersPowerLevel Not used in ACC
int ersHeatCharging Not used in ACC
int ersIsCharging Not used in ACC
float kersCurrentKJ Not used in ACC
int drsAvailable Not used in ACC
int drsEnabled Not used in ACC
float brakeTemp[4] Brake discs temperatures
float clutch Clutch pedal input value (from -0 to 1.0)
float tyreTempI[4] Not shown in ACC
float tyreTempM[4] Not shown in ACC
float tyreTempO[4] Not shown in ACC
int isAIControlled Car is controlled by the AI
float tyreContactPoint[4][3] Tyre contact point global coordinates [FL, FR, RL, RR]
    [x,y,z]
float tyreContactNormal[4][3] Tyre contact normal [FL, FR, RL, RR] [x,y,z]
Float tyreContactHeading[4][3] Tyre contact heading [FL, FR, RL, RR] [x,y,z]
float brakeBias Front brake bias, see Appendix 4
float localVelocity[3] Car velocity vector in local coordinates
int P2PActivation Not used in ACC
int P2PStatus Not used in ACC
float currentMaxRpm Maximum engine rpm
float mz[4] Not shown in ACC
float fx[4] Not shown in ACC
float fy[4] Not shown in ACC
float slipRatio[4] Tyre slip ratio [FL, FR, RL, RR] in radians
float slipAngle[4] Tyre slip angle [FL, FR, RL, RR]
int tcinAction ** TC in action
int absInAction *** ABS in action
float suspensionDamage[4] Suspensions damage levels [FL, FR, RL, RR]
float tyreTemp[4] * Tyres core temperatures [FL, FR, RL, RR]
float waterTemp Water Temperature
float brakePressure[4] Brake pressure [FL, FR, RL, RR] see Appendix 2
int frontBrakeCompound Brake pad compund front
int rearBrakeCompound Brake pad compund rear
float padLife[4] Brake pad wear [FL, FR, RL, RR]
float discLife[4] Brake disk wear [FL, FR, RL, RR]
int ignitionOn Ignition switch set to on?
    int starterEngineOn Starter Switch set to on?
    int isEngineRunning Engine running?
    float kerbVibration vibrations sent to the FFB, could be used for motion rigs
    float slipVibrations vibrations sent to the FFB, could be used for motion rigs
    float gVibrations vibrations sent to the FFB, could be used for motion rigs
    float absVibrations
