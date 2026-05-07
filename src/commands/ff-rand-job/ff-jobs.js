const EJobType = {
  Tank: 0,
  Healer: 1,
  Melee: 2,
  Range: 3,
  Caster: 4,
};

const jobs = [
  {
    name: "Paladin",
    abbr: 'PLD',
    type: EJobType.Tank,
    iconUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/thumb/1/1d/Paladin_frame_icon.png/40px-Paladin_frame_icon.png",
  },
  {
    name: "Guerrier",
    abbr: 'WAR',
    type: EJobType.Tank,
    iconUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/thumb/3/37/Warrior_frame_icon.png/40px-Warrior_frame_icon.png",
  },
  {
    name: "Chevalier Noir",
    abbr: 'DRK',
    type: EJobType.Tank,
    iconUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/thumb/c/c5/Dark_Knight_frame_icon.png/40px-Dark_Knight_frame_icon.png",
  },
  {
    name: "Pistosabreur",
    abbr: 'GNB',
    type: EJobType.Tank,
    iconUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/thumb/7/76/Gunbreaker_frame_icon1.png/40px-Gunbreaker_frame_icon1.png",
  },
  {
    name: "Mage Blanc",
    abbr: 'WHM',
    type: EJobType.Healer,
    iconUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/thumb/a/ab/White_Mage_frame_icon.png/40px-White_Mage_frame_icon.png",
  },
  {
    name: "Erudit",
    abbr: 'SCH',
    type: EJobType.Healer,
    iconUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/thumb/7/70/Scholar_frame_icon.png/40px-Scholar_frame_icon.png",
  },
  {
    name: "Astromancien",
    abbr: 'AST',
    type: EJobType.Healer,
    iconUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/thumb/3/32/Astrologian_frame_icon.png/40px-Astrologian_frame_icon.png",
  },
  {
    name: "Sage",
    abbr: 'SGE',
    type: EJobType.Healer,
    iconUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/thumb/2/23/Sage_frame_icon.png/40px-Sage_frame_icon.png",
  },
  {
    name: "Moine",
    abbr: 'MNK',
    type: EJobType.Melee,
    iconUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/thumb/6/62/Monk_frame_icon.png/40px-Monk_frame_icon.png",
  },
  {
    name: "Chevalier Dragon",
    abbr: 'DRG',
    type: EJobType.Melee,
    iconUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/thumb/4/44/Dragoon_frame_icon.png/40px-Dragoon_frame_icon.png",
  },
  {
    name: "Ninja",
    abbr: 'NIN',
    type: EJobType.Melee,
    iconUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/thumb/1/16/Ninja_frame_icon.png/40px-Ninja_frame_icon.png",
  },
  {
    name: "Samurai",
    abbr: 'SAM',
    type: EJobType.Melee,
    iconUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/thumb/b/b8/Samurai_frame_icon.png/40px-Samurai_frame_icon.png",
  },
  {
    name: "Faucheur",
    abbr: 'RPR',
    type: EJobType.Melee,
    iconUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/thumb/3/39/Reaper_frame_icon.png/40px-Reaper_frame_icon.png",
  },
  {
    name: "Rodeur Vipere",
    abbr: 'VPR',
    type: EJobType.Melee,
    iconUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/f/f8/Viper_frame_icon.png",
  },
  {
    name: "Barde",
    abbr: 'BRD',
    type: EJobType.Range,
    iconUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/thumb/8/80/Bard_frame_icon.png/40px-Bard_frame_icon.png",
  },
  {
    name: "Machiniste",
    abbr: 'MCH',
    type: EJobType.Range,
    iconUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/thumb/1/15/Machinist_frame_icon.png/40px-Machinist_frame_icon.png",
  },
  {
    name: "Danseur",
    abbr: 'DNS',
    type: EJobType.Range,
    iconUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/thumb/a/ae/Dancer_frame_icon1.png/40px-Dancer_frame_icon1.png",
  },
  {
    name: "Invocateur",
    abbr: 'SMN',
    type: EJobType.Caster,
    iconUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/thumb/6/62/Summoner_frame_icon.png/40px-Summoner_frame_icon.png",
  },
  {
    name: "Mage Rouge",
    abbr: 'RMG',
    type: EJobType.Caster,
    iconUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/thumb/4/47/Red_Mage_frame_icon.png/40px-Red_Mage_frame_icon.png",
  },
  {
    name: "Mage Noir",
    abbr: 'BMG',
    type: EJobType.Caster,
    iconUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/thumb/a/a0/Black_Mage_frame_icon.png/40px-Black_Mage_frame_icon.png",
  },
  {
    name: "Pictomancien",
    abbr: 'PCT',
    type: EJobType.Caster,
    iconUrl: "https://ffxiv.consolegameswiki.com/mediawiki/images/0/07/Pictomancer_frame_icon.png",
  },
];

module.exports = { EJobType, jobs };
