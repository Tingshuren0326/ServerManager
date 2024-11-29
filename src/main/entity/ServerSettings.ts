

export class ServerSettings {
    // 管理员命令记录在游戏聊天呢
    AdminLogging: boolean
    // 允许任何人留痕
    AllowAnyoneBabyImprintCuddle: boolean
    // PVE模式允许矿洞建造
    AllowCaveBuildingPvE: boolean
    // PVP模式允许矿洞建造
    AllowCaveBuildingPvP: boolean
    // 允许空投落在建筑上
    AllowCrateSpawnsOnTopOfStructures: boolean
    // 允许平台上放置低温冰箱
    AllowCryoFridgeOnSaddle: boolean
    // PVE模式下允许飞行携带
    AllowFlyerCarryPvE: boolean
    // 允许飞行耐力恢复
    AllowFlyingStaminaRecovery: boolean
    // 允许部落日志中隐藏伤害来源
    AllowHideDamageSourceFromLogs: boolean
    // 允许隐藏远程攻击标记
    AllowHitMarkers: boolean
    // 兼容S+
    AllowIntegratedSPlusStructures: boolean
    // 允许生物携带多个C4
    AllowMultipleAttachedC4: boolean
    // 允许永久驯服泰坦
    AllowRaidDinoFeeding: boolean
    // 允许家庭共享账户
    AllowSharedConnections: boolean
    // 允许创世纪中使用泰克套
    AllowTekSuitPowersInGenesis: boolean
    // 允许第三人称
    AllowThirdPersonPlayer: boolean
    // 始终允许拾起建筑
    AlwaysAllowStructurePickup: boolean
    // 允许玩家离开服务器通知
    AlwaysNotifyPlayerLeft: boolean
    // 自动销毁过期恐龙
    AutoDestroyDecayedDinos: boolean
    // 自动销毁过期建筑的时间倍率
    AutoDestroyOldStructuresMultiplier: number
    // 服务器存档间隔 单位：分钟
    AutoSavePeriodMinutes: number
    // 全局禁用用户黑名单
    BanListURL: string
    // 强制允许骑行飞行生物
    bForceCanRideFliers: boolean
    // 限制采集时间
    ClampItemSpoilingTimes: boolean
    // 使用官方自带物品限制
    ClampItemStats: boolean
    // 限制采集力度 防止高品质工具采集过量
    ClampResourceHarvestDamage: boolean
    // 实时优化文件链接
    CustomLiveTuningUrl: string
    // 时间流速倍率
    DayCycleSpeedScale: number
    // 白天流速倍率
    DayTimeSpeedScale: number
    // 游戏难度级别
    DifficultyOffset: number
    // 恐龙食物消耗速度倍率，会影响驯服时间
    DinoCharacterFoodDrainMultiplier: number
    // 恐龙恢复速度倍率
    DinoCharacterHealthRecoveryMultiplier: number
    // 恐龙哪里消耗倍率
    DinoCharacterStaminaDrainMultiplier: number
    // 野生恐龙数量倍率
    DinoCountMultiplier: number
    // 野生恐龙攻击倍率
    DinoDamageMultiplier: number
    // 野生恐龙承受伤害倍率
    DinoResistanceMultiplier: number
    // 销毁超过驯服限制的恐龙
    DestroyTamesOverTheSoftTameLimit: boolean
    // 允许在敌人附近使用低温仓
    DisableCryopodEnemyCheck: boolean
    // 允许在低温冰箱范围以外使用低温仓
    DisableCryopodFridgeRequirement: boolean
    // PVE模式下禁用生物自动销毁
    DisableDinoDecayPvE: boolean
    // 禁用留痕
    DisableImprintDinoBuff: boolean
    // PVE模式禁用伽马
    DisablePvEGamma: boolean
    // PVE模式禁用建筑自动销毁
    DisableStructureDecayPvE: boolean
    // 禁用雾天气
    DisableWeatherFog: boolean
    // 禁用玩家加入通知
    DontAlwaysNotifyPlayerJoined: boolean
    // 禁止资源点建造
    EnableExtraStructurePreventionVolumes: boolean
    // PVP模式下允许使用伽马
    EnablePvPGamma: boolean
    // 方舟消亡模式倒计时
    ExtinctionEventTimeInterval: number
    // 快速衰减无结构链接的建筑
    FastDecayUnsnappedCoreStructures: boolean
    // 建筑自动上锁
    ForceAllStructureLocking: boolean
    // Voice全局语音聊天
    globalVoiceChat: boolean
    // 采集产量倍率
    HarvestAmountMultiplier: number
    // 采集生命倍率
    HarvestHealthMultiplier: number
    // 取消150个装饰结构限制
    IgnoreLimitMaxStructuresInRangeTypeFlag: boolean
    // 植入体使用间隔时间
    ImplantSuicideCD: number
    // 物品叠加倍率
    ItemStackSizeMultiplier: number
    // 挂机踢出时间
    KickIdlePlayersPeriod: number
    // 平台鞍放置恐龙门数量
    MaxGateFrameOnSaddles: number
    // 六角币存储上线
    MaxHexagonsPerCharacter: number
    // 部落最大恐龙驯服上限
    MaxPersonalTamedDinos: number
    // 最大平台生物/木筏数量限制
    MaxPlatformSaddleStructureLimit: number
    // 服务器最大驯服数量限制
    MaxTamedDinos: number
    // 服务器最大允许超出驯服数量限制
    MaxTamedDinos_SoftTameLimit: number
    // 定义销毁超出驯服数量龙的销毁时间
    MaxTamedDinos_SoftTameLimit_CountdownForDeletionDuration: number
    // 矿洞拖车数量
    MaxTrainCars: number
    // 最大上传角色数量
    MaxTributeCharacters: number
    // 最大上传恐龙数量
    MaxTributeDinos: number
    // 最大上传物品数量
    MaxTributeItems: number
    // 夜晚时间流动速度
    NightTimeSpeedScale: number
    // 启用非永久性疾病
    NonPermanentDiseases: boolean
    // 阻止自动销毁非核心结构
    OnlyAutoDestroyCoreStructures: boolean
    // 只自动销毁无连接结构
    OnlyDecayUnsnappedCoreStructures: boolean
    // 服务器难度覆盖
    OverrideOfficialDifficulty: number
    // 平台鞍允许防止炮台
    OverrideStructurePlatformPrevention: boolean
    // 游泳氧气消耗速度倍率
    OxygenSwimSpeedStatMultiplier: number
    // 平台可防止建筑数倍率
    PerPlatformMaxStructuresMultiplier: number
    // 限制部落平台鞍数量
    PersonalTamedDinosSaddleStructureCost: number
    // 平台可防止建筑范围倍率
    PlatformSaddleBuildAreaBoundsMultiplier: number
    // 玩家食物消耗速度杯倍率
    PlayerCharacterFoodDrainMultiplier: number
    // 玩家生命恢复速度倍率
    PlayerCharacterHealthRecoveryMultiplier: number
    // 玩家耐力消耗速度倍率
    PlayerCharacterStaminaDrainMultiplier: number
    // 玩家水消耗速度倍率
    PlayerCharacterWaterDrainMultiplier: number
    // 玩家攻击倍率
    PlayerDamageMultiplier: number
    // 玩家承受伤害倍率
    PlayerResistanceMultiplier: number
    // 禁止传染性疾病
    PreventDiseases: boolean
    // 禁止生物交配
    PreventMateBoost: boolean
    // 开启离线保护
    PreventOfflinePvP: boolean
    // 离线保护等待市场
    PreventOfflinePvPInterval: number
    // 禁止重生动画
    PreventSpawnAnimations: boolean
    // 禁止部落联盟
    PreventTribeAlliances: boolean
    // 开启附近聊天
    ProximityChat: boolean
    // PVE模式下允许补给点附近建造
    PvEAllowStructuresAtSupplyDrops: boolean
    // PVE模式下，恐龙自动销毁时间倍率
    PvEDinoDecayPeriodMultiplier: number
    // PVE模式下，建筑自动销毁时间倍率
    PvEStructureDecayPeriodMultiplier: number
    // 启动PVP模式下恐龙自动销毁
    PvPDinoDecay: boolean
    // 启动PVP模式下建筑自动销毁
    PvPStructureDecay: boolean
    // 泰坦龙食物消耗速度
    RaidDinoCharacterFoodDrainMultiplier: number
    // 随机空投位置
    RandomSupplyCratePoints: boolean
    // 开启RCON
    RCONEnabled: boolean
    // RCON端口号
    RCONPort: number
    // RCON显示游戏日志行数
    RCONServerGameLogBuffer: number
    // 资源重生速度倍率
    ResourcesRespawnPeriodMultiplier: number
    // 服务器管理员密码
    ServerAdminPassword: string
    // 服务器恐龙重生间隔
    ServerAutoForceRespawnWildDinosInterval: number
    // 启用伤害十字标识
    ServerCrosshair: boolean
    // 禁用浮动名称
    ServerForceNoHUD: boolean
    // 启用几线模式
    ServerHardcore: boolean
    // 服务器密码
    ServerPassword: string
    // 启用PVE
    serverPVE: boolean
    // 启用浮动伤害文字
    ShowFloatingDamageText: boolean
    // 显示玩家地图位置
    ShowMapPlayerLocation: boolean
    // 服务器观察者密码
    SpectatorPassword: string
    // 建筑伤害系数
    StructureDamageMultiplier: number
    // 结构拾取确认时间
    StructurePickupHoldDuration: number
    // 结构放置后可拾取时间
    StructurePickupTimeAfterPlacement: number
    // 建筑附近资源刷新半径倍率
    StructurePreventResourceRadiusMultiplier: number
    // 建筑承受伤害倍率
    StructureResistanceMultiplier: number
    // 驯服恐龙攻击倍率
    TamedDinoDamageMultiplier: number
    // 驯服恐龙承受伤害倍率
    TamedDinoResistanceMultiplier: number
    // 恐龙驯服速度倍率
    TamingSpeedMultiplier: number
    // 范围内最大建筑数量
    TheMaxStructuresInRange: number
    // 部落日志显示敌人摧毁建筑记录
    TribeLogDestroyedEnemyStructures: boolean
    // 部落改名冷却时间
    TribeNameChangeCooldown: number
    // 维京启用生物传送
    UseFjordurTraversalBuff: boolean
    // 采集资源优化
    UseOptimizedHarvestingHealth: boolean
    // 经验倍率
    XPMultiplier: number
    // 启用非本地生物下载
    CrossARKAllowForeignDinoDownloads: boolean
    // 恐龙上传间隔
    MinimumDinoReuploadInterval: number
    // 禁用方舟下载
    noTributeDownloads: boolean
    // 禁止下载恐龙
    PreventDownloadDinos: boolean
    // 禁止下载物品
    PreventDownloadItems: boolean
    // 禁止下载角色
    PreventDownloadSurvivors: boolean
    // 禁止上传恐龙
    PreventUploadDinos: boolean
    // 禁止上传物品
    PreventUploadItems: boolean
    // 禁止上传角色
    PreventUploadSurvivors: boolean
    // 方舟中角色过期时间
    TributeCharacterExpirationSeconds: number
    // 方舟中恐龙过期时间
    TributeDinoExpirationSeconds: number
    // 方舟中物品过期时间
    TributeItemExpirationSeconds: number
    // 恐龙从低温仓扔出后受到的伤害量
    CryopodNerfDamageMult: number
    // 冷冻病持续时长
    CryopodNerfDuration: number
    // 增加恐龙从冰冻舱部署后受到的伤害量
    CryopodNerfIncomingDamageMultPercent: number
    // 启用低温病
    EnableCryopodNerf: boolean
    // 启用PVE低温仓冷却
    EnableCryoSicknessPVE: boolean
    // PVE启用飞行携带
    bAllowFlyerCarryPVE: boolean
    // 禁用PVE结构衰减
    bDisableStructureDecayPvE: boolean
    // 允许携带C4飞行
    ForceFlyerExplosives: boolean
    // 禁止在门、储物柜上使用画板
    PreventOutOfTribePinCodeUse: boolean
    // 允许部落合并
    TribeMergeAllowed: boolean
    // 部落合并间隔
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
        this.AllowThirdPersonPlayer = true;
        this.AlwaysAllowStructurePickup = false;
        this.AlwaysNotifyPlayerLeft = false;
        this.AutoDestroyDecayedDinos = false;
        this.AutoDestroyOldStructuresMultiplier = 0.0;
        this.AutoSavePeriodMinutes = 15;
        this.BanListURL = 'https://cdn2.arkdedicated.com/asa/BanList.txt';
        this.bForceCanRideFliers = true;
        this.ClampItemSpoilingTimes = false;
        this.ClampItemStats = false;
        this.ClampResourceHarvestDamage = false;
        this.CustomLiveTuningUrl = 'https://cdn2.arkdedicated.com/asa/livetuningoverloads.json';
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
        this.ImplantSuicideCD = 28800;
        this.ItemStackSizeMultiplier = 1.0;
        this.KickIdlePlayersPeriod = 3600;
        this.MaxGateFrameOnSaddles = 0;
        this.MaxHexagonsPerCharacter = 2500000;
        this.MaxPersonalTamedDinos = 500;
        this.MaxPlatformSaddleStructureLimit = 75;
        this.MaxTamedDinos = 5000;
        this.MaxTamedDinos_SoftTameLimit = 5000;
        this.MaxTamedDinos_SoftTameLimit_CountdownForDeletionDuration = 604800;
        this.MaxTrainCars = 8;
        this.MaxTributeCharacters = 10;
        this.MaxTributeDinos = 20;
        this.MaxTributeItems = 50;
        this.NightTimeSpeedScale = 1.0;
        this.NonPermanentDiseases = false;
        this.OnlyAutoDestroyCoreStructures = false;
        this.OnlyDecayUnsnappedCoreStructures = false;
        this.OverrideOfficialDifficulty = 0.0;
        this.OverrideStructurePlatformPrevention = false;
        this.OxygenSwimSpeedStatMultiplier = 1.0;
        this.PerPlatformMaxStructuresMultiplier = 1.0;
        this.PersonalTamedDinosSaddleStructureCost = 0.0;
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
        this.PreventOfflinePvPInterval = 10;
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
        this.RCONPort = 27020;
        this.RCONServerGameLogBuffer = 600;
        this.ResourcesRespawnPeriodMultiplier = 1.0;
        this.ServerAdminPassword = 'riruark';
        this.ServerAutoForceRespawnWildDinosInterval = 0.0;
        this.ServerCrosshair = true;
        this.ServerForceNoHUD = false;
        this.ServerHardcore = false;
        this.ServerPassword = '';
        this.serverPVE = false;
        this.ShowFloatingDamageText = false;
        this.ShowMapPlayerLocation = true;
        this.SpectatorPassword = 'riruark';
        this.StructureDamageMultiplier = 1.0;
        this.StructurePickupHoldDuration = 0.5;
        this.StructurePickupTimeAfterPlacement = 30.0;
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
        this.MinimumDinoReuploadInterval = 0.0;
        this.noTributeDownloads = false;
        this.PreventDownloadDinos = false;
        this.PreventDownloadItems = false;
        this.PreventDownloadSurvivors = false;
        this.PreventUploadDinos = false;
        this.PreventUploadItems = false;
        this.PreventUploadSurvivors = false;
        this.TributeCharacterExpirationSeconds = 0;
        this.TributeDinoExpirationSeconds = 86400;
        this.TributeItemExpirationSeconds = 86400;
        this.CryopodNerfDamageMult = 0.00999999998;
        this.CryopodNerfDuration = 0.0;
        this.CryopodNerfIncomingDamageMultPercent = 0.0;
        this.EnableCryopodNerf = false;
        this.EnableCryoSicknessPVE = false;
        this.bAllowFlyerCarryPVE = false;
        this.bDisableStructureDecayPvE = false;
        this.ForceFlyerExplosives = false;
        this.PreventOutOfTribePinCodeUse = false;
        this.TribeMergeAllowed = true;
        this.ribeMergeCooldown = 0.0;
    }
}
