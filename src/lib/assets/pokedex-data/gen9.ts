import type { PokemonTypes } from '#assets/pokemon-source';
import { Pokedex } from '#dexdata/pokedex';
import { TypesEnum } from '#utils/pokemonTypes';

const entries: [string, PokemonTypes.DexEntry][] = [
  [
    'sprigatito',
    {
      abilities: { first: 'overgrow', hidden: 'protean' },
      baseStats: { hp: 40, atk: 61, def: 54, spa: 45, spd: 45, spe: 65 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Field', 'Grass'],
      evos: ['floragato'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 906,
      species: 'sprigatito',
      types: [TypesEnum.Grass],
      weightkg: 4.1
    }
  ],
  [
    'floragato',
    {
      abilities: { first: 'overgrow', hidden: 'protean' },
      baseStats: { hp: 61, atk: 80, def: 63, spa: 60, spd: 63, spe: 83 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Field', 'Grass'],
      evoLevel: 16,
      evos: ['meowscarada'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 907,
      prevo: 'sprigatito',
      species: 'floragato',
      types: [TypesEnum.Grass],
      weightkg: 12.2
    }
  ],
  [
    'meowscarada',
    {
      abilities: { first: 'overgrow', hidden: 'protean' },
      baseStats: { hp: 76, atk: 110, def: 70, spa: 81, spd: 70, spe: 123 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Field', 'Grass'],
      evoLevel: 36,
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 908,
      prevo: 'floragato',
      species: 'meowscarada',
      types: [TypesEnum.Grass, TypesEnum.Dark],
      weightkg: 31.2
    }
  ],
  [
    'fuecoco',
    {
      abilities: { first: 'blaze', hidden: 'unaware' },
      baseStats: { hp: 67, atk: 45, def: 59, spa: 63, spd: 40, spe: 36 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Field'],
      evos: ['crocalor'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 909,
      species: 'fuecoco',
      types: [TypesEnum.Fire],
      weightkg: 9.8
    }
  ],
  [
    'crocalor',
    {
      abilities: { first: 'blaze', hidden: 'unaware' },
      baseStats: { hp: 81, atk: 55, def: 78, spa: 90, spd: 58, spe: 49 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Field'],
      evoLevel: 16,
      evos: ['skeledirge'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 910,
      prevo: 'fuecoco',
      species: 'crocalor',
      types: [TypesEnum.Fire],
      weightkg: 30.7
    }
  ],
  [
    'skeledirge',
    {
      abilities: { first: 'blaze', hidden: 'unaware' },
      aliases: ['LilChubbs v5'],
      baseStats: { hp: 104, atk: 75, def: 100, spa: 110, spd: 75, spe: 66 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Field'],
      evoLevel: 36,
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 911,
      prevo: 'crocalor',
      species: 'skeledirge',
      types: [TypesEnum.Fire, TypesEnum.Ghost],
      weightkg: 326.5
    }
  ],
  [
    'quaxly',
    {
      abilities: { first: 'torrent', hidden: 'moxie' },
      baseStats: { hp: 55, atk: 65, def: 45, spa: 50, spd: 45, spe: 50 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Flying', 'Water 1'],
      evos: ['quaxwell'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 1,
      num: 912,
      species: 'quaxly',
      types: [TypesEnum.Water],
      weightkg: 6.1
    }
  ],
  [
    'quaxwell',
    {
      abilities: { first: 'torrent', hidden: 'moxie' },
      baseStats: { hp: 70, atk: 85, def: 65, spa: 65, spd: 60, spe: 65 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Flying', 'Water 1'],
      evoLevel: 16,
      evos: ['quaquaval'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 1,
      num: 913,
      prevo: 'quaxly',
      species: 'quaxwell',
      types: [TypesEnum.Water],
      weightkg: 21.5
    }
  ],
  [
    'quaquaval',
    {
      abilities: { first: 'torrent', hidden: 'moxie' },
      baseStats: { hp: 85, atk: 120, def: 80, spa: 85, spd: 75, spe: 85 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Flying', 'Water 1'],
      evoLevel: 36,
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.8,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 914,
      prevo: 'quaxwell',
      species: 'quaquaval',
      types: [TypesEnum.Water, TypesEnum.Fighting],
      weightkg: 61.9
    }
  ],
  [
    'lechonk',
    {
      abilities: { first: 'aromaveil', second: 'gluttony', hidden: 'thickfat' },
      baseStats: { hp: 54, atk: 45, def: 40, spa: 35, spd: 45, spe: 35 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Gray',
      eggGroups: ['Field'],
      evos: ['oinkologne', 'oinkolognef'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 915,
      species: 'lechonk',
      types: [TypesEnum.Normal],
      weightkg: 10.2
    }
  ],
  [
    'oinkologne',
    {
      abilities: {
        first: 'lingeringaroma',
        second: 'gluttony',
        hidden: 'thickfat'
      },
      baseForme: 'male',
      baseStats: { hp: 110, atk: 100, def: 75, spa: 59, spd: 80, spe: 65 },
      catchRate: {
        base: 100,
        percentageWithOrdinaryPokeballAtFullHealth: '21.7%'
      },
      color: 'Gray',
      eggGroups: ['Field'],
      evoLevel: 18,
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 916,
      otherFormes: ['oinkolognef'],
      prevo: 'lechonk',
      species: 'oinkologne',
      types: [TypesEnum.Normal],
      weightkg: 120
    }
  ],
  [
    'oinkolognef',
    {
      abilities: { first: 'aromaveil', second: 'gluttony', hidden: 'thickfat' },
      baseSpecies: 'oinkologne',
      baseStats: { hp: 115, atk: 90, def: 70, spa: 59, spd: 90, spe: 65 },
      catchRate: {
        base: 100,
        percentageWithOrdinaryPokeballAtFullHealth: '21.7%'
      },
      color: 'Brown',
      eggGroups: ['Field'],
      evoLevel: 18,
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'female',
      formeLetter: 'F',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 916,
      otherFormes: ['oinkologne'],
      prevo: 'lechonk',
      species: 'oinkolognef',
      types: [TypesEnum.Normal],
      weightkg: 120
    }
  ],
  [
    'tarountula',
    {
      abilities: { first: 'insomnia', hidden: 'stakeout' },
      baseStats: { hp: 35, atk: 41, def: 45, spa: 29, spd: 40, spe: 20 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'White',
      eggGroups: ['Bug'],
      evos: ['spidops'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 3855,
      num: 917,
      species: 'tarountula',
      types: [TypesEnum.Bug],
      weightkg: 4
    }
  ],
  [
    'spidops',
    {
      abilities: { first: 'insomnia', hidden: 'stakeout' },
      baseStats: { hp: 60, atk: 79, def: 92, spa: 52, spd: 86, spe: 35 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Green',
      eggGroups: ['Bug'],
      evoLevel: 15,
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 3855,
      num: 918,
      prevo: 'tarountula',
      species: 'spidops',
      types: [TypesEnum.Bug],
      weightkg: 16.5
    }
  ],
  [
    'nymble',
    {
      abilities: { first: 'swarm', hidden: 'tintedlens' },
      baseStats: { hp: 33, atk: 46, def: 40, spa: 21, spd: 25, spe: 45 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Gray',
      eggGroups: ['Bug'],
      evos: ['lokix'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 919,
      species: 'nymble',
      types: [TypesEnum.Bug],
      weightkg: 1
    }
  ],
  [
    'lokix',
    {
      abilities: { first: 'swarm', hidden: 'tintedlens' },
      baseStats: { hp: 71, atk: 102, def: 78, spa: 52, spd: 55, spe: 92 },
      catchRate: { base: 30, percentageWithOrdinaryPokeballAtFullHealth: '8.8%' },
      color: 'Gray',
      eggGroups: ['Bug'],
      evoLevel: 24,
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 920,
      prevo: 'nymble',
      species: 'lokix',
      types: [TypesEnum.Bug, TypesEnum.Dark],
      weightkg: 17.5
    }
  ],
  [
    'pawmi',
    {
      abilities: { first: 'static', second: 'naturalcure', hidden: 'ironfist' },
      baseStats: { hp: 45, atk: 50, def: 20, spa: 40, spd: 25, spe: 60 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Field'],
      evos: ['pawmo'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 921,
      species: 'pawmi',
      types: [TypesEnum.Electric],
      weightkg: 2.5
    }
  ],
  [
    'pawmo',
    {
      abilities: {
        first: 'voltabsorb',
        second: 'naturalcure',
        hidden: 'ironfist'
      },
      baseStats: { hp: 60, atk: 75, def: 40, spa: 50, spd: 40, spe: 85 },
      catchRate: { base: 80, percentageWithOrdinaryPokeballAtFullHealth: '18.4%' },
      color: 'Yellow',
      eggGroups: ['Field'],
      evos: ['pawmot'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 18,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 922,
      prevo: 'pawmi',
      species: 'pawmo',
      types: [TypesEnum.Electric, TypesEnum.Fighting],
      weightkg: 6.5
    }
  ],
  [
    'pawmot',
    {
      abilities: {
        first: 'voltabsorb',
        second: 'naturalcure',
        hidden: 'ironfist'
      },
      baseStats: { hp: 70, atk: 115, def: 70, spa: 70, spd: 60, spe: 105 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: "walk 1000 steps in Let's Go without returning to Poké Ball and level it up",
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 923,
      prevo: 'pawmo',
      species: 'pawmot',
      types: [TypesEnum.Electric, TypesEnum.Fighting],
      weightkg: 41
    }
  ],
  [
    'tandemaus',
    {
      abilities: { first: 'runaway', second: 'pickup', hidden: 'owntempo' },
      baseStats: { hp: 50, atk: 50, def: 45, spa: 40, spd: 45, spe: 75 },
      catchRate: {
        base: 150,
        percentageWithOrdinaryPokeballAtFullHealth: '29.5%'
      },
      color: 'White',
      eggGroups: ['Field', 'Fairy'],
      evos: ['maushold', 'mausholdfour'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 2570,
      num: 924,
      species: 'tandemaus',
      types: [TypesEnum.Normal],
      weightkg: 1.8
    }
  ],
  [
    'maushold',
    {
      abilities: {
        first: 'friendguard',
        second: 'cheekpouch',
        hidden: 'technician'
      },
      baseForme: 'Family of Three',
      baseStats: { hp: 74, atk: 75, def: 70, spa: 65, spd: 75, spe: 111 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'White',
      eggGroups: ['Field', 'Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 25,
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 2570,
      num: 925,
      prevo: 'tandemaus',
      otherFormes: ['mausholdfour'],
      species: 'maushold',
      types: [TypesEnum.Normal],
      weightkg: 2.3
    }
  ],
  [
    'mausholdfour',
    {
      abilities: {
        first: 'friendguard',
        second: 'cheekpouch',
        hidden: 'technician'
      },
      baseSpecies: 'maushold',
      baseStats: { hp: 74, atk: 75, def: 70, spa: 65, spd: 75, spe: 111 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'White',
      eggGroups: ['Field', 'Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 25,
      forme: 'Family of Four',
      formeLetter: 'F',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 2570,
      num: 925,
      prevo: 'tandemaus',
      otherFormes: ['maushold'],
      species: 'mausholdfour',
      types: [TypesEnum.Normal],
      weightkg: 2.8
    }
  ],
  [
    'fidough',
    {
      abilities: { first: 'owntempo', hidden: 'klutz' },
      baseStats: { hp: 37, atk: 55, def: 70, spa: 30, spd: 55, spe: 65 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Field', 'Mineral'],
      evos: ['dachsbun'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 926,
      species: 'fidough',
      types: [TypesEnum.Fairy],
      weightkg: 10.9
    }
  ],
  [
    'dachsbun',
    {
      abilities: { first: 'wellbakedbody', hidden: 'aromaveil' },
      baseStats: { hp: 57, atk: 80, def: 115, spa: 50, spd: 80, spe: 95 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Brown',
      eggGroups: ['Field', 'Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 26,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 927,
      prevo: 'fidough',
      species: 'dachsbun',
      types: [TypesEnum.Fairy],
      weightkg: 14.9
    }
  ],
  [
    'smoliv',
    {
      abilities: { first: 'earlybird', hidden: 'harvest' },
      baseStats: { hp: 41, atk: 35, def: 45, spa: 58, spd: 51, spe: 30 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Green',
      eggGroups: ['Grass'],
      evos: ['dolliv'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 928,
      species: 'smoliv',
      types: [TypesEnum.Grass, TypesEnum.Normal],
      weightkg: 6.5
    }
  ],
  [
    'dolliv',
    {
      abilities: { first: 'earlybird', hidden: 'harvest' },
      baseStats: { hp: 52, atk: 53, def: 60, spa: 78, spd: 78, spe: 33 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Green',
      eggGroups: ['Grass'],
      evos: ['arboliva'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 25,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 929,
      prevo: 'smoliv',
      species: 'dolliv',
      types: [TypesEnum.Grass, TypesEnum.Normal],
      weightkg: 11.9
    }
  ],
  [
    'arboliva',
    {
      abilities: { first: 'seedsower', hidden: 'harvest' },
      baseStats: { hp: 78, atk: 69, def: 90, spa: 125, spd: 109, spe: 39 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: 35,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 930,
      prevo: 'dolliv',
      species: 'arboliva',
      types: [TypesEnum.Grass, TypesEnum.Normal],
      weightkg: 48.2
    }
  ],
  [
    'squawkabilly',
    {
      abilities: { first: 'intimidate', second: 'hustle', hidden: 'guts' },
      baseForme: 'Green',
      baseStats: { hp: 82, atk: 96, def: 51, spa: 45, spd: 51, spe: 92 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Green',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 3855,
      num: 931,
      otherFormes: ['squawkabillyblue', 'squawkabillyyellow', 'squawkabillywhite'],
      species: 'squawkabilly',
      types: [TypesEnum.Normal, TypesEnum.Flying],
      weightkg: 2.4
    }
  ],
  [
    'squawkabillyblue',
    {
      abilities: { first: 'intimidate', second: 'hustle', hidden: 'guts' },
      baseSpecies: 'squawkabilly',
      baseStats: { hp: 82, atk: 96, def: 51, spa: 45, spd: 51, spe: 92 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Blue',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Blue',
      formeLetter: 'B',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 3855,
      num: 931,
      otherFormes: ['squawkabilly', 'squawkabillyyellow', 'squawkabillywhite'],
      species: 'squawkabillyblue',
      types: [TypesEnum.Normal, TypesEnum.Flying],
      weightkg: 2.4
    }
  ],
  [
    'squawkabillyyellow',
    {
      abilities: { first: 'intimidate', second: 'hustle', hidden: 'sheerforce' },
      baseSpecies: 'squawkabilly',
      baseStats: { hp: 82, atk: 96, def: 51, spa: 45, spd: 51, spe: 92 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Yellow',
      formeLetter: 'Y',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 3855,
      num: 931,
      otherFormes: ['squawkabilly', 'squawkabillyblue', 'squawkabillywhite'],
      species: 'squawkabillyyellow',
      types: [TypesEnum.Normal, TypesEnum.Flying],
      weightkg: 2.4
    }
  ],
  [
    'squawkabillywhite',
    {
      abilities: { first: 'intimidate', second: 'hustle', hidden: 'sheerforce' },
      baseSpecies: 'squawkabilly',
      baseStats: { hp: 82, atk: 96, def: 51, spa: 45, spd: 51, spe: 92 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'White',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'White',
      formeLetter: 'W',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 3855,
      num: 931,
      otherFormes: ['squawkabilly', 'squawkabillyblue', 'squawkabillyyellow'],
      species: 'squawkabillywhite',
      types: [TypesEnum.Normal, TypesEnum.Flying],
      weightkg: 2.4
    }
  ],
  [
    'nacli',
    {
      abilities: { first: 'purifyingsalt', second: 'sturdy', hidden: 'clearbody' },
      baseStats: { hp: 55, atk: 55, def: 75, spa: 35, spd: 35, spe: 25 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Mineral'],
      evos: ['naclstack'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 932,
      species: 'nacli',
      types: [TypesEnum.Rock],
      weightkg: 16
    }
  ],
  [
    'naclstack',
    {
      abilities: { first: 'purifyingsalt', second: 'sturdy', hidden: 'clearbody' },
      baseStats: { hp: 60, atk: 60, def: 100, spa: 35, spd: 65, spe: 35 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Brown',
      eggGroups: ['Mineral'],
      evos: ['garganacl'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 24,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 933,
      prevo: 'nacli',
      species: 'naclstack',
      types: [TypesEnum.Rock],
      weightkg: 105
    }
  ],
  [
    'garganacl',
    {
      abilities: { first: 'purifyingsalt', second: 'sturdy', hidden: 'clearbody' },
      baseStats: { hp: 100, atk: 100, def: 130, spa: 45, spd: 90, spe: 35 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 3, spa: 0, spd: 0, spe: 0 },
      evoLevel: 38,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 934,
      prevo: 'naclstack',
      species: 'garganacl',
      types: [TypesEnum.Rock],
      weightkg: 240
    }
  ],
  [
    'charcadet',
    {
      abilities: { first: 'flashfire', hidden: 'flamebody' },
      baseStats: { hp: 40, atk: 50, def: 40, spa: 50, spd: 40, spe: 35 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Red',
      eggGroups: ['Human-Like'],
      evos: ['armarouge', 'ceruledge'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 8995,
      num: 935,
      species: 'charcadet',
      types: [TypesEnum.Fire],
      weightkg: 10.5
    }
  ],
  [
    'armarouge',
    {
      abilities: { first: 'flashfire', hidden: 'weakarmor' },
      baseStats: { hp: 85, atk: 60, def: 100, spa: 125, spd: 80, spe: 75 },
      catchRate: { base: 25, percentageWithOrdinaryPokeballAtFullHealth: '7.7%' },
      color: 'Red',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 'use Auspicious Armor',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 8995,
      num: 936,
      prevo: 'charcadet',
      species: 'armarouge',
      types: [TypesEnum.Fire, TypesEnum.Psychic],
      weightkg: 85
    }
  ],
  [
    'ceruledge',
    {
      abilities: { first: 'flashfire', hidden: 'weakarmor' },
      baseStats: { hp: 75, atk: 125, def: 80, spa: 60, spd: 100, spe: 85 },
      catchRate: { base: 25, percentageWithOrdinaryPokeballAtFullHealth: '7.7%' },
      color: 'Blue',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'use Malicious Armor',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 8995,
      num: 937,
      prevo: 'charcadet',
      species: 'ceruledge',
      types: [TypesEnum.Fire, TypesEnum.Ghost],
      weightkg: 62
    }
  ],
  [
    'tadbulb',
    {
      abilities: { first: 'owntempo', second: 'static', hidden: 'damp' },
      baseStats: { hp: 61, atk: 31, def: 41, spa: 59, spd: 35, spe: 45 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Water 1'],
      evos: ['bellibolt'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 1,
      num: 938,
      species: 'tadbulb',
      types: [TypesEnum.Electric],
      weightkg: 0.4
    }
  ],
  [
    'bellibolt',
    {
      abilities: { first: 'electromorphosis', second: 'static', hidden: 'damp' },
      baseStats: { hp: 109, atk: 64, def: 91, spa: 103, spd: 83, spe: 45 },
      catchRate: { base: 50, percentageWithOrdinaryPokeballAtFullHealth: '12.9%' },
      color: 'Green',
      eggGroups: ['Water 1'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'use Thunder Stone',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 1,
      num: 939,
      prevo: 'tadbulb',
      species: 'bellibolt',
      types: [TypesEnum.Electric],
      weightkg: 113
    }
  ],
  [
    'wattrel',
    {
      abilities: {
        first: 'windpower',
        second: 'voltabsorb',
        hidden: 'competitive'
      },
      baseStats: { hp: 40, atk: 40, def: 35, spa: 55, spd: 40, spe: 70 },
      catchRate: {
        base: 180,
        percentageWithOrdinaryPokeballAtFullHealth: '33.8%'
      },
      color: 'Black',
      eggGroups: ['Water 1', 'Flying'],
      evos: ['kilowattrel'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 1,
      num: 940,
      species: 'wattrel',
      types: [TypesEnum.Electric, TypesEnum.Flying],
      weightkg: 3.6
    }
  ],
  [
    'kilowattrel',
    {
      abilities: {
        first: 'windpower',
        second: 'voltabsorb',
        hidden: 'competitive'
      },
      baseStats: { hp: 70, atk: 70, def: 60, spa: 105, spd: 60, spe: 125 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Yellow',
      eggGroups: ['Water 1', 'Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 25,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 1,
      num: 941,
      prevo: 'wattrel',
      species: 'kilowattrel',
      types: [TypesEnum.Electric, TypesEnum.Flying],
      weightkg: 38.6
    }
  ],
  [
    'maschiff',
    {
      abilities: { first: 'intimidate', second: 'runaway', hidden: 'stakeout' },
      baseStats: { hp: 60, atk: 78, def: 60, spa: 40, spd: 51, spe: 51 },
      catchRate: {
        base: 150,
        percentageWithOrdinaryPokeballAtFullHealth: '29.5%'
      },
      color: 'Brown',
      eggGroups: ['Field'],
      evos: ['mabosstiff'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 942,
      species: 'maschiff',
      types: [TypesEnum.Dark],
      weightkg: 16
    }
  ],
  [
    'mabosstiff',
    {
      abilities: { first: 'intimidate', second: 'guarddog', hidden: 'stakeout' },
      baseStats: { hp: 80, atk: 120, def: 90, spa: 60, spd: 70, spe: 85 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 30,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 943,
      prevo: 'maschiff',
      species: 'mabosstiff',
      types: [TypesEnum.Dark],
      weightkg: 61
    }
  ],
  [
    'shroodle',
    {
      abilities: { first: 'unburden', second: 'pickpocket', hidden: 'prankster' },
      baseStats: { hp: 40, atk: 65, def: 35, spa: 40, spd: 35, spe: 75 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Gray',
      eggGroups: ['Field'],
      evos: ['grafaiai'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 944,
      species: 'shroodle',
      types: [TypesEnum.Poison, TypesEnum.Normal],
      weightkg: 0.7
    }
  ],
  [
    'grafaiai',
    {
      abilities: { first: 'unburden', second: 'poisontouch', hidden: 'prankster' },
      baseStats: { hp: 63, atk: 95, def: 65, spa: 80, spd: 72, spe: 110 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 28,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 945,
      prevo: 'shroodle',
      species: 'grafaiai',
      types: [TypesEnum.Poison, TypesEnum.Normal],
      weightkg: 27.2
    }
  ],
  [
    'bramblin',
    {
      abilities: { first: 'windrider', hidden: 'infiltrator' },
      baseStats: { hp: 40, atk: 65, def: 30, spa: 45, spd: 35, spe: 60 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Brown',
      eggGroups: ['Grass'],
      evos: ['brambleghast'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 946,
      species: 'bramblin',
      types: [TypesEnum.Grass, TypesEnum.Ghost],
      weightkg: 0.6
    }
  ],
  [
    'brambleghast',
    {
      abilities: { first: 'windrider', hidden: 'infiltrator' },
      baseStats: { hp: 55, atk: 115, def: 70, spa: 80, spd: 70, spe: 90 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: "walk 1000 steps in Let's Go without returning to Poké Ball and level it up",
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 947,
      prevo: 'bramblin',
      species: 'brambleghast',
      types: [TypesEnum.Grass, TypesEnum.Ghost],
      weightkg: 6
    }
  ],
  [
    'toedscool',
    {
      abilities: { first: 'myceliummight' },
      baseStats: { hp: 40, atk: 40, def: 35, spa: 50, spd: 100, spe: 70 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Field'],
      evos: ['toedscruel'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 948,
      species: 'toedscool',
      types: [TypesEnum.Ground, TypesEnum.Grass],
      weightkg: 33
    }
  ],
  [
    'toedscruel',
    {
      abilities: { first: 'myceliummight' },
      baseStats: { hp: 80, atk: 70, def: 65, spa: 80, spd: 120, spe: 100 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Black',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 30,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.9,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 949,
      prevo: 'toedscool',
      species: 'toedscruel',
      types: [TypesEnum.Ground, TypesEnum.Grass],
      weightkg: 58
    }
  ],
  [
    'klawf',
    {
      abilities: {
        first: 'angershell',
        second: 'shellarmor',
        hidden: 'regenerator'
      },
      baseStats: { hp: 70, atk: 100, def: 115, spa: 35, spd: 55, spe: 75 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Red',
      eggGroups: ['Water 3'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3,
      num: 950,
      species: 'klawf',
      types: [TypesEnum.Rock],
      weightkg: 79
    }
  ],
  [
    'capsakid',
    {
      abilities: { first: 'chlorophyll', second: 'insomnia', hidden: 'klutz' },
      baseStats: { hp: 50, atk: 62, def: 40, spa: 62, spd: 40, spe: 50 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Green',
      eggGroups: ['Grass'],
      evos: ['scovillain'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 951,
      species: 'capsakid',
      types: [TypesEnum.Grass],
      weightkg: 3
    }
  ],
  [
    'scovillain',
    {
      abilities: { first: 'chlorophyll', second: 'insomnia', hidden: 'moody' },
      baseStats: { hp: 65, atk: 108, def: 65, spa: 108, spd: 65, spe: 75 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Green',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'use Fire Stone',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 952,
      prevo: 'capsakid',
      species: 'scovillain',
      types: [TypesEnum.Grass, TypesEnum.Fire],
      weightkg: 15
    }
  ],
  [
    'rellor',
    {
      abilities: { first: 'compoundeyes', hidden: 'shedskin' },
      baseStats: { hp: 41, atk: 50, def: 60, spa: 31, spd: 58, spe: 30 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Brown',
      eggGroups: ['Bug'],
      evos: ['rabsca'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.2,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      num: 953,
      species: 'rellor',
      types: [TypesEnum.Bug],
      weightkg: 1
    }
  ],
  [
    'rabsca',
    {
      abilities: { first: 'synchronize', hidden: 'telepathy' },
      baseStats: { hp: 75, atk: 50, def: 85, spa: 115, spd: 100, spe: 45 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Bug'],
      evoLevel: "walk 1000 steps in Let's Go without returning to Poké Ball and level it up",
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      num: 954,
      prevo: 'rellor',
      species: 'rabsca',
      types: [TypesEnum.Bug, TypesEnum.Psychic],
      weightkg: 3.5
    }
  ],
  [
    'flittle',
    {
      abilities: { first: 'anticipation', second: 'frisk', hidden: 'speedboost' },
      baseStats: { hp: 30, atk: 35, def: 30, spa: 55, spd: 30, spe: 75 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Yellow',
      eggGroups: ['Flying'],
      evos: ['espathra'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 955,
      species: 'flittle',
      types: [TypesEnum.Psychic],
      weightkg: 1.5
    }
  ],
  [
    'espathra',
    {
      abilities: { first: 'opportunist', second: 'frisk', hidden: 'speedboost' },
      baseStats: { hp: 95, atk: 60, def: 60, spa: 101, spd: 60, spe: 105 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Yellow',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 35,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.9,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 956,
      prevo: 'flittle',
      species: 'espathra',
      types: [TypesEnum.Psychic],
      weightkg: 90
    }
  ],
  [
    'tinkatink',
    {
      abilities: {
        first: 'moldbreaker',
        second: 'owntempo',
        hidden: 'pickpocket'
      },
      baseStats: { hp: 50, atk: 45, def: 45, spa: 35, spd: 64, spe: 58 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Pink',
      eggGroups: ['Fairy'],
      evos: ['tinkatuff'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      genderRatio: { male: '100%', female: '0%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 957,
      species: 'tinkatink',
      types: [TypesEnum.Fairy, TypesEnum.Steel],
      weightkg: 8.9
    }
  ],
  [
    'tinkatuff',
    {
      abilities: {
        first: 'moldbreaker',
        second: 'owntempo',
        hidden: 'pickpocket'
      },
      baseStats: { hp: 65, atk: 55, def: 55, spa: 45, spd: 82, spe: 78 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Pink',
      eggGroups: ['Fairy'],
      evos: ['tinkaton'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 24,
      genderRatio: { male: '100%', female: '0%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 958,
      prevo: 'tinkatink',
      species: 'tinkatuff',
      types: [TypesEnum.Fairy, TypesEnum.Steel],
      weightkg: 59.1
    }
  ],
  [
    'tinkaton',
    {
      abilities: {
        first: 'moldbreaker',
        second: 'owntempo',
        hidden: 'pickpocket'
      },
      baseStats: { hp: 85, atk: 75, def: 77, spa: 70, spd: 105, spe: 94 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Pink',
      eggGroups: ['Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 3, spe: 0 },
      evoLevel: 38,
      genderRatio: { male: '100%', female: '0%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 959,
      prevo: 'tinkatuff',
      species: 'tinkaton',
      types: [TypesEnum.Fairy, TypesEnum.Steel],
      weightkg: 112.8
    }
  ],
  [
    'wiglett',
    {
      abilities: { first: 'gooey', second: 'rattled', hidden: 'sandveil' },
      baseStats: { hp: 10, atk: 55, def: 25, spa: 35, spd: 25, spe: 95 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'White',
      eggGroups: ['Water 3'],
      evos: ['wugtrio'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3,
      num: 960,
      species: 'wiglett',
      types: [TypesEnum.Water],
      weightkg: 1.8
    }
  ],
  [
    'wugtrio',
    {
      abilities: { first: 'gooey', second: 'rattled', hidden: 'sandveil' },
      baseStats: { hp: 35, atk: 100, def: 50, spa: 50, spd: 70, spe: 120 },
      catchRate: { base: 50, percentageWithOrdinaryPokeballAtFullHealth: '12.9%' },
      color: 'Red',
      eggGroups: ['Water 3'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 26,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3,
      num: 961,
      prevo: 'wiglett',
      species: 'wugtrio',
      types: [TypesEnum.Water],
      weightkg: 5.4
    }
  ],
  [
    'bombirdier',
    {
      abilities: { first: 'bigpecks', second: 'keeneye', hidden: 'rockypayload' },
      baseStats: { hp: 70, atk: 103, def: 85, spa: 60, spd: 85, spe: 82 },
      catchRate: { base: 25, percentageWithOrdinaryPokeballAtFullHealth: '7.7%' },
      color: 'White',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 8995,
      num: 962,
      species: 'bombirdier',
      types: [TypesEnum.Flying, TypesEnum.Dark],
      weightkg: 42.9
    }
  ],
  [
    'finizen',
    {
      abilities: { first: 'waterveil' },
      baseStats: { hp: 70, atk: 45, def: 40, spa: 45, spd: 40, spe: 75 },
      catchRate: {
        base: 200,
        percentageWithOrdinaryPokeballAtFullHealth: '36.6%'
      },
      color: 'Blue',
      eggGroups: ['Field', 'Water 2'],
      evos: ['palafin'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 2,
      num: 963,
      species: 'finizen',
      types: [TypesEnum.Water],
      weightkg: 60.2
    }
  ],
  [
    'palafin',
    {
      abilities: { first: 'zerotohero' },
      baseForme: 'zero',
      baseStats: { hp: 100, atk: 70, def: 72, spa: 53, spd: 62, spe: 100 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Field', 'Water 2'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 38,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 2,
      num: 964,
      prevo: 'finizen',
      otherFormes: ['palafinhero'],
      species: 'palafin',
      types: [TypesEnum.Water],
      weightkg: 60.2
    }
  ],
  [
    'palafinhero',
    {
      abilities: { first: 'zerotohero' },
      baseSpecies: 'palafin',
      baseStats: { hp: 100, atk: 160, def: 97, spa: 106, spd: 87, spe: 100 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Field', 'Water 2'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 38,
      forme: 'hero',
      formeLetter: 'H',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.8,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 2,
      num: 964,
      prevo: 'finizen',
      otherFormes: ['palafin'],
      species: 'palafin-hero',
      types: [TypesEnum.Water],
      weightkg: 97.4
    }
  ],
  [
    'varoom',
    {
      abilities: { first: 'overcoat', hidden: 'slowstart' },
      baseStats: { hp: 45, atk: 70, def: 63, spa: 30, spd: 45, spe: 47 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Gray',
      eggGroups: ['Mineral'],
      evos: ['revavroom'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 965,
      species: 'varoom',
      types: [TypesEnum.Steel, TypesEnum.Poison],
      weightkg: 35
    }
  ],
  [
    'revavroom',
    {
      abilities: { first: 'overcoat', hidden: 'filter' },
      baseStats: { hp: 80, atk: 119, def: 90, spa: 54, spd: 67, spe: 90 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Gray',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 40,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 966,
      prevo: 'varoom',
      species: 'revavroom',
      types: [TypesEnum.Steel, TypesEnum.Poison],
      weightkg: 120
    }
  ],
  [
    'cyclizar',
    {
      abilities: { first: 'shedskin', hidden: 'regenerator' },
      baseStats: { hp: 70, atk: 95, def: 65, spa: 85, spd: 65, spe: 121 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Green',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 7710,
      num: 967,
      species: 'cyclizar',
      types: [TypesEnum.Dragon, TypesEnum.Normal],
      weightkg: 63
    }
  ],
  [
    'orthworm',
    {
      abilities: { first: 'eartheater', hidden: 'sandveil' },
      baseStats: { hp: 70, atk: 85, def: 145, spa: 60, spd: 55, spe: 65 },
      catchRate: { base: 25, percentageWithOrdinaryPokeballAtFullHealth: '7.7%' },
      color: 'Pink',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 8995,
      num: 968,
      species: 'orthworm',
      types: [TypesEnum.Steel],
      weightkg: 310
    }
  ],
  [
    'glimmet',
    {
      abilities: { first: 'toxicdebris', hidden: 'corrosion' },
      baseStats: { hp: 48, atk: 35, def: 42, spa: 105, spd: 60, spe: 60 },
      catchRate: { base: 70, percentageWithOrdinaryPokeballAtFullHealth: '16.6%' },
      color: 'Blue',
      eggGroups: ['Mineral'],
      evos: ['glimmora'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 7710,
      num: 969,
      species: 'glimmet',
      types: [TypesEnum.Rock, TypesEnum.Poison],
      weightkg: 8
    }
  ],
  [
    'glimmora',
    {
      abilities: { first: 'toxicdebris', hidden: 'corrosion' },
      baseStats: { hp: 83, atk: 55, def: 90, spa: 130, spd: 81, spe: 86 },
      catchRate: { base: 25, percentageWithOrdinaryPokeballAtFullHealth: '7.7%' },
      color: 'Blue',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 35,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 7710,
      num: 970,
      prevo: 'glimmet',
      species: 'glimmora',
      types: [TypesEnum.Rock, TypesEnum.Poison],
      weightkg: 45
    }
  ],
  [
    'greavard',
    {
      abilities: { first: 'pickup', hidden: 'fluffy' },
      baseStats: { hp: 50, atk: 61, def: 60, spa: 30, spd: 55, spe: 34 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'White',
      eggGroups: ['Field'],
      evos: ['houndstone'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 971,
      species: 'greavard',
      types: [TypesEnum.Ghost],
      weightkg: 35
    }
  ],
  [
    'houndstone',
    {
      abilities: { first: 'sandrush', hidden: 'fluffy' },
      baseStats: { hp: 72, atk: 101, def: 100, spa: 50, spd: 97, spe: 68 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'White',
      eggGroups: ['Field'],
      evoLevel: 'level 30 at night',
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 972,
      prevo: 'greavard',
      species: 'houndstone',
      types: [TypesEnum.Ghost],
      weightkg: 15
    }
  ],
  [
    'flamigo',
    {
      abilities: { first: 'scrappy', second: 'tangledfeet', hidden: 'costar' },
      baseStats: { hp: 82, atk: 115, def: 74, spa: 75, spd: 64, spe: 90 },
      catchRate: {
        base: 100,
        percentageWithOrdinaryPokeballAtFullHealth: '21.7%'
      },
      color: 'Pink',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 973,
      species: 'flamigo',
      types: [TypesEnum.Flying, TypesEnum.Fighting],
      weightkg: 37
    }
  ],
  [
    'cetoddle',
    {
      abilities: { first: 'thickfat', second: 'snowcloak', hidden: 'sheerforce' },
      baseStats: { hp: 108, atk: 68, def: 45, spa: 30, spd: 40, spe: 43 },
      catchRate: {
        base: 150,
        percentageWithOrdinaryPokeballAtFullHealth: '29.5%'
      },
      color: 'White',
      eggGroups: ['Field'],
      evos: ['cetitan'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      num: 974,
      species: 'cetoddle',
      types: [TypesEnum.Ice],
      weightkg: 45
    }
  ],
  [
    'cetitan',
    {
      abilities: { first: 'thickfat', second: 'slushrush', hidden: 'sheerforce' },
      baseStats: { hp: 170, atk: 113, def: 65, spa: 45, spd: 55, spe: 73 },
      catchRate: { base: 50, percentageWithOrdinaryPokeballAtFullHealth: '12.9%' },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'use Ice Stone',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 4.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      num: 975,
      prevo: 'cetoddle',
      species: 'cetitan',
      types: [TypesEnum.Ice],
      weightkg: 700
    }
  ],
  [
    'veluza',
    {
      abilities: { first: 'moldbreaker', hidden: 'sharpness' },
      baseStats: { hp: 90, atk: 102, def: 73, spa: 78, spd: 65, spe: 70 },
      catchRate: {
        base: 100,
        percentageWithOrdinaryPokeballAtFullHealth: '21.7%'
      },
      color: 'Gray',
      eggGroups: ['Water 2'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.5,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 2,
      num: 976,
      species: 'veluza',
      types: [TypesEnum.Water, TypesEnum.Psychic],
      weightkg: 90
    }
  ],
  [
    'dondozo',
    {
      abilities: { first: 'unaware', second: 'oblivious', hidden: 'waterveil' },
      baseStats: { hp: 150, atk: 100, def: 115, spa: 65, spd: 65, spe: 35 },
      catchRate: { base: 25, percentageWithOrdinaryPokeballAtFullHealth: '7.7%' },
      color: 'Blue',
      eggGroups: ['Water 2'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 12,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 2,
      num: 977,
      species: 'dondozo',
      types: [TypesEnum.Water],
      weightkg: 220
    }
  ],
  [
    'tatsugiri',
    {
      abilities: { first: 'commander', hidden: 'stormdrain' },
      baseStats: { hp: 68, atk: 50, def: 60, spa: 120, spd: 95, spe: 82 },
      catchRate: {
        base: 100,
        percentageWithOrdinaryPokeballAtFullHealth: '21.7%'
      },
      color: 'Pink',
      cosmeticFormes: ['Tatsugiri-Droopy', 'Tatsugiri-Stretchy'],
      eggGroups: ['Water 2'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 2,
      num: 978,
      species: 'tatsugiri',
      types: [TypesEnum.Dragon, TypesEnum.Water],
      weightkg: 8
    }
  ],
  [
    'annihilape',
    {
      abilities: { first: 'vitalspirit', second: 'innerfocus', hidden: 'defiant' },
      baseStats: { hp: 110, atk: 115, def: 80, spa: 50, spd: 90, spe: 90 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'use Rage Fist 20 times then level up',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 979,
      prevo: 'primeape',
      species: 'annihilape',
      types: [TypesEnum.Fighting, TypesEnum.Ghost],
      weightkg: 56
    }
  ],
  [
    'clodsire',
    {
      abilities: {
        first: 'poisonpoint',
        second: 'waterabsorb',
        hidden: 'unaware'
      },
      baseStats: { hp: 130, atk: 75, def: 60, spa: 45, spd: 100, spe: 20 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Brown',
      eggGroups: ['Water 1', 'Field'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 20,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 1,
      num: 980,
      prevo: 'wooperpaldea',
      species: 'clodsire',
      types: [TypesEnum.Poison, TypesEnum.Ground],
      weightkg: 223
    }
  ],
  [
    'farigiraf',
    {
      abilities: { first: 'cudchew', second: 'armortail', hidden: 'sapsipper' },
      baseStats: { hp: 120, atk: 90, def: 70, spa: 110, spd: 70, spe: 60 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Level up while knowing Twin Beam',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 3.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 981,
      prevo: 'girafarig',
      species: 'farigiraf',
      types: [TypesEnum.Normal, TypesEnum.Psychic],
      weightkg: 160
    }
  ],
  [
    'dudunsparce',
    {
      abilities: { first: 'serenegrace', second: 'runaway', hidden: 'rattled' },
      baseForme: 'Two-Segment',
      baseStats: { hp: 125, atk: 100, def: 80, spa: 85, spd: 75, spe: 55 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Field'],
      evoLevel: 'Level up while knowing Hyper Drill',
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 3.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 982,
      otherFormes: ['dudunsparcethreesegment'],
      prevo: 'dunsparce',
      species: 'dudunsparce',
      types: [TypesEnum.Normal],
      weightkg: 39.2
    }
  ],
  [
    'dudunsparcethreesegment',
    {
      abilities: { first: 'serenegrace', second: 'runaway', hidden: 'rattled' },
      baseSpecies: 'dudunsparce',
      baseStats: { hp: 125, atk: 100, def: 80, spa: 85, spd: 75, spe: 55 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Field'],
      evoLevel: 'Level up while knowing Hyper Drill',
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Three-Segment',
      formeLetter: 'T',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 4.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 982,
      otherFormes: ['dudunsparce'],
      prevo: 'dunsparce',
      species: 'dudunsparcethreesegment',
      types: [TypesEnum.Normal],
      weightkg: 47.4
    }
  ],
  [
    'kingambit',
    {
      abilities: {
        first: 'defiant',
        second: 'supremeoverlord',
        hidden: 'pressure'
      },
      baseStats: { hp: 100, atk: 135, def: 120, spa: 60, spd: 85, spe: 50 },
      catchRate: { base: 25, percentageWithOrdinaryPokeballAtFullHealth: '7.7%' },
      color: 'Black',
      eggGroups: ['Human-Like'],
      evoLevel: "Defeat 3 Bisharp in groups with Pawniard that hold a Leader's Crest (the opponents hold it) then level up",
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 983,
      prevo: 'bisharp',
      species: 'kingambit',
      types: [TypesEnum.Dark, TypesEnum.Steel],
      weightkg: 120
    }
  ],
  [
    'greattusk',
    {
      abilities: { first: 'protosynthesis' },
      baseStats: { hp: 115, atk: 131, def: 131, spa: 53, spd: 53, spe: 87 },
      catchRate: { base: 30, percentageWithOrdinaryPokeballAtFullHealth: '8.8%' },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 12850,
      num: 984,
      species: 'Great Tusk',
      types: [TypesEnum.Ground, TypesEnum.Fighting],
      weightkg: 320
    }
  ],
  [
    'screamtail',
    {
      abilities: { first: 'protosynthesis' },
      baseStats: { hp: 115, atk: 65, def: 99, spa: 65, spd: 115, spe: 111 },
      catchRate: { base: 50, percentageWithOrdinaryPokeballAtFullHealth: '12.9%' },
      color: 'Pink',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 12850,
      num: 985,
      species: 'Scream Tail',
      types: [TypesEnum.Fairy, TypesEnum.Psychic],
      weightkg: 8
    }
  ],
  [
    'brutebonnet',
    {
      abilities: { first: 'protosynthesis' },
      baseStats: { hp: 111, atk: 127, def: 99, spa: 79, spd: 99, spe: 55 },
      catchRate: { base: 50, percentageWithOrdinaryPokeballAtFullHealth: '12.9%' },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 12850,
      num: 986,
      species: 'Brute Bonnet',
      types: [TypesEnum.Grass, TypesEnum.Dark],
      weightkg: 21
    }
  ],
  [
    'fluttermane',
    {
      abilities: { first: 'protosynthesis' },
      baseStats: { hp: 55, atk: 55, def: 55, spa: 135, spd: 135, spe: 135 },
      catchRate: { base: 30, percentageWithOrdinaryPokeballAtFullHealth: '8.8%' },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 1, spe: 1 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.4,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 12850,
      num: 987,
      species: 'Flutter Mane',
      types: [TypesEnum.Ghost, TypesEnum.Fairy],
      weightkg: 4
    }
  ],
  [
    'slitherwing',
    {
      abilities: { first: 'protosynthesis' },
      baseStats: { hp: 85, atk: 135, def: 79, spa: 85, spd: 105, spe: 81 },
      catchRate: { base: 30, percentageWithOrdinaryPokeballAtFullHealth: '8.8%' },
      color: 'Red',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 3.2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 12850,
      num: 988,
      species: 'Slither Wing',
      types: [TypesEnum.Bug, TypesEnum.Fighting],
      weightkg: 92
    }
  ],
  [
    'sandyshocks',
    {
      abilities: { first: 'protosynthesis' },
      baseStats: { hp: 85, atk: 81, def: 97, spa: 121, spd: 85, spe: 101 },
      catchRate: { base: 30, percentageWithOrdinaryPokeballAtFullHealth: '8.8%' },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.3,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 12850,
      num: 989,
      species: 'Sandy Shocks',
      types: [TypesEnum.Electric, TypesEnum.Ground],
      weightkg: 60
    }
  ],
  [
    'irontreads',
    {
      abilities: { first: 'quarkdrive' },
      baseStats: { hp: 90, atk: 112, def: 120, spa: 72, spd: 70, spe: 106 },
      catchRate: { base: 30, percentageWithOrdinaryPokeballAtFullHealth: '8.8%' },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 3, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.9,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 12850,
      num: 990,
      species: 'Iron Treads',
      types: [TypesEnum.Ground, TypesEnum.Steel],
      weightkg: 240
    }
  ],
  [
    'ironbundle',
    {
      abilities: { first: 'quarkdrive' },
      baseStats: { hp: 56, atk: 80, def: 114, spa: 124, spd: 60, spe: 136 },
      catchRate: { base: 50, percentageWithOrdinaryPokeballAtFullHealth: '12.9%' },
      color: 'Red',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.6,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 12850,
      num: 991,
      species: 'Iron Bundle',
      types: [TypesEnum.Ice, TypesEnum.Water],
      weightkg: 11,
      aliases: ['bundlechan']
    }
  ],
  [
    'ironhands',
    {
      abilities: { first: 'quarkdrive' },
      baseStats: { hp: 154, atk: 140, def: 108, spa: 50, spd: 68, spe: 50 },
      catchRate: { base: 50, percentageWithOrdinaryPokeballAtFullHealth: '12.9%' },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.8,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 12850,
      num: 992,
      species: 'Iron Hands',
      types: [TypesEnum.Fighting, TypesEnum.Electric],
      weightkg: 380.7
    }
  ],
  [
    'ironjugulis',
    {
      abilities: { first: 'quarkdrive' },
      baseStats: { hp: 94, atk: 80, def: 86, spa: 122, spd: 80, spe: 108 },
      catchRate: { base: 30, percentageWithOrdinaryPokeballAtFullHealth: '8.8%' },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.3,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 12850,
      num: 993,
      species: 'Iron Jugulis',
      types: [TypesEnum.Dark, TypesEnum.Flying],
      weightkg: 111
    }
  ],
  [
    'ironmoth',
    {
      abilities: { first: 'quarkdrive' },
      baseStats: { hp: 80, atk: 70, def: 60, spa: 140, spd: 110, spe: 110 },
      catchRate: { base: 30, percentageWithOrdinaryPokeballAtFullHealth: '8.8%' },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 12850,
      num: 994,
      species: 'Iron Moth',
      types: [TypesEnum.Fire, TypesEnum.Poison],
      weightkg: 36
    }
  ],
  [
    'ironthorns',
    {
      abilities: { first: 'quarkdrive' },
      baseStats: { hp: 100, atk: 134, def: 110, spa: 70, spd: 84, spe: 72 },
      catchRate: { base: 30, percentageWithOrdinaryPokeballAtFullHealth: '8.8%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.6,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 12850,
      num: 995,
      species: 'Iron Thorns',
      types: [TypesEnum.Rock, TypesEnum.Electric],
      weightkg: 303
    }
  ],
  [
    'frigibax',
    {
      abilities: { first: 'thermalexchange', hidden: 'icebody' },
      baseStats: { hp: 65, atk: 75, def: 45, spa: 35, spd: 45, spe: 55 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Gray',
      eggGroups: ['Dragon', 'Mineral'],
      evos: ['arctibax'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 996,
      species: 'frigibax',
      types: [TypesEnum.Dragon, TypesEnum.Ice],
      weightkg: 17
    }
  ],
  [
    'arctibax',
    {
      abilities: { first: 'thermalexchange', hidden: 'icebody' },
      baseStats: { hp: 90, atk: 95, def: 66, spa: 45, spd: 65, spe: 62 },
      catchRate: { base: 25, percentageWithOrdinaryPokeballAtFullHealth: '7.7%' },
      color: 'Gray',
      eggGroups: ['Dragon', 'Mineral'],
      evos: ['baxcalibur'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 35,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 997,
      prevo: 'frigibax',
      species: 'arctibax',
      types: [TypesEnum.Dragon, TypesEnum.Ice],
      weightkg: 30
    }
  ],
  [
    'baxcalibur',
    {
      abilities: { first: 'thermalexchange', hidden: 'icebody' },
      baseStats: { hp: 115, atk: 145, def: 92, spa: 75, spd: 86, spe: 87 },
      catchRate: { base: 10, percentageWithOrdinaryPokeballAtFullHealth: '3.9%' },
      color: 'Gray',
      eggGroups: ['Dragon', 'Mineral'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 54,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.1,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 998,
      prevo: 'arctibax',
      species: 'baxcalibur',
      types: [TypesEnum.Dragon, TypesEnum.Ice],
      weightkg: 210
    }
  ],
  [
    'gimmighoul',
    {
      abilities: { first: 'rattled' },
      baseForme: 'Chest',
      baseStats: { hp: 45, atk: 30, def: 70, spa: 75, spd: 70, spe: 10 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Undiscovered'],
      evos: ['gholdengo'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.3,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 12850,
      num: 999,
      otherFormes: ['gimmighoulroaming'],
      species: 'gimmighoul',
      types: [TypesEnum.Ghost],
      weightkg: 5
    }
  ],
  [
    'gimmighoulroaming',
    {
      abilities: { first: 'runaway' },
      baseSpecies: 'gimmighoul',
      baseStats: { hp: 45, atk: 30, def: 25, spa: 75, spd: 45, spe: 80 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evos: ['gholdengo'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      forme: 'Roaming',
      formeLetter: 'R',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.1,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 12850,
      num: 999,
      otherFormes: ['gimmighoul'],
      species: 'gimmighoulroaming',
      types: [TypesEnum.Ghost],
      weightkg: 0.1
    }
  ],
  [
    'gholdengo',
    {
      abilities: { first: 'goodasgold' },
      baseStats: { hp: 87, atk: 60, def: 95, spa: 133, spd: 91, spe: 84 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 'Collect 999 Gimmighoul Coins and level up',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 12850,
      num: 1000,
      prevo: 'gimmighoul',
      species: 'gholdengo',
      types: [TypesEnum.Steel, TypesEnum.Ghost],
      weightkg: 30
    }
  ],
  [
    'wochien',
    {
      abilities: { first: 'tabletsofruin' },
      baseStats: { hp: 85, atk: 85, def: 100, spa: 95, spd: 135, spe: 70 },
      catchRate: { base: 6, percentageWithOrdinaryPokeballAtFullHealth: '2.6%' },
      color: 'Brown',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 3, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 12850,
      num: 1001,
      species: 'Wo-Chien',
      types: [TypesEnum.Dark, TypesEnum.Grass],
      weightkg: 74.2,
      legendary: true
    }
  ],
  [
    'chienpao',
    {
      abilities: { first: 'swordofruin' },
      baseStats: { hp: 80, atk: 120, def: 80, spa: 90, spd: 65, spe: 135 },
      catchRate: { base: 6, percentageWithOrdinaryPokeballAtFullHealth: '2.6%' },
      color: 'White',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.9,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 12850,
      num: 1002,
      species: 'Chien-Pao',
      types: [TypesEnum.Dark, TypesEnum.Ice],
      weightkg: 152.2,
      legendary: true
    }
  ],
  [
    'tinglu',
    {
      abilities: { first: 'vesselofruin' },
      baseStats: { hp: 155, atk: 110, def: 125, spa: 55, spd: 80, spe: 45 },
      catchRate: { base: 6, percentageWithOrdinaryPokeballAtFullHealth: '2.6%' },
      color: 'Brown',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 3, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.7,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 12850,
      num: 1003,
      species: 'Ting-Lu',
      types: [TypesEnum.Dark, TypesEnum.Ground],
      weightkg: 699.7,
      legendary: true
    }
  ],
  [
    'chiyu',
    {
      abilities: { first: 'beadsofruin' },
      baseStats: { hp: 55, atk: 80, def: 80, spa: 135, spd: 120, spe: 100 },
      catchRate: { base: 6, percentageWithOrdinaryPokeballAtFullHealth: '2.6%' },
      color: 'Red',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.4,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 12850,
      num: 1004,
      species: 'Chi-Yu',
      types: [TypesEnum.Dark, TypesEnum.Fire],
      weightkg: 4.9,
      legendary: true
    }
  ],
  [
    'roaringmoon',
    {
      abilities: { first: 'protosynthesis' },
      baseStats: { hp: 105, atk: 139, def: 71, spa: 55, spd: 101, spe: 119 },
      catchRate: { base: 10, percentageWithOrdinaryPokeballAtFullHealth: '3.9%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 12850,
      num: 1005,
      species: 'Roaring Moon',
      types: [TypesEnum.Dragon, TypesEnum.Dark],
      weightkg: 380
    }
  ],
  [
    'ironvaliant',
    {
      abilities: { first: 'quarkdrive' },
      baseStats: { hp: 74, atk: 130, def: 90, spa: 120, spd: 60, spe: 116 },
      catchRate: { base: 10, percentageWithOrdinaryPokeballAtFullHealth: '3.9%' },
      color: 'White',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.4,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 12850,
      num: 1006,
      species: 'Iron Valiant',
      types: [TypesEnum.Fairy, TypesEnum.Fighting],
      weightkg: 35
    }
  ],
  [
    'koraidon',
    {
      abilities: { first: 'orichalcumpulse' },
      baseStats: { hp: 100, atk: 135, def: 115, spa: 85, spd: 100, spe: 135 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Red',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 12850,
      num: 1007,
      species: 'koraidon',
      types: [TypesEnum.Fighting, TypesEnum.Dragon],
      weightkg: 303,
      legendary: true
    }
  ],
  [
    'miraidon',
    {
      abilities: { first: 'hadronengine' },
      baseStats: { hp: 100, atk: 85, def: 100, spa: 135, spd: 115, spe: 135 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 3.5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 12850,
      num: 1008,
      species: 'miraidon',
      types: [TypesEnum.Electric, TypesEnum.Dragon],
      weightkg: 240,
      legendary: true
    }
  ],
  [
    'walkingwake',
    {
      abilities: { first: 'protosynthesis' },
      baseStats: { hp: 99, atk: 83, def: 91, spa: 125, spd: 83, spe: 109 },
      catchRate: { base: 5, percentageWithOrdinaryPokeballAtFullHealth: '2.3%' },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 3.5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 12850,
      num: 1009,
      species: 'Walking Wake',
      types: [TypesEnum.Water, TypesEnum.Dragon],
      weightkg: 280
    }
  ],
  [
    'ironleaves',
    {
      abilities: { first: 'quarkdrive' },
      baseStats: { hp: 90, atk: 130, def: 88, spa: 70, spd: 108, spe: 104 },
      catchRate: { base: 5, percentageWithOrdinaryPokeballAtFullHealth: '2.3%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 12850,
      num: 1010,
      species: 'Iron Leaves',
      types: [TypesEnum.Grass, TypesEnum.Psychic],
      weightkg: 125
    }
  ],
  [
    'dipplin',
    {
      abilities: {
        first: 'supersweetsyrup',
        second: 'gluttony',
        hidden: 'stickyhold'
      },
      baseStats: { hp: 80, atk: 80, def: 110, spa: 95, spd: 80, spe: 40 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Grass', 'Dragon'],
      evoLevel: 'use Syrupy Apple',
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evos: ['hydrapple'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 5140,
      num: 1011,
      prevo: 'applin',
      species: 'dipplin',
      types: [TypesEnum.Grass, TypesEnum.Dragon],
      weightkg: 4.4
    }
  ],
  [
    'poltchageist',
    {
      abilities: { first: 'hospitality', hidden: 'heatproof' },
      baseStats: { hp: 40, atk: 45, def: 45, spa: 74, spd: 54, spe: 50 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Green',
      eggGroups: ['Mineral', 'Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['sinistcha'],
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 1012,
      otherFormes: ['poltchageistartisan'],
      species: 'poltchageist',
      types: [TypesEnum.Grass, TypesEnum.Ghost],
      weightkg: 1.1
    }
  ],
  [
    'poltchageistartisan',
    {
      abilities: { first: 'hospitality', hidden: 'heatproof' },
      baseSpecies: 'poltchageist',
      baseStats: { hp: 40, atk: 45, def: 45, spa: 74, spd: 54, spe: 50 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Green',
      eggGroups: ['Mineral', 'Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['sinistchamasterpiece'],
      forme: 'artisan',
      formeLetter: 'A',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 1012,
      otherFormes: ['poltchageist'],
      species: 'poltchageist-artisan',
      types: [TypesEnum.Grass, TypesEnum.Ghost],
      weightkg: 1.1
    }
  ],
  [
    'sinistcha',
    {
      abilities: { first: 'hospitality', hidden: 'heatproof' },
      baseForme: 'Unremarkable',
      baseStats: { hp: 71, atk: 60, def: 106, spa: 121, spd: 80, spe: 70 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Green',
      eggGroups: ['Mineral', 'Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 'use Unremarkable Teacup',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 1013,
      otherFormes: ['sinistchamasterpiece'],
      prevo: 'poltchageist',
      species: 'sinistcha',
      types: [TypesEnum.Grass, TypesEnum.Ghost],
      weightkg: 2.2
    }
  ],
  [
    'sinistchamasterpiece',
    {
      abilities: { first: 'hospitality', hidden: 'heatproof' },
      baseSpecies: 'sinistcha',
      baseStats: { hp: 71, atk: 60, def: 106, spa: 121, spd: 80, spe: 70 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Green',
      eggGroups: ['Mineral', 'Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 'use Masterpiece Teacup',
      forme: 'Masterpiece',
      formeLetter: 'M',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 1013,
      otherFormes: ['sinistcha'],
      prevo: 'poltchageistartisan',
      species: 'sinistcha-masterpiece',
      types: [TypesEnum.Grass, TypesEnum.Ghost],
      weightkg: 2.2
    }
  ],
  [
    'okidogi',
    {
      abilities: { first: 'toxicchain', hidden: 'guarddog' },
      baseStats: { hp: 88, atk: 128, def: 115, spa: 58, spd: 86, spe: 80 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Black',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '100%', female: '0%' },
      heightm: 1.8,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 1014,
      species: 'okidogi',
      types: [TypesEnum.Poison, TypesEnum.Fighting],
      weightkg: 92
    }
  ],
  [
    'munkidori',
    {
      abilities: { first: 'toxicchain', hidden: 'frisk' },
      baseStats: { hp: 88, atk: 75, def: 66, spa: 130, spd: 90, spe: 106 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Black',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      genderRatio: { male: '100%', female: '0%' },
      heightm: 1,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 1015,
      species: 'munkidori',
      types: [TypesEnum.Poison, TypesEnum.Psychic],
      weightkg: 12.2
    }
  ],
  [
    'fezandipiti',
    {
      abilities: { first: 'toxicchain', hidden: 'technician' },
      baseStats: { hp: 88, atk: 91, def: 82, spa: 70, spd: 125, spe: 99 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Black',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 3, spe: 0 },
      genderRatio: { male: '100%', female: '0%' },
      heightm: 1.4,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 1016,
      species: 'fezandipiti',
      types: [TypesEnum.Poison, TypesEnum.Fairy],
      weightkg: 30.1
    }
  ],
  [
    'ogerpon',
    {
      abilities: { first: 'defiant' },
      baseForme: 'Teal',
      baseStats: { hp: 80, atk: 120, def: 84, spa: 60, spd: 96, spe: 110 },
      catchRate: { base: 5, percentageWithOrdinaryPokeballAtFullHealth: '2.3%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '100%' },
      heightm: 1.2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 1017,
      otherFormes: [
        'ogerponcornerstone',
        'ogerponcornerstonetera',
        'ogerponhearthflame',
        'ogerponhearthflametera',
        'ogerpontealtera',
        'ogerponwellspring',
        'ogerponwellspringtera'
      ],
      species: 'ogerpon',
      types: [TypesEnum.Grass],
      weightkg: 39.8
    }
  ],
  [
    'ogerponcornerstone',
    {
      abilities: { first: 'sturdy' },
      baseSpecies: 'ogerpon',
      baseStats: { hp: 80, atk: 120, def: 84, spa: 60, spd: 96, spe: 110 },
      catchRate: { base: 5, percentageWithOrdinaryPokeballAtFullHealth: '2.3%' },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Cornerstone',
      formeLetter: 'C',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 1.2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 1017,
      otherFormes: [
        'ogerpon',
        'ogerponcornerstonetera',
        'ogerponhearthflame',
        'ogerponhearthflametera',
        'ogerpontealtera',
        'ogerponwellspring',
        'ogerponwellspringtera'
      ],
      species: 'ogerpon-cornerstone',
      types: [TypesEnum.Grass, TypesEnum.Rock],
      weightkg: 39.8
    }
  ],
  [
    'ogerponcornerstonetera',
    {
      abilities: { first: 'embodyaspectcornerstone' },
      baseSpecies: 'ogerpon',
      baseStats: { hp: 80, atk: 120, def: 84, spa: 60, spd: 96, spe: 110 },
      catchRate: { base: 5, percentageWithOrdinaryPokeballAtFullHealth: '2.3%' },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Cornerstone-Tera',
      formeLetter: 'CT',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 1.2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 1017,
      otherFormes: [
        'ogerpon',
        'ogerponcornerstone',
        'ogerponhearthflame',
        'ogerponhearthflametera',
        'ogerpontealtera',
        'ogerponwellspring',
        'ogerponwellspringtera'
      ],
      species: 'ogerpon-cornerstonetera',
      types: [TypesEnum.Grass, TypesEnum.Rock],
      weightkg: 39.8
    }
  ],
  [
    'ogerponhearthflame',
    {
      abilities: { first: 'moldbreaker' },
      baseSpecies: 'ogerpon',
      baseStats: { hp: 80, atk: 120, def: 84, spa: 60, spd: 96, spe: 110 },
      catchRate: { base: 5, percentageWithOrdinaryPokeballAtFullHealth: '2.3%' },
      color: 'Red',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Hearthflame',
      formeLetter: 'H',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 1.2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 1017,
      otherFormes: [
        'ogerpon',
        'ogerponcornerstone',
        'ogerponcornerstonetera',
        'ogerponhearthflametera',
        'ogerpontealtera',
        'ogerponwellspring',
        'ogerponwellspringtera'
      ],
      species: 'ogerpon-hearthflame',
      types: [TypesEnum.Grass, TypesEnum.Fire],
      weightkg: 39.8
    }
  ],
  [
    'ogerponhearthflametera',
    {
      abilities: { first: 'embodyaspecthearthflame' },
      baseSpecies: 'ogerpon',
      baseStats: { hp: 80, atk: 120, def: 84, spa: 60, spd: 96, spe: 110 },
      catchRate: { base: 5, percentageWithOrdinaryPokeballAtFullHealth: '2.3%' },
      color: 'Red',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Hearthflame-Tera',
      formeLetter: 'HT',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 1.2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 1017,
      otherFormes: [
        'ogerpon',
        'ogerponcornerstone',
        'ogerponcornerstonetera',
        'ogerponhearthflame',
        'ogerpontealtera',
        'ogerponwellspring',
        'ogerponwellspringtera'
      ],
      species: 'ogerpon-hearthflametera',
      types: [TypesEnum.Grass, TypesEnum.Fire],
      weightkg: 39.8
    }
  ],
  [
    'ogerponwellspring',
    {
      abilities: { first: 'waterabsorb' },
      baseSpecies: 'ogerpon',
      baseStats: { hp: 80, atk: 120, def: 84, spa: 60, spd: 96, spe: 110 },
      catchRate: { base: 5, percentageWithOrdinaryPokeballAtFullHealth: '2.3%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Wellspring',
      formeLetter: 'W',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 1.2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 1017,
      otherFormes: [
        'ogerpon',
        'ogerponcornerstone',
        'ogerponcornerstonetera',
        'ogerponhearthflame',
        'ogerponhearthflametera',
        'ogerpontealtera',
        'ogerponwellspringtera'
      ],
      species: 'ogerpon-wellspring',
      types: [TypesEnum.Grass, TypesEnum.Water],
      weightkg: 39.8
    }
  ],
  [
    'ogerponwellspringtera',
    {
      abilities: { first: 'embodyaspectwellspring' },
      baseSpecies: 'ogerpon',
      baseStats: { hp: 80, atk: 120, def: 84, spa: 60, spd: 96, spe: 110 },
      catchRate: { base: 5, percentageWithOrdinaryPokeballAtFullHealth: '2.3%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Wellspring-Tera',
      formeLetter: 'WT',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 1.2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 1017,
      otherFormes: [
        'ogerpon',
        'ogerponcornerstone',
        'ogerponcornerstonetera',
        'ogerponhearthflame',
        'ogerponhearthflametera',
        'ogerpontealtera',
        'ogerponwellspring'
      ],
      species: 'ogerpon-wellspringtera',
      types: [TypesEnum.Grass, TypesEnum.Water],
      weightkg: 39.8
    }
  ],
  [
    'ogerpontealtera',
    {
      abilities: { first: 'embodyaspectteal' },
      baseSpecies: 'ogerpon',
      baseStats: { hp: 80, atk: 120, def: 84, spa: 60, spd: 96, spe: 110 },
      catchRate: { base: 5, percentageWithOrdinaryPokeballAtFullHealth: '2.3%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Teal-Tera',
      formeLetter: 'TT',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 1.2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 1017,
      otherFormes: [
        'ogerpon',
        'ogerponcornerstone',
        'ogerponcornerstonetera',
        'ogerponhearthflame',
        'ogerponhearthflametera',
        'ogerponwellspring',
        'ogerponwellspringtera'
      ],
      species: 'ogerpon-tealtera',
      types: [TypesEnum.Grass],
      weightkg: 39.8
    }
  ],
  [
    'archaludon',
    {
      abilities: { first: 'stamina', second: 'sturdy', hidden: 'stalwart' },
      baseStats: { hp: 90, atk: 105, def: 130, spa: 125, spd: 65, spe: 85 },
      catchRate: { base: 10, percentageWithOrdinaryPokeballAtFullHealth: '3.9%' },
      color: 'White',
      eggGroups: ['Mineral', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 3, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      num: 1018,
      species: 'archaludon',
      types: [TypesEnum.Steel, TypesEnum.Dragon],
      weightkg: 60
    }
  ],
  [
    'hydrapple',
    {
      abilities: {
        first: 'supersweetsyrup',
        second: 'regenerator',
        hidden: 'stickyhold'
      },
      baseStats: { hp: 106, atk: 80, def: 110, spa: 120, spd: 80, spe: 44 },
      catchRate: { base: 10, percentageWithOrdinaryPokeballAtFullHealth: '3.9%' },
      color: 'Green',
      eggGroups: ['Grass', 'Dragon'],
      evoLevel: 'Level up while knowing Dragon Cheer',
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.8,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      num: 1019,
      prevo: 'dipplin',
      species: 'hydrapple',
      types: [TypesEnum.Grass, TypesEnum.Dragon],
      weightkg: 93
    }
  ],
  [
    'gougingfire',
    {
      abilities: { first: 'protosynthesis' },
      baseStats: { hp: 105, atk: 115, def: 121, spa: 65, spd: 93, spe: 91 },
      catchRate: { base: 10, percentageWithOrdinaryPokeballAtFullHealth: '3.9%' },
      color: 'Brown',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 3, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 3.5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 12850,
      num: 1020,
      species: 'Gouging Fire',
      types: [TypesEnum.Fire, TypesEnum.Dragon],
      weightkg: 590
    }
  ],
  [
    'ragingbolt',
    {
      abilities: { first: 'protosynthesis' },
      baseStats: { hp: 125, atk: 73, def: 91, spa: 137, spd: 89, spe: 75 },
      catchRate: { base: 10, percentageWithOrdinaryPokeballAtFullHealth: '3.9%' },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 5.2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 12850,
      num: 1021,
      species: 'Raging Bolt',
      types: [TypesEnum.Electric, TypesEnum.Dragon],
      weightkg: 480
    }
  ],
  [
    'ironboulder',
    {
      abilities: { first: 'quarkdrive' },
      baseStats: { hp: 90, atk: 120, def: 80, spa: 68, spd: 108, spe: 124 },
      catchRate: { base: 10, percentageWithOrdinaryPokeballAtFullHealth: '3.9%' },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 12850,
      num: 1022,
      species: 'Iron Boulder',
      types: [TypesEnum.Rock, TypesEnum.Psychic],
      weightkg: 162.5
    }
  ],
  [
    'ironcrown',
    {
      abilities: { first: 'quarkdrive' },
      baseStats: { hp: 90, atk: 72, def: 100, spa: 122, spd: 108, spe: 98 },
      catchRate: { base: 10, percentageWithOrdinaryPokeballAtFullHealth: '3.9%' },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.6,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 12850,
      num: 1023,
      species: 'Iron Crown',
      types: [TypesEnum.Steel, TypesEnum.Psychic],
      weightkg: 156
    }
  ],
  [
    'terapagos',
    {
      abilities: { first: 'terashift' },
      baseForme: 'Normal',
      baseStats: { hp: 90, atk: 65, def: 85, spa: 65, spd: 85, spe: 60 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 1024,
      otherFormes: ['terapagosterastal', 'terapagosstellar'],
      species: 'terapagos',
      types: [TypesEnum.Normal],
      weightkg: 6.5
    }
  ],
  [
    'terapagosterastal',
    {
      abilities: { first: 'terashell' },
      baseSpecies: 'terapagos',
      baseStats: { hp: 95, atk: 95, def: 110, spa: 105, spd: 110, spe: 85 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 2, spe: 0 },
      forme: 'Terastal',
      formeLetter: 'T',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 1024,
      otherFormes: ['terapagos', 'terapagosstellar'],
      species: 'terapagos-terastal',
      types: [TypesEnum.Normal],
      weightkg: 16
    }
  ],
  [
    'terapagosstellar',
    {
      abilities: { first: 'teraformzero' },
      baseSpecies: 'terapagos',
      baseStats: { hp: 160, atk: 105, def: 110, spa: 130, spd: 110, spe: 85 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Stellar',
      formeLetter: 'S',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.7,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 1024,
      otherFormes: ['terapagos', 'terapagosterastal'],
      species: 'terapagos-stellar',
      types: [TypesEnum.Normal],
      weightkg: 77
    }
  ],
  [
    'pecharunt',
    {
      abilities: { first: 'poisonpuppeteer' },
      baseStats: { hp: 88, atk: 88, def: 160, spa: 88, spd: 88, spe: 88 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 3, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.3,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 1025,
      species: 'pecharunt',
      types: [TypesEnum.Poison, TypesEnum.Ghost],
      weightkg: 0.3
    }
  ]
];

for (const [key, value] of entries) {
  value.key = key;

  Pokedex.set(key, value);
}
