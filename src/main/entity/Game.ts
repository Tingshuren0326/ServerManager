
export class Game {
    BabyCuddleGracePeriodMultiplier: number
    BabyCuddleIntervalMultiplier: number
    BabyCuddleLoseImprintQualitySpeedMultiplier: number
    BabyFoodConsumptionSpeedMultiplier: number
    BabyImprintAmountMultiplier: number
    BabyImprintingStatScaleMultiplier: number
    BabyMatureSpeedMultiplier: number
    bAllowUnclaimDinos: boolean
    bAllowCustomRecipes: boolean
    bAllowFlyerSpeedLeveling: boolean
    bAllowPlatformSaddleMultiFloors: boolean
    bAllowUnlimitedRespecs: boolean
    BaseTemperatureMultiplier: boolean
    bAutoPvEUseSystemTime: boolean
    bAutoUnlockAllEngrams: boolean
    bDisableDinoBreeding: boolean
    bDisableDinoRiding: boolean
    bDisableDinoTaming: boolean
    bDisableFriendlyFire: boolean
    bDisableLootCrates: boolean
    bDisablePhotoMode: boolean
    bDisableStructurePlacementCollision: boolean
    bFlyerPlatformAllowUnalignedDinoBasing: boolean
    bIgnoreStructuresPreventionVolumes: boolean
    bIncreasePvPRespawnInterval: boolean
    bOnlyAllowSpecifiedEngrams: boolean
    bPassiveDefensesDamageRiderlessDinos: boolean
    bPvEAllowTribeWar: boolean
    bPvEAllowTribeWarCancel: boolean
    bPvEDisableFriendlyFire: boolean
    bShowCreativeMode: boolean
    bUseCorpseLocator: boolean
    bUseDinoLevelUpAnimations: boolean
    bUseSingleplayerSettings: boolean
    bUseTameLimitForStructuresOnly: boolean
    ConfigAddNPCSpawnEntriesContainer: []
    ConfigOverrideItemCraftingCosts: []
    ConfigOverrideItemMaxQuantity: []
    ConfigOverrideNPCSpawnEntriesContainer: []
    ConfigOverrideSupplyCrateItems: []
    ConfigSubtractNPCSpawnEntriesContainer: []
    CraftingSkillBonusMultiplier: number
    CraftXPMultiplier: number
    CropDecaySpeedMultiplier: number
    CropGrowthSpeedMultiplier: number
    CustomRecipeEffectivenessMultiplier: number
    CustomRecipeSkillMultiplier: number
    DestroyTamesOverLevelClamp: number
    DinoClassDamageMultipliers: []
    DinoClassResistanceMultipliers: []
    DinoHarvestingDamageMultiplier: number
    DinoSpawnWeightMultipliers: []
    DinoTurretDamageMultiplier: number
    EggHatchSpeedMultiplier: number
    EngramEntryAutoUnlocks: number
    ExcludeItemIndices: []
    FastDecayInterval: number
    FishingLootQualityMultiplier: number
    FuelConsumptionIntervalMultiplier: number
    GenericXPMultiplier: number
    GlobalCorpseDecompositionTimeMultiplier: number
    GlobalItemDecompositionTimeMultiplier: number
    GlobalPoweredBatteryDurabilityDecreasePerSecond: number
    GlobalSpoilingTimeMultiplier: number
    HairGrowthSpeedMultiplier: number
    HarvestResourceItemAmountClassMultipliers: number
    HarvestXPMultiplier: number
    IncreasePvPRespawnIntervalBaseAmount: number
    IncreasePvPRespawnIntervalCheckPeriod: number
    IncreasePvPRespawnIntervalMultiplier: number
    ItemStatClamp: []
    KillXPMultiplier: number
    LayEggIntervalMultiplier: number
    LevelExperienceRampOverrides: []
    LimitNonPlayerDroppedItemsCount: number
    LimitNonPlayerDroppedItemsRange: number
    MatingIntervalMultiplier: number
    MatingSpeedMultiplier: number
    MaxAlliancesPerTribe: number
    MaxFallSpeedMultiplier: number
    MaxNumberOfPlayersInTribe: number
    MaxTribeLogs: number
    MaxTribesPerAlliance: number
    NPCReplacements: []
    OverrideMaxExperiencePointsDino: []
    OverrideMaxExperiencePointsPlayer: []
    OverrideEngramEntries: []
    OverrideNamedEngramEntries: []
    OverridePlayerLevelEngramPoints: []
    PassiveTameIntervalMultiplier: []
    PerLevelStatsMultiplier_Player: []
    PerLevelStatsMultiplier_DinoTamed: []
    PerLevelStatsMultiplier_DinoWild: []
    PhotoModeRangeLimit: []
    PlayerBaseStatMultipliers: []
    PlayerHarvestingDamageMultiplier: number
    PoopIntervalMultiplier: number
    PreventBreedingForClassNames: []
    PreventDinoTameClassNames: []
    PreventOfflinePvPConnectionInvincibleInterval: number
    PreventTransferForClassNames: []
    PvPZoneStructureDamageMultiplier: number
    ResourceNoReplenishRadiusPlayers: number
    ResourceNoReplenishRadiusStructures: number
    SpecialXPMultiplier: number
    StructureDamageRepairCooldown: number
    SupplyCrateLootQualityMultiplier: number
    TamedDinoCharacterFoodDrainMultiplier: number
    TamedDinoClassDamageMultipliers: []
    TamedDinoClassResistanceMultipliers: []
    TamedDinoTorporDrainMultiplier: number
    TribeSlotReuseCooldown: number
    UseCorpseLifeSpanMultiplier: number
    WildDinoCharacterFoodDrainMultiplier: number
    WildDinoTorporDrainMultiplier: number
    bHardLimitTurretsInRange: boolean
    bLimitTurretsInRange: boolean
    LimitTurretsNum: number
    LimitTurretsRange: number
    AdjustableMutagenSpawnDelayMultiplier: number
    BaseHexagonRewardMultiplier: number
    bDisableHexagonStore: boolean
    bDisableGenesisMissions: boolean
    bDisableWorldBuffs: boolean
    bEnableWorldBuffScaling: boolean
    bGenesisUseStructuresPreventionVolumes: boolean
    bHexStoreAllowOnlyEngramTradeOption: boolean
    HexagonCostMultiplier: number
    MutagenLevelBoost: []
    MutagenLevelBoost_Bred: []
    WorldBuffScalingEfficacy: []

