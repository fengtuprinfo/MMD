// Lyrics supplied by the user; cue starts from the matching NewEffects SRT files.
// Keep these separate from effects-songs.js so re-importing Effects preserves them.
const cast = [
  { name: '鋒兄', modelId: 10 },
  { name: '喵布布', modelId: 12 },
  { name: '塗哥', modelId: 11 },
  { name: '牙妹', modelId: 5 },
  { name: 'GPT 娘', modelId: 13 },
];
const staging = [
  { theme: 'rose', action: 'rally', moves: ['paw', 'cheer', 'heart', 'clap'] },
  { theme: 'violet', action: 'jackpot', moves: ['write', 'cash', 'cheer', 'cash'] },
  { theme: 'blue', action: 'tease', moves: ['royal', 'heart', 'clap', 'bow'] },
  { theme: 'rose', action: 'rally', moves: ['cash', 'paw', 'cheer', 'reach'] },
];

const stageCopy = {
  en: {
    chapters: [
      { title: 'Lucky Cat · Birthday Wishes', prop: '🎂 Happy 37th Birthday, Feng!' },
      { title: 'Tu’s Numbers · Jackpot', prop: '🎟 Power Lotto Jackpot · Share: 20,250,000' },
      { title: 'Both Families · Together' },
      { title: 'Encore · Sharing Joy', prop: '🐾 Lucky cat Bu Bu spreads joy far and wide 🐾' },
    ],
    outro: '— Good Luck Every Day —',
    ending: 'Show complete · Good Luck Every Day',
  },
  ja: {
    chapters: [
      { title: '招き猫 · 誕生日の祝福', prop: '🎂 フェン、37歳のお誕生日おめでとう！' },
      { title: 'トゥの番号 · 大当たり', prop: '🎟 パワーロト1等 · 分け前2,025万円' },
      { title: '両家の集い · 笑顔のひととき' },
      { title: 'アンコール · 幸せを届けよう', prop: '🐾 招き猫ブブが幸せを届ける 🐾' },
    ],
    outro: '— 福と幸せをいつまでも —',
    ending: '終演 · 福と幸せをいつまでも',
  },
  yue: {
    chapters: [
      { title: '招財喵 · 齊齊慶生', prop: '🎂 鋒兄，三十七歲生日快樂！' },
      { title: '塗哥揀號 · 中頭獎', prop: '🎟 威力彩頭獎 · 分紅兩千零二十五萬' },
      { title: '兩家人 · 齊齊到場' },
      { title: '再唱一次 · 齊享幸福', prop: '🐾 招財喵布布將幸福播灑 🐾' },
    ],
    outro: '— 謝幕 · 好運日日有 —',
    ending: '演出完滿結束 · 好運日日有',
  },
};

function translation({ language, label, sourceUrl, times, verses }) {
  const copy = stageCopy[language];
  return {
    id: `s102-${language}`,
    title: `統一發票頭獎得主鋒兄威力彩頭獎得主塗哥(${label}歌詞)`,
    subtitle: `鋒兄 · 塗哥 · ${label}版`,
    tagline: verses[0][0],
    sourceUrl,
    language,
    audio: `/audio/s102-${language}.mp3`,
    bpm: 117,
    outro: copy.outro,
    ending: copy.ending,
    cast,
    couples: false,
    chapters: staging.map((chapter, i) => ({ ...chapter, ...copy.chapters[i], lines: verses[i] })),
    times,
  };
}

