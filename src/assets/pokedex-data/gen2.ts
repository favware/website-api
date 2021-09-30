import { Pokedex } from '#dexdata/pokedex';
import type { PokemonTypes } from '#utils/pokemon';

const entries: [string, PokemonTypes.DexEntry][] = [
  [
    'chikorita',
    {
      abilities: { first: 'Overgrow', hidden: 'Leaf Guard' },
      baseStats: { hp: 45, atk: 49, def: 65, spa: 49, spd: 65, spe: 45 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Monster', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['bayleef'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 152,
      species: 'chikorita',
      types: ['Grass'],
      weightkg: 6.4,
      aliases: ['chikoriita']
    }
  ],
  [
    'bayleef',
    {
      abilities: { first: 'Overgrow', hidden: 'Leaf Guard' },
      baseStats: { hp: 60, atk: 62, def: 80, spa: 63, spd: 80, spe: 60 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Monster', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 1, spe: 0 },
      evoLevel: 16,
      evos: ['meganium'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 153,
      prevo: 'chikorita',
      species: 'bayleef',
      types: ['Grass'],
      weightkg: 15.8,
      aliases: ['beiriifu']
    }
  ],
  [
    'meganium',
    {
      abilities: { first: 'Overgrow', hidden: 'Leaf Guard' },
      baseStats: { hp: 80, atk: 82, def: 100, spa: 83, spd: 100, spe: 80 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Monster', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 2, spe: 0 },
      evoLevel: 32,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.8,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 154,
      prevo: 'bayleef',
      species: 'meganium',
      types: ['Grass'],
      weightkg: 100.5,
      aliases: ['meganiumu']
    }
  ],
  [
    'cyndaquil',
    {
      abilities: { first: 'Blaze', hidden: 'Flash Fire' },
      baseStats: { hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['quilava'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 155,
      species: 'cyndaquil',
      types: ['Fire'],
      weightkg: 7.9,
      aliases: ['hinoarashi']
    }
  ],
  [
    'quilava',
    {
      abilities: { first: 'Blaze', hidden: 'Flash Fire' },
      baseStats: { hp: 58, atk: 64, def: 58, spa: 80, spd: 65, spe: 80 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 1 },
      evoLevel: 14,
      evos: ['typhlosion'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 156,
      prevo: 'cyndaquil',
      species: 'quilava',
      types: ['Fire'],
      weightkg: 19,
      aliases: ['magumarashi']
    }
  ],
  [
    'typhlosion',
    {
      abilities: { first: 'Blaze', hidden: 'Flash Fire' },
      baseStats: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: 36,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 157,
      prevo: 'quilava',
      species: 'typhlosion',
      types: ['Fire'],
      weightkg: 79.5,
      aliases: ['bakufuun']
    }
  ],
  [
    'totodile',
    {
      abilities: { first: 'Torrent', hidden: 'Sheer Force' },
      baseStats: { hp: 50, atk: 65, def: 64, spa: 44, spd: 48, spe: 43 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Monster', 'Water 1'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['croconaw'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 158,
      species: 'totodile',
      types: ['Water'],
      weightkg: 9.5,
      aliases: ['waninoko']
    }
  ],
  [
    'croconaw',
    {
      abilities: { first: 'Torrent', hidden: 'Sheer Force' },
      baseStats: { hp: 65, atk: 80, def: 80, spa: 59, spd: 63, spe: 58 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Monster', 'Water 1'],
      evYields: { hp: 0, atk: 1, def: 1, spa: 0, spd: 0, spe: 0 },
      evoLevel: 18,
      evos: ['feraligatr'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 159,
      prevo: 'totodile',
      species: 'croconaw',
      types: ['Water'],
      weightkg: 25,
      aliases: ['arigeitsu']
    }
  ],
  [
    'feraligatr',
    {
      abilities: { first: 'Torrent', hidden: 'Sheer Force' },
      baseStats: { hp: 85, atk: 105, def: 100, spa: 79, spd: 83, spe: 78 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Monster', 'Water 1'],
      evYields: { hp: 0, atk: 2, def: 1, spa: 0, spd: 0, spe: 0 },
      evoLevel: 30,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 2.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 160,
      prevo: 'croconaw',
      species: 'feraligatr',
      types: ['Water'],
      weightkg: 88.8,
      aliases: ['gatr', 'oodairu']
    }
  ],
  [
    'sentret',
    {
      abilities: { first: 'Run Away', second: 'Keen Eye', hidden: 'Frisk' },
      baseStats: { hp: 35, atk: 46, def: 34, spa: 35, spd: 45, spe: 20 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['furret'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 161,
      species: 'sentret',
      types: ['Normal'],
      weightkg: 6,
      aliases: ['otachi']
    }
  ],
  [
    'furret',
    {
      abilities: { first: 'Run Away', second: 'Keen Eye', hidden: 'Frisk' },
      baseStats: { hp: 85, atk: 76, def: 64, spa: 45, spd: 55, spe: 90 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 15,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 162,
      prevo: 'sentret',
      species: 'furret',
      types: ['Normal'],
      weightkg: 32.5,
      aliases: ['ootachi']
    }
  ],
  [
    'hoothoot',
    {
      abilities: { first: 'Insomnia', second: 'Keen Eye', hidden: 'Tinted Lens' },
      baseStats: { hp: 60, atk: 30, def: 30, spa: 36, spd: 56, spe: 50 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Flying'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['noctowl'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 163,
      species: 'hoothoot',
      types: ['Normal', 'Flying'],
      weightkg: 21.2,
      aliases: ['hoohoo']
    }
  ],
  [
    'noctowl',
    {
      abilities: { first: 'Insomnia', second: 'Keen Eye', hidden: 'Tinted Lens' },
      baseStats: { hp: 100, atk: 50, def: 50, spa: 86, spd: 96, spe: 70 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Brown',
      eggGroups: ['Flying'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 20,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 164,
      prevo: 'hoothoot',
      species: 'noctowl',
      types: ['Normal', 'Flying'],
      weightkg: 40.8,
      aliases: ['yorunozuku']
    }
  ],
  [
    'ledyba',
    {
      abilities: { first: 'Swarm', second: 'Early Bird', hidden: 'Rattled' },
      baseStats: { hp: 40, atk: 20, def: 30, spa: 40, spd: 80, spe: 55 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Red',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['ledian'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 3855,
      num: 165,
      species: 'ledyba',
      types: ['Bug', 'Flying'],
      weightkg: 10.8,
      aliases: ['rediba']
    }
  ],
  [
    'ledian',
    {
      abilities: { first: 'Swarm', second: 'Early Bird', hidden: 'Iron Fist' },
      baseStats: { hp: 55, atk: 35, def: 50, spa: 55, spd: 110, spe: 85 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Red',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 18,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 3855,
      num: 166,
      prevo: 'ledyba',
      species: 'ledian',
      types: ['Bug', 'Flying'],
      weightkg: 35.6,
      aliases: ['redian']
    }
  ],
  [
    'spinarak',
    {
      abilities: { first: 'Swarm', second: 'Insomnia', hidden: 'Sniper' },
      baseStats: { hp: 40, atk: 60, def: 40, spa: 40, spd: 40, spe: 30 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Green',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['ariados'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 3855,
      num: 167,
      species: 'spinarak',
      types: ['Bug', 'Poison'],
      weightkg: 8.5,
      aliases: ['itomaru']
    }
  ],
  [
    'ariados',
    {
      abilities: { first: 'Swarm', second: 'Insomnia', hidden: 'Sniper' },
      baseStats: { hp: 70, atk: 90, def: 70, spa: 60, spd: 70, spe: 40 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Red',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 22,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 3855,
      num: 168,
      prevo: 'spinarak',
      species: 'ariados',
      types: ['Bug', 'Poison'],
      weightkg: 33.5,
      aliases: ['ariadosu']
    }
  ],
  [
    'crobat',
    {
      abilities: { first: 'Inner Focus', hidden: 'Infiltrator' },
      baseStats: { hp: 85, atk: 90, def: 80, spa: 70, spd: 80, spe: 130 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Purple',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      evoLevel: 23,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 169,
      prevo: 'golbat',
      species: 'crobat',
      types: ['Poison', 'Flying'],
      weightkg: 75,
      aliases: ['kurobatto']
    }
  ],
  [
    'chinchou',
    {
      abilities: {
        first: 'Volt Absorb',
        second: 'Illuminate',
        hidden: 'Water Absorb'
      },
      baseStats: { hp: 75, atk: 38, def: 38, spa: 56, spd: 56, spe: 67 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Blue',
      eggGroups: ['Water 2'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['lanturn'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 170,
      species: 'chinchou',
      types: ['Water', 'Electric'],
      weightkg: 12,
      aliases: ['chonchii']
    }
  ],
  [
    'lanturn',
    {
      abilities: {
        first: 'Volt Absorb',
        second: 'Illuminate',
        hidden: 'Water Absorb'
      },
      baseStats: { hp: 125, atk: 58, def: 58, spa: 76, spd: 76, spe: 67 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Blue',
      eggGroups: ['Water 2'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 27,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 171,
      prevo: 'chinchou',
      species: 'lanturn',
      types: ['Water', 'Electric'],
      weightkg: 22.5,
      aliases: ['rantaan']
    }
  ],
  [
    'pichu',
    {
      abilities: { first: 'Static', hidden: 'Lightning Rod' },
      baseStats: { hp: 20, atk: 40, def: 15, spa: 35, spd: 35, spe: 60 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['pikachu'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      num: 172,
      otherFormes: ['pichuspikyeared'],
      species: 'pichu',
      types: ['Electric'],
      weightkg: 2,
      aliases: ['pichuu']
    }
  ],
  [
    'pichuspikyeared',
    {
      abilities: { first: 'Static' },
      baseSpecies: 'Pichu',
      baseStats: { hp: 20, atk: 40, def: 15, spa: 35, spd: 35, spe: 60 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      forme: 'Spiky-eared',
      formeLetter: 'S',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      num: 172,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen4-back/pichu-spikyeared.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen4-back-shiny/pichu-spikyeared.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen4-shiny/pichu-spikyeared.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen4/pichu-spikyeared.png',
      species: 'pichu-spiky-eared',
      types: ['Electric'],
      weightkg: 2
    }
  ],
  [
    'cleffa',
    {
      abilities: {
        first: 'Cute Charm',
        second: 'Magic Guard',
        hidden: 'Friend Guard'
      },
      baseStats: { hp: 50, atk: 25, def: 28, spa: 45, spd: 55, spe: 15 },
      catchRate: {
        base: 150,
        percentageWithOrdinaryPokeballAtFullHealth: '29.5%'
      },
      color: 'Pink',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['clefairy'],
      genderRatio: { male: '25%', female: '75%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 2570,
      num: 173,
      species: 'cleffa',
      types: ['Fairy'],
      weightkg: 3,
      aliases: ['py']
    }
  ],
  [
    'igglybuff',
    {
      abilities: {
        first: 'Cute Charm',
        second: 'Competitive',
        hidden: 'Friend Guard'
      },
      baseStats: { hp: 90, atk: 30, def: 15, spa: 40, spd: 20, spe: 15 },
      catchRate: {
        base: 170,
        percentageWithOrdinaryPokeballAtFullHealth: '32.4%'
      },
      color: 'Pink',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['jigglypuff'],
      genderRatio: { male: '25%', female: '75%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 2570,
      num: 174,
      species: 'igglybuff',
      types: ['Normal', 'Fairy'],
      weightkg: 1,
      aliases: ['pupurin']
    }
  ],
  [
    'togepi',
    {
      abilities: { first: 'Hustle', second: 'Serene Grace', hidden: 'Super Luck' },
      baseStats: { hp: 35, atk: 20, def: 65, spa: 40, spd: 65, spe: 20 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'White',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['togetic'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 2570,
      num: 175,
      species: 'togepi',
      types: ['Fairy'],
      weightkg: 1.5,
      aliases: ['togepii']
    }
  ],
  [
    'togetic',
    {
      abilities: { first: 'Hustle', second: 'Serene Grace', hidden: 'Super Luck' },
      baseStats: { hp: 55, atk: 40, def: 85, spa: 80, spd: 105, spe: 40 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'White',
      eggGroups: ['Flying', 'Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 2,
      evos: ['togekiss'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 2570,
      num: 176,
      prevo: 'togepi',
      species: 'togetic',
      types: ['Fairy', 'Flying'],
      weightkg: 3.2,
      aliases: ['togechikku']
    }
  ],
  [
    'natu',
    {
      abilities: {
        first: 'Synchronize',
        second: 'Early Bird',
        hidden: 'Magic Bounce'
      },
      baseStats: { hp: 40, atk: 50, def: 45, spa: 70, spd: 45, spe: 70 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Green',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['xatu'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 177,
      species: 'natu',
      types: ['Psychic', 'Flying'],
      weightkg: 2,
      aliases: ['neitei']
    }
  ],
  [
    'xatu',
    {
      abilities: {
        first: 'Synchronize',
        second: 'Early Bird',
        hidden: 'Magic Bounce'
      },
      baseStats: { hp: 65, atk: 75, def: 70, spa: 95, spd: 70, spe: 95 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Green',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 1 },
      evoLevel: 25,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 178,
      prevo: 'natu',
      species: 'xatu',
      types: ['Psychic', 'Flying'],
      weightkg: 15,
      aliases: ['neiteio']
    }
  ],
  [
    'mareep',
    {
      abilities: { first: 'Static', hidden: 'Plus' },
      baseStats: { hp: 55, atk: 40, def: 40, spa: 65, spd: 45, spe: 35 },
      catchRate: {
        base: 235,
        percentageWithOrdinaryPokeballAtFullHealth: '41.3%'
      },
      color: 'White',
      eggGroups: ['Monster', 'Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['flaaffy'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 179,
      species: 'mareep',
      types: ['Electric'],
      weightkg: 7.8,
      aliases: ['meriipu']
    }
  ],
  [
    'flaaffy',
    {
      abilities: { first: 'Static', hidden: 'Plus' },
      baseStats: { hp: 70, atk: 55, def: 55, spa: 80, spd: 60, spe: 45 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Pink',
      eggGroups: ['Monster', 'Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 15,
      evos: ['ampharos'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 180,
      prevo: 'mareep',
      species: 'flaaffy',
      types: ['Electric'],
      weightkg: 13.3,
      aliases: ['mokoko']
    }
  ],
  [
    'ampharos',
    {
      abilities: { first: 'Static', hidden: 'Plus' },
      baseStats: { hp: 90, atk: 75, def: 85, spa: 115, spd: 90, spe: 55 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Monster', 'Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: 30,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 181,
      otherFormes: ['ampharosmega'],
      prevo: 'flaaffy',
      species: 'ampharos',
      types: ['Electric'],
      weightkg: 61.5,
      aliases: ['amph', 'denryuu']
    }
  ],
  [
    'ampharosmega',
    {
      abilities: { first: 'Mold Breaker' },
      baseSpecies: 'Ampharos',
      baseStats: { hp: 90, atk: 95, def: 105, spa: 165, spd: 110, spe: 45 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Monster', 'Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 181,
      species: 'ampharos-mega',
      types: ['Electric', 'Dragon'],
      weightkg: 61.5,
      aliases: ['fabio', 'shep']
    }
  ],
  [
    'bellossom',
    {
      abilities: { first: 'Chlorophyll', hidden: 'Healer' },
      baseStats: { hp: 75, atk: 80, def: 95, spa: 90, spd: 100, spe: 50 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 3, spe: 0 },
      evoLevel: 'use Sun Stone',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 182,
      prevo: 'gloom',
      species: 'bellossom',
      types: ['Grass'],
      weightkg: 5.8,
      aliases: ['kireihana']
    }
  ],
  [
    'marill',
    {
      abilities: {
        first: 'Thick Fat',
        second: 'Huge Power',
        hidden: 'Sap Sipper'
      },
      baseStats: { hp: 70, atk: 20, def: 50, spa: 20, spd: 50, spe: 40 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Blue',
      eggGroups: ['Water 1', 'Fairy'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Level up with happiness of at least 220',
      evos: ['azumarill'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 2570,
      num: 183,
      prevo: 'azurill',
      species: 'marill',
      types: ['Water', 'Fairy'],
      weightkg: 8.5,
      aliases: ['mariru']
    }
  ],
  [
    'azumarill',
    {
      abilities: {
        first: 'Thick Fat',
        second: 'Huge Power',
        hidden: 'Sap Sipper'
      },
      baseStats: { hp: 100, atk: 50, def: 80, spa: 60, spd: 80, spe: 50 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Fairy'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 18,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 2570,
      num: 184,
      prevo: 'marill',
      species: 'azumarill',
      types: ['Water', 'Fairy'],
      weightkg: 28.5,
      aliases: ['azu', 'mariruri']
    }
  ],
  [
    'sudowoodo',
    {
      abilities: { first: 'Sturdy', second: 'Rock Head', hidden: 'Rattled' },
      baseStats: { hp: 70, atk: 100, def: 115, spa: 30, spd: 65, spe: 30 },
      catchRate: { base: 65, percentageWithOrdinaryPokeballAtFullHealth: '15.7%' },
      color: 'Brown',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Level up while knowing Mimic',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 185,
      prevo: 'bonsly',
      species: 'sudowoodo',
      types: ['Rock'],
      weightkg: 38,
      aliases: ['usokkii']
    }
  ],
  [
    'politoed',
    {
      abilities: { first: 'Water Absorb', second: 'Damp', hidden: 'Drizzle' },
      baseStats: { hp: 90, atk: 75, def: 75, spa: 90, spd: 100, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Water 1'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 3, spe: 0 },
      evoLevel: "Trade while holding King's Rock",
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 186,
      prevo: 'poliwhirl',
      species: 'politoed',
      types: ['Water'],
      weightkg: 33.9,
      aliases: ['nyorotono', 'toed']
    }
  ],
  [
    'hoppip',
    {
      abilities: {
        first: 'Chlorophyll',
        second: 'Leaf Guard',
        hidden: 'Infiltrator'
      },
      baseStats: { hp: 35, atk: 35, def: 40, spa: 35, spd: 55, spe: 50 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Pink',
      eggGroups: ['Fairy', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['skiploom'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 187,
      species: 'hoppip',
      types: ['Grass', 'Flying'],
      weightkg: 0.5,
      aliases: ['hanekko']
    }
  ],
  [
    'skiploom',
    {
      abilities: {
        first: 'Chlorophyll',
        second: 'Leaf Guard',
        hidden: 'Infiltrator'
      },
      baseStats: { hp: 55, atk: 45, def: 50, spa: 45, spd: 65, spe: 80 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Green',
      eggGroups: ['Fairy', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 18,
      evos: ['jumpluff'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 188,
      prevo: 'hoppip',
      species: 'skiploom',
      types: ['Grass', 'Flying'],
      weightkg: 1,
      aliases: ['popokko']
    }
  ],
  [
    'jumpluff',
    {
      abilities: {
        first: 'Chlorophyll',
        second: 'Leaf Guard',
        hidden: 'Infiltrator'
      },
      baseStats: { hp: 75, atk: 55, def: 70, spa: 55, spd: 95, spe: 110 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Fairy', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      evoLevel: 27,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 189,
      prevo: 'skiploom',
      species: 'jumpluff',
      types: ['Grass', 'Flying'],
      weightkg: 3,
      aliases: ['watakko']
    }
  ],
  [
    'aipom',
    {
      abilities: { first: 'Run Away', second: 'Pickup', hidden: 'Skill Link' },
      baseStats: { hp: 55, atk: 70, def: 55, spa: 40, spd: 55, spe: 85 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['ambipom'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      num: 190,
      species: 'aipom',
      types: ['Normal'],
      weightkg: 11.5,
      aliases: ['eipamu']
    }
  ],
  [
    'sunkern',
    {
      abilities: {
        first: 'Chlorophyll',
        second: 'Solar Power',
        hidden: 'Early Bird'
      },
      baseStats: { hp: 30, atk: 30, def: 30, spa: 30, spd: 30, spe: 30 },
      catchRate: {
        base: 235,
        percentageWithOrdinaryPokeballAtFullHealth: '41.3%'
      },
      color: 'Yellow',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['sunflora'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 191,
      species: 'sunkern',
      types: ['Grass'],
      weightkg: 1.8,
      aliases: ['himanattsu']
    }
  ],
  [
    'sunflora',
    {
      abilities: {
        first: 'Chlorophyll',
        second: 'Solar Power',
        hidden: 'Early Bird'
      },
      baseStats: { hp: 75, atk: 75, def: 55, spa: 105, spd: 85, spe: 30 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Yellow',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 'use Sun Stone',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 192,
      prevo: 'sunkern',
      species: 'sunflora',
      types: ['Grass'],
      weightkg: 8.5,
      aliases: ['kimawari']
    }
  ],
  [
    'yanma',
    {
      abilities: {
        first: 'Speed Boost',
        second: 'Compound Eyes',
        hidden: 'Frisk'
      },
      baseStats: { hp: 65, atk: 65, def: 45, spa: 75, spd: 45, spe: 95 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Red',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['yanmega'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 193,
      species: 'yanma',
      types: ['Bug', 'Flying'],
      weightkg: 38,
      aliases: ['yanyanma']
    }
  ],
  [
    'wooper',
    {
      abilities: { first: 'Damp', second: 'Water Absorb', hidden: 'Unaware' },
      baseStats: { hp: 55, atk: 45, def: 45, spa: 25, spd: 25, spe: 15 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Blue',
      eggGroups: ['Water 1', 'Field'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['quagsire'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 194,
      species: 'wooper',
      types: ['Water', 'Ground'],
      weightkg: 8.5,
      aliases: ['upaa']
    }
  ],
  [
    'quagsire',
    {
      abilities: { first: 'Damp', second: 'Water Absorb', hidden: 'Unaware' },
      baseStats: { hp: 95, atk: 85, def: 85, spa: 65, spd: 65, spe: 35 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Field'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 20,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 195,
      prevo: 'wooper',
      species: 'quagsire',
      types: ['Water', 'Ground'],
      weightkg: 75,
      aliases: ['nuoo']
    }
  ],
  [
    'espeon',
    {
      abilities: { first: 'Synchronize', hidden: 'Magic Bounce' },
      baseStats: { hp: 65, atk: 65, def: 60, spa: 130, spd: 95, spe: 110 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 'Level up during Daytime with happiness of at least 220',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 8995,
      num: 196,
      prevo: 'eevee',
      species: 'espeon',
      types: ['Psychic'],
      weightkg: 26.5,
      aliases: ['eefi']
    }
  ],
  [
    'umbreon',
    {
      abilities: { first: 'Synchronize', hidden: 'Inner Focus' },
      baseStats: { hp: 95, atk: 65, def: 110, spa: 60, spd: 130, spe: 65 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Black',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 'Level up during Nighttime with happiness of at least 220',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 8995,
      num: 197,
      prevo: 'eevee',
      species: 'umbreon',
      types: ['Dark'],
      weightkg: 27,
      aliases: ['burakkii']
    }
  ],
  [
    'murkrow',
    {
      abilities: { first: 'Insomnia', second: 'Super Luck', hidden: 'Prankster' },
      baseStats: { hp: 60, atk: 85, def: 42, spa: 85, spd: 42, spe: 91 },
      catchRate: { base: 30, percentageWithOrdinaryPokeballAtFullHealth: '8.8%' },
      color: 'Black',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['honchkrow'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 198,
      species: 'murkrow',
      types: ['Dark', 'Flying'],
      weightkg: 2.1,
      aliases: ['yamikarasu']
    }
  ],
  [
    'slowking',
    {
      abilities: {
        first: 'Oblivious',
        second: 'Own Tempo',
        hidden: 'Regenerator'
      },
      baseStats: { hp: 95, atk: 75, def: 80, spa: 100, spd: 110, spe: 30 },
      catchRate: { base: 70, percentageWithOrdinaryPokeballAtFullHealth: '16.6%' },
      color: 'Pink',
      eggGroups: ['Monster', 'Water 1'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: "Trade while holding King's Rock",
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 199,
      otherFormes: ['slowkinggalar'],
      prevo: 'slowpoke',
      species: 'slowking',
      types: ['Water', 'Psychic'],
      weightkg: 79.5,
      aliases: ['yadokingu']
    }
  ],
  [
    'slowkinggalar',
    {
      abilities: {
        first: 'Curious Medicine',
        second: 'Own Tempo',
        hidden: 'Regenerator'
      },
      baseSpecies: 'Slowking',
      baseStats: { hp: 95, atk: 65, def: 80, spa: 110, spd: 110, spe: 30 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Pink',
      eggGroups: ['Monster', 'Water 1'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: "Trade while holding King's Rock",
      forme: 'Galar',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.8,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 20560,
      num: 145,
      prevo: 'slowpokegalar',
      species: 'slowking-galar',
      types: ['Poison', 'Psychic'],
      weightkg: 79.5
    }
  ],
  [
    'misdreavus',
    {
      abilities: { first: 'Levitate' },
      baseStats: { hp: 60, atk: 60, def: 60, spa: 85, spd: 85, spe: 85 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Gray',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['mismagius'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 6425,
      num: 200,
      species: 'misdreavus',
      types: ['Ghost'],
      weightkg: 1,
      aliases: ['muuma']
    }
  ],
  [
    'unown',
    {
      abilities: { first: 'Levitate' },
      baseForme: 'A',
      baseStats: { hp: 48, atk: 72, def: 48, spa: 72, spd: 48, spe: 48 },
      catchRate: {
        base: 225,
        percentageWithOrdinaryPokeballAtFullHealth: '39.9%'
      },
      color: 'Black',
      cosmeticFormes: [
        'Unown-B',
        'Unown-C',
        'Unown-D',
        'Unown-E',
        'Unown-F',
        'Unown-G',
        'Unown-H',
        'Unown-I',
        'Unown-J',
        'Unown-K',
        'Unown-L',
        'Unown-M',
        'Unown-N',
        'Unown-O',
        'Unown-P',
        'Unown-Q',
        'Unown-R',
        'Unown-S',
        'Unown-T',
        'Unown-U',
        'Unown-V',
        'Unown-W',
        'Unown-X',
        'Unown-Y',
        'Unown-Z',
        'Unown-Exclamation',
        'Unown-Question'
      ],
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 1, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.5,
      isEggObtainable: false,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 10280,
      num: 201,
      species: 'unown',
      types: ['Psychic'],
      weightkg: 5,
      aliases: [
        'annoon',
        'unownb',
        'unownc',
        'unownd',
        'unowne',
        'unownexclamation',
        'unownf',
        'unowng',
        'unownh',
        'unowni',
        'unownj',
        'unownk',
        'unownl',
        'unownm',
        'unownn',
        'unowno',
        'unownp',
        'unownq',
        'unownquestion',
        'unownr',
        'unowns',
        'unownt',
        'unownu',
        'unownv',
        'unownw',
        'unownx',
        'unowny',
        'unownz'
      ]
    }
  ],
  [
    'wobbuffet',
    {
      abilities: { first: 'Shadow Tag', hidden: 'Telepathy' },
      baseStats: { hp: 190, atk: 33, def: 58, spa: 33, spd: 58, spe: 33 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Amorphous'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 15,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 202,
      prevo: 'wynaut',
      species: 'wobbuffet',
      types: ['Psychic'],
      weightkg: 28.5,
      aliases: ['soonansu']
    }
  ],
  [
    'girafarig',
    {
      abilities: {
        first: 'Inner Focus',
        second: 'Early Bird',
        hidden: 'Sap Sipper'
      },
      baseStats: { hp: 70, atk: 80, def: 65, spa: 90, spd: 65, spe: 85 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Yellow',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 203,
      species: 'girafarig',
      types: ['Normal', 'Psychic'],
      weightkg: 41.5,
      aliases: ['kirinriki']
    }
  ],
  [
    'pineco',
    {
      abilities: { first: 'Sturdy', hidden: 'Overcoat' },
      baseStats: { hp: 50, atk: 65, def: 90, spa: 35, spd: 35, spe: 15 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Gray',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['forretress'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 204,
      species: 'pineco',
      types: ['Bug'],
      weightkg: 7.2,
      aliases: ['kunugidama']
    }
  ],
  [
    'forretress',
    {
      abilities: { first: 'Sturdy', hidden: 'Overcoat' },
      baseStats: { hp: 75, atk: 90, def: 140, spa: 60, spd: 60, spe: 40 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Purple',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 31,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 205,
      prevo: 'pineco',
      species: 'forretress',
      types: ['Bug', 'Steel'],
      weightkg: 125.8,
      aliases: ['foretosu', 'forry']
    }
  ],
  [
    'dunsparce',
    {
      abilities: { first: 'Serene Grace', second: 'Run Away', hidden: 'Rattled' },
      baseStats: { hp: 100, atk: 70, def: 70, spa: 65, spd: 65, spe: 45 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Field'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 206,
      species: 'dunsparce',
      types: ['Normal'],
      weightkg: 14,
      aliases: ['nokotchi']
    }
  ],
  [
    'gligar',
    {
      abilities: {
        first: 'Hyper Cutter',
        second: 'Sand Veil',
        hidden: 'Immunity'
      },
      baseStats: { hp: 65, atk: 75, def: 105, spa: 35, spd: 65, spe: 85 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Purple',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['gliscor'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 207,
      species: 'gligar',
      types: ['Ground', 'Flying'],
      weightkg: 64.8,
      aliases: ['guraigaa']
    }
  ],
  [
    'steelix',
    {
      abilities: { first: 'Rock Head', second: 'Sturdy', hidden: 'Sheer Force' },
      baseStats: { hp: 75, atk: 85, def: 200, spa: 55, spd: 65, spe: 30 },
      catchRate: { base: 25, percentageWithOrdinaryPokeballAtFullHealth: '7.7%' },
      color: 'Gray',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Trade while holding Metal Coat',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 9.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 208,
      otherFormes: ['steelixmega'],
      prevo: 'onix',
      species: 'steelix',
      types: ['Steel', 'Ground'],
      weightkg: 400,
      aliases: ['haganeeru']
    }
  ],
  [
    'steelixmega',
    {
      abilities: { first: 'Sand Force' },
      baseSpecies: 'Steelix',
      baseStats: { hp: 75, atk: 125, def: 230, spa: 55, spd: 95, spe: 30 },
      catchRate: { base: 25, percentageWithOrdinaryPokeballAtFullHealth: '7.7%' },
      color: 'Gray',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 10.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 208,
      species: 'steelix-mega',
      types: ['Steel', 'Ground'],
      weightkg: 740
    }
  ],
  [
    'snubbull',
    {
      abilities: { first: 'Intimidate', second: 'Run Away', hidden: 'Rattled' },
      baseStats: { hp: 60, atk: 80, def: 50, spa: 40, spd: 40, spe: 30 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Pink',
      eggGroups: ['Field', 'Fairy'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['granbull'],
      genderRatio: { male: '25%', female: '75%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      num: 209,
      species: 'snubbull',
      types: ['Fairy'],
      weightkg: 7.8,
      aliases: ['buruu']
    }
  ],
  [
    'granbull',
    {
      abilities: { first: 'Intimidate', second: 'Quick Feet', hidden: 'Rattled' },
      baseStats: { hp: 90, atk: 120, def: 75, spa: 60, spd: 60, spe: 45 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Purple',
      eggGroups: ['Field', 'Fairy'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 23,
      genderRatio: { male: '25%', female: '75%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      num: 210,
      prevo: 'snubbull',
      species: 'granbull',
      types: ['Fairy'],
      weightkg: 48.7,
      aliases: ['guranburu']
    }
  ],
  [
    'qwilfish',
    {
      abilities: {
        first: 'Poison Point',
        second: 'Swift Swim',
        hidden: 'Intimidate'
      },
      baseStats: { hp: 65, atk: 95, def: 85, spa: 55, spd: 55, spe: 85 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Gray',
      eggGroups: ['Water 2'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 211,
      species: 'qwilfish',
      types: ['Water', 'Poison'],
      weightkg: 3.9,
      aliases: ['hariisen']
    }
  ],
  [
    'scizor',
    {
      abilities: { first: 'Swarm', second: 'Technician', hidden: 'Light Metal' },
      baseStats: { hp: 70, atk: 130, def: 100, spa: 55, spd: 80, spe: 65 },
      catchRate: { base: 25, percentageWithOrdinaryPokeballAtFullHealth: '7.7%' },
      color: 'Red',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Trade while holding Metal Coat',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 212,
      otherFormes: ['scizormega'],
      prevo: 'scyther',
      species: 'scizor',
      types: ['Bug', 'Steel'],
      weightkg: 118,
      aliases: ['hassamu', 'zor']
    }
  ],
  [
    'scizormega',
    {
      abilities: { first: 'Technician' },
      baseSpecies: 'Scizor',
      baseStats: { hp: 70, atk: 150, def: 140, spa: 65, spd: 100, spe: 75 },
      catchRate: { base: 25, percentageWithOrdinaryPokeballAtFullHealth: '7.7%' },
      color: 'Red',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 212,
      species: 'scizor-mega',
      types: ['Bug', 'Steel'],
      weightkg: 125,
      aliases: ['mzor']
    }
  ],
  [
    'shuckle',
    {
      abilities: { first: 'Sturdy', second: 'Gluttony', hidden: 'Contrary' },
      baseStats: { hp: 20, atk: 10, def: 230, spa: 10, spd: 230, spe: 5 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 1, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 213,
      species: 'shuckle',
      types: ['Bug', 'Rock'],
      weightkg: 20.5,
      aliases: ['tsubotsubo']
    }
  ],
  [
    'heracross',
    {
      abilities: { first: 'Swarm', second: 'Guts', hidden: 'Moxie' },
      baseStats: { hp: 80, atk: 125, def: 75, spa: 40, spd: 95, spe: 85 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 6425,
      num: 214,
      otherFormes: ['heracrossmega'],
      species: 'heracross',
      types: ['Bug', 'Fighting'],
      weightkg: 54,
      aliases: ['hera', 'herakurosu']
    }
  ],
  [
    'heracrossmega',
    {
      abilities: { first: 'Skill Link' },
      baseSpecies: 'Heracross',
      baseStats: { hp: 80, atk: 185, def: 115, spa: 40, spd: 105, spe: 75 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 6425,
      num: 214,
      species: 'heracross-mega',
      types: ['Bug', 'Fighting'],
      weightkg: 62.5,
      aliases: ['megacross', 'megahera']
    }
  ],
  [
    'sneasel',
    {
      abilities: {
        first: 'Inner Focus',
        second: 'Keen Eye',
        hidden: 'Pickpocket'
      },
      baseStats: { hp: 55, atk: 95, def: 55, spa: 35, spd: 75, spe: 115 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Black',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['weavile'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 215,
      species: 'sneasel',
      types: ['Dark', 'Ice'],
      weightkg: 28,
      aliases: ['nyuura']
    }
  ],
  [
    'teddiursa',
    {
      abilities: { first: 'Pickup', second: 'Quick Feet', hidden: 'Honey Gather' },
      baseStats: { hp: 60, atk: 80, def: 50, spa: 50, spd: 50, spe: 40 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['ursaring'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 216,
      species: 'teddiursa',
      types: ['Normal'],
      weightkg: 8.8,
      aliases: ['himeguma']
    }
  ],
  [
    'ursaring',
    {
      abilities: { first: 'Guts', second: 'Quick Feet', hidden: 'Unnerve' },
      baseStats: { hp: 90, atk: 130, def: 75, spa: 75, spd: 75, spe: 55 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 30,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 217,
      prevo: 'teddiursa',
      species: 'ursaring',
      types: ['Normal'],
      weightkg: 125.8,
      aliases: ['ringuma']
    }
  ],
  [
    'slugma',
    {
      abilities: {
        first: 'Magma Armor',
        second: 'Flame Body',
        hidden: 'Weak Armor'
      },
      baseStats: { hp: 40, atk: 40, def: 40, spa: 70, spd: 40, spe: 20 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Red',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['magcargo'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 218,
      species: 'slugma',
      types: ['Fire'],
      weightkg: 35,
      aliases: ['magumaggu']
    }
  ],
  [
    'magcargo',
    {
      abilities: {
        first: 'Magma Armor',
        second: 'Flame Body',
        hidden: 'Weak Armor'
      },
      baseStats: { hp: 60, atk: 50, def: 120, spa: 90, spd: 80, spe: 30 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Red',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 38,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 219,
      prevo: 'slugma',
      species: 'magcargo',
      types: ['Fire', 'Rock'],
      weightkg: 55,
      aliases: ['magukarugo']
    }
  ],
  [
    'swinub',
    {
      abilities: { first: 'Oblivious', second: 'Snow Cloak', hidden: 'Thick Fat' },
      baseStats: { hp: 50, atk: 50, def: 40, spa: 30, spd: 30, spe: 50 },
      catchRate: {
        base: 225,
        percentageWithOrdinaryPokeballAtFullHealth: '39.9%'
      },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['piloswine'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 220,
      species: 'swinub',
      types: ['Ice', 'Ground'],
      weightkg: 6.5,
      aliases: ['urimuu']
    }
  ],
  [
    'piloswine',
    {
      abilities: { first: 'Oblivious', second: 'Snow Cloak', hidden: 'Thick Fat' },
      baseStats: { hp: 100, atk: 100, def: 80, spa: 60, spd: 60, spe: 50 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 1, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 33,
      evos: ['mamoswine'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 221,
      prevo: 'swinub',
      species: 'piloswine',
      types: ['Ice', 'Ground'],
      weightkg: 55.8,
      aliases: ['inomuu']
    }
  ],
  [
    'corsola',
    {
      abilities: {
        first: 'Hustle',
        second: 'Natural Cure',
        hidden: 'Regenerator'
      },
      baseStats: { hp: 65, atk: 55, def: 95, spa: 65, spd: 95, spe: 35 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Pink',
      eggGroups: ['Water 1', 'Water 3'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 1, spe: 0 },
      genderRatio: { male: '25%', female: '75%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      num: 222,
      otherFormes: ['corsolagalar'],
      species: 'corsola',
      types: ['Water', 'Rock'],
      weightkg: 5,
      aliases: ['saniigo']
    }
  ],
  [
    'corsolagalar',
    {
      abilities: {
        first: 'Weak Armor',
        second: 'Weak Armor',
        hidden: 'Cursed Body'
      },
      baseSpecies: 'Corsola',
      baseStats: { hp: 60, atk: 55, def: 100, spa: 65, spd: 100, spe: 30 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'White',
      eggGroups: ['Water 1', 'Water 3'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 1, spe: 0 },
      evos: ['cursola'],
      forme: 'Galar',
      formeLetter: 'G',
      genderRatio: { male: '25%', female: '75%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      num: 222,
      species: 'corsola-galar',
      types: ['Ghost'],
      weightkg: 0.5
    }
  ],
  [
    'remoraid',
    {
      abilities: { first: 'Hustle', second: 'Sniper', hidden: 'Moody' },
      baseStats: { hp: 35, atk: 65, def: 35, spa: 65, spd: 35, spe: 65 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Gray',
      eggGroups: ['Water 1', 'Water 2'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['octillery'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 223,
      species: 'remoraid',
      types: ['Water'],
      weightkg: 12,
      aliases: ['teppouo']
    }
  ],
  [
    'octillery',
    {
      abilities: { first: 'Suction Cups', second: 'Sniper', hidden: 'Moody' },
      baseStats: { hp: 75, atk: 105, def: 75, spa: 105, spd: 75, spe: 45 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Red',
      eggGroups: ['Water 1', 'Water 2'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 1, spd: 0, spe: 0 },
      evoLevel: 25,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 224,
      prevo: 'remoraid',
      species: 'octillery',
      types: ['Water'],
      weightkg: 28.5,
      aliases: ['okutan']
    }
  ],
  [
    'delibird',
    {
      abilities: { first: 'Vital Spirit', second: 'Hustle', hidden: 'Insomnia' },
      baseStats: { hp: 45, atk: 55, def: 45, spa: 65, spd: 45, spe: 75 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Water 1', 'Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      num: 225,
      species: 'delibird',
      types: ['Ice', 'Flying'],
      weightkg: 16,
      aliases: ['deribaado']
    }
  ],
  [
    'mantine',
    {
      abilities: {
        first: 'Swift Swim',
        second: 'Water Absorb',
        hidden: 'Water Veil'
      },
      baseStats: { hp: 85, atk: 40, def: 70, spa: 80, spd: 140, spe: 70 },
      catchRate: { base: 25, percentageWithOrdinaryPokeballAtFullHealth: '7.7%' },
      color: 'Purple',
      eggGroups: ['Water 1'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 'Level up with Remoraid in party',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.1,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 6425,
      num: 226,
      prevo: 'mantyke',
      species: 'mantine',
      types: ['Water', 'Flying'],
      weightkg: 220,
      aliases: ['mantain']
    }
  ],
  [
    'skarmory',
    {
      abilities: { first: 'Keen Eye', second: 'Sturdy', hidden: 'Weak Armor' },
      baseStats: { hp: 65, atk: 80, def: 140, spa: 40, spd: 70, spe: 70 },
      catchRate: { base: 25, percentageWithOrdinaryPokeballAtFullHealth: '7.7%' },
      color: 'Gray',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 6425,
      num: 227,
      species: 'skarmory',
      types: ['Steel', 'Flying'],
      weightkg: 50.5,
      aliases: ['eaamudo', 'skarm']
    }
  ],
  [
    'houndour',
    {
      abilities: { first: 'Early Bird', second: 'Flash Fire', hidden: 'Unnerve' },
      baseStats: { hp: 45, atk: 60, def: 30, spa: 80, spd: 50, spe: 65 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Black',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['houndoom'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 228,
      species: 'houndour',
      types: ['Dark', 'Fire'],
      weightkg: 10.8,
      aliases: ['derubiru']
    }
  ],
  [
    'houndoom',
    {
      abilities: { first: 'Early Bird', second: 'Flash Fire', hidden: 'Unnerve' },
      baseStats: { hp: 75, atk: 90, def: 50, spa: 110, spd: 80, spe: 95 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Black',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 24,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 229,
      otherFormes: ['houndoommega'],
      prevo: 'houndour',
      species: 'houndoom',
      types: ['Dark', 'Fire'],
      weightkg: 35,
      aliases: ['herugaa']
    }
  ],
  [
    'houndoommega',
    {
      abilities: { first: 'Solar Power' },
      baseSpecies: 'Houndoom',
      baseStats: { hp: 75, atk: 90, def: 90, spa: 140, spd: 90, spe: 115 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Black',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.9,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 229,
      species: 'houndoom-mega',
      types: ['Dark', 'Fire'],
      weightkg: 49.5,
      aliases: ['megadoom']
    }
  ],
  [
    'kingdra',
    {
      abilities: { first: 'Swift Swim', second: 'Sniper', hidden: 'Damp' },
      baseStats: { hp: 75, atk: 95, def: 95, spa: 95, spd: 95, spe: 85 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Dragon'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 1, spd: 1, spe: 0 },
      evoLevel: 'Trade while holding Dragon Scale',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 230,
      prevo: 'seadra',
      species: 'kingdra',
      types: ['Water', 'Dragon'],
      weightkg: 152,
      aliases: ['kingudora']
    }
  ],
  [
    'phanpy',
    {
      abilities: { first: 'Pickup', hidden: 'Sand Veil' },
      baseStats: { hp: 90, atk: 60, def: 60, spa: 40, spd: 40, spe: 40 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Blue',
      eggGroups: ['Field'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['donphan'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 231,
      species: 'phanpy',
      types: ['Ground'],
      weightkg: 33.5,
      aliases: ['gomazou']
    }
  ],
  [
    'donphan',
    {
      abilities: { first: 'Sturdy', hidden: 'Sand Veil' },
      baseStats: { hp: 90, atk: 120, def: 120, spa: 60, spd: 60, spe: 50 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 1, def: 1, spa: 0, spd: 0, spe: 0 },
      evoLevel: 25,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 232,
      prevo: 'phanpy',
      species: 'donphan',
      types: ['Ground'],
      weightkg: 120,
      aliases: ['donfan']
    }
  ],
  [
    'porygon2',
    {
      abilities: { first: 'Trace', second: 'Download', hidden: 'Analytic' },
      baseStats: { hp: 85, atk: 80, def: 90, spa: 105, spd: 95, spe: 60 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 'Trade while holding Up-Grade',
      evos: ['porygonz'],
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 233,
      prevo: 'porygon',
      species: 'porygon2',
      types: ['Normal'],
      weightkg: 32.5,
      aliases: ['p2', 'porigon2', 'pory2']
    }
  ],
  [
    'stantler',
    {
      abilities: { first: 'Intimidate', second: 'Frisk', hidden: 'Sap Sipper' },
      baseStats: { hp: 73, atk: 95, def: 62, spa: 85, spd: 65, spe: 85 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 234,
      species: 'stantler',
      types: ['Normal'],
      weightkg: 71.2,
      aliases: ['odoshishi']
    }
  ],
  [
    'smeargle',
    {
      abilities: { first: 'Own Tempo', second: 'Technician', hidden: 'Moody' },
      baseStats: { hp: 55, atk: 20, def: 35, spa: 20, spd: 45, spe: 75 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      num: 235,
      species: 'smeargle',
      types: ['Normal'],
      weightkg: 58,
      aliases: ['dooburu']
    }
  ],
  [
    'tyrogue',
    {
      abilities: { first: 'Guts', second: 'Steadfast', hidden: 'Vital Spirit' },
      baseStats: { hp: 35, atk: 35, def: 35, spa: 35, spd: 35, spe: 35 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['hitmonlee', 'hitmonchan', 'hitmontop'],
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 236,
      species: 'tyrogue',
      types: ['Fighting'],
      weightkg: 21,
      aliases: ['barukii']
    }
  ],
  [
    'hitmontop',
    {
      abilities: {
        first: 'Intimidate',
        second: 'Technician',
        hidden: 'Steadfast'
      },
      baseStats: { hp: 50, atk: 95, def: 95, spa: 35, spd: 110, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 'Level 20 with Attack = Defense',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 237,
      prevo: 'tyrogue',
      species: 'hitmontop',
      types: ['Fighting'],
      weightkg: 48,
      aliases: ['kapoeraa']
    }
  ],
  [
    'smoochum',
    {
      abilities: { first: 'Oblivious', second: 'Forewarn', hidden: 'Hydration' },
      baseStats: { hp: 45, atk: 30, def: 15, spa: 85, spd: 65, spe: 65 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Pink',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['jynx'],
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 238,
      species: 'smoochum',
      types: ['Ice', 'Psychic'],
      weightkg: 6,
      aliases: ['muchuuru']
    }
  ],
  [
    'elekid',
    {
      abilities: { first: 'Static', hidden: 'Vital Spirit' },
      baseStats: { hp: 45, atk: 63, def: 37, spa: 65, spd: 55, spe: 95 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['electabuzz'],
      genderRatio: { male: '75%', female: '25%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 239,
      species: 'elekid',
      types: ['Electric'],
      weightkg: 23.5,
      aliases: ['erekiddo']
    }
  ],
  [
    'magby',
    {
      abilities: { first: 'Flame Body', hidden: 'Vital Spirit' },
      baseStats: { hp: 45, atk: 75, def: 37, spa: 70, spd: 55, spe: 83 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['magmar'],
      genderRatio: { male: '75%', female: '25%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 240,
      species: 'magby',
      types: ['Fire'],
      weightkg: 21.4,
      aliases: ['buby']
    }
  ],
  [
    'miltank',
    {
      abilities: { first: 'Thick Fat', second: 'Scrappy', hidden: 'Sap Sipper' },
      baseStats: { hp: 95, atk: 80, def: 105, spa: 40, spd: 70, spe: 100 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Pink',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '100%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 241,
      species: 'miltank',
      types: ['Normal'],
      weightkg: 75.5,
      aliases: ['mirutanku']
    }
  ],
  [
    'blissey',
    {
      abilities: {
        first: 'Natural Cure',
        second: 'Serene Grace',
        hidden: 'Healer'
      },
      baseStats: { hp: 255, atk: 10, def: 10, spa: 75, spd: 135, spe: 55 },
      catchRate: { base: 30, percentageWithOrdinaryPokeballAtFullHealth: '8.8%' },
      color: 'Pink',
      eggGroups: ['Fairy'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 2,
      genderRatio: { male: '0%', female: '100%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 10280,
      num: 242,
      prevo: 'chansey',
      species: 'blissey',
      types: ['Normal'],
      weightkg: 46.8,
      aliases: ['bliss', 'hapinasu']
    }
  ],
  [
    'raikou',
    {
      abilities: { first: 'Pressure', hidden: 'Inner Focus' },
      baseStats: { hp: 90, atk: 85, def: 75, spa: 115, spd: 100, spe: 115 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 2 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.9,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 20560,
      num: 243,
      species: 'raikou',
      types: ['Electric'],
      weightkg: 178,
      aliases: ['kou']
    }
  ],
  [
    'entei',
    {
      abilities: { first: 'Pressure', hidden: 'Inner Focus' },
      baseStats: { hp: 115, atk: 115, def: 85, spa: 90, spd: 75, spe: 100 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Brown',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 1, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.1,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 20560,
      num: 244,
      species: 'entei',
      types: ['Fire'],
      weightkg: 198
    }
  ],
  [
    'suicune',
    {
      abilities: { first: 'Pressure', hidden: 'Inner Focus' },
      baseStats: { hp: 100, atk: 75, def: 115, spa: 90, spd: 115, spe: 85 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 2, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 20560,
      num: 245,
      species: 'suicune',
      types: ['Water'],
      weightkg: 187,
      aliases: ['cune', 'sui', 'suikun']
    }
  ],
  [
    'larvitar',
    {
      abilities: { first: 'Guts', hidden: 'Sand Veil' },
      baseStats: { hp: 50, atk: 64, def: 50, spa: 45, spd: 50, spe: 41 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Monster'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['pupitar'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 246,
      species: 'larvitar',
      types: ['Rock', 'Ground'],
      weightkg: 72,
      aliases: ['yoogirasu']
    }
  ],
  [
    'pupitar',
    {
      abilities: { first: 'Shed Skin' },
      baseStats: { hp: 70, atk: 84, def: 70, spa: 65, spd: 70, spe: 51 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Gray',
      eggGroups: ['Monster'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 30,
      evos: ['tyranitar'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 247,
      prevo: 'larvitar',
      species: 'pupitar',
      types: ['Rock', 'Ground'],
      weightkg: 152,
      aliases: ['sanagirasu']
    }
  ],
  [
    'tyranitar',
    {
      abilities: { first: 'Sand Stream', hidden: 'Unnerve' },
      baseStats: { hp: 100, atk: 134, def: 110, spa: 95, spd: 100, spe: 61 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Monster'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 55,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 248,
      otherFormes: ['tyranitarmega'],
      prevo: 'pupitar',
      species: 'tyranitar',
      types: ['Rock', 'Dark'],
      weightkg: 202,
      aliases: ['bangirasu', 'ttar']
    }
  ],
  [
    'tyranitarmega',
    {
      abilities: { first: 'Sand Stream' },
      baseSpecies: 'Tyranitar',
      baseStats: { hp: 100, atk: 164, def: 150, spa: 95, spd: 120, spe: 71 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Monster'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 248,
      species: 'tyranitar-mega',
      types: ['Rock', 'Dark'],
      weightkg: 255,
      aliases: ['megattar']
    }
  ],
  [
    'lugia',
    {
      abilities: { first: 'Pressure', hidden: 'Multiscale' },
      baseStats: { hp: 106, atk: 90, def: 130, spa: 90, spd: 154, spe: 110 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'White',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 3, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 5.2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 249,
      species: 'lugia',
      types: ['Psychic', 'Flying'],
      weightkg: 216,
      aliases: ['rugia']
    }
  ],
  [
    'hooh',
    {
      abilities: { first: 'Pressure', hidden: 'Regenerator' },
      baseStats: { hp: 106, atk: 130, def: 90, spa: 110, spd: 154, spe: 90 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Red',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 3, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 3.8,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 250,
      specialBulbapediaUrl: 'Ho-Oh',
      species: 'ho-oh',
      types: ['Fire', 'Flying'],
      weightkg: 199,
      aliases: ['ho-oh', 'houou']
    }
  ],
  [
    'celebi',
    {
      abilities: { first: 'Natural Cure' },
      baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.6,
      isEggObtainable: false,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 30840,
      num: 251,
      species: 'celebi',
      types: ['Psychic', 'Grass'],
      weightkg: 5,
      aliases: ['serebii', 'sereby']
    }
  ]
];

for (const [name, data] of entries) {
  Pokedex.set(name, data);
}
