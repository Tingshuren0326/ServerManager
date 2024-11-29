
export class CommandConfig {
    // 禁用优化 根据服务器的帧率动态调整非活跃区域生物动画及碰撞
    AlwaysTickDedicatedSkeletalMeshes: boolean
    // 启用过期建筑自动销毁
    AutoDestroyStructures: boolean
    // 服务器语言 默认：en  列表：ca、cs、da、de、en、es、eu、fi、fr、hu、it、ja、ka、ko、nl、pl、pt_BR、ru、sv、th、tr、zh、zh-Hans-CN，zh-TW
    culture: string
    // 禁用玩家自定义装饰系统 装饰性mod不可用
    DisableCustomCosmetics: boolean
    // 禁用生物的网络复制范围优化  在 PvP 服务器上，此复制范围仅针对小型驯服生物和野生生物进行缩放，而不是所有驯服的生物
    disabledinonetrangescaling: boolean
    // 生物生成时有几率获得活动颜色
    ServerUseEventColors: boolean
    // 踢出挂机客户端
    EnableIdlePlayerKick: boolean
    // 活动色覆盖率 范围 0.0- 1.0
    EventColorsChanceOverride: number
    // 允许矿洞飞行
    ForceAllowCaveFlyers: boolean
    // 启动时重新生成所有野生龙
    ForceRespawnDinos: boolean
    // 启用服务器内存保护，服务器内存达到临界点将强制保存存档病重启服务器以防止崩溃
    GBUsageToForceRestart: number
    // 服务器mod列表
    mods: string[]
    // 禁用BE系统
    NoBattlEye: boolean
    // 不生成恐龙
    NoDinos: boolean
    // 禁止恐龙幼崽生成
    NoWildBabies: boolean
    // 服务器端口
    port: number
    // 服务器查询端口
    query_port: number
    // 启用服务器日志
    servergamelog: boolean
    // 在服务器日志中显示部落日志
    servergamelogincludetribelogs: boolean
    // 在RCON日志中显示部落日志
    ServerRCONOutputTribeLogs: boolean
    // 停滞保留控制器 AI 控制器对象保留在内存中，利于服务器性能，但是即使服务器没有玩家也会占用较高内存
    StasisKeepControllers: boolean
    // 启用结构内存优化 注意：可能与某些mod冲突，谨慎使用
    structurememopts: boolean
    // 使用动态配置
    UseDynamicConfig: boolean
    // 恐龙和物品复制检测以玩家复制作弊 注意：可能与某些mod冲突，谨慎使用
    UseItemDupeCheck: boolean
    // 使用安全的恐龙和物品生成规则以防止作弊
    UseSecureSpawnRules: boolean
    // 使用结构静态网格,以提高玩家人数众多的大型基地的服务器性能
    UseStructureStasisGrid: boolean
    // 设置服务器玩家上限
    WinLiveMaxPlayers: number
    // 集群ID
    clusterid: string
    // 集群目录
    ClusterDirOverride: string
    // 防止玩家从本地游戏向没有集群ID的服务器上传数据
    NoTransferFromFiltering: boolean
    // 阻止作弊日志删除
    DisableDupeLogDeletes: boolean
    // 对驯服生物启用额外的作弊检查
    EnableVictoryCoreDupeCheck: boolean
    // 强制禁止模型检查
    forcedisablemeshchecking: boolean
    // 强制使用性能线程
    forceuseperfthreads: boolean
    // 不删除复制物品
    ignoredupeditems: boolean
    // 禁用AI
    NoAI: boolean
    // 不生成野生生物，强制生成除外
    NoDinosExceptForcedSpawn: boolean
    // 不生成野生生物，流式生成除外
    NoDinosExceptStreamingSpawn: boolean
    // 不生成野生生物，手动生成除外
    NoDinosExceptManualSpawn: boolean
    // 不生成野生生物，水下生物除外
    NoDinosExceptWaterSpawn: boolean
    // 禁用性能线程
    noperfthreads: boolean
    // 禁用声音
    nosound: boolean
    // 禁用多线程
    onethread: boolean
    // 防止生物重新渲染时
    UnstasisDinoObstructionCheck: boolean
    // 防止驯服有效度超过100%
    UseTameEffectivenessClamp: boolean
    // 防止累计过多的玩家移动数据
    UseServerNetSpeedCheck: boolean

