// ==========================================================================
// 📚 《水稻之歌》课文词典与诗节数据集 (data.js) - 变调规范与五节对齐版
// 结构：共五节 19 行，节内以 ["<br>"] 换行、节间以 ["\n"] 分节，与 analysis.js 1–5 完全对齐
// ==========================================================================

const lessonTitle = "水稻之歌";
const sectionUnit = "节";

const lessonData = [
    // ===== 第1节（第1–2行：水稻清晨醒来，察觉满脸晶莹清凉的露水） =====
    ["早晨", "zǎo chén", "in the early morning", "pada waktu pagi"],
    ["一醒", "yì xǐng", "as soon as I wake up (read yì xǐng)", "sebaik sahaja terjaga"],
    ["，", "", "", ""],
    ["就", "jiù", "immediately", "terus"],
    ["察觉", "chá jué", "notice / become aware", "menyedari"],
    ["满脸", "mǎn liǎn", "all over my face", "seluruh muka"],
    ["尽是", "jìn shì", "is covered with / full of", "dipenuhi dengan"],
    ["露水", "lù shuǐ", "dew / dewdrops", "air embun"],
    ["<br>", "", "", ""],
    ["颗颗", "kē kē", "every single drop / bead after bead", "setiap titisan"],
    ["晶莹", "jīng yíng", "sparkling and crystal-clear", "jernih berkilauan"],
    ["透明", "tòu míng", "transparent", "lut sinar"],
    ["，", "", "", ""],
    ["粒粒", "lì lì", "every single grain / drop after drop", "setiap butiran"],
    ["清凉", "qīng liáng", "cool and refreshing", "sejuk dan nyaman"],
    ["爽身", "shuǎng shēn", "invigorating the body", "menyegarkan tubuh badan"],

    ["\n", "", "", ""], // 👈 第2节（第3–5行：回头看隔壁大白菜肥肥胖胖相偎相依、好梦正甜）

    ["回头", "huí tóu", "turning my head / looking back", "menoleh ke belakang"],
    ["看看", "kàn kan", "taking a look at", "melihat"],
    ["住在", "zhù zài", "living", "yang tinggal di"],
    ["隔壁", "gé bì", "next door", "sebelah batas"],
    ["的", "de", "(particle)", "punya"],
    ["大白菜", "dà bái cài", "Chinese cabbages (napa cabbages)", "kubis Cina"],
    ["<br>", "", "", ""],
    ["肥肥胖胖", "féi féi pàng pàng", "plump and chubby", "gemuk dan gebu"],
    ["相偎相依", "xiāng wēi xiāng yī", "snuggling and leaning closely together (read xiāng wēi)", "berpelukan dan bersandaran mesra"],
    ["，", "", "", ""],
    ["<br>", "", "", ""],
    ["一家子", "yì jiā zi", "the whole family (read yì jiā zi)", "sekeluarga"],
    ["好梦", "hǎo mèng", "sweet dreams", "mimpi indah"],
    ["正甜", "zhèng tián", "sleeping soundly and sweetly", "sedang lena"],

    ["\n", "", "", ""], // 👈 第3节（第6–9行：远处的溪水如小牧童推挤跳闹，赶着小鱼吵醒独木桥）

    ["而", "ér", "while / whereas", "manakala"],
    ["远处的", "yuǎn chù de", "in the distance", "di kejauhan punya"],
    ["溪水", "xī shuǐ", "brook / stream water", "air anak sungai"],
    ["，", "", "", ""],
    ["<br>", "", "", ""],
    ["却是", "què shì", "is instead", "pula merupakan"],
    ["群", "qún", "a group of", "sekumpulan"],
    ["刚", "gāng", "who have just", "yang baru sahaja"],
    ["出门", "chū mén", "stepped out of the house", "keluar dari rumah"],
    ["的", "de", "(particle)", "punya"],
    ["小牧童", "xiǎo mù tóng", "little shepherd/cowherd boys", "budak gembala kecil"],
    ["<br>", "", "", ""],
    ["推挤", "tuī jǐ", "pushing and jostling", "bertolak-tolakan"],
    ["跳闹", "tiào nào", "leaping and frolicking", "melompat riuh-rendah"],
    ["，", "", "", ""],
    ["赶着", "gǎn zhe", "herding / driving along", "menghalau"],
    ["小鱼", "xiǎo yú", "little fish", "ikan-ikan kecil"],
    ["，", "", "", ""],
    ["<br>", "", "", ""],
    ["吵醒了", "chǎo xǐng le", "waking up with their noise", "mengejutkan daripada tidur"],
    ["一座", "yí zuò", "a (read yí zuò)", "sebuah"],
    ["矮矮短短", "ǎi ǎi duǎn duǎn", "low and short", "yang rendah lagi pendek"],
    ["的", "de", "(particle)", "punya"],
    ["独木桥", "dú mù qiáo", "single-plank / single-log bridge", "titian kayu tunggal"],

    ["\n", "", "", ""], // 👈 第4节（第10–17行：水稻学着山顶司令台的老太阳做早操，成体操队形散开）

    ["于是", "yú shì", "thereupon / so", "oleh itu"],
    ["，", "", "", ""],
    ["我们", "wǒ men", "we (the rice seedlings)", "kami (anak-anak padi)"],
    ["便", "biàn", "then", "pun"],
    ["兴高采烈", "xìng gāo cǎi liè", "in high spirits and jubilantly (read xìng gāo cǎi liè)", "dengan penuh riang gembira"],
    ["的", "de", "(adverbial particle)", "(partikel)"],
    ["前后", "qián hòu", "front and back", "di hadapan dan belakang"],
    ["看齐", "kàn qí", "lining up neatly / dressing ranks", "meluruskan barisan"],
    ["<br>", "", "", ""],
    ["学着", "xué zhe", "imitating / following", "meniru gaya"],
    ["那", "nà", "that", "itu"],
    ["刚", "gāng", "who has just", "yang baru sahaja"],
    ["登上", "dēng shàng", "ascended / stepped onto", "mendaki naik ke atas"],
    ["山顶", "shān dǐng", "the mountaintop's", "puncak gunung punya"],
    ["司令台", "sī lìng tái", "reviewing stand / command platform", "pentasรับรอง (pentas utama)"],
    ["的", "de", "(particle)", "itu"],
    ["老太阳", "lǎo tài yáng", "Old Man Sun", "Sang Matahari Tua"],
    ["<br>", "", "", ""],
    ["摇摇摆摆", "yáo yáo bǎi bǎi", "swaying and rocking to and fro", "bergoyang-goyang ke kiri kanan"],
    ["，", "", "", ""],
    ["把", "bǎ", "bringing", "merapatkan"],
    ["脚尖", "jiǎo jiān", "our tiptoes (roots/stems)", "hujung kaki"],
    ["并拢", "bìng lǒng", "closed together", "bercantum rapat"],
    ["<br>", "", "", ""],
    ["绿绿油油", "lǜ lǜ yōu yōu", "lush, glossy and verdant green (read lǜ lǜ yōu yōu)", "hijau subur berkilauan"],
    ["，", "", "", ""],
    ["把", "bǎ", "raising", "mengangkat"],
    ["手臂", "shǒu bì", "our arms (green rice leaves)", "lengan tangan"],
    ["高举", "gāo jǔ", "held high up", "tinggi ke atas"],
    ["<br>", "", "", ""],
    ["迎着", "yíng zhe", "facing / greeting", "menyambut"],
    ["和风", "hé fēng", "the gentle breeze (read hé fēng)", "tiupan bayu yang lembut"],
    ["<br>", "", "", ""],
    ["迎着", "yíng zhe", "facing / greeting", "menyambut"],
    ["第一声", "dì yī shēng", "the very first (read dì yī shēng)", "bunyi yang pertama"],
    ["鸟鸣", "niǎo míng", "birdsong / chirping of birds", "kicauan burung"],
    ["<br>", "", "", ""],
    ["成", "chéng", "forming into", "membentuk"],
    ["体操", "tǐ cāo", "gymnastics / morning exercise", "senaman pagi punya"],
    ["队形", "duì xíng", "formation", "formasi barisan"],
    ["<br>", "", "", ""],
    ["散", "sàn", "spreading (read sàn)", "berpecah"],
    ["——", "", "", ""],
    ["开", "kāi", "out!", "menyebar luas!"],

    ["\n", "", "", ""], // 👈 第5节（第18–19行：气势升华——一散，就是千里！）

    ["一散", "yí sàn", "once spread out (read yí sàn)", "sekali menyebar"],
    ["，", "", "", ""],
    ["就是", "jiù shì", "it stretches for", "terus meliputi sejauh"],
    ["<br>", "", "", ""],
    ["千里", "qiān lǐ", "a thousand miles!", "seribu batu luasnya!"],
    ["！", "", "", ""],

    ["\n", "", "", ""], // 👈 出处（自动右对齐落款）

    ["（", "", "", ""],
    ["罗青", "luó qīng", "Lo Ching (Taiwanese poet and painter Lo Ching-che, 1948– )", "Lo Ching", "", "u"],
    ["《", "", "", ""],
    ["水稻之歌", "shuǐ dào zhī gē", "Song of the Paddy Rice", "Lagu Padi Sawah"],
    ["》）", "", "", ""]
];
