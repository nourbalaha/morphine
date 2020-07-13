const jisho = [
    {
        "Arabic": "آلام في المعدة",
        "Japanese": "胃痛",
        "Furigana": "いつう"
    },
    {
        "Arabic": "ارتفاع ضغط الدم",
        "Japanese": "高血圧",
        "Furigana": "こうけつあつ"
    },
    {
        "Arabic": "الأضلاع",
        "Japanese": "肋骨",
        "Furigana": "ろっこつ"
    },
    {
        "Arabic": "الإرتجاع المعوي المريئي",
        "Japanese": "逆流性食道炎",
        "Furigana": "ぎゃくりゅうせいしょくどうえん"
    },
    {
        "Arabic": "التشنج الحراري",
        "Japanese": "熱性痙攣",
        "Furigana": "ねつせいけいれん"
    },
    {
        "Arabic": "التهاب الدماغ الياباني",
        "Japanese": "日本脳炎",
        "Furigana": "にほんのうえん"
    },
    {
        "Arabic": "التهاب الرئة",
        "Japanese": "肺炎",
        "Furigana": "はいえん",
        "تسميات أخرى": "ذات الرئة "
    },
    {
        "Arabic": "التهاب الزائدة الدودية",
        "Japanese": "虫垂炎",
        "Furigana": "ちゅうすいえん"
    },
    {
        "Arabic": "التهاب الكبد",
        "Japanese": "肝炎",
        "Furigana": "かんえん"
    },
    {
        "Arabic": "الجذام",
        "Japanese": "ハンセン病",
        "Furigana": "ハンセンびょう"
    },
    {
        "Arabic": "الجمجمة",
        "Japanese": "頭蓋骨",
        "Furigana": "ずがいこつ"
    },
    {
        "Arabic": "الحصبة",
        "Japanese": "麻疹",
        "Furigana": "ましん"
    },
    {
        "Arabic": "الحصبة الألمانية",
        "Japanese": "風疹",
        "Furigana": "ふうしん"
    },
    {
        "Arabic": "الربو",
        "Japanese": "喘息",
        "Furigana": "ぜんそく"
    },
    {
        "Arabic": "السائل النخاعي",
        "Japanese": "髄液",
        "Furigana": "ずいえき"
    },
    {
        "Arabic": "السعال الديكي",
        "Japanese": "百日咳",
        "Furigana": "ひゃくにちせき"
    },
    {
        "Arabic": "السل",
        "Japanese": "結核",
        "Furigana": "けっかく"
    },
    {
        "Arabic": "الشعور بالغثيان",
        "Japanese": "吐き気",
        "Furigana": "はきけ"
    },
    {
        "Arabic": "الطاعون",
        "Japanese": "ペスト"
    },
    {
        "Arabic": "الطفح الوردي",
        "Japanese": "突発性麻疹",
        "Furigana": "とっぱつせいましん"
    },
    {
        "Arabic": "الطول",
        "Japanese": "身長",
        "Furigana": "しんちょう"
    },
    {
        "Arabic": "الكساح",
        "Japanese": "くる病",
        "Furigana": "くるびょう"
    },
    {
        "Arabic": "الكوليرا",
        "Japanese": "コレラ"
    },
    {
        "Arabic": "المرارة ",
        "Japanese": "胆のう",
        "Furigana": "たんのう"
    },
    {
        "Arabic": "المريء",
        "Japanese": "食道",
        "Furigana": "しょくどう"
    },
    {
        "Arabic": "النكاف",
        "Japanese": "おたふく風邪",
        "Furigana": "おたふくかぜ"
    },
    {
        "Arabic": "الوزن",
        "Japanese": "体重",
        "Furigana": "たいじゅう"
    },
    {
        "Arabic": "انخفاض ضغط الدم",
        "Japanese": "低血圧",
        "Furigana": "ていけつあつ"
    },
    {
        "Arabic": "جدري الماء",
        "Japanese": "水痘",
        "Furigana": "すいとう"
    },
    {
        "Arabic": "حرقة في الصدر",
        "Japanese": "胸焼け",
        "Furigana": "むねやけ",
        "تسميات أخرى": "حرقة في أعلى المعدة نتيجة زيادة أحماض المعدة"
    },
    {
        "Arabic": "حصاة في المرارة",
        "Japanese": "胆石",
        "Furigana": "たんせき"
    },
    {
        "Arabic": "حصبة ",
        "Japanese": "麻疹",
        "Furigana": "はしか、ましん"
    },
    {
        "Arabic": "حمى التيفوئيد",
        "Japanese": "チフス"
    },
    {
        "Arabic": "داء السكري ",
        "Japanese": "糖尿病",
        "Furigana": "とうにょうびょう"
    },
    {
        "Arabic": "داء كاواساكي",
        "Japanese": "川崎病",
        "Furigana": "かわさきびょう"
    },
    {
        "Arabic": "دوالي الساقين",
        "Japanese": "下肢静脈瘤",
        "Furigana": "かしじょうみゃくりゅう",
        "تسميات أخرى": "دوالي وريدية، دوالي الساقين، دوالي الأوردة "
    },
    {
        "Arabic": "روماتيزم",
        "Japanese": "リウマチ"
    },
    {
        "Arabic": "زمرة الدم",
        "Japanese": "血液型",
        "Furigana": "けつえきがた"
    },
    {
        "Arabic": "زهايمر",
        "Japanese": "アルツハイマー "
    },
    {
        "Arabic": "سجل الأمراض السابقة",
        "Japanese": "既往症",
        "Furigana": "きおうしょう"
    },
    {
        "Arabic": "شلل الأطفال",
        "Japanese": "急性灰白髄炎",
        "Furigana": "きゅうせいかいはくずいえん"
    },
    {
        "Arabic": "عظم الترقوة",
        "Japanese": "鎖骨",
        "Furigana": "さこつ"
    },
    {
        "Arabic": "عظم الحوض",
        "Japanese": "骨盤",
        "Furigana": "こつばん"
    },
    {
        "Arabic": "عظم الشظية",
        "Furigana": "ひこつ"
    },
    {
        "Arabic": "عظم الظنبوب",
        "Japanese": "頚骨",
        "Furigana": "けいこつ"
    },
    {
        "Arabic": "عظم العضد",
        "Japanese": "上腕骨",
        "Furigana": "じょうわんこつ"
    },
    {
        "Arabic": "عظم الفخذ",
        "Japanese": "大腿骨",
        "Furigana": "だいたいこつ"
    },
    {
        "Arabic": "عظم القص",
        "Japanese": "胸骨",
        "Furigana": "きょうこつ"
    },
    {
        "Arabic": "عظم لوح الكتف",
        "Japanese": "肩甲骨",
        "Furigana": "けんこうこつ"
    },
    {
        "Arabic": "كزاز",
        "Japanese": "破傷風",
        "Furigana": "はしょうふう"
    },
    {
        "Arabic": "كوليرا",
        "Japanese": "コレラ",
        "Furigana": "虎列剌"
    },
    {
        "Arabic": "لوكيميا",
        "Japanese": "白血病",
        "Furigana": "はっけつびょう",
        "تسميات أخرى": "مرض ابيضاض الدم، سرطان الدم"
    },
    {
        "Arabic": "نقرس",
        "Japanese": "痛風",
        "Furigana": "つうふう",
        "تسميات أخرى": "التهاب المفاصل، داء المفاصل"
    },
    {
        "Arabic": "هشاشة العظام",
        "Japanese": "骨粗しょう症",
        "Furigana": "こつそしょうしょう"
    },
    {
        "Arabic": "وكعة أو تورم إبهام القدم",
        "Japanese": "外反母趾",
        "Furigana": "がいはんぼし",
        "تسميات أخرى": "تورم ثفني في إبهام القدم"
    },
    {
        "Arabic": "يرقان",
        "Japanese": "黄疸",
        "Furigana": "おうだん",
        "تسميات أخرى": "التهاب الكبد أ"
    },
    {
        "Japanese": "食物依存性運動誘発性アナフィラキシー",
        "Furigana": "しょくもついぞんせいうんどうゆうはつせいアナフィラキシー",
        "English": "Food-Dependent Exercise-Induced Anaphylaxis"
    },
    {
        "Japanese": "不思議の国のアリス症候群",
        "Furigana": "ふしぎのくにのアリスしょうこうぐん",
        "English": "Alice in Wonderland syndrome ",
        "الشرح بالياباني": "目に異常はないのに物が大きくまたは小さく見える"
    },
    {
        "Japanese": "顔面麻痺",
        "Furigana": "がんめんまひ"
    },
    {
        "Japanese": "角質層",
        "Furigana": "かくしつそう"
    },
    {
        "Japanese": "顆粒層",
        "Furigana": "かりゅうそう"
    },
    {
        "Japanese": "有棘層",
        "Furigana": "ゆうきょくそう"
    },
    {
        "Japanese": "基底層",
        "Furigana": "きていそう"
    },
    {
        "Japanese": "表皮"
    },
    {
        "Japanese": "真皮"
    },
    {
        "Japanese": "有棘細胞ガン",
        "Furigana": "ゆうきょくさいぼうガン"
    },
    {
        "Japanese": "動静脈奇形",
        "Furigana": "どうじょうみゃくきけい"
    },
    {
        "Japanese": "血行障害",
        "Furigana": "けっこうしょうがい"
    },
    {
        "Japanese": "壊死",
        "Furigana": "えし"
    },
    {
        "Japanese": "心不全",
        "Furigana": "しんふぜん"
    },
    {
        "Japanese": "プラダー・ウィリー症候群"
    },
    {
        "Japanese": "視床下部",
        "Furigana": "ししょうかぶ"
    },
    {
        "Japanese": "褐色脂肪細胞"
    },
    {
        "Japanese": "アカントアメーバ角膜炎",
        "Furigana": "アカントアメーバかくまくえん",
        "الشرح بالياباني": "脂肪を熱に変える細胞"
    },
    {
        "Japanese": "満腹中枢",
        "Furigana": "まんぷくちゅうす"
    },
    {
        "Japanese": "硬膜下血腫",
        "Furigana": "こうまくかけっしゅ"
    },
    {
        "Arabic": "شلل الأطفال",
        "Japanese": "ポリオ"
    },
    {
        "Arabic": "الفحص الطبي العام ",
        "Japanese": "診察一般",
        "Furigana": "しんさついっぱん"
    },
    {
        "Arabic": "مخطط جسم الإنسان",
        "Japanese": "人体図",
        "Furigana": "じんたいず"
    },
    {
        "Arabic": "الهضمية",
        "Japanese": "消化器",
        "Furigana": "しょうかき"
    },
    {
        "Arabic": "الجلدية",
        "Japanese": "皮膚",
        "Furigana": "ひふ"
    },
    {
        "Arabic": "المريء",
        "Japanese": "食道"
    },
    {
        "Arabic": "القلب",
        "Japanese": "心臓",
        "Furigana": "しんぞう"
    },
    {
        "Arabic": "المعدة",
        "Japanese": "胃",
        "Furigana": "い"
    },
    {
        "Arabic": "الأمعاء الدقيقة",
        "Japanese": "小腸",
        "Furigana": "しょうちょう"
    },
    {
        "Arabic": "الأمعاء الغليظة",
        "Japanese": "大腸",
        "Furigana": "だいちょう"
    },
    {
        "Arabic": "الرئة",
        "Japanese": "肺",
        "Furigana": "はい"
    },
    {
        "Arabic": "الكبد",
        "Japanese": "肝臓",
        "Furigana": "かんぞう"
    },
    {
        "Arabic": "الكلية",
        "Japanese": "腎臓",
        "Furigana": "じんぞう"
    },
    {
        "Arabic": "الحالب",
        "Japanese": "尿管",
        "Furigana": "にょうかん"
    },
    {
        "Arabic": "الأعور",
        "Japanese": "盲腸",
        "Furigana": "もうちょう"
    },
    {
        "Arabic": "المثانة",
        "Japanese": "膀胱",
        "Furigana": "ぼうこう"
    },
    {
        "Arabic": "الكتف",
        "Japanese": "肩"
    },
    {
        "Arabic": "الخصر",
        "Japanese": "腰"
    },
    {
        "Arabic": "بطة الرجل ",
        "Japanese": "ふくらはぎ"
    },
    {
        "Arabic": "الكاحل",
        "Japanese": "踝",
        "Furigana": "くるぶし"
    },
    {
        "Arabic": "الظهر ",
        "Japanese": "背中",
        "Furigana": "せなか"
    },
    {
        "Arabic": "المرفق",
        "Japanese": "肘",
        "Furigana": "ひじ"
    },
    {
        "Arabic": "الجبهة",
        "Japanese": "額",
        "Furigana": "ひたい"
    },
    {
        "Arabic": "الحاجب",
        "Japanese": "眉毛",
        "Furigana": "まゆげ"
    },
    {
        "Arabic": "جفن العين ",
        "Japanese": "目蓋",
        "Furigana": "まぶた"
    },
    {
        "Arabic": "العين ",
        "Japanese": "目",
        "Furigana": "め"
    },
    {
        "Arabic": "الأنف",
        "Japanese": "鼻",
        "Furigana": "はな"
    },
    {
        "Arabic": "الفم",
        "Japanese": "口",
        "Furigana": "くち"
    },
    {
        "Arabic": "الفك",
        "Japanese": "顎",
        "Furigana": "あご"
    },
    {
        "Arabic": "الرأس",
        "Japanese": "頭",
        "Furigana": "あたま"
    },
    {
        "Arabic": "الأذن",
        "Japanese": "耳",
        "Furigana": "みみ"
    },
    {
        "Arabic": "شحمة الأذن",
        "Japanese": "耳朶",
        "Furigana": "みみたぶ"
    },
    {
        "Arabic": "الوجنة",
        "Japanese": "頰",
        "Furigana": "ほお"
    },
    {
        "Arabic": "الظفر ",
        "Japanese": "爪",
        "Furigana": "つめ"
    },
    {
        "Arabic": "ظهر اليد ",
        "Japanese": "手の甲",
        "Furigana": "てのこう"
    },
    {
        "Arabic": "الإبهام",
        "Japanese": "親指",
        "Furigana": "おやゆび"
    },
    {
        "Arabic": "السبابة ",
        "Japanese": "人差し指",
        "Furigana": "ひとさしゆび"
    },
    {
        "Arabic": "الوسطى",
        "Japanese": "中指",
        "Furigana": "なかゆび"
    },
    {
        "Arabic": "البنصر ",
        "Japanese": "薬指",
        "Furigana": "くすりゆび"
    },
    {
        "Arabic": "الخنصر ",
        "Japanese": "小指",
        "Furigana": "こゆび"
    },
    {
        "Arabic": "راحة اليد ",
        "Japanese": "手の平",
        "Furigana": "てのひら"
    },
    {
        "Arabic": "البنكرياس",
        "Japanese": "膵臓",
        "Furigana": "すいぞう"
    },
    {
        "Arabic": "الطحال",
        "Japanese": "脾臓",
        "Furigana": "ひぞう"
    },
    {
        "Arabic": "الاثني عشر",
        "Japanese": "十二指腸",
        "Furigana": "じゅうにしちょう"
    },
    {
        "Arabic": "متلازمة كارتجنر",
        "Japanese": "カルタゲナー症候群"
    },
    {
        "Arabic": "عسر حركية الأهداب البدئي"
    },
    {
        "Arabic": "قياس ضغط الدم",
        "Japanese": "血圧測定",
        "Furigana": "けつあつそくてい"
    },
    {
        "Arabic": "تصوير أشعة",
        "Japanese": "レントゲン"
    },
    {
        "Arabic": "تصوير طبقي محوري",
        "Japanese": "CTスキャン"
    },
    {
        "Arabic": "التنظير الشعاعي للأمعاء"
    },
    {
        "Arabic": "زرع القشع"
    },
    {
        "Arabic": "تحليل البول",
        "Japanese": "検尿",
        "Furigana": "けんにょう"
    },
    {
        "Arabic": "تحليل الدم",
        "Japanese": "採血",
        "Furigana": "さいけつ"
    },
    {
        "Arabic": "التخطيط الكهربائي للقلب",
        "Japanese": "心電図"
    },
    {
        "Arabic": "تحليل البراز"
    },
    {
        "Arabic": "تنظير المعدة "
    },
    {
        "Arabic": "فحص الإيكو",
        "Japanese": "エコー"
    },
    {
        "Arabic": "المصل الطبي"
    },
    {
        "Arabic": "الحقن"
    },
    {
        "Arabic": "تخدير موضعي"
    },
    {
        "Arabic": "نقل الدم"
    },
    {
        "Arabic": "تخدير عام"
    },
    {
        "Arabic": "تجبير"
    },
    {
        "Arabic": "خياطة الجروح"
    },
    {
        "Arabic": "الحبوب"
    },
    {
        "Arabic": "التحاميل "
    },
    {
        "Arabic": "المساحيق الدوائية "
    },
    {
        "Arabic": "المراهم "
    },
    {
        "Arabic": "المضادات الحيوية"
    },
    {
        "Arabic": "أدوية الزكام"
    },
    {
        "Arabic": "مسكنات الألم "
    },
    {
        "Arabic": "مهدئ"
    },
    {
        "Arabic": "خافض حرارة"
    },
    {
        "Arabic": "الأسبيرين"
    },
    {
        "Arabic": "الكمادات"
    },
    {
        "Arabic": "الفيتامينات",
        "Japanese": "ビタミン"
    },
    {
        "Arabic": "شاش طبي"
    },
    {
        "Arabic": "سماعة طبية",
        "Japanese": "聴診器",
        "Furigana": "ちょうしんき"
    },
    {
        "Arabic": "ميزان حرارة "
    },
    {
        "Arabic": "كمادات باردة"
    },
    {
        "Arabic": "نقالة "
    },
    {
        "Arabic": "لاصق طبي "
    },
    {
        "Arabic": "إبرة"
    },
    {
        "Arabic": "سرير "
    },
    {
        "Arabic": "كمامة"
    },
    {
        "Arabic": "الغدة الدرقية",
        "Japanese": "甲状腺"
    },
    {
        "Arabic": "الغدة النكافية "
    },
    {
        "Arabic": "الغدة الزعترية ",
        "Japanese": "胸腺"
    },
    {
        "Arabic": "الغدة الصنوبرية "
    },
    {
        "Arabic": "الغدة النخامية "
    },
    {
        "Arabic": "اللوزتان",
        "Japanese": "扁桃腺",
        "Furigana": "へんとうせん"
    },
    {
        "Arabic": "ملاريا"
    },
    {
        "Arabic": "فقدان الوعي "
    },
    {
        "Arabic": "بلغم"
    },
    {
        "Arabic": "سيلان الأنف "
    },
    {
        "Arabic": "الرعاف "
    },
    {
        "Arabic": "انسداد الأنف",
        "Japanese": "鼻詰まり"
    },
    {
        "Arabic": "نقص الوزن "
    },
    {
        "Arabic": "فقدان الشهية "
    },
    {
        "Arabic": "ضيق التنفس",
        "Japanese": "息苦しさ"
    },
    {
        "Arabic": "صعوبة في التنفس",
        "Japanese": "呼吸困難",
        "Furigana": "こきゅうこんなん"
    },
    {
        "Arabic": "دوار",
        "Japanese": "めまい"
    },
    {
        "Arabic": "فقر الدم",
        "Japanese": "貧血",
        "Furigana": "ひんけつ"
    },
    {
        "Arabic": "ضربات القلب"
    },
    {
        "Arabic": "العقد اللمفاوية",
        "Japanese": "リンパ節",
        "Furigana": "りんぱせつ"
    },
    {
        "Arabic": "الإنفلونزا",
        "Japanese": "インフルエンザ"
    },
    {
        "Arabic": "سارس "
    },
    {
        "Arabic": "التهاب رئوي",
        "Japanese": "肺炎",
        "Furigana": "はいえん"
    },
    {
        "Arabic": "الربو القصيبي "
    },
    {
        "Arabic": "التهاب الكبد A",
        "Japanese": "A型肝炎",
        "Furigana": "Aがたかんえん"
    },
    {
        "Arabic": "التهاب الكبد B",
        "Japanese": "B型肝炎"
    },
    {
        "Arabic": "التهاب الكبد C",
        "Japanese": "C型肝炎"
    },
    {
        "Arabic": "التهاب كبد مزمن"
    },
    {
        "Arabic": "حصوات المرارة "
    },
    {
        "Arabic": "مرض الكبد الكحولي "
    },
    {
        "Arabic": "تليف الكبد"
    },
    {
        "Arabic": "التهاب المرارة "
    },
    {
        "Arabic": "أسفل البطن "
    },
    {
        "Arabic": "طفيليات "
    },
    {
        "Arabic": "التهاب الزائدة الدودية "
    },
    {
        "Arabic": "تسمم غذائي ",
        "Japanese": "食中毒"
    },
    {
        "Arabic": "خدر "
    },
    {
        "Arabic": "تيبس في الأكتاف ",
        "Japanese": "肩ゴリ"
    },
    {
        "Arabic": "التواء "
    },
    {
        "Arabic": "كسر "
    },
    {
        "Arabic": "طبلة الأذن"
    },
    {
        "Arabic": "القناة السمعية "
    },
    {
        "Arabic": "الشره العصبي (البوليميا)"
    },
    {
        "Arabic": "الأشعة فوق البنفسجية "
    },
    {
        "Arabic": "الكولاجين",
        "Japanese": "コラーゲン"
    },
    {
        "Arabic": "السكريات ",
        "Japanese": "糖質"
    },
    {
        "Arabic": "النشويات "
    },
    {
        "Arabic": "الكربوهيدارت"
    },
    {
        "Arabic": "حمية غذائية"
    },
    {
        "Arabic": "بروتين",
        "Japanese": "タンパク質"
    },
    {
        "Arabic": "ملح",
        "Japanese": "塩分"
    },
    {
        "Arabic": "حمض أميني",
        "Japanese": "アミノ酸"
    },
    {
        "Arabic": "ضربة الشمس/ ضربة الحر ",
        "Japanese": "熱中症"
    },
    {
        "Arabic": "صداع عنقودي ",
        "Japanese": "群発頭痛"
    },
    {
        "Arabic": "صداع نصفي "
    },
    {
        "Arabic": "صداع التوتر"
    },
    {
        "Japanese": "検温"
    },
    {
        "Japanese": "尿路結石症"
    },
    {
        "Japanese": "心筋こう塞"
    },
    {
        "Arabic": "حمى الضنك",
        "Japanese": "デング熱",
        "الشرح بالعربي": "فيروس ينتقل عن طريق البعوض، ومن أعراضه الصداع الشديد و"
    }
]

export default jisho;