const lots = [
  {
    no: 1,
    title: "云开见日",
    grade: "上上",
    poem: "一缕金光破晓寒，山门回首路初宽。守得清心三五日，自有春风到案前。",
    meaning: "久滞之事渐有转机，宜稳住心气，先整旧账，再启新局。此签贵在守正，不贵躁进。",
    advice: {
      事业: "旧项目可收尾，新机会在熟人引荐中显现。",
      财运: "正财平稳，偏财勿贪，宜查清合同细节。",
      姻缘: "误会可解，先开口者得和气。",
      健康: "调睡眠，少辛燥，精神自然回升。",
      学业: "基础题得分，难题待归纳后再攻。"
    }
  },
  {
    no: 2,
    title: "松下听泉",
    grade: "上",
    poem: "松阴不语水长流，急步何须问尽头。若把浮名轻一寸，眼前天地便清幽。",
    meaning: "所问宜慢不宜急。放下争胜之心，反能看见更顺的路径。",
    advice: {
      事业: "减少无谓竞争，把力气放在专业积累。",
      财运: "保守理财胜过追涨，分散风险。",
      姻缘: "相处重在听懂对方的节奏。",
      健康: "适合散步、拉伸，舒缓肩颈。",
      学业: "温故比刷题更有效。"
    }
  },
  {
    no: 3,
    title: "丹炉待火",
    grade: "中上",
    poem: "炉中真火未曾明，莫怨丹砂久不成。添得一分诚与定，三更风静听钟声。",
    meaning: "事情尚在酝酿，材料齐而火候未足。再多一点耐心，成色会更好。",
    advice: {
      事业: "方案需再打磨，别急于公开承诺。",
      财运: "投入前先设止损线。",
      姻缘: "关系有温度，但还需时间确认。",
      健康: "注意胃口与作息规律。",
      学业: "复盘错题，等量变成质变。"
    }
  },
  {
    no: 4,
    title: "过桥逢雨",
    grade: "中",
    poem: "半桥烟雨湿行衣，前路微茫莫自疑。借得芭蕉遮一阵，晴来仍可踏芳堤。",
    meaning: "眼下有阻，但非长久之困。先找临时解法，别把短雨看成寒冬。",
    advice: {
      事业: "流程会卡顿，主动沟通可缩短等待。",
      财运: "现金流要留余地。",
      姻缘: "小争执别翻旧账。",
      健康: "防湿寒，饮食清淡。",
      学业: "遇瓶颈先换方法，不必硬撞。"
    }
  },
  {
    no: 5,
    title: "明灯照壁",
    grade: "上",
    poem: "一点明灯照古墙，是非曲直自分张。若能心地无偏照，暗处尘埃也有光。",
    meaning: "问题的关键在真相与边界。说清楚、写清楚，便少许多后患。",
    advice: {
      事业: "适合谈判、复核、定规则。",
      财运: "账目透明则无忧。",
      姻缘: "坦白比试探更稳。",
      健康: "体检复查宜按时。",
      学业: "概念要讲得出口，才算真懂。"
    }
  },
  {
    no: 6,
    title: "鹤影归山",
    grade: "中上",
    poem: "鹤影横云入翠微，远人消息近将归。旧盟若问今何在，一片清风拂钓矶。",
    meaning: "远方消息、旧人旧事有回响。适合修复关系，也适合重新审视旧计划。",
    advice: {
      事业: "旧客户、旧同事可能带来线索。",
      财运: "过往款项有望回收。",
      姻缘: "旧情可谈清，不宜纠缠不明。",
      健康: "适合静养与恢复训练。",
      学业: "翻旧笔记会有新理解。"
    }
  },
  {
    no: 7,
    title: "竹影摇窗",
    grade: "中",
    poem: "竹影摇窗夜未央，疑心一起路偏长。推门只见清风在，莫把虚声作虎狼。",
    meaning: "多半是心中疑惧放大了问题。先核实，再判断。",
    advice: {
      事业: "消息未明前别站队。",
      财运: "不要被焦虑驱动消费。",
      姻缘: "少猜测，多确认。",
      健康: "压力反应明显，宜放松呼吸。",
      学业: "别因一次失误否定全局。"
    }
  },
  {
    no: 8,
    title: "金锁开门",
    grade: "上上",
    poem: "金锁多年一旦开，阶前花气绕庭来。贵人不在云深处，只在平常笑语回。",
    meaning: "难关将解，助力来自身边普通联系。真诚请教，回应会比想象中好。",
    advice: {
      事业: "适合申请、面试、推进审批。",
      财运: "正当收益增加，合作可谈。",
      姻缘: "朋友牵线、自然相处有佳象。",
      健康: "精神转佳，仍需节制。",
      学业: "请教老师同学，会打开思路。"
    }
  },
  {
    no: 9,
    title: "石上种莲",
    grade: "中下",
    poem: "石上栽莲费力多，春风未到奈渠何。且将根脚移清水，莫向顽岩苦折磨。",
    meaning: "方向或环境不合适。与其死守，不如调整位置与方法。",
    advice: {
      事业: "岗位、资源或合作方需重新评估。",
      财运: "不熟的领域暂缓投入。",
      姻缘: "单方面用力难成，留意回应。",
      健康: "别硬撑，必要时求专业帮助。",
      学业: "换教材或老师，比重复苦熬更好。"
    }
  },
  {
    no: 10,
    title: "月满中天",
    grade: "上",
    poem: "月满中天水满池，良宵莫负好佳期。此时若把初心守，花影人间两不欺。",
    meaning: "正处于较好的窗口期，宜把握但不宜炫耀。初心稳，则成果稳。",
    advice: {
      事业: "可展示成果，争取资源。",
      财运: "收益可见，记得落袋与储蓄。",
      姻缘: "感情升温，适合定下约定。",
      健康: "状态不错，维持运动。",
      学业: "考试、答辩、提交作品有利。"
    }
  },
  {
    no: 11,
    title: "古井无波",
    grade: "平",
    poem: "古井无波照客颜，荣枯只在寸心间。若问前程何处是，先将尘念洗三番。",
    meaning: "外局暂平，重点在心态整理。先定主次，再谈进退。",
    advice: {
      事业: "适合盘点，不适合大幅跳动。",
      财运: "收支平衡即可，不冒进。",
      姻缘: "平淡不是无情，需经营日常。",
      健康: "保持规律，避免久坐。",
      学业: "稳扎稳打，成绩缓慢上行。"
    }
  },
  {
    no: 12,
    title: "风送青云",
    grade: "上上",
    poem: "风送青云上九霄，胸中旧气一时消。若逢伯乐轻开口，千里驹蹄不惮遥。",
    meaning: "机遇上升，尤其利展示才华与被看见。主动表达会带来推力。",
    advice: {
      事业: "适合竞聘、发布作品、争取升迁。",
      财运: "收入有增长空间，靠能力变现。",
      姻缘: "大方表达，好感易明朗。",
      健康: "精力旺，但别透支。",
      学业: "竞赛、申请、发表皆有利。"
    }
  },
  {
    no: 13,
    title: "雾里寻舟",
    grade: "中下",
    poem: "雾里寻舟水拍沙，呼声未应日西斜。莫将一梦当归路，且待潮平认岸花。",
    meaning: "信息混乱，容易误判。暂缓重要决定，等局面清楚。",
    advice: {
      事业: "合同、岗位、承诺需再确认。",
      财运: "不碰高杠杆与口头保证。",
      姻缘: "暧昧不明先停一步。",
      健康: "症状不清要检查，不自行猜测。",
      学业: "先弄懂题意，再开始作答。"
    }
  },
  {
    no: 14,
    title: "玉阶生兰",
    grade: "上",
    poem: "玉阶昨夜露华浓，兰气微微入袖中。不向喧尘争颜色，自然清誉到门东。",
    meaning: "好名声来自长期稳重。此签利文书、名誉、口碑与温和推进。",
    advice: {
      事业: "把质量做好，会有人看见。",
      财运: "凭信誉得利，勿走捷径。",
      姻缘: "温柔真诚，胜过热闹张扬。",
      健康: "养肝护眼，少熬夜。",
      学业: "文章、作品、汇报有佳象。"
    }
  },
  {
    no: 15,
    title: "急水回舟",
    grade: "下",
    poem: "急水回舟浪打篷，一篙失处满江风。劝君莫趁贪程意，停泊湾头待月东。",
    meaning: "眼下不利强行推进。风险已露头，及时止步就是转机。",
    advice: {
      事业: "暂停冒险项目，先补漏洞。",
      财运: "守财为先，不借贷担保。",
      姻缘: "情绪上头时别做决定。",
      健康: "有不适应尽早就医。",
      学业: "临时抱佛脚效果有限，先保基础分。"
    }
  },
  {
    no: 16,
    title: "梅香破雪",
    grade: "中上",
    poem: "雪压寒枝未肯摧，一枝清气暗香来。艰难若问何时尽，已在东风第一回。",
    meaning: "苦局将松，仍需坚持最后一段。越在冷处，越见成色。",
    advice: {
      事业: "坚持当前路线，近期会有反馈。",
      财运: "小进账可期，仍需节省。",
      姻缘: "慢热关系渐有回应。",
      健康: "恢复期别急，循序渐进。",
      学业: "难关之后进步明显。"
    }
  },
  {
    no: 17,
    title: "宝镜拂尘",
    grade: "上",
    poem: "宝镜蒙尘久未磨，今朝拂处见星河。前非若肯从头改，旧路也能开绿萝。",
    meaning: "改过、整理、修复皆吉。承认问题后，事情反而容易变好。",
    advice: {
      事业: "复盘失误，重建流程。",
      财运: "清理欠款、订阅与闲置。",
      姻缘: "真诚道歉可化结。",
      健康: "调整旧习惯，收益明显。",
      学业: "纠错本比新资料更有用。"
    }
  },
  {
    no: 18,
    title: "桃溪问路",
    grade: "中",
    poem: "桃溪曲曲绕人家，问路儿童指落霞。莫怪前村难一见，转过青篱便有花。",
    meaning: "路不直，但并非无路。多问、多试，答案在转弯处。",
    advice: {
      事业: "换沟通对象或流程会更顺。",
      财运: "小额尝试可，大额需谨慎。",
      姻缘: "别急着定义关系，先相处。",
      健康: "适合调整运动方式。",
      学业: "换一种解题路径。"
    }
  },
  {
    no: 19,
    title: "钟声出谷",
    grade: "上",
    poem: "一声清磬出云阿，惊起尘心梦里波。若把真言传到处，回音自比旧时多。",
    meaning: "表达、传播、通知有利。说出真实需求，会得到回应。",
    advice: {
      事业: "适合汇报、演讲、推广。",
      财运: "靠信息差与专业沟通得利。",
      姻缘: "主动邀约比等待更好。",
      健康: "把压力说出来，别闷着。",
      学业: "讲给别人听，自己更通透。"
    }
  },
  {
    no: 20,
    title: "寒潭映月",
    grade: "平",
    poem: "寒潭映月影分明，动处偏教水不清。且把一心安定了，是非来去自无声。",
    meaning: "纷扰来自情绪波动。静下来，答案并不复杂。",
    advice: {
      事业: "减少临时变更，按计划执行。",
      财运: "别被市场噪音带着走。",
      姻缘: "冷静后再谈重要问题。",
      健康: "冥想、早睡、减咖啡因。",
      学业: "固定节奏胜过突击。"
    }
  },
  {
    no: 21,
    title: "龙门初跃",
    grade: "上上",
    poem: "龙门浪暖试新鳞，一跃何须问旧津。天外雷声催奋起，此番方见少年身。",
    meaning: "突破之象明显。适合挑战更高目标，但需以准备为底气。",
    advice: {
      事业: "跳槽、创业、转型有机会。",
      财运: "技能带财，正向投资自己。",
      姻缘: "关系可进入新阶段。",
      健康: "体能提升，注意防伤。",
      学业: "冲刺高目标，越练越稳。"
    }
  },
  {
    no: 22,
    title: "枯木逢春",
    grade: "上",
    poem: "枯木逢春又吐芽，旧庭深处见新花。休言往事皆成梦，今日栽培胜昔华。",
    meaning: "旧事复苏，失去的动力会回来。重启比另起炉灶更有利。",
    advice: {
      事业: "旧项目可翻新，资源仍在。",
      财运: "闲置资产或旧渠道可利用。",
      姻缘: "冷淡关系可重新升温。",
      健康: "恢复习惯，身体会响应。",
      学业: "捡回旧科目，进展不慢。"
    }
  },
  {
    no: 23,
    title: "孤舟夜泊",
    grade: "中下",
    poem: "孤舟夜泊听寒潮，灯火稀微隔岸遥。莫把凄清当定数，明朝帆影过溪桥。",
    meaning: "孤立感较强，但只是阶段。不要在低落时给人生下结论。",
    advice: {
      事业: "缺支持时先缩小目标。",
      财运: "减少非必要支出。",
      姻缘: "给彼此空间，别用沉默惩罚。",
      健康: "关注情绪与睡眠。",
      学业: "找同伴或导师，不独自硬撑。"
    }
  },
  {
    no: 24,
    title: "紫气东来",
    grade: "大吉",
    poem: "紫气东来绕玉台，仙风吹动百花开。人间好事从诚至，莫负天心一念栽。",
    meaning: "吉象充盈，万事以诚为先。越是顺时，越要谦和守分。",
    advice: {
      事业: "贵人、资源、机会齐来。",
      财运: "正财旺，合作收益可期。",
      姻缘: "缘分明朗，喜事可谈。",
      健康: "身心舒展，保持节律。",
      学业: "成果亮眼，适合定更高目标。"
    }
  },
  {
    no: 25,
    title: "白云出岫",
    grade: "中上",
    poem: "白云出岫本无心，去住随风不染尘。若问功名何日到，先将俗虑减三分。",
    meaning: "越放松，越顺手。此签利轻装前行，忌把自己逼太紧。",
    advice: {
      事业: "删减任务，专注核心。",
      财运: "控制欲望，财气自稳。",
      姻缘: "自然相处，不必过度设计。",
      健康: "减少精神负担。",
      学业: "轻压力复习更有效。"
    }
  },
  {
    no: 26,
    title: "炉烟直上",
    grade: "上",
    poem: "炉烟直上接青冥，一念虔诚万象宁。所愿若合清正道，三旬之内有回声。",
    meaning: "愿望明确且合情合理，容易得到回应。关键是持续行动。",
    advice: {
      事业: "提交申请、沟通诉求有利。",
      财运: "目标储蓄与预算见效。",
      姻缘: "认真承诺会让关系安定。",
      健康: "治疗或调理计划可坚持。",
      学业: "定计划后要每日兑现。"
    }
  },
  {
    no: 27,
    title: "山路逢樵",
    grade: "中",
    poem: "山路逢樵指短亭，崎岖未必少人行。肯将身段低三寸，便得柴门一盏明。",
    meaning: "求助有门。放下架子，向有经验的人问路。",
    advice: {
      事业: "导师、前辈、专业顾问有帮助。",
      财运: "咨询后再做复杂决策。",
      姻缘: "听取旁观者建议，但自己判断。",
      健康: "请专业人士评估。",
      学业: "补课、答疑、讨论都有效。"
    }
  },
  {
    no: 28,
    title: "秋水归源",
    grade: "平",
    poem: "秋水归源万籁清，浮萍散后见真情。不求远处添颜色，家有良田待早耕。",
    meaning: "回到根本，先照顾眼前人事与基本盘。远求不如近修。",
    advice: {
      事业: "先稳当前职责。",
      财运: "家庭预算与长期储备更重要。",
      姻缘: "珍惜身边稳定关系。",
      健康: "规律饮食胜过新奇方法。",
      学业: "回归课本与大纲。"
    }
  },
  {
    no: 29,
    title: "雷后新晴",
    grade: "中上",
    poem: "雷声昨夜动层城，雨洗尘埃草木青。若问惊心何处去，天边虹影已分明。",
    meaning: "冲突或震荡之后，局面转清。别怕变化，它正在清理障碍。",
    advice: {
      事业: "组织调整后机会显现。",
      财运: "波动后回稳，别恐慌操作。",
      姻缘: "吵过后能讲真话。",
      健康: "急性不适过后仍需观察。",
      学业: "考砸一次反而暴露重点。"
    }
  },
  {
    no: 30,
    title: "锦囊暂封",
    grade: "中下",
    poem: "锦囊妙计未宜开，风急云低客未回。静坐三更听漏尽，自然消息入门来。",
    meaning: "时机未到，暂时保密与等待更有利。过早行动易泄气。",
    advice: {
      事业: "方案先内部验证。",
      财运: "消息面未明，不追热点。",
      姻缘: "别急着公开或逼问答案。",
      健康: "等待报告，别乱用偏方。",
      学业: "先准备材料，等机会提交。"
    }
  },
  {
    no: 31,
    title: "清风入袖",
    grade: "上",
    poem: "清风入袖不须邀，万里尘襟一夕消。欲问前途多少路，轻装先过第三桥。",
    meaning: "卸下负累，轻装前进。断舍离后，速度会变快。",
    advice: {
      事业: "精简会议与低效协作。",
      财运: "整理资产，减少浪费。",
      姻缘: "放下旧怨，关系转轻。",
      健康: "减负减压，身体舒展。",
      学业: "删掉无效资料，聚焦重点。"
    }
  },
  {
    no: 32,
    title: "玄关一窍",
    grade: "上上",
    poem: "玄关一窍忽然通，万法归来在此中。昨日千思皆乱线，今朝一剪见春风。",
    meaning: "顿悟之象。复杂问题会突然找到关键点，适合破局。",
    advice: {
      事业: "技术难题、策略难题有突破。",
      财运: "找到真正的收益来源。",
      姻缘: "想明白自己的需要。",
      健康: "找到适合自己的调理方式。",
      学业: "掌握核心概念后进步很快。"
    }
  },
  {
    no: 33,
    title: "沙里淘金",
    grade: "中",
    poem: "沙里淘金手自劳，几番浑水见分毫。若嫌辛苦抛筛去，怎得明珠照锦袍。",
    meaning: "有收获，但需要筛选与耐心。成果藏在繁琐里。",
    advice: {
      事业: "数据、资料、细活会带来价值。",
      财运: "小钱累积，勿嫌慢。",
      姻缘: "了解细节后再投入。",
      健康: "长期管理比速效更可靠。",
      学业: "刷题后要分类总结。"
    }
  },
  {
    no: 34,
    title: "灯前补衣",
    grade: "平",
    poem: "灯前补衣线复线，破处缝来暖意添。世事不须求尽美，能遮风雨便安然。",
    meaning: "修补胜过重来。接受不完美，先让生活可运转。",
    advice: {
      事业: "修流程、补文档、稳交付。",
      财运: "补预算缺口，少买新物。",
      姻缘: "小处体贴能补裂痕。",
      健康: "先改善一个坏习惯。",
      学业: "薄弱章节逐一补齐。"
    }
  },
  {
    no: 35,
    title: "虎溪三笑",
    grade: "上",
    poem: "虎溪三笑忘归路，知己相逢酒未沽。莫道高山无人应，一声琴外有良徒。",
    meaning: "人和之签。朋友、同伴、团队会成为助力。",
    advice: {
      事业: "合作顺畅，适合组队推进。",
      财运: "共同项目可谈清分配后进行。",
      姻缘: "朋友式相处更稳。",
      健康: "结伴运动效果好。",
      学业: "学习小组有明显帮助。"
    }
  },
  {
    no: 36,
    title: "太清有路",
    grade: "大吉",
    poem: "太清有路步虚声，万里云开玉宇明。若守一心行善念，福缘不请自然生。",
    meaning: "大吉之象。所问若合正道，前路开阔；越能利己利人，越得顺遂。",
    advice: {
      事业: "长期愿景清晰，可大胆布局。",
      财运: "稳健增长，善用资源。",
      姻缘: "真心相待，佳缘可成。",
      健康: "气血顺畅，继续养正。",
      学业: "有望达成重要目标。"
    }
  }
];

