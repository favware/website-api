import type { PokemonTypes } from '#assets/pokemon-source';
import { Pokedex } from '#dexdata/pokedex';
import { TypesEnum } from '#utils/pokemonTypes';

const entries: [string, PokemonTypes.DexEntry][] = [
  [
    'grookey',
    {
      abilities: { first: 'overgrow', hidden: 'grassysurge' },
      baseStats: { hp: 50, atk: 65, def: 50, spa: 40, spd: 40, spe: 65 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Field', 'Grass'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['thwackey'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 810,
      species: 'grookey',
      types: [TypesEnum.Grass],
      weightkg: 5
    }
  ],
  [
    'thwackey',
    {
      abilities: { first: 'overgrow', hidden: 'grassysurge' },
      baseStats: { hp: 70, atk: 85, def: 70, spa: 55, spd: 60, spe: 80 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Field', 'Grass'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 16,
      evos: ['rillaboom'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 811,
      prevo: 'grookey',
      species: 'thwackey',
      types: [TypesEnum.Grass],
      weightkg: 14
    }
  ],
  [
    'rillaboom',
    {
      abilities: { first: 'overgrow', hidden: 'grassysurge' },
      baseStats: { hp: 100, atk: 125, def: 90, spa: 60, spd: 70, spe: 85 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Field', 'Grass'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 35,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 2.1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 812,
      otherFormes: ['rillaboomgmax'],
      prevo: 'thwackey',
      species: 'rillaboom',
      types: [TypesEnum.Grass],
      weightkg: 90
    }
  ],
  [
    'rillaboomgmax',
    {
      abilities: { first: 'overgrow', hidden: 'grassysurge' },
      baseSpecies: 'rillaboom',
      baseStats: { hp: 100, atk: 125, def: 90, spa: 60, spd: 70, spe: 85 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Field', 'Grass'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 35,
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 28,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 812,
      otherFormes: ['rillaboom'],
      species: 'rillaboom-gmax',
      types: [TypesEnum.Grass],
      weightkg: 90
    }
  ],
  [
    'scorbunny',
    {
      abilities: { first: 'blaze', hidden: 'libero' },
      baseStats: { hp: 50, atk: 71, def: 40, spa: 40, spd: 40, spe: 69 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'White',
      eggGroups: ['Field', 'Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['raboot'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 813,
      species: 'scorbunny',
      types: [TypesEnum.Fire],
      weightkg: 4.5
    }
  ],
  [
    'raboot',
    {
      abilities: { first: 'blaze', hidden: 'libero' },
      baseStats: { hp: 65, atk: 86, def: 60, spa: 55, spd: 60, spe: 94 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Gray',
      eggGroups: ['Field', 'Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 16,
      evos: ['cinderace'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 814,
      prevo: 'scorbunny',
      species: 'raboot',
      types: [TypesEnum.Fire],
      weightkg: 9
    }
  ],
  [
    'cinderace',
    {
      abilities: { first: 'blaze', hidden: 'libero' },
      baseStats: { hp: 80, atk: 116, def: 75, spa: 65, spd: 75, spe: 119 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'White',
      eggGroups: ['Field', 'Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      evoLevel: 35,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 815,
      otherFormes: ['cinderacegmax'],
      prevo: 'raboot',
      species: 'cinderace',
      types: [TypesEnum.Fire],
      weightkg: 33
    }
  ],
  [
    'cinderacegmax',
    {
      abilities: { first: 'blaze', hidden: 'libero' },
      baseSpecies: 'cinderace',
      baseStats: { hp: 80, atk: 116, def: 75, spa: 65, spd: 75, spe: 119 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'White',
      eggGroups: ['Field', 'Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      evoLevel: 35,
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 27,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 815,
      otherFormes: ['cinderace'],
      species: 'cinderace-gmax',
      types: [TypesEnum.Fire],
      weightkg: 33
    }
  ],
  [
    'sobble',
    {
      abilities: { first: 'torrent', hidden: 'sniper' },
      baseStats: { hp: 50, atk: 40, def: 40, spa: 70, spd: 40, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 1 },
      evos: ['drizzile'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 816,
      species: 'sobble',
      types: [TypesEnum.Water],
      weightkg: 4
    }
  ],
  [
    'drizzile',
    {
      abilities: { first: 'torrent', hidden: 'sniper' },
      baseStats: { hp: 65, atk: 60, def: 55, spa: 95, spd: 55, spe: 90 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 16,
      evos: ['inteleon'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 817,
      prevo: 'sobble',
      species: 'drizzile',
      types: [TypesEnum.Water],
      weightkg: 11.5
    }
  ],
  [
    'inteleon',
    {
      abilities: { first: 'torrent', hidden: 'sniper' },
      baseStats: { hp: 70, atk: 85, def: 65, spa: 125, spd: 65, spe: 120 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      evoLevel: 35,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.9,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 818,
      otherFormes: ['inteleongmax'],
      prevo: 'drizzile',
      species: 'inteleon',
      types: [TypesEnum.Water],
      weightkg: 45.2
    }
  ],
  [
    'inteleongmax',
    {
      abilities: { first: 'torrent', hidden: 'sniper' },
      baseSpecies: 'inteleon',
      baseStats: { hp: 70, atk: 85, def: 65, spa: 125, spd: 65, spe: 120 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      evoLevel: 35,
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 40,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 818,
      otherFormes: ['inteleon'],
      species: 'inteleon-gmax',
      types: [TypesEnum.Water],
      weightkg: 45.2
    }
  ],
  [
    'skwovet',
    {
      abilities: { first: 'cheekpouch', hidden: 'gluttony' },
      baseStats: { hp: 70, atk: 55, def: 55, spa: 35, spd: 35, spe: 25 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['greedent'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 819,
      species: 'skwovet',
      types: [TypesEnum.Normal],
      weightkg: 2.5
    }
  ],
  [
    'greedent',
    {
      abilities: { first: 'cheekpouch', hidden: 'gluttony' },
      baseStats: { hp: 120, atk: 95, def: 95, spa: 55, spd: 75, spe: 20 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 24,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 820,
      prevo: 'skwovet',
      species: 'greedent',
      types: [TypesEnum.Normal],
      weightkg: 6
    }
  ],
  [
    'rookidee',
    {
      abilities: { first: 'keeneye', second: 'unnerve', hidden: 'bigpecks' },
      baseStats: { hp: 38, atk: 47, def: 35, spa: 33, spd: 35, spe: 57 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Blue',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['corvisquire'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 821,
      species: 'rookidee',
      types: [TypesEnum.Flying],
      weightkg: 1.8
    }
  ],
  [
    'corvisquire',
    {
      abilities: { first: 'keeneye', second: 'unnerve', hidden: 'bigpecks' },
      baseStats: { hp: 68, atk: 67, def: 55, spa: 43, spd: 55, spe: 77 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Blue',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 18,
      evos: ['corvisquire'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 822,
      prevo: 'rookidee',
      species: 'corvisquire',
      types: [TypesEnum.Flying],
      weightkg: 16
    }
  ],
  [
    'corviknight',
    {
      abilities: { first: 'pressure', second: 'unnerve', hidden: 'mirrorarmor' },
      baseStats: { hp: 98, atk: 87, def: 105, spa: 53, spd: 85, spe: 67 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 3, spa: 0, spd: 0, spe: 0 },
      evoLevel: 38,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 823,
      otherFormes: ['corviknightgmax'],
      prevo: 'corvisquire',
      species: 'corviknight',
      types: [TypesEnum.Flying, TypesEnum.Steel],
      weightkg: 75
    }
  ],
  [
    'corviknightgmax',
    {
      abilities: { first: 'pressure', second: 'unnerve', hidden: 'mirrorarmor' },
      baseSpecies: 'corviknight',
      baseStats: { hp: 98, atk: 87, def: 105, spa: 53, spd: 85, spe: 67 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 3, spa: 0, spd: 0, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 14,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 823,
      otherFormes: ['corviknight'],
      species: 'corviknight-gmax',
      types: [TypesEnum.Flying, TypesEnum.Steel],
      weightkg: 350,
      aliases: ['gigantamax corviknight']
    }
  ],
  [
    'blipbug',
    {
      abilities: { first: 'swarm', second: 'compoundeyes', hidden: 'telepathy' },
      baseStats: { hp: 25, atk: 20, def: 20, spa: 25, spd: 45, spe: 45 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Blue',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['dottler'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 824,
      species: 'blipbug',
      types: [TypesEnum.Bug],
      weightkg: 8
    }
  ],
  [
    'dottler',
    {
      abilities: { first: 'swarm', second: 'compoundeyes', hidden: 'telepathy' },
      baseStats: { hp: 50, atk: 35, def: 80, spa: 50, spd: 90, spe: 30 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Yellow',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 10,
      evos: ['orbeetle'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 825,
      prevo: 'blipbug',
      species: 'dottler',
      types: [TypesEnum.Bug, TypesEnum.Psychic],
      weightkg: 19.5
    }
  ],
  [
    'orbeetle',
    {
      abilities: { first: 'swarm', second: 'frisk', hidden: 'telepathy' },
      baseStats: { hp: 60, atk: 45, def: 110, spa: 80, spd: 120, spe: 90 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 3, spe: 0 },
      evoLevel: 30,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 826,
      otherFormes: ['orbeetlegmax'],
      prevo: 'dottler',
      species: 'orbeetle',
      types: [TypesEnum.Bug, TypesEnum.Psychic],
      weightkg: 40.8
    }
  ],
  [
    'orbeetlegmax',
    {
      abilities: { first: 'swarm', second: 'frisk', hidden: 'telepathy' },
      baseSpecies: 'orbeetle',
      baseStats: { hp: 60, atk: 45, def: 110, spa: 80, spd: 120, spe: 90 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 3, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 14,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 826,
      otherFormes: ['orbeetle'],
      species: 'orbeetle-gmax',
      types: [TypesEnum.Bug, TypesEnum.Psychic],
      weightkg: 122.4,
      aliases: ['gigantamax orbeetle']
    }
  ],
  [
    'nickit',
    {
      abilities: { first: 'runaway', second: 'unburden', hidden: 'stakeout' },
      baseStats: { hp: 40, atk: 28, def: 28, spa: 47, spd: 52, spe: 50 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['thievul'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 3855,
      num: 827,
      species: 'nickit',
      types: [TypesEnum.Dark],
      weightkg: 8.9
    }
  ],
  [
    'thievul',
    {
      abilities: { first: 'runaway', second: 'unburden', hidden: 'stakeout' },
      baseStats: { hp: 70, atk: 58, def: 58, spa: 87, spd: 92, spe: 90 },
      catchRate: { base: 127, percentageWithOrdinaryPokeballAtFullHealth: '26%' },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 18,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 3855,
      num: 828,
      prevo: 'nickit',
      species: 'thievul',
      types: [TypesEnum.Dark],
      weightkg: 19.9
    }
  ],
  [
    'gossifleur',
    {
      abilities: {
        first: 'cottondown',
        second: 'regenerator',
        hidden: 'effectspore'
      },
      baseStats: { hp: 40, atk: 40, def: 60, spa: 40, spd: 60, spe: 10 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Green',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['eldegoss'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 829,
      species: 'gossifleur',
      types: [TypesEnum.Grass],
      weightkg: 2.2
    }
  ],
  [
    'eldegoss',
    {
      abilities: {
        first: 'cottondown',
        second: 'regenerator',
        hidden: 'effectspore'
      },
      baseStats: { hp: 60, atk: 50, def: 90, spa: 80, spd: 120, spe: 60 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Green',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 20,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 830,
      prevo: 'gossifleur',
      species: 'eldegoss',
      types: [TypesEnum.Grass],
      weightkg: 2.5
    }
  ],
  [
    'wooloo',
    {
      abilities: { first: 'fluffy', second: 'runaway', hidden: 'bulletproof' },
      baseStats: { hp: 42, atk: 40, def: 55, spa: 40, spd: 45, spe: 48 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['dubwool'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 831,
      species: 'wooloo',
      types: [TypesEnum.Normal],
      weightkg: 6
    }
  ],
  [
    'dubwool',
    {
      abilities: { first: 'fluffy', second: 'steadfast', hidden: 'bulletproof' },
      baseStats: { hp: 72, atk: 80, def: 100, spa: 60, spd: 90, spe: 88 },
      catchRate: { base: 127, percentageWithOrdinaryPokeballAtFullHealth: '26%' },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 24,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 832,
      prevo: 'wooloo',
      species: 'dubwool',
      types: [TypesEnum.Normal],
      weightkg: 43
    }
  ],
  [
    'chewtle',
    {
      abilities: { first: 'strongjaw', second: 'shellarmor', hidden: 'swiftswim' },
      baseStats: { hp: 50, atk: 64, def: 50, spa: 38, spd: 38, spe: 44 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Green',
      eggGroups: ['Monster', 'Water 1'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['drednaw'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 833,
      species: 'chewtle',
      types: [TypesEnum.Water],
      weightkg: 8.5
    }
  ],
  [
    'drednaw',
    {
      abilities: { first: 'strongjaw', second: 'shellarmor', hidden: 'swiftswim' },
      baseStats: { hp: 90, atk: 115, def: 90, spa: 48, spd: 68, spe: 74 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Green',
      eggGroups: ['Monster', 'Water 1'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 22,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 834,
      otherFormes: ['drednawgmax'],
      prevo: 'chewtle',
      species: 'drednaw',
      types: [TypesEnum.Water, TypesEnum.Rock],
      weightkg: 115.5
    }
  ],
  [
    'drednawgmax',
    {
      abilities: { first: 'strongjaw', second: 'shellarmor', hidden: 'swiftswim' },
      baseSpecies: 'drednaw',
      baseStats: { hp: 90, atk: 115, def: 90, spa: 48, spd: 68, spe: 74 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Green',
      eggGroups: ['Monster', 'Water 1'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 24,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 834,
      otherFormes: ['drednaw'],
      species: 'drednaw-gmax',
      types: [TypesEnum.Water, TypesEnum.Rock],
      weightkg: 346.5,
      aliases: ['gigantamax drednaw']
    }
  ],
  [
    'yamper',
    {
      abilities: { first: 'ballfetch', hidden: 'rattled' },
      baseStats: { hp: 59, atk: 45, def: 50, spa: 40, spd: 50, spe: 26 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Yellow',
      eggGroups: ['Field'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['boltund'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      num: 835,
      species: 'yamper',
      types: [TypesEnum.Electric],
      weightkg: 13.5
    }
  ],
  [
    'boltund',
    {
      abilities: { first: 'strongjaw', hidden: 'competitive' },
      baseStats: { hp: 69, atk: 90, def: 60, spa: 90, spd: 60, spe: 121 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 25,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      num: 836,
      prevo: 'yamper',
      species: 'boltund',
      types: [TypesEnum.Electric],
      weightkg: 34
    }
  ],
  [
    'rolycoly',
    {
      abilities: {
        first: 'steamengine',
        second: 'heatproof',
        hidden: 'flashfire'
      },
      baseStats: { hp: 30, atk: 40, def: 50, spa: 40, spd: 50, spe: 30 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Black',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['carkol'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 837,
      species: 'rolycoly',
      types: [TypesEnum.Rock],
      weightkg: 12
    }
  ],
  [
    'carkol',
    {
      abilities: {
        first: 'steamengine',
        second: 'flamebody',
        hidden: 'flashfire'
      },
      baseStats: { hp: 80, atk: 60, def: 90, spa: 60, spd: 70, spe: 50 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Black',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 18,
      evos: ['coalossal'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 838,
      prevo: 'rolycoly',
      species: 'carkol',
      types: [TypesEnum.Rock, TypesEnum.Fire],
      weightkg: 78
    }
  ],
  [
    'coalossal',
    {
      abilities: {
        first: 'steamengine',
        second: 'flamebody',
        hidden: 'flashfire'
      },
      baseStats: { hp: 110, atk: 80, def: 120, spa: 80, spd: 90, spe: 30 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Black',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 3, spa: 0, spd: 0, spe: 0 },
      evoLevel: 34,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.8,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 839,
      otherFormes: ['coalossalgmax'],
      prevo: 'carkol',
      species: 'coalossal',
      types: [TypesEnum.Rock, TypesEnum.Fire],
      weightkg: 310.5
    }
  ],
  [
    'coalossalgmax',
    {
      abilities: {
        first: 'steamengine',
        second: 'flamebody',
        hidden: 'flashfire'
      },
      baseSpecies: 'coalossal',
      baseStats: { hp: 110, atk: 80, def: 120, spa: 80, spd: 90, spe: 30 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Black',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 3, spa: 0, spd: 0, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 42,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 839,
      otherFormes: ['coalossal'],
      species: 'coalossal-gmax',
      types: [TypesEnum.Rock, TypesEnum.Fire],
      weightkg: 930,
      aliases: ['gigantamax coalossal']
    }
  ],
  [
    'applin',
    {
      abilities: { first: 'ripen', second: 'gluttony', hidden: 'bulletproof' },
      baseStats: { hp: 40, atk: 40, def: 80, spa: 40, spd: 40, spe: 20 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Green',
      eggGroups: ['Grass', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['flapple', 'appletun', 'dipplin'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.2,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 5140,
      num: 840,
      species: 'applin',
      types: [TypesEnum.Grass, TypesEnum.Dragon],
      weightkg: 0.5
    }
  ],
  [
    'flapple',
    {
      abilities: { first: 'ripen', second: 'gluttony', hidden: 'hustle' },
      baseStats: { hp: 70, atk: 110, def: 80, spa: 95, spd: 60, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Grass', 'Dragon'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'use Tart Apple',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 5140,
      num: 841,
      otherFormes: ['flapplegmax'],
      prevo: 'applin',
      species: 'flapple',
      types: [TypesEnum.Grass, TypesEnum.Dragon],
      weightkg: 1
    }
  ],
  [
    'flapplegmax',
    {
      abilities: { first: 'ripen', second: 'gluttony', hidden: 'hustle' },
      baseSpecies: 'flapple',
      baseStats: { hp: 70, atk: 110, def: 80, spa: 95, spd: 60, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Grass', 'Dragon'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 24,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 5140,
      num: 841,
      otherFormes: ['flapple'],
      species: 'flapple-gmax',
      types: [TypesEnum.Grass, TypesEnum.Dragon],
      weightkg: 1,
      aliases: ['gigantamax flapple']
    }
  ],
  [
    'appletun',
    {
      abilities: { first: 'ripen', second: 'gluttony', hidden: 'thickfat' },
      baseStats: { hp: 110, atk: 85, def: 80, spa: 100, spd: 80, spe: 30 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Grass', 'Dragon'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'use Sweet Apple',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 5140,
      num: 842,
      otherFormes: ['appletungmax'],
      prevo: 'applin',
      species: 'appletun',
      types: [TypesEnum.Grass, TypesEnum.Dragon],
      weightkg: 13
    }
  ],
  [
    'appletungmax',
    {
      abilities: { first: 'ripen', second: 'gluttony', hidden: 'thickfat' },
      baseSpecies: 'appletun',
      baseStats: { hp: 110, atk: 85, def: 80, spa: 100, spd: 80, spe: 30 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Grass', 'Dragon'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'use Sweet Apple',
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 24,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 5140,
      num: 842,
      otherFormes: ['appletun'],
      prevo: 'applin',
      species: 'appletun-gmax',
      types: [TypesEnum.Grass, TypesEnum.Dragon],
      weightkg: 40,
      aliases: ['gigantamax appletun']
    }
  ],
  [
    'silicobra',
    {
      abilities: { first: 'sandspit', second: 'shedskin', hidden: 'sandveil' },
      baseStats: { hp: 52, atk: 57, def: 75, spa: 35, spd: 50, spe: 46 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Green',
      eggGroups: ['Field', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['sandaconda'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 843,
      species: 'silicobra',
      types: [TypesEnum.Ground],
      weightkg: 7.6
    }
  ],
  [
    'sandaconda',
    {
      abilities: { first: 'sandspit', second: 'shedskin', hidden: 'sandveil' },
      baseStats: { hp: 72, atk: 107, def: 125, spa: 65, spd: 70, spe: 71 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Green',
      eggGroups: ['Field', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 36,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 3.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 844,
      otherFormes: ['sandacondagmax'],
      prevo: 'silicobra',
      species: 'sandaconda',
      types: [TypesEnum.Ground],
      weightkg: 65.5
    }
  ],
  [
    'sandacondagmax',
    {
      abilities: { first: 'sandspit', second: 'shedskin', hidden: 'sandveil' },
      baseSpecies: 'sandaconda',
      baseStats: { hp: 72, atk: 107, def: 125, spa: 65, spd: 70, spe: 71 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Green',
      eggGroups: ['Field', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 36,
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 22,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 844,
      otherFormes: ['sandaconda'],
      prevo: 'silicobra',
      species: 'sandaconda-gmax',
      types: [TypesEnum.Ground],
      weightkg: 197,
      aliases: ['gigantamax sandaconda']
    }
  ],
  [
    'cramorant',
    {
      abilities: { first: 'gulpmissile' },
      baseStats: { hp: 70, atk: 85, def: 55, spa: 85, spd: 95, spe: 85 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 845,
      otherFormes: ['cramorantgulping', 'cramorantgorging'],
      species: 'cramorant',
      types: [TypesEnum.Flying, TypesEnum.Water],
      weightkg: 18
    }
  ],
  [
    'cramorantgulping',
    {
      abilities: { first: 'gulpmissile' },
      baseSpecies: 'cramorant',
      baseStats: { hp: 70, atk: 85, def: 55, spa: 85, spd: 95, spe: 85 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      forme: 'Gulping',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 845,
      otherFormes: ['cramorant', 'cramorantgorging'],
      species: 'Cramorant-Gulping',
      types: [TypesEnum.Flying, TypesEnum.Water],
      weightkg: 18
    }
  ],
  [
    'cramorantgorging',
    {
      abilities: { first: 'gulpmissile' },
      baseSpecies: 'cramorant',
      baseStats: { hp: 70, atk: 85, def: 55, spa: 85, spd: 95, spe: 85 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      forme: 'Gorging',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 845,
      otherFormes: ['cramorant', 'cramorantgulping'],
      species: 'Cramorant-Gorging',
      types: [TypesEnum.Flying, TypesEnum.Water],
      weightkg: 18
    }
  ],
  [
    'arrokuda',
    {
      abilities: { first: 'swiftswim', hidden: 'propellertail' },
      baseStats: { hp: 41, atk: 63, def: 40, spa: 40, spd: 30, spe: 66 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Water 2'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['barraskewda'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 846,
      species: 'arrokuda',
      types: [TypesEnum.Water],
      weightkg: 1
    }
  ],
  [
    'barraskewda',
    {
      abilities: { first: 'swiftswim', hidden: 'propellertail' },
      baseStats: { hp: 61, atk: 123, def: 60, spa: 60, spd: 50, spe: 136 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Brown',
      eggGroups: ['Water 2'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 26,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 847,
      prevo: 'arrokuda',
      species: 'barraskewda',
      types: [TypesEnum.Water],
      weightkg: 30
    }
  ],
  [
    'toxel',
    {
      abilities: { first: 'rattled', second: 'static', hidden: 'klutz' },
      baseStats: { hp: 40, atk: 38, def: 35, spa: 54, spd: 35, spe: 40 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['toxtricity', 'toxtricitylowkey'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      num: 848,
      species: 'toxel',
      types: [TypesEnum.Electric, TypesEnum.Poison],
      weightkg: 0.11
    }
  ],
  [
    'toxtricity',
    {
      abilities: { first: 'punkrock', second: 'plus', hidden: 'technician' },
      baseForme: 'Amped',
      baseStats: { hp: 75, atk: 98, def: 70, spa: 114, spd: 70, spe: 75 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: '30 while having a Adamant, Brave, Docile, Hardy, Hasty, Impish, Jolly, Lax, Naive, Naughty, Rash, Quirky, or Sassy Nature',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      num: 849,
      otherFormes: ['toxtricitygmax', 'toxtricitylowkey', 'toxtricitylowkeygmax'],
      prevo: 'toxel',
      species: 'toxtricity',
      types: [TypesEnum.Electric, TypesEnum.Poison],
      weightkg: 40,
      aliases: ['toxtricitya', 'toxtricityamped']
    }
  ],
  [
    'toxtricitylowkey',
    {
      abilities: { first: 'punkrock', second: 'minus', hidden: 'technician' },
      baseSpecies: 'toxtricity',
      baseStats: { hp: 75, atk: 98, def: 70, spa: 114, spd: 70, spe: 75 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: '30 while having a Bashful, Bold, Calm, Careful, Gentle, Lonely, Mild, Modest, Quiet, Relaxed, Serious, or Timid Nature',
      forme: 'Low-Key',
      formeLetter: 'L',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      num: 849,
      otherFormes: ['toxtricity', 'toxtricitygmax', 'toxtricitylowkeygmax'],
      prevo: 'toxel',
      species: 'toxtricity-low-key',
      types: [TypesEnum.Electric, TypesEnum.Poison],
      weightkg: 40,
      aliases: ['toxtricityl', 'toxtricitylk']
    }
  ],
  [
    'toxtricitygmax',
    {
      abilities: { first: 'punkrock', second: 'plus', hidden: 'technician' },
      baseSpecies: 'toxtricity',
      baseStats: { hp: 75, atk: 98, def: 70, spa: 114, spd: 70, spe: 75 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 24,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      num: 849,
      otherFormes: ['toxtricity', 'toxtricitylowkey', 'toxtricitylowkeygmax'],
      species: 'toxtricity-gmax',
      types: [TypesEnum.Electric, TypesEnum.Poison],
      weightkg: 140,
      aliases: ['gigantamax toxtricity']
    }
  ],
  [
    'toxtricitylowkeygmax',
    {
      abilities: { first: 'punkrock', second: 'minus', hidden: 'technician' },
      baseSpecies: 'toxtricitylowkey',
      baseStats: { hp: 75, atk: 98, def: 70, spa: 114, spd: 70, spe: 75 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      forme: 'Low-Key-Gmax',
      formeLetter: 'LKG',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      num: 849,
      otherFormes: ['toxtricity', 'toxtricitygmax', 'toxtricitylowkeygmax'],
      species: 'toxtricity-low-key-gmax',
      types: [TypesEnum.Electric, TypesEnum.Poison],
      weightkg: 140
    }
  ],
  [
    'sizzlipede',
    {
      abilities: { first: 'flashfire', second: 'whitesmoke', hidden: 'flamebody' },
      baseStats: { hp: 50, atk: 65, def: 45, spa: 50, spd: 50, spe: 45 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Red',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['centiskorch'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 850,
      species: 'sizzlipede',
      types: [TypesEnum.Fire, TypesEnum.Bug],
      weightkg: 1
    }
  ],
  [
    'centiskorch',
    {
      abilities: { first: 'flashfire', second: 'whitesmoke', hidden: 'flamebody' },
      baseStats: { hp: 100, atk: 115, def: 65, spa: 90, spd: 90, spe: 65 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Red',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 28,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 851,
      prevo: 'sizzlipede',
      species: 'centiskorch',
      types: [TypesEnum.Fire, TypesEnum.Bug],
      weightkg: 120
    }
  ],
  [
    'centiskorchgmax',
    {
      abilities: { first: 'flashfire', second: 'whitesmoke', hidden: 'flamebody' },
      baseSpecies: 'centiskorch',
      baseStats: { hp: 100, atk: 15, def: 65, spa: 90, spd: 90, spe: 65 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Red',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 75,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 851,
      species: 'centiskorch-gmax',
      types: [TypesEnum.Fire, TypesEnum.Bug],
      weightkg: 360,
      aliases: ['gigantamax centiskorch']
    }
  ],
  [
    'clobbopus',
    {
      abilities: { first: 'limber', hidden: 'technician' },
      baseStats: { hp: 50, atk: 68, def: 60, spa: 50, spd: 50, spe: 32 },
      catchRate: {
        base: 180,
        percentageWithOrdinaryPokeballAtFullHealth: '33.8%'
      },
      color: 'Brown',
      eggGroups: ['Water 1', 'Human-Like'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['grapploct'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      num: 852,
      species: 'clobbopus',
      types: [TypesEnum.Fighting],
      weightkg: 4
    }
  ],
  [
    'grapploct',
    {
      abilities: { first: 'limber', hidden: 'technician' },
      baseStats: { hp: 80, atk: 118, def: 90, spa: 70, spd: 80, spe: 42 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Human-Like'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'level up while knowing Taunt',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      num: 853,
      prevo: 'clobbopus',
      species: 'grapploct',
      types: [TypesEnum.Fighting],
      weightkg: 39
    }
  ],
  [
    'sinistea',
    {
      abilities: { first: 'weakarmor', hidden: 'cursedbody' },
      baseForme: 'Phony',
      baseStats: { hp: 40, atk: 45, def: 45, spa: 74, spd: 54, spe: 50 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Purple',
      eggGroups: ['Mineral', 'Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['polteageist'],
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 854,
      otherFormes: ['sinisteaantique'],
      species: 'sinistea',
      types: [TypesEnum.Ghost],
      weightkg: 0.2
    }
  ],
  [
    'sinisteaantique',
    {
      abilities: { first: 'weakarmor', hidden: 'cursedbody' },
      baseSpecies: 'sinistea',
      baseStats: { hp: 40, atk: 45, def: 45, spa: 74, spd: 54, spe: 50 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Purple',
      eggGroups: ['Mineral', 'Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['polteageistantique'],
      forme: 'antique',
      formeLetter: 'A',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 854,
      otherFormes: ['sinistea'],
      species: 'sinistea-antique',
      types: [TypesEnum.Ghost],
      weightkg: 0.2
    }
  ],
  [
    'polteageist',
    {
      abilities: { first: 'weakarmor', second: 'weakarmor', hidden: 'cursedbody' },
      baseForme: 'Phony',
      baseStats: { hp: 60, atk: 65, def: 65, spa: 134, spd: 114, spe: 70 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Purple',
      eggGroups: ['Mineral', 'Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 'use Cracked Pot',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 855,
      otherFormes: ['polteageistantique'],
      prevo: 'sinistea',
      species: 'polteageist',
      types: [TypesEnum.Ghost],
      weightkg: 0.4
    }
  ],
  [
    'polteageistantique',
    {
      abilities: { first: 'weakarmor', second: 'weakarmor', hidden: 'cursedbody' },
      baseSpecies: 'polteageist',
      baseStats: { hp: 60, atk: 65, def: 65, spa: 134, spd: 114, spe: 70 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Purple',
      eggGroups: ['Mineral', 'Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 'use Chipped Pot',
      forme: 'antique',
      formeLetter: 'A',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 855,
      otherFormes: ['polteageist'],
      prevo: 'sinisteaantique',
      species: 'polteageist-antique',
      types: [TypesEnum.Ghost],
      weightkg: 0.4
    }
  ],
  [
    'hatenna',
    {
      abilities: {
        first: 'healer',
        second: 'anticipation',
        hidden: 'magicbounce'
      },
      baseStats: { hp: 42, atk: 30, def: 45, spa: 56, spd: 53, spe: 39 },
      catchRate: {
        base: 235,
        percentageWithOrdinaryPokeballAtFullHealth: '41.3%'
      },
      color: 'Pink',
      eggGroups: ['Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['hattrem'],
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 856,
      species: 'hatenna',
      types: [TypesEnum.Psychic],
      weightkg: 3.4
    }
  ],
  [
    'hattrem',
    {
      abilities: {
        first: 'healer',
        second: 'anticipation',
        hidden: 'magicbounce'
      },
      baseStats: { hp: 57, atk: 40, def: 65, spa: 86, spd: 73, spe: 49 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Pink',
      eggGroups: ['Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 32,
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 857,
      prevo: 'hatenna',
      species: 'hattrem',
      types: [TypesEnum.Psychic],
      weightkg: 4.8
    }
  ],
  [
    'hatterene',
    {
      abilities: {
        first: 'healer',
        second: 'anticipation',
        hidden: 'magicbounce'
      },
      baseStats: { hp: 57, atk: 90, def: 95, spa: 136, spd: 103, spe: 29 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Pink',
      eggGroups: ['Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: 42,
      genderRatio: { male: '0%', female: '100%' },
      heightm: 2.1,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 858,
      prevo: 'hattrem',
      species: 'hatterene',
      types: [TypesEnum.Psychic, TypesEnum.Fairy],
      weightkg: 5.1
    }
  ],
  [
    'hatterenegmax',
    {
      abilities: {
        first: 'healer',
        second: 'anticipation',
        hidden: 'magicbounce'
      },
      baseSpecies: 'hatterene',
      baseStats: { hp: 57, atk: 90, def: 95, spa: 136, spd: 103, spe: 29 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Pink',
      eggGroups: ['Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: 42,
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 26,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 858,
      prevo: 'hattrem',
      species: 'hatterene-gmax',
      types: [TypesEnum.Psychic, TypesEnum.Fairy],
      weightkg: 15.3,
      aliases: ['gigantamax hatterene']
    }
  ],
  [
    'impidimp',
    {
      abilities: { first: 'prankster', second: 'frisk', hidden: 'pickpocket' },
      baseStats: { hp: 45, atk: 45, def: 30, spa: 55, spd: 40, spe: 50 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Pink',
      eggGroups: ['Fairy', 'Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['morgrem'],
      genderRatio: { male: '100%', female: '0%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 859,
      species: 'impidimp',
      types: [TypesEnum.Dark, TypesEnum.Fairy],
      weightkg: 5.5
    }
  ],
  [
    'morgrem',
    {
      abilities: { first: 'prankster', second: 'frisk', hidden: 'pickpocket' },
      baseStats: { hp: 65, atk: 60, def: 45, spa: 75, spd: 55, spe: 70 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Pink',
      eggGroups: ['Fairy', 'Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 32,
      evos: ['grimmsnarl'],
      genderRatio: { male: '100%', female: '0%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 860,
      prevo: 'impidimp',
      species: 'morgrem',
      types: [TypesEnum.Dark, TypesEnum.Fairy],
      weightkg: 12.5
    }
  ],
  [
    'grimmsnarl',
    {
      abilities: { first: 'prankster', second: 'frisk', hidden: 'pickpocket' },
      baseStats: { hp: 95, atk: 120, def: 65, spa: 95, spd: 75, spe: 60 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Fairy', 'Human-Like'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 42,
      genderRatio: { male: '100%', female: '0%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 861,
      otherFormes: ['grimmsnarlgmax'],
      prevo: 'morgrem',
      species: 'grimmsnarl',
      types: [TypesEnum.Dark, TypesEnum.Fairy],
      weightkg: 61
    }
  ],
  [
    'grimmsnarlgmax',
    {
      abilities: { first: 'prankster', second: 'frisk', hidden: 'pickpocket' },
      baseSpecies: 'grimmsnarl',
      baseStats: { hp: 95, atk: 120, def: 65, spa: 95, spd: 75, spe: 60 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Fairy', 'Human-Like'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 42,
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '100%', female: '0%' },
      heightm: 32,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 861,
      otherFormes: ['grimmsnarl'],
      prevo: 'morgrem',
      species: 'grimmsnarl-gmax',
      types: [TypesEnum.Dark, TypesEnum.Fairy],
      weightkg: 183,
      aliases: ['gigantamax grimmsnarl']
    }
  ],
  [
    'obstagoon',
    {
      abilities: { first: 'reckless', second: 'guts', hidden: 'defiant' },
      baseStats: { hp: 93, atk: 90, def: 101, spa: 60, spd: 81, spe: 95 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 3, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'level 35 at night',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 862,
      prevo: 'linoonegalar',
      species: 'obstagoon',
      types: [TypesEnum.Dark, TypesEnum.Normal],
      weightkg: 46,
      aliases: ['goon']
    }
  ],
  [
    'perrserker',
    {
      abilities: {
        first: 'battlearmor',
        second: 'toughclaws',
        hidden: 'steelyspirit'
      },
      baseStats: { hp: 70, atk: 110, def: 100, spa: 50, spd: 60, spe: 50 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 863,
      prevo: 'meowthgalar',
      species: 'perrserker',
      types: [TypesEnum.Steel],
      weightkg: 28
    }
  ],
  [
    'cursola',
    {
      abilities: { first: 'weakarmor', hidden: 'perishbody' },
      baseStats: { hp: 60, atk: 95, def: 50, spa: 145, spd: 130, spe: 30 },
      catchRate: { base: 30, percentageWithOrdinaryPokeballAtFullHealth: '8.8%' },
      color: 'White',
      eggGroups: ['Water 1', 'Water 3'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 38,
      genderRatio: { male: '25%', female: '75%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      num: 864,
      prevo: 'corsolagalar',
      species: 'cursola',
      types: [TypesEnum.Ghost],
      weightkg: 0.4
    }
  ],
  [
    'sirfetchd',
    {
      abilities: { first: 'steadfast', hidden: 'scrappy' },
      baseStats: { hp: 62, atk: 135, def: 95, spa: 68, spd: 82, spe: 65 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'White',
      eggGroups: ['Flying', 'Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Land 3 critical hits in 1 battle',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 865,
      prevo: 'farfetchdgalar',
      species: "sirfetch'd",
      types: [TypesEnum.Fighting],
      weightkg: 117
    }
  ],
  [
    'mrrime',
    {
      abilities: {
        first: 'tangledfeet',
        second: 'screencleaner',
        hidden: 'icebody'
      },
      baseStats: { hp: 80, atk: 85, def: 75, spa: 110, spd: 100, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: 42,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 866,
      prevo: 'mrmimegalar',
      species: 'Mr. Rime',
      types: [TypesEnum.Ice, TypesEnum.Psychic],
      weightkg: 58.2,
      aliases: ['rime']
    }
  ],
  [
    'runerigus',
    {
      abilities: {
        first: 'wanderingspirit',
        second: 'wanderingspirit',
        hidden: 'wanderingspirit'
      },
      baseStats: { hp: 58, atk: 95, def: 145, spa: 50, spd: 105, spe: 30 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Gray',
      eggGroups: ['Mineral', 'Amorphous'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'have 49+ damage on Yamask and walk under stone sculpture in Dusty Bowl Wild Area',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 867,
      prevo: 'yamaskgalar',
      species: 'runerigus',
      types: [TypesEnum.Ground, TypesEnum.Ghost],
      weightkg: 66.6
    }
  ],
  [
    'milcery',
    {
      abilities: { first: 'sweetveil', hidden: 'aromaveil' },
      baseStats: { hp: 45, atk: 40, def: 40, spa: 50, spd: 61, spe: 34 },
      catchRate: {
        base: 200,
        percentageWithOrdinaryPokeballAtFullHealth: '36.6%'
      },
      color: 'White',
      eggGroups: ['Fairy', 'Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 868,
      species: 'milcery',
      types: [TypesEnum.Fairy],
      weightkg: 0.3
    }
  ],
  [
    'alcremie',
    {
      abilities: { first: 'sweetveil', second: 'sweetveil', hidden: 'aromaveil' },
      baseForme: 'Vanilla Cream',
      baseStats: { hp: 65, atk: 60, def: 75, spa: 110, spd: 121, spe: 64 },
      catchRate: {
        base: 100,
        percentageWithOrdinaryPokeballAtFullHealth: '21.7%'
      },
      color: 'White',
      cosmeticFormes: [
        'Alcremie-Ruby-Cream',
        'Alcremie-Matcha-Cream',
        'Alcremie-Mint-Cream',
        'Alcremie-Lemon-Cream',
        'Alcremie-Salted-Cream',
        'Alcremie-Ruby-Swirl',
        'Alcremie-Caramel-Swirl',
        'Alcremie-Rainbow-Swirl'
      ],
      eggGroups: ['Fairy', 'Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 'Spin the joystick while Milcery is holding a sweet.',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 869,
      prevo: 'milcery',
      species: 'alcremie',
      types: [TypesEnum.Fairy],
      weightkg: 0.5,
      aliases: [
        'alcremiecaramelswirl',
        'alcremielemoncream',
        'alcremiematchacream',
        'alcremiemintcream',
        'alcremierainbowswirl',
        'alcremierubycream',
        'alcremierubyswirl',
        'alcremiesaltedcream'
      ]
    }
  ],
  [
    'alcremiegmax',
    {
      abilities: { first: 'sweetveil', hidden: 'aromaveil' },
      baseSpecies: 'alcremie',
      baseStats: { hp: 65, atk: 60, def: 75, spa: 110, spd: 121, spe: 64 },
      catchRate: {
        base: 100,
        percentageWithOrdinaryPokeballAtFullHealth: '21.7%'
      },
      color: 'White',
      eggGroups: ['Fairy', 'Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 30,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 869,
      species: 'alcremie-gmax',
      types: [TypesEnum.Fairy],
      weightkg: 3,
      aliases: ['gigantamax alcremie']
    }
  ],
  [
    'falinks',
    {
      abilities: { first: 'battlearmor', hidden: 'defiant' },
      baseStats: { hp: 65, atk: 100, def: 100, spa: 70, spd: 60, spe: 75 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Fairy', 'Mineral'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 1, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 870,
      species: 'falinks',
      types: [TypesEnum.Fighting],
      weightkg: 62
    }
  ],
  [
    'pincurchin',
    {
      abilities: { first: 'lightningrod', hidden: 'electricsurge' },
      baseStats: { hp: 48, atk: 101, def: 95, spa: 91, spd: 85, spe: 15 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Purple',
      eggGroups: ['Water 1', 'Amorphous'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 871,
      species: 'pincurchin',
      types: [TypesEnum.Electric],
      weightkg: 1
    }
  ],
  [
    'snom',
    {
      abilities: { first: 'shielddust', hidden: 'icescales' },
      baseStats: { hp: 30, atk: 25, def: 35, spa: 45, spd: 30, spe: 20 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'White',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['frosmoth'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 872,
      species: 'snom',
      types: [TypesEnum.Ice, TypesEnum.Bug],
      weightkg: 3.8
    }
  ],
  [
    'frosmoth',
    {
      abilities: { first: 'shielddust', hidden: 'icescales' },
      baseStats: { hp: 70, atk: 65, def: 60, spa: 125, spd: 90, spe: 65 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'White',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 'Level up during Nighttime with happiness of at least 220',
      evos: ['frosmoth'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 873,
      prevo: 'snom',
      species: 'frosmoth',
      types: [TypesEnum.Ice, TypesEnum.Bug],
      weightkg: 42
    }
  ],
  [
    'stonjourner',
    {
      abilities: { first: 'powerspot' },
      baseStats: { hp: 100, atk: 125, def: 135, spa: 20, spd: 20, spe: 20 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Gray',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 6425,
      num: 874,
      species: 'stonjourner',
      types: [TypesEnum.Rock],
      weightkg: 520
    }
  ],
  [
    'eiscue',
    {
      abilities: { first: 'iceface' },
      baseStats: { hp: 75, atk: 80, def: 110, spa: 65, spd: 90, spe: 50 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Field'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 6425,
      num: 875,
      otherFormes: ['eiscuenoice'],
      species: 'eiscue',
      types: [TypesEnum.Ice],
      weightkg: 89
    }
  ],
  [
    'eiscuenoice',
    {
      abilities: { first: 'iceface' },
      baseSpecies: 'eiscue',
      baseStats: { hp: 75, atk: 80, def: 110, spa: 65, spd: 90, spe: 50 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Field'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      forme: 'noice',
      formeLetter: 'N',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 6425,
      num: 875,
      otherFormes: ['eiscue'],
      species: 'eiscue-noice',
      types: [TypesEnum.Ice],
      weightkg: 89,
      aliases: ['eiscuen']
    }
  ],
  [
    'indeedee',
    {
      abilities: {
        first: 'innerfocus',
        second: 'synchronize',
        hidden: 'psychicsurge'
      },
      baseStats: { hp: 60, atk: 65, def: 55, spa: 105, spd: 95, spe: 95 },
      catchRate: { base: 30, percentageWithOrdinaryPokeballAtFullHealth: '8.8%' },
      color: 'Purple',
      eggGroups: ['Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      forme: 'male',
      genderRatio: { male: '100%', female: '0%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 10280,
      num: 876,
      species: 'indeedee',
      types: [TypesEnum.Psychic, TypesEnum.Normal],
      weightkg: 28
    }
  ],
  [
    'indeedeef',
    {
      abilities: {
        first: 'owntempo',
        second: 'synchronize',
        hidden: 'psychicsurge'
      },
      baseSpecies: 'indeedee',
      baseStats: { hp: 70, atk: 55, def: 65, spa: 95, spd: 105, spe: 85 },
      catchRate: { base: 30, percentageWithOrdinaryPokeballAtFullHealth: '8.8%' },
      color: 'Purple',
      eggGroups: ['Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      forme: 'female',
      formeLetter: 'F',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 10280,
      num: 876,
      species: 'indeedee-f',
      types: [TypesEnum.Psychic, TypesEnum.Normal],
      weightkg: 28
    }
  ],
  [
    'morpeko',
    {
      abilities: { first: 'hungerswitch' },
      baseStats: { hp: 58, atk: 95, def: 58, spa: 70, spd: 58, spe: 97 },
      catchRate: {
        base: 180,
        percentageWithOrdinaryPokeballAtFullHealth: '33.8%'
      },
      color: 'Yellow',
      eggGroups: ['Field', 'Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      num: 877,
      otherFormes: ['morpekohangry'],
      species: 'morpeko',
      types: [TypesEnum.Electric, TypesEnum.Dark],
      weightkg: 3
    }
  ],
  [
    'morpekohangry',
    {
      abilities: { first: 'hungerswitch' },
      baseSpecies: 'morpeko',
      baseStats: { hp: 58, atk: 95, def: 58, spa: 70, spd: 58, spe: 97 },
      catchRate: {
        base: 180,
        percentageWithOrdinaryPokeballAtFullHealth: '33.8%'
      },
      color: 'Purple',
      eggGroups: ['Field', 'Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      forme: 'Hangry',
      formeLetter: 'H',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      num: 877,
      otherFormes: ['morpeko'],
      species: 'morpeko-hangry',
      types: [TypesEnum.Electric, TypesEnum.Dark],
      weightkg: 3,
      aliases: ['morpekoh']
    }
  ],
  [
    'cufant',
    {
      abilities: { first: 'sheerforce', hidden: 'heavymetal' },
      baseStats: { hp: 72, atk: 80, def: 49, spa: 40, spd: 49, spe: 40 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Field', 'Mineral'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['copperajah'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 878,
      species: 'cufant',
      types: [TypesEnum.Steel],
      weightkg: 100
    }
  ],
  [
    'copperajah',
    {
      abilities: { first: 'sheerforce', hidden: 'heavymetal' },
      baseStats: { hp: 122, atk: 130, def: 69, spa: 80, spd: 69, spe: 30 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Green',
      eggGroups: ['Field', 'Mineral'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 34,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 879,
      prevo: 'cufant',
      species: 'copperajah',
      types: [TypesEnum.Steel],
      weightkg: 650
    }
  ],
  [
    'copperajahgmax',
    {
      abilities: { first: 'sheerforce', hidden: 'heavymetal' },
      baseSpecies: 'copperajah',
      baseStats: { hp: 122, atk: 130, def: 69, spa: 80, spd: 69, spe: 30 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Green',
      eggGroups: ['Field', 'Mineral'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 23,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 879,
      species: 'copperajah-gmax',
      types: [TypesEnum.Steel],
      weightkg: 1950,
      aliases: ['gigantamax copperajah']
    }
  ],
  [
    'dracozolt',
    {
      abilities: { first: 'voltabsorb', second: 'hustle', hidden: 'sandrush' },
      baseStats: { hp: 90, atk: 100, def: 90, spa: 80, spd: 70, spe: 75 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.8,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 8995,
      num: 880,
      species: 'dracozolt',
      types: [TypesEnum.Electric, TypesEnum.Dragon],
      weightkg: 190
    }
  ],
  [
    'arctozolt',
    {
      abilities: { first: 'voltabsorb', second: 'static', hidden: 'slushrush' },
      baseStats: { hp: 90, atk: 100, def: 90, spa: 90, spd: 80, spe: 55 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.3,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 8995,
      num: 881,
      species: 'arctozolt',
      types: [TypesEnum.Electric, TypesEnum.Ice],
      weightkg: 150
    }
  ],
  [
    'dracovish',
    {
      abilities: { first: 'waterabsorb', second: 'strongjaw', hidden: 'sandrush' },
      baseStats: { hp: 90, atk: 90, def: 100, spa: 70, spd: 80, spe: 75 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.3,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 8995,
      num: 882,
      species: 'dracovish',
      types: [TypesEnum.Water, TypesEnum.Dragon],
      weightkg: 215
    }
  ],
  [
    'arctovish',
    {
      abilities: { first: 'waterabsorb', second: 'icebody', hidden: 'slushrush' },
      baseStats: { hp: 90, atk: 90, def: 100, spa: 80, spd: 90, spe: 55 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 8995,
      num: 883,
      species: 'arctovish',
      types: [TypesEnum.Water, TypesEnum.Ice],
      weightkg: 175
    }
  ],
  [
    'duraludon',
    {
      abilities: { first: 'lightmetal', second: 'heavymetal', hidden: 'stalwart' },
      baseStats: { hp: 70, atk: 95, def: 115, spa: 120, spd: 50, spe: 85 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'White',
      eggGroups: ['Mineral', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 7710,
      num: 884,
      species: 'duraludon',
      types: [TypesEnum.Steel, TypesEnum.Dragon],
      weightkg: 40
    }
  ],
  [
    'duraludongmax',
    {
      abilities: { first: 'lightmetal', second: 'heavymetal', hidden: 'stalwart' },
      baseSpecies: 'duraludon',
      baseStats: { hp: 70, atk: 95, def: 115, spa: 120, spd: 50, spe: 85 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'White',
      eggGroups: ['Mineral', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 43,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 7710,
      num: 884,
      species: 'duraludon-gmax',
      types: [TypesEnum.Steel, TypesEnum.Dragon],
      weightkg: 120,
      aliases: ['gigantamax duraludon']
    }
  ],
  [
    'dreepy',
    {
      abilities: {
        first: 'clearbody',
        second: 'infiltrator',
        hidden: 'cursedbody'
      },
      baseStats: { hp: 28, atk: 60, def: 30, spa: 40, spd: 30, spe: 82 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Amorphous', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['drakloak'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 885,
      species: 'dreepy',
      types: [TypesEnum.Dragon, TypesEnum.Ghost],
      weightkg: 2
    }
  ],
  [
    'drakloak',
    {
      abilities: {
        first: 'clearbody',
        second: 'infiltrator',
        hidden: 'cursedbody'
      },
      baseStats: { hp: 68, atk: 80, def: 50, spa: 60, spd: 50, spe: 102 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Amorphous', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 50,
      evos: ['dragapult'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 886,
      prevo: 'dreepy',
      species: 'drakloak',
      types: [TypesEnum.Dragon, TypesEnum.Ghost],
      weightkg: 11
    }
  ],
  [
    'dragapult',
    {
      abilities: {
        first: 'clearbody',
        second: 'infiltrator',
        hidden: 'cursedbody'
      },
      baseStats: { hp: 88, atk: 120, def: 75, spa: 100, spd: 75, spe: 142 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Amorphous', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      evoLevel: 60,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 3,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 887,
      prevo: 'drakloak',
      species: 'dragapult',
      types: [TypesEnum.Dragon, TypesEnum.Ghost],
      weightkg: 50
    }
  ],
  [
    'zacian',
    {
      abilities: { first: 'intrepidsword' },
      baseStats: { hp: 92, atk: 120, def: 115, spa: 80, spd: 115, spe: 138 },
      catchRate: { base: 10, percentageWithOrdinaryPokeballAtFullHealth: '3.9%' },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.8,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 888,
      otherFormes: ['zaciancrowned'],
      species: 'zacian',
      types: [TypesEnum.Fairy],
      weightkg: 110,
      legendary: true
    }
  ],
  [
    'zaciancrowned',
    {
      abilities: { first: 'intrepidsword' },
      baseSpecies: 'zacian',
      baseStats: { hp: 92, atk: 150, def: 115, spa: 80, spd: 115, spe: 148 },
      catchRate: { base: 10, percentageWithOrdinaryPokeballAtFullHealth: '3.9%' },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      forme: 'Crowned',
      formeLetter: 'C',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.8,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 888,
      otherFormes: ['zacian'],
      species: 'zacian-crowned',
      types: [TypesEnum.Fairy, TypesEnum.Steel],
      weightkg: 355,
      aliases: ['zacianc', 'zanianc'],
      legendary: true
    }
  ],
  [
    'zamazenta',
    {
      abilities: { first: 'dauntlessshield' },
      baseStats: { hp: 92, atk: 120, def: 115, spa: 80, spd: 115, spe: 138 },
      catchRate: { base: 10, percentageWithOrdinaryPokeballAtFullHealth: '3.9%' },
      color: 'Red',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.9,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 889,
      otherFormes: ['zamazentacrowned'],
      species: 'zamazenta',
      types: [TypesEnum.Fighting],
      weightkg: 210,
      legendary: true
    }
  ],
  [
    'zamazentacrowned',
    {
      abilities: { first: 'dauntlessshield' },
      baseSpecies: 'zamazenta',
      baseStats: { hp: 92, atk: 120, def: 140, spa: 80, spd: 140, spe: 128 },
      catchRate: { base: 10, percentageWithOrdinaryPokeballAtFullHealth: '3.9%' },
      color: 'Red',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      forme: 'Crowned',
      formeLetter: 'C',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.9,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 889,
      otherFormes: ['zamazenta'],
      species: 'zamazenta-crowned',
      types: [TypesEnum.Fighting, TypesEnum.Steel],
      weightkg: 785,
      aliases: ['zamazentac'],
      legendary: true
    }
  ],
  [
    'eternatus',
    {
      abilities: { first: 'pressure' },
      baseStats: { hp: 140, atk: 85, def: 95, spa: 145, spd: 95, spe: 130 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 20,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 890,
      otherFormes: ['eternatuseternamax'],
      species: 'eternatus',
      types: [TypesEnum.Poison, TypesEnum.Dragon],
      weightkg: 950,
      legendary: true
    }
  ],
  [
    'eternatuseternamax',
    {
      abilities: { first: 'pressure' },
      baseSpecies: 'eternatus',
      baseStats: { hp: 255, atk: 115, def: 250, spa: 125, spd: 250, spe: 130 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Eternamax',
      formeLetter: 'E',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 100,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 890,
      otherFormes: ['eternatus'],
      species: 'eternatus-eternamax',
      types: [TypesEnum.Poison, TypesEnum.Dragon],
      weightkg: 950,
      aliases: ['entermax enternatus', 'eternamax', 'gigantamax enternatus'],
      legendary: true
    }
  ],
  [
    'kubfu',
    {
      abilities: { first: 'innerfocus' },
      baseStats: { hp: 60, atk: 90, def: 60, spa: 53, spd: 50, spe: 72 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['urshifu', 'urshifurapidstrike'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.6,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 891,
      species: 'kubfu',
      types: [TypesEnum.Fighting],
      weightkg: 12,
      legendary: true
    }
  ],
  [
    'urshifu',
    {
      abilities: { first: 'unseenfist' },
      baseStats: { hp: 100, atk: 130, def: 100, spa: 63, spd: 60, spe: 97 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Defeat the Single Strike Tower',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.9,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 892,
      otherFormes: ['urshifurapidstrike', 'urshifugmax', 'urshifurapidstrikegmax'],
      prevo: 'kubfu',
      species: 'urshifu',
      types: [TypesEnum.Fighting, TypesEnum.Dark],
      weightkg: 105,
      aliases: ['urshifusingle', 'urshifusinglestrike', 'urshifuss'],
      legendary: true
    }
  ],
  [
    'urshifurapidstrike',
    {
      abilities: { first: 'unseenfist' },
      baseSpecies: 'urshifu',
      baseStats: { hp: 100, atk: 130, def: 100, spa: 63, spd: 60, spe: 97 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Defeat the Rapid Strike Tower',
      forme: 'Rapid-Strike',
      formeLetter: 'RS',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 29,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 892,
      otherFormes: ['urshifu', 'urshifugmax', 'urshifurapidstrikegmax'],
      prevo: 'kubfu',
      species: 'urshifu-rapid-strike',
      types: [TypesEnum.Fighting, TypesEnum.Water],
      weightkg: 105,
      aliases: ['urshifurapid', 'urshifurs', 'watershifu'],
      legendary: true
    }
  ],
  [
    'urshifugmax',
    {
      abilities: { first: 'unseenfist' },
      baseSpecies: 'urshifu',
      baseStats: { hp: 100, atk: 130, def: 100, spa: 63, spd: 60, spe: 97 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 29,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 892,
      otherFormes: ['urshifu', 'urshifurapidstrike', 'urshifurapidstrikegmax'],
      species: 'urshifu-gmax',
      types: [TypesEnum.Fighting, TypesEnum.Dark],
      weightkg: 105,
      legendary: true
    }
  ],
  [
    'urshifurapidstrikegmax',
    {
      abilities: { first: 'unseenfist' },
      baseSpecies: 'urshifurapidstrike',
      baseStats: { hp: 100, atk: 130, def: 100, spa: 63, spd: 60, spe: 97 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Rapid-Strike-Gmax',
      formeLetter: 'RSG',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 26,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 892,
      otherFormes: ['urshifu', 'urshifugmax', 'urshifurapidstrike'],
      species: 'urshifu-rapid-strike-gmax',
      types: [TypesEnum.Fighting, TypesEnum.Water],
      weightkg: 0,
      legendary: true
    }
  ],
  [
    'zarude',
    {
      abilities: { first: 'leafguard' },
      baseStats: { hp: 105, atk: 120, def: 105, spa: 70, spd: 95, spe: 105 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.8,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 893,
      otherFormes: ['zarudedada'],
      species: 'zarude',
      types: [TypesEnum.Dark, TypesEnum.Grass],
      weightkg: 70,
      mythical: true
    }
  ],
  [
    'zarudedada',
    {
      abilities: { first: 'leafguard' },
      baseSpecies: 'zarude',
      baseStats: { hp: 105, atk: 120, def: 105, spa: 70, spd: 95, spe: 105 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Dada',
      formeLetter: 'D',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.8,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 893,
      otherFormes: ['zarude'],
      species: 'zarude-dada',
      types: [TypesEnum.Dark, TypesEnum.Grass],
      weightkg: 70,
      mythical: true
    }
  ],
  [
    'regieleki',
    {
      abilities: { first: 'transistor' },
      baseStats: { hp: 80, atk: 100, def: 50, spa: 100, spd: 50, spe: 200 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 894,
      species: 'regieleki',
      types: [TypesEnum.Electric],
      weightkg: 145,
      legendary: true
    }
  ],
  [
    'regidrago',
    {
      abilities: { first: 'dragonsmaw' },
      baseStats: { hp: 200, atk: 100, def: 50, spa: 100, spd: 50, spe: 80 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.1,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 895,
      species: 'regidrago',
      types: [TypesEnum.Dragon],
      weightkg: 200,
      legendary: true
    }
  ],
  [
    'glastrier',
    {
      abilities: { first: 'chillingneigh' },
      baseStats: { hp: 100, atk: 145, def: 130, spa: 65, spd: 110, spe: 30 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'White',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 896,
      species: 'glastrier',
      types: [TypesEnum.Ice],
      weightkg: 800,
      legendary: true
    }
  ],
  [
    'spectrier',
    {
      abilities: { first: 'grimneigh' },
      baseStats: { hp: 100, atk: 65, def: 60, spa: 145, spd: 80, spe: 130 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Black',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 897,
      species: 'spectrier',
      types: [TypesEnum.Ghost],
      weightkg: 44.5,
      legendary: true
    }
  ],
  [
    'calyrex',
    {
      abilities: { first: 'unnerve' },
      baseStats: { hp: 100, atk: 80, def: 80, spa: 80, spd: 80, spe: 80 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.1,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 898,
      otherFormes: ['calyrexice', 'calyrexshadow'],
      species: 'calyrex',
      types: [TypesEnum.Psychic, TypesEnum.Grass],
      weightkg: 7.7,
      legendary: true
    }
  ],
  [
    'calyrexice',
    {
      abilities: { first: 'asoneglastrier' },
      baseSpecies: 'calyrex',
      baseStats: { hp: 100, atk: 165, def: 150, spa: 85, spd: 130, spe: 50 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'White',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Ice',
      formeLetter: 'CI',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.4,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 898,
      otherFormes: ['calyrex', 'calyrexshadow'],
      species: 'calyrex-ice',
      types: [TypesEnum.Psychic, TypesEnum.Ice],
      weightkg: 809.1,
      aliases: ['calyrexice', 'calyrexir'],
      legendary: true
    }
  ],
  [
    'calyrexshadow',
    {
      abilities: { first: 'asonespectrier' },
      baseSpecies: 'calyrex',
      baseStats: { hp: 100, atk: 85, def: 80, spa: 165, spd: 100, spe: 150 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Black',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      forme: 'Shadow',
      formeLetter: 'CS',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.4,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 898,
      otherFormes: ['calyrex', 'calyrexice'],
      species: 'calyrex-shadow',
      types: [TypesEnum.Psychic, TypesEnum.Ghost],
      weightkg: 53.6,
      aliases: ['calyrexshadow', 'calyrexsr'],
      legendary: true
    }
  ],
  [
    'wyrdeer',
    {
      abilities: { first: 'intimidate', second: 'frisk', hidden: 'sapsipper' },
      baseStats: { hp: 103, atk: 105, def: 72, spa: 105, spd: 75, spe: 65 },
      color: 'White',
      eggGroups: ['Field'],
      evoLevel: 'use Agile style Psyshield Bash 20 times',
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.8,
      isEggObtainable: false,
      num: 899,
      prevo: 'stantler',
      species: 'wyrdeer',
      types: [TypesEnum.Normal, TypesEnum.Psychic],
      weightkg: 95.1
    }
  ],
  [
    'kleavor',
    {
      abilities: { first: 'swarm', second: 'sheerforce', hidden: 'sharpness' },
      baseStats: { hp: 70, atk: 135, def: 95, spa: 45, spd: 70, spe: 85 },
      color: 'Brown',
      eggGroups: ['Bug'],
      evoLevel: 'use Black Augurite',
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.8,
      isEggObtainable: false,
      num: 900,
      prevo: 'scyther',
      species: 'kleavor',
      types: [TypesEnum.Bug, TypesEnum.Rock],
      weightkg: 89
    }
  ],
  [
    'ursaluna',
    {
      abilities: { first: 'guts', second: 'bulletproof', hidden: 'unnerve' },
      baseStats: { hp: 130, atk: 140, def: 105, spa: 45, spd: 80, spe: 50 },
      color: 'Brown',
      eggGroups: ['Field'],
      evoLevel: "expose to Peat Block when there's a full moon",
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.4,
      isEggObtainable: false,
      num: 901,
      otherFormes: ['ursalunabloodmoon'],
      prevo: 'ursaring',
      species: 'ursaluna',
      types: [TypesEnum.Ground, TypesEnum.Normal],
      weightkg: 290
    }
  ],
  [
    'ursalunabloodmoon',
    {
      abilities: { first: 'mindseye' },
      baseSpecies: 'ursaluna',
      baseStats: { hp: 113, atk: 70, def: 120, spa: 135, spd: 65, spe: 52 },
      color: 'Brown',
      eggGroups: ['Field'],
      forme: 'Bloodmoon',
      formeLetter: 'B',
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      genderRatio: { male: '100%', female: '0%' },
      heightm: 2.7,
      isEggObtainable: false,
      num: 901,
      otherFormes: ['ursaluna'],
      species: 'ursaluna-bloodmoon',
      types: [TypesEnum.Ground, TypesEnum.Normal],
      weightkg: 333
    }
  ],
  [
    'basculegion',
    {
      abilities: {
        first: 'swiftswim',
        second: 'adaptability',
        hidden: 'moldbreaker'
      },
      baseStats: { hp: 120, atk: 112, def: 65, spa: 80, spd: 75, spe: 78 },
      color: 'Green',
      eggGroups: ['Water 2'],
      evoLevel: 'Receive 294+ recoil without fainting',
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '100%', female: '0%' },
      heightm: 3,
      isEggObtainable: false,
      num: 902,
      otherFormes: ['basculegionf'],
      prevo: 'basculinwhitestriped',
      species: 'basculegion',
      types: [TypesEnum.Water, TypesEnum.Ghost],
      weightkg: 110
    }
  ],
  [
    'basculegionf',
    {
      abilities: {
        first: 'swiftswim',
        second: 'adaptability',
        hidden: 'moldbreaker'
      },
      baseSpecies: 'basculegion',
      baseStats: { hp: 120, atk: 92, def: 65, spa: 100, spd: 75, spe: 78 },
      color: 'Green',
      eggGroups: ['Water 2'],
      evoLevel: 'Receive 294+ recoil without fainting',
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Female',
      formeLetter: 'F',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 3,
      isEggObtainable: false,
      num: 902,
      otherFormes: ['basculegion'],
      prevo: 'basculinwhitestriped',
      species: 'basculegion-f',
      types: [TypesEnum.Water, TypesEnum.Ghost],
      weightkg: 110
    }
  ],
  [
    'sneasler',
    {
      abilities: { first: 'pressure', second: 'unburden', hidden: 'poisontouch' },
      baseStats: { hp: 80, atk: 130, def: 60, spa: 40, spd: 80, spe: 120 },
      color: 'Purple',
      eggGroups: ['Field'],
      evoLevel: 'use Razor Claw during daytime',
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 1 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: false,
      num: 903,
      prevo: 'sneaselhisui',
      species: 'sneasler',
      types: [TypesEnum.Fighting, TypesEnum.Poison],
      weightkg: 43
    }
  ],
  [
    'overqwil',
    {
      abilities: {
        first: 'poisonpoint',
        second: 'swiftswim',
        hidden: 'intimidate'
      },
      baseStats: { hp: 85, atk: 115, def: 95, spa: 65, spd: 65, spe: 85 },
      color: 'Gray',
      eggGroups: ['Water 2'],
      evoLevel: 'use Strong style Barb Barrage 20 times',
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.5,
      isEggObtainable: false,
      num: 904,
      prevo: 'qwilfishhisui',
      species: 'overqwil',
      types: [TypesEnum.Dark, TypesEnum.Poison],
      weightkg: 60.5
    }
  ],
  [
    'enamorus',
    {
      abilities: { first: 'cutecharm', hidden: 'contrary' },
      baseStats: { hp: 74, atk: 115, def: 70, spa: 135, spd: 80, spe: 106 },
      color: 'Pink',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '100%' },
      heightm: 1.6,
      isEggObtainable: false,
      num: 905,
      otherFormes: ['enamorustherian'],
      species: 'enamorus',
      types: [TypesEnum.Fairy, TypesEnum.Flying],
      weightkg: 48,
      legendary: true
    }
  ],
  [
    'enamorustherian',
    {
      abilities: { first: 'overcoat' },
      baseStats: { hp: 74, atk: 115, def: 110, spa: 135, spd: 100, spe: 46 },
      color: 'Pink',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Therian',
      formeLetter: 'T',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 1.6,
      isEggObtainable: false,
      num: 905,
      otherFormes: ['enamorus'],
      species: 'enamorus-therian',
      types: [TypesEnum.Fairy, TypesEnum.Flying],
      weightkg: 48,
      legendary: true
    }
  ]
];

for (const [key, value] of entries) {
  value.key = key;

  Pokedex.set(key, value);
}
