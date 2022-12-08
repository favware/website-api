import type { PokemonTypes } from '#assets/pokemon-source';
import { Pokedex } from '#dexdata/pokedex';
import { TypesEnum } from '#utils/pokemonTypes';

const entries: [string, PokemonTypes.DexEntry][] = [
  [
    'sprigatito',
    {
      num: 906,
      species: 'sprigatito',
      types: [TypesEnum.Grass],
      genderRatio: { male: '87.5%', female: '12.5%' },
      baseStats: { hp: 40, atk: 61, def: 54, spa: 45, spd: 45, spe: 65 },
      abilities: { first: 'overgrow', hidden: 'protean' },
      heightm: 0.4,
      weightkg: 4.1,
      color: 'Green',
      evos: ['floragato'],
      eggGroups: ['Field', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      isEggObtainable: true,
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140
    }
  ],
  [
    'floragato',
    {
      num: 907,
      species: 'floragato',
      types: [TypesEnum.Grass],
      genderRatio: {
        male: '87.5%',
        female: '12.5%'
      },
      baseStats: { hp: 61, atk: 80, def: 63, spa: 60, spd: 63, spe: 83 },
      abilities: {
        first: 'overgrow',
        hidden: 'protean'
      },
      heightm: 0.9,
      weightkg: 12.2,
      color: 'Green',
      evos: ['meowscarada'],
      eggGroups: ['Field', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'meowscarada',
    {
      num: 908,
      species: 'meowscarada',
      types: [TypesEnum.Grass, TypesEnum.Dark],
      genderRatio: {
        male: '87.5%',
        female: '12.5%'
      },
      baseStats: { hp: 76, atk: 110, def: 70, spa: 81, spd: 70, spe: 123 },
      abilities: {
        first: 'overgrow',
        hidden: 'protean'
      },
      heightm: 1.5,
      weightkg: 31.2,
      color: 'Green',
      eggGroups: ['Field', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'fuecoco',
    {
      num: 909,
      species: 'fuecoco',
      types: [TypesEnum.Fire],
      genderRatio: {
        male: '87.5%',
        female: '12.5%'
      },
      baseStats: { hp: 67, atk: 45, def: 59, spa: 63, spd: 40, spe: 36 },
      abilities: {
        first: 'blaze',
        hidden: 'unaware'
      },
      heightm: 0.4,
      weightkg: 9.8,
      color: 'Red',
      evos: ['crocalor'],
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'crocalor',
    {
      num: 910,
      species: 'crocalor',
      types: [TypesEnum.Fire],
      genderRatio: {
        male: '87.5%',
        female: '12.5%'
      },
      baseStats: { hp: 81, atk: 55, def: 78, spa: 90, spd: 58, spe: 49 },
      abilities: {
        first: 'blaze',
        hidden: 'unaware'
      },
      heightm: 1,
      weightkg: 30.7,
      color: 'Red',
      evos: ['skeledirge'],
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'skeledirge',
    {
      num: 911,
      species: 'skeledirge',
      types: [TypesEnum.Fire, TypesEnum.Ghost],
      genderRatio: {
        male: '87.5%',
        female: '12.5%'
      },
      baseStats: { hp: 104, atk: 75, def: 100, spa: 110, spd: 75, spe: 66 },
      abilities: {
        first: 'blaze',
        hidden: 'unaware'
      },
      heightm: 1.6,
      weightkg: 326.5,
      color: 'Red',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'quaxly',
    {
      num: 912,
      species: 'quaxly',
      types: [TypesEnum.Water],
      genderRatio: {
        male: '87.5%',
        female: '12.5%'
      },
      baseStats: { hp: 55, atk: 65, def: 45, spa: 50, spd: 45, spe: 50 },
      abilities: {
        first: 'torrent',
        hidden: 'moxie'
      },
      heightm: 0.5,
      weightkg: 6.1,
      color: 'Blue',
      evos: ['quaxwell'],
      eggGroups: ['Flying', 'Water 1'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'quaxwell',
    {
      num: 913,
      species: 'quaxwell',
      types: [TypesEnum.Water],
      genderRatio: {
        male: '87.5%',
        female: '12.5%'
      },
      baseStats: { hp: 70, atk: 85, def: 65, spa: 65, spd: 60, spe: 65 },
      abilities: {
        first: 'torrent',
        hidden: 'moxie'
      },
      heightm: 1.2,
      weightkg: 21.5,
      color: 'Blue',
      evos: ['quaquaval'],
      eggGroups: ['Flying', 'Water 1'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'quaquaval',
    {
      num: 914,
      species: 'quaquaval',
      types: [TypesEnum.Water, TypesEnum.Fighting],
      genderRatio: {
        male: '87.5%',
        female: '12.5%'
      },
      baseStats: { hp: 85, atk: 120, def: 80, spa: 85, spd: 75, spe: 85 },
      abilities: {
        first: 'torrent',
        hidden: 'moxie'
      },
      heightm: 1.8,
      weightkg: 61.9,
      color: 'Blue',
      eggGroups: ['Flying', 'Water 1'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'lechonk',
    {
      num: 915,
      species: 'lechonk',
      types: [TypesEnum.Normal],
      baseStats: { hp: 54, atk: 45, def: 40, spa: 35, spd: 45, spe: 35 },
      abilities: {
        first: 'aromaveil',
        second: 'gluttony',
        hidden: 'thickfat'
      },
      heightm: 0.5,
      weightkg: 10.2,
      color: 'Gray',
      evos: ['oinkologne', 'oinkologne-f'],
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'oinkologne',
    {
      num: 916,
      species: 'oinkologne',
      types: [TypesEnum.Normal],
      baseStats: { hp: 110, atk: 100, def: 75, spa: 59, spd: 80, spe: 65 },
      abilities: {
        first: 'lingeringaroma',
        second: 'gluttony',
        hidden: 'thickfat'
      },
      heightm: 1,
      weightkg: 120,
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'oinkolognef',
    {
      num: 916,
      species: 'oinkolognef',
      types: [TypesEnum.Normal],
      baseStats: { hp: 115, atk: 90, def: 70, spa: 59, spd: 90, spe: 65 },
      abilities: {
        first: 'aromaveil',
        second: 'gluttony',
        hidden: 'thickfat'
      },
      heightm: 1,
      weightkg: 120,
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'dudunsparce',
    {
      num: 917,
      species: 'dudunsparce',
      types: [TypesEnum.Normal],
      baseStats: { hp: 125, atk: 100, def: 80, spa: 85, spd: 75, spe: 55 },
      abilities: {
        first: 'serenegrace',
        second: 'runaway',
        hidden: 'rattled'
      },
      heightm: 3.6,
      weightkg: 39.2,
      color: 'Yellow',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'dudunsparcethreesegment',
    {
      num: 917,
      species: 'dudunsparcethreesegment',
      types: [TypesEnum.Normal],
      baseStats: { hp: 125, atk: 100, def: 80, spa: 85, spd: 75, spe: 55 },
      abilities: {
        first: 'serenegrace',
        second: 'runaway',
        hidden: 'rattled'
      },
      heightm: 4.5,
      weightkg: 47.4,
      color: 'Yellow',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'tarountula',
    {
      num: 918,
      species: 'tarountula',
      types: [TypesEnum.Bug],
      baseStats: { hp: 35, atk: 41, def: 45, spa: 29, spd: 40, spe: 20 },
      abilities: {
        first: 'insomnia',
        hidden: 'stakeout'
      },
      heightm: 0.3,
      weightkg: 4,
      color: 'White',
      evos: ['spidops'],
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'spidops',
    {
      num: 919,
      species: 'spidops',
      types: [TypesEnum.Bug],
      baseStats: { hp: 60, atk: 79, def: 92, spa: 52, spd: 86, spe: 35 },
      abilities: {
        first: 'insomnia',
        hidden: 'stakeout'
      },
      heightm: 1,
      weightkg: 16.5,
      color: 'Green',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'nymble',
    {
      num: 920,
      species: 'nymble',
      types: [TypesEnum.Bug],
      baseStats: { hp: 33, atk: 46, def: 40, spa: 21, spd: 25, spe: 45 },
      abilities: {
        first: 'swarm',
        hidden: 'tintedlens'
      },
      heightm: 0.2,
      weightkg: 1,
      color: 'Gray',
      evos: ['lokix'],
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'lokix',
    {
      num: 921,
      species: 'lokix',
      types: [TypesEnum.Bug, TypesEnum.Dark],
      baseStats: { hp: 71, atk: 102, def: 78, spa: 52, spd: 55, spe: 92 },
      abilities: {
        first: 'swarm',
        hidden: 'tintedlens'
      },
      heightm: 1,
      weightkg: 17.5,
      color: 'Gray',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'rellor',
    {
      num: 922,
      species: 'rellor',
      types: [TypesEnum.Bug],
      baseStats: { hp: 41, atk: 50, def: 60, spa: 31, spd: 58, spe: 30 },
      abilities: {
        first: 'compoundeyes',
        hidden: 'shedskin'
      },
      heightm: 0.2,
      weightkg: 1,
      color: 'Brown',
      evos: ['rabsca'],
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'rabsca',
    {
      num: 923,
      species: 'rabsca',
      types: [TypesEnum.Bug, TypesEnum.Psychic],
      baseStats: { hp: 75, atk: 50, def: 85, spa: 115, spd: 100, spe: 45 },
      abilities: {
        first: 'synchronize',
        hidden: 'telepathy'
      },
      heightm: 0.3,
      weightkg: 3.5,
      color: 'Green',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'greavard',
    {
      num: 924,
      species: 'greavard',
      types: [TypesEnum.Ghost],
      baseStats: { hp: 50, atk: 61, def: 60, spa: 30, spd: 55, spe: 34 },
      abilities: {
        first: 'pickup',
        hidden: 'fluffy'
      },
      heightm: 0.6,
      weightkg: 35,
      color: 'White',
      evos: ['houndstone'],
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'houndstone',
    {
      num: 925,
      species: 'houndstone',
      types: [TypesEnum.Ghost],
      baseStats: { hp: 72, atk: 101, def: 100, spa: 50, spd: 97, spe: 68 },
      abilities: {
        first: 'sandrush',
        hidden: 'fluffy'
      },
      heightm: 2,
      weightkg: 15,
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'flittle',
    {
      num: 926,
      species: 'flittle',
      types: [TypesEnum.Psychic],
      baseStats: { hp: 30, atk: 35, def: 30, spa: 55, spd: 40, spe: 75 },
      abilities: {
        first: 'anticipation',
        second: 'frisk',
        hidden: 'speedboost'
      },
      heightm: 0.2,
      weightkg: 1.5,
      color: 'Yellow',
      evos: ['espathra'],
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'espathra',
    {
      num: 927,
      species: 'espathra',
      types: [TypesEnum.Psychic],
      baseStats: { hp: 95, atk: 60, def: 60, spa: 101, spd: 60, spe: 105 },
      abilities: {
        first: 'opportunist',
        second: 'frisk',
        hidden: 'speedboost'
      },
      heightm: 1.9,
      weightkg: 90,
      color: 'Yellow',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'farigiraf',
    {
      num: 928,
      species: 'farigiraf',
      types: [TypesEnum.Normal, TypesEnum.Psychic],
      baseStats: { hp: 120, atk: 90, def: 70, spa: 110, spd: 70, spe: 60 },
      abilities: {
        first: 'cudchew',
        second: 'armortail',
        hidden: 'sapsipper'
      },
      heightm: 3.2,
      weightkg: 160,
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'wiglett',
    {
      num: 929,
      species: 'wiglett',
      types: [TypesEnum.Water],
      baseStats: { hp: 10, atk: 55, def: 25, spa: 35, spd: 25, spe: 95 },
      abilities: {
        first: 'gooey',
        second: 'rattled',
        hidden: 'sandveil'
      },
      heightm: 1.2,
      weightkg: 1.8,
      color: 'White',
      evos: ['wugtrio'],
      eggGroups: ['Water 3'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'wugtrio',
    {
      num: 930,
      species: 'wugtrio',
      types: [TypesEnum.Water],
      baseStats: { hp: 35, atk: 100, def: 50, spa: 50, spd: 70, spe: 120 },
      abilities: {
        first: 'gooey',
        second: 'rattled',
        hidden: 'sandveil'
      },
      heightm: 1.2,
      weightkg: 5.4,
      color: 'Red',
      eggGroups: ['Water 3'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'dondozo',
    {
      num: 931,
      species: 'dondozo',
      types: [TypesEnum.Water],
      baseStats: { hp: 150, atk: 100, def: 115, spa: 65, spd: 65, spe: 35 },
      abilities: {
        first: 'unaware',
        second: 'oblivious',
        hidden: 'waterveil'
      },
      heightm: 12,
      weightkg: 220,
      color: 'Blue',
      eggGroups: ['Water 2'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'veluza',
    {
      num: 932,
      species: 'veluza',
      types: [TypesEnum.Water, TypesEnum.Psychic],
      baseStats: { hp: 90, atk: 102, def: 73, spa: 78, spd: 65, spe: 70 },
      abilities: {
        first: 'moldbreaker',
        hidden: 'sharpness'
      },
      heightm: 2.5,
      weightkg: 90,
      color: 'Gray',
      eggGroups: ['Water 2'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'finizen',
    {
      num: 933,
      species: 'finizen',
      types: [TypesEnum.Water],
      baseStats: { hp: 70, atk: 45, def: 40, spa: 45, spd: 40, spe: 75 },
      abilities: {
        first: 'waterveil'
      },
      heightm: 1.3,
      weightkg: 60.2,
      color: 'Blue',
      evos: ['palafin'],
      eggGroups: ['Field', 'Water 2'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'palafin',
    {
      num: 934,
      species: 'palafin',
      types: [TypesEnum.Water],
      baseStats: { hp: 100, atk: 70, def: 72, spa: 53, spd: 62, spe: 100 },
      abilities: {
        first: 'zerotohero'
      },
      heightm: 1.3,
      weightkg: 60.2,
      color: 'Blue',
      eggGroups: ['Field', 'Water 2'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'palafinhero',
    {
      num: 934,
      species: 'palafinhero',
      types: [TypesEnum.Water],
      baseStats: { hp: 100, atk: 160, def: 97, spa: 106, spd: 87, spe: 100 },
      abilities: {
        first: 'zerotohero'
      },
      heightm: 1.8,
      weightkg: 97.4,
      color: 'Blue',
      eggGroups: ['Field', 'Water 2'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'smoliv',
    {
      num: 935,
      species: 'smoliv',
      types: [TypesEnum.Grass, TypesEnum.Normal],
      baseStats: { hp: 41, atk: 35, def: 45, spa: 58, spd: 51, spe: 30 },
      abilities: {
        first: 'earlybird',
        hidden: 'harvest'
      },
      heightm: 0.3,
      weightkg: 6.5,
      color: 'Green',
      evos: ['dolliv'],
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'dolliv',
    {
      num: 936,
      species: 'dolliv',
      types: [TypesEnum.Grass, TypesEnum.Normal],
      baseStats: { hp: 52, atk: 53, def: 60, spa: 78, spd: 78, spe: 33 },
      abilities: {
        first: 'earlybird',
        hidden: 'harvest'
      },
      heightm: 0.6,
      weightkg: 11.9,
      color: 'Green',
      evos: ['arboliva'],
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'arboliva',
    {
      num: 937,
      species: 'arboliva',
      types: [TypesEnum.Grass, TypesEnum.Normal],
      baseStats: { hp: 78, atk: 69, def: 90, spa: 125, spd: 109, spe: 39 },
      abilities: {
        first: 'seedsower',
        hidden: 'harvest'
      },
      heightm: 1.4,
      weightkg: 48.2,
      color: 'Green',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'capsakid',
    {
      num: 938,
      species: 'capsakid',
      types: [TypesEnum.Grass],
      baseStats: { hp: 52, atk: 62, def: 40, spa: 62, spd: 40, spe: 50 },
      abilities: {
        first: 'chlorophyll',
        second: 'insomnia',
        hidden: 'klutz'
      },
      heightm: 0.3,
      weightkg: 3,
      color: 'Green',
      evos: ['scovillain'],
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'scovillain',
    {
      num: 939,
      species: 'scovillain',
      types: [TypesEnum.Grass, TypesEnum.Fire],
      baseStats: { hp: 65, atk: 108, def: 65, spa: 108, spd: 65, spe: 75 },
      abilities: {
        first: 'chlorophyll',
        second: 'insomnia',
        hidden: 'moody'
      },
      heightm: 0.9,
      weightkg: 15,
      color: 'Green',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'tadbulb',
    {
      num: 940,
      species: 'tadbulb',
      types: [TypesEnum.Electric],
      baseStats: { hp: 61, atk: 31, def: 41, spa: 59, spd: 35, spe: 45 },
      abilities: {
        first: 'owntempo',
        second: 'static',
        hidden: 'damp'
      },
      heightm: 0.3,
      weightkg: 0.4,
      color: 'Yellow',
      evos: ['bellibolt'],
      eggGroups: ['Water 1'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'bellibolt',
    {
      num: 941,
      species: 'bellibolt',
      types: [TypesEnum.Electric],
      baseStats: { hp: 109, atk: 64, def: 91, spa: 103, spd: 83, spe: 45 },
      abilities: {
        first: 'electromorphosis',
        second: 'static',
        hidden: 'damp'
      },
      heightm: 1.2,
      weightkg: 113,
      color: 'Green',
      eggGroups: ['Water 1'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'varoom',
    {
      num: 942,
      species: 'varoom',
      types: [TypesEnum.Steel, TypesEnum.Poison],
      baseStats: { hp: 45, atk: 70, def: 63, spa: 30, spd: 45, spe: 47 },
      abilities: {
        first: 'overcoat',
        hidden: 'slowstart'
      },
      heightm: 1,
      weightkg: 35,
      color: 'Gray',
      evos: ['revavroom'],
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'revavroom',
    {
      num: 943,
      species: 'revavroom',
      types: [TypesEnum.Steel, TypesEnum.Poison],
      baseStats: { hp: 80, atk: 119, def: 90, spa: 54, spd: 67, spe: 90 },
      abilities: {
        first: 'overcoat',
        hidden: 'filter'
      },
      heightm: 1.8,
      weightkg: 120,
      color: 'Gray',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'orthworm',
    {
      num: 944,
      species: 'orthworm',
      types: [TypesEnum.Steel],
      baseStats: { hp: 70, atk: 85, def: 145, spa: 60, spd: 55, spe: 65 },
      abilities: {
        first: 'eartheater',
        hidden: 'sandveil'
      },
      heightm: 2.5,
      weightkg: 310,
      color: 'Pink',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'tandemaus',
    {
      num: 945,
      species: 'tandemaus',
      types: [TypesEnum.Normal],
      baseStats: { hp: 50, atk: 50, def: 45, spa: 40, spd: 45, spe: 75 },
      abilities: {
        first: 'runaway',
        second: 'pickup',
        hidden: 'owntempo'
      },
      heightm: 0.3,
      weightkg: 1.8,
      color: 'White',
      evos: ['maushold', 'maushold-four'],
      eggGroups: ['Field', 'Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'maushold',
    {
      num: 946,
      species: 'maushold',
      types: [TypesEnum.Normal],
      baseStats: { hp: 74, atk: 75, def: 70, spa: 65, spd: 75, spe: 111 },
      abilities: {
        first: 'friendguard',
        second: 'cheekpouch',
        hidden: 'technician'
      },
      heightm: 0.3,
      weightkg: 2.3,
      color: 'White',
      eggGroups: ['Field', 'Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'mausholdfour',
    {
      num: 946,
      species: 'mausholdfour',
      types: [TypesEnum.Normal],
      baseStats: { hp: 74, atk: 75, def: 70, spa: 65, spd: 75, spe: 111 },
      abilities: {
        first: 'friendguard',
        second: 'cheekpouch',
        hidden: 'technician'
      },
      heightm: 0.3,
      weightkg: 2.8,
      color: 'White',
      eggGroups: ['Field', 'Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'cetoddle',
    {
      num: 947,
      species: 'cetoddle',
      types: [TypesEnum.Ice],
      baseStats: { hp: 108, atk: 68, def: 45, spa: 30, spd: 40, spe: 43 },
      abilities: {
        first: 'thickfat',
        second: 'snowcloak',
        hidden: 'sheerforce'
      },
      heightm: 1.2,
      weightkg: 45,
      color: 'White',
      evos: ['cetitan'],
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'cetitan',
    {
      num: 948,
      species: 'cetitan',
      types: [TypesEnum.Ice],
      baseStats: { hp: 170, atk: 113, def: 65, spa: 45, spd: 55, spe: 73 },
      abilities: {
        first: 'thickfat',
        second: 'slushrush',
        hidden: 'sheerforce'
      },
      heightm: 4.5,
      weightkg: 700,
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'frigibax',
    {
      num: 949,
      species: 'frigibax',
      types: [TypesEnum.Dragon, TypesEnum.Ice],
      baseStats: { hp: 65, atk: 75, def: 45, spa: 35, spd: 45, spe: 55 },
      abilities: {
        first: 'thermalexchange',
        hidden: 'icebody'
      },
      heightm: 0.5,
      weightkg: 17,
      color: 'Gray',
      evos: ['arctibax'],
      eggGroups: ['Dragon', 'Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'arctibax',
    {
      num: 950,
      species: 'arctibax',
      types: [TypesEnum.Dragon, TypesEnum.Ice],
      baseStats: { hp: 90, atk: 95, def: 66, spa: 45, spd: 65, spe: 62 },
      abilities: {
        first: 'thermalexchange',
        hidden: 'icebody'
      },
      heightm: 0.8,
      weightkg: 30,
      color: 'Gray',
      evos: ['baxcalibur'],
      eggGroups: ['Dragon', 'Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'baxcalibur',
    {
      num: 951,
      species: 'baxcalibur',
      types: [TypesEnum.Dragon, TypesEnum.Ice],
      baseStats: { hp: 115, atk: 145, def: 92, spa: 75, spd: 86, spe: 87 },
      abilities: {
        first: 'thermalexchange',
        hidden: 'icebody'
      },
      heightm: 2.1,
      weightkg: 210,
      color: 'Gray',
      eggGroups: ['Dragon', 'Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'tatsugiri',
    {
      num: 952,
      species: 'tatsugiri',
      types: [TypesEnum.Dragon, TypesEnum.Water],
      baseStats: { hp: 68, atk: 50, def: 60, spa: 120, spd: 95, spe: 82 },
      abilities: {
        first: 'commander',
        hidden: 'stormdrain'
      },
      heightm: 0.3,
      weightkg: 8,
      color: 'Pink',
      eggGroups: ['Water 2'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'cyclizar',
    {
      num: 953,
      species: 'cyclizar',
      types: [TypesEnum.Dragon, TypesEnum.Normal],
      baseStats: { hp: 70, atk: 95, def: 65, spa: 85, spd: 65, spe: 121 },
      abilities: {
        first: 'shedskin',
        hidden: 'regenerator'
      },
      heightm: 1.6,
      weightkg: 63,
      color: 'Green',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'pawmi',
    {
      num: 954,
      species: 'pawmi',
      types: [TypesEnum.Electric],
      baseStats: { hp: 45, atk: 50, def: 20, spa: 40, spd: 25, spe: 60 },
      abilities: {
        first: 'static',
        second: 'naturalcure',
        hidden: 'ironfist'
      },
      heightm: 0.3,
      weightkg: 2.5,
      color: 'Yellow',
      evos: ['pawmo'],
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'pawmo',
    {
      num: 955,
      species: 'pawmo',
      types: [TypesEnum.Electric, TypesEnum.Fighting],
      baseStats: { hp: 60, atk: 75, def: 40, spa: 50, spd: 40, spe: 85 },
      abilities: {
        first: 'voltabsorb',
        second: 'naturalcure',
        hidden: 'ironfist'
      },
      heightm: 0.4,
      weightkg: 6.5,
      color: 'Yellow',
      evos: ['pawmot'],
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'pawmot',
    {
      num: 956,
      species: 'pawmot',
      types: [TypesEnum.Electric, TypesEnum.Fighting],
      baseStats: { hp: 70, atk: 115, def: 70, spa: 70, spd: 60, spe: 105 },
      abilities: {
        first: 'voltabsorb',
        second: 'naturalcure',
        hidden: 'ironfist'
      },
      heightm: 0.9,
      weightkg: 41,
      color: 'Yellow',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'wattrel',
    {
      num: 957,
      species: 'wattrel',
      types: [TypesEnum.Electric, TypesEnum.Flying],
      baseStats: { hp: 40, atk: 40, def: 35, spa: 55, spd: 40, spe: 70 },
      abilities: {
        first: 'windpower',
        second: 'voltabsorb',
        hidden: 'competitive'
      },
      heightm: 0.4,
      weightkg: 3.6,
      color: 'Black',
      evos: ['kilowattrel'],
      eggGroups: ['Water 1', 'Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'kilowattrel',
    {
      num: 958,
      species: 'kilowattrel',
      types: [TypesEnum.Electric, TypesEnum.Flying],
      baseStats: { hp: 70, atk: 70, def: 60, spa: 105, spd: 60, spe: 125 },
      abilities: {
        first: 'windpower',
        second: 'voltabsorb',
        hidden: 'competitive'
      },
      heightm: 1.4,
      weightkg: 38.6,
      color: 'Yellow',
      eggGroups: ['Water 1', 'Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'bombirdier',
    {
      num: 959,
      species: 'bombirdier',
      types: [TypesEnum.Flying, TypesEnum.Dark],
      baseStats: { hp: 70, atk: 103, def: 85, spa: 60, spd: 85, spe: 82 },
      abilities: {
        first: 'bigpecks',
        second: 'keeneye',
        hidden: 'rockypayload'
      },
      heightm: 1.5,
      weightkg: 42.9,
      color: 'White',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'squawkabilly',
    {
      num: 960,
      species: 'squawkabilly',
      types: [TypesEnum.Normal, TypesEnum.Flying],
      baseStats: { hp: 82, atk: 96, def: 51, spa: 45, spd: 51, spe: 92 },
      abilities: {
        first: 'intimidate',
        second: 'hustle',
        hidden: 'guts'
      },
      heightm: 0.6,
      weightkg: 2.4,
      color: 'Green',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'squawkabillyblue',
    {
      num: 960,
      species: 'squawkabillyblue',
      types: [TypesEnum.Normal, TypesEnum.Flying],
      baseStats: { hp: 82, atk: 96, def: 51, spa: 45, spd: 51, spe: 92 },
      abilities: {
        first: 'intimidate',
        second: 'hustle',
        hidden: 'guts'
      },
      heightm: 0.6,
      weightkg: 2.4,
      color: 'Blue',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'squawkabillyyellow',
    {
      num: 960,
      species: 'squawkabillyyellow',
      types: [TypesEnum.Normal, TypesEnum.Flying],
      baseStats: { hp: 82, atk: 96, def: 51, spa: 45, spd: 51, spe: 92 },
      abilities: {
        first: 'intimidate',
        second: 'hustle',
        hidden: 'sheerforce'
      },
      heightm: 0.6,
      weightkg: 2.4,
      color: 'Yellow',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'squawkabillywhite',
    {
      num: 960,
      species: 'squawkabillywhite',
      types: [TypesEnum.Normal, TypesEnum.Flying],
      baseStats: { hp: 82, atk: 96, def: 51, spa: 45, spd: 51, spe: 92 },
      abilities: {
        first: 'intimidate',
        second: 'hustle',
        hidden: 'sheerforce'
      },
      heightm: 0.6,
      weightkg: 2.4,
      color: 'White',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'flamigo',
    {
      num: 961,
      species: 'flamigo',
      types: [TypesEnum.Flying, TypesEnum.Fighting],
      baseStats: { hp: 82, atk: 115, def: 74, spa: 75, spd: 64, spe: 90 },
      abilities: {
        first: 'scrappy',
        second: 'tangledfeet',
        hidden: 'costar'
      },
      heightm: 1.6,
      weightkg: 37,
      color: 'Pink',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'klawf',
    {
      num: 962,
      species: 'klawf',
      types: [TypesEnum.Rock],
      baseStats: { hp: 70, atk: 100, def: 115, spa: 35, spd: 55, spe: 75 },
      abilities: {
        first: 'angershell',
        second: 'shellarmor',
        hidden: 'regenerator'
      },
      heightm: 1.3,
      weightkg: 79,
      color: 'Red',
      eggGroups: ['Water 3'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'nacli',
    {
      num: 963,
      species: 'nacli',
      types: [TypesEnum.Rock],
      baseStats: { hp: 55, atk: 55, def: 75, spa: 35, spd: 35, spe: 25 },
      abilities: {
        first: 'purifyingsalt',
        second: 'sturdy',
        hidden: 'clearbody'
      },
      heightm: 0.4,
      weightkg: 16,
      color: 'Brown',
      evos: ['naclstack'],
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'naclstack',
    {
      num: 964,
      species: 'naclstack',
      types: [TypesEnum.Rock],
      baseStats: { hp: 60, atk: 60, def: 100, spa: 35, spd: 65, spe: 35 },
      abilities: {
        first: 'purifyingsalt',
        second: 'sturdy',
        hidden: 'clearbody'
      },
      heightm: 0.5,
      weightkg: 105,
      color: 'Brown',
      evos: ['garganacl'],
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'garganacl',
    {
      num: 965,
      species: 'garganacl',
      types: [TypesEnum.Rock],
      baseStats: { hp: 100, atk: 100, def: 130, spa: 45, spd: 90, spe: 35 },
      abilities: {
        first: 'purifyingsalt',
        second: 'sturdy',
        hidden: 'clearbody'
      },
      heightm: 2.5,
      weightkg: 240,
      color: 'Brown',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'glimmet',
    {
      num: 966,
      species: 'glimmet',
      types: [TypesEnum.Rock, TypesEnum.Poison],
      baseStats: { hp: 48, atk: 35, def: 42, spa: 105, spd: 60, spe: 60 },
      abilities: {
        first: 'toxicdebris',
        hidden: 'corrosion'
      },
      heightm: 0.7,
      weightkg: 8,
      color: 'Blue',
      evos: ['glimmora'],
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'glimmora',
    {
      num: 967,
      species: 'glimmora',
      types: [TypesEnum.Rock, TypesEnum.Poison],
      baseStats: { hp: 83, atk: 55, def: 90, spa: 130, spd: 81, spe: 86 },
      abilities: {
        first: 'toxicdebris',
        hidden: 'corrosion'
      },
      heightm: 1.5,
      weightkg: 45,
      color: 'Blue',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'shroodle',
    {
      num: 968,
      species: 'shroodle',
      types: [TypesEnum.Poison, TypesEnum.Normal],
      baseStats: { hp: 40, atk: 65, def: 35, spa: 40, spd: 35, spe: 75 },
      abilities: {
        first: 'unburden',
        second: 'pickpocket',
        hidden: 'prankster'
      },
      heightm: 0.2,
      weightkg: 0.7,
      color: 'Gray',
      evos: ['grafaiai'],
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'grafaiai',
    {
      num: 969,
      species: 'grafaiai',
      types: [TypesEnum.Poison, TypesEnum.Normal],
      baseStats: { hp: 63, atk: 95, def: 65, spa: 80, spd: 72, spe: 110 },
      abilities: {
        first: 'unburden',
        second: 'poisontouch',
        hidden: 'prankster'
      },
      heightm: 0.7,
      weightkg: 27.2,
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'fidough',
    {
      num: 970,
      species: 'fidough',
      types: [TypesEnum.Fairy],
      baseStats: { hp: 37, atk: 55, def: 70, spa: 30, spd: 55, spe: 65 },
      abilities: {
        first: 'owntempo',
        hidden: 'klutz'
      },
      heightm: 0.3,
      weightkg: 10.9,
      color: 'Yellow',
      evos: ['dachsbun'],
      eggGroups: ['Field', 'Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'dachsbun',
    {
      num: 971,
      species: 'dachsbun',
      types: [TypesEnum.Fairy],
      baseStats: { hp: 57, atk: 80, def: 115, spa: 50, spd: 80, spe: 95 },
      abilities: {
        first: 'wellbakedbody',
        hidden: 'aromaveil'
      },
      heightm: 0.5,
      weightkg: 14.9,
      color: 'Brown',
      eggGroups: ['Field', 'Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'maschiff',
    {
      num: 972,
      species: 'maschiff',
      types: [TypesEnum.Dark],
      baseStats: { hp: 60, atk: 78, def: 60, spa: 40, spd: 51, spe: 51 },
      abilities: {
        first: 'intimidate',
        second: 'runaway',
        hidden: 'stakeout'
      },
      heightm: 0.5,
      weightkg: 16,
      color: 'Brown',
      evos: ['mabosstiff'],
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'mabosstiff',
    {
      num: 973,
      species: 'mabosstiff',
      types: [TypesEnum.Dark],
      baseStats: { hp: 80, atk: 120, def: 90, spa: 60, spd: 70, spe: 85 },
      abilities: {
        first: 'intimidate',
        second: 'guarddog',
        hidden: 'stakeout'
      },
      heightm: 1.1,
      weightkg: 61,
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'bramblin',
    {
      num: 974,
      species: 'bramblin',
      types: [TypesEnum.Grass, TypesEnum.Ghost],
      baseStats: { hp: 40, atk: 65, def: 30, spa: 45, spd: 35, spe: 60 },
      abilities: {
        first: 'windrider',
        hidden: 'infiltrator'
      },
      heightm: 0.6,
      weightkg: 0.6,
      color: 'Brown',
      evos: ['brambleghast'],
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'brambleghast',
    {
      num: 975,
      species: 'brambleghast',
      types: [TypesEnum.Grass, TypesEnum.Ghost],
      baseStats: { hp: 55, atk: 115, def: 70, spa: 80, spd: 70, spe: 90 },
      abilities: {
        first: 'windrider',
        hidden: 'infiltrator'
      },
      heightm: 1.2,
      weightkg: 6,
      color: 'Brown',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'gimmighoul',
    {
      num: 976,
      species: 'gimmighoul',
      types: [TypesEnum.Ghost],
      baseStats: { hp: 45, atk: 30, def: 70, spa: 75, spd: 70, spe: 10 },
      abilities: {
        first: 'rattled'
      },
      heightm: 0.3,
      weightkg: 5,
      color: 'Brown',
      evos: ['gholdengo'],
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'gimmighoulroaming',
    {
      num: 976,
      species: 'gimmighoulroaming',
      types: [TypesEnum.Ghost],
      baseStats: { hp: 45, atk: 30, def: 25, spa: 75, spd: 45, spe: 80 },
      abilities: {
        first: 'runaway'
      },
      heightm: 0.1,
      weightkg: 0.1,
      color: 'Blue',
      evos: ['gholdengo'],
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'gholdengo',
    {
      num: 977,
      species: 'gholdengo',
      types: [TypesEnum.Steel, TypesEnum.Ghost],
      baseStats: { hp: 87, atk: 60, def: 95, spa: 133, spd: 91, spe: 84 },
      abilities: {
        first: 'goodasgold'
      },
      heightm: 1.2,
      weightkg: 30,
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'greattusk',
    {
      num: 978,
      species: 'greattusk',
      types: [TypesEnum.Ground, TypesEnum.Fighting],
      baseStats: { hp: 115, atk: 131, def: 131, spa: 53, spd: 53, spe: 87 },
      abilities: {
        first: 'protosynthesis'
      },
      heightm: 2.2,
      weightkg: 320,
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'brutebonnet',
    {
      num: 979,
      species: 'brutebonnet',
      types: [TypesEnum.Grass, TypesEnum.Dark],
      baseStats: { hp: 111, atk: 127, def: 99, spa: 79, spd: 99, spe: 55 },
      abilities: {
        first: 'protosynthesis'
      },
      heightm: 1.2,
      weightkg: 21,
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'sandyshocks',
    {
      num: 981,
      species: 'sandyshocks',
      types: [TypesEnum.Electric, TypesEnum.Ground],
      baseStats: { hp: 85, atk: 81, def: 97, spa: 121, spd: 85, spe: 101 },
      abilities: {
        first: 'protosynthesis'
      },
      heightm: 2.3,
      weightkg: 60,
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'screamtail',
    {
      num: 982,
      species: 'screamtail',
      types: [TypesEnum.Fairy, TypesEnum.Psychic],
      baseStats: { hp: 115, atk: 65, def: 99, spa: 65, spd: 115, spe: 111 },
      abilities: {
        first: 'protosynthesis'
      },
      heightm: 1.2,
      weightkg: 8,
      color: 'Pink',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'fluttermane',
    {
      num: 983,
      species: 'fluttermane',
      types: [TypesEnum.Ghost, TypesEnum.Fairy],
      baseStats: { hp: 55, atk: 55, def: 55, spa: 135, spd: 135, spe: 135 },
      abilities: {
        first: 'protosynthesis'
      },
      heightm: 1.4,
      weightkg: 4,
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'slitherwing',
    {
      num: 984,
      species: 'slitherwing',
      types: [TypesEnum.Bug, TypesEnum.Fighting],
      baseStats: { hp: 85, atk: 135, def: 79, spa: 85, spd: 105, spe: 81 },
      abilities: {
        first: 'protosynthesis'
      },
      heightm: 3.2,
      weightkg: 92,
      color: 'Red',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'roaringmoon',
    {
      num: 985,
      species: 'roaringmoon',
      types: [TypesEnum.Dragon, TypesEnum.Dark],
      baseStats: { hp: 105, atk: 139, def: 71, spa: 55, spd: 101, spe: 119 },
      abilities: {
        first: 'protosynthesis'
      },
      heightm: 2,
      weightkg: 380,
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'irontreads',
    {
      num: 986,
      species: 'irontreads',
      types: [TypesEnum.Ground, TypesEnum.Steel],
      baseStats: { hp: 90, atk: 112, def: 120, spa: 72, spd: 70, spe: 106 },
      abilities: {
        first: 'quarkdrive'
      },
      heightm: 0.9,
      weightkg: 240,
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'ironmoth',
    {
      num: 988,
      species: 'ironmoth',
      types: [TypesEnum.Fire, TypesEnum.Poison],
      baseStats: { hp: 80, atk: 70, def: 60, spa: 140, spd: 110, spe: 110 },
      abilities: {
        first: 'quarkdrive'
      },
      heightm: 1.2,
      weightkg: 36,
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'ironhands',
    {
      num: 989,
      species: 'ironhands',
      types: [TypesEnum.Fighting, TypesEnum.Electric],
      baseStats: { hp: 154, atk: 140, def: 108, spa: 50, spd: 68, spe: 50 },
      abilities: {
        first: 'quarkdrive'
      },
      heightm: 1.8,
      weightkg: 380.7,
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'ironjugulis',
    {
      num: 990,
      species: 'ironjugulis',
      types: [TypesEnum.Dark, TypesEnum.Flying],
      baseStats: { hp: 94, atk: 80, def: 86, spa: 122, spd: 80, spe: 108 },
      abilities: {
        first: 'quarkdrive'
      },
      heightm: 1.3,
      weightkg: 111,
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'ironthorns',
    {
      num: 991,
      species: 'ironthorns',
      types: [TypesEnum.Rock, TypesEnum.Electric],
      baseStats: { hp: 100, atk: 134, def: 110, spa: 70, spd: 84, spe: 72 },
      abilities: {
        first: 'quarkdrive'
      },
      heightm: 1.6,
      weightkg: 303,
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'ironbundle',
    {
      num: 992,
      species: 'ironbundle',
      types: [TypesEnum.Ice, TypesEnum.Water],
      baseStats: { hp: 56, atk: 80, def: 114, spa: 124, spd: 60, spe: 136 },
      abilities: {
        first: 'quarkdrive'
      },
      heightm: 0.6,
      weightkg: 11,
      color: 'Red',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'ironvaliant',
    {
      num: 993,
      species: 'ironvaliant',
      types: [TypesEnum.Fairy, TypesEnum.Fighting],
      baseStats: { hp: 74, atk: 130, def: 90, spa: 120, spd: 60, spe: 116 },
      abilities: {
        first: 'quarkdrive'
      },
      heightm: 1.4,
      weightkg: 35,
      color: 'White',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'tinglu',
    {
      num: 994,
      species: 'tinglu',
      types: [TypesEnum.Dark, TypesEnum.Ground],
      baseStats: { hp: 155, atk: 110, def: 125, spa: 55, spd: 80, spe: 45 },
      abilities: {
        first: 'vesselofruin'
      },
      heightm: 2.7,
      weightkg: 699.7,
      color: 'Brown',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'chienpao',
    {
      num: 995,
      species: 'chienpao',
      types: [TypesEnum.Dark, TypesEnum.Ice],
      baseStats: { hp: 80, atk: 120, def: 80, spa: 90, spd: 65, spe: 135 },
      abilities: {
        first: 'swordofruin'
      },
      heightm: 1.9,
      weightkg: 152.2,
      color: 'White',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'wochien',
    {
      num: 996,
      species: 'wochien',
      types: [TypesEnum.Dark, TypesEnum.Grass],
      baseStats: { hp: 85, atk: 85, def: 100, spa: 95, spd: 135, spe: 70 },
      abilities: {
        first: 'tabletsofruin'
      },
      heightm: 1.5,
      weightkg: 74.2,
      color: 'Brown',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'chiyu',
    {
      num: 997,
      species: 'chiyu',
      types: [TypesEnum.Dark, TypesEnum.Fire],
      baseStats: { hp: 55, atk: 80, def: 80, spa: 135, spd: 120, spe: 100 },
      abilities: {
        first: 'beadsofruin'
      },
      heightm: 0.4,
      weightkg: 4.9,
      color: 'Red',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'koraidon',
    {
      num: 998,
      species: 'koraidon',
      types: [TypesEnum.Fighting, TypesEnum.Dragon],
      baseStats: { hp: 100, atk: 135, def: 115, spa: 85, spd: 100, spe: 135 },
      abilities: {
        first: 'orichalcumpulse'
      },
      heightm: 2.5,
      weightkg: 303,
      color: 'Red',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'miraidon',
    {
      num: 999,
      species: 'miraidon',
      types: [TypesEnum.Electric, TypesEnum.Dragon],
      baseStats: { hp: 100, atk: 85, def: 100, spa: 135, spd: 115, spe: 135 },
      abilities: {
        first: 'hadronengine'
      },
      heightm: 3.5,
      weightkg: 240,
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'tinkatink',
    {
      num: 1000,
      species: 'tinkatink',
      types: [TypesEnum.Fairy, TypesEnum.Steel],
      baseStats: { hp: 50, atk: 45, def: 45, spa: 35, spd: 64, spe: 58 },
      abilities: {
        first: 'moldbreaker',
        second: 'owntempo',
        hidden: 'pickpocket'
      },
      heightm: 0.4,
      weightkg: 8.9,
      color: 'Pink',
      evos: ['tinkatuff'],
      eggGroups: ['Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'tinkatuff',
    {
      num: 1001,
      species: 'tinkatuff',
      types: [TypesEnum.Fairy, TypesEnum.Steel],
      baseStats: { hp: 65, atk: 55, def: 55, spa: 45, spd: 82, spe: 78 },
      abilities: {
        first: 'moldbreaker',
        second: 'owntempo',
        hidden: 'pickpocket'
      },
      heightm: 0.7,
      weightkg: 59.1,
      color: 'Pink',
      evos: ['tinkaton'],
      eggGroups: ['Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'tinkaton',
    {
      num: 1002,
      species: 'tinkaton',
      types: [TypesEnum.Fairy, TypesEnum.Steel],
      baseStats: { hp: 85, atk: 75, def: 77, spa: 70, spd: 105, spe: 94 },
      abilities: {
        first: 'moldbreaker',
        second: 'owntempo',
        hidden: 'pickpocket'
      },
      heightm: 0.7,
      weightkg: 112.8,
      color: 'Pink',
      eggGroups: ['Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'charcadet',
    {
      num: 1003,
      species: 'charcadet',
      types: [TypesEnum.Fire],
      baseStats: { hp: 40, atk: 50, def: 40, spa: 50, spd: 40, spe: 35 },
      abilities: {
        first: 'flashfire',
        hidden: 'flamebody'
      },
      heightm: 0.6,
      weightkg: 10.5,
      color: 'Red',
      evos: ['armarouge', 'ceruledge'],
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'armarouge',
    {
      num: 1004,
      species: 'armarouge',
      types: [TypesEnum.Fire, TypesEnum.Psychic],
      baseStats: { hp: 85, atk: 60, def: 100, spa: 125, spd: 80, spe: 75 },
      abilities: {
        first: 'flashfire',
        hidden: 'weakarmor'
      },
      heightm: 1.5,
      weightkg: 85,
      color: 'Red',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'ceruledge',
    {
      num: 1005,
      species: 'ceruledge',
      types: [TypesEnum.Fire, TypesEnum.Ghost],
      baseStats: { hp: 75, atk: 125, def: 80, spa: 60, spd: 100, spe: 85 },
      abilities: {
        first: 'flashfire',
        hidden: 'weakarmor'
      },
      heightm: 1.6,
      weightkg: 62,
      color: 'Blue',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'toedscool',
    {
      num: 1006,
      species: 'toedscool',
      types: [TypesEnum.Ground, TypesEnum.Grass],
      baseStats: { hp: 40, atk: 40, def: 35, spa: 50, spd: 100, spe: 70 },
      abilities: {
        first: 'myceliummight'
      },
      heightm: 0.9,
      weightkg: 33,
      color: 'Yellow',
      evos: ['toedscruel'],
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'toedscruel',
    {
      num: 1007,
      species: 'toedscruel',
      types: [TypesEnum.Ground, TypesEnum.Grass],
      baseStats: { hp: 80, atk: 70, def: 65, spa: 80, spd: 120, spe: 100 },
      abilities: {
        first: 'myceliummight'
      },
      heightm: 1.9,
      weightkg: 58,
      color: 'Black',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'kingambit',
    {
      num: 1008,
      species: 'kingambit',
      types: [TypesEnum.Dark, TypesEnum.Steel],
      baseStats: { hp: 100, atk: 135, def: 120, spa: 60, spd: 85, spe: 50 },
      abilities: {
        first: 'defiant',
        second: 'supremeoverlord',
        hidden: 'pressure'
      },
      heightm: 2,
      weightkg: 120,
      color: 'Black',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'clodsire',
    {
      num: 1009,
      species: 'clodsire',
      types: [TypesEnum.Poison, TypesEnum.Ground],
      baseStats: { hp: 130, atk: 75, def: 60, spa: 45, spd: 100, spe: 20 },
      abilities: {
        first: 'poisonpoint',
        second: 'waterabsorb',
        hidden: 'unaware'
      },
      heightm: 1.8,
      weightkg: 223,
      color: 'Brown',
      eggGroups: ['Water 1', 'Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ],
  [
    'annihilape',
    {
      num: 1010,
      species: 'annihilape',
      types: [TypesEnum.Fighting, TypesEnum.Ghost],
      baseStats: { hp: 110, atk: 115, def: 80, spa: 50, spd: 90, spe: 90 },
      abilities: {
        first: 'vitalspirit',
        second: 'innerfocus',
        hidden: 'defiant'
      },
      heightm: 1.2,
      weightkg: 56,
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      isEggObtainable: true
    }
  ]
];

for (const [key, value] of entries) {
  value.key = key;

  Pokedex.set(key, value);
}