const topicButtons = [...document.querySelectorAll(".topic")];
const resultCard = document.querySelector("#resultCard");
const drawButton = document.querySelector("#drawButton");
const copyButton = document.querySelector("#copyButton");
const clearHistoryButton = document.querySelector("#clearHistory");
const historyList = document.querySelector("#historyList");
const lotCylinder = document.querySelector("#lotCylinder");

const storageKey = "taishang-laojun-lots";
let activeTopic = "总览";
let currentLot = null;
let history = loadHistory();

function loadHistory() {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey) || "[]");
    return Array.isArray(value) ? value.slice(0, 6) : [];
  } catch {
    return [];
  }
}

function saveHistory() {
  localStorage.setItem(storageKey, JSON.stringify(history.slice(0, 6)));
}

function padNo(no) {
  return String(no).padStart(2, "0");
}

function drawLot() {
  drawButton.disabled = true;
  copyButton.disabled = true;
  lotCylinder.classList.remove("is-shaking");
  void lotCylinder.offsetWidth;
  lotCylinder.classList.add("is-shaking");

  window.setTimeout(() => {
    const lot = lots[Math.floor(Math.random() * lots.length)];
    currentLot = { ...lot, topic: activeTopic, drawnAt: new Date().toISOString() };
    renderResult(currentLot);
    addHistory(currentLot);
    drawButton.disabled = false;
    copyButton.disabled = false;
    drawButton.textContent = "再抽一签";
  }, 780);
}

