
export class CommandConfig {
    AutoDestroyStructures: boolean
    culture: string
    DisableCustomCosmetics: boolean
    disabledinonetrangescaling: boolean
    ForceAllowCaveFlyers: boolean
    ForceRespawnDinos: boolean
    mods: string[]
    NoBattlEye: boolean
    NoDinos: boolean
    NoWildBabies: boolean
    port: number
    servergamelog: boolean
    servergamelogincludetribelogs: boolean
    ServerRCONOutputTribeLogs: boolean
    clusterid: string
    ClusterDirOverride: string
    NoTransferFromFiltering: boolean
    forceuseperfthreads: boolean
    NoAI: boolean
    NoDinosExceptForcedSpawn: boolean
    NoDinosExceptStreamingSpawn: boolean
    NoDinosExceptManualSpawn: boolean
    NoDinosExceptWaterSpawn: boolean
    noperfthreads: boolean
    nosound: boolean
    onethread: boolean
    UnstasisDinoObstructionCheck: boolean

    constructor() {
        this.AutoDestroyStructures = false;
        this.culture = '';
        this.DisableCustomCosmetics = false;
        this.disabledinonetrangescaling = false;
        this.ForceAllowCaveFlyers = false;
        this.ForceRespawnDinos = false;
        this.mods = [];
        this.NoBattlEye = false;
        this.NoDinos = false;
        this.NoWildBabies = false;
        this.port = 7777;
        this.servergamelog = false;
        this.servergamelogincludetribelogs = false;
        this.ServerRCONOutputTribeLogs = false;
        this.clusterid = '';
        this.ClusterDirOverride = '';
        this.NoTransferFromFiltering = false;
        this.forceuseperfthreads = false;
        this.NoAI = false;
        this.NoDinosExceptForcedSpawn = false;
        this.NoDinosExceptStreamingSpawn = false;
        this.NoDinosExceptManualSpawn = false;
        this.NoDinosExceptWaterSpawn = false;
        this.noperfthreads = false;
        this.nosound = false;
        this.onethread = false;
        this.UnstasisDinoObstructionCheck = false;
    }
}