    constructor() {
        this.AlwaysTickDedicatedSkeletalMeshes = false;
        this.AutoDestroyStructures = false;
        this.culture = 'en';
        this.DisableCustomCosmetics = false;
        this.disabledinonetrangescaling = false;
        this.ServerUseEventColors = false;
        this.EnableIdlePlayerKick = false;
        this.EventColorsChanceOverride = 0;
        this.ForceAllowCaveFlyers = false;
        this.ForceRespawnDinos = false;
        this.GBUsageToForceRestart = 35;
        this.mods = [];
        this.NoBattlEye = false;
        this.NoDinos = false;
        this.NoWildBabies = false;
        this.port = 7777;
        this.query_port = 27015;
        this.servergamelog = false;
        this.servergamelogincludetribelogs = false;
        this.ServerRCONOutputTribeLogs = false;
        this.StasisKeepControllers = false;
        this.structurememopts = false;
        this.UseDynamicConfig = false;
        this.UseItemDupeCheck = false;
        this.UseSecureSpawnRules = false;
        this.UseStructureStasisGrid = false;
        this.WinLiveMaxPlayers = 128;
        this.clusterid = '';
        this.ClusterDirOverride = '';
        this.NoTransferFromFiltering = false;
        this.DisableDupeLogDeletes = false;
        this.EnableVictoryCoreDupeCheck = false;
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
            (this.ServerUseEventColors ? ' -ServerUseEventColors' : ''),
            (this.EnableIdlePlayerKick ? ' -EnableIdlePlayerKick' : ''),
            (this.ForceAllowCaveFlyers ? ' -ForceAllowCaveFlyers' : ''),
            (this.ForceRespawnDinos ? ' -ForceRespawnDinos' : ''),
            (this.GBUsageToForceRestart === 35 ? '' : ' -GBUsageToForceRestart=' + this.GBUsageToForceRestart.toString()),
            (this.mods.length > 0 ? ' -mods=' + this.mods.map(String).join(',') : ''),
            (this.NoBattlEye ? ' -NoBattlEye' : ''),
            (this.NoDinos ? ' -NoDinos' : ''),
            (this.NoWildBabies ? ' -NoWildBabies' : ''),
            (this.servergamelog ? ' -servergamelog' : ''),
            (this.servergamelogincludetribelogs ? ' -servergamelogincludetribelogs' : ''),
            (this.ServerRCONOutputTribeLogs ? ' -ServerRCONOutputTribeLogs' : ''),
            (this.StasisKeepControllers ? ' -StasisKeepControllers' : ''),
            (this.structurememopts ? ' -structurememopts' : ''),
            (this.UseDynamicConfig ? ' -UseDynamicConfig' : ''),
            (this.UseItemDupeCheck ? ' -UseItemDupeCheck' : ''),
            (this.UseSecureSpawnRules ? ' -UseSecureSpawnRules' : ''),
            (this.UseStructureStasisGrid ? ' -UseStructureStasisGrid' : ''),
            ' -WinLiveMaxPlayers=', this.WinLiveMaxPlayers.toString(),
            (this.clusterid == '' ? '' : ' -clusterid=' + this.clusterid),
            (this.ClusterDirOverride == '' ? '' : ' -ClusterDirOverride=' + this.ClusterDirOverride),
            (this.NoTransferFromFiltering ? ' -NoTransferFromFiltering' : ''),
            (this.DisableDupeLogDeletes ? ' -DisableDupeLogDeletes' : ''),
            (this.EnableVictoryCoreDupeCheck ? ' -EnableVictoryCoreDupeCheck' : ''),
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