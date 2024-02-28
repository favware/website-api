import type { PokemonTypes } from '#assets/pokemon-source';
import { Pokedex } from '#dexdata/pokedex';
import { TypesEnum } from '#utils/pokemonTypes';

const entries: [string, PokemonTypes.DexEntry][] = [
  [
    'victini',
    {
      abilities: { first: 'victorystar' },
      baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.4,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 494,
      species: 'victini',
      types: [TypesEnum.Psychic, TypesEnum.Fire],
      weightkg: 4,
      aliases: ['bikuteini', 'kyra'],
      mythical: true
    }
  ],
  [
    'snivy',
    {
      abilities: { first: 'overgrow', hidden: 'contrary' },
      baseStats: { hp: 45, atk: 45, def: 55, spa: 45, spd: 55, spe: 63 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Field', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['servine'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 495,
      species: 'snivy',
      types: [TypesEnum.Grass],
      weightkg: 8.1,
      aliases: ['tsutaaja']
    }
  ],
  [
    'servine',
    {
      abilities: { first: 'overgrow', hidden: 'contrary' },
      baseStats: { hp: 60, atk: 60, def: 75, spa: 60, spd: 75, spe: 83 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Field', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 17,
      evos: ['serperior'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 496,
      prevo: 'snivy',
      species: 'servine',
      types: [TypesEnum.Grass],
      weightkg: 16,
      aliases: ['janobii']
    }
  ],
  [
    'serperior',
    {
      abilities: { first: 'overgrow', hidden: 'contrary' },
      baseStats: { hp: 75, atk: 75, def: 95, spa: 75, spd: 95, spe: 113 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Field', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      evoLevel: 36,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 3.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 497,
      prevo: 'servine',
      species: 'serperior',
      types: [TypesEnum.Grass],
      weightkg: 63,
      aliases: ['jarooda', 'serp']
    }
  ],
  [
    'tepig',
    {
      abilities: { first: 'blaze', hidden: 'thickfat' },
      baseStats: { hp: 65, atk: 63, def: 45, spa: 45, spd: 45, spe: 45 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Field'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['pignite'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 498,
      species: 'tepig',
      types: [TypesEnum.Fire],
      weightkg: 9.9,
      aliases: ['pokabu']
    }
  ],
  [
    'pignite',
    {
      abilities: { first: 'blaze', hidden: 'thickfat' },
      baseStats: { hp: 90, atk: 93, def: 55, spa: 70, spd: 55, spe: 55 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 17,
      evos: ['emboar'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 499,
      prevo: 'tepig',
      species: 'pignite',
      types: [TypesEnum.Fire, TypesEnum.Fighting],
      weightkg: 55.5,
      aliases: ['chaobuu']
    }
  ],
  [
    'emboar',
    {
      abilities: { first: 'blaze', hidden: 'reckless' },
      baseStats: { hp: 110, atk: 123, def: 65, spa: 100, spd: 65, spe: 65 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 36,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 500,
      prevo: 'pignite',
      species: 'emboar',
      types: [TypesEnum.Fire, TypesEnum.Fighting],
      weightkg: 150,
      aliases: ['enbuoo']
    }
  ],
  [
    'oshawott',
    {
      abilities: { first: 'torrent', hidden: 'shellarmor' },
      baseStats: { hp: 55, atk: 55, def: 45, spa: 63, spd: 45, spe: 45 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['dewott'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 501,
      species: 'oshawott',
      types: [TypesEnum.Water],
      weightkg: 5.9,
      aliases: ['mijumaru']
    }
  ],
  [
    'dewott',
    {
      abilities: { first: 'torrent', hidden: 'shellarmor' },
      baseStats: { hp: 75, atk: 75, def: 60, spa: 83, spd: 60, spe: 60 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 17,
      evos: ['samurott', 'samurotthisui'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 502,
      prevo: 'oshawott',
      species: 'dewott',
      types: [TypesEnum.Water],
      weightkg: 24.5,
      aliases: ['futachimaru']
    }
  ],
  [
    'samurott',
    {
      abilities: { first: 'torrent', hidden: 'shellarmor' },
      baseStats: { hp: 95, atk: 100, def: 85, spa: 108, spd: 70, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: 36,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 503,
      otherFormes: ['samurotthisui'],
      prevo: 'dewott',
      species: 'samurott',
      types: [TypesEnum.Water],
      weightkg: 94.6,
      aliases: ['daikenki']
    }
  ],
  [
    'samurotthisui',
    {
      abilities: { first: 'torrent', hidden: 'sharpness' },
      baseSpecies: 'samurott',
      baseStats: { hp: 90, atk: 108, def: 80, spa: 100, spd: 65, spe: 85 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: 36,
      forme: 'Hisui',
      formeLetter: 'H',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 503,
      otherFormes: ['samurott'],
      prevo: 'dewott',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/samurott-hisui.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/samurott-hisui.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/samurott-hisui.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/samurott-hisui.png',
      species: 'samurott-hisui',
      types: [TypesEnum.Water],
      weightkg: 58.2,
      aliases: ['hisuisamurott', 'samurotth']
    }
  ],
  [
    'patrat',
    {
      abilities: { first: 'runaway', second: 'keeneye', hidden: 'analytic' },
      baseStats: { hp: 45, atk: 55, def: 39, spa: 35, spd: 39, spe: 42 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['watchog'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 504,
      species: 'patrat',
      types: [TypesEnum.Normal],
      weightkg: 11.6,
      aliases: ['minezumi']
    }
  ],
  [
    'watchog',
    {
      abilities: { first: 'illuminate', second: 'keeneye', hidden: 'analytic' },
      baseStats: { hp: 60, atk: 85, def: 69, spa: 60, spd: 69, spe: 77 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 20,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 505,
      prevo: 'patrat',
      species: 'watchog',
      types: [TypesEnum.Normal],
      weightkg: 27,
      aliases: ['miruhoggu']
    }
  ],
  [
    'lillipup',
    {
      abilities: { first: 'vitalspirit', second: 'pickup', hidden: 'runaway' },
      baseStats: { hp: 45, atk: 60, def: 45, spa: 25, spd: 45, spe: 55 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['herdier'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 506,
      species: 'lillipup',
      types: [TypesEnum.Normal],
      weightkg: 4.1,
      aliases: ['yooterii']
    }
  ],
  [
    'herdier',
    {
      abilities: { first: 'intimidate', second: 'sandrush', hidden: 'scrappy' },
      baseStats: { hp: 65, atk: 80, def: 65, spa: 35, spd: 65, spe: 60 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 16,
      evos: ['stoutland'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 507,
      prevo: 'lillipup',
      species: 'herdier',
      types: [TypesEnum.Normal],
      weightkg: 14.7,
      aliases: ['haaderia']
    }
  ],
  [
    'stoutland',
    {
      abilities: { first: 'intimidate', second: 'sandrush', hidden: 'scrappy' },
      baseStats: { hp: 85, atk: 110, def: 90, spa: 45, spd: 90, spe: 80 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 32,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 508,
      prevo: 'herdier',
      species: 'stoutland',
      types: [TypesEnum.Normal],
      weightkg: 61,
      aliases: ['muurando']
    }
  ],
  [
    'purrloin',
    {
      abilities: { first: 'limber', second: 'unburden', hidden: 'prankster' },
      baseStats: { hp: 41, atk: 50, def: 37, spa: 50, spd: 37, spe: 66 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Purple',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['liepard'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 509,
      species: 'purrloin',
      types: [TypesEnum.Dark],
      weightkg: 10.1,
      aliases: ['choroneko']
    }
  ],
  [
    'liepard',
    {
      abilities: { first: 'limber', second: 'unburden', hidden: 'prankster' },
      baseStats: { hp: 64, atk: 88, def: 50, spa: 88, spd: 50, spe: 106 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Purple',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 20,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 510,
      prevo: 'purrloin',
      species: 'liepard',
      types: [TypesEnum.Dark],
      weightkg: 37.5,
      aliases: ['reparudasu']
    }
  ],
  [
    'pansage',
    {
      abilities: { first: 'gluttony', hidden: 'overgrow' },
      baseStats: { hp: 50, atk: 53, def: 48, spa: 53, spd: 48, spe: 64 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Green',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['simisage'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 511,
      species: 'pansage',
      types: [TypesEnum.Grass],
      weightkg: 10.5,
      aliases: ['yanappu']
    }
  ],
  [
    'simisage',
    {
      abilities: { first: 'gluttony', hidden: 'overgrow' },
      baseStats: { hp: 75, atk: 98, def: 63, spa: 98, spd: 63, spe: 101 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Green',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 'use Leaf Stone',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 512,
      prevo: 'pansage',
      species: 'simisage',
      types: [TypesEnum.Grass],
      weightkg: 30.5,
      aliases: ['yanakkii']
    }
  ],
  [
    'pansear',
    {
      abilities: { first: 'gluttony', hidden: 'blaze' },
      baseStats: { hp: 50, atk: 53, def: 48, spa: 53, spd: 48, spe: 64 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Red',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['simisear'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 513,
      species: 'pansear',
      types: [TypesEnum.Fire],
      weightkg: 11,
      aliases: ['baoppu']
    }
  ],
  [
    'simisear',
    {
      abilities: { first: 'gluttony', hidden: 'blaze' },
      baseStats: { hp: 75, atk: 98, def: 63, spa: 98, spd: 63, spe: 101 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Red',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 'use Fire Stone',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 514,
      prevo: 'pansear',
      species: 'simisear',
      types: [TypesEnum.Fire],
      weightkg: 28,
      aliases: ['baokkii']
    }
  ],
  [
    'panpour',
    {
      abilities: { first: 'gluttony', hidden: 'torrent' },
      baseStats: { hp: 50, atk: 53, def: 48, spa: 53, spd: 48, spe: 64 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Blue',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['simipour'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 515,
      species: 'panpour',
      types: [TypesEnum.Water],
      weightkg: 13.5,
      aliases: ['hiyappu']
    }
  ],
  [
    'simipour',
    {
      abilities: { first: 'gluttony', hidden: 'torrent' },
      baseStats: { hp: 75, atk: 98, def: 63, spa: 98, spd: 63, spe: 101 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Blue',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 'use Water Stone',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 516,
      prevo: 'panpour',
      species: 'simipour',
      types: [TypesEnum.Water],
      weightkg: 29,
      aliases: ['hiyakkii']
    }
  ],
  [
    'munna',
    {
      abilities: { first: 'forewarn', second: 'synchronize', hidden: 'telepathy' },
      baseStats: { hp: 76, atk: 25, def: 45, spa: 67, spd: 55, spe: 24 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Pink',
      eggGroups: ['Field'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['musharna'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 2570,
      num: 517,
      species: 'munna',
      types: [TypesEnum.Psychic],
      weightkg: 23.3
    }
  ],
  [
    'musharna',
    {
      abilities: { first: 'forewarn', second: 'synchronize', hidden: 'telepathy' },
      baseStats: { hp: 116, atk: 55, def: 85, spa: 107, spd: 95, spe: 29 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Pink',
      eggGroups: ['Field'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'use Moon Stone',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 2570,
      num: 518,
      prevo: 'munna',
      species: 'musharna',
      types: [TypesEnum.Psychic],
      weightkg: 60.5,
      aliases: ['mushaana']
    }
  ],
  [
    'pidove',
    {
      abilities: { first: 'bigpecks', second: 'superluck', hidden: 'rivalry' },
      baseStats: { hp: 50, atk: 55, def: 50, spa: 36, spd: 30, spe: 43 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Gray',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['tranquill'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 519,
      species: 'pidove',
      types: [TypesEnum.Normal, TypesEnum.Flying],
      weightkg: 2.1,
      aliases: ['mamepato']
    }
  ],
  [
    'tranquill',
    {
      abilities: { first: 'bigpecks', second: 'superluck', hidden: 'rivalry' },
      baseStats: { hp: 62, atk: 77, def: 62, spa: 50, spd: 42, spe: 65 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Gray',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 21,
      evos: ['unfezant'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 520,
      prevo: 'pidove',
      species: 'tranquill',
      types: [TypesEnum.Normal, TypesEnum.Flying],
      weightkg: 15,
      aliases: ['hatooboo']
    }
  ],
  [
    'unfezant',
    {
      abilities: { first: 'bigpecks', second: 'superluck', hidden: 'rivalry' },
      baseStats: { hp: 80, atk: 115, def: 80, spa: 65, spd: 55, spe: 93 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Gray',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 32,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 521,
      prevo: 'tranquill',
      species: 'unfezant',
      types: [TypesEnum.Normal, TypesEnum.Flying],
      weightkg: 29,
      aliases: ['kenhorou']
    }
  ],
  [
    'blitzle',
    {
      abilities: {
        first: 'lightningrod',
        second: 'motordrive',
        hidden: 'sapsipper'
      },
      baseStats: { hp: 45, atk: 60, def: 32, spa: 50, spd: 32, spe: 76 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Black',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['zebstrika'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 522,
      species: 'blitzle',
      types: [TypesEnum.Electric],
      weightkg: 29.8,
      aliases: ['shimama']
    }
  ],
  [
    'zebstrika',
    {
      abilities: {
        first: 'lightningrod',
        second: 'motordrive',
        hidden: 'sapsipper'
      },
      baseStats: { hp: 75, atk: 100, def: 63, spa: 80, spd: 63, spe: 116 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Black',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 27,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 523,
      prevo: 'blitzle',
      species: 'zebstrika',
      types: [TypesEnum.Electric],
      weightkg: 79.5,
      aliases: ['zeburaika']
    }
  ],
  [
    'roggenrola',
    {
      abilities: { first: 'sturdy', second: 'weakarmor', hidden: 'sandforce' },
      baseStats: { hp: 55, atk: 75, def: 85, spa: 25, spd: 25, spe: 15 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Blue',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['boldore'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 524,
      species: 'roggenrola',
      types: [TypesEnum.Rock],
      weightkg: 18,
      aliases: ['dangoro']
    }
  ],
  [
    'boldore',
    {
      abilities: { first: 'sturdy', second: 'weakarmor', hidden: 'sandforce' },
      baseStats: { hp: 70, atk: 105, def: 105, spa: 50, spd: 40, spe: 20 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Blue',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 1, def: 1, spa: 0, spd: 0, spe: 0 },
      evoLevel: 25,
      evos: ['gigalith'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 525,
      prevo: 'roggenrola',
      species: 'boldore',
      types: [TypesEnum.Rock],
      weightkg: 102,
      aliases: ['gantoru']
    }
  ],
  [
    'gigalith',
    {
      abilities: { first: 'sturdy', second: 'sandstream', hidden: 'sandforce' },
      baseStats: { hp: 85, atk: 135, def: 130, spa: 60, spd: 80, spe: 25 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Trade',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 526,
      prevo: 'boldore',
      species: 'gigalith',
      types: [TypesEnum.Rock],
      weightkg: 260,
      aliases: ['gigaiasu']
    }
  ],
  [
    'woobat',
    {
      abilities: { first: 'unaware', second: 'klutz', hidden: 'simple' },
      baseStats: { hp: 65, atk: 45, def: 43, spa: 55, spd: 43, spe: 72 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Blue',
      eggGroups: ['Flying', 'Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['swoobat'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 527,
      species: 'woobat',
      types: [TypesEnum.Psychic, TypesEnum.Flying],
      weightkg: 2.1,
      aliases: ['koromori']
    }
  ],
  [
    'swoobat',
    {
      abilities: { first: 'unaware', second: 'klutz', hidden: 'simple' },
      baseStats: { hp: 67, atk: 57, def: 55, spa: 77, spd: 55, spe: 114 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Flying', 'Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 'Level up with happiness of at least 220',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 528,
      prevo: 'woobat',
      species: 'swoobat',
      types: [TypesEnum.Psychic, TypesEnum.Flying],
      weightkg: 10.5,
      aliases: ['kokoromori']
    }
  ],
  [
    'drilbur',
    {
      abilities: { first: 'sandrush', second: 'sandforce', hidden: 'moldbreaker' },
      baseStats: { hp: 60, atk: 85, def: 40, spa: 30, spd: 45, spe: 68 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['excadrill'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 529,
      species: 'drilbur',
      types: [TypesEnum.Ground],
      weightkg: 8.5,
      aliases: ['moguryuu']
    }
  ],
  [
    'excadrill',
    {
      abilities: { first: 'sandrush', second: 'sandforce', hidden: 'moldbreaker' },
      baseStats: { hp: 110, atk: 135, def: 60, spa: 50, spd: 65, spe: 88 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 31,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 530,
      prevo: 'drilbur',
      species: 'excadrill',
      types: [TypesEnum.Ground, TypesEnum.Steel],
      weightkg: 40.4,
      aliases: ['doryuuzu', 'drill', 'driller']
    }
  ],
  [
    'audino',
    {
      abilities: { first: 'healer', second: 'regenerator', hidden: 'klutz' },
      baseStats: { hp: 103, atk: 60, def: 86, spa: 60, spd: 86, spe: 50 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Pink',
      eggGroups: ['Fairy'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      num: 531,
      otherFormes: ['audinomega'],
      species: 'audino',
      types: [TypesEnum.Normal],
      weightkg: 31,
      aliases: ['tabunne']
    }
  ],
  [
    'audinomega',
    {
      abilities: { first: 'healer' },
      baseSpecies: 'audino',
      baseStats: { hp: 103, atk: 60, def: 126, spa: 80, spd: 126, spe: 50 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'White',
      eggGroups: ['Fairy'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      num: 531,
      otherFormes: ['audino'],
      species: 'audino-mega',
      types: [TypesEnum.Normal, TypesEnum.Fairy],
      weightkg: 32
    }
  ],
  [
    'timburr',
    {
      abilities: { first: 'guts', second: 'sheerforce', hidden: 'ironfist' },
      baseStats: { hp: 75, atk: 80, def: 55, spa: 25, spd: 35, spe: 35 },
      catchRate: {
        base: 180,
        percentageWithOrdinaryPokeballAtFullHealth: '33.8%'
      },
      color: 'Gray',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['gurdurr'],
      genderRatio: { male: '75%', female: '25%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 532,
      species: 'timburr',
      types: [TypesEnum.Fighting],
      weightkg: 12.5,
      aliases: ['dokkoraa']
    }
  ],
  [
    'gurdurr',
    {
      abilities: { first: 'guts', second: 'sheerforce', hidden: 'ironfist' },
      baseStats: { hp: 85, atk: 105, def: 85, spa: 40, spd: 50, spe: 40 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Gray',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 25,
      evos: ['conkeldurr'],
      genderRatio: { male: '75%', female: '25%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 533,
      prevo: 'timburr',
      species: 'gurdurr',
      types: [TypesEnum.Fighting],
      weightkg: 40,
      aliases: ['dotekkotsu']
    }
  ],
  [
    'conkeldurr',
    {
      abilities: { first: 'guts', second: 'sheerforce', hidden: 'ironfist' },
      baseStats: { hp: 105, atk: 140, def: 95, spa: 55, spd: 65, spe: 45 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Trade',
      genderRatio: { male: '75%', female: '25%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 534,
      prevo: 'gurdurr',
      species: 'conkeldurr',
      types: [TypesEnum.Fighting],
      weightkg: 87,
      aliases: ['conk', 'roobushin']
    }
  ],
  [
    'tympole',
    {
      abilities: {
        first: 'swiftswim',
        second: 'hydration',
        hidden: 'waterabsorb'
      },
      baseStats: { hp: 50, atk: 50, def: 40, spa: 50, spd: 40, spe: 64 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Blue',
      eggGroups: ['Water 1'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['palpitoad'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 535,
      species: 'tympole',
      types: [TypesEnum.Water],
      weightkg: 4.5,
      aliases: ['otamaro']
    }
  ],
  [
    'palpitoad',
    {
      abilities: {
        first: 'swiftswim',
        second: 'hydration',
        hidden: 'waterabsorb'
      },
      baseStats: { hp: 75, atk: 65, def: 55, spa: 65, spd: 55, spe: 69 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Blue',
      eggGroups: ['Water 1'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 25,
      evos: ['seismitoad'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 536,
      prevo: 'tympole',
      species: 'palpitoad',
      types: [TypesEnum.Water, TypesEnum.Ground],
      weightkg: 17,
      aliases: ['gamagaru']
    }
  ],
  [
    'seismitoad',
    {
      abilities: {
        first: 'swiftswim',
        second: 'poisontouch',
        hidden: 'waterabsorb'
      },
      baseStats: { hp: 105, atk: 95, def: 75, spa: 85, spd: 75, spe: 74 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 36,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 537,
      prevo: 'palpitoad',
      species: 'seismitoad',
      types: [TypesEnum.Water, TypesEnum.Ground],
      weightkg: 62,
      aliases: ['gamageroge']
    }
  ],
  [
    'throh',
    {
      abilities: { first: 'guts', second: 'innerfocus', hidden: 'moldbreaker' },
      baseStats: { hp: 120, atk: 100, def: 85, spa: 30, spd: 85, spe: 45 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Human-Like'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '100%', female: '0%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 538,
      species: 'throh',
      types: [TypesEnum.Fighting],
      weightkg: 55.5,
      aliases: ['ernie', 'nageki']
    }
  ],
  [
    'sawk',
    {
      abilities: { first: 'sturdy', second: 'innerfocus', hidden: 'moldbreaker' },
      baseStats: { hp: 75, atk: 125, def: 75, spa: 30, spd: 75, spe: 85 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '100%', female: '0%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 539,
      species: 'sawk',
      types: [TypesEnum.Fighting],
      weightkg: 51,
      aliases: ['bert', 'dageki']
    }
  ],
  [
    'sewaddle',
    {
      abilities: { first: 'swarm', second: 'chlorophyll', hidden: 'overcoat' },
      baseStats: { hp: 45, atk: 53, def: 70, spa: 40, spd: 60, spe: 42 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Yellow',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['swadloon'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 540,
      species: 'sewaddle',
      types: [TypesEnum.Bug, TypesEnum.Grass],
      weightkg: 2.5,
      aliases: ['kurumiru']
    }
  ],
  [
    'swadloon',
    {
      abilities: { first: 'leafguard', second: 'chlorophyll', hidden: 'overcoat' },
      baseStats: { hp: 55, atk: 63, def: 90, spa: 50, spd: 80, spe: 42 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Green',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 20,
      evos: ['leavanny'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 541,
      prevo: 'sewaddle',
      species: 'swadloon',
      types: [TypesEnum.Bug, TypesEnum.Grass],
      weightkg: 7.3,
      aliases: ['kurumayu']
    }
  ],
  [
    'leavanny',
    {
      abilities: { first: 'swarm', second: 'chlorophyll', hidden: 'overcoat' },
      baseStats: { hp: 75, atk: 103, def: 80, spa: 70, spd: 80, spe: 92 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 21,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 542,
      prevo: 'swadloon',
      species: 'leavanny',
      types: [TypesEnum.Bug, TypesEnum.Grass],
      weightkg: 20.5,
      aliases: ['hahakomori']
    }
  ],
  [
    'venipede',
    {
      abilities: { first: 'poisonpoint', second: 'swarm', hidden: 'speedboost' },
      baseStats: { hp: 30, atk: 45, def: 59, spa: 30, spd: 39, spe: 57 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Red',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['whirlipede'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 543,
      species: 'venipede',
      types: [TypesEnum.Bug, TypesEnum.Poison],
      weightkg: 5.3,
      aliases: ['fushide']
    }
  ],
  [
    'whirlipede',
    {
      abilities: { first: 'poisonpoint', second: 'swarm', hidden: 'speedboost' },
      baseStats: { hp: 40, atk: 55, def: 99, spa: 40, spd: 79, spe: 47 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Gray',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 22,
      evos: ['scolipede'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 544,
      prevo: 'venipede',
      species: 'whirlipede',
      types: [TypesEnum.Bug, TypesEnum.Poison],
      weightkg: 58.5,
      aliases: ['hoiiga']
    }
  ],
  [
    'scolipede',
    {
      abilities: { first: 'poisonpoint', second: 'swarm', hidden: 'speedboost' },
      baseStats: { hp: 60, atk: 100, def: 89, spa: 55, spd: 69, spe: 112 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      evoLevel: 30,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 545,
      prevo: 'whirlipede',
      species: 'scolipede',
      types: [TypesEnum.Bug, TypesEnum.Poison],
      weightkg: 200.5,
      aliases: ['pendoraa', 'scoli']
    }
  ],
  [
    'cottonee',
    {
      abilities: {
        first: 'prankster',
        second: 'infiltrator',
        hidden: 'chlorophyll'
      },
      baseStats: { hp: 40, atk: 27, def: 60, spa: 37, spd: 50, spe: 66 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Green',
      eggGroups: ['Fairy', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['whimsicott'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 546,
      species: 'cottonee',
      types: [TypesEnum.Grass, TypesEnum.Fairy],
      weightkg: 0.6,
      aliases: ['monmen']
    }
  ],
  [
    'whimsicott',
    {
      abilities: {
        first: 'prankster',
        second: 'infiltrator',
        hidden: 'chlorophyll'
      },
      baseStats: { hp: 60, atk: 67, def: 85, spa: 77, spd: 75, spe: 116 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Green',
      eggGroups: ['Fairy', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 'use Sun Stone',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 547,
      prevo: 'cottonee',
      species: 'whimsicott',
      types: [TypesEnum.Grass, TypesEnum.Fairy],
      weightkg: 6.6,
      aliases: ['erufuun', 'whimsi']
    }
  ],
  [
    'petilil',
    {
      abilities: { first: 'chlorophyll', second: 'owntempo', hidden: 'leafguard' },
      baseStats: { hp: 45, atk: 35, def: 50, spa: 70, spd: 50, spe: 30 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Green',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['lilligant', 'lilliganthisui'],
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 548,
      species: 'petilil',
      types: [TypesEnum.Grass],
      weightkg: 6.6,
      aliases: ['churine']
    }
  ],
  [
    'lilligant',
    {
      abilities: { first: 'chlorophyll', second: 'owntempo', hidden: 'leafguard' },
      baseStats: { hp: 70, atk: 60, def: 75, spa: 110, spd: 75, spe: 90 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Green',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 'use Sun Stone',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 549,
      otherFormes: ['lilliganthisui'],
      prevo: 'petilil',
      species: 'lilligant',
      types: [TypesEnum.Grass],
      weightkg: 16.3,
      aliases: ['doredia']
    }
  ],
  [
    'lilliganthisui',
    {
      abilities: { first: 'chlorophyll', second: 'hustle', hidden: 'leafguard' },
      baseSpecies: 'lilligant',
      baseStats: { hp: 70, atk: 105, def: 75, spa: 50, spd: 75, spe: 105 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Green',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 'use Sun Stone',
      forme: 'Hisui',
      formeLetter: 'H',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 549,
      otherFormes: ['lilligant'],
      prevo: 'petilil',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/lilligant-hisui.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/lilligant-hisui.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/lilligant-hisui.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/lilligant-hisui.png',
      species: 'lilligant-hisui',
      types: [TypesEnum.Grass, TypesEnum.Fighting],
      weightkg: 19.2,
      aliases: ['hisuianlilligant', 'lilliganth']
    }
  ],
  [
    'basculin',
    {
      abilities: {
        first: 'reckless',
        second: 'adaptability',
        hidden: 'moldbreaker'
      },
      baseForme: 'Red-Striped',
      baseStats: { hp: 70, atk: 92, def: 65, spa: 80, spd: 55, spe: 98 },
      catchRate: { base: 25, percentageWithOrdinaryPokeballAtFullHealth: '7.7%' },
      color: 'Green',
      eggGroups: ['Water 2'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 10280,
      num: 550,
      otherFormes: ['basculinbluestriped', 'basculinwhitestriped'],
      species: 'basculin',
      types: [TypesEnum.Water],
      weightkg: 18,
      aliases: ['basculinr', 'basculinred', 'basculinredstripe', 'basculinredstriped', 'basurao']
    }
  ],
  [
    'basculinbluestriped',
    {
      abilities: {
        first: 'rockhead',
        second: 'adaptability',
        hidden: 'moldbreaker'
      },
      baseSpecies: 'basculin',
      baseStats: { hp: 70, atk: 92, def: 65, spa: 80, spd: 55, spe: 98 },
      catchRate: { base: 25, percentageWithOrdinaryPokeballAtFullHealth: '7.7%' },
      color: 'Green',
      eggGroups: ['Water 2'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      forme: 'Blue-Striped',
      formeLetter: 'B',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 10280,
      num: 550,
      otherFormes: ['basculin', 'basculinwhitestriped'],
      species: 'basculin-blue-striped',
      types: [TypesEnum.Water],
      weightkg: 18,
      aliases: ['basculinb', 'basculinblue', 'basculinbluestripe']
    }
  ],
  [
    'basculinwhitestriped',
    {
      abilities: {
        first: 'rattled',
        second: 'adaptability',
        hidden: 'moldbreaker'
      },
      baseSpecies: 'basculin',
      baseStats: { hp: 70, atk: 92, def: 65, spa: 80, spd: 55, spe: 98 },
      catchRate: { base: 25, percentageWithOrdinaryPokeballAtFullHealth: '7.7%' },
      color: 'Green',
      eggGroups: ['Water 2'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evos: ['basculegion', 'basculegionf'],
      forme: 'White-Striped',
      formeLetter: 'W',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 10280,
      num: 550,
      otherFormes: ['basculin', 'basculinbluestriped'],
      species: 'basculin-white-striped',
      types: [TypesEnum.Water],
      weightkg: 18,
      aliases: ['basculinw', 'basculinwhite', 'basculinwhitestripe', 'hisuianbasculin', 'basculinhisui', 'basculinh']
    }
  ],
  [
    'sandile',
    {
      abilities: { first: 'intimidate', second: 'moxie', hidden: 'angerpoint' },
      baseStats: { hp: 50, atk: 72, def: 35, spa: 35, spd: 35, spe: 65 },
      catchRate: {
        base: 180,
        percentageWithOrdinaryPokeballAtFullHealth: '33.8%'
      },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['krokorok'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 551,
      species: 'sandile',
      types: [TypesEnum.Ground, TypesEnum.Dark],
      weightkg: 15.2,
      aliases: ['meguroko']
    }
  ],
  [
    'krokorok',
    {
      abilities: { first: 'intimidate', second: 'moxie', hidden: 'angerpoint' },
      baseStats: { hp: 60, atk: 82, def: 45, spa: 45, spd: 45, spe: 74 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 29,
      evos: ['krookodile'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 552,
      prevo: 'sandile',
      species: 'krokorok',
      types: [TypesEnum.Ground, TypesEnum.Dark],
      weightkg: 33.4,
      aliases: ['warubiru']
    }
  ],
  [
    'krookodile',
    {
      abilities: { first: 'intimidate', second: 'moxie', hidden: 'angerpoint' },
      baseStats: { hp: 95, atk: 117, def: 80, spa: 65, spd: 70, spe: 92 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 40,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 553,
      prevo: 'krokorok',
      species: 'krookodile',
      types: [TypesEnum.Ground, TypesEnum.Dark],
      weightkg: 96.3,
      aliases: ['krook', 'warubiaru']
    }
  ],
  [
    'darumaka',
    {
      abilities: { first: 'hustle', hidden: 'innerfocus' },
      baseStats: { hp: 70, atk: 90, def: 45, spa: 15, spd: 45, spe: 50 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Red',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['darmanitan'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 554,
      otherFormes: ['darumakagalar'],
      species: 'darumaka',
      types: [TypesEnum.Fire],
      weightkg: 37.5,
      aliases: ['darumakka']
    }
  ],
  [
    'darumakagalar',
    {
      abilities: { first: 'hustle', hidden: 'innerfocus' },
      baseSpecies: 'darumaka',
      baseStats: { hp: 70, atk: 90, def: 45, spa: 15, spd: 45, spe: 50 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['darmanitangalar'],
      forme: 'Galar',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 554,
      otherFormes: ['darumaka'],
      species: 'darumaka-galar',
      types: [TypesEnum.Ice],
      weightkg: 40
    }
  ],
  [
    'darmanitan',
    {
      abilities: { first: 'sheerforce', hidden: 'zenmode' },
      baseForme: 'Standard',
      baseStats: { hp: 105, atk: 140, def: 55, spa: 30, spd: 55, spe: 95 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Red',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 35,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 555,
      otherFormes: ['darmanitanzen', 'darmanitangalar', 'darmanitangalarzen'],
      prevo: 'darumaka',
      species: 'darmanitan',
      types: [TypesEnum.Fire],
      weightkg: 92.9,
      aliases: ['darm', 'darmanitans', 'darmanitanstandard', 'darmanitanstandardmode', 'hihidaruma']
    }
  ],
  [
    'darmanitangalar',
    {
      abilities: { first: 'gorillatactics', hidden: 'zenmode' },
      baseSpecies: 'darmanitan',
      baseStats: { hp: 105, atk: 140, def: 55, spa: 30, spd: 55, spe: 95 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'use Ice Stone',
      forme: 'Galar',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 555,
      otherFormes: ['darmanitan', 'darmanitanzen', 'darmanitangalarzen'],
      prevo: 'darumakagalar',
      species: 'darmanitan-galar',
      types: [TypesEnum.Ice],
      weightkg: 120
    }
  ],
  [
    'darmanitanzen',
    {
      abilities: { first: 'zenmode' },
      baseSpecies: 'darmanitan',
      baseStats: { hp: 105, atk: 30, def: 105, spa: 140, spd: 105, spe: 55 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Blue',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 35,
      forme: 'Zen',
      formeLetter: 'Z',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 555,
      otherFormes: ['darmanitan', 'darmanitangalar', 'darmanitangalarzen'],
      prevo: 'darumaka',
      species: 'darmanitan-zen',
      types: [TypesEnum.Fire, TypesEnum.Psychic],
      weightkg: 92.9,
      aliases: ['darmanitanz', 'darmanitanzenmode']
    }
  ],
  [
    'darmanitangalarzen',
    {
      abilities: { first: 'gorillatactics', hidden: 'zenmode' },
      baseSpecies: 'darmanitangalar',
      baseStats: { hp: 105, atk: 160, def: 55, spa: 30, spd: 55, spe: 135 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 'use Ice Stone',
      forme: 'Galar-Zen',
      formeLetter: 'Z',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 555,
      otherFormes: ['darmanitan', 'darmanitangalar', 'darmanitanzen'],
      prevo: 'darumakagalar',
      species: 'darmanitan-galar-zen',
      types: [TypesEnum.Ice, TypesEnum.Fire],
      weightkg: 120,
      aliases: ['darmanitangalarzen', 'darmanitanzengalar', 'darmgz']
    }
  ],
  [
    'maractus',
    {
      abilities: {
        first: 'waterabsorb',
        second: 'chlorophyll',
        hidden: 'stormdrain'
      },
      baseStats: { hp: 75, atk: 86, def: 67, spa: 106, spd: 67, spe: 60 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Green',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 556,
      species: 'maractus',
      types: [TypesEnum.Grass],
      weightkg: 28,
      aliases: ['marakatchi']
    }
  ],
  [
    'dwebble',
    {
      abilities: { first: 'sturdy', second: 'shellarmor', hidden: 'weakarmor' },
      baseStats: { hp: 50, atk: 65, def: 85, spa: 35, spd: 35, spe: 55 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Red',
      eggGroups: ['Bug', 'Mineral'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['crustle'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 557,
      species: 'dwebble',
      types: [TypesEnum.Bug, TypesEnum.Rock],
      weightkg: 14.5,
      aliases: ['ishizumai']
    }
  ],
  [
    'crustle',
    {
      abilities: { first: 'sturdy', second: 'shellarmor', hidden: 'weakarmor' },
      baseStats: { hp: 70, atk: 105, def: 125, spa: 65, spd: 75, spe: 45 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Red',
      eggGroups: ['Bug', 'Mineral'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 34,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 558,
      prevo: 'dwebble',
      species: 'crustle',
      types: [TypesEnum.Bug, TypesEnum.Rock],
      weightkg: 200,
      aliases: ['iwaparesu']
    }
  ],
  [
    'scraggy',
    {
      abilities: { first: 'shedskin', second: 'moxie', hidden: 'intimidate' },
      baseStats: { hp: 50, atk: 75, def: 70, spa: 35, spd: 70, spe: 48 },
      catchRate: {
        base: 180,
        percentageWithOrdinaryPokeballAtFullHealth: '33.8%'
      },
      color: 'Yellow',
      eggGroups: ['Field', 'Dragon'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['scrafty'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 559,
      species: 'scraggy',
      types: [TypesEnum.Dark, TypesEnum.Fighting],
      weightkg: 11.8,
      aliases: ['zuruggu']
    }
  ],
  [
    'scrafty',
    {
      abilities: { first: 'shedskin', second: 'moxie', hidden: 'intimidate' },
      baseStats: { hp: 65, atk: 90, def: 115, spa: 45, spd: 115, spe: 58 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Red',
      eggGroups: ['Field', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 1, spe: 0 },
      evoLevel: 39,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 560,
      prevo: 'scraggy',
      species: 'scrafty',
      types: [TypesEnum.Dark, TypesEnum.Fighting],
      weightkg: 30,
      aliases: ['zuruzukin']
    }
  ],
  [
    'sigilyph',
    {
      abilities: {
        first: 'wonderskin',
        second: 'magicguard',
        hidden: 'tintedlens'
      },
      baseStats: { hp: 72, atk: 58, def: 80, spa: 103, spd: 80, spe: 97 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Black',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 561,
      species: 'sigilyph',
      types: [TypesEnum.Psychic, TypesEnum.Flying],
      weightkg: 14,
      aliases: ['shinboraa']
    }
  ],
  [
    'yamask',
    {
      abilities: { first: 'mummy' },
      baseStats: { hp: 38, atk: 30, def: 85, spa: 55, spd: 65, spe: 30 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Black',
      eggGroups: ['Mineral', 'Amorphous'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['cofagrigus'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 562,
      otherFormes: ['yamaskgalar'],
      species: 'yamask',
      types: [TypesEnum.Ghost],
      weightkg: 1.5,
      aliases: ['desumasu']
    }
  ],
  [
    'yamaskgalar',
    {
      abilities: {
        first: 'wanderingspirit',
        second: 'wanderingspirit',
        hidden: 'wanderingspirit'
      },
      baseSpecies: 'yamask',
      baseStats: { hp: 38, atk: 55, def: 85, spa: 30, spd: 65, spe: 30 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Black',
      eggGroups: ['Mineral', 'Amorphous'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['runerigus'],
      forme: 'Galar',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 562,
      otherFormes: ['yamask'],
      species: 'yamask-galar',
      types: [TypesEnum.Ground, TypesEnum.Ghost],
      weightkg: 1.5
    }
  ],
  [
    'cofagrigus',
    {
      abilities: { first: 'mummy' },
      baseStats: { hp: 58, atk: 50, def: 145, spa: 95, spd: 105, spe: 30 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Yellow',
      eggGroups: ['Mineral', 'Amorphous'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 34,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 563,
      prevo: 'yamask',
      species: 'cofagrigus',
      types: [TypesEnum.Ghost],
      weightkg: 76.5,
      aliases: ['cofag', 'desukaan']
    }
  ],
  [
    'tirtouga',
    {
      abilities: { first: 'solidrock', second: 'sturdy', hidden: 'swiftswim' },
      baseStats: { hp: 54, atk: 78, def: 103, spa: 53, spd: 45, spe: 22 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Water 3'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['carracosta'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 7710,
      num: 564,
      species: 'tirtouga',
      types: [TypesEnum.Water, TypesEnum.Rock],
      weightkg: 16.5,
      aliases: ['purotooga']
    }
  ],
  [
    'carracosta',
    {
      abilities: { first: 'solidrock', second: 'sturdy', hidden: 'swiftswim' },
      baseStats: { hp: 74, atk: 108, def: 133, spa: 83, spd: 65, spe: 32 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Water 3'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 37,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 7710,
      num: 565,
      prevo: 'tirtouga',
      species: 'carracosta',
      types: [TypesEnum.Water, TypesEnum.Rock],
      weightkg: 81,
      aliases: ['abagoora']
    }
  ],
  [
    'archen',
    {
      abilities: { first: 'defeatist' },
      baseStats: { hp: 55, atk: 112, def: 45, spa: 74, spd: 45, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Flying', 'Water 3'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['archeops'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 7710,
      num: 566,
      species: 'archen',
      types: [TypesEnum.Rock, TypesEnum.Flying],
      weightkg: 9.5,
      aliases: ['aaken']
    }
  ],
  [
    'archeops',
    {
      abilities: { first: 'defeatist' },
      baseStats: { hp: 75, atk: 140, def: 65, spa: 112, spd: 65, spe: 110 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Flying', 'Water 3'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 37,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 7710,
      num: 567,
      prevo: 'archen',
      species: 'archeops',
      types: [TypesEnum.Rock, TypesEnum.Flying],
      weightkg: 32,
      aliases: ['aakeosu']
    }
  ],
  [
    'trubbish',
    {
      abilities: { first: 'stench', second: 'stickyhold', hidden: 'aftermath' },
      baseStats: { hp: 50, atk: 50, def: 62, spa: 40, spd: 62, spe: 65 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Green',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['garbodor'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 568,
      species: 'trubbish',
      types: [TypesEnum.Poison],
      weightkg: 31,
      aliases: ['yabukuron']
    }
  ],
  [
    'garbodor',
    {
      abilities: { first: 'stench', second: 'weakarmor', hidden: 'aftermath' },
      baseStats: { hp: 80, atk: 95, def: 82, spa: 60, spd: 82, spe: 75 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Green',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 36,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.9,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 569,
      otherFormes: ['garbodorgmax'],
      prevo: 'trubbish',
      species: 'garbodor',
      types: [TypesEnum.Poison],
      weightkg: 107.3,
      aliases: ['dasutodasu']
    }
  ],
  [
    'garbodorgmax',
    {
      abilities: { first: 'stench', second: 'weakarmor', hidden: 'aftermath' },
      baseSpecies: 'garbodor',
      baseStats: { hp: 80, atk: 95, def: 82, spa: 60, spd: 82, spe: 75 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Green',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 21,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 569,
      otherFormes: ['garbodor'],
      species: 'garbodor-gmax',
      types: [TypesEnum.Poison],
      weightkg: 429.2,
      aliases: ['gigantamax garbodor']
    }
  ],
  [
    'zorua',
    {
      abilities: { first: 'illusion' },
      baseStats: { hp: 40, atk: 65, def: 40, spa: 80, spd: 40, spe: 65 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['zoroark'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      num: 570,
      otherFormes: ['zoruahisui'],
      species: 'zorua',
      types: [TypesEnum.Dark],
      weightkg: 12.5,
      aliases: ['zoroa']
    }
  ],
  [
    'zoruahisui',
    {
      abilities: { first: 'illusion' },
      baseSpecies: 'zorua',
      baseStats: { hp: 40, atk: 65, def: 40, spa: 80, spd: 40, spe: 65 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['zoroarkhisui'],
      forme: 'Hisui',
      formeLetter: 'H',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      num: 570,
      otherFormes: ['zorua'],
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/zorua-hisui.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/zorua-hisui.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/zorua-hisui.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/zorua-hisui.png',
      species: 'zorua-hisui',
      types: [TypesEnum.Normal, TypesEnum.Ghost],
      weightkg: 12.5,
      aliases: ['hisuianzoroa', 'zoroah']
    }
  ],
  [
    'zoroark',
    {
      abilities: { first: 'illusion' },
      baseStats: { hp: 60, atk: 105, def: 60, spa: 120, spd: 60, spe: 105 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 30,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 571,
      otherFormes: ['zoroarkhisui'],
      prevo: 'zorua',
      species: 'zoroark',
      types: [TypesEnum.Dark],
      weightkg: 81.1,
      aliases: ['zoroaaku']
    }
  ],
  [
    'zoroarkhisui',
    {
      abilities: { first: 'illusion' },
      baseSpecies: 'zoroark',
      baseStats: { hp: 55, atk: 100, def: 60, spa: 125, spd: 60, spe: 110 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 30,
      forme: 'Hisui',
      formeLetter: 'H',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 571,
      otherFormes: ['zoroark'],
      prevo: 'zoruahisui',
      species: 'zoroark-hisui',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/zoroark-hisui.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/zoroark-hisui.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/zoroark-hisui.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/zoroark-hisui.png',
      types: [TypesEnum.Normal, TypesEnum.Ghost],
      weightkg: 73,
      aliases: ['hisuianzoroark', 'zoroarkh']
    }
  ],
  [
    'minccino',
    {
      abilities: { first: 'cutecharm', second: 'technician', hidden: 'skilllink' },
      baseStats: { hp: 55, atk: 50, def: 40, spa: 40, spd: 40, spe: 75 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['cinccino'],
      genderRatio: { male: '25%', female: '75%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 3855,
      num: 572,
      species: 'minccino',
      types: [TypesEnum.Normal],
      weightkg: 5.8,
      aliases: ['chiraamy']
    }
  ],
  [
    'cinccino',
    {
      abilities: { first: 'cutecharm', second: 'technician', hidden: 'skilllink' },
      baseStats: { hp: 75, atk: 95, def: 60, spa: 65, spd: 60, spe: 115 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 'use Shiny Stone',
      genderRatio: { male: '25%', female: '75%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 3855,
      num: 573,
      prevo: 'minccino',
      species: 'cinccino',
      types: [TypesEnum.Normal],
      weightkg: 7.5,
      aliases: ['chirachiino']
    }
  ],
  [
    'gothita',
    {
      abilities: { first: 'frisk', second: 'competitive', hidden: 'shadowtag' },
      baseStats: { hp: 45, atk: 30, def: 50, spa: 55, spd: 65, spe: 45 },
      catchRate: {
        base: 200,
        percentageWithOrdinaryPokeballAtFullHealth: '36.6%'
      },
      color: 'Purple',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['gothorita'],
      genderRatio: { male: '25%', female: '75%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 574,
      species: 'gothita',
      types: [TypesEnum.Psychic],
      weightkg: 5.8,
      aliases: ['gochimu']
    }
  ],
  [
    'gothorita',
    {
      abilities: { first: 'frisk', second: 'competitive', hidden: 'shadowtag' },
      baseStats: { hp: 60, atk: 45, def: 70, spa: 75, spd: 85, spe: 55 },
      catchRate: {
        base: 100,
        percentageWithOrdinaryPokeballAtFullHealth: '21.7%'
      },
      color: 'Purple',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 32,
      evos: ['gothitelle'],
      genderRatio: { male: '25%', female: '75%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 575,
      prevo: 'gothita',
      species: 'gothorita',
      types: [TypesEnum.Psychic],
      weightkg: 18,
      aliases: ['gochimiru']
    }
  ],
  [
    'gothitelle',
    {
      abilities: { first: 'frisk', second: 'competitive', hidden: 'shadowtag' },
      baseStats: { hp: 70, atk: 55, def: 95, spa: 95, spd: 110, spe: 65 },
      catchRate: { base: 50, percentageWithOrdinaryPokeballAtFullHealth: '12.9%' },
      color: 'Purple',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 3, spe: 0 },
      evoLevel: 41,
      genderRatio: { male: '25%', female: '75%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 576,
      prevo: 'gothorita',
      species: 'gothitelle',
      types: [TypesEnum.Psychic],
      weightkg: 44,
      aliases: ['gochiruzeru']
    }
  ],
  [
    'solosis',
    {
      abilities: {
        first: 'overcoat',
        second: 'magicguard',
        hidden: 'regenerator'
      },
      baseStats: { hp: 45, atk: 30, def: 40, spa: 105, spd: 50, spe: 20 },
      catchRate: {
        base: 200,
        percentageWithOrdinaryPokeballAtFullHealth: '36.6%'
      },
      color: 'Green',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['duosion'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 577,
      species: 'solosis',
      types: [TypesEnum.Psychic],
      weightkg: 1,
      aliases: ['yuniran']
    }
  ],
  [
    'duosion',
    {
      abilities: {
        first: 'overcoat',
        second: 'magicguard',
        hidden: 'regenerator'
      },
      baseStats: { hp: 65, atk: 40, def: 50, spa: 125, spd: 60, spe: 30 },
      catchRate: {
        base: 100,
        percentageWithOrdinaryPokeballAtFullHealth: '21.7%'
      },
      color: 'Green',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 32,
      evos: ['reuniclus'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 578,
      prevo: 'solosis',
      species: 'duosion',
      types: [TypesEnum.Psychic],
      weightkg: 8,
      aliases: ['daburan']
    }
  ],
  [
    'reuniclus',
    {
      abilities: {
        first: 'overcoat',
        second: 'magicguard',
        hidden: 'regenerator'
      },
      baseStats: { hp: 110, atk: 65, def: 75, spa: 125, spd: 85, spe: 30 },
      catchRate: { base: 50, percentageWithOrdinaryPokeballAtFullHealth: '12.9%' },
      color: 'Green',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: 41,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 579,
      prevo: 'duosion',
      species: 'reuniclus',
      types: [TypesEnum.Psychic],
      weightkg: 20.1,
      aliases: ['rank', 'rankurusu', 'reuni']
    }
  ],
  [
    'ducklett',
    {
      abilities: { first: 'keeneye', second: 'bigpecks', hidden: 'hydration' },
      baseStats: { hp: 62, atk: 44, def: 50, spa: 44, spd: 50, spe: 55 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Blue',
      eggGroups: ['Water 1', 'Flying'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['swanna'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 580,
      species: 'ducklett',
      types: [TypesEnum.Water, TypesEnum.Flying],
      weightkg: 5.5,
      aliases: ['koaruhii']
    }
  ],
  [
    'swanna',
    {
      abilities: { first: 'keeneye', second: 'bigpecks', hidden: 'hydration' },
      baseStats: { hp: 75, atk: 87, def: 63, spa: 87, spd: 63, spe: 98 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'White',
      eggGroups: ['Water 1', 'Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 35,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 581,
      prevo: 'ducklett',
      species: 'swanna',
      types: [TypesEnum.Water, TypesEnum.Flying],
      weightkg: 24.2,
      aliases: ['suwanna']
    }
  ],
  [
    'vanillite',
    {
      abilities: { first: 'icebody', second: 'snowcloak', hidden: 'weakarmor' },
      baseStats: { hp: 36, atk: 50, def: 50, spa: 65, spd: 60, spe: 44 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'White',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['vanillish'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 582,
      species: 'vanillite',
      types: [TypesEnum.Ice],
      weightkg: 5.7,
      aliases: ['baniputchi']
    }
  ],
  [
    'vanillish',
    {
      abilities: { first: 'icebody', second: 'snowcloak', hidden: 'weakarmor' },
      baseStats: { hp: 51, atk: 65, def: 65, spa: 80, spd: 75, spe: 59 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'White',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 35,
      evos: ['vanilluxe'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 583,
      prevo: 'vanillite',
      species: 'vanillish',
      types: [TypesEnum.Ice],
      weightkg: 41,
      aliases: ['baniritchi']
    }
  ],
  [
    'vanilluxe',
    {
      abilities: { first: 'icebody', second: 'snowwarning', hidden: 'weakarmor' },
      baseStats: { hp: 71, atk: 95, def: 85, spa: 110, spd: 95, spe: 79 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'White',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: 47,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 584,
      prevo: 'vanillish',
      species: 'vanilluxe',
      types: [TypesEnum.Ice],
      weightkg: 57.5,
      aliases: ['baibanira']
    }
  ],
  [
    'deerling',
    {
      abilities: {
        first: 'chlorophyll',
        second: 'sapsipper',
        hidden: 'serenegrace'
      },
      baseForme: 'Spring',
      baseStats: { hp: 60, atk: 60, def: 50, spa: 40, spd: 50, spe: 75 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Pink',
      cosmeticFormes: ['Deerling-Summer', 'Deerling-Autumn', 'Deerling-Winter'],
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['sawsbuck'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 585,
      species: 'deerling',
      types: [TypesEnum.Normal, TypesEnum.Grass],
      weightkg: 19.5,
      aliases: ['deerlingautumn', 'deerlingspring', 'deerlingsummer', 'deerlingwinter', 'shikijika']
    }
  ],
  [
    'sawsbuck',
    {
      abilities: {
        first: 'chlorophyll',
        second: 'sapsipper',
        hidden: 'serenegrace'
      },
      baseForme: 'Spring',
      baseStats: { hp: 80, atk: 100, def: 70, spa: 60, spd: 70, spe: 95 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Brown',
      cosmeticFormes: ['Sawsbuck-Summer', 'Sawsbuck-Autumn', 'Sawsbuck-Winter'],
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 34,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.9,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 586,
      prevo: 'deerling',
      species: 'sawsbuck',
      types: [TypesEnum.Normal, TypesEnum.Grass],
      weightkg: 92.5,
      aliases: ['mebukijika', 'sawsbuckautumn', 'sawsbuckspring', 'sawsbucksummer', 'sawsbuckwinter']
    }
  ],
  [
    'emolga',
    {
      abilities: { first: 'static', hidden: 'motordrive' },
      baseStats: { hp: 55, atk: 75, def: 60, spa: 75, spd: 60, spe: 103 },
      catchRate: {
        base: 200,
        percentageWithOrdinaryPokeballAtFullHealth: '36.6%'
      },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 587,
      species: 'emolga',
      types: [TypesEnum.Electric, TypesEnum.Flying],
      weightkg: 5,
      aliases: ['emonga']
    }
  ],
  [
    'karrablast',
    {
      abilities: { first: 'swarm', second: 'shedskin', hidden: 'noguard' },
      baseStats: { hp: 50, atk: 75, def: 45, spa: 40, spd: 45, spe: 60 },
      catchRate: {
        base: 200,
        percentageWithOrdinaryPokeballAtFullHealth: '36.6%'
      },
      color: 'Blue',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['escavalier'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 588,
      species: 'karrablast',
      types: [TypesEnum.Bug],
      weightkg: 5.9,
      aliases: ['kaburumo']
    }
  ],
  [
    'escavalier',
    {
      abilities: { first: 'swarm', second: 'shellarmor', hidden: 'overcoat' },
      baseStats: { hp: 70, atk: 135, def: 105, spa: 60, spd: 105, spe: 20 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Gray',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Trade for Shelmet',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 589,
      prevo: 'karrablast',
      species: 'escavalier',
      types: [TypesEnum.Bug, TypesEnum.Steel],
      weightkg: 33,
      aliases: ['esca', 'shubarugo']
    }
  ],
  [
    'foongus',
    {
      abilities: { first: 'effectspore', hidden: 'regenerator' },
      baseStats: { hp: 69, atk: 55, def: 45, spa: 55, spd: 55, spe: 15 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'White',
      eggGroups: ['Grass'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['amoonguss'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 590,
      species: 'foongus',
      types: [TypesEnum.Grass, TypesEnum.Poison],
      weightkg: 1,
      aliases: ['tamagetake']
    }
  ],
  [
    'amoonguss',
    {
      abilities: { first: 'effectspore', hidden: 'regenerator' },
      baseStats: { hp: 114, atk: 85, def: 70, spa: 85, spd: 80, spe: 30 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'White',
      eggGroups: ['Grass'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 39,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 591,
      prevo: 'foongus',
      species: 'amoonguss',
      types: [TypesEnum.Grass, TypesEnum.Poison],
      weightkg: 10.5,
      aliases: ['morobareru']
    }
  ],
  [
    'frillish',
    {
      abilities: { first: 'waterabsorb', second: 'cursedbody', hidden: 'damp' },
      baseStats: { hp: 55, atk: 40, def: 50, spa: 65, spd: 85, spe: 40 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'White',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['jellicent'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 592,
      otherFormes: ['frillishfemale'],
      species: 'frillish',
      types: [TypesEnum.Water, TypesEnum.Ghost],
      weightkg: 33,
      aliases: ['pururiru']
    }
  ],
  [
    'frillishfemale',
    {
      abilities: { first: 'waterabsorb', second: 'cursedbody', hidden: 'damp' },
      baseSpecies: 'frillish',
      baseStats: { hp: 55, atk: 40, def: 50, spa: 65, spd: 85, spe: 40 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'White',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['jellicent'],
      forme: 'female',
      formeLetter: 'F',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 592,
      otherFormes: ['frillish'],
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/frillish-f.gif',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/frillish-f.gif',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/frillish-f.gif',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/ani/frillish-f.gif',
      species: 'frillish-female',
      types: [TypesEnum.Water, TypesEnum.Ghost],
      weightkg: 33
    }
  ],
  [
    'jellicent',
    {
      abilities: { first: 'waterabsorb', second: 'cursedbody', hidden: 'damp' },
      baseStats: { hp: 100, atk: 60, def: 70, spa: 85, spd: 105, spe: 60 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'White',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 40,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 593,
      otherFormes: ['jellicentfemale'],
      prevo: 'frillish',
      species: 'jellicent',
      types: [TypesEnum.Water, TypesEnum.Ghost],
      weightkg: 135,
      aliases: ['burungeru']
    }
  ],
  [
    'jellicentfemale',
    {
      abilities: { first: 'waterabsorb', second: 'cursedbody', hidden: 'damp' },
      baseSpecies: 'jellicent',
      baseStats: { hp: 100, atk: 60, def: 70, spa: 85, spd: 105, spe: 60 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'White',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 40,
      forme: 'female',
      formeLetter: 'F',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 2.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 593,
      otherFormes: ['jellicent'],
      prevo: 'frillish',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/jellicent-f.gif',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/jellicent-f.gif',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/jellicent-f.gif',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/ani/jellicent-f.gif',
      species: 'jellicent-female',
      types: [TypesEnum.Water, TypesEnum.Ghost],
      weightkg: 135
    }
  ],
  [
    'alomomola',
    {
      abilities: { first: 'healer', second: 'hydration', hidden: 'regenerator' },
      baseStats: { hp: 165, atk: 75, def: 80, spa: 40, spd: 45, spe: 65 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Pink',
      eggGroups: ['Water 1', 'Water 2'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 10280,
      num: 594,
      species: 'alomomola',
      types: [TypesEnum.Water],
      weightkg: 31.6,
      aliases: ['mamanbou']
    }
  ],
  [
    'joltik',
    {
      abilities: { first: 'compoundeyes', second: 'unnerve', hidden: 'swarm' },
      baseStats: { hp: 50, atk: 47, def: 50, spa: 57, spd: 50, spe: 65 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['galvantula'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 595,
      species: 'joltik',
      types: [TypesEnum.Bug, TypesEnum.Electric],
      weightkg: 0.6,
      aliases: ['bachuru']
    }
  ],
  [
    'galvantula',
    {
      abilities: { first: 'compoundeyes', second: 'unnerve', hidden: 'swarm' },
      baseStats: { hp: 70, atk: 77, def: 60, spa: 97, spd: 60, spe: 108 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Yellow',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 36,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 596,
      prevo: 'joltik',
      species: 'galvantula',
      types: [TypesEnum.Bug, TypesEnum.Electric],
      weightkg: 14.3,
      aliases: ['denchura']
    }
  ],
  [
    'ferroseed',
    {
      abilities: { first: 'ironbarbs' },
      baseStats: { hp: 44, atk: 50, def: 91, spa: 24, spd: 86, spe: 10 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Gray',
      eggGroups: ['Grass', 'Mineral'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['ferrothorn'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 597,
      species: 'ferroseed',
      types: [TypesEnum.Grass, TypesEnum.Steel],
      weightkg: 18.8,
      aliases: ['tesshiido']
    }
  ],
  [
    'ferrothorn',
    {
      abilities: { first: 'ironbarbs', hidden: 'anticipation' },
      baseStats: { hp: 74, atk: 94, def: 131, spa: 54, spd: 116, spe: 20 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Gray',
      eggGroups: ['Grass', 'Mineral'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 40,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 598,
      prevo: 'ferroseed',
      species: 'ferrothorn',
      types: [TypesEnum.Grass, TypesEnum.Steel],
      weightkg: 110,
      aliases: ['ferro', 'nattorei']
    }
  ],
  [
    'klink',
    {
      abilities: { first: 'plus', second: 'minus', hidden: 'clearbody' },
      baseStats: { hp: 40, atk: 55, def: 70, spa: 45, spd: 60, spe: 30 },
      catchRate: {
        base: 130,
        percentageWithOrdinaryPokeballAtFullHealth: '26.5%'
      },
      color: 'Gray',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['klang'],
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 599,
      species: 'klink',
      types: [TypesEnum.Steel],
      weightkg: 21,
      aliases: ['giaru']
    }
  ],
  [
    'klang',
    {
      abilities: { first: 'plus', second: 'minus', hidden: 'clearbody' },
      baseStats: { hp: 60, atk: 80, def: 95, spa: 70, spd: 85, spe: 50 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Gray',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 38,
      evos: ['klinklang'],
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 600,
      prevo: 'klink',
      species: 'klang',
      types: [TypesEnum.Steel],
      weightkg: 51,
      aliases: ['gigiaru']
    }
  ],
  [
    'klinklang',
    {
      abilities: { first: 'plus', second: 'minus', hidden: 'clearbody' },
      baseStats: { hp: 60, atk: 100, def: 115, spa: 70, spd: 85, spe: 90 },
      catchRate: { base: 30, percentageWithOrdinaryPokeballAtFullHealth: '8.8%' },
      color: 'Gray',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 3, spa: 0, spd: 0, spe: 0 },
      evoLevel: 49,
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 601,
      prevo: 'klang',
      species: 'klinklang',
      types: [TypesEnum.Steel],
      weightkg: 81,
      aliases: ['gigigiaru']
    }
  ],
  [
    'tynamo',
    {
      abilities: { first: 'levitate' },
      baseStats: { hp: 35, atk: 55, def: 40, spa: 45, spd: 40, spe: 60 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'White',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['eelektrik'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.2,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 602,
      species: 'tynamo',
      types: [TypesEnum.Electric],
      weightkg: 0.3,
      aliases: ['shibishirasu']
    }
  ],
  [
    'eelektrik',
    {
      abilities: { first: 'levitate' },
      baseStats: { hp: 65, atk: 85, def: 70, spa: 75, spd: 70, spe: 40 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Blue',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 39,
      evos: ['eelektross'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 603,
      prevo: 'tynamo',
      species: 'eelektrik',
      types: [TypesEnum.Electric],
      weightkg: 22,
      aliases: ['shibibiiru']
    }
  ],
  [
    'eelektross',
    {
      abilities: { first: 'levitate' },
      baseStats: { hp: 85, atk: 115, def: 80, spa: 105, spd: 80, spe: 50 },
      catchRate: { base: 30, percentageWithOrdinaryPokeballAtFullHealth: '8.8%' },
      color: 'Blue',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 39,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.1,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 604,
      prevo: 'eelektrik',
      species: 'eelektross',
      types: [TypesEnum.Electric],
      weightkg: 80.5,
      aliases: ['shibirudon']
    }
  ],
  [
    'elgyem',
    {
      abilities: { first: 'telepathy', second: 'synchronize', hidden: 'analytic' },
      baseStats: { hp: 55, atk: 55, def: 55, spa: 85, spd: 55, spe: 30 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Blue',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['beheeyem'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 605,
      species: 'elgyem',
      types: [TypesEnum.Psychic],
      weightkg: 9,
      aliases: ['riguree']
    }
  ],
  [
    'beheeyem',
    {
      abilities: { first: 'telepathy', second: 'synchronize', hidden: 'analytic' },
      baseStats: { hp: 75, atk: 75, def: 75, spa: 125, spd: 95, spe: 40 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Brown',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 42,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 606,
      prevo: 'elgyem',
      species: 'beheeyem',
      types: [TypesEnum.Psychic],
      weightkg: 34.5,
      aliases: ['oobemu']
    }
  ],
  [
    'litwick',
    {
      abilities: {
        first: 'flashfire',
        second: 'flamebody',
        hidden: 'infiltrator'
      },
      baseStats: { hp: 50, atk: 30, def: 55, spa: 65, spd: 55, spe: 20 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'White',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['lampent'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 607,
      species: 'litwick',
      types: [TypesEnum.Ghost, TypesEnum.Fire],
      weightkg: 3.1,
      aliases: ['hitomoshi']
    }
  ],
  [
    'lampent',
    {
      abilities: {
        first: 'flashfire',
        second: 'flamebody',
        hidden: 'infiltrator'
      },
      baseStats: { hp: 60, atk: 40, def: 60, spa: 95, spd: 60, spe: 55 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Black',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 41,
      evos: ['chandelure'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 608,
      prevo: 'litwick',
      species: 'lampent',
      types: [TypesEnum.Ghost, TypesEnum.Fire],
      weightkg: 13,
      aliases: ['ranpuraa']
    }
  ],
  [
    'chandelure',
    {
      abilities: {
        first: 'flashfire',
        second: 'flamebody',
        hidden: 'infiltrator'
      },
      baseStats: { hp: 60, atk: 55, def: 90, spa: 145, spd: 90, spe: 80 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Black',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: 41,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 609,
      prevo: 'lampent',
      species: 'chandelure',
      types: [TypesEnum.Ghost, TypesEnum.Fire],
      weightkg: 34.3,
      aliases: ['chandy', 'shandera']
    }
  ],
  [
    'axew',
    {
      abilities: { first: 'rivalry', second: 'moldbreaker', hidden: 'unnerve' },
      baseStats: { hp: 46, atk: 87, def: 60, spa: 30, spd: 40, spe: 57 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Green',
      eggGroups: ['Monster', 'Dragon'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['fraxure'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 610,
      species: 'axew',
      types: [TypesEnum.Dragon],
      weightkg: 18,
      aliases: ['kibago']
    }
  ],
  [
    'fraxure',
    {
      abilities: { first: 'rivalry', second: 'moldbreaker', hidden: 'unnerve' },
      baseStats: { hp: 66, atk: 117, def: 70, spa: 40, spd: 50, spe: 67 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Green',
      eggGroups: ['Monster', 'Dragon'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 38,
      evos: ['haxorus'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 611,
      prevo: 'axew',
      species: 'fraxure',
      types: [TypesEnum.Dragon],
      weightkg: 36,
      aliases: ['onondo']
    }
  ],
  [
    'haxorus',
    {
      abilities: { first: 'rivalry', second: 'moldbreaker', hidden: 'unnerve' },
      baseStats: { hp: 76, atk: 147, def: 90, spa: 60, spd: 70, spe: 97 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Monster', 'Dragon'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 48,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.8,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 612,
      prevo: 'fraxure',
      species: 'haxorus',
      types: [TypesEnum.Dragon],
      weightkg: 105.5,
      aliases: ['ononokusu']
    }
  ],
  [
    'cubchoo',
    {
      abilities: { first: 'snowcloak', second: 'slushrush', hidden: 'rattled' },
      baseStats: { hp: 55, atk: 70, def: 40, spa: 60, spd: 40, spe: 40 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['beartic'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 613,
      species: 'cubchoo',
      types: [TypesEnum.Ice],
      weightkg: 8.5,
      aliases: ['kumashun']
    }
  ],
  [
    'beartic',
    {
      abilities: { first: 'snowcloak', second: 'slushrush', hidden: 'swiftswim' },
      baseStats: { hp: 95, atk: 130, def: 80, spa: 70, spd: 80, spe: 50 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 37,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 614,
      prevo: 'cubchoo',
      species: 'beartic',
      types: [TypesEnum.Ice],
      weightkg: 260,
      aliases: ['tsunbeaa']
    }
  ],
  [
    'cryogonal',
    {
      abilities: { first: 'levitate' },
      baseStats: { hp: 80, atk: 50, def: 50, spa: 95, spd: 135, spe: 105 },
      catchRate: { base: 25, percentageWithOrdinaryPokeballAtFullHealth: '7.7%' },
      color: 'Blue',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 615,
      species: 'cryogonal',
      types: [TypesEnum.Ice],
      weightkg: 148,
      aliases: ['furiijio']
    }
  ],
  [
    'shelmet',
    {
      abilities: { first: 'hydration', second: 'shellarmor', hidden: 'overcoat' },
      baseStats: { hp: 50, atk: 40, def: 85, spa: 40, spd: 65, spe: 25 },
      catchRate: {
        base: 200,
        percentageWithOrdinaryPokeballAtFullHealth: '36.6%'
      },
      color: 'Red',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['accelgor'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 616,
      species: 'shelmet',
      types: [TypesEnum.Bug],
      weightkg: 7.7,
      aliases: ['chobomaki']
    }
  ],
  [
    'accelgor',
    {
      abilities: { first: 'hydration', second: 'stickyhold', hidden: 'unburden' },
      baseStats: { hp: 80, atk: 70, def: 40, spa: 100, spd: 60, spe: 145 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Red',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 'Trade for Karrablast',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 617,
      prevo: 'shelmet',
      species: 'accelgor',
      types: [TypesEnum.Bug],
      weightkg: 25.3,
      aliases: ['agirudaa']
    }
  ],
  [
    'stunfisk',
    {
      abilities: { first: 'static', second: 'limber', hidden: 'sandveil' },
      baseStats: { hp: 109, atk: 66, def: 84, spa: 81, spd: 99, spe: 32 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Brown',
      eggGroups: ['Water 1', 'Amorphous'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 618,
      species: 'stunfisk',
      types: [TypesEnum.Ground, TypesEnum.Electric],
      weightkg: 11,
      aliases: ['maggyo']
    }
  ],
  [
    'stunfiskgalar',
    {
      abilities: { first: 'mimicry' },
      baseStats: { hp: 109, atk: 81, def: 99, spa: 66, spd: 84, spe: 32 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Green',
      eggGroups: ['Water 1', 'Amorphous'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Galar',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 618,
      species: 'stunfisk-galar',
      types: [TypesEnum.Ground, TypesEnum.Steel],
      weightkg: 20.5
    }
  ],
  [
    'mienfoo',
    {
      abilities: {
        first: 'innerfocus',
        second: 'regenerator',
        hidden: 'reckless'
      },
      baseStats: { hp: 45, atk: 85, def: 50, spa: 55, spd: 50, spe: 65 },
      catchRate: {
        base: 180,
        percentageWithOrdinaryPokeballAtFullHealth: '33.8%'
      },
      color: 'Yellow',
      eggGroups: ['Field', 'Human-Like'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['mienshao'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      num: 619,
      species: 'mienfoo',
      types: [TypesEnum.Fighting],
      weightkg: 20,
      aliases: ['kojofuu']
    }
  ],
  [
    'mienshao',
    {
      abilities: {
        first: 'innerfocus',
        second: 'regenerator',
        hidden: 'reckless'
      },
      baseStats: { hp: 65, atk: 125, def: 60, spa: 95, spd: 60, spe: 105 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Field', 'Human-Like'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 50,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      num: 620,
      prevo: 'mienfoo',
      species: 'mienshao',
      types: [TypesEnum.Fighting],
      weightkg: 35.5,
      aliases: ['kojondo', 'shao']
    }
  ],
  [
    'druddigon',
    {
      abilities: {
        first: 'roughskin',
        second: 'sheerforce',
        hidden: 'moldbreaker'
      },
      baseStats: { hp: 77, atk: 120, def: 90, spa: 60, spd: 90, spe: 48 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Monster', 'Dragon'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 7710,
      num: 621,
      species: 'druddigon',
      types: [TypesEnum.Dragon],
      weightkg: 139,
      aliases: ['kurimugan']
    }
  ],
  [
    'golett',
    {
      abilities: { first: 'ironfist', second: 'klutz', hidden: 'noguard' },
      baseStats: { hp: 59, atk: 74, def: 50, spa: 35, spd: 50, spe: 35 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Green',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['golurk'],
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 622,
      species: 'golett',
      types: [TypesEnum.Ground, TypesEnum.Ghost],
      weightkg: 92,
      aliases: ['gobitto']
    }
  ],
  [
    'golurk',
    {
      abilities: { first: 'ironfist', second: 'klutz', hidden: 'noguard' },
      baseStats: { hp: 89, atk: 124, def: 80, spa: 55, spd: 80, spe: 55 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Green',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 43,
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 623,
      prevo: 'golett',
      species: 'golurk',
      types: [TypesEnum.Ground, TypesEnum.Ghost],
      weightkg: 330,
      aliases: ['goruugu', 'lurk']
    }
  ],
  [
    'pawniard',
    {
      abilities: { first: 'defiant', second: 'innerfocus', hidden: 'pressure' },
      baseStats: { hp: 45, atk: 85, def: 70, spa: 40, spd: 40, spe: 60 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Red',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['bisharp'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 624,
      species: 'pawniard',
      types: [TypesEnum.Dark, TypesEnum.Steel],
      weightkg: 10.2,
      aliases: ['komatana']
    }
  ],
  [
    'bisharp',
    {
      abilities: { first: 'defiant', second: 'innerfocus', hidden: 'pressure' },
      baseStats: { hp: 65, atk: 125, def: 100, spa: 60, spd: 70, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['kingambit'],
      evoLevel: 52,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 625,
      prevo: 'pawniard',
      species: 'bisharp',
      types: [TypesEnum.Dark, TypesEnum.Steel],
      weightkg: 70,
      aliases: ['bish', 'kirikizan']
    }
  ],
  [
    'bouffalant',
    {
      abilities: { first: 'reckless', second: 'sapsipper', hidden: 'soundproof' },
      baseStats: { hp: 95, atk: 110, def: 95, spa: 40, spd: 95, spe: 55 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 626,
      species: 'bouffalant',
      types: [TypesEnum.Normal],
      weightkg: 94.6,
      aliases: ['baffuron']
    }
  ],
  [
    'rufflet',
    {
      abilities: { first: 'keeneye', second: 'sheerforce', hidden: 'hustle' },
      baseStats: { hp: 70, atk: 83, def: 50, spa: 37, spd: 50, spe: 60 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'White',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['braviary', 'braviaryhisui'],
      genderRatio: { male: '100%', female: '0%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 627,
      species: 'rufflet',
      types: [TypesEnum.Normal, TypesEnum.Flying],
      weightkg: 10.5,
      aliases: ['washibon']
    }
  ],
  [
    'braviary',
    {
      abilities: { first: 'keeneye', second: 'sheerforce', hidden: 'defiant' },
      baseStats: { hp: 100, atk: 123, def: 75, spa: 57, spd: 75, spe: 80 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Red',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 54,
      genderRatio: { male: '100%', female: '0%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 628,
      otherFormes: ['braviaryhisui'],
      prevo: 'rufflet',
      species: 'braviary',
      types: [TypesEnum.Normal, TypesEnum.Flying],
      weightkg: 41,
      aliases: ['muricabird', 'uooguru']
    }
  ],
  [
    'braviaryhisui',
    {
      abilities: { first: 'keeneye', second: 'sheerforce', hidden: 'tintedlens' },
      baseSpecies: 'braviary',
      baseStats: { hp: 110, atk: 83, def: 70, spa: 112, spd: 70, spe: 65 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'White',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 54,
      forme: 'Hisui',
      formeLetter: 'H',
      genderRatio: { male: '100%', female: '0%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 628,
      otherFormes: ['braviary'],
      prevo: 'rufflet',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/braviary-hisui.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/braviary-hisui.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/braviary-hisui.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/braviary-hisui.png',
      species: 'braviary-hisui',
      types: [TypesEnum.Psychic, TypesEnum.Flying],
      weightkg: 54,
      aliases: ['hisuianbraviary', 'braviaryh']
    }
  ],
  [
    'vullaby',
    {
      abilities: { first: 'bigpecks', second: 'overcoat', hidden: 'weakarmor' },
      baseStats: { hp: 70, atk: 55, def: 75, spa: 45, spd: 65, spe: 60 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Brown',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['mandibuzz'],
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 629,
      species: 'vullaby',
      types: [TypesEnum.Dark, TypesEnum.Flying],
      weightkg: 9,
      aliases: ['baruchai']
    }
  ],
  [
    'mandibuzz',
    {
      abilities: { first: 'bigpecks', second: 'overcoat', hidden: 'weakarmor' },
      baseStats: { hp: 110, atk: 65, def: 105, spa: 55, spd: 95, spe: 80 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Brown',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 54,
      genderRatio: { male: '0%', female: '100%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 630,
      prevo: 'vullaby',
      species: 'mandibuzz',
      types: [TypesEnum.Dark, TypesEnum.Flying],
      weightkg: 39.5,
      aliases: ['barujiina', 'mandi']
    }
  ],
  [
    'heatmor',
    {
      abilities: { first: 'gluttony', second: 'flashfire', hidden: 'whitesmoke' },
      baseStats: { hp: 85, atk: 97, def: 66, spa: 105, spd: 66, spe: 65 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Red',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 631,
      species: 'heatmor',
      types: [TypesEnum.Fire],
      weightkg: 58,
      aliases: ['kuitaran']
    }
  ],
  [
    'durant',
    {
      abilities: { first: 'swarm', second: 'hustle', hidden: 'truant' },
      baseStats: { hp: 58, atk: 109, def: 112, spa: 48, spd: 48, spe: 109 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Gray',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 632,
      species: 'durant',
      types: [TypesEnum.Bug, TypesEnum.Steel],
      weightkg: 33,
      aliases: ['aianto']
    }
  ],
  [
    'deino',
    {
      abilities: { first: 'hustle' },
      baseStats: { hp: 52, atk: 65, def: 50, spa: 45, spd: 50, spe: 38 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Dragon'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['zweilous'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 633,
      species: 'deino',
      types: [TypesEnum.Dark, TypesEnum.Dragon],
      weightkg: 17.3,
      aliases: ['monozu']
    }
  ],
  [
    'zweilous',
    {
      abilities: { first: 'hustle' },
      baseStats: { hp: 72, atk: 85, def: 70, spa: 65, spd: 70, spe: 58 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Dragon'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 50,
      evos: ['hydreigon'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 634,
      prevo: 'deino',
      species: 'zweilous',
      types: [TypesEnum.Dark, TypesEnum.Dragon],
      weightkg: 50,
      aliases: ['jiheddo']
    }
  ],
  [
    'hydreigon',
    {
      abilities: { first: 'levitate' },
      baseStats: { hp: 92, atk: 105, def: 90, spa: 125, spd: 90, spe: 98 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: 64,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.8,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 635,
      prevo: 'zweilous',
      species: 'hydreigon',
      types: [TypesEnum.Dark, TypesEnum.Dragon],
      weightkg: 160,
      aliases: ['sazandora']
    }
  ],
  [
    'larvesta',
    {
      abilities: { first: 'flamebody', hidden: 'swarm' },
      baseStats: { hp: 55, atk: 85, def: 55, spa: 50, spd: 55, spe: 60 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'White',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['volcarona'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 636,
      species: 'larvesta',
      types: [TypesEnum.Bug, TypesEnum.Fire],
      weightkg: 28.8,
      aliases: ['meraruba']
    }
  ],
  [
    'volcarona',
    {
      abilities: { first: 'flamebody', hidden: 'swarm' },
      baseStats: { hp: 85, atk: 60, def: 65, spa: 135, spd: 105, spe: 100 },
      catchRate: { base: 15, percentageWithOrdinaryPokeballAtFullHealth: '5.2%' },
      color: 'White',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: 59,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 637,
      prevo: 'larvesta',
      species: 'volcarona',
      types: [TypesEnum.Bug, TypesEnum.Fire],
      weightkg: 46,
      aliases: ['urugamosu']
    }
  ],
  [
    'cobalion',
    {
      abilities: { first: 'justified' },
      baseStats: { hp: 91, atk: 90, def: 129, spa: 90, spd: 72, spe: 108 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 3, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.1,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 20560,
      num: 638,
      species: 'cobalion',
      types: [TypesEnum.Steel, TypesEnum.Fighting],
      weightkg: 250,
      aliases: ['coba', 'kobaruon'],
      legendary: true
    }
  ],
  [
    'terrakion',
    {
      abilities: { first: 'justified' },
      baseStats: { hp: 91, atk: 129, def: 90, spa: 72, spd: 90, spe: 108 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.9,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 20560,
      num: 639,
      species: 'terrakion',
      types: [TypesEnum.Rock, TypesEnum.Fighting],
      weightkg: 260,
      aliases: ['terakion', 'terra'],
      legendary: true
    }
  ],
  [
    'virizion',
    {
      abilities: { first: 'justified' },
      baseStats: { hp: 91, atk: 90, def: 72, spa: 90, spd: 129, spe: 108 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 3, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 20560,
      num: 640,
      species: 'virizion',
      types: [TypesEnum.Grass, TypesEnum.Fighting],
      weightkg: 200,
      aliases: ['birijion', 'viriz'],
      legendary: true
    }
  ],
  [
    'tornadus',
    {
      abilities: { first: 'prankster', hidden: 'defiant' },
      baseForme: 'Incarnate',
      baseStats: { hp: 79, atk: 115, def: 70, spa: 125, spd: 80, spe: 111 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '100%', female: '0%' },
      heightm: 1.5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 641,
      otherFormes: ['tornadustherian'],
      species: 'tornadus',
      types: [TypesEnum.Flying],
      weightkg: 63,
      aliases: ['torn', 'tornadusi', 'tornadusincarnate', 'tornadusincarnation', 'torunerosu'],
      legendary: true
    }
  ],
  [
    'tornadustherian',
    {
      abilities: { first: 'regenerator' },
      baseSpecies: 'tornadus',
      baseStats: { hp: 79, atk: 100, def: 80, spa: 110, spd: 90, spe: 121 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      forme: 'Therian',
      formeLetter: 'T',
      genderRatio: { male: '100%', female: '0%' },
      heightm: 1.4,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 641,
      otherFormes: ['tornadus'],
      species: 'tornadus-therian',
      types: [TypesEnum.Flying],
      weightkg: 63,
      aliases: ['tornadust', 'tornt'],
      legendary: true
    }
  ],
  [
    'thundurus',
    {
      abilities: { first: 'prankster', hidden: 'defiant' },
      baseForme: 'Incarnate',
      baseStats: { hp: 79, atk: 115, def: 70, spa: 125, spd: 80, spe: 111 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '100%', female: '0%' },
      heightm: 1.5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 642,
      otherFormes: ['thundurustherian'],
      species: 'thundurus',
      types: [TypesEnum.Electric, TypesEnum.Flying],
      weightkg: 61,
      aliases: ['borutorosu', 'thundurusi', 'thundurusincarnate', 'thundurusincarnation', 'thundy'],
      legendary: true
    }
  ],
  [
    'thundurustherian',
    {
      abilities: { first: 'voltabsorb' },
      baseSpecies: 'thundurus',
      baseStats: { hp: 79, atk: 105, def: 70, spa: 145, spd: 80, spe: 101 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      forme: 'Therian',
      formeLetter: 'T',
      genderRatio: { male: '100%', female: '0%' },
      heightm: 3,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 642,
      otherFormes: ['thundurus'],
      species: 'thundurus-therian',
      types: [TypesEnum.Electric, TypesEnum.Flying],
      weightkg: 61,
      aliases: ['thundurust', 'thundyt'],
      legendary: true
    }
  ],
  [
    'reshiram',
    {
      abilities: { first: 'turboblaze' },
      baseStats: { hp: 100, atk: 120, def: 100, spa: 150, spd: 120, spe: 90 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'White',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 3.2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 643,
      species: 'reshiram',
      types: [TypesEnum.Dragon, TypesEnum.Fire],
      weightkg: 330,
      aliases: ['reshiramu'],
      legendary: true
    }
  ],
  [
    'zekrom',
    {
      abilities: { first: 'teravolt' },
      baseStats: { hp: 100, atk: 150, def: 120, spa: 120, spd: 100, spe: 90 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Black',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.9,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 644,
      species: 'zekrom',
      types: [TypesEnum.Dragon, TypesEnum.Electric],
      weightkg: 345,
      aliases: ['zekuromu'],
      legendary: true
    }
  ],
  [
    'landorus',
    {
      abilities: { first: 'sandforce', hidden: 'sheerforce' },
      baseForme: 'Incarnate',
      baseStats: { hp: 89, atk: 125, def: 90, spa: 115, spd: 80, spe: 101 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Brown',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      genderRatio: { male: '100%', female: '0%' },
      heightm: 1.5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 645,
      otherFormes: ['landorustherian'],
      species: 'landorus',
      types: [TypesEnum.Ground, TypesEnum.Flying],
      weightkg: 68,
      aliases: ['lando', 'landoi', 'landorusi', 'landorusincarnate', 'landorusincarnation', 'randorosu'],
      legendary: true
    }
  ],
  [
    'landorustherian',
    {
      abilities: { first: 'intimidate' },
      baseSpecies: 'landorus',
      baseStats: { hp: 89, atk: 145, def: 90, spa: 105, spd: 80, spe: 91 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Brown',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Therian',
      formeLetter: 'T',
      genderRatio: { male: '100%', female: '0%' },
      heightm: 1.3,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 645,
      otherFormes: ['landorus'],
      species: 'landorus-therian',
      types: [TypesEnum.Ground, TypesEnum.Flying],
      weightkg: 68,
      aliases: ['landorust', 'landot'],
      legendary: true
    }
  ],
  [
    'kyurem',
    {
      abilities: { first: 'pressure' },
      baseStats: { hp: 125, atk: 130, def: 90, spa: 130, spd: 90, spe: 95 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 1, atk: 1, def: 0, spa: 1, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 3,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 646,
      otherFormes: ['kyuremblack', 'kyuremwhite'],
      species: 'kyurem',
      types: [TypesEnum.Dragon, TypesEnum.Ice],
      weightkg: 325,
      aliases: ['kyuremu'],
      legendary: true
    }
  ],
  [
    'kyuremblack',
    {
      abilities: { first: 'teravolt' },
      baseSpecies: 'kyurem',
      baseStats: { hp: 125, atk: 170, def: 100, spa: 120, spd: 90, spe: 95 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Black',
      formeLetter: 'B',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 3.3,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 646,
      otherFormes: ['kyurem', 'kyuremwhite'],
      species: 'kyurem-black',
      types: [TypesEnum.Dragon, TypesEnum.Ice],
      weightkg: 325,
      aliases: ['cube', 'kyub', 'kyuremb'],
      legendary: true
    }
  ],
  [
    'kyuremwhite',
    {
      abilities: { first: 'turboblaze' },
      baseSpecies: 'kyurem',
      baseStats: { hp: 125, atk: 120, def: 90, spa: 170, spd: 100, spe: 95 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      forme: 'White',
      formeLetter: 'W',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 3.6,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 646,
      otherFormes: ['kyurem', 'kyuremblack'],
      species: 'kyurem-white',
      types: [TypesEnum.Dragon, TypesEnum.Ice],
      weightkg: 325,
      aliases: ['kyuremw', 'kyuw'],
      legendary: true
    }
  ],
  [
    'keldeo',
    {
      abilities: { first: 'justified' },
      baseForme: 'Ordinary',
      baseStats: { hp: 91, atk: 72, def: 90, spa: 129, spd: 90, spe: 108 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.4,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 20560,
      num: 647,
      otherFormes: ['keldeoresolute'],
      species: 'keldeo',
      types: [TypesEnum.Water, TypesEnum.Fighting],
      weightkg: 48.5,
      aliases: ['keld', 'keldeoo', 'keldeoordinary', 'kerudio'],
      mythical: true
    }
  ],
  [
    'keldeoresolute',
    {
      abilities: { first: 'justified' },
      baseSpecies: 'keldeo',
      baseStats: { hp: 91, atk: 72, def: 90, spa: 129, spd: 90, spe: 108 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      forme: 'Resolute',
      formeLetter: 'R',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.4,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 20560,
      num: 647,
      otherFormes: ['keldeo'],
      species: 'keldeo-resolute',
      types: [TypesEnum.Water, TypesEnum.Fighting],
      weightkg: 48.5,
      aliases: ['keldeor', 'keldeoresolution'],
      mythical: true
    }
  ],
  [
    'meloetta',
    {
      abilities: { first: 'serenegrace' },
      baseForme: 'Aria',
      baseStats: { hp: 100, atk: 77, def: 77, spa: 128, spd: 128, spe: 90 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'White',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 1, spe: 1 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.6,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 648,
      otherFormes: ['meloettapirouette'],
      species: 'meloetta',
      types: [TypesEnum.Normal, TypesEnum.Psychic],
      weightkg: 6.5,
      aliases: ['meloettaa', 'meloettaaria', 'meloettavoice', 'meroetta'],
      mythical: true
    }
  ],
  [
    'meloettapirouette',
    {
      abilities: { first: 'serenegrace' },
      baseSpecies: 'meloetta',
      baseStats: { hp: 100, atk: 128, def: 90, spa: 77, spd: 77, spe: 128 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'White',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 1, def: 1, spa: 0, spd: 0, spe: 1 },
      forme: 'Pirouette',
      formeLetter: 'P',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.6,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 648,
      otherFormes: ['meloetta'],
      species: 'meloetta-pirouette',
      types: [TypesEnum.Normal, TypesEnum.Fighting],
      weightkg: 6.5,
      aliases: ['meloettap', 'meloettas', 'meloettastep'],
      mythical: true
    }
  ],
  [
    'genesect',
    {
      abilities: { first: 'download' },
      baseStats: { hp: 71, atk: 120, def: 95, spa: 120, spd: 95, spe: 99 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 1, spd: 0, spe: 1 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 649,
      otherFormes: ['genesectdouse', 'genesectshock', 'genesectburn', 'genesectchill'],
      species: 'genesect',
      types: [TypesEnum.Bug, TypesEnum.Steel],
      weightkg: 82.5,
      aliases: ['gene', 'genosekuto'],
      mythical: true
    }
  ],
  [
    'genesectdouse',
    {
      abilities: { first: 'download' },
      baseSpecies: 'genesect',
      baseStats: { hp: 71, atk: 120, def: 95, spa: 120, spd: 95, spe: 99 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 1, spd: 0, spe: 1 },
      forme: 'Douse',
      formeLetter: 'D',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 649,
      otherFormes: ['genesect', 'genesectshock', 'genesectburn', 'genesectchill'],
      species: 'genesect-douse',
      types: [TypesEnum.Bug, TypesEnum.Steel],
      weightkg: 82.5,
      mythical: true
    }
  ],
  [
    'genesectshock',
    {
      abilities: { first: 'download' },
      baseSpecies: 'genesect',
      baseStats: { hp: 71, atk: 120, def: 95, spa: 120, spd: 95, spe: 99 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 1, spd: 0, spe: 1 },
      forme: 'Shock',
      formeLetter: 'S',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 649,
      otherFormes: ['genesect', 'genesectdouse', 'genesectburn', 'genesectchill'],
      species: 'genesect-shock',
      types: [TypesEnum.Bug, TypesEnum.Steel],
      weightkg: 82.5,
      mythical: true
    }
  ],
  [
    'genesectburn',
    {
      abilities: { first: 'download' },
      baseSpecies: 'genesect',
      baseStats: { hp: 71, atk: 120, def: 95, spa: 120, spd: 95, spe: 99 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 1, spd: 0, spe: 1 },
      forme: 'Burn',
      formeLetter: 'B',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 649,
      otherFormes: ['genesect', 'genesectdouse', 'genesectshock', 'genesectchill'],
      species: 'genesect-burn',
      types: [TypesEnum.Bug, TypesEnum.Steel],
      weightkg: 82.5,
      mythical: true
    }
  ],
  [
    'genesectchill',
    {
      abilities: { first: 'download' },
      baseSpecies: 'genesect',
      baseStats: { hp: 71, atk: 120, def: 95, spa: 120, spd: 95, spe: 99 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 1, spd: 0, spe: 1 },
      forme: 'Chill',
      formeLetter: 'C',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 649,
      otherFormes: ['genesect', 'genesectdouse', 'genesectshock', 'genesectburn'],
      species: 'genesect-chill',
      types: [TypesEnum.Bug, TypesEnum.Steel],
      weightkg: 82.5,
      mythical: true
    }
  ]
];

for (const [key, value] of entries) {
  value.key = key;

  Pokedex.set(key, value);
}
