

export class ServerSettings {
    AdminLogging: boolean
    AllowAnyoneBabyImprintCuddle: boolean
    AllowCaveBuildingPvE: boolean
    AllowCaveBuildingPvP: boolean
    AllowCrateSpawnsOnTopOfStructures: boolean
    AllowCryoFridgeOnSaddle: boolean
    AllowFlyerCarryPvE: boolean
    AllowFlyingStaminaRecovery: boolean
    AllowHideDamageSourceFromLogs: boolean
    AllowHitMarkers: boolean
    AllowIntegratedSPlusStructures: boolean
    AllowMultipleAttachedC4: boolean
    AllowRaidDinoFeeding: boolean
    AllowSharedConnections: boolean
    AllowTekSuitPowersInGenesis: boolean
    AllowThirdPersonPlayer: boolean
    AlwaysAllowStructurePickup: boolean
    AlwaysNotifyPlayerLeft: boolean
    AutoDestroyDecayedDinos: boolean
    AutoDestroyOldStructuresMultiplier: number
    AutoSavePeriodMinutes: number
    bForceCanRideFliers: boolean
    ClampItemSpoilingTimes: boolean
    ClampItemStats: boolean
    ClampResourceHarvestDamage: boolean
    DayCycleSpeedScale: number
    DayTimeSpeedScale: number
    DifficultyOffset: number
    DinoCharacterFoodDrainMultiplier: number
    DinoCharacterHealthRecoveryMultiplier: number
    DinoCharacterStaminaDrainMultiplier: number
    DinoCountMultiplier: number
    DinoDamageMultiplier: number
    DinoResistanceMultiplier: number
    DestroyTamesOverTheSoftTameLimit: boolean
    DisableCryopodEnemyCheck: boolean
    DisableCryopodFridgeRequirement: boolean
    DisableDinoDecayPvE: boolean
    DisableImprintDinoBuff: boolean
    DisablePvEGamma: boolean
    DisableStructureDecayPvE: boolean
    DisableWeatherFog: boolean
    DontAlwaysNotifyPlayerJoined: boolean
    EnableExtraStructurePreventionVolumes: boolean
    EnablePvPGamma: boolean
    ExtinctionEventTimeInterval: number
    FastDecayUnsnappedCoreStructures: boolean
    ForceAllStructureLocking: boolean
    globalVoiceChat: boolean
    HarvestAmountMultiplier: number
    HarvestHealthMultiplier: number
    IgnoreLimitMaxStructuresInRangeTypeFlag: boolean
    ImplantSuicideCD: number
    ItemStackSizeMultiplier: number
    KickIdlePlayersPeriod: number
    MaxGateFrameOnSaddles: number
    MaxHexagonsPerCharacter: number
    MaxPersonalTamedDinos: number
    MaxPlatformSaddleStructureLimit: number
    MaxTamedDinos: number
    MaxTamedDinos_SoftTameLimit: number
    MaxTamedDinos_SoftTameLimit_CountdownForDeletionDuration: number
    MaxTrainCars: number
    MaxTributeCharacters: number
    MaxTributeDinos: number
    MaxTributeItems: number
    NightTimeSpeedScale: number
    NonPermanentDiseases: boolean
    OnlyAutoDestroyCoreStructures: boolean
    OnlyDecayUnsnappedCoreStructures: boolean
    OverrideOfficialDifficulty: boolean
    OverrideStructurePlatformPrevention: boolean
    OxygenSwimSpeedStatMultiplier: number
    PerPlatformMaxStructuresMultiplier: number
    PersonalTamedDinosSaddleStructureCost: number
    PlatformSaddleBuildAreaBoundsMultiplier: number
    PlayerCharacterFoodDrainMultiplier: number
    PlayerCharacterHealthRecoveryMultiplier: number
    PlayerCharacterStaminaDrainMultiplier: number
    PlayerCharacterWaterDrainMultiplier: number
    PlayerDamageMultiplier: number
    PlayerResistanceMultiplier: number
    PreventDiseases: boolean
    PreventMateBoost: boolean
    PreventOfflinePvP: boolean
    PreventOfflinePvPInterval: number
    PreventSpawnAnimations: boolean
    PreventTribeAlliances: boolean
    ProximityChat: boolean
    PvEAllowStructuresAtSupplyDrops: boolean
    PvEDinoDecayPeriodMultiplier: number
    PvEStructureDecayPeriodMultiplier: number
    PvPDinoDecay: boolean
    PvPStructureDecay: boolean
    RaidDinoCharacterFoodDrainMultiplier: number
    RandomSupplyCratePoints: boolean
    RCONEnabled: boolean
    RCONPort: number
    RCONServerGameLogBuffer: number
    ResourcesRespawnPeriodMultiplier: number
    ServerAdminPassword: string
    ServerAutoForceRespawnWildDinosInterval: number
    ServerCrosshair: boolean
    ServerForceNoHUD: boolean
    ServerHardcore: boolean
    ServerPassword: string
    serverPVE: boolean
    ShowFloatingDamageText: boolean
    ShowMapPlayerLocation: boolean
    SpectatorPassword: string
    StructureDamageMultiplier: number
    StructurePickupHoldDuration: number
    StructurePickupTimeAfterPlacement: number
    StructurePreventResourceRadiusMultiplier: number
    StructureResistanceMultiplier: number
    TamedDinoDamageMultiplier: number
    TamedDinoResistanceMultiplier: number
    TamingSpeedMultiplier: number
    TheMaxStructuresInRange: number
    TribeLogDestroyedEnemyStructures: boolean
    TribeNameChangeCooldown: number
    UseFjordurTraversalBuff: boolean
    UseOptimizedHarvestingHealth: boolean
    XPMultiplier: number
    CrossARKAllowForeignDinoDownloads: boolean
    MinimumDinoReuploadInterval: number
    noTributeDownloads: boolean
    PreventDownloadDinos: boolean
    PreventDownloadItems: boolean
    PreventDownloadSurvivors: boolean
    PreventUploadDinos: boolean
    PreventUploadItems: boolean
    PreventUploadSurvivors: boolean
    TributeCharacterExpirationSeconds: number
    TributeDinoExpirationSeconds: number
    TributeItemExpirationSeconds: number
    CryopodNerfDamageMult: number
    CryopodNerfDuration: number
    CryopodNerfIncomingDamageMultPercent: number
    EnableCryopodNerf: boolean
    EnableCryoSicknessPVE: boolean
    bAllowFlyerCarryPVE: boolean
    bDisableStructureDecayPvE: boolean
    ForceFlyerExplosives: boolean
    MaxStructuresInRange: number
    NewMaxStructuresInRange: number
    PvEStructureDecayDestructionPeriod: number
    PreventOutOfTribePinCodeUse: boolean
    TribeMergeAllowed: boolean
    ribeMergeCooldown: number

