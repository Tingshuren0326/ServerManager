
export class CommandConfig {
    AlwaysTickDedicatedSkeletalMeshes: boolean
    AutoDestroyStructures: boolean
    culture: string
    DisableCustomCosmetics: boolean
    disabledinonetrangescaling: boolean
    EasterColors: boolean
    EnableIdlePlayerKick: boolean
    EventColorsChanceOverride: number
    ForceAllowCaveFlyers: boolean
    ForceRespawnDinos: boolean
    mods: string[]
    NoBattlEye: boolean
    NoDinos: boolean
    NoWildBabies: boolean
    port: number
    query_port: number
    servergamelog: boolean
    servergamelogincludetribelogs: boolean
    ServerRCONOutputTribeLogs: boolean
    WinLiveMaxPlayers: number
    clusterid: string
    ClusterDirOverride: string
    NoTransferFromFiltering: boolean
    ClearOldItems: boolean
    forcedisablemeshchecking: boolean
    forceuseperfthreads: boolean
    ignoredupeditems: boolean
    NoAI: boolean
    NoDinosExceptForcedSpawn: boolean
    NoDinosExceptStreamingSpawn: boolean
    NoDinosExceptManualSpawn: boolean
    NoDinosExceptWaterSpawn: boolean
    noperfthreads: boolean
    nosound: boolean
    onethread: boolean
    UnstasisDinoObstructionCheck: boolean
    UseTameEffectivenessClamp: boolean
    UseServerNetSpeedCheck: boolean

    constructor() {
        this.AlwaysTickDedicatedSkeletalMeshes = false;
        this.AutoDestroyStructures = false;
        this.culture = 'en';
        this.DisableCustomCosmetics = false;
        this.disabledinonetrangescaling = false;
        this.EasterColors = false;
        this.EnableIdlePlayerKick = false;
        this.EventColorsChanceOverride = 0;
        this.ForceAllowCaveFlyers = false;
        this.ForceRespawnDinos = false;
        this.mods = [];
        this.NoBattlEye = false;
        this.NoDinos = false;
        this.NoWildBabies = false;
        this.port = 7777;
        this.query_port = 27015;
        this.servergamelog = false;
        this.servergamelogincludetribelogs = false;
        this.ServerRCONOutputTribeLogs = false;
        this.WinLiveMaxPlayers = 128;
        this.clusterid = '';
        this.ClusterDirOverride = '';
        this.NoTransferFromFiltering = false;
        this.ClearOldItems = false;
        this.forcedisablemeshchecking = false;
        this.forceuseperfthreads = false;
        this.ignoredupeditems = false;
        this.NoAI = false;
        this.NoDinosExceptForcedSpawn = false;
        this.NoDinosExceptStreamingSpawn = false;
        this.NoDinosExceptManualSpawn = false;
        this.NoDinosExceptWaterSpawn = false;
        this.noperfthreads = false;
        this.nosound = false;
        this.onethread = false;
        this.UnstasisDinoObstructionCheck = false;
        this.UseTameEffectivenessClamp = false;
        this.UseServerNetSpeedCheck = false;
    }

    getCommand(): string {
        return '?listen'.concat(
            '?Port=', this.port.toString(),
            '?QueryPort=', this.query_port.toString(),
            (this.EventColorsChanceOverride === 0 ? '' : '?EventColorsChanceOverride=' + this.EventColorsChanceOverride.toString()),
            ' -culture=' + this.culture,
            (this.AlwaysTickDedicatedSkeletalMeshes ? ' -AlwaysTickDedicatedSkeletalMeshes' : ''),
            (this.AutoDestroyStructures ? ' -AutoDestroyStructures' : ''),
            (this.DisableCustomCosmetics ? ' -DisableCustomCosmetics' : ''),
            (this.disabledinonetrangescaling ? ' -disabledinonetrangescaling' : ''),
            (this.EasterColors ? ' -EasterColors' : ''),
            (this.EnableIdlePlayerKick ? ' -EnableIdlePlayerKick' : ''),
            (this.ForceAllowCaveFlyers ? ' -ForceAllowCaveFlyers' : ''),
            (this.ForceRespawnDinos ? ' -ForceRespawnDinos' : ''),
            (this.mods.length > 0 ? ' -mods=' + this.mods.map(String).join(',') : ''),
            (this.NoBattlEye ? ' -NoBattlEye' : ''),
            (this.NoDinos ? ' -NoDinos' : ''),
            (this.NoWildBabies ? ' -NoWildBabies' : ''),
            (this.servergamelog ? ' -servergamelog' : ''),
            (this.servergamelogincludetribelogs ? ' -servergamelogincludetribelogs' : ''),
            (this.ServerRCONOutputTribeLogs ? ' -ServerRCONOutputTribeLogs' : ''),
            ' -WinLiveMaxPlayers=', this.WinLiveMaxPlayers.toString(),
            (this.clusterid == '' ? '' : ' -clusterid=' + this.clusterid),
            (this.ClusterDirOverride == '' ? '' : ' -ClusterDirOverride=' + this.ClusterDirOverride),
            (this.NoTransferFromFiltering ? ' -NoTransferFromFiltering' : ''),
            (this.ClearOldItems ? ' -ClearOldItems' : ''),
            (this.forcedisablemeshchecking ? ' -forcedisablemeshchecking' : ''),
            (this.forceuseperfthreads ? ' -forceuseperfthreads' : ''),
            (this.ignoredupeditems ? ' -ignoredupeditems' : ''),
            (this.NoAI ? ' -NoAI' : ''),
            (this.NoDinosExceptForcedSpawn ? ' -NoDinosExceptForcedSpawn' : ''),
            (this.NoDinosExceptStreamingSpawn ? ' -NoDinosExceptStreamingSpawn' : ''),
            (this.NoDinosExceptManualSpawn ? ' -NoDinosExceptManualSpawn' : ''),
            (this.NoDinosExceptWaterSpawn ? ' -NoDinosExceptWaterSpawn' : ''),
            (this.noperfthreads ? ' -noperfthreads' : ''),
            (this.nosound ? ' -nosound' : ''),
            (this.onethread ? ' -onethread' : ''),
            (this.UnstasisDinoObstructionCheck ? ' -UnstasisDinoObstructionCheck' : ''),
            (this.UseTameEffectivenessClamp ? ' -UseTameEffectivenessClamp' : ''),
            (this.UseServerNetSpeedCheck ? ' -UseServerNetSpeedCheck' : ''),

        );
    }
}