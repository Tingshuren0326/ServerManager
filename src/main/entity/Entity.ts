export type downloadEntity = {
    url: string
    filePath: string
    fileName: string
    item: any
    fingerPrint: string
    current: string
    total: string
    speed: string
    state: string
    state_text: string
    process: number
}

export type unzipEntity = {
    zipPath: string
    extractPath: string
    currentFile: string
    fingerPrint: string
    current: number
    total: number
    state: string
    state_text: string
    process: number
}

export enum serverMapEnum {
    TheIsland_WP,
    ScorchedEarth_WP,
    TheCenter_WP,
    Aberration_WP,
    Extinction_WP,
    Valguero_WP,
    Genesis_WP,
    CrystalIsles_WP,
    Gen2_WP,
    LostIsland_WP,
    Fjordur_WP
}

export enum serverModMapEnum {
    BobsMissions_WP
}

export type serverEntity = {
    name: string
    cover: string
    map: string
    use_api: boolean
    port: number
    query_port: number
    rconPort: number
    password: string
    observe_password: string
    mod_ids: number[]
    mod_names: string[]
    mods: serverModEntity[]
    args: string[]
    game_user_settings: serverGameUserSettingsEntity
    game_settings: serverGameEntity
    state: string
    state_text: string
    server_download: boolean
    runtime_state: serverRuntimeStateEntity
    back_up: serverBackupEntity
}

export type serverCommandConfigEntity = {
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
}

export type serverRuntimeStateEntity = {
    state: string
    state_text: string
    max_player_count: number
    player_cont: number
    days: number
    players: []
    tribes: []
}

export type serverResetEntity = {
    enable: boolean
    type: 'fixed' | 'interval'
    time_hour: number
    time_minute: number
}

export type serverBackupEntity = {
    enable: boolean | true
    type: 'fixed' | 'interval'
    time_hour: number | 0
    time_minute: number | 0
    max_reserve_day: number | 7
    backup_path: string | 'C:/'
    backup_world_path: string | 'C:/'
    backup_tribe_path: string | 'C:/'
    backup_player_path: string | 'C:/'
}

export type serverModEntity = {}

export type serverGameUserSettingsEntity = {
    ServerSettings: {
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
        DinoCountMultiplier: number | 0
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
    }
    SessionSettings: {
        Port: number
        QueryPort: number
        SessionName: string
    }
    MessageOfTheDay: {
        Duration: number
        Message: string
    }

}