    constructor() {
        this.BabyCuddleGracePeriodMultiplier = 1.0;
        this.BabyCuddleIntervalMultiplier = 1.0;
        this.BabyCuddleLoseImprintQualitySpeedMultiplier = 1.0;
        this.BabyFoodConsumptionSpeedMultiplier = 1.0;
        this.BabyImprintAmountMultiplier = 1.0
        this.BabyImprintingStatScaleMultiplier = 1.0;
        this.BabyMatureSpeedMultiplier = 1.0;
        this.bAllowUnclaimDinos = false;
        this.bAllowCustomRecipes = false;
        this.bAllowFlyerSpeedLeveling = false;
        this.bAllowPlatformSaddleMultiFloors = false;
        this.bAllowUnlimitedRespecs = false;
        this.BaseTemperatureMultiplier = false;
        this.bAutoPvEUseSystemTime = false;
        this.bAutoUnlockAllEngrams = false;
        this.bDisableDinoBreeding = false;
        this.bDisableDinoRiding = false;
        this.bDisableDinoTaming = false;
        this.bDisableFriendlyFire = false;
        this.bDisableLootCrates = false;
        this.bDisablePhotoMode = false;
        this.bDisableStructurePlacementCollision = false;
        this.bFlyerPlatformAllowUnalignedDinoBasing = false;
        this.bIgnoreStructuresPreventionVolumes = false;
        this.bIncreasePvPRespawnInterval = false;
        this.bOnlyAllowSpecifiedEngrams = false;
        this.bPassiveDefensesDamageRiderlessDinos = false;
        this.bPvEAllowTribeWar = false;
        this.bPvEAllowTribeWarCancel = false;
        this.bPvEDisableFriendlyFire = false;
        this.bShowCreativeMode = false;
        this.bUseCorpseLocator = false;
        this.bUseDinoLevelUpAnimations = false;
        this.bUseSingleplayerSettings = false;
        this.bUseTameLimitForStructuresOnly = false;
        this.ConfigAddNPCSpawnEntriesContainer = [];
        this.ConfigOverrideItemCraftingCosts = [];
        this.ConfigOverrideItemMaxQuantity = [];
        this.ConfigOverrideNPCSpawnEntriesContainer = [];
        this.ConfigOverrideSupplyCrateItems = [];
        this.ConfigSubtractNPCSpawnEntriesContainer = [];
        this.CraftingSkillBonusMultiplier = 1.0;
        this.CraftXPMultiplier = 1.0;
        this.CropDecaySpeedMultiplier = 1.0;
        this.CropGrowthSpeedMultiplier = 1.0;
        this.CustomRecipeEffectivenessMultiplier = 1.0;
        this.CustomRecipeSkillMultiplier = 1.0;
        this.DestroyTamesOverLevelClamp = 1.0;
        this.DinoClassDamageMultipliers = [];
        this.DinoClassResistanceMultipliers = [];
        this.DinoHarvestingDamageMultiplier = 1.0;
        this.DinoSpawnWeightMultipliers = [];
        this.DinoTurretDamageMultiplier = 1.0;
        this.EggHatchSpeedMultiplier = 1.0;
        this.EngramEntryAutoUnlocks = 1.0;
        this.ExcludeItemIndices = [];
        this.FastDecayInterval = 1.0;
        this.FishingLootQualityMultiplier = 1.0;
        this.FuelConsumptionIntervalMultiplier = 1.0;
        this.GenericXPMultiplier = 1.0;
        this.GlobalCorpseDecompositionTimeMultiplier = 1.0;
        this.GlobalItemDecompositionTimeMultiplier = 1.0;
        this.GlobalPoweredBatteryDurabilityDecreasePerSecond = 1.0;
        this.GlobalSpoilingTimeMultiplier = 1.0;
        this.HairGrowthSpeedMultiplier = 1.0;
        this.HarvestResourceItemAmountClassMultipliers = 1.0;
        this.HarvestXPMultiplier = 1.0;
        this.IncreasePvPRespawnIntervalBaseAmount = 1.0;
        this.IncreasePvPRespawnIntervalCheckPeriod = 1.0;
        this.IncreasePvPRespawnIntervalMultiplier = 1.0;
        this.ItemStatClamp = [];
        this.KillXPMultiplier = 1.0;
        this.LayEggIntervalMultiplier = 1.0;
        this.LevelExperienceRampOverrides = [];
        this.LimitNonPlayerDroppedItemsCount = 1.0;
        this.LimitNonPlayerDroppedItemsRange = 1.0;
        this.MatingIntervalMultiplier = 1.0;
        this.MatingSpeedMultiplier = 1.0;
        this.MaxAlliancesPerTribe = 1.0;
        this.MaxFallSpeedMultiplier = 1.0;
        this.MaxNumberOfPlayersInTribe = 1.0;
        this.MaxTribeLogs = 1.0;
        this.MaxTribesPerAlliance = 1.0;
        this.NPCReplacements = [];
        this.OverrideMaxExperiencePointsDino = [];
        this.OverrideMaxExperiencePointsPlayer = [];
        this.OverrideEngramEntries = [];
        this.OverrideNamedEngramEntries = [];
        this.OverridePlayerLevelEngramPoints = [];
        this.PassiveTameIntervalMultiplier = [];
        this.PerLevelStatsMultiplier_Player = [];
        this.PerLevelStatsMultiplier_DinoTamed = [];
        this.PerLevelStatsMultiplier_DinoWild = [];
        this.PhotoModeRangeLimit = [];
        this.PlayerBaseStatMultipliers = [];
        this.PlayerHarvestingDamageMultiplier = 1.0;
        this.PoopIntervalMultiplier = 1.0;
        this.PreventBreedingForClassNames = [];
        this.PreventDinoTameClassNames = [];
        this.PreventOfflinePvPConnectionInvincibleInterval = 1.0;
        this.PreventTransferForClassNames = [];
        this.PvPZoneStructureDamageMultiplier = 1.0;
        this.ResourceNoReplenishRadiusPlayers = 1.0;
        this.ResourceNoReplenishRadiusStructures = 1.0;
        this.SpecialXPMultiplier = 1.0;
        this.StructureDamageRepairCooldown = 1.0;
        this.SupplyCrateLootQualityMultiplier = 1.0;
        this.TamedDinoCharacterFoodDrainMultiplier = 1.0;
        this.TamedDinoClassDamageMultipliers = [];
        this.TamedDinoClassResistanceMultipliers = [];
        this.TamedDinoTorporDrainMultiplier = 1.0;
        this.TribeSlotReuseCooldown = 1.0;
        this.UseCorpseLifeSpanMultiplier = 1.0;
        this.WildDinoCharacterFoodDrainMultiplier = 1.0;
        this.WildDinoTorporDrainMultiplier = 1.0;
        this.bHardLimitTurretsInRange = false;
        this.bLimitTurretsInRange = false;
        this.LimitTurretsNum = 1.0;
        this.LimitTurretsRange = 1.0;
        this.AdjustableMutagenSpawnDelayMultiplier = 1.0;
        this.BaseHexagonRewardMultiplier = 1.0;
        this.bDisableHexagonStore = false;
        this.bDisableGenesisMissions = false;
        this.bDisableWorldBuffs = false;
        this.bEnableWorldBuffScaling = false;
        this.bGenesisUseStructuresPreventionVolumes = false;
        this.bHexStoreAllowOnlyEngramTradeOption = false;
        this.HexagonCostMultiplier = 1.0;
        this.MutagenLevelBoost = [];
        this.MutagenLevelBoost_Bred = [];
        this.WorldBuffScalingEfficacy = [];
    }
}