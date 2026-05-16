// 维度名称映射
const DIMENSION_NAMES = {
    xp: 'XP光谱',
    impart: 'Impart参与度',
    meme: '梗图制造力',
    pvp: '金戈血压指数',
    whale: '氪金理智值',
    clan: '雅社归属感表达',
    loyalty: '名士专情度',
    phase: '水群作息相位'
};

// 测试题目数据
const QUESTIONS = [
    // T1系列 - XP光谱维度
    {
        id: "T1_1",
        question: "你辛苦攒了300抽等苏秦张仪，结果下个卡池曝光的张择端立绘精准戳中你的XP，你的第一反应是？",
        options: [
            "苏秦张仪是谁？小画师我来了！（打开蓝绿修改器）",
            "默默打开张择端技能曝光开始比较两者的强度数据，谁保值抽谁",
            "好纠结，先看看群里怎么评价再说",
            "继续等苏秦张仪，小画师再好看也不是抬我推的，我意志坚定"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T1_2",
        question: "你对一个名士的评价通常是？",
        options: [
            '"他好帅/她好美，我要和他/她结婚！"',
            '"这个技能和天命可以进T1，配队潜力不错"',
            '"颜值在线，但如果太弱的话……我可能只会放在box观赏"',
            '"虽然强度不是顶级，但冲这立绘建模，我练定了"'
        ],
        scores: [2, -2, -1, 1]
    },
    {
        id: "T1_3",
        question: "你抽到新名士后第一时间做什么？",
        options: [
            "截图，发群里炫耀",
            "打开蝴蝶君视频研究怎么练",
            "先去互动里送礼物，换成饕餮居送饭的",
            "看情况，如果强就练，不强就先放box"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T1_4",
        question: "一个名士被版本淘汰，你会？",
        options: [
            "继续用！我推哪怕pvp被暴打也是最美的",
            "毫不犹豫斗转星移/扒装备，把资源给新的T0",
            "偶尔拿出来在pve遛一遛，怀念一下",
            "不动了，留在box就够了，上场就算了"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T1_5",
        question: `看到群友说"XXX名士退版本了，别练"，但你很喜欢这个名士的立绘，你会？`,
        options: [
            '"爱能克服一切，我就要练！"',
            "默默删除这个名士的培养计划",
            "纠结几天，最终还是没练，但把TA设成了头像",
            "练到一半放弃，因为实在太弱了"
        ],
        scores: [2, -2, -1, 1]
    },
    {
        id: "T1_6",
        question: "你觉得一个名士最吸引你的是什么？",
        options: [
            "人设、故事、立绘、配音的化学反应",
            "技能机制是否独特/数值是否暴力",
            "当然是颜值为先，强度可以后天补",
            "强度是入场券，颜值是加分项"
        ],
        scores: [2, -2, 1, -1]
    },
    // T2系列 - Impart参与度维度
    {
        id: "T2_1",
        question: `群里有人发"谁要跟我结婚？"，你的反应是？`,
        options: [
            `秒回"我我我我我！"`,
            "已读不回，当没看到",
            "发一个懵逼的表情包",
            "默默截图"
        ],
        scores: [2, -2, -1, 1]
    },
    {
        id: "T2_2",
        question: "你的群昵称更接近以下哪种风格？",
        options: [
            '"XXX的狗"/"XXX重度依赖"',
            "忘川id",
            "神秘前缀+忘川id",
            "偶尔跟风加个括号，但大多数时候只是忘川id"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T2_3",
        question: "群里突然开始开impart，你会？",
        options: [
            "加入甚至加码",
            "默默关闭群聊",
            "发一个观察的表情包，然后潜水",
            "不参与但围观得很开心"
        ],
        scores: [2, -2, -1, 1]
    },
    {
        id: "T2_4",
        question: "新名士立绘和技能发布后，你会在群里？",
        options: [
            "带头舔颜",
            "你在群里输出对新名士的技能天命装备理解",
            "你会跟舔颜的群友一起发几个表情包",
            "你在默默分析技能，群里画风与你无关"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T2_5",
        question: `被群友叫"老婆"时，你的回应是？`,
        options: [
            '"对，我是你第几个老婆？"',
            '沉默，或回一个"。？"',
            '"别叫老婆，叫爸爸"',
            '"我有对象，但如果是XXX的话也不是不行"'
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T2_6",
        question: "你认为雅社群存在的意义是？",
        options: [
            "合法Impart场所",
            "交流配队和金戈打法的地方",
            "一半攻略一半发癫，缺一不可",
            "主要是拿雅社奖励，顺便看看大家在聊啥"
        ],
        scores: [2, -2, 1, -1]
    },
    // T3系列 - 梗图制造力维度
    {
        id: "T3_1",
        question: "新名士技能曝光后，你的大脑在？",
        options: [
            "立刻脑补出梗/地狱笑话",
            "认真读技能描述，思考要不要抽和怎么养",
            "等群友先动手，然后疯狂保存",
            "试图理解机制"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T3_2",
        question: "你的P图技术主要用在？",
        options: [
            "制作名士表情包、配梗文、做群聊素材",
            "给自己的推加柔光滤镜，精修截图",
            "偶尔P点东西，但技术有限",
            "不会P图，但会用文字输出梗"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T3_3",
        question: "看到群友发了一张很好笑的忘川梗图，你会？",
        options: [
            "保存，加入自己的梗图库，下次聊天时精准投放",
            `礼貌回复"哈哈"，然后继续讨论配队`,
            "跟风发梗图/当应声虫",
            "看完就忘"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T3_4",
        question: "景区在群里当狗的行为在你眼里是什么？",
        options: [
            '"还回家吗景区""很怀念你还是人的时候"',
            "诡异极了，还是先别说话了",
            "可以截下来当表情包用",
            "不敢笑，因为我是主人"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T3_5",
        question: "金戈翻车后你在群里的第一句话是？",
        options: [
            "配合各种吊图骂骂咧咧吐槽对面大运够阴",
            "不在群里说话，研究自己和对面阵容，开始分析哪里出了问题",
            `截图发出来吐槽"撞大运了"，然后潜水`,
            "群里吐槽一句，默默继续开戈"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T3_6",
        question: "群聊冷场时，你会？",
        options: [
            "找话题或者做吊图出来炸群",
            "继续潜水，等别人说话",
            "发一个表情包",
            "试探性抛出一个话题"
        ],
        scores: [2, -2, -1, 1]
    },
    // T4系列 - 金戈血压指数维度
    {
        id: "T4_1",
        question: "你打金戈一般是什么状态？",
        options: [
            "从开门打到关门，沉迷测试各种阴间阵容",
            "做完日常首胜任务立刻下线，多一把都是对血压的不尊重",
            "看心情，有时会多打几把，但翻车就收手",
            "很少打，不得不清符才多打几把"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T4_2",
        question: "金戈一局结束后你习惯？",
        options: [
            "不管输赢都发，甚至边打边发",
            "直接关掉，懒得看",
            "赢了在群里发一条炫耀，输了有时候也发了吐槽",
            "只有被恶心阵容折磨时才想在群里发消息"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T4_3",
        question: "你在金戈里最喜欢什么类型的阵容？",
        options: [
            "控制拉满的阴间冰冻爷爷，把对面控到死",
            "抄来的当前版本T0最强阵容",
            `用我推为核心，自研的"用爱发电"阵容`,
            "有什么用什么，不太挑"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T4_4",
        question: "你被对面打死后的第一反应是？",
        options: [
            "看看回放研究一下",
            "平静地关闭，打开群聊开始水群",
            "血压飙升，在群里吐槽",
            "很快就忘了"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T4_5",
        question: "你对金戈排名的态度是？",
        options: [
            "能进紫虚就冲，排名越高越好",
            "金戈馆？没进过",
            "努力冲到八段九段然后开始艰难蠕动",
            "奖励还可以就行，六段七段养老"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T4_6",
        question: "群里组织金戈内战，你？",
        options: [
            "第一个报名或者开始出主意",
            "假装没看到消息",
            "有空就参加，但不想被大佬暴打",
            "提问能不参加吗"
        ],
        scores: [2, -2, 1, -1]
    },
    // T5系列 - 氪金理智值维度
    {
        id: "T5_1",
        question: "看到新限定卡池时，你的第一反应是？",
        options: [
            "看看屯了多少抽，够不够保底",
            "打开充值界面",
            "先看测评，如果强就抽，不强就跳过",
            "上个月已经氪太多了，这次忍忍"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T5_2",
        question: "你的氪金记录更接近？",
        options: [
            "零氪党，坚持用爱发电",
            "只要喜欢就氪，经常冲动消费",
            "有规划地氪，只买性价比高的礼包",
            "嘴上说着不氪，但皮肤和限定从不错过"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T5_3",
        question: "你对限时氪金礼包的态度是？",
        options: [
            "与我无关，我是零氪，26别想骗我钱",
            "买！不买就亏了",
            "看看有没有想要的再决定",
            "纠结了好几天，最后还是买了"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T5_4",
        question: "又吃大保底了，你的表现是？",
        options: [
            "早有心理准备，资源规划里包含歪的可能",
            "怒而氪金，今天不抽到不睡觉",
            "群里吐槽几句，然后默默继续攒",
            "开始怀疑人生，考虑要不要弃坑"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T5_5",
        question: "月初和月末的你是？",
        options: [
            "资源管理大师，月初月末没区别",
            "月初：我只吃饭；月末：我只吃土",
            "偶尔手滑，但大多数时候还算理智",
            "不会吃土，但总觉得通宝不够用"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T5_6",
        question: "你认为氪佬在游戏里？",
        options: [
            "不可望也不可却",
            "我就是氪佬，为强度买单不叫亏",
            "互相尊重，各有各的玩法",
            "有点羡慕，但我的钱包不允许"
        ],
        scores: [2, -2, 1, -1]
    },
    // T6系列 - 雅社归属感表达维度
    {
        id: "T6_1",
        question: "新人入群时，你的欢迎方式是？",
        options: [
            '"欢迎新人！请领取雅社三大吉祥物和经典款"',
            "潜水",
            "复制前面人的欢迎队形",
            "等新人问攻略了再出来"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T6_2",
        question: "你在群里的发言频率更接近？",
        options: [
            "话痨本痨，红点制造者",
            "早就免打扰了，有需要才开",
            "有梗的时候话多，没梗的时候潜水",
            "只看不回，但@全体成员的消息从不漏"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T6_3",
        question: "打紫薇时，你的表现是？",
        options: [
            "表情包和骚话刷屏最多，日常围观石山搭建",
            "忘记布防被雪大人催",
            "不敢笑，我就是指挥搭建石山的",
            "默默听指挥打完走人"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T6_4",
        question: "你的群聊高光时刻通常是？",
        options: [
            "随时都是高光，AI总结里的常驻人员",
            "几乎没有，我存在感约等于零",
            "偶尔神来之笔，一句话引起一堆应声虫",
            "打开群发现几百条消息，吐槽一句你们真能聊"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T6_5",
        question: "有人在群里吐槽金戈被暴打，你会？",
        options: [
            "一边安慰一边发梗图，气氛必须整活",
            "默默看着，不知道怎么接话",
            "分享一段自己更惨的经历，比惨大会开始",
            "给出配队建议，试图帮上忙"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T6_6",
        question: "如果雅社要开始做招新小视频，你的位置是？",
        options: [
            "雅社门口挂着的人选首选之一",
            "不出镜，早已被遗忘",
            "飞速出镜一下",
            "不敢笑，我是挂人的"
        ],
        scores: [2, -2, 1, -1]
    },
    // T7系列 - 名士专情度维度
    {
        id: "T7_1",
        question: "你的桃源居送饭人/羁绊第一/置顶名士通常是？",
        options: [
            "永远是同一个名士，从开服用到现在",
            "换来换去，每个版本都在换新欢",
            "有几个固定喜欢的轮流换",
            "看上谁放谁"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T7_2",
        question: "新名士立绘曝光后，你的反应是？",
        options: [
            "好看，但完全比不上我推",
            '"新老婆！我失散多年的老婆！"',
            "欣赏一下，但不会移情别恋",
            "有点心动"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T7_3",
        question: "如果你的本命名士强度已经是版本眼泪，你会？",
        options: [
            "用爱发电，开发三保一阵容强行就业",
            "忍痛换下，把资源给强势名士",
            "给留一套装备，pve上场",
            "等等党永不服输，我还会继续低强度练的"
        ],
        scores: [2, -2, -1, 1]
    },
    {
        id: "T7_4",
        question: "你的签名更接近？",
        options: [
            "XXX单推人/XXX的狗",
            "经常改，随版本/新名士变化",
            "偶尔更新，但都和喜欢的名士有关",
            "万年不改的初始ID"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T7_5",
        question: "你上一个推的羁绊刷到多少级时，你爬墙了新名士？",
        options: [
            "爬墙？不存在的，我上一任就是我现任",
            "羁绊十几级拿完每日赠礼就移情别恋了",
            "刷满了才敢光明正大爬墙",
            "不好说，看眼缘"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T7_6",
        question: "你觉得同时推多个名士是？",
        options: [
            "对真爱的不尊重",
            "理所当然，那么多名士只推一个太亏了",
            "可以有主推和副推",
            "很正常，但自己没那么多精力"
        ],
        scores: [2, -2, 1, -1]
    },
    // T8系列 - 水群作息相位维度
    {
        id: "T8_1",
        question: "你通常在什么时间段最活跃？",
        options: [
            "24小时全天候，群友怀疑我不睡觉",
            "深夜出没，凌晨12-3点是主场",
            "正常作息时间，白天活跃",
            "随机闪现，没有规律"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T8_2",
        question: "你在半夜发的消息内容通常是？",
        options: [
            "当然是水群啊",
            "半夜不发，这些人都不睡觉的吗",
            "看到cue我我就回了",
            "潜水"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T8_3",
        question: `你的群聊"时差"现象严重吗？`,
        options: [
            "我永远在线，时差不存在",
            "非常严重，经常在大家聊完几百条后才出现",
            "偶尔会错过精彩讨论，但基本能跟上",
            "群聊太活跃了我根本追不上版本"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T8_4",
        question: "一条消息在凌晨1点发出，你回复的概率是？",
        options: [
            "80%以上，我基本都在",
            "0%，我在梦里",
            "30%，如果那天失眠的话",
            "50%，我是夜猫子但不定时在线"
        ],
        scores: [2, -2, -1, 1]
    },
    {
        id: "T8_5",
        question: "群聊消息999+未读，你会？",
        options: [
            "逐条爬楼，不错过任何梗",
            "直接无视，只看@我的",
            "AI总结，看看有没有好笑的内容",
            "有空的时候会翻，但一般翻不完"
        ],
        scores: [2, -2, 1, -1]
    },
    {
        id: "T8_6",
        question: "你理想中的群聊活跃时间是？",
        options: [
            "24小时都有不同的老婆/社友在聊天",
            "安静一点，重要事情@我就好",
            "工作日晚上和周末活跃就行",
            "我上线的时候能有人聊天就够了"
        ],
        scores: [2, -2, 1, -1]
    }
];

// 预设角色数据
const CHARACTERS = [
    {
        name: '熏猪肉',
        icon: '🍖',
        description: '你是一个超级强度党，热爱游戏，伟大的主司大人！雅社感谢有你。',
        scores: { xp: -12, impart: -11, meme: 7, pvp: 11, whale: -9, clan: 10, loyalty: -12, phase: -5 }
    },
    {
        name: '冰鲜',
        icon: '🧊',
        description: '你是XP党的代表，并且在金戈中总能保持平和心态。你会和冰鲜一样拥有一条狗吗？',
        scores: { xp: 0, impart: -5, meme: -3, pvp: 3, whale: 5, clan: 7, loyalty: 4, phase: 2 }
    },
    {
        name: '景区',
        icon: '🏞️',
        description: '你热爱我们的雅社，是吵闹的雅社魔丸之一。请选择你的主人...',
        scores: { xp: 12, impart: 10, meme: 5, pvp: -10, whale: 12, clan: 12, loyalty: 9, phase: 12 }
    },
    {
        name: '糊纸',
        icon: '📄',
        description: '你是雅社中的P图大师，善于造梗爆梗，更是游戏氪金大人之一。代表26谢谢你~',
        scores: { xp: -3, impart: 11, meme: 11, pvp: 8, whale: -9, clan: 12, loyalty: 6, phase: 11 }
    },
    {
        name: '伤银心',
        icon: '💔',
        description: '你是雅社的活跃魔丸，P图的主力军。现在去雅社门口挂着！',
        scores: { xp: -3, impart: 7, meme: 6, pvp: 0, whale: 5, clan: 11, loyalty: -2, phase: 6 }
    },
    {
        name: '叔叔',
        icon: '👨',
        description: '你是社群中的长者，经验丰富。大家都喜欢和你玩，你也乐于参与强度讨论。',
        scores: { xp: -11, impart: -12, meme: -11, pvp: 10, whale: -8, clan: 5, loyalty: -10, phase: 3 }
    },
    {
        name: '走向成功',
        icon: '🏆',
        description: '虽然你不怎么做梗图，但是也不时出来活跃活跃，喜欢和大家一起耍。',
        scores: { xp: 3, impart: -2, meme: -2, pvp: 8, whale: -3, clan: 0, loyalty: 9, phase: -3 }
    },
    {
        name: '嫂子',
        icon: '👩',
        description: '你是雅社的核心成员，虽然定期刷新但是并不影响你关心每一位使君。蒸蚌！',
        scores: { xp: 6, impart: 4, meme: 8, pvp: 3, whale: 5, clan: 10, loyalty: -3, phase: -3 }
    },
    {
        name: '腊肉鬼',
        icon: '👻',
        description: '你是竞技场上的强者，追求极致的强度和排名。你渴望切磋，为此不断努力。',
        scores: { xp: -12, impart: -12, meme: -10, pvp: 12, whale: -12, clan: 0, loyalty: -12, phase: 10 }
    },
    {
        name: '鹦鹉',
        icon: '🦜',
        description: '你是社群中的消息灵通人士，什么八卦都逃不过你的耳朵。你喜欢开impart，是雅社的impart担当。',
        scores: { xp: -7, impart: 12, meme: 2, pvp: 0, whale: 0, clan: 7, loyalty: 0, phase: 9 }
    },
    {
        name: '旅游金箔厂',
        icon: '🏭',
        description: '你是神秘的金箔厂，虽然不经常出现，但是其实你为了自己的XP/强度很能氪金！',
        scores: { xp: 2, impart: -8, meme: -3, pvp: -5, whale: 10, clan: -3, loyalty: 2, phase: -5 }
    }
];

// 全局变量
let currentQuestion = 0;
let userScores = {
    xp: 0,
    impart: 0,
    meme: 0,
    pvp: 0,
    whale: 0,
    clan: 0,
    loyalty: 0,
    phase: 0
};
let userAnswers = [];

// 页面元素
const startPage = document.getElementById('start-page');
const testPage = document.getElementById('test-page');
const resultPage = document.getElementById('result-page');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// 初始化测试
function initTest() {
    currentQuestion = 0;
    userScores = {
        xp: 0,
        impart: 0,
        meme: 0,
        pvp: 0,
        whale: 0,
        clan: 0,
        loyalty: 0,
        phase: 0
    };
    userAnswers = [];
    showQuestion();
    updateNavButtons();
}

// 更新导航按钮状态
function updateNavButtons() {
    prevBtn.disabled = currentQuestion === 0;
    const currentAnswer = userAnswers[currentQuestion];
    nextBtn.disabled = !currentAnswer;
}

// 显示题目
function showQuestion() {
    const question = QUESTIONS[currentQuestion];

    // 更新进度条
    const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;

    // 更新题目进度文字和百分比
    document.getElementById('question-progress').textContent = `第 ${currentQuestion + 1}/${QUESTIONS.length} 题`;
    document.getElementById('progress-percent').textContent = `${Math.round(progress)}%`;

    // 更新维度标签
    const dimension = getDimensionFromQuestionId(question.id);
    document.getElementById('dimension-badge').textContent = DIMENSION_NAMES[dimension];

    // 更新题目内容
    document.getElementById('question-text').textContent = question.question;

    // 更新选项并高亮已选选项
    const currentAnswer = userAnswers[currentQuestion];
    for (let i = 0; i < 4; i++) {
        document.getElementById(`opt-text-${i}`).textContent = question.options[i];
        const optBtn = document.getElementById(`opt-${i}`);
        optBtn.classList.toggle('selected', currentAnswer && currentAnswer.optionIndex === i);
    }

    // 更新导航按钮状态
    updateNavButtons();
}

// 计算与角色的相似度（使用欧几里得距离）
function calculateSimilarity(userScores, characterScores) {
    const dimensions = ['xp', 'impart', 'meme', 'pvp', 'whale', 'clan', 'loyalty', 'phase'];

    // 计算欧几里得距离的平方
    let sumSquaredDiff = 0;
    dimensions.forEach(dim => {
        const diff = userScores[dim] - characterScores[dim];
        sumSquaredDiff += diff * diff;
    });

    // 欧几里得距离
    const euclideanDistance = Math.sqrt(sumSquaredDiff);

    // 将距离转换为相似度百分比
    // 最大可能距离: sqrt(8 * 24^2) = sqrt(8 * 576) = sqrt(4608) ≈ 67.88
    // 使用缩放因子将距离转换为0-100的相似度
    const maxDistance = 68;
    const similarity = Math.round(Math.max(0, (1 - euclideanDistance / maxDistance) * 100));

    return similarity;
}

// 找到最相似的角色
function findBestMatch(userScores) {
    let bestCharacter = null;
    let highestSimilarity = 0;
    
    // 检查是否有特殊答案需要处理
    const hasSpecialAnswer_T3_4 = userAnswers.some(
        answer => answer.questionId === 'T3_4' && answer.optionIndex === 3
    );
    
    const hasSpecialAnswer_T6_3 = userAnswers.some(
        answer => answer.questionId === 'T6_3' && answer.optionIndex === 2
    );
    
    const hasSpecialAnswer_T6_6 = userAnswers.some(
        answer => answer.questionId === 'T6_6' && answer.optionIndex === 3
    );
    
    CHARACTERS.forEach(character => {
        let similarity = calculateSimilarity(userScores, character.scores);
        
        if (hasSpecialAnswer_T3_4 && (character.name === '冰鲜' || character.name === '熏猪肉')) {
            similarity += 2;
        }
        
        if (hasSpecialAnswer_T6_3 && character.name === '熏猪肉') {
            similarity += 5;
        }
        
        if (hasSpecialAnswer_T6_6 && character.name === '熏猪肉') {
            similarity += 5;
        }
        
        if (similarity > highestSimilarity) {
            highestSimilarity = similarity;
            bestCharacter = character;
        }
    });
    
    return { character: bestCharacter, similarity: highestSimilarity };
}

// 维度评价文字描述
const DIMENSION_EVALUATIONS = {
    xp: {
        high: 'XP党本党！比起强度更在乎立绘和剧情，是社群里的人形立牌收集器。',
        low: '你是个务实派玩家，立绘再好看不如强度实在，追求的是版本之子。'
    },
    impart: {
        high: 'Impart狂热粉！群里搞impart你第一个冲，是社群的气氛组担当。',
        low: '低调路人粉，默默围观不怎么冒泡，但关键时刻也会出手。'
    },
    meme: {
        high: '梗图大师！你的表情包库存是社群的精神财富，各种名梗张口就来。',
        low: '你更擅长默默欣赏，觉得好的表情包可能会保存但不怎么主动发。'
    },
    pvp: {
        high: '金戈战神！血压指数拉满，经常在群里吐槽对手阵容，输一把能念叨三天。',
        low: '心态稳健，输赢看淡，觉得游戏只是娱乐不必太当真。'
    },
    whale: {
        high: '氪金大佬！为爱发电不在话下，逢新必抽，是服务器的经济支柱。',
        low: '零氪或微氪玩家，坚信白嫖才是王道，花钱是不可能的。'
    },
    clan: {
        high: '雅社核心成员！积极参与社群活动，是招新宣传的门面担当。',
        low: '比较低调潜水，觉得雅社只是工具，有需要时才出现。'
    },
    loyalty: {
        high: '专情达人！从开服到现在只推一个名士，签名都是单推宣言。',
        low: '花心大萝卜，版本新欢不断，永远在寻找下一个真爱。'
    },
    phase: {
        high: '全天候在线！凌晨三点你还在水群，是社群的深夜守护者。',
        low: '正常作息党，看到凌晨的消息只能感叹你们真能熬。'
    }
};

// 获取维度评价
function getDimensionEvaluation(dim, score) {
    const evalData = DIMENSION_EVALUATIONS[dim];
    if (score > 4) {
        return evalData.high;
    } else if (score < -4) {
        return evalData.low;
    } else {
        return '你的得分居中，既不算极端也不算低调。';
    }
}

// 显示结果
function showResult() {
    const match = findBestMatch(userScores);

    // 更新角色匹配信息
    document.getElementById('character-icon').textContent = match.character.icon;
    document.getElementById('character-name').textContent = match.character.name;
    document.getElementById('character-description').textContent = match.character.description;
    document.getElementById('similarity-value').textContent = `${match.similarity}%`;

    // 更新各维度得分和评价
    const dimensions = ['xp', 'impart', 'meme', 'pvp', 'whale', 'clan', 'loyalty', 'phase'];

    dimensions.forEach(dim => {
        const score = userScores[dim];
        const fillEl = document.getElementById(`fill-${dim}`);
        const scoreEl = document.getElementById(`score-${dim}`);

        // 计算条形宽度（相对于中心点）
        const absScore = Math.abs(score);
        const percentage = (absScore / 12) * 50; // 最大50%（中心到边缘）

        fillEl.style.width = `${percentage}%`;
        fillEl.className = 'bar-fill ' + (score >= 0 ? 'warm' : 'cool');

        scoreEl.textContent = score > 0 ? `+${score}` : score;
        scoreEl.className = 'bar-score ' + (score > 0 ? 'positive' : score < 0 ? 'negative' : 'neutral');

        document.getElementById(`eval-${dim}`).textContent = getDimensionEvaluation(dim, score);
    });

    // 切换页面
    testPage.classList.remove('active');
    resultPage.classList.add('active');
}

// 根据题目ID获取维度
function getDimensionFromQuestionId(questionId) {
    const prefix = questionId.split('_')[0];
    const dimensionMap = {
        'T1': 'xp',
        'T2': 'impart',
        'T3': 'meme',
        'T4': 'pvp',
        'T5': 'whale',
        'T6': 'clan',
        'T7': 'loyalty',
        'T8': 'phase'
    };
    return dimensionMap[prefix] || 'xp';
}

// 选择选项（仅记录答案，不跳转）
function selectOption(optionIndex) {
    const question = QUESTIONS[currentQuestion];
    const score = question.scores[optionIndex];
    const dimension = getDimensionFromQuestionId(question.id);

    // 检查是否修改之前的答案，如果是则先减去旧分数
    const previousAnswer = userAnswers[currentQuestion];
    if (previousAnswer) {
        userScores[previousAnswer.dimension] -= previousAnswer.score;
    }

    // 记录用户选择的答案
    userAnswers[currentQuestion] = {
        questionId: question.id,
        optionIndex: optionIndex,
        score: score,
        dimension: dimension
    };

    // 更新该维度的分数
    userScores[dimension] += score;

    // 确保分数在 -12 到 +12 之间
    userScores[dimension] = Math.max(-12, Math.min(12, userScores[dimension]));

    // 高亮选中选项
    for (let i = 0; i < 4; i++) {
        document.getElementById(`opt-${i}`).classList.toggle('selected', i === optionIndex);
    }

    // 更新导航按钮状态
    updateNavButtons();
}

// 下一题
function nextQuestion() {
    if (currentQuestion < QUESTIONS.length - 1) {
        currentQuestion++;
        showQuestion();
    } else if (userAnswers[currentQuestion]) {
        // 最后一题且已作答，显示结果
        showResult();
    }
}

// 上一题
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

// 切换页面
function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    page.classList.add('active');
}

// 事件监听
startBtn.addEventListener('click', () => {
    showPage(testPage);
    initTest();
});

restartBtn.addEventListener('click', () => {
    showPage(startPage);
});

prevBtn.addEventListener('click', prevQuestion);
nextBtn.addEventListener('click', nextQuestion);

// 选项按钮点击事件
document.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const optionIndex = parseInt(btn.dataset.optionIndex);
        selectOption(optionIndex);
    });
});