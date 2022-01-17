import { Pokedex } from '#dexdata/pokedex';
import type { PokemonTypes } from '#utils/pokemon';

const entries: [string, PokemonTypes.DexEntry][] = [
  [
    'chespin',
    {
      abilities: { first: 'Overgrow', hidden: 'Bulletproof' },
      baseStats: { hp: 56, atk: 61, def: 65, spa: 48, spd: 45, spe: 38 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['quilladin'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 650,
      species: 'chespin',
      types: ['Grass'],
      weightkg: 9,
      aliases: ['harimaron']
    }
  ],
  [
    'quilladin',
    {
      abilities: { first: 'Overgrow', hidden: 'Bulletproof' },
      baseStats: { hp: 61, atk: 78, def: 95, spa: 56, spd: 58, spe: 57 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 16,
      evos: ['chesnaught'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 651,
      prevo: 'chespin',
      species: 'quilladin',
      types: ['Grass'],
      weightkg: 29,
      aliases: ['hariboogu']
    }
  ],
  [
    'chesnaught',
    {
      abilities: { first: 'Overgrow', hidden: 'Bulletproof' },
      baseStats: { hp: 88, atk: 107, def: 122, spa: 74, spd: 75, spe: 64 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 3, spa: 0, spd: 0, spe: 0 },
      evoLevel: 36,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 652,
      prevo: 'quilladin',
      species: 'chesnaught',
      types: ['Grass', 'Fighting'],
      weightkg: 90,
      aliases: ['burigaron']
    }
  ],
  [
    'fennekin',
    {
      abilities: { first: 'Blaze', hidden: 'Magician' },
      baseStats: { hp: 40, atk: 45, def: 40, spa: 62, spd: 60, spe: 60 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['braixen'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 653,
      species: 'fennekin',
      types: ['Fire'],
      weightkg: 9.4,
      aliases: ['fokko']
    }
  ],
  [
    'braixen',
    {
      abilities: { first: 'Blaze', hidden: 'Magician' },
      baseStats: { hp: 59, atk: 59, def: 58, spa: 90, spd: 70, spe: 73 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 16,
      evos: ['delphox'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 654,
      prevo: 'fennekin',
      species: 'braixen',
      types: ['Fire'],
      weightkg: 14.5,
      aliases: ['teerunaa']
    }
  ],
  [
    'delphox',
    {
      abilities: { first: 'Blaze', hidden: 'Magician' },
      baseStats: { hp: 75, atk: 69, def: 72, spa: 114, spd: 100, spe: 104 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: 36,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 655,
      prevo: 'braixen',
      species: 'delphox',
      types: ['Fire', 'Psychic'],
      weightkg: 39,
      aliases: ['mafokushii']
    }
  ],
  [
    'froakie',
    {
      abilities: { first: 'Torrent', hidden: 'Protean' },
      baseStats: { hp: 41, atk: 56, def: 40, spa: 62, spd: 44, spe: 71 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['frogadier'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 656,
      species: 'froakie',
      types: ['Water'],
      weightkg: 7,
      aliases: ['keromatsu']
    }
  ],
  [
    'frogadier',
    {
      abilities: { first: 'Torrent', hidden: 'Protean' },
      baseStats: { hp: 54, atk: 63, def: 52, spa: 83, spd: 56, spe: 97 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 16,
      evos: ['greninja'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 657,
      prevo: 'froakie',
      species: 'frogadier',
      types: ['Water'],
      weightkg: 10.9,
      aliases: ['gekogashira']
    }
  ],
  [
    'greninja',
    {
      abilities: { first: 'Torrent', hidden: 'Protean', special: 'Battle Bond' },
      baseStats: { hp: 72, atk: 95, def: 67, spa: 103, spd: 71, spe: 122 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      evoLevel: 36,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 658,
      otherFormes: ['greninjaash'],
      prevo: 'frogadier',
      species: 'greninja',
      types: ['Water', 'Dark'],
      weightkg: 40,
      aliases: ['gekkouga', 'gren']
    }
  ],
  [
    'greninjaash',
    {
      abilities: { first: 'Battle Bond' },
      baseSpecies: 'Greninja',
      baseStats: { hp: 72, atk: 145, def: 67, spa: 153, spd: 71, spe: 132 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      forme: 'Ash',
      formeLetter: 'A',
      genderRatio: { male: '100%', female: '0%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 658,
      species: 'greninja-ash',
      types: ['Water', 'Dark'],
      weightkg: 40,
      aliases: ['ashgren', 'ashgreninja', 'bondgreninja', 'gekkougasatoshi', 'satoshigekkouga']
    }
  ],
  [
    'bunnelby',
    {
      abilities: { first: 'Pickup', second: 'Cheek Pouch', hidden: 'Huge Power' },
      baseStats: { hp: 38, atk: 36, def: 38, spa: 32, spd: 36, spe: 57 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['diggersby'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 659,
      species: 'bunnelby',
      types: ['Normal'],
      weightkg: 5,
      aliases: ['horubii']
    }
  ],
  [
    'diggersby',
    {
      abilities: { first: 'Pickup', second: 'Cheek Pouch', hidden: 'Huge Power' },
      baseStats: { hp: 85, atk: 56, def: 77, spa: 50, spd: 77, spe: 78 },
      catchRate: { base: 127, percentageWithOrdinaryPokeballAtFullHealth: '26%' },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 20,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 660,
      prevo: 'bunnelby',
      species: 'diggersby',
      types: ['Normal', 'Ground'],
      weightkg: 42.4,
      aliases: ['horuudo']
    }
  ],
  [
    'fletchling',
    {
      abilities: { first: 'Big Pecks', hidden: 'Gale Wings' },
      baseStats: { hp: 45, atk: 50, def: 43, spa: 40, spd: 38, spe: 62 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Red',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['fletchinder'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 661,
      species: 'fletchling',
      types: ['Normal', 'Flying'],
      weightkg: 1.7,
      aliases: ['yayakoma']
    }
  ],
  [
    'fletchinder',
    {
      abilities: { first: 'Flame Body', hidden: 'Gale Wings' },
      baseStats: { hp: 62, atk: 73, def: 55, spa: 56, spd: 52, spe: 84 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Red',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 17,
      evos: ['talonflame'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 662,
      prevo: 'fletchling',
      species: 'fletchinder',
      types: ['Fire', 'Flying'],
      weightkg: 16,
      aliases: ['hinoyakoma', 'linda']
    }
  ],
  [
    'talonflame',
    {
      abilities: { first: 'Flame Body', hidden: 'Gale Wings' },
      baseStats: { hp: 78, atk: 81, def: 71, spa: 74, spd: 69, spe: 126 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      evoLevel: 35,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 663,
      prevo: 'fletchinder',
      species: 'talonflame',
      types: ['Fire', 'Flying'],
      weightkg: 24.5,
      aliases: ['faiaroo', 'smogonbird', 'talon', 'tflame']
    }
  ],
  [
    'scatterbug',
    {
      abilities: {
        first: 'Shield Dust',
        second: 'Compound Eyes',
        hidden: 'Friend Guard'
      },
      baseStats: { hp: 38, atk: 35, def: 40, spa: 27, spd: 25, spe: 35 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Black',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['spewpa'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 664,
      species: 'scatterbug',
      types: ['Bug'],
      weightkg: 2.5,
      aliases: ['kofukimushi']
    }
  ],
  [
    'spewpa',
    {
      abilities: { first: 'Shed Skin', hidden: 'Friend Guard' },
      baseStats: { hp: 45, atk: 22, def: 60, spa: 27, spd: 30, spe: 29 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Black',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 9,
      evos: ['vivillon'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 665,
      prevo: 'scatterbug',
      species: 'spewpa',
      types: ['Bug'],
      weightkg: 8.4,
      aliases: ['kofuurai']
    }
  ],
  [
    'vivillon',
    {
      abilities: {
        first: 'Shield Dust',
        second: 'Compound Eyes',
        hidden: 'Friend Guard'
      },
      baseForme: 'Meadow',
      baseStats: { hp: 80, atk: 52, def: 50, spa: 90, spd: 50, spe: 89 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'White',
      cosmeticFormes: [
        'Vivillon-Archipelago',
        'Vivillon-Continental',
        'Vivillon-Elegant',
        'Vivillon-Garden',
        'Vivillon-High Plains',
        'Vivillon-Icy Snow',
        'Vivillon-Jungle',
        'Vivillon-Marine',
        'Vivillon-Modern',
        'Vivillon-Monsoon',
        'Vivillon-Ocean',
        'Vivillon-Polar',
        'Vivillon-River',
        'Vivillon-Sandstorm',
        'Vivillon-Savanna',
        'Vivillon-Sun',
        'Vivillon-Tundra'
      ],
      eggGroups: ['Bug'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 1, spd: 0, spe: 1 },
      evoLevel: 12,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 666,
      otherFormes: ['vivillonfancy', 'vivillonpokeball'],
      prevo: 'spewpa',
      species: 'vivillon',
      types: ['Bug', 'Flying'],
      weightkg: 17,
      aliases: [
        'bibiyon',
        'vivillonarchipelago',
        'vivilloncontinental',
        'vivillonelegant',
        'vivillongarden',
        'vivillonhighplains',
        'vivillonicysnow',
        'vivillonjungle',
        'vivillonmarine',
        'vivillonmeadow',
        'vivillonmodern',
        'vivillonmonsoon',
        'vivillonocean',
        'vivillonpolar',
        'vivillonriver',
        'vivillonsandstorm',
        'vivillonsavanna',
        'vivillonsun',
        'vivillontundra'
      ]
    }
  ],
  [
    'vivillonfancy',
    {
      abilities: { first: 'Shield Dust', second: 'Compound Eyes' },
      baseSpecies: 'Vivillon',
      baseStats: { hp: 80, atk: 52, def: 50, spa: 90, spd: 50, spe: 89 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Black',
      eggGroups: ['Bug'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 1, spd: 0, spe: 1 },
      forme: 'Fancy',
      formeLetter: 'F',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 666,
      species: 'vivillon-fancy',
      types: ['Bug', 'Flying'],
      weightkg: 17
    }
  ],
  [
    'vivillonpokeball',
    {
      abilities: { first: 'Shield Dust', second: 'Compound Eyes' },
      baseSpecies: 'Vivillon',
      baseStats: { hp: 80, atk: 52, def: 50, spa: 90, spd: 50, spe: 89 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Black',
      eggGroups: ['Bug'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 1, spd: 0, spe: 1 },
      forme: 'Pokeball',
      formeLetter: 'P',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 666,
      species: 'vivillon-pokeball',
      types: ['Bug', 'Flying'],
      weightkg: 17
    }
  ],
  [
    'litleo',
    {
      abilities: { first: 'Rivalry', second: 'Unnerve', hidden: 'Moxie' },
      baseStats: { hp: 62, atk: 50, def: 58, spa: 73, spd: 54, spe: 72 },
      catchRate: {
        base: 220,
        percentageWithOrdinaryPokeballAtFullHealth: '39.3%'
      },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['pyroar'],
      genderRatio: { male: '12.5%', female: '87.5%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 667,
      species: 'litleo',
      types: ['Fire', 'Normal'],
      weightkg: 13.5,
      aliases: ['shishiko']
    }
  ],
  [
    'pyroar',
    {
      abilities: { first: 'Rivalry', second: 'Unnerve', hidden: 'Moxie' },
      baseStats: { hp: 86, atk: 68, def: 72, spa: 109, spd: 66, spe: 106 },
      catchRate: { base: 65, percentageWithOrdinaryPokeballAtFullHealth: '15.7%' },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 35,
      genderRatio: { male: '12.5%', female: '87.5%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 668,
      prevo: 'litleo',
      species: 'pyroar',
      types: ['Fire', 'Normal'],
      weightkg: 81.5,
      aliases: ['kaenjishi']
    }
  ],
  [
    'flabebe',
    {
      abilities: { first: 'Flower Veil', hidden: 'Symbiosis' },
      baseForme: 'Red',
      baseStats: { hp: 44, atk: 38, def: 39, spa: 61, spd: 79, spe: 42 },
      catchRate: {
        base: 225,
        percentageWithOrdinaryPokeballAtFullHealth: '39.9%'
      },
      color: 'White',
      cosmeticFormes: ['Flabébé-Blue', 'Flabébé-Orange', 'Flabébé-White', 'Flabébé-Yellow'],
      eggGroups: ['Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['floette'],
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 669,
      specialBulbapediaUrl: 'Flabébé',
      species: 'flabebe',
      types: ['Fairy'],
      weightkg: 0.1,
      aliases: [
        'flabb',
        'flabbblue',
        'flabborange',
        'flabbred',
        'flabbwhite',
        'flabbyellow',
        'flabebeblue',
        'flabebeorange',
        'flabebered',
        'flabebewhite',
        'flabebeyellow',
        'furabebe'
      ]
    }
  ],
  [
    'floette',
    {
      abilities: { first: 'Flower Veil', hidden: 'Symbiosis' },
      baseForme: 'Red',
      baseStats: { hp: 54, atk: 45, def: 47, spa: 75, spd: 98, spe: 52 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'White',
      cosmeticFormes: ['Floette-Blue', 'Floette-Orange', 'Floette-White', 'Floette-Yellow'],
      eggGroups: ['Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 19,
      evos: ['florges'],
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 670,
      prevo: 'flabebe',
      species: 'floette',
      types: ['Fairy'],
      weightkg: 0.9,
      aliases: ['floetteblue', 'floetteorange', 'floettered', 'floettewhite', 'floetteyellow', 'furaette']
    }
  ],
  [
    'floetteeternal',
    {
      abilities: { first: 'Flower Veil' },
      baseSpecies: 'Floette',
      baseStats: { hp: 74, atk: 65, def: 67, spa: 125, spd: 128, spe: 92 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'White',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      forme: 'Eternal',
      formeLetter: 'E',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 670,
      species: 'floette-eternal',
      types: ['Fairy'],
      weightkg: 0.9,
      aliases: ['eternalfloette', 'floettee', 'floetteeternalflower']
    }
  ],
  [
    'florges',
    {
      abilities: { first: 'Flower Veil', hidden: 'Symbiosis' },
      baseForme: 'Red',
      baseStats: { hp: 78, atk: 65, def: 68, spa: 112, spd: 154, spe: 75 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'White',
      cosmeticFormes: ['Florges-Blue', 'Florges-Orange', 'Florges-White', 'Florges-Yellow'],
      eggGroups: ['Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 3, spe: 0 },
      evoLevel: 19,
      genderRatio: { male: '0%', female: '100%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 671,
      prevo: 'floette',
      species: 'florges',
      types: ['Fairy'],
      weightkg: 10,
      aliases: ['florgesblue', 'florgesorange', 'florgesred', 'florgeswhite', 'florgesyellow', 'furaajesu']
    }
  ],
  [
    'skiddo',
    {
      abilities: { first: 'Sap Sipper', hidden: 'Grass Pelt' },
      baseStats: { hp: 66, atk: 65, def: 48, spa: 62, spd: 57, spe: 52 },
      catchRate: {
        base: 200,
        percentageWithOrdinaryPokeballAtFullHealth: '36.6%'
      },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['gogoat'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 672,
      species: 'skiddo',
      types: ['Grass'],
      weightkg: 31,
      aliases: ['meeekuru']
    }
  ],
  [
    'gogoat',
    {
      abilities: { first: 'Sap Sipper', hidden: 'Grass Pelt' },
      baseStats: { hp: 123, atk: 100, def: 62, spa: 97, spd: 81, spe: 68 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 32,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 673,
      prevo: 'skiddo',
      species: 'gogoat',
      types: ['Grass'],
      weightkg: 91,
      aliases: ['googooto']
    }
  ],
  [
    'pancham',
    {
      abilities: { first: 'Iron Fist', second: 'Mold Breaker', hidden: 'Scrappy' },
      baseStats: { hp: 67, atk: 82, def: 62, spa: 46, spd: 48, spe: 43 },
      catchRate: {
        base: 220,
        percentageWithOrdinaryPokeballAtFullHealth: '39.3%'
      },
      color: 'White',
      eggGroups: ['Field', 'Human-Like'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['pangoro'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 674,
      species: 'pancham',
      types: ['Fighting'],
      weightkg: 8,
      aliases: ['yanchamu']
    }
  ],
  [
    'pangoro',
    {
      abilities: { first: 'Iron Fist', second: 'Mold Breaker', hidden: 'Scrappy' },
      baseStats: { hp: 95, atk: 124, def: 78, spa: 69, spd: 71, spe: 58 },
      catchRate: { base: 65, percentageWithOrdinaryPokeballAtFullHealth: '15.7%' },
      color: 'White',
      eggGroups: ['Field', 'Human-Like'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Level 32 with Dark Type in Party',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 675,
      prevo: 'pancham',
      species: 'pangoro',
      types: ['Fighting', 'Dark'],
      weightkg: 136,
      aliases: ['goronda']
    }
  ],
  [
    'furfrou',
    {
      abilities: { first: 'Fur Coat' },
      baseForme: 'Natural',
      baseStats: { hp: 75, atk: 80, def: 60, spa: 65, spd: 90, spe: 102 },
      catchRate: {
        base: 160,
        percentageWithOrdinaryPokeballAtFullHealth: '30.9%'
      },
      color: 'White',
      cosmeticFormes: [
        'Furfrou-Dandy',
        'Furfrou-Debutante',
        'Furfrou-Diamond',
        'Furfrou-Heart',
        'Furfrou-Kabuki',
        'Furfrou-La Reine',
        'Furfrou-Matron',
        'Furfrou-Pharaoh',
        'Furfrou-Star'
      ],
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 676,
      species: 'furfrou',
      types: ['Normal'],
      weightkg: 28,
      aliases: [
        'furfroudandy',
        'furfroudebutante',
        'furfroudiamond',
        'furfrouheart',
        'furfroukabuki',
        'furfroulareine',
        'furfroumatron',
        'furfrounatural',
        'furfroupharaoh',
        'furfroustar',
        'torimian'
      ]
    }
  ],
  [
    'espurr',
    {
      abilities: { first: 'Keen Eye', second: 'Infiltrator', hidden: 'Own Tempo' },
      baseStats: { hp: 62, atk: 48, def: 54, spa: 63, spd: 60, spe: 68 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['meowstic'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 677,
      species: 'espurr',
      types: ['Psychic'],
      weightkg: 3.5,
      aliases: ['nyasupaa']
    }
  ],
  [
    'meowstic',
    {
      abilities: { first: 'Keen Eye', second: 'Infiltrator', hidden: 'Prankster' },
      baseForme: 'M',
      baseStats: { hp: 74, atk: 48, def: 76, spa: 83, spd: 81, spe: 104 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Blue',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 25,
      genderRatio: { male: '100%', female: '0%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 678,
      otherFormes: ['meowsticf'],
      prevo: 'espurr',
      species: 'meowstic',
      types: ['Psychic'],
      weightkg: 8.5,
      aliases: ['meowsticm', 'meowsticmale', 'nyaonikusu']
    }
  ],
  [
    'meowsticf',
    {
      abilities: {
        first: 'Keen Eye',
        second: 'Infiltrator',
        hidden: 'Competitive'
      },
      baseSpecies: 'Meowstic',
      baseStats: { hp: 74, atk: 48, def: 76, spa: 83, spd: 81, spe: 104 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 25,
      forme: 'F',
      formeLetter: 'F',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 678,
      prevo: 'espurr',
      species: 'meowstic-f',
      types: ['Psychic'],
      weightkg: 8.5,
      aliases: ['meowsticfemale']
    }
  ],
  [
    'honedge',
    {
      abilities: { first: 'No Guard' },
      baseStats: { hp: 45, atk: 80, def: 100, spa: 35, spd: 37, spe: 28 },
      catchRate: {
        base: 180,
        percentageWithOrdinaryPokeballAtFullHealth: '33.8%'
      },
      color: 'Brown',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['doublade'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 679,
      species: 'honedge',
      types: ['Steel', 'Ghost'],
      weightkg: 2,
      aliases: ['hitotsuki']
    }
  ],
  [
    'doublade',
    {
      abilities: { first: 'No Guard' },
      baseStats: { hp: 59, atk: 110, def: 150, spa: 45, spd: 49, spe: 35 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Brown',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 35,
      evos: ['aegislash'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 680,
      prevo: 'honedge',
      species: 'doublade',
      types: ['Steel', 'Ghost'],
      weightkg: 4.5,
      aliases: ['nidangiru']
    }
  ],
  [
    'aegislash',
    {
      abilities: { first: 'Stance Change' },
      baseForme: 'Shield',
      baseStats: { hp: 60, atk: 50, def: 150, spa: 50, spd: 150, spe: 60 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 1, spe: 0 },
      evoLevel: 35,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 681,
      otherFormes: ['aegislashblade'],
      prevo: 'doublade',
      species: 'aegislash',
      types: ['Steel', 'Ghost'],
      weightkg: 53,
      aliases: ['aegi', 'aegis', 'aegislashs', 'aegislashshield', 'girugarudo']
    }
  ],
  [
    'aegislashblade',
    {
      abilities: { first: 'Stance Change' },
      baseSpecies: 'Aegislash',
      baseStats: { hp: 60, atk: 150, def: 50, spa: 150, spd: 50, spe: 60 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 1, spd: 0, spe: 0 },
      evoLevel: 35,
      forme: 'Blade',
      formeLetter: 'B',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 681,
      prevo: 'doublade',
      species: 'aegislash-blade',
      types: ['Steel', 'Ghost'],
      weightkg: 53,
      aliases: ['aegiblade']
    }
  ],
  [
    'spritzee',
    {
      abilities: { first: 'Healer', hidden: 'Aroma Veil' },
      baseStats: { hp: 78, atk: 52, def: 60, spa: 63, spd: 65, spe: 23 },
      catchRate: {
        base: 200,
        percentageWithOrdinaryPokeballAtFullHealth: '36.6%'
      },
      color: 'Pink',
      eggGroups: ['Fairy'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['aromatisse'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 682,
      species: 'spritzee',
      types: ['Fairy'],
      weightkg: 0.5,
      aliases: ['shushupu']
    }
  ],
  [
    'aromatisse',
    {
      abilities: { first: 'Healer', hidden: 'Aroma Veil' },
      baseStats: { hp: 101, atk: 72, def: 72, spa: 99, spd: 89, spe: 29 },
      catchRate: { base: 140, percentageWithOrdinaryPokeballAtFullHealth: '28%' },
      color: 'Pink',
      eggGroups: ['Fairy'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Trade while holding Sachet',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 683,
      prevo: 'spritzee',
      species: 'aromatisse',
      types: ['Fairy'],
      weightkg: 15.5,
      aliases: ['furefuwan']
    }
  ],
  [
    'swirlix',
    {
      abilities: { first: 'Sweet Veil', hidden: 'Unburden' },
      baseStats: { hp: 62, atk: 48, def: 66, spa: 59, spd: 57, spe: 49 },
      catchRate: {
        base: 200,
        percentageWithOrdinaryPokeballAtFullHealth: '36.6%'
      },
      color: 'White',
      eggGroups: ['Fairy'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['slurpuff'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 684,
      species: 'swirlix',
      types: ['Fairy'],
      weightkg: 3.5,
      aliases: ['peroppafu']
    }
  ],
  [
    'slurpuff',
    {
      abilities: { first: 'Sweet Veil', hidden: 'Unburden' },
      baseStats: { hp: 82, atk: 80, def: 86, spa: 85, spd: 75, spe: 72 },
      catchRate: { base: 140, percentageWithOrdinaryPokeballAtFullHealth: '28%' },
      color: 'White',
      eggGroups: ['Fairy'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Trade while holding Whipped Dream',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 685,
      prevo: 'swirlix',
      species: 'slurpuff',
      types: ['Fairy'],
      weightkg: 5,
      aliases: ['peroriimu']
    }
  ],
  [
    'inkay',
    {
      abilities: {
        first: 'Contrary',
        second: 'Suction Cups',
        hidden: 'Infiltrator'
      },
      baseStats: { hp: 53, atk: 54, def: 53, spa: 37, spd: 46, spe: 45 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Blue',
      eggGroups: ['Water 1', 'Water 2'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['malamar'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 686,
      species: 'inkay',
      types: ['Dark', 'Psychic'],
      weightkg: 3.5,
      aliases: ['maaiika']
    }
  ],
  [
    'malamar',
    {
      abilities: {
        first: 'Contrary',
        second: 'Suction Cups',
        hidden: 'Infiltrator'
      },
      baseStats: { hp: 86, atk: 92, def: 88, spa: 68, spd: 75, spe: 73 },
      catchRate: { base: 80, percentageWithOrdinaryPokeballAtFullHealth: '18.4%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Water 2'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Level 30, Flip device upside down',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 687,
      prevo: 'inkay',
      species: 'malamar',
      types: ['Dark', 'Psychic'],
      weightkg: 47,
      aliases: ['karamanero']
    }
  ],
  [
    'binacle',
    {
      abilities: { first: 'Tough Claws', second: 'Sniper', hidden: 'Pickpocket' },
      baseStats: { hp: 42, atk: 52, def: 67, spa: 39, spd: 56, spe: 50 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Brown',
      eggGroups: ['Water 3'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['barbaracle'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 688,
      species: 'binacle',
      types: ['Rock', 'Water'],
      weightkg: 31,
      aliases: ['kametete']
    }
  ],
  [
    'barbaracle',
    {
      abilities: { first: 'Tough Claws', second: 'Sniper', hidden: 'Pickpocket' },
      baseStats: { hp: 72, atk: 105, def: 115, spa: 54, spd: 86, spe: 68 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Water 3'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 39,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 689,
      prevo: 'binacle',
      species: 'barbaracle',
      types: ['Rock', 'Water'],
      weightkg: 96,
      aliases: ['gamenodesu']
    }
  ],
  [
    'skrelp',
    {
      abilities: {
        first: 'Poison Point',
        second: 'Poison Touch',
        hidden: 'Adaptability'
      },
      baseStats: { hp: 50, atk: 60, def: 60, spa: 60, spd: 60, spe: 30 },
      catchRate: {
        base: 225,
        percentageWithOrdinaryPokeballAtFullHealth: '39.9%'
      },
      color: 'Brown',
      eggGroups: ['Water 1', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['dragalge'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 690,
      species: 'skrelp',
      types: ['Poison', 'Water'],
      weightkg: 7.3,
      aliases: ['kuzumoo']
    }
  ],
  [
    'dragalge',
    {
      abilities: {
        first: 'Poison Point',
        second: 'Poison Touch',
        hidden: 'Adaptability'
      },
      baseStats: { hp: 65, atk: 75, def: 90, spa: 97, spd: 123, spe: 44 },
      catchRate: { base: 55, percentageWithOrdinaryPokeballAtFullHealth: '13.9%' },
      color: 'Brown',
      eggGroups: ['Water 1', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 48,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 691,
      prevo: 'skrelp',
      species: 'dragalge',
      types: ['Poison', 'Dragon'],
      weightkg: 81.5,
      aliases: ['doramidoro']
    }
  ],
  [
    'clauncher',
    {
      abilities: { first: 'Mega Launcher' },
      baseStats: { hp: 50, atk: 53, def: 62, spa: 58, spd: 63, spe: 44 },
      catchRate: {
        base: 225,
        percentageWithOrdinaryPokeballAtFullHealth: '39.9%'
      },
      color: 'Blue',
      eggGroups: ['Water 1', 'Water 3'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['clawitzer'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 3855,
      num: 692,
      species: 'clauncher',
      types: ['Water'],
      weightkg: 8.3,
      aliases: ['udeppou']
    }
  ],
  [
    'clawitzer',
    {
      abilities: { first: 'Mega Launcher' },
      baseStats: { hp: 71, atk: 73, def: 88, spa: 120, spd: 89, spe: 59 },
      catchRate: { base: 55, percentageWithOrdinaryPokeballAtFullHealth: '13.9%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Water 3'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 37,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 3855,
      num: 693,
      prevo: 'clauncher',
      species: 'clawitzer',
      types: ['Water'],
      weightkg: 35.3,
      aliases: ['burosutaa']
    }
  ],
  [
    'helioptile',
    {
      abilities: { first: 'Dry Skin', second: 'Sand Veil', hidden: 'Solar Power' },
      baseStats: { hp: 44, atk: 38, def: 33, spa: 61, spd: 43, spe: 70 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Monster', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['heliolisk'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 694,
      species: 'helioptile',
      types: ['Electric', 'Normal'],
      weightkg: 6,
      aliases: ['erikiteru']
    }
  ],
  [
    'heliolisk',
    {
      abilities: { first: 'Dry Skin', second: 'Sand Veil', hidden: 'Solar Power' },
      baseStats: { hp: 62, atk: 55, def: 52, spa: 109, spd: 94, spe: 109 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Yellow',
      eggGroups: ['Monster', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 1 },
      evoLevel: 'use Sun Stone',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 695,
      prevo: 'helioptile',
      species: 'heliolisk',
      types: ['Electric', 'Normal'],
      weightkg: 21,
      aliases: ['erezaado']
    }
  ],
  [
    'tyrunt',
    {
      abilities: { first: 'Strong Jaw', hidden: 'Sturdy' },
      baseStats: { hp: 58, atk: 89, def: 77, spa: 45, spd: 45, spe: 48 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Monster', 'Dragon'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['tyrantrum'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 7710,
      num: 696,
      species: 'tyrunt',
      types: ['Rock', 'Dragon'],
      weightkg: 26,
      aliases: ['chigorasu']
    }
  ],
  [
    'tyrantrum',
    {
      abilities: { first: 'Strong Jaw', hidden: 'Rock Head' },
      baseStats: { hp: 82, atk: 121, def: 119, spa: 69, spd: 59, spe: 71 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Monster', 'Dragon'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: '39 Daytime',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 2.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 7710,
      num: 697,
      prevo: 'tyrunt',
      species: 'tyrantrum',
      types: ['Rock', 'Dragon'],
      weightkg: 270,
      aliases: ['gachigorasu']
    }
  ],
  [
    'amaura',
    {
      abilities: { first: 'Refrigerate', hidden: 'Snow Warning' },
      baseStats: { hp: 77, atk: 59, def: 50, spa: 67, spd: 63, spe: 46 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Monster'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['aurorus'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 7710,
      num: 698,
      species: 'amaura',
      types: ['Rock', 'Ice'],
      weightkg: 25.2,
      aliases: ['amarusu']
    }
  ],
  [
    'aurorus',
    {
      abilities: { first: 'Refrigerate', hidden: 'Snow Warning' },
      baseStats: { hp: 123, atk: 77, def: 72, spa: 99, spd: 92, spe: 58 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Monster'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: '39 Nighttime',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 2.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 7710,
      num: 699,
      prevo: 'amaura',
      species: 'aurorus',
      types: ['Rock', 'Ice'],
      weightkg: 225,
      aliases: ['amaruruga']
    }
  ],
  [
    'sylveon',
    {
      abilities: { first: 'Cute Charm', hidden: 'Pixilate' },
      baseStats: { hp: 95, atk: 65, def: 65, spa: 110, spd: 130, spe: 60 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Pink',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 'Level up while having high Affection and knowing a Fairy type move',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 8995,
      num: 700,
      prevo: 'eevee',
      species: 'sylveon',
      types: ['Fairy'],
      weightkg: 23.5,
      aliases: ['ninfia']
    }
  ],
  [
    'hawlucha',
    {
      abilities: { first: 'Limber', second: 'Unburden', hidden: 'Mold Breaker' },
      baseStats: { hp: 78, atk: 92, def: 75, spa: 74, spd: 63, spe: 118 },
      catchRate: {
        base: 100,
        percentageWithOrdinaryPokeballAtFullHealth: '21.7%'
      },
      color: 'Green',
      eggGroups: ['Flying', 'Human-Like'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 701,
      species: 'hawlucha',
      types: ['Fighting', 'Flying'],
      weightkg: 21.5,
      aliases: ['ruchaburu']
    }
  ],
  [
    'dedenne',
    {
      abilities: { first: 'Cheek Pouch', second: 'Pickup', hidden: 'Plus' },
      baseStats: { hp: 67, atk: 58, def: 57, spa: 81, spd: 67, spe: 101 },
      catchRate: {
        base: 180,
        percentageWithOrdinaryPokeballAtFullHealth: '33.8%'
      },
      color: 'Yellow',
      eggGroups: ['Field', 'Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 702,
      species: 'dedenne',
      types: ['Electric', 'Fairy'],
      weightkg: 2.2
    }
  ],
  [
    'carbink',
    {
      abilities: { first: 'Clear Body', hidden: 'Sturdy' },
      baseStats: { hp: 50, atk: 50, def: 150, spa: 50, spd: 150, spe: 50 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Gray',
      eggGroups: ['Fairy', 'Mineral'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 1, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 6425,
      num: 703,
      species: 'carbink',
      types: ['Rock', 'Fairy'],
      weightkg: 5.7,
      aliases: ['mereshii']
    }
  ],
  [
    'goomy',
    {
      abilities: { first: 'Sap Sipper', second: 'Hydration', hidden: 'Gooey' },
      baseStats: { hp: 45, atk: 50, def: 35, spa: 55, spd: 75, spe: 40 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['sliggoo'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 704,
      species: 'goomy',
      types: ['Dragon'],
      weightkg: 2.8,
      aliases: ['numera']
    }
  ],
  [
    'sliggoo',
    {
      abilities: { first: 'Sap Sipper', second: 'Hydration', hidden: 'Gooey' },
      baseStats: { hp: 68, atk: 75, def: 53, spa: 83, spd: 113, spe: 60 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 40,
      evos: ['goodra'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 705,
      prevo: 'goomy',
      species: 'sliggoo',
      types: ['Dragon'],
      weightkg: 17.5,
      aliases: ['numeiru']
    }
  ],
  [
    'goodra',
    {
      abilities: { first: 'Sap Sipper', second: 'Hydration', hidden: 'Gooey' },
      baseStats: { hp: 90, atk: 100, def: 70, spa: 110, spd: 150, spe: 80 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 3, spe: 0 },
      evoLevel: 'Level 50 In Rain',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 706,
      prevo: 'sliggoo',
      species: 'goodra',
      types: ['Dragon'],
      weightkg: 150.5,
      aliases: ['numerugon']
    }
  ],
  [
    'klefki',
    {
      abilities: { first: 'Prankster', hidden: 'Magician' },
      baseStats: { hp: 57, atk: 80, def: 91, spa: 80, spd: 87, spe: 75 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Gray',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.2,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      num: 707,
      species: 'klefki',
      types: ['Steel', 'Fairy'],
      weightkg: 3,
      aliases: ['klef', 'kureffi']
    }
  ],
  [
    'phantump',
    {
      abilities: { first: 'Natural Cure', second: 'Frisk', hidden: 'Harvest' },
      baseStats: { hp: 43, atk: 70, def: 48, spa: 50, spd: 60, spe: 38 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Brown',
      eggGroups: ['Grass', 'Amorphous'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['trevenant'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 708,
      species: 'phantump',
      types: ['Ghost', 'Grass'],
      weightkg: 7,
      aliases: ['bokuree']
    }
  ],
  [
    'trevenant',
    {
      abilities: { first: 'Natural Cure', second: 'Frisk', hidden: 'Harvest' },
      baseStats: { hp: 85, atk: 110, def: 76, spa: 65, spd: 82, spe: 56 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Brown',
      eggGroups: ['Grass', 'Amorphous'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Trade',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 709,
      prevo: 'phantump',
      species: 'trevenant',
      types: ['Ghost', 'Grass'],
      weightkg: 71,
      aliases: ['cathy', 'oorotto']
    }
  ],
  [
    'pumpkaboo',
    {
      abilities: { first: 'Pickup', second: 'Frisk', hidden: 'Insomnia' },
      baseForme: 'Average',
      baseStats: { hp: 49, atk: 66, def: 70, spa: 44, spd: 55, spe: 51 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Brown',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['gourgeist'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 710,
      otherFormes: ['pumpkaboosmall', 'pumpkaboolarge', 'pumpkaboosuper'],
      species: 'pumpkaboo',
      types: ['Ghost', 'Grass'],
      weightkg: 5,
      aliases: ['baketcha', 'pumpkabooaverage']
    }
  ],
  [
    'pumpkaboosmall',
    {
      abilities: { first: 'Pickup', second: 'Frisk', hidden: 'Insomnia' },
      baseSpecies: 'Pumpkaboo',
      baseStats: { hp: 44, atk: 66, def: 70, spa: 44, spd: 55, spe: 56 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Brown',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['gourgeistsmall'],
      forme: 'Small',
      formeLetter: 'S',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 710,
      species: 'pumpkaboo-small',
      types: ['Ghost', 'Grass'],
      weightkg: 3.5
    }
  ],
  [
    'pumpkaboolarge',
    {
      abilities: { first: 'Pickup', second: 'Frisk', hidden: 'Insomnia' },
      baseSpecies: 'Pumpkaboo',
      baseStats: { hp: 54, atk: 66, def: 70, spa: 44, spd: 55, spe: 46 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Brown',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['gourgeistlarge'],
      forme: 'Large',
      formeLetter: 'L',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 710,
      species: 'pumpkaboo-large',
      types: ['Ghost', 'Grass'],
      weightkg: 7.5
    }
  ],
  [
    'pumpkaboosuper',
    {
      abilities: { first: 'Pickup', second: 'Frisk', hidden: 'Insomnia' },
      baseSpecies: 'Pumpkaboo',
      baseStats: { hp: 59, atk: 66, def: 70, spa: 44, spd: 55, spe: 41 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Brown',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['gourgeistsuper'],
      forme: 'Super',
      formeLetter: 'S',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 710,
      species: 'pumpkaboo-super',
      types: ['Ghost', 'Grass'],
      weightkg: 15,
      aliases: ['pumpkaboohuge']
    }
  ],
  [
    'gourgeist',
    {
      abilities: { first: 'Pickup', second: 'Frisk', hidden: 'Insomnia' },
      baseForme: 'Average',
      baseStats: { hp: 65, atk: 90, def: 122, spa: 58, spd: 75, spe: 84 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Brown',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Trade',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 711,
      otherFormes: ['gourgeistsmall', 'gourgeistlarge', 'gourgeistsuper'],
      prevo: 'pumpkaboo',
      species: 'gourgeist',
      types: ['Ghost', 'Grass'],
      weightkg: 12.5,
      aliases: ['gourgeistaverage', 'panpujin']
    }
  ],
  [
    'gourgeistsmall',
    {
      abilities: { first: 'Pickup', second: 'Frisk', hidden: 'Insomnia' },
      baseSpecies: 'Gourgeist',
      baseStats: { hp: 55, atk: 85, def: 122, spa: 58, spd: 75, spe: 99 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Brown',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Trade',
      forme: 'Small',
      formeLetter: 'S',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 711,
      prevo: 'pumpkaboosmall',
      species: 'gourgeist-small',
      types: ['Ghost', 'Grass'],
      weightkg: 9.5,
      aliases: ['gourgeists']
    }
  ],
  [
    'gourgeistlarge',
    {
      abilities: { first: 'Pickup', second: 'Frisk', hidden: 'Insomnia' },
      baseSpecies: 'Gourgeist',
      baseStats: { hp: 75, atk: 95, def: 122, spa: 58, spd: 75, spe: 69 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Brown',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Trade',
      forme: 'Large',
      formeLetter: 'L',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 711,
      prevo: 'pumpkaboolarge',
      species: 'gourgeist-large',
      types: ['Ghost', 'Grass'],
      weightkg: 14,
      aliases: ['gourgeistl']
    }
  ],
  [
    'gourgeistsuper',
    {
      abilities: { first: 'Pickup', second: 'Frisk', hidden: 'Insomnia' },
      baseSpecies: 'Gourgeist',
      baseStats: { hp: 85, atk: 100, def: 122, spa: 58, spd: 75, spe: 54 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Brown',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Trade',
      forme: 'Super',
      formeLetter: 'S',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 711,
      prevo: 'pumpkaboosuper',
      species: 'gourgeist-super',
      types: ['Ghost', 'Grass'],
      weightkg: 39,
      aliases: ['gourgeisth', 'gourgeisthuge', 'gourgeistxl']
    }
  ],
  [
    'bergmite',
    {
      abilities: { first: 'Own Tempo', second: 'Ice Body', hidden: 'Sturdy' },
      baseStats: { hp: 55, atk: 69, def: 85, spa: 32, spd: 35, spe: 28 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Blue',
      eggGroups: ['Monster', 'Mineral'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['avalugg'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 712,
      species: 'bergmite',
      types: ['Ice'],
      weightkg: 99.5,
      aliases: ['kachikooru']
    }
  ],
  [
    'avalugg',
    {
      abilities: { first: 'Own Tempo', second: 'Ice Body', hidden: 'Sturdy' },
      baseStats: { hp: 95, atk: 117, def: 184, spa: 44, spd: 46, spe: 28 },
      catchRate: { base: 55, percentageWithOrdinaryPokeballAtFullHealth: '13.9%' },
      color: 'Blue',
      eggGroups: ['Monster', 'Mineral'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 37,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 713,
      prevo: 'bergmite',
      species: 'avalugg',
      types: ['Ice'],
      weightkg: 505,
      aliases: ['kurebeesu']
    }
  ],
  [
    'noibat',
    {
      abilities: { first: 'Frisk', second: 'Infiltrator', hidden: 'Telepathy' },
      baseStats: { hp: 40, atk: 30, def: 35, spa: 45, spd: 40, spe: 55 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Purple',
      eggGroups: ['Flying', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['noivern'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 714,
      species: 'noibat',
      types: ['Flying', 'Dragon'],
      weightkg: 8,
      aliases: ['onbatto']
    }
  ],
  [
    'noivern',
    {
      abilities: { first: 'Frisk', second: 'Infiltrator', hidden: 'Telepathy' },
      baseStats: { hp: 85, atk: 70, def: 80, spa: 97, spd: 80, spe: 123 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Flying', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 48,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 715,
      prevo: 'noibat',
      species: 'noivern',
      types: ['Flying', 'Dragon'],
      weightkg: 85,
      aliases: ['onbaan']
    }
  ],
  [
    'xerneas',
    {
      abilities: { first: 'Fairy Aura' },
      baseForme: 'Active',
      baseStats: { hp: 126, atk: 131, def: 95, spa: 131, spd: 98, spe: 99 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 3,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 716,
      otherFormes: ['Xerneas-Neutral'],
      species: 'xerneas',
      types: ['Fairy'],
      weightkg: 215,
      aliases: ['rudolf', 'xern', 'zeruneasu']
    }
  ],
  [
    'xerneasneutral',
    {
      abilities: { first: 'Fairy Aura' },
      baseSpecies: 'Xerneas',
      baseStats: { hp: 126, atk: 131, def: 95, spa: 131, spd: 98, spe: 99 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Neutral',
      formeLetter: 'N',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 3,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 716,
      species: 'xerneas-neutral',
      types: ['Fairy'],
      weightkg: 215
    }
  ],
  [
    'yveltal',
    {
      abilities: { first: 'Dark Aura' },
      baseStats: { hp: 126, atk: 131, def: 95, spa: 131, spd: 98, spe: 99 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 5.8,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 717,
      species: 'yveltal',
      types: ['Dark', 'Flying'],
      weightkg: 203,
      aliases: ['baconbird', 'iberutaru', 'ygod']
    }
  ],
  [
    'zygarde',
    {
      abilities: { first: 'Aura Break', special: 'Power Construct' },
      baseForme: '50%',
      baseStats: { hp: 108, atk: 100, def: 121, spa: 81, spd: 95, spe: 95 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 718,
      otherFormes: ['zygarde10', 'zygardecomplete'],
      species: 'zygarde',
      types: ['Dragon', 'Ground'],
      weightkg: 305,
      aliases: ['jigarude', 'zyg', 'zygarde50']
    }
  ],
  [
    'zygarde10',
    {
      abilities: { first: 'Aura Break', special: 'Power Construct' },
      baseSpecies: 'Zygarde',
      baseStats: { hp: 54, atk: 100, def: 71, spa: 61, spd: 85, spe: 115 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: '10%',
      formeLetter: 'T',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 718,
      species: 'Zygarde-10%',
      types: ['Dragon', 'Ground'],
      weightkg: 33.5,
      aliases: ['zydog', 'zydoge', 'zygardedog']
    }
  ],
  [
    'zygardecomplete',
    {
      abilities: { first: 'Power Construct' },
      baseSpecies: 'Zygarde',
      baseStats: { hp: 216, atk: 100, def: 121, spa: 91, spd: 95, spe: 85 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Complete',
      formeLetter: 'C',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 4.5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 718,
      species: 'zygarde-complete',
      types: ['Dragon', 'Ground'],
      weightkg: 610,
      aliases: ['perfectzygarde', 'zyc', 'zygarde100', 'zygardec', 'zygardefull', 'zygod']
    }
  ],
  [
    'diancie',
    {
      abilities: { first: 'Clear Body' },
      baseStats: { hp: 50, atk: 100, def: 150, spa: 100, spd: 150, spe: 50 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Pink',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 2, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.7,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 6425,
      num: 719,
      otherFormes: ['dianciemega'],
      species: 'diancie',
      types: ['Rock', 'Fairy'],
      weightkg: 8.8,
      aliases: ['dianshii']
    }
  ],
  [
    'dianciemega',
    {
      abilities: { first: 'Magic Bounce' },
      baseSpecies: 'Diancie',
      baseStats: { hp: 50, atk: 160, def: 110, spa: 160, spd: 110, spe: 110 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Pink',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 2, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.1,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 6425,
      num: 719,
      species: 'diancie-mega',
      types: ['Rock', 'Fairy'],
      weightkg: 27.8
    }
  ],
  [
    'hoopa',
    {
      abilities: { first: 'Magician' },
      baseForme: 'Confined',
      baseStats: { hp: 80, atk: 110, def: 60, spa: 150, spd: 130, spe: 70 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 720,
      otherFormes: ['hoopaunbound'],
      species: 'hoopa',
      types: ['Psychic', 'Ghost'],
      weightkg: 9,
      aliases: ['fuupa', 'hoopac', 'hoopaconfined']
    }
  ],
  [
    'hoopaunbound',
    {
      abilities: { first: 'Magician' },
      baseSpecies: 'Hoopa',
      baseStats: { hp: 80, atk: 160, def: 60, spa: 170, spd: 130, spe: 80 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      forme: 'Unbound',
      formeLetter: 'U',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 6.5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 720,
      species: 'hoopa-unbound',
      types: ['Psychic', 'Dark'],
      weightkg: 490,
      aliases: ['hoopau']
    }
  ],
  [
    'volcanion',
    {
      abilities: { first: 'Water Absorb' },
      baseStats: { hp: 80, atk: 110, def: 120, spa: 130, spd: 90, spe: 70 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Brown',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.7,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 721,
      species: 'volcanion',
      types: ['Fire', 'Water'],
      weightkg: 195,
      aliases: ['borukenion']
    }
  ]
];

for (const [key, value] of entries) {
  value.key = key;

  Pokedex.set(key, value);
}