export type serverGameEntity = {
    BabyCuddleGracePeriodMultiplier:number
    BabyCuddleIntervalMultiplier:number
    BabyCuddleLoseImprintQualitySpeedMultiplier:number
    BabyFoodConsumptionSpeedMultiplier:number
    BabyImprintAmountMultiplier:number
    BabyImprintingStatScaleMultiplier:number
    BabyMatureSpeedMultiplier:number
    bAllowUnclaimDinos:boolean
    bAllowCustomRecipes:boolean
    bAllowFlyerSpeedLeveling:boolean
    bAllowPlatformSaddleMultiFloors:boolean
    bAllowUnlimitedRespecs:boolean
    BaseTemperatureMultiplier:boolean
    bAutoPvEUseSystemTime:boolean
    bAutoUnlockAllEngrams:boolean
    bDisableDinoBreeding:boolean
    bDisableDinoRiding:boolean
    bDisableDinoTaming:boolean
    bDisableFriendlyFire:boolean
    bDisableLootCrates:boolean
    bDisablePhotoMode:boolean
    bDisableStructurePlacementCollision:boolean
    bFlyerPlatformAllowUnalignedDinoBasing:boolean
    bIgnoreStructuresPreventionVolumes:boolean
    bIncreasePvPRespawnInterval:boolean
    bOnlyAllowSpecifiedEngrams:boolean
    bPassiveDefensesDamageRiderlessDinos:boolean
    bPvEAllowTribeWar:boolean
    bPvEAllowTribeWarCancel:boolean
    bPvEDisableFriendlyFire:boolean
    bShowCreativeMode:boolean
    bUseCorpseLocator:boolean
    bUseDinoLevelUpAnimations:boolean
    bUseSingleplayerSettings:boolean
    bUseTameLimitForStructuresOnly:boolean
    ConfigAddNPCSpawnEntriesContainer:[]
    ConfigOverrideItemCraftingCosts:[]
    ConfigOverrideItemMaxQuantity:[]
    ConfigOverrideNPCSpawnEntriesContainer:[]
    ConfigOverrideSupplyCrateItems:[]
    ConfigSubtractNPCSpawnEntriesContainer:[]
    CraftingSkillBonusMultiplier:number
    CraftXPMultiplier:number
    CropDecaySpeedMultiplier:number
    CropGrowthSpeedMultiplier:number
    CustomRecipeEffectivenessMultiplier:number
    CustomRecipeSkillMultiplier:number
    DestroyTamesOverLevelClamp:number
    DinoClassDamageMultipliers:[]
    DinoClassResistanceMultipliers:[]
    DinoHarvestingDamageMultiplier:number
    DinoSpawnWeightMultipliers:[]
    DinoTurretDamageMultiplier:number
    EggHatchSpeedMultiplier:number
    EngramEntryAutoUnlocks:number
    ExcludeItemIndices:[]
    FastDecayInterval:number
    FishingLootQualityMultiplier:number
    FuelConsumptionIntervalMultiplier:number
    GenericXPMultiplier:number
    GlobalCorpseDecompositionTimeMultiplier:number
    GlobalItemDecompositionTimeMultiplier:number
    GlobalPoweredBatteryDurabilityDecreasePerSecond:number
    GlobalSpoilingTimeMultiplier:number
    HairGrowthSpeedMultiplier:number
    HarvestResourceItemAmountClassMultipliers:number
    HarvestXPMultiplier:number
    IncreasePvPRespawnIntervalBaseAmount:number
    IncreasePvPRespawnIntervalCheckPeriod:number
    IncreasePvPRespawnIntervalMultiplier:number
    ItemStatClamp:[]
    KillXPMultiplier:number
    LayEggIntervalMultiplier:number
    LevelExperienceRampOverrides:[]
    LimitNonPlayerDroppedItemsCount:number
    LimitNonPlayerDroppedItemsRange:number
    MatingIntervalMultiplier:number
    MatingSpeedMultiplier:number
    MaxAlliancesPerTribe:number
    MaxFallSpeedMultiplier:number
    MaxNumberOfPlayersInTribe:number
    MaxTribeLogs:number
    MaxTribesPerAlliance:number
    NPCReplacements:[]
    OverrideMaxExperiencePointsDino:[]
    OverrideMaxExperiencePointsPlayer:[]
    OverrideEngramEntries:[]
    OverrideNamedEngramEntries:[]
    OverridePlayerLevelEngramPoints:[]
    PassiveTameIntervalMultiplier:[]
    PerLevelStatsMultiplier_Player:[]
    PerLevelStatsMultiplier_DinoTamed:[]
    PerLevelStatsMultiplier_DinoWild:[]
    PhotoModeRangeLimit:[]
    PlayerBaseStatMultipliers:[]
    PlayerHarvestingDamageMultiplier:number
    PoopIntervalMultiplier:number
    PreventBreedingForClassNames:[]
    PreventDinoTameClassNames:[]
    PreventOfflinePvPConnectionInvincibleInterval:number
    PreventTransferForClassNames:[]
    PvPZoneStructureDamageMultiplier:number
    ResourceNoReplenishRadiusPlayers:number
    ResourceNoReplenishRadiusStructures:number
    SpecialXPMultiplier:number
    StructureDamageRepairCooldown:number
    SupplyCrateLootQualityMultiplier:number
    TamedDinoCharacterFoodDrainMultiplier:number
    TamedDinoClassDamageMultipliers:[]
    TamedDinoClassResistanceMultipliers:[]
    TamedDinoTorporDrainMultiplier:number
    TribeSlotReuseCooldown:number
    UseCorpseLifeSpanMultiplier:number
    WildDinoCharacterFoodDrainMultiplier: number
    WildDinoTorporDrainMultiplier:number
    bHardLimitTurretsInRange:boolean
    bLimitTurretsInRange:boolean
    LimitTurretsNum:number
    LimitTurretsRange:number
    AdjustableMutagenSpawnDelayMultiplier:number
    BaseHexagonRewardMultiplier:number
    bDisableHexagonStore:boolean
    bDisableGenesisMissions:boolean
    bDisableWorldBuffs:boolean
    bEnableWorldBuffScaling:boolean
    bGenesisUseStructuresPreventionVolumes:boolean
    bHexStoreAllowOnlyEngramTradeOption:boolean
    HexagonCostMultiplier:number
    MutagenLevelBoost:[]
    MutagenLevelBoost_Bred:[]
    WorldBuffScalingEfficacy:[]
}