    constructor() {
        this.AdminLogging = false;
        this.AllowAnyoneBabyImprintCuddle = false;
        this.AllowCaveBuildingPvE = false;
        this.AllowCaveBuildingPvP = true;
        this.AllowCrateSpawnsOnTopOfStructures = false;
        this.AllowCryoFridgeOnSaddle = false;
        this.AllowFlyerCarryPvE = false;
        this.AllowFlyingStaminaRecovery = false;
        this.AllowHideDamageSourceFromLogs = true;
        this.AllowHitMarkers = true;
        this.AllowIntegratedSPlusStructures = true;
        this.AllowMultipleAttachedC4 = false;
        this.AllowRaidDinoFeeding = false;
        this.AllowSharedConnections = false;
        this.AllowTekSuitPowersInGenesis = false;
        this.AllowThirdPersonPlayer = false;
        this.AlwaysAllowStructurePickup = false;
        this.AlwaysNotifyPlayerLeft = false;
        this.AutoDestroyDecayedDinos = false;
        this.AutoDestroyOldStructuresMultiplier = 1.0;
        this.AutoSavePeriodMinutes = 30;
        this.bForceCanRideFliers = true;
        this.ClampItemSpoilingTimes = false;
        this.ClampItemStats = false;
        this.ClampResourceHarvestDamage = false;
        this.DayCycleSpeedScale = 1.0;
        this.DayTimeSpeedScale = 1.0;
        this.DifficultyOffset = 1.0;
        this.DinoCharacterFoodDrainMultiplier = 1.0;
        this.DinoCharacterHealthRecoveryMultiplier = 1.0;
        this.DinoCharacterStaminaDrainMultiplier = 1.0;
        this.DinoCountMultiplier = 1.0;
        this.DinoDamageMultiplier = 1.0;
        this.DinoResistanceMultiplier = 1.0;
        this.DestroyTamesOverTheSoftTameLimit = false;
        this.DisableCryopodEnemyCheck = false;
        this.DisableCryopodFridgeRequirement = false;
        this.DisableDinoDecayPvE = false;
        this.DisableImprintDinoBuff = false;
        this.DisablePvEGamma = false;
        this.DisableStructureDecayPvE = false;
        this.DisableWeatherFog = false;
        this.DontAlwaysNotifyPlayerJoined = false;
        this.EnableExtraStructurePreventionVolumes = false;
        this.EnablePvPGamma = false;
        this.ExtinctionEventTimeInterval = 0;
        this.FastDecayUnsnappedCoreStructures = false;
        this.ForceAllStructureLocking = false;
        this.globalVoiceChat = false;
        this.HarvestAmountMultiplier = 1.0;
        this.HarvestHealthMultiplier = 1.0;
        this.IgnoreLimitMaxStructuresInRangeTypeFlag = false;
        this.ImplantSuicideCD = 10;
        this.ItemStackSizeMultiplier = 1.0;
        this.KickIdlePlayersPeriod = 0;
        this.MaxGateFrameOnSaddles = 100;
        this.MaxHexagonsPerCharacter = 2500000;
        this.MaxPersonalTamedDinos = 400;
        this.MaxPlatformSaddleStructureLimit = 20;
        this.MaxTamedDinos = 20000;
        this.MaxTamedDinos_SoftTameLimit = 20000;
        this.MaxTamedDinos_SoftTameLimit_CountdownForDeletionDuration = 20000;
        this.MaxTrainCars = 10;
        this.MaxTributeCharacters = 6;
        this.MaxTributeDinos = 20;
        this.MaxTributeItems = 50;
        this.NightTimeSpeedScale = 1.0;
        this.NonPermanentDiseases = false;
        this.OnlyAutoDestroyCoreStructures = false;
        this.OnlyDecayUnsnappedCoreStructures = false;
        this.OverrideOfficialDifficulty = false;
        this.OverrideStructurePlatformPrevention = false;
        this.OxygenSwimSpeedStatMultiplier = 1.0;
        this.PerPlatformMaxStructuresMultiplier = 1.0;
        this.PersonalTamedDinosSaddleStructureCost = 1.0;
        this.PlatformSaddleBuildAreaBoundsMultiplier = 1.0;
        this.PlayerCharacterFoodDrainMultiplier = 1.0;
        this.PlayerCharacterHealthRecoveryMultiplier = 1.0;
        this.PlayerCharacterStaminaDrainMultiplier = 1.0;
        this.PlayerCharacterWaterDrainMultiplier = 1.0;
        this.PlayerDamageMultiplier = 1.0;
        this.PlayerResistanceMultiplier = 1.0;
        this.PreventDiseases = false;
        this.PreventMateBoost = false
        this.PreventOfflinePvP = false
        this.PreventOfflinePvPInterval = 0;
        this.PreventSpawnAnimations = false;
        this.PreventTribeAlliances = false;
        this.ProximityChat = false;
        this.PvEAllowStructuresAtSupplyDrops = false;
        this.PvEDinoDecayPeriodMultiplier = 1.0;
        this.PvEStructureDecayPeriodMultiplier = 1.0;
        this.PvPDinoDecay = false;
        this.PvPStructureDecay = false;
        this.RaidDinoCharacterFoodDrainMultiplier = 1.0;
        this.RandomSupplyCratePoints = false;
        this.RCONEnabled = false;
        this.RCONPort = 5000;
        this.RCONServerGameLogBuffer = 600;
        this.ResourcesRespawnPeriodMultiplier = 1.0;
        this.ServerAdminPassword = 'riruark';
        this.ServerAutoForceRespawnWildDinosInterval = 7200;
        this.ServerCrosshair = false;
        this.ServerForceNoHUD = false;
        this.ServerHardcore = false;
        this.ServerPassword = '';
        this.serverPVE = false;
        this.ShowFloatingDamageText = false;
        this.ShowMapPlayerLocation = false;
        this.SpectatorPassword = 'riruark';
        this.StructureDamageMultiplier = 1.0;
        this.StructurePickupHoldDuration = 1.0;
        this.StructurePickupTimeAfterPlacement = 1.0;
        this.StructurePreventResourceRadiusMultiplier = 1.0;
        this.StructureResistanceMultiplier = 1.0;
        this.TamedDinoDamageMultiplier = 1.0;
        this.TamedDinoResistanceMultiplier = 1.0;
        this.TamingSpeedMultiplier = 1.0;
        this.TheMaxStructuresInRange = 1.0;
        this.TribeLogDestroyedEnemyStructures = false;
        this.TribeNameChangeCooldown = 15;
        this.UseFjordurTraversalBuff = false;
        this.UseOptimizedHarvestingHealth = false;
        this.XPMultiplier = 1.0;
        this.CrossARKAllowForeignDinoDownloads = false;
        this.MinimumDinoReuploadInterval = 1440;
        this.noTributeDownloads = false;
        this.PreventDownloadDinos = false;
        this.PreventDownloadItems = false;
        this.PreventDownloadSurvivors = false;
        this.PreventUploadDinos = false;
        this.PreventUploadItems = false;
        this.PreventUploadSurvivors = false;
        this.TributeCharacterExpirationSeconds = 0;
        this.TributeDinoExpirationSeconds = 0;
        this.TributeItemExpirationSeconds = 0;
        this.CryopodNerfDamageMult = 1.0;
        this.CryopodNerfDuration = 1.0;
        this.CryopodNerfIncomingDamageMultPercent = 1.0;
        this.EnableCryopodNerf = false;
        this.EnableCryoSicknessPVE = false;
        this.bAllowFlyerCarryPVE = false;
        this.bDisableStructureDecayPvE = false;
        this.ForceFlyerExplosives = false;
        this.MaxStructuresInRange = 1.0;
        this.NewMaxStructuresInRange = 1.0;
        this.PvEStructureDecayDestructionPeriod = 1.0;
        this.PreventOutOfTribePinCodeUse = false;
        this.TribeMergeAllowed = false;
        this.ribeMergeCooldown = 1.0;
    }
}