export const luckyTranslations = [
  translation({
    language: 'en',
    label: '英文',
    sourceUrl: 'https://suno.com/s/NNjWp4nInpeloTf5',
    times: [10.86, 13.96, 16.92, 19.66, 22.4, 27.92, 34.44, 39.16, 45.02, 50.22, 64.6, 67.54, 70.2, 72.78, 75.74, 81.12, 87.74, 92.64, 98.16, 103.4],
    verses: [
      [
        'Lucky cat Bu Bu brings you blessings today',
        'Feng, may joy be with you at thirty-seven',
        'Your birthday gift: first prize, your receipt pays out',
        'Two hundred thousand makes you smile all day',
        'Tu, next birthday, may your wish at last come true',
        'Power Lotto’s grand prize is in sight',
      ],
      [
        'Feng pays, six meals cost forty-eight hundred',
        'Tu picks; your share is twenty million, two hundred fifty thousand',
        'Our family shares good luck today',
        'Lucky cat Bu Bu spreads joy far and wide',
      ],
      [
        'Tu’s mum and dad, Feng’s parents are all here now',
        'Lucky cat Bu Bu sees our joy shine bright',
        'May good fortune bless this family',
        'May wealth and joy stay with us evermore',
        'Tu, next birthday, may your wish at last come true',
        'Power Lotto’s grand prize is in sight',
      ],
      [
        'Feng pays, six meals cost forty-eight hundred',
        'Tu picks; your share is twenty million, two hundred fifty thousand',
        'Our family shares good luck today',
        'Lucky cat Bu Bu spreads joy far and wide',
      ],
    ],
  }),
  translation({
    language: 'ja',
    label: '日文',
    sourceUrl: 'https://suno.com/s/xb8brpvBy23lIyfx',
    times: [11.6, 15.16, 18.18, 20.96, 23.56, 29.2, 35.9, 40.7, 46.38, 49.52, 66.28, 68.72, 71.6, 74.92, 77.26, 82.9, 89.62, 94.56, 99.86, 103.28],
    verses: [
      [
        'ねこのブブ ふくをはこぶ',
        'フェン さんじゅうなな さちあれ',
        'ギフト レシートいっとう',
        'にじゅうまん えがおさく',
        'らいねん トゥのゆめかなう',
        'パワーロト すぐそこ',
      ],
      [
        'フェンがおごる ろくにん よんせんはっぴゃく',
        'トゥがあて にせんにじゅうごまんわけて',
        'かぞくでわけるふく',
        'ブブがしあわせをまく',
      ],
      [
        'りょうけのおやもあつまる',
        'ブブもみまもるえがお',
        'ふくのかみ みまもる',
        'とみとさち いつまでも',
        'らいねん トゥのゆめかなう',
        'パワーロト すぐそこ',
      ],
      [
        'フェンがおごる ろくにん よんせんはっぴゃく',
        'トゥがあて にせんにじゅうごまんわけて',
        'かぞくでわけるふく',
        'ブブがしあわせをまく',
      ],
    ],
  }),
  translation({
    language: 'yue',
    label: '粵文',
    sourceUrl: 'https://suno.com/s/a0XTF9CAMxLNOtBc',
    times: [11.46, 14.96, 18.24, 20.78, 23.3, 28.82, 35.44, 40.26, 45.92, 51.54, 65.64, 68.52, 71.32, 74.02, 76.7, 82.1, 88.98, 93.68, 99.52, 104.8],
    verses: [
      [
        '招財喵布布送嚟祝福滿滿',
        '祝鋒兄三十七歲開心相伴',
        '生日禮物係發票頭獎兌現',
        '二十萬蚊正開心笑哈哈',
        '塗哥下年生日願望要實現',
        '威力彩頭獎就喺眼前',
      ],
      [
        '鋒兄埋單六位共四千八',
        '塗哥揀號中獎分紅兩千零二十五萬發',
        '全家齊享呢份好運呀',
        '招財喵布布將幸福播灑',
      ],
      [
        '塗哥父母鋒兄父母都到場',
        '招財喵布布見證笑聲響',
        '幸運之神眷顧呢個家',
        '財富同快樂永遠唔散場',
        '塗哥下年生日願望要實現',
        '威力彩頭獎就喺眼前',
      ],
      [
        '鋒兄埋單六位共四千八',
        '塗哥揀號中獎分紅兩千零二十五萬發',
        '全家齊享呢份好運呀',
        '招財喵布布將幸福播灑',
      ],
    ],
  }),
];
