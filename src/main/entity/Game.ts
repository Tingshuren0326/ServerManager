
export class Game {
    // 幼崽留痕宽限期
    BabyCuddleGracePeriodMultiplier: number
    // 幼崽留痕间隔
    BabyCuddleIntervalMultiplier: number
    // 幼崽未留痕后留痕质量下降速度
    BabyCuddleLoseImprintQualitySpeedMultiplier: number
    // 幼崽食物消耗速度
    BabyFoodConsumptionSpeedMultiplier: number
    // 幼崽留痕质量倍率
    BabyImprintAmountMultiplier: number
    // 幼崽留痕对属性的影响倍率
    BabyImprintingStatScaleMultiplier: number
    // 幼崽成长速度
    BabyMatureSpeedMultiplier: number
    // 允许认养过期驯养恐龙
    bAllowUnclaimDinos: boolean
    // 允许自定义食谱
    bAllowCustomRecipes: boolean
    // 允许飞行生物移速加点
    bAllowFlyerSpeedLeveling: boolean
    // 允许平台鞍建造多层建筑
    bAllowPlatformSaddleMultiFloors: boolean
    // 允许无限洗点
    bAllowUnlimitedRespecs: boolean
    // 地图基础温度倍率 值越低，温度越低
    BaseTemperatureMultiplier: number
    // 自动解锁所有印痕
    bAutoUnlockAllEngrams: boolean
    // 禁止恐龙繁殖
    bDisableDinoBreeding: boolean
    // 禁止骑乘恐龙
    bDisableDinoRiding: boolean
    // 禁止驯服恐龙
    bDisableDinoTaming: boolean
    // 禁用队友伤害
    bDisableFriendlyFire: boolean
    // 禁止空投/宝箱
    bDisableLootCrates: boolean
    // 禁止拍照模式
    bDisablePhotoMode: boolean
    // 禁止建筑地形碰撞
    bDisableStructurePlacementCollision: boolean
    // 允许非友方范围停靠在平台上
    bFlyerPlatformAllowUnalignedDinoBasing: boolean
    // 允许资源点防止建筑
    bIgnoreStructuresPreventionVolumes: boolean
    // 启用PVP额外重生时间
    bIncreasePvPRespawnInterval: boolean
    // 自定义印痕
    bOnlyAllowSpecifiedEngrams: boolean
    // 允许建筑伤害野生恐龙
    bPassiveDefensesDamageRiderlessDinos: boolean
    // PVE允许宣战
    bPvEAllowTribeWar: boolean
    // PVE允许取消宣战
    bPvEAllowTribeWarCancel: boolean
    // PVE禁用队友伤害
    bPvEDisableFriendlyFire: boolean
    // 启用建造模式
    bShowCreativeMode: boolean
    // 启用尸体追踪光柱
    bUseCorpseLocator: boolean
    // 启用恐龙升级动画
    bUseDinoLevelUpAnimations: boolean
    // 启用任务登记配置
    bUseSingleplayerSettings: boolean
    // 制定区域添加恐龙生成
    ConfigAddNPCSpawnEntriesContainer: []
    // 覆盖物品制作要求
    ConfigOverrideItemCraftingCosts: []
    // 修改物品叠加
    ConfigOverrideItemMaxQuantity: []
    // 覆盖特定区域的恐龙
    ConfigOverrideNPCSpawnEntriesContainer: []
    // 覆盖战利品箱中的物品
    ConfigOverrideSupplyCrateItems: []
    // 移除特定区域内的恐龙
    ConfigSubtractNPCSpawnEntriesContainer: []
    // 制作点加成倍率
    CraftingSkillBonusMultiplier: number
    // 制作获得经验倍率
    CraftXPMultiplier: number
    // 农作物腐坏速度倍率
    CropDecaySpeedMultiplier: number
    // 农作物生长速度倍率
    CropGrowthSpeedMultiplier: number
    // 自定义食谱效果倍率
    CustomRecipeEffectivenessMultiplier: number
    // 玩家制作速度等级加成效果
    CustomRecipeSkillMultiplier: number
    // 自动删除超过等级的驯服恐龙
    DestroyTamesOverLevelClamp: number
    // 覆盖野生恐龙伤害
    DinoClassDamageMultipliers: []
    // 覆盖野生恐龙抗性
    DinoClassResistanceMultipliers: []
    // 采集伤害倍率
    DinoHarvestingDamageMultiplier: number
    // 覆盖野生恐龙生成数量
    DinoSpawnWeightMultipliers: []
    // 炮塔对恐龙的伤害倍率
    DinoTurretDamageMultiplier: number
    // 孵化速度倍率
    EggHatchSpeedMultiplier: number
    // 自动解锁尹恒
    EngramEntryAutoUnlocks: number
    // 从补给箱中移除的物品
    ExcludeItemIndices: []
    // 快速衰减周期
    FastDecayInterval: number
    // 钓鱼奖励质量
    FishingLootQualityMultiplier: number
    // 燃料消耗间隔倍率
    FuelConsumptionIntervalMultiplier: number
    // 日常经验获取倍率（随着时间流逝）
    GenericXPMultiplier: number
    // 全局尸体分解时间倍率
    GlobalCorpseDecompositionTimeMultiplier: number
    // 全局物品掉落分解时间倍率
    GlobalItemDecompositionTimeMultiplier: number
    // 充电桩充电速度
    GlobalPoweredBatteryDurabilityDecreasePerSecond: number
    // 全局腐坏时间倍率
    GlobalSpoilingTimeMultiplier: number
    // 头发生长速度倍率
    HairGrowthSpeedMultiplier: number
    // 覆盖资源采集倍率
    HarvestResourceItemAmountClassMultipliers: []
    // 采集经验倍率
    HarvestXPMultiplier: number
    // PVP重生时间
    IncreasePvPRespawnIntervalBaseAmount: number
    // PVP重生时间增加量
    IncreasePvPRespawnIntervalCheckPeriod: number
    // PVP重复被杀死重生时间
    IncreasePvPRespawnIntervalMultiplier: number
    // 全局物品限制
    ItemStatClamp: []
    // 击杀经验倍率
    KillXPMultiplier: number
    // 产蛋间隔
    LayEggIntervalMultiplier: number
    // 覆盖玩家和驯服恐龙的等级总数
    LevelExperienceRampOverrides: []
    // 限制玩家区域内掉落物品数量
    LimitNonPlayerDroppedItemsCount: number
    // 限制区域大小
    LimitNonPlayerDroppedItemsRange: number
    // 交配间隔倍率
    MatingIntervalMultiplier: number
    // 交配速度倍率
    MatingSpeedMultiplier: number
    // 部落可以加入最大联盟数量
    MaxAlliancesPerTribe: number
    // 玩家高度坠落速度
    MaxFallSpeedMultiplier: number
    // 部落中玩家最大数量
    MaxNumberOfPlayersInTribe: number
    // 部落日志最大条数
    MaxTribeLogs: number
    // 联盟最大部落数
    MaxTribesPerAlliance: number
    // 全局生物覆盖
    NPCReplacements: []
    // 覆盖恐龙等级经验上限
    OverrideMaxExperiencePointsDino: []
    // 覆盖玩家等级经验上限
    OverrideMaxExperiencePointsPlayer: []
    // ID覆盖印痕
    OverrideEngramEntries: []
    // 名称覆盖印痕
    OverrideNamedEngramEntries: []
    // 覆盖玩家等级印痕奖励数量
    OverridePlayerLevelEngramPoints: []
    // 设置被动驯服喂养频率
    PassiveTameIntervalMultiplier: number
    // 覆盖玩家属性倍率
    PerLevelStatsMultiplier_Player: []
    // 覆盖驯服恐龙属性倍率
    PerLevelStatsMultiplier_DinoTamed: []
    // 覆盖野生恐龙属性倍率
    PerLevelStatsMultiplier_DinoWild: []
    // 拍照模式相机距离限制
    PhotoModeRangeLimit: number
    // 玩家基础属性倍率
    PlayerBaseStatMultipliers: []
    // 玩家采集倍率
    PlayerHarvestingDamageMultiplier: number
    // 玩家牌匾频率
    PoopIntervalMultiplier: number
    // 禁止繁殖生物
    PreventBreedingForClassNames: []
    // 禁止命令驯服恐龙
    PreventDinoTameClassNames: []
    // 玩家登录保护时间
    PreventOfflinePvPConnectionInvincibleInterval: number
    // 阻止通过类名转移生物
    PreventTransferForClassNames: []
    // 建筑在矿洞内承受伤害倍率
    PvPZoneStructureDamageMultiplier: number
    // 玩家资源重生半径
    ResourceNoReplenishRadiusPlayers: number
    // 玩家资源重生半径扩展
    ResourceNoReplenishRadiusStructures: number
    // 特殊时间获取经验倍率
    SpecialXPMultiplier: number
    // 建筑损毁修复等待时间
    StructureDamageRepairCooldown: number
    // 空投补给箱品质
    SupplyCrateLootQualityMultiplier: number
    // 驯服生物消耗食物倍率
    TamedDinoCharacterFoodDrainMultiplier: number
    // 覆盖驯服生物伤害倍率
    TamedDinoClassDamageMultipliers: []
    // 覆盖驯服生物抗性倍率
    TamedDinoClassResistanceMultipliers: []
    // 驯服生物清醒倍率
    TamedDinoTorporDrainMultiplier: number
    // 离开部落冷却时间
    TribeSlotReuseCooldown: number
    // 尸体及掉落物品存留时间
    UseCorpseLifeSpanMultiplier: number
    // 野生恐龙消耗食物的速度
    WildDinoCharacterFoodDrainMultiplier: number
    // 野生恐龙清醒速度
    WildDinoTorporDrainMultiplier: number
    // 范围内炮塔数量限制
    bHardLimitTurretsInRange: boolean
    // 不限定范围内炮塔数量
    bLimitTurretsInRange: boolean
    // 限制数量
    LimitTurretsNum: number
    // 限制范围
    LimitTurretsRange: number
    // 诱变剂生成速率
    AdjustableMutagenSpawnDelayMultiplier: number
    // 六角币奖励倍率
    BaseHexagonRewardMultiplier: number
    // 禁止存储六角币
    bDisableHexagonStore: boolean
    // 禁用创二任务
    bDisableGenesisMissions: boolean
    // 禁用创二Buff
    bDisableWorldBuffs: boolean
    // 启用创二BUFF整体效果缩放
    bEnableWorldBuffScaling: boolean
    // 禁止在创一任务区域建筑
    bGenesisUseStructuresPreventionVolumes: boolean
    // 六角币商店只允许出售印痕
    bHexStoreAllowOnlyEngramTradeOption: boolean
    // 六角币商店价格倍率
    HexagonCostMultiplier: number
    // 覆盖诱变剂增加野生龙级数
    MutagenLevelBoost: []
    // 覆盖诱变剂增加驯服龙级数
    MutagenLevelBoost_Bred: []
    // 缩放创二任务Buff效果
    WorldBuffScalingEfficacy: []