function addHistory(lot) {
  history = [lot, ...history.filter((item) => item.no !== lot.no || item.topic !== lot.topic)].slice(0, 6);
  saveHistory();
  renderHistory();
}

function renderResult(lot) {
  const focused = activeTopic === "总览" ? null : lot.advice[activeTopic];
  const adviceEntries = Object.entries(lot.advice)
    .filter(([key]) => activeTopic === "总览" || key === activeTopic)
    .map(([key, value]) => `
      <div class="reading-item">
        <strong>${key}</strong>
        <span>${value}</span>
      </div>
    `)
    .join("");

  resultCard.innerHTML = `
    <div class="result-head">
      <div>
        <p class="lot-meta">第 ${padNo(lot.no)} 签 · ${lot.topic || activeTopic}${focused ? "专问" : ""}</p>
        <h2>${lot.title}</h2>
      </div>
      <div class="grade-badge">${lot.grade}</div>
    </div>
    <p class="poem">${lot.poem}</p>
    <p class="interpretation">${lot.meaning}</p>
    <div class="reading-grid">${adviceEntries}</div>
  `;
}

function renderHistory() {
  if (!history.length) {
    historyList.innerHTML = "";
    return;
  }

  historyList.innerHTML = history
    .map((item, index) => `
      <li>
        <button type="button" data-index="${index}" aria-label="查看第 ${padNo(item.no)} 签 ${item.title}">
          <span class="history-no">第 ${padNo(item.no)} 签 · ${item.grade}</span>
          <span class="history-title">${item.title}</span>
          <span class="history-topic">${item.topic || "总览"}</span>
        </button>
      </li>
    `)
    .join("");
}

