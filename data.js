// ==========================================================================
// 📚 《错误》课文词典与诗节数据集 (data.js) - 变调规范与三节对齐版
// 结构：共三节 9 行，节内以 ["<br>"] 换行、节间以 ["\n"] 分节，与 analysis.js 1–3 完全对齐
// ==========================================================================

const lessonTitle = "错误";
const sectionUnit = "节";

const lessonData = [
    // ===== 第1节（第1–2行：起调悬念——走过江南，等在季节里的容颜如莲花开落） =====
    ["我", "wǒ", "I", "aku"],
    ["打", "dǎ", "from / passing through", "melalui / dari"],
    ["江南", "jiāng nán", "Jiangnan (the region south of the Yangtze River)", "Jiangnan (selatan Sungai Yangtze)", "", "u"],
    ["走过", "zǒu guò", "walked / passed by", "berlalu pergi"],
    ["<br>", "", "", ""],
    ["那", "nà", "that", "wajah"],
    ["等在", "děng zài", "waiting in", "yang menanti di dalam"],
    ["季节", "jì jié", "the seasons'", "peredaran musim"],
    ["里的", "lǐ de", "within", "punya"],
    ["容颜", "róng yán", "countenance / face", "wajah jelita itu"],
    ["如", "rú", "is like", "ibarat"],
    ["莲花", "lián huā", "lotus flowers'", "bunga teratai punya"],
    ["的", "de", "'s", "(partikel)"],
    ["开落", "kāi luò", "blooming and fading", "mekar dan gugur layu"],

    ["\n", "", "", ""], // 👈 第2节（第3–7行：铺陈渲染——东风不来、跫音不响，寂寞的城与紧掩的窗扉）

    ["东风", "dōng fēng", "the east wind / spring breeze", "angin timur (bayu musim bunga)"],
    ["不来", "bù lái", "does not come", "tidak kunjung tiba"],
    ["，", "", "", ""],
    ["三月", "sān yuè", "March's (late spring's)", "bulan tiga musim bunga punya"],
    ["的", "de", "'s", "(partikel)"],
    ["柳絮", "liǔ xù", "willow catkins", "kapas dedalu"],
    ["不飞", "bù fēi", "do not fly / flutter", "tidak berterbangan"],
    ["<br>", "", "", ""],
    ["你的", "nǐ de", "your", "kau punya"],
    ["心", "xīn", "heart", "hati"],
    ["如", "rú", "is like", "bagaikan"],
    ["小小的", "xiǎo xiǎo de", "a tiny / small", "sebuah yang kecil"],
    ["寂寞", "jì mò", "lonely and desolate", "lagi sunyi sepi"],
    ["的", "de", "(particle)", "punya"],
    ["城", "chéng", "town / citadel", "pekan kota"],
    ["<br>", "", "", ""],
    ["恰若", "qià ruò", "just like", "persis seperti"],
    ["青石", "qīng shí", "bluestone / flagstones'", "batu-batu hijau punya"],
    ["的", "de", "(particle)", "(partikel)"],
    ["街道", "jiē dào", "street", "lorong jalanan"],
    ["向晚", "xiàng wǎn", "at dusk / approaching evening", "menjelang waktu senja"],
    ["<br>", "", "", ""],
    ["跫音", "qióng yīn", "the sound of footsteps (read qióng yīn)", "bunyi derap langkah kaki"],
    ["不响", "bù xiǎng", "does not sound / is not heard", "tidak kedengaran"],
    ["，", "", "", ""],
    ["三月的", "sān yuè de", "March's", "bulan tiga punya"],
    ["春帷", "chūn wéi", "spring curtains / drapes (read chūn wéi)", "tirai musim bunga"],
    ["不揭", "bù jiē", "are not lifted / drawn open", "tidak disingkap"],
    ["<br>", "", "", ""],
    ["你", "nǐ", "your", "kau"],
    ["底", "de", "'s (classical vernacular particle equivalent to 的, read de)", "punya"],
    ["心", "xīn", "heart", "hati"],
    ["是", "shì", "is", "ialah"],
    ["小小的", "xiǎo xiǎo de", "a small / tiny", "sebuah yang kecil"],
    ["窗扉", "chuāng fēi", "window casement / window leaf (read chuāng fēi)", "daun tingkap"],
    ["紧掩", "jǐn yǎn", "tightly shut / closed fast", "yang tertutup rapat"],

    ["\n", "", "", ""], // 👈 第3节（第8–9行：陡转收束——达达的马蹄是美丽的错误，不是归人是个过客）

    ["我", "wǒ", "my", "aku punya"],
    ["达达", "dá dá", "clip-clop (onomatopoeia for horse hooves)", "bunyi 'da-da' (derap kaki kuda)"],
    ["的", "de", "(particle)", "itu"],
    ["马蹄", "mǎ tí", "horse's hooves", "tapak kaki kuda"],
    ["是", "shì", "are", "merupakan"],
    ["美丽的", "měi lì de", "a beautiful", "suatu yang indah"],
    ["错误", "cuò wù", "mistake", "kesilapan"],
    ["<br>", "", "", ""],
    ["我", "wǒ", "I", "aku"],
    ["不是", "bú shì", "am not (read bú shì)", "bukanlah"],
    ["归人", "guī rén", "the returning man (her awaited beloved)", "insan yang pulang"],
    ["，", "", "", ""],
    ["是", "shì", "but am", "tetapi hanyalah"],
    ["个", "gè", "a", "seorang"],
    ["过客", "guò kè", "passing traveller / passer-by", "pengembara yang lalu"],
    ["……", "", "", ""],

    ["\n", "", "", ""], // 👈 出处（自动右对齐落款）

    ["（", "", "", ""],
    ["郑愁予", "zhèng chóu yú", "Zheng Chouyu (Zheng Wentao, 1933– )", "Zheng Chouyu", "", "u"],
    ["《", "", "", ""],
    ["错误", "cuò wù", "Mistake", "Kesilapan"],
    ["》）", "", "", ""]
];