    constructor() {
        this.BabyCuddleGracePeriodMultiplier = 1.0;
        this.BabyCuddleIntervalMultiplier = 1.0;
        this.BabyCuddleLoseImprintQualitySpeedMultiplier = 1.0;
        this.BabyFoodConsumptionSpeedMultiplier = 1.0;
        this.BabyImprintAmountMultiplier = 1.0
        this.BabyImprintingStatScaleMultiplier = 1.0;
        this.BabyMatureSpeedMultiplier = 1.0;
        this.bAllowUnclaimDinos = true;
        this.bAllowCustomRecipes = true;
        this.bAllowFlyerSpeedLeveling = false;
        this.bAllowPlatformSaddleMultiFloors = false;
        this.bAllowUnlimitedRespecs = false;
        this.BaseTemperatureMultiplier = 1.0;
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
        this.bIncreasePvPRespawnInterval = true;
        this.bOnlyAllowSpecifiedEngrams = false;
        this.bPassiveDefensesDamageRiderlessDinos = false;
        this.bPvEAllowTribeWar = true;
        this.bPvEAllowTribeWarCancel = false;
        this.bPvEDisableFriendlyFire = false;
        this.bShowCreativeMode = false;
        this.bUseCorpseLocator = true;
        this.bUseDinoLevelUpAnimations = true;
        this.bUseSingleplayerSettings = false;
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
        this.DestroyTamesOverLevelClamp = 0;
        this.DinoClassDamageMultipliers = [];
        this.DinoClassResistanceMultipliers = [];
        this.DinoHarvestingDamageMultiplier = 3.2;
        this.DinoSpawnWeightMultipliers = [];
        this.DinoTurretDamageMultiplier = 1.0;
        this.EggHatchSpeedMultiplier = 1.0;
        this.EngramEntryAutoUnlocks = 1.0;
        this.ExcludeItemIndices = [];
        this.FastDecayInterval = 43200;
        this.FishingLootQualityMultiplier = 1.0;
        this.FuelConsumptionIntervalMultiplier = 1.0;
        this.GenericXPMultiplier = 1.0;
        this.GlobalCorpseDecompositionTimeMultiplier = 1.0;
        this.GlobalItemDecompositionTimeMultiplier = 1.0;
        this.GlobalPoweredBatteryDurabilityDecreasePerSecond = 1.0;
        this.GlobalSpoilingTimeMultiplier = 1.0;
        this.HairGrowthSpeedMultiplier = 1.0;
        this.HarvestResourceItemAmountClassMultipliers = [];
        this.HarvestXPMultiplier = 1.0;
        this.IncreasePvPRespawnIntervalBaseAmount = 60.0;
        this.IncreasePvPRespawnIntervalCheckPeriod = 300.0;
        this.IncreasePvPRespawnIntervalMultiplier = 2.0;
        this.ItemStatClamp = [];
        this.KillXPMultiplier = 1.0;
        this.LayEggIntervalMultiplier = 1.0;
        this.LevelExperienceRampOverrides = [];
        this.LimitNonPlayerDroppedItemsCount = 0.0;
        this.LimitNonPlayerDroppedItemsRange = 0.0;
        this.MatingIntervalMultiplier = 1.0;
        this.MatingSpeedMultiplier = 1.0;
        this.MaxAlliancesPerTribe = 16;
        this.MaxFallSpeedMultiplier = 1.0;
        this.MaxNumberOfPlayersInTribe = 8;
        this.MaxTribeLogs = 400;
        this.MaxTribesPerAlliance = 1.0;
        this.NPCReplacements = [];
        this.OverrideMaxExperiencePointsDino = [];
        this.OverrideMaxExperiencePointsPlayer = [];
        this.OverrideEngramEntries = [];
        this.OverrideNamedEngramEntries = [];
        this.OverridePlayerLevelEngramPoints = [];
        this.PassiveTameIntervalMultiplier = 1.0;
        this.PerLevelStatsMultiplier_Player = [];
        this.PerLevelStatsMultiplier_DinoTamed = [];
        this.PerLevelStatsMultiplier_DinoWild = [];
        this.PhotoModeRangeLimit = 3000;
        this.PlayerBaseStatMultipliers = [];
        this.PlayerHarvestingDamageMultiplier = 1.0;
        this.PoopIntervalMultiplier = 1.0;
        this.PreventBreedingForClassNames = [];
        this.PreventDinoTameClassNames = [];
        this.PreventOfflinePvPConnectionInvincibleInterval = 5.0;
        this.PreventTransferForClassNames = [];
        this.PvPZoneStructureDamageMultiplier = 6.0;
        this.ResourceNoReplenishRadiusPlayers = 1.0;
        this.ResourceNoReplenishRadiusStructures = 1.0;
        this.SpecialXPMultiplier = 1.0;
        this.StructureDamageRepairCooldown = 1.0;
        this.SupplyCrateLootQualityMultiplier = 1.0;
        this.TamedDinoCharacterFoodDrainMultiplier = 1.0;
        this.TamedDinoClassDamageMultipliers = [];
        this.TamedDinoClassResistanceMultipliers = [];
        this.TamedDinoTorporDrainMultiplier = 1.0;
        this.TribeSlotReuseCooldown = 0.0;
        this.UseCorpseLifeSpanMultiplier = 1.0;
        this.WildDinoCharacterFoodDrainMultiplier = 1.0;
        this.WildDinoTorporDrainMultiplier = 1.0;
        this.bHardLimitTurretsInRange = false;
        this.bLimitTurretsInRange = true;
        this.LimitTurretsNum = 100;
        this.LimitTurretsRange = 10000;
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