function getPlainText(lot) {
  const topic = lot.topic || activeTopic;
  const lines = [
    `太上老君灵签 · 第 ${padNo(lot.no)} 签`,
    `${lot.title}（${lot.grade}）`,
    `所问：${topic}`,
    "",
    lot.poem,
    "",
    `解曰：${lot.meaning}`
  ];

  if (topic === "总览") {
    Object.entries(lot.advice).forEach(([key, value]) => lines.push(`${key}：${value}`));
  } else {
    lines.push(`${topic}：${lot.advice[topic]}`);
  }

  return lines.join("\n");
}

async function copyCurrentLot() {
  if (!currentLot) return;
  const text = getPlainText(currentLot);
  let copied = false;
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      copied = true;
    }
  } catch {
    copied = false;
  }

  if (!copied) {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    copied = document.execCommand("copy");
    area.remove();
  }

  copyButton.textContent = copied ? "已复制" : "复制失败";
  window.setTimeout(() => {
    copyButton.textContent = "复制签文";
  }, 1200);
}

topicButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeTopic = button.dataset.topic;
    topicButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-checked", String(selected));
    });
    if (currentLot) {
      currentLot = { ...currentLot, topic: activeTopic };
      renderResult(currentLot);
      addHistory(currentLot);
    }
  });
});

historyList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-index]");
  if (!button) return;
  const lot = history[Number(button.dataset.index)];
  if (!lot) return;
  currentLot = lot;
  activeTopic = lot.topic || "总览";
  topicButtons.forEach((item) => {
    const selected = item.dataset.topic === activeTopic;
    item.classList.toggle("is-active", selected);
    item.setAttribute("aria-checked", String(selected));
  });
  renderResult(currentLot);
  copyButton.disabled = false;
  drawButton.textContent = "再抽一签";
});

clearHistoryButton.addEventListener("click", () => {
  history = [];
  saveHistory();
  renderHistory();
});

drawButton.addEventListener("click", drawLot);
copyButton.addEventListener("click", copyCurrentLot);

renderHistory();
