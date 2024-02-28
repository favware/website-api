import type { PokemonTypes } from '#assets/pokemon-source';
import { Pokedex } from '#dexdata/pokedex';
import { TypesEnum } from '#utils/pokemonTypes';

const entries: [string, PokemonTypes.DexEntry][] = [
  [
    'treecko',
    {
      abilities: { first: 'overgrow', hidden: 'unburden' },
      baseStats: { hp: 40, atk: 45, def: 35, spa: 65, spd: 55, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Monster', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['grovyle'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 252,
      species: 'treecko',
      types: [TypesEnum.Grass],
      weightkg: 5,
      aliases: ['kimori']
    }
  ],
  [
    'grovyle',
    {
      abilities: { first: 'overgrow', hidden: 'unburden' },
      baseStats: { hp: 50, atk: 65, def: 45, spa: 85, spd: 65, spe: 95 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Monster', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 16,
      evos: ['sceptile'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 253,
      prevo: 'treecko',
      species: 'grovyle',
      types: [TypesEnum.Grass],
      weightkg: 21.6,
      aliases: ['juputoru']
    }
  ],
  [
    'sceptile',
    {
      abilities: { first: 'overgrow', hidden: 'unburden' },
      baseStats: { hp: 70, atk: 85, def: 65, spa: 105, spd: 85, spe: 120 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Monster', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      evoLevel: 36,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 254,
      otherFormes: ['sceptilemega'],
      prevo: 'grovyle',
      species: 'sceptile',
      types: [TypesEnum.Grass],
      weightkg: 52.2,
      aliases: ['jukain', 'scept']
    }
  ],
  [
    'sceptilemega',
    {
      abilities: { first: 'lightningrod' },
      baseSpecies: 'sceptile',
      baseStats: { hp: 70, atk: 110, def: 75, spa: 145, spd: 85, spe: 145 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Monster', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.9,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 254,
      otherFormes: ['sceptile'],
      species: 'sceptile-mega',
      types: [TypesEnum.Grass, TypesEnum.Dragon],
      weightkg: 55.2,
      aliases: ['megascept']
    }
  ],
  [
    'torchic',
    {
      abilities: { first: 'blaze', hidden: 'speedboost' },
      baseStats: { hp: 45, atk: 60, def: 40, spa: 70, spd: 50, spe: 45 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['combusken'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 255,
      species: 'torchic',
      types: [TypesEnum.Fire],
      weightkg: 2.5,
      aliases: ['achamo']
    }
  ],
  [
    'combusken',
    {
      abilities: { first: 'blaze', hidden: 'speedboost' },
      baseStats: { hp: 60, atk: 85, def: 60, spa: 85, spd: 60, spe: 55 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 1, spd: 0, spe: 0 },
      evoLevel: 16,
      evos: ['blaziken'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 256,
      prevo: 'torchic',
      species: 'combusken',
      types: [TypesEnum.Fire, TypesEnum.Fighting],
      weightkg: 19.5,
      aliases: ['wakashamo']
    }
  ],
  [
    'blaziken',
    {
      abilities: { first: 'blaze', hidden: 'speedboost' },
      baseStats: { hp: 80, atk: 120, def: 70, spa: 110, spd: 70, spe: 80 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 36,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.9,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 257,
      otherFormes: ['blazikenmega'],
      prevo: 'combusken',
      species: 'blaziken',
      types: [TypesEnum.Fire, TypesEnum.Fighting],
      weightkg: 52,
      aliases: ['bashaamo']
    }
  ],
  [
    'blazikenmega',
    {
      abilities: { first: 'speedboost' },
      baseSpecies: 'blaziken',
      baseStats: { hp: 80, atk: 160, def: 80, spa: 130, spd: 80, spe: 100 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.9,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 257,
      otherFormes: ['blaziken'],
      species: 'blaziken-mega',
      types: [TypesEnum.Fire, TypesEnum.Fighting],
      weightkg: 52
    }
  ],
  [
    'mudkip',
    {
      abilities: { first: 'torrent', hidden: 'damp' },
      baseStats: { hp: 50, atk: 70, def: 50, spa: 50, spd: 50, spe: 40 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Monster', 'Water 1'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['marshtomp'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 258,
      species: 'mudkip',
      types: [TypesEnum.Water],
      weightkg: 7.6,
      aliases: ['mizugorou']
    }
  ],
  [
    'marshtomp',
    {
      abilities: { first: 'torrent', hidden: 'damp' },
      baseStats: { hp: 70, atk: 85, def: 70, spa: 60, spd: 70, spe: 50 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Monster', 'Water 1'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 16,
      evos: ['swampert'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 259,
      prevo: 'mudkip',
      species: 'marshtomp',
      types: [TypesEnum.Water, TypesEnum.Ground],
      weightkg: 28,
      aliases: ['numakuroo']
    }
  ],
  [
    'swampert',
    {
      abilities: { first: 'torrent', hidden: 'damp' },
      baseStats: { hp: 100, atk: 110, def: 90, spa: 85, spd: 90, spe: 60 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Monster', 'Water 1'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 36,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 260,
      otherFormes: ['swampertmega'],
      prevo: 'marshtomp',
      species: 'swampert',
      types: [TypesEnum.Water, TypesEnum.Ground],
      weightkg: 81.9,
      aliases: ['pert', 'raguraaji']
    }
  ],
  [
    'swampertmega',
    {
      abilities: { first: 'swiftswim' },
      baseSpecies: 'swampert',
      baseStats: { hp: 100, atk: 150, def: 110, spa: 95, spd: 110, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Monster', 'Water 1'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.9,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 260,
      otherFormes: ['swampert'],
      species: 'swampert-mega',
      types: [TypesEnum.Water, TypesEnum.Ground],
      weightkg: 102,
      aliases: ['megapert']
    }
  ],
  [
    'poochyena',
    {
      abilities: { first: 'runaway', second: 'quickfeet', hidden: 'rattled' },
      baseStats: { hp: 35, atk: 55, def: 35, spa: 30, spd: 30, spe: 35 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['mightyena'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 261,
      species: 'poochyena',
      types: [TypesEnum.Dark],
      weightkg: 13.6,
      aliases: ['pochiena']
    }
  ],
  [
    'mightyena',
    {
      abilities: { first: 'intimidate', second: 'quickfeet', hidden: 'moxie' },
      baseStats: { hp: 70, atk: 90, def: 70, spa: 60, spd: 60, spe: 70 },
      catchRate: { base: 127, percentageWithOrdinaryPokeballAtFullHealth: '26%' },
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 18,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 262,
      prevo: 'poochyena',
      species: 'mightyena',
      types: [TypesEnum.Dark],
      weightkg: 37,
      aliases: ['guraena']
    }
  ],
  [
    'zigzagoon',
    {
      abilities: { first: 'pickup', second: 'gluttony', hidden: 'quickfeet' },
      baseStats: { hp: 38, atk: 30, def: 41, spa: 30, spd: 41, spe: 60 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['linoone'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 263,
      otherFormes: ['zigzagoongalar'],
      species: 'zigzagoon',
      types: [TypesEnum.Normal],
      weightkg: 17.5,
      aliases: ['jiguzaguma']
    }
  ],
  [
    'zigzagoongalar',
    {
      abilities: { first: 'pickup', second: 'gluttony', hidden: 'quickfeet' },
      baseSpecies: 'zigzagoon',
      baseStats: { hp: 38, atk: 30, def: 41, spa: 30, spd: 41, spe: 60 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['linoonegalar'],
      forme: 'Galar',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 263,
      otherFormes: ['zigzagoon'],
      species: 'zigzagoon-galar',
      types: [TypesEnum.Dark, TypesEnum.Normal],
      weightkg: 17.5
    }
  ],
  [
    'linoone',
    {
      abilities: { first: 'pickup', second: 'gluttony', hidden: 'quickfeet' },
      baseStats: { hp: 78, atk: 70, def: 61, spa: 50, spd: 61, spe: 100 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 20,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 264,
      otherFormes: ['linoonegalar'],
      prevo: 'zigzagoon',
      species: 'linoone',
      types: [TypesEnum.Normal],
      weightkg: 32.5,
      aliases: ['massuguma']
    }
  ],
  [
    'linoonegalar',
    {
      abilities: { first: 'pickup', second: 'gluttony', hidden: 'quickfeet' },
      baseSpecies: 'linoone',
      baseStats: { hp: 78, atk: 70, def: 61, spa: 50, spd: 61, spe: 100 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 20,
      evos: ['obstagoon'],
      forme: 'Galar',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 264,
      otherFormes: ['linoone'],
      prevo: 'zigzagoongalar',
      species: 'linoone-galar',
      types: [TypesEnum.Dark, TypesEnum.Normal],
      weightkg: 32.5
    }
  ],
  [
    'wurmple',
    {
      abilities: { first: 'shielddust', hidden: 'runaway' },
      baseStats: { hp: 45, atk: 45, def: 35, spa: 20, spd: 30, spe: 20 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Red',
      eggGroups: ['Bug'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['silcoon', 'cascoon'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 265,
      species: 'wurmple',
      types: [TypesEnum.Bug],
      weightkg: 3.6,
      aliases: ['kemusso']
    }
  ],
  [
    'silcoon',
    {
      abilities: { first: 'shedskin' },
      baseStats: { hp: 50, atk: 35, def: 55, spa: 25, spd: 25, spe: 15 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'White',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 7,
      evos: ['beautifly'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 266,
      prevo: 'wurmple',
      species: 'silcoon',
      types: [TypesEnum.Bug],
      weightkg: 10,
      aliases: ['karasarisu']
    }
  ],
  [
    'beautifly',
    {
      abilities: { first: 'swarm', hidden: 'rivalry' },
      baseStats: { hp: 60, atk: 70, def: 50, spa: 100, spd: 50, spe: 65 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: 10,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 267,
      prevo: 'silcoon',
      species: 'beautifly',
      types: [TypesEnum.Bug, TypesEnum.Flying],
      weightkg: 28.4,
      aliases: ['agehanto']
    }
  ],
  [
    'cascoon',
    {
      abilities: { first: 'shedskin' },
      baseStats: { hp: 50, atk: 35, def: 55, spa: 25, spd: 25, spe: 15 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Purple',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 7,
      evos: ['dustox'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 268,
      prevo: 'wurmple',
      species: 'cascoon',
      types: [TypesEnum.Bug],
      weightkg: 11.5,
      aliases: ['mayurudo']
    }
  ],
  [
    'dustox',
    {
      abilities: { first: 'shielddust', hidden: 'compoundeyes' },
      baseStats: { hp: 60, atk: 50, def: 70, spa: 50, spd: 90, spe: 65 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 3, spe: 0 },
      evoLevel: 10,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 269,
      prevo: 'cascoon',
      species: 'dustox',
      types: [TypesEnum.Bug, TypesEnum.Poison],
      weightkg: 31.6,
      aliases: ['dokukeiru']
    }
  ],
  [
    'lotad',
    {
      abilities: { first: 'swiftswim', second: 'raindish', hidden: 'owntempo' },
      baseStats: { hp: 40, atk: 30, def: 30, spa: 40, spd: 50, spe: 30 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Green',
      eggGroups: ['Water 1', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['lombre'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 270,
      species: 'lotad',
      types: [TypesEnum.Water, TypesEnum.Grass],
      weightkg: 2.6,
      aliases: ['hasuboo']
    }
  ],
  [
    'lombre',
    {
      abilities: { first: 'swiftswim', second: 'raindish', hidden: 'owntempo' },
      baseStats: { hp: 60, atk: 50, def: 50, spa: 60, spd: 70, spe: 50 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Green',
      eggGroups: ['Water 1', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 14,
      evos: ['ludicolo'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 271,
      prevo: 'lotad',
      species: 'lombre',
      types: [TypesEnum.Water, TypesEnum.Grass],
      weightkg: 32.5,
      aliases: ['hasuburero']
    }
  ],
  [
    'ludicolo',
    {
      abilities: { first: 'swiftswim', second: 'raindish', hidden: 'owntempo' },
      baseStats: { hp: 80, atk: 70, def: 70, spa: 90, spd: 100, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Water 1', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 3, spe: 0 },
      evoLevel: 'use Water Stone',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 272,
      prevo: 'lombre',
      species: 'ludicolo',
      types: [TypesEnum.Water, TypesEnum.Grass],
      weightkg: 55,
      aliases: ['runpappa']
    }
  ],
  [
    'seedot',
    {
      abilities: {
        first: 'chlorophyll',
        second: 'earlybird',
        hidden: 'pickpocket'
      },
      baseStats: { hp: 40, atk: 40, def: 50, spa: 30, spd: 30, spe: 30 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Field', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['nuzleaf'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 273,
      species: 'seedot',
      types: [TypesEnum.Grass],
      weightkg: 4,
      aliases: ['taneboo']
    }
  ],
  [
    'nuzleaf',
    {
      abilities: {
        first: 'chlorophyll',
        second: 'earlybird',
        hidden: 'pickpocket'
      },
      baseStats: { hp: 70, atk: 70, def: 40, spa: 60, spd: 40, spe: 60 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Brown',
      eggGroups: ['Field', 'Grass'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 14,
      evos: ['shiftry'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 274,
      prevo: 'seedot',
      species: 'nuzleaf',
      types: [TypesEnum.Grass, TypesEnum.Dark],
      weightkg: 28,
      aliases: ['konohana']
    }
  ],
  [
    'shiftry',
    {
      abilities: {
        first: 'chlorophyll',
        second: 'windrider',
        hidden: 'pickpocket'
      },
      baseStats: { hp: 90, atk: 100, def: 60, spa: 90, spd: 60, spe: 80 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Field', 'Grass'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'use Leaf Stone',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 275,
      prevo: 'nuzleaf',
      species: 'shiftry',
      types: [TypesEnum.Grass, TypesEnum.Dark],
      weightkg: 59.6,
      aliases: ['daatengu']
    }
  ],
  [
    'taillow',
    {
      abilities: { first: 'guts', hidden: 'scrappy' },
      baseStats: { hp: 40, atk: 55, def: 30, spa: 30, spd: 30, spe: 85 },
      catchRate: {
        base: 200,
        percentageWithOrdinaryPokeballAtFullHealth: '36.6%'
      },
      color: 'Blue',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['swellow'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 276,
      species: 'taillow',
      types: [TypesEnum.Normal, TypesEnum.Flying],
      weightkg: 2.3,
      aliases: ['subame']
    }
  ],
  [
    'swellow',
    {
      abilities: { first: 'guts', hidden: 'scrappy' },
      baseStats: { hp: 60, atk: 85, def: 60, spa: 75, spd: 50, spe: 125 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 22,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 277,
      prevo: 'taillow',
      species: 'swellow',
      types: [TypesEnum.Normal, TypesEnum.Flying],
      weightkg: 19.8,
      aliases: ['oosubame']
    }
  ],
  [
    'wingull',
    {
      abilities: { first: 'keeneye', second: 'hydration', hidden: 'raindish' },
      baseStats: { hp: 40, atk: 30, def: 30, spa: 55, spd: 30, spe: 85 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'White',
      eggGroups: ['Water 1', 'Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['pelipper'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 278,
      species: 'wingull',
      types: [TypesEnum.Water, TypesEnum.Flying],
      weightkg: 9.5,
      aliases: ['kyamome']
    }
  ],
  [
    'pelipper',
    {
      abilities: { first: 'keeneye', second: 'drizzle', hidden: 'raindish' },
      baseStats: { hp: 60, atk: 50, def: 100, spa: 95, spd: 70, spe: 65 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Water 1', 'Flying'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 25,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 279,
      prevo: 'wingull',
      species: 'pelipper',
      types: [TypesEnum.Water, TypesEnum.Flying],
      weightkg: 28,
      aliases: ['perippaa']
    }
  ],
  [
    'ralts',
    {
      abilities: { first: 'synchronize', second: 'trace', hidden: 'telepathy' },
      baseStats: { hp: 28, atk: 25, def: 25, spa: 45, spd: 35, spe: 40 },
      catchRate: {
        base: 235,
        percentageWithOrdinaryPokeballAtFullHealth: '41.3%'
      },
      color: 'White',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['kirlia'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 280,
      species: 'ralts',
      types: [TypesEnum.Psychic, TypesEnum.Fairy],
      weightkg: 6.6,
      aliases: ['rarutosu']
    }
  ],
  [
    'kirlia',
    {
      abilities: { first: 'synchronize', second: 'trace', hidden: 'telepathy' },
      baseStats: { hp: 38, atk: 35, def: 35, spa: 65, spd: 55, spe: 50 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'White',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 20,
      evos: ['gardevoir', 'gallade'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 281,
      prevo: 'ralts',
      species: 'kirlia',
      types: [TypesEnum.Psychic, TypesEnum.Fairy],
      weightkg: 20.2,
      aliases: ['kiruria']
    }
  ],
  [
    'gardevoir',
    {
      abilities: { first: 'synchronize', second: 'trace', hidden: 'telepathy' },
      baseStats: { hp: 68, atk: 65, def: 65, spa: 125, spd: 115, spe: 80 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'White',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: 30,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 282,
      otherFormes: ['gardevoirmega'],
      prevo: 'kirlia',
      species: 'gardevoir',
      types: [TypesEnum.Psychic, TypesEnum.Fairy],
      weightkg: 48.4,
      aliases: ['garde', 'saanaito']
    }
  ],
  [
    'gardevoirmega',
    {
      abilities: { first: 'pixilate' },
      baseSpecies: 'gardevoir',
      baseStats: { hp: 68, atk: 85, def: 65, spa: 165, spd: 135, spe: 100 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'White',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 282,
      otherFormes: ['gardevoir'],
      species: 'gardevoir-mega',
      types: [TypesEnum.Psychic, TypesEnum.Fairy],
      weightkg: 48.4,
      aliases: ['megagard', 'megagarde']
    }
  ],
  [
    'surskit',
    {
      abilities: { first: 'swiftswim', hidden: 'raindish' },
      baseStats: { hp: 40, atk: 30, def: 32, spa: 50, spd: 52, spe: 65 },
      catchRate: {
        base: 200,
        percentageWithOrdinaryPokeballAtFullHealth: '36.6%'
      },
      color: 'Blue',
      eggGroups: ['Water 1', 'Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['masquerain'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 283,
      species: 'surskit',
      types: [TypesEnum.Bug, TypesEnum.Water],
      weightkg: 1.7,
      aliases: ['ametama']
    }
  ],
  [
    'masquerain',
    {
      abilities: { first: 'intimidate', hidden: 'unnerve' },
      baseStats: { hp: 70, atk: 60, def: 62, spa: 100, spd: 82, spe: 80 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 1, spe: 0 },
      evoLevel: 22,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 284,
      prevo: 'surskit',
      species: 'masquerain',
      types: [TypesEnum.Bug, TypesEnum.Flying],
      weightkg: 3.6,
      aliases: ['amemoosu']
    }
  ],
  [
    'shroomish',
    {
      abilities: {
        first: 'effectspore',
        second: 'poisonheal',
        hidden: 'quickfeet'
      },
      baseStats: { hp: 60, atk: 40, def: 60, spa: 40, spd: 60, spe: 35 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Fairy', 'Grass'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['breloom'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Fluctuating',
      minimumHatchTime: 3855,
      num: 285,
      species: 'shroomish',
      types: [TypesEnum.Grass],
      weightkg: 4.5,
      aliases: ['kinokoko']
    }
  ],
  [
    'breloom',
    {
      abilities: {
        first: 'effectspore',
        second: 'poisonheal',
        hidden: 'technician'
      },
      baseStats: { hp: 60, atk: 130, def: 80, spa: 60, spd: 60, spe: 70 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Green',
      eggGroups: ['Fairy', 'Grass'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 23,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Fluctuating',
      minimumHatchTime: 3855,
      num: 286,
      prevo: 'shroomish',
      species: 'breloom',
      types: [TypesEnum.Grass, TypesEnum.Fighting],
      weightkg: 39.2,
      aliases: ['kinogassa']
    }
  ],
  [
    'slakoth',
    {
      abilities: { first: 'truant' },
      baseStats: { hp: 60, atk: 60, def: 60, spa: 35, spd: 35, spe: 30 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['vigoroth'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 3855,
      num: 287,
      species: 'slakoth',
      types: [TypesEnum.Normal],
      weightkg: 24,
      aliases: ['namakero']
    }
  ],
  [
    'vigoroth',
    {
      abilities: { first: 'vitalspirit' },
      baseStats: { hp: 80, atk: 80, def: 80, spa: 55, spd: 55, spe: 90 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 18,
      evos: ['slaking'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 3855,
      num: 288,
      prevo: 'slakoth',
      species: 'vigoroth',
      types: [TypesEnum.Normal],
      weightkg: 46.5,
      aliases: ['yarukimono']
    }
  ],
  [
    'slaking',
    {
      abilities: { first: 'truant' },
      baseStats: { hp: 150, atk: 160, def: 100, spa: 95, spd: 65, spe: 100 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 36,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 3855,
      num: 289,
      prevo: 'vigoroth',
      species: 'slaking',
      types: [TypesEnum.Normal],
      weightkg: 130.5,
      aliases: ['kekkingu']
    }
  ],
  [
    'nincada',
    {
      abilities: { first: 'compoundeyes', hidden: 'runaway' },
      baseStats: { hp: 31, atk: 45, def: 90, spa: 30, spd: 30, spe: 40 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Gray',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['ninjask', 'shedinja'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 3855,
      num: 290,
      species: 'nincada',
      types: [TypesEnum.Bug, TypesEnum.Ground],
      weightkg: 5.5,
      aliases: ['tsuchinin']
    }
  ],
  [
    'ninjask',
    {
      abilities: { first: 'speedboost', hidden: 'infiltrator' },
      baseStats: { hp: 61, atk: 90, def: 45, spa: 50, spd: 50, spe: 160 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Yellow',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 20,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 3855,
      num: 291,
      prevo: 'nincada',
      species: 'ninjask',
      types: [TypesEnum.Bug, TypesEnum.Flying],
      weightkg: 12,
      aliases: ['tekkanin']
    }
  ],
  [
    'shedinja',
    {
      abilities: { first: 'wonderguard' },
      baseStats: { hp: 1, atk: 90, def: 45, spa: 30, spd: 30, spe: 40 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Mineral'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Level 20 with Free Party Slot',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 3855,
      num: 292,
      prevo: 'nincada',
      species: 'shedinja',
      types: [TypesEnum.Bug, TypesEnum.Ghost],
      weightkg: 1.2,
      aliases: ['nukenin']
    }
  ],
  [
    'whismur',
    {
      abilities: { first: 'soundproof', hidden: 'rattled' },
      baseStats: { hp: 64, atk: 51, def: 23, spa: 51, spd: 23, spe: 28 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Pink',
      eggGroups: ['Monster', 'Field'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['loudred'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 293,
      species: 'whismur',
      types: [TypesEnum.Normal],
      weightkg: 16.3,
      aliases: ['gonyonyo']
    }
  ],
  [
    'loudred',
    {
      abilities: { first: 'soundproof', hidden: 'scrappy' },
      baseStats: { hp: 84, atk: 71, def: 43, spa: 71, spd: 43, spe: 48 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Blue',
      eggGroups: ['Monster', 'Field'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 20,
      evos: ['exploud'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 294,
      prevo: 'whismur',
      species: 'loudred',
      types: [TypesEnum.Normal],
      weightkg: 40.5,
      aliases: ['dogoomu']
    }
  ],
  [
    'exploud',
    {
      abilities: { first: 'soundproof', hidden: 'scrappy' },
      baseStats: { hp: 104, atk: 91, def: 63, spa: 91, spd: 73, spe: 68 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Monster', 'Field'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 40,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 295,
      prevo: 'loudred',
      species: 'exploud',
      types: [TypesEnum.Normal],
      weightkg: 84,
      aliases: ['bakuongu']
    }
  ],
  [
    'makuhita',
    {
      abilities: { first: 'thickfat', second: 'guts', hidden: 'sheerforce' },
      baseStats: { hp: 72, atk: 60, def: 30, spa: 20, spd: 30, spe: 25 },
      catchRate: {
        base: 180,
        percentageWithOrdinaryPokeballAtFullHealth: '33.8%'
      },
      color: 'Yellow',
      eggGroups: ['Human-Like'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['hariyama'],
      genderRatio: { male: '75%', female: '25%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Fluctuating',
      minimumHatchTime: 5140,
      num: 296,
      species: 'makuhita',
      types: [TypesEnum.Fighting],
      weightkg: 86.4,
      aliases: ['makunoshita']
    }
  ],
  [
    'hariyama',
    {
      abilities: { first: 'thickfat', second: 'guts', hidden: 'sheerforce' },
      baseStats: { hp: 144, atk: 120, def: 60, spa: 40, spd: 60, spe: 50 },
      catchRate: {
        base: 200,
        percentageWithOrdinaryPokeballAtFullHealth: '36.6%'
      },
      color: 'Brown',
      eggGroups: ['Human-Like'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 24,
      genderRatio: { male: '75%', female: '25%' },
      heightm: 2.3,
      isEggObtainable: true,
      levellingRate: 'Fluctuating',
      minimumHatchTime: 5140,
      num: 297,
      prevo: 'makuhita',
      species: 'hariyama',
      types: [TypesEnum.Fighting],
      weightkg: 253.8,
      aliases: ['hariteyama']
    }
  ],
  [
    'azurill',
    {
      abilities: { first: 'thickfat', second: 'hugepower', hidden: 'sapsipper' },
      baseStats: { hp: 50, atk: 20, def: 40, spa: 20, spd: 40, spe: 20 },
      catchRate: {
        base: 150,
        percentageWithOrdinaryPokeballAtFullHealth: '29.5%'
      },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['marill'],
      genderRatio: { male: '25%', female: '75%' },
      heightm: 0.2,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 2570,
      num: 298,
      species: 'azurill',
      types: [TypesEnum.Normal, TypesEnum.Fairy],
      weightkg: 2,
      aliases: ['ruriri']
    }
  ],
  [
    'nosepass',
    {
      abilities: { first: 'sturdy', second: 'magnetpull', hidden: 'sandforce' },
      baseStats: { hp: 30, atk: 45, def: 135, spa: 45, spd: 90, spe: 30 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Gray',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['probopass'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 299,
      species: 'nosepass',
      types: [TypesEnum.Rock],
      weightkg: 97,
      aliases: ['nozupasu']
    }
  ],
  [
    'skitty',
    {
      abilities: { first: 'cutecharm', second: 'normalize', hidden: 'wonderskin' },
      baseStats: { hp: 50, atk: 45, def: 45, spa: 35, spd: 35, spe: 50 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Pink',
      eggGroups: ['Field', 'Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['delcatty'],
      genderRatio: { male: '25%', female: '75%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 3855,
      num: 300,
      species: 'skitty',
      types: [TypesEnum.Normal],
      weightkg: 11,
      aliases: ['eneko']
    }
  ],
  [
    'delcatty',
    {
      abilities: { first: 'cutecharm', second: 'normalize', hidden: 'wonderskin' },
      baseStats: { hp: 70, atk: 65, def: 65, spa: 55, spd: 55, spe: 90 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Purple',
      eggGroups: ['Field', 'Fairy'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evoLevel: 'use Moon Stone',
      genderRatio: { male: '25%', female: '75%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 3855,
      num: 301,
      prevo: 'skitty',
      species: 'delcatty',
      types: [TypesEnum.Normal],
      weightkg: 32.6,
      aliases: ['enekororo']
    }
  ],
  [
    'sableye',
    {
      abilities: { first: 'keeneye', second: 'stall', hidden: 'prankster' },
      baseStats: { hp: 50, atk: 75, def: 75, spa: 65, spd: 65, spe: 50 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 1, def: 1, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      num: 302,
      otherFormes: ['sableyemega'],
      species: 'sableye',
      types: [TypesEnum.Dark, TypesEnum.Ghost],
      weightkg: 11,
      aliases: ['sab', 'sable', 'yamirami']
    }
  ],
  [
    'sableyemega',
    {
      abilities: { first: 'magicbounce' },
      baseSpecies: 'sableye',
      baseStats: { hp: 50, atk: 85, def: 125, spa: 85, spd: 115, spe: 20 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 1, def: 1, spa: 0, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      num: 302,
      otherFormes: ['sableye'],
      species: 'sableye-mega',
      types: [TypesEnum.Dark, TypesEnum.Ghost],
      weightkg: 161,
      aliases: ['megasab', 'megasable']
    }
  ],
  [
    'mawile',
    {
      abilities: {
        first: 'hypercutter',
        second: 'intimidate',
        hidden: 'sheerforce'
      },
      baseStats: { hp: 50, atk: 85, def: 85, spa: 55, spd: 55, spe: 50 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Black',
      eggGroups: ['Field', 'Fairy'],
      evYields: { hp: 0, atk: 1, def: 1, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      num: 303,
      otherFormes: ['mawilemega'],
      species: 'mawile',
      types: [TypesEnum.Steel, TypesEnum.Fairy],
      weightkg: 11.5,
      aliases: ['kuchiito']
    }
  ],
  [
    'mawilemega',
    {
      abilities: { first: 'hugepower' },
      baseSpecies: 'mawile',
      baseStats: { hp: 50, atk: 105, def: 125, spa: 55, spd: 95, spe: 50 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Black',
      eggGroups: ['Field', 'Fairy'],
      evYields: { hp: 0, atk: 1, def: 1, spa: 0, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      num: 303,
      otherFormes: ['mawile'],
      species: 'mawile-mega',
      types: [TypesEnum.Steel, TypesEnum.Fairy],
      weightkg: 23.5,
      aliases: ['megamaw']
    }
  ],
  [
    'aron',
    {
      abilities: { first: 'sturdy', second: 'rockhead', hidden: 'heavymetal' },
      baseStats: { hp: 50, atk: 70, def: 100, spa: 40, spd: 40, spe: 30 },
      catchRate: {
        base: 180,
        percentageWithOrdinaryPokeballAtFullHealth: '33.8%'
      },
      color: 'Gray',
      eggGroups: ['Monster'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['lairon'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 8995,
      num: 304,
      species: 'aron',
      types: [TypesEnum.Steel, TypesEnum.Rock],
      weightkg: 60,
      aliases: ['kokodora']
    }
  ],
  [
    'lairon',
    {
      abilities: { first: 'sturdy', second: 'rockhead', hidden: 'heavymetal' },
      baseStats: { hp: 60, atk: 90, def: 140, spa: 50, spd: 50, spe: 40 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Gray',
      eggGroups: ['Monster'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 32,
      evos: ['aggron'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 8995,
      num: 305,
      prevo: 'aron',
      species: 'lairon',
      types: [TypesEnum.Steel, TypesEnum.Rock],
      weightkg: 120,
      aliases: ['kodora']
    }
  ],
  [
    'aggron',
    {
      abilities: { first: 'sturdy', second: 'rockhead', hidden: 'heavymetal' },
      baseStats: { hp: 70, atk: 110, def: 180, spa: 60, spd: 60, spe: 50 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Gray',
      eggGroups: ['Monster'],
      evYields: { hp: 0, atk: 0, def: 3, spa: 0, spd: 0, spe: 0 },
      evoLevel: 42,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.1,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 8995,
      num: 306,
      otherFormes: ['aggronmega'],
      prevo: 'lairon',
      species: 'aggron',
      types: [TypesEnum.Steel, TypesEnum.Rock],
      weightkg: 360,
      aliases: ['bosugodora']
    }
  ],
  [
    'aggronmega',
    {
      abilities: { first: 'filter' },
      baseSpecies: 'aggron',
      baseStats: { hp: 70, atk: 140, def: 230, spa: 60, spd: 80, spe: 50 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Gray',
      eggGroups: ['Monster'],
      evYields: { hp: 0, atk: 0, def: 3, spa: 0, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.2,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 8995,
      num: 306,
      otherFormes: ['aggron'],
      species: 'aggron-mega',
      types: [TypesEnum.Steel],
      weightkg: 395
    }
  ],
  [
    'meditite',
    {
      abilities: { first: 'purepower', hidden: 'telepathy' },
      baseStats: { hp: 30, atk: 40, def: 55, spa: 40, spd: 55, spe: 60 },
      catchRate: {
        base: 180,
        percentageWithOrdinaryPokeballAtFullHealth: '33.8%'
      },
      color: 'Blue',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['medicham'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 307,
      species: 'meditite',
      types: [TypesEnum.Fighting, TypesEnum.Psychic],
      weightkg: 11.2,
      aliases: ['asanan']
    }
  ],
  [
    'medicham',
    {
      abilities: { first: 'purepower', hidden: 'telepathy' },
      baseStats: { hp: 60, atk: 60, def: 75, spa: 60, spd: 75, spe: 80 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Red',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 37,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 308,
      otherFormes: ['medichammega'],
      prevo: 'meditite',
      species: 'medicham',
      types: [TypesEnum.Fighting, TypesEnum.Psychic],
      weightkg: 31.5,
      aliases: ['chaaremu']
    }
  ],
  [
    'medichammega',
    {
      abilities: { first: 'purepower' },
      baseSpecies: 'medicham',
      baseStats: { hp: 60, atk: 100, def: 85, spa: 80, spd: 85, spe: 100 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Red',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 308,
      otherFormes: ['medicham'],
      species: 'medicham-mega',
      types: [TypesEnum.Fighting, TypesEnum.Psychic],
      weightkg: 31.5,
      aliases: ['megamedi']
    }
  ],
  [
    'electrike',
    {
      abilities: { first: 'static', second: 'lightningrod', hidden: 'minus' },
      baseStats: { hp: 40, atk: 45, def: 40, spa: 65, spd: 40, spe: 65 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Green',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['manectric'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 309,
      species: 'electrike',
      types: [TypesEnum.Electric],
      weightkg: 15.2,
      aliases: ['rakurai']
    }
  ],
  [
    'manectric',
    {
      abilities: { first: 'static', second: 'lightningrod', hidden: 'minus' },
      baseStats: { hp: 70, atk: 75, def: 60, spa: 105, spd: 60, spe: 105 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 26,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 310,
      otherFormes: ['manectricmega'],
      prevo: 'electrike',
      species: 'manectric',
      types: [TypesEnum.Electric],
      weightkg: 40.2,
      aliases: ['raiboruto']
    }
  ],
  [
    'manectricmega',
    {
      abilities: { first: 'intimidate' },
      baseSpecies: 'manectric',
      baseStats: { hp: 70, atk: 75, def: 80, spa: 135, spd: 80, spe: 135 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.8,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 310,
      otherFormes: ['manectric'],
      species: 'manectric-mega',
      types: [TypesEnum.Electric],
      weightkg: 44
    }
  ],
  [
    'plusle',
    {
      abilities: { first: 'plus', hidden: 'lightningrod' },
      baseStats: { hp: 60, atk: 50, def: 40, spa: 85, spd: 75, spe: 95 },
      catchRate: {
        base: 200,
        percentageWithOrdinaryPokeballAtFullHealth: '36.6%'
      },
      color: 'Yellow',
      eggGroups: ['Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 311,
      species: 'plusle',
      types: [TypesEnum.Electric],
      weightkg: 4.2,
      aliases: ['purasuru']
    }
  ],
  [
    'minun',
    {
      abilities: { first: 'minus', hidden: 'voltabsorb' },
      baseStats: { hp: 60, atk: 40, def: 50, spa: 75, spd: 85, spe: 95 },
      catchRate: {
        base: 200,
        percentageWithOrdinaryPokeballAtFullHealth: '36.6%'
      },
      color: 'Yellow',
      eggGroups: ['Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 312,
      species: 'minun',
      types: [TypesEnum.Electric],
      weightkg: 4.2,
      aliases: ['mainan']
    }
  ],
  [
    'volbeat',
    {
      abilities: { first: 'illuminate', second: 'swarm', hidden: 'prankster' },
      baseStats: { hp: 65, atk: 73, def: 75, spa: 47, spd: 85, spe: 85 },
      catchRate: {
        base: 150,
        percentageWithOrdinaryPokeballAtFullHealth: '29.5%'
      },
      color: 'Gray',
      eggGroups: ['Bug', 'Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      genderRatio: { male: '100%', female: '0%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 3855,
      num: 313,
      species: 'volbeat',
      types: [TypesEnum.Bug],
      weightkg: 17.7,
      aliases: ['barubiito']
    }
  ],
  [
    'illumise',
    {
      abilities: { first: 'oblivious', second: 'tintedlens', hidden: 'prankster' },
      baseStats: { hp: 65, atk: 47, def: 75, spa: 73, spd: 85, spe: 85 },
      catchRate: {
        base: 150,
        percentageWithOrdinaryPokeballAtFullHealth: '29.5%'
      },
      color: 'Purple',
      eggGroups: ['Bug', 'Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Fluctuating',
      minimumHatchTime: 3855,
      num: 314,
      species: 'illumise',
      types: [TypesEnum.Bug],
      weightkg: 17.7,
      aliases: ['irumiize']
    }
  ],
  [
    'roselia',
    {
      abilities: {
        first: 'naturalcure',
        second: 'poisonpoint',
        hidden: 'leafguard'
      },
      baseStats: { hp: 50, atk: 60, def: 45, spa: 100, spd: 80, spe: 65 },
      catchRate: {
        base: 150,
        percentageWithOrdinaryPokeballAtFullHealth: '29.5%'
      },
      color: 'Green',
      eggGroups: ['Fairy', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 'Level up during Daytime with happiness of at least 220',
      evos: ['roserade'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 315,
      prevo: 'budew',
      species: 'roselia',
      types: [TypesEnum.Grass, TypesEnum.Poison],
      weightkg: 2,
      aliases: ['rozeria']
    }
  ],
  [
    'gulpin',
    {
      abilities: { first: 'liquidooze', second: 'stickyhold', hidden: 'gluttony' },
      baseStats: { hp: 70, atk: 43, def: 53, spa: 43, spd: 53, spe: 40 },
      catchRate: {
        base: 225,
        percentageWithOrdinaryPokeballAtFullHealth: '39.9%'
      },
      color: 'Green',
      eggGroups: ['Amorphous'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['swalot'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Fluctuating',
      minimumHatchTime: 5140,
      num: 316,
      species: 'gulpin',
      types: [TypesEnum.Poison],
      weightkg: 10.3,
      aliases: ['gokurin']
    }
  ],
  [
    'swalot',
    {
      abilities: { first: 'liquidooze', second: 'stickyhold', hidden: 'gluttony' },
      baseStats: { hp: 100, atk: 73, def: 83, spa: 73, spd: 83, spe: 55 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Purple',
      eggGroups: ['Amorphous'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 26,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Fluctuating',
      minimumHatchTime: 5140,
      num: 317,
      prevo: 'gulpin',
      species: 'swalot',
      types: [TypesEnum.Poison],
      weightkg: 80,
      aliases: ['marunoomu']
    }
  ],
  [
    'carvanha',
    {
      abilities: { first: 'roughskin', hidden: 'speedboost' },
      baseStats: { hp: 45, atk: 90, def: 20, spa: 65, spd: 20, spe: 65 },
      catchRate: {
        base: 225,
        percentageWithOrdinaryPokeballAtFullHealth: '39.9%'
      },
      color: 'Red',
      eggGroups: ['Water 2'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['sharpedo'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 318,
      species: 'carvanha',
      types: [TypesEnum.Water, TypesEnum.Dark],
      weightkg: 20.8,
      aliases: ['kibania']
    }
  ],
  [
    'sharpedo',
    {
      abilities: { first: 'roughskin', hidden: 'speedboost' },
      baseStats: { hp: 70, atk: 120, def: 40, spa: 95, spd: 40, spe: 95 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Blue',
      eggGroups: ['Water 2'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 30,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.8,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 319,
      otherFormes: ['sharpedomega'],
      prevo: 'carvanha',
      species: 'sharpedo',
      types: [TypesEnum.Water, TypesEnum.Dark],
      weightkg: 88.8,
      aliases: ['samehadaa']
    }
  ],
  [
    'sharpedomega',
    {
      abilities: { first: 'strongjaw' },
      baseSpecies: 'sharpedo',
      baseStats: { hp: 70, atk: 140, def: 70, spa: 110, spd: 65, spe: 105 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Blue',
      eggGroups: ['Water 2'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 319,
      otherFormes: ['sharpedo'],
      species: 'sharpedo-mega',
      types: [TypesEnum.Water, TypesEnum.Dark],
      weightkg: 130.3,
      aliases: ['megashark']
    }
  ],
  [
    'wailmer',
    {
      abilities: { first: 'waterveil', second: 'oblivious', hidden: 'pressure' },
      baseStats: { hp: 130, atk: 70, def: 35, spa: 70, spd: 35, spe: 60 },
      catchRate: {
        base: 125,
        percentageWithOrdinaryPokeballAtFullHealth: '25.7%'
      },
      color: 'Blue',
      eggGroups: ['Field', 'Water 2'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['wailord'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2,
      isEggObtainable: true,
      levellingRate: 'Fluctuating',
      minimumHatchTime: 10280,
      num: 320,
      species: 'wailmer',
      types: [TypesEnum.Water],
      weightkg: 130,
      aliases: ['hoeruko']
    }
  ],
  [
    'wailord',
    {
      abilities: { first: 'waterveil', second: 'oblivious', hidden: 'pressure' },
      baseStats: { hp: 170, atk: 90, def: 45, spa: 90, spd: 45, spe: 60 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Blue',
      eggGroups: ['Field', 'Water 2'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 40,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 14.5,
      isEggObtainable: true,
      levellingRate: 'Fluctuating',
      minimumHatchTime: 10280,
      num: 321,
      prevo: 'wailmer',
      species: 'wailord',
      types: [TypesEnum.Water],
      weightkg: 398,
      aliases: ['hoeruoo']
    }
  ],
  [
    'numel',
    {
      abilities: { first: 'oblivious', second: 'simple', hidden: 'owntempo' },
      baseStats: { hp: 60, atk: 60, def: 40, spa: 65, spd: 45, spe: 35 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Yellow',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['camerupt'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 322,
      species: 'numel',
      types: [TypesEnum.Fire, TypesEnum.Ground],
      weightkg: 24,
      aliases: ['donmeru']
    }
  ],
  [
    'camerupt',
    {
      abilities: {
        first: 'magmaarmor',
        second: 'solidrock',
        hidden: 'angerpoint'
      },
      baseStats: { hp: 70, atk: 100, def: 70, spa: 105, spd: 75, spe: 40 },
      catchRate: {
        base: 150,
        percentageWithOrdinaryPokeballAtFullHealth: '29.5%'
      },
      color: 'Red',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 1, spd: 0, spe: 0 },
      evoLevel: 33,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.9,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 323,
      otherFormes: ['cameruptmega'],
      prevo: 'numel',
      species: 'camerupt',
      types: [TypesEnum.Fire, TypesEnum.Ground],
      weightkg: 220,
      aliases: ['bakuuda', 'camel']
    }
  ],
  [
    'cameruptmega',
    {
      abilities: { first: 'sheerforce' },
      baseSpecies: 'camerupt',
      baseStats: { hp: 70, atk: 120, def: 100, spa: 145, spd: 105, spe: 20 },
      catchRate: {
        base: 150,
        percentageWithOrdinaryPokeballAtFullHealth: '29.5%'
      },
      color: 'Red',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 1, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 323,
      otherFormes: ['camerupt'],
      species: 'camerupt-mega',
      types: [TypesEnum.Fire, TypesEnum.Ground],
      weightkg: 320.5
    }
  ],
  [
    'torkoal',
    {
      abilities: { first: 'whitesmoke', second: 'drought', hidden: 'shellarmor' },
      baseStats: { hp: 70, atk: 85, def: 140, spa: 85, spd: 70, spe: 20 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 324,
      species: 'torkoal',
      types: [TypesEnum.Fire],
      weightkg: 80.4,
      aliases: ['kootasu']
    }
  ],
  [
    'spoink',
    {
      abilities: { first: 'thickfat', second: 'owntempo', hidden: 'gluttony' },
      baseStats: { hp: 60, atk: 25, def: 35, spa: 70, spd: 80, spe: 60 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Black',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['grumpig'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      num: 325,
      species: 'spoink',
      types: [TypesEnum.Psychic],
      weightkg: 30.6,
      aliases: ['banebuu']
    }
  ],
  [
    'grumpig',
    {
      abilities: { first: 'thickfat', second: 'owntempo', hidden: 'gluttony' },
      baseStats: { hp: 80, atk: 45, def: 65, spa: 90, spd: 110, spe: 80 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Purple',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 32,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      num: 326,
      prevo: 'spoink',
      species: 'grumpig',
      types: [TypesEnum.Psychic],
      weightkg: 71.5,
      aliases: ['buupiggu']
    }
  ],
  [
    'spinda',
    {
      abilities: { first: 'owntempo', second: 'tangledfeet', hidden: 'contrary' },
      baseStats: { hp: 60, atk: 60, def: 60, spa: 60, spd: 60, spe: 60 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Field', 'Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 3855,
      num: 327,
      species: 'spinda',
      types: [TypesEnum.Normal],
      weightkg: 5,
      aliases: ['patchiiru']
    }
  ],
  [
    'trapinch',
    {
      abilities: {
        first: 'hypercutter',
        second: 'arenatrap',
        hidden: 'sheerforce'
      },
      baseStats: { hp: 45, atk: 100, def: 45, spa: 45, spd: 45, spe: 10 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['vibrava'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 328,
      species: 'trapinch',
      types: [TypesEnum.Ground],
      weightkg: 15,
      aliases: ['nakkuraa']
    }
  ],
  [
    'vibrava',
    {
      abilities: { first: 'levitate' },
      baseStats: { hp: 50, atk: 70, def: 50, spa: 50, spd: 50, spe: 70 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Green',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 1 },
      evoLevel: 35,
      evos: ['flygon'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 329,
      prevo: 'trapinch',
      species: 'vibrava',
      types: [TypesEnum.Ground, TypesEnum.Dragon],
      weightkg: 15.3,
      aliases: ['biburaaba']
    }
  ],
  [
    'flygon',
    {
      abilities: { first: 'levitate' },
      baseStats: { hp: 80, atk: 100, def: 80, spa: 80, spd: 80, spe: 100 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 45,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 330,
      prevo: 'vibrava',
      species: 'flygon',
      types: [TypesEnum.Ground, TypesEnum.Dragon],
      weightkg: 82,
      aliases: ['furaigon']
    }
  ],
  [
    'cacnea',
    {
      abilities: { first: 'sandveil', hidden: 'waterabsorb' },
      baseStats: { hp: 50, atk: 85, def: 40, spa: 85, spd: 40, spe: 35 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Green',
      eggGroups: ['Grass', 'Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['cacturne'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 331,
      species: 'cacnea',
      types: [TypesEnum.Grass],
      weightkg: 51.3,
      aliases: ['sabonea']
    }
  ],
  [
    'cacturne',
    {
      abilities: { first: 'sandveil', hidden: 'waterabsorb' },
      baseStats: { hp: 70, atk: 115, def: 60, spa: 115, spd: 60, spe: 55 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Green',
      eggGroups: ['Grass', 'Human-Like'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 1, spd: 0, spe: 0 },
      evoLevel: 32,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 332,
      prevo: 'cacnea',
      species: 'cacturne',
      types: [TypesEnum.Grass, TypesEnum.Dark],
      weightkg: 77.4,
      aliases: ['nokutasu']
    }
  ],
  [
    'swablu',
    {
      abilities: { first: 'naturalcure', hidden: 'cloudnine' },
      baseStats: { hp: 45, atk: 40, def: 60, spa: 40, spd: 75, spe: 50 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Blue',
      eggGroups: ['Flying', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['altaria'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 5140,
      num: 333,
      species: 'swablu',
      types: [TypesEnum.Normal, TypesEnum.Flying],
      weightkg: 1.2,
      aliases: ['chirutto']
    }
  ],
  [
    'altaria',
    {
      abilities: { first: 'naturalcure', hidden: 'cloudnine' },
      baseStats: { hp: 75, atk: 70, def: 90, spa: 70, spd: 105, spe: 80 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Flying', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 35,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 5140,
      num: 334,
      otherFormes: ['altariamega'],
      prevo: 'swablu',
      species: 'altaria',
      types: [TypesEnum.Dragon, TypesEnum.Flying],
      weightkg: 20.6,
      aliases: ['chirutarisu']
    }
  ],
  [
    'altariamega',
    {
      abilities: { first: 'pixilate' },
      baseSpecies: 'altaria',
      baseStats: { hp: 75, atk: 110, def: 110, spa: 110, spd: 105, spe: 80 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Flying', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 5140,
      num: 334,
      otherFormes: ['altaria'],
      species: 'altaria-mega',
      types: [TypesEnum.Dragon, TypesEnum.Fairy],
      weightkg: 20.6
    }
  ],
  [
    'zangoose',
    {
      abilities: { first: 'immunity', hidden: 'toxicboost' },
      baseStats: { hp: 73, atk: 115, def: 60, spa: 60, spd: 60, spe: 90 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 5140,
      num: 335,
      species: 'zangoose',
      types: [TypesEnum.Normal],
      weightkg: 40.3,
      aliases: ['zanguusu']
    }
  ],
  [
    'seviper',
    {
      abilities: { first: 'shedskin', hidden: 'infiltrator' },
      baseStats: { hp: 73, atk: 100, def: 60, spa: 100, spd: 60, spe: 65 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Black',
      eggGroups: ['Field', 'Dragon'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 1, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.7,
      isEggObtainable: true,
      levellingRate: 'Fluctuating',
      minimumHatchTime: 5140,
      num: 336,
      species: 'seviper',
      types: [TypesEnum.Poison],
      weightkg: 52.5,
      aliases: ['habuneeku']
    }
  ],
  [
    'lunatone',
    {
      abilities: { first: 'levitate' },
      baseStats: { hp: 90, atk: 55, def: 65, spa: 95, spd: 85, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 6425,
      num: 337,
      species: 'lunatone',
      types: [TypesEnum.Rock, TypesEnum.Psychic],
      weightkg: 168,
      aliases: ['runatoon']
    }
  ],
  [
    'solrock',
    {
      abilities: { first: 'levitate' },
      baseStats: { hp: 90, atk: 95, def: 85, spa: 55, spd: 65, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 6425,
      num: 338,
      species: 'solrock',
      types: [TypesEnum.Rock, TypesEnum.Psychic],
      weightkg: 154,
      aliases: ['sorurokku']
    }
  ],
  [
    'barboach',
    {
      abilities: {
        first: 'oblivious',
        second: 'anticipation',
        hidden: 'hydration'
      },
      baseStats: { hp: 50, atk: 48, def: 43, spa: 46, spd: 41, spe: 60 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Gray',
      eggGroups: ['Water 2'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['whiscash'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 339,
      species: 'barboach',
      types: [TypesEnum.Water, TypesEnum.Ground],
      weightkg: 1.9,
      aliases: ['dojotchi']
    }
  ],
  [
    'whiscash',
    {
      abilities: {
        first: 'oblivious',
        second: 'anticipation',
        hidden: 'hydration'
      },
      baseStats: { hp: 110, atk: 78, def: 73, spa: 76, spd: 71, spe: 60 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Blue',
      eggGroups: ['Water 2'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 30,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 340,
      prevo: 'barboach',
      species: 'whiscash',
      types: [TypesEnum.Water, TypesEnum.Ground],
      weightkg: 23.6,
      aliases: ['namazun']
    }
  ],
  [
    'corphish',
    {
      abilities: {
        first: 'hypercutter',
        second: 'shellarmor',
        hidden: 'adaptability'
      },
      baseStats: { hp: 43, atk: 80, def: 65, spa: 50, spd: 35, spe: 35 },
      catchRate: {
        base: 205,
        percentageWithOrdinaryPokeballAtFullHealth: '37.2%'
      },
      color: 'Red',
      eggGroups: ['Water 1', 'Water 3'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['crawdaunt'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Fluctuating',
      minimumHatchTime: 3855,
      num: 341,
      species: 'corphish',
      types: [TypesEnum.Water],
      weightkg: 11.5,
      aliases: ['heigani']
    }
  ],
  [
    'crawdaunt',
    {
      abilities: {
        first: 'hypercutter',
        second: 'shellarmor',
        hidden: 'adaptability'
      },
      baseStats: { hp: 63, atk: 120, def: 85, spa: 90, spd: 55, spe: 55 },
      catchRate: {
        base: 155,
        percentageWithOrdinaryPokeballAtFullHealth: '30.2%'
      },
      color: 'Red',
      eggGroups: ['Water 1', 'Water 3'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 30,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Fluctuating',
      minimumHatchTime: 3855,
      num: 342,
      prevo: 'corphish',
      species: 'crawdaunt',
      types: [TypesEnum.Water, TypesEnum.Dark],
      weightkg: 32.8,
      aliases: ['shizarigaa']
    }
  ],
  [
    'baltoy',
    {
      abilities: { first: 'levitate' },
      baseStats: { hp: 40, atk: 40, def: 55, spa: 40, spd: 70, spe: 55 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['claydol'],
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 343,
      species: 'baltoy',
      types: [TypesEnum.Ground, TypesEnum.Psychic],
      weightkg: 21.5,
      aliases: ['yajiron']
    }
  ],
  [
    'claydol',
    {
      abilities: { first: 'levitate' },
      baseStats: { hp: 60, atk: 70, def: 105, spa: 70, spd: 120, spe: 75 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Black',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 36,
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 344,
      prevo: 'baltoy',
      species: 'claydol',
      types: [TypesEnum.Ground, TypesEnum.Psychic],
      weightkg: 108,
      aliases: ['nendooru']
    }
  ],
  [
    'lileep',
    {
      abilities: { first: 'suctioncups', hidden: 'stormdrain' },
      baseStats: { hp: 66, atk: 41, def: 77, spa: 61, spd: 87, spe: 23 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Water 3'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['cradily'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 7710,
      num: 345,
      species: 'lileep',
      types: [TypesEnum.Rock, TypesEnum.Grass],
      weightkg: 23.8,
      aliases: ['ririira']
    }
  ],
  [
    'cradily',
    {
      abilities: { first: 'suctioncups', hidden: 'stormdrain' },
      baseStats: { hp: 86, atk: 81, def: 97, spa: 81, spd: 107, spe: 43 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Water 3'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 40,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 7710,
      num: 346,
      prevo: 'lileep',
      species: 'cradily',
      types: [TypesEnum.Rock, TypesEnum.Grass],
      weightkg: 60.4,
      aliases: ['yureidoru']
    }
  ],
  [
    'anorith',
    {
      abilities: { first: 'battlearmor', hidden: 'swiftswim' },
      baseStats: { hp: 45, atk: 95, def: 50, spa: 40, spd: 50, spe: 75 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Gray',
      eggGroups: ['Water 3'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['armaldo'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 7710,
      num: 347,
      species: 'anorith',
      types: [TypesEnum.Rock, TypesEnum.Bug],
      weightkg: 12.5,
      aliases: ['anopusu']
    }
  ],
  [
    'armaldo',
    {
      abilities: { first: 'battlearmor', hidden: 'swiftswim' },
      baseStats: { hp: 75, atk: 125, def: 100, spa: 70, spd: 80, spe: 45 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Gray',
      eggGroups: ['Water 3'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 40,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 7710,
      num: 348,
      prevo: 'anorith',
      species: 'armaldo',
      types: [TypesEnum.Rock, TypesEnum.Bug],
      weightkg: 68.2,
      aliases: ['aamarudo']
    }
  ],
  [
    'feebas',
    {
      abilities: {
        first: 'swiftswim',
        second: 'oblivious',
        hidden: 'adaptability'
      },
      baseStats: { hp: 20, atk: 15, def: 20, spa: 10, spd: 55, spe: 80 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Water 1', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['milotic'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 5140,
      num: 349,
      species: 'feebas',
      types: [TypesEnum.Water],
      weightkg: 7.4,
      aliases: ['hinbasu']
    }
  ],
  [
    'milotic',
    {
      abilities: {
        first: 'marvelscale',
        second: 'competitive',
        hidden: 'cutecharm'
      },
      baseStats: { hp: 95, atk: 60, def: 79, spa: 100, spd: 125, spe: 81 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Pink',
      eggGroups: ['Water 1', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 'Trade while holding Prism Scale',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 6.2,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 5140,
      num: 350,
      prevo: 'feebas',
      species: 'milotic',
      types: [TypesEnum.Water],
      weightkg: 162,
      aliases: ['milo', 'mirokarosu']
    }
  ],
  [
    'castform',
    {
      abilities: { first: 'forecast' },
      baseStats: { hp: 70, atk: 70, def: 70, spa: 70, spd: 70, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Gray',
      eggGroups: ['Fairy', 'Amorphous'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 351,
      otherFormes: ['castformsunny', 'castformrainy', 'castformsnowy'],
      species: 'castform',
      types: [TypesEnum.Normal],
      weightkg: 0.8,
      aliases: ['powarun']
    }
  ],
  [
    'castformsunny',
    {
      abilities: { first: 'forecast' },
      baseSpecies: 'castform',
      baseStats: { hp: 70, atk: 70, def: 70, spa: 70, spd: 70, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Fairy', 'Amorphous'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Sunny',
      formeLetter: 'S',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 351,
      otherFormes: ['castform', 'castformrainy', 'castformsnowy'],
      species: 'castform-sunny',
      types: [TypesEnum.Fire],
      weightkg: 0.8,
      aliases: ['castformfire', 'castforms']
    }
  ],
  [
    'castformrainy',
    {
      abilities: { first: 'forecast' },
      baseSpecies: 'castform',
      baseStats: { hp: 70, atk: 70, def: 70, spa: 70, spd: 70, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Fairy', 'Amorphous'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Rainy',
      formeLetter: 'R',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 351,
      otherFormes: ['castform', 'castformsunny', 'castformsnowy'],
      species: 'castform-rainy',
      types: [TypesEnum.Water],
      weightkg: 0.8,
      aliases: ['castformr', 'castformwater']
    }
  ],
  [
    'castformsnowy',
    {
      abilities: { first: 'forecast' },
      baseSpecies: 'castform',
      baseStats: { hp: 70, atk: 70, def: 70, spa: 70, spd: 70, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'White',
      eggGroups: ['Fairy', 'Amorphous'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Snowy',
      formeLetter: 'S',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 351,
      otherFormes: ['castform', 'castformsunny', 'castformrainy'],
      species: 'castform-snowy',
      types: [TypesEnum.Ice],
      weightkg: 0.8,
      aliases: ['castformh', 'castformice']
    }
  ],
  [
    'kecleon',
    {
      abilities: { first: 'colorchange', hidden: 'protean' },
      baseStats: { hp: 60, atk: 90, def: 70, spa: 60, spd: 120, spe: 40 },
      catchRate: {
        base: 200,
        percentageWithOrdinaryPokeballAtFullHealth: '36.6%'
      },
      color: 'Green',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 352,
      species: 'kecleon',
      types: [TypesEnum.Normal],
      weightkg: 22,
      aliases: ['kakureon']
    }
  ],
  [
    'shuppet',
    {
      abilities: { first: 'insomnia', second: 'frisk', hidden: 'cursedbody' },
      baseStats: { hp: 44, atk: 75, def: 35, spa: 63, spd: 33, spe: 45 },
      catchRate: {
        base: 225,
        percentageWithOrdinaryPokeballAtFullHealth: '39.9%'
      },
      color: 'Black',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['banette'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 6425,
      num: 353,
      species: 'shuppet',
      types: [TypesEnum.Ghost],
      weightkg: 2.3,
      aliases: ['kagebouzu']
    }
  ],
  [
    'banette',
    {
      abilities: { first: 'insomnia', second: 'frisk', hidden: 'cursedbody' },
      baseStats: { hp: 64, atk: 115, def: 65, spa: 83, spd: 63, spe: 65 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Black',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 37,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 6425,
      num: 354,
      otherFormes: ['banettemega'],
      prevo: 'shuppet',
      species: 'banette',
      types: [TypesEnum.Ghost],
      weightkg: 12.5,
      aliases: ['jupetta']
    }
  ],
  [
    'banettemega',
    {
      abilities: { first: 'prankster' },
      baseSpecies: 'banette',
      baseStats: { hp: 64, atk: 165, def: 75, spa: 93, spd: 83, spe: 75 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Black',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 6425,
      num: 354,
      otherFormes: ['banette'],
      species: 'banette-mega',
      types: [TypesEnum.Ghost],
      weightkg: 13
    }
  ],
  [
    'duskull',
    {
      abilities: { first: 'levitate', hidden: 'frisk' },
      baseStats: { hp: 20, atk: 40, def: 90, spa: 30, spd: 90, spe: 25 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Black',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['dusclops'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 6425,
      num: 355,
      species: 'duskull',
      types: [TypesEnum.Ghost],
      weightkg: 15,
      aliases: ['yomawaru']
    }
  ],
  [
    'dusclops',
    {
      abilities: { first: 'pressure', hidden: 'frisk' },
      baseStats: { hp: 40, atk: 70, def: 130, spa: 60, spd: 130, spe: 25 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Black',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 1, spe: 0 },
      evoLevel: 37,
      evos: ['dusknoir'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 6425,
      num: 356,
      prevo: 'duskull',
      species: 'dusclops',
      types: [TypesEnum.Ghost],
      weightkg: 30.6,
      aliases: ['samayooru']
    }
  ],
  [
    'tropius',
    {
      abilities: { first: 'chlorophyll', second: 'solarpower', hidden: 'harvest' },
      baseStats: { hp: 99, atk: 68, def: 83, spa: 72, spd: 87, spe: 51 },
      catchRate: {
        base: 200,
        percentageWithOrdinaryPokeballAtFullHealth: '36.6%'
      },
      color: 'Green',
      eggGroups: ['Monster', 'Grass'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 6425,
      num: 357,
      species: 'tropius',
      types: [TypesEnum.Grass, TypesEnum.Flying],
      weightkg: 100,
      aliases: ['toropiusu']
    }
  ],
  [
    'chimecho',
    {
      abilities: { first: 'levitate' },
      baseStats: { hp: 75, atk: 50, def: 80, spa: 95, spd: 90, spe: 65 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 1, spe: 0 },
      evoLevel: 'Level up during Nighttime with happiness of at least 220',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 6425,
      num: 358,
      prevo: 'chingling',
      species: 'chimecho',
      types: [TypesEnum.Psychic],
      weightkg: 1,
      aliases: ['chiriin']
    }
  ],
  [
    'absol',
    {
      abilities: { first: 'pressure', second: 'superluck', hidden: 'justified' },
      baseStats: { hp: 65, atk: 130, def: 60, spa: 75, spd: 60, spe: 75 },
      catchRate: { base: 30, percentageWithOrdinaryPokeballAtFullHealth: '8.8%' },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      num: 359,
      otherFormes: ['absolmega'],
      species: 'absol',
      types: [TypesEnum.Dark],
      weightkg: 47,
      aliases: ['abusoru']
    }
  ],
  [
    'absolmega',
    {
      abilities: { first: 'magicbounce' },
      baseSpecies: 'absol',
      baseStats: { hp: 65, atk: 150, def: 60, spa: 115, spd: 60, spe: 115 },
      catchRate: { base: 30, percentageWithOrdinaryPokeballAtFullHealth: '8.8%' },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      num: 359,
      otherFormes: ['absol'],
      species: 'absol-mega',
      types: [TypesEnum.Dark],
      weightkg: 49
    }
  ],
  [
    'wynaut',
    {
      abilities: { first: 'shadowtag', hidden: 'telepathy' },
      baseStats: { hp: 95, atk: 23, def: 48, spa: 23, spd: 48, spe: 23 },
      catchRate: {
        base: 125,
        percentageWithOrdinaryPokeballAtFullHealth: '25.7%'
      },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['wobbuffet'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 360,
      species: 'wynaut',
      types: [TypesEnum.Psychic],
      weightkg: 14,
      aliases: ['soonano']
    }
  ],
  [
    'snorunt',
    {
      abilities: { first: 'innerfocus', second: 'icebody', hidden: 'moody' },
      baseStats: { hp: 50, atk: 50, def: 50, spa: 50, spd: 50, spe: 50 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Gray',
      eggGroups: ['Fairy', 'Mineral'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['glalie', 'froslass'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 361,
      species: 'snorunt',
      types: [TypesEnum.Ice],
      weightkg: 16.8,
      aliases: ['yukiwarashi']
    }
  ],
  [
    'glalie',
    {
      abilities: { first: 'innerfocus', second: 'icebody', hidden: 'moody' },
      baseStats: { hp: 80, atk: 80, def: 80, spa: 80, spd: 80, spe: 80 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Gray',
      eggGroups: ['Fairy', 'Mineral'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 42,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 362,
      otherFormes: ['glaliemega'],
      prevo: 'snorunt',
      species: 'glalie',
      types: [TypesEnum.Ice],
      weightkg: 256.5,
      aliases: ['onigoori']
    }
  ],
  [
    'glaliemega',
    {
      abilities: { first: 'refrigerate' },
      baseSpecies: 'glalie',
      baseStats: { hp: 80, atk: 120, def: 80, spa: 120, spd: 80, spe: 100 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Gray',
      eggGroups: ['Fairy', 'Mineral'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 362,
      otherFormes: ['glalie'],
      species: 'glalie-mega',
      types: [TypesEnum.Ice],
      weightkg: 350.2
    }
  ],
  [
    'spheal',
    {
      abilities: { first: 'thickfat', second: 'icebody', hidden: 'oblivious' },
      baseStats: { hp: 70, atk: 40, def: 50, spa: 55, spd: 50, spe: 25 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Blue',
      eggGroups: ['Water 1', 'Field'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['sealeo'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 363,
      species: 'spheal',
      types: [TypesEnum.Ice, TypesEnum.Water],
      weightkg: 39.5,
      aliases: ['tamazarashi']
    }
  ],
  [
    'sealeo',
    {
      abilities: { first: 'thickfat', second: 'icebody', hidden: 'oblivious' },
      baseStats: { hp: 90, atk: 60, def: 70, spa: 75, spd: 70, spe: 45 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Blue',
      eggGroups: ['Water 1', 'Field'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 32,
      evos: ['walrein'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 364,
      prevo: 'spheal',
      species: 'sealeo',
      types: [TypesEnum.Ice, TypesEnum.Water],
      weightkg: 87.6,
      aliases: ['seejong', 'todoguraa']
    }
  ],
  [
    'walrein',
    {
      abilities: { first: 'thickfat', second: 'icebody', hidden: 'oblivious' },
      baseStats: { hp: 110, atk: 80, def: 90, spa: 95, spd: 90, spe: 65 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Field'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 44,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 365,
      prevo: 'sealeo',
      species: 'walrein',
      types: [TypesEnum.Ice, TypesEnum.Water],
      weightkg: 150.6,
      aliases: ['todozeruga']
    }
  ],
  [
    'clamperl',
    {
      abilities: { first: 'shellarmor', hidden: 'rattled' },
      baseStats: { hp: 35, atk: 64, def: 85, spa: 74, spd: 55, spe: 32 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Blue',
      eggGroups: ['Water 1'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['huntail', 'gorebyss'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 5140,
      num: 366,
      species: 'clamperl',
      types: [TypesEnum.Water],
      weightkg: 52.5,
      aliases: ['paaruru']
    }
  ],
  [
    'huntail',
    {
      abilities: { first: 'swiftswim', hidden: 'waterveil' },
      baseStats: { hp: 55, atk: 104, def: 105, spa: 94, spd: 75, spe: 52 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Blue',
      eggGroups: ['Water 1'],
      evYields: { hp: 0, atk: 1, def: 1, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Trade while holding Deep Sea Tooth',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 5140,
      num: 367,
      prevo: 'clamperl',
      species: 'huntail',
      types: [TypesEnum.Water],
      weightkg: 27,
      aliases: ['hanteeru']
    }
  ],
  [
    'gorebyss',
    {
      abilities: { first: 'swiftswim', hidden: 'hydration' },
      baseStats: { hp: 55, atk: 84, def: 105, spa: 114, spd: 75, spe: 52 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Pink',
      eggGroups: ['Water 1'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 'Trade while holding Deep Sea Scale',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.8,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 5140,
      num: 368,
      prevo: 'clamperl',
      species: 'gorebyss',
      types: [TypesEnum.Water],
      weightkg: 22.6,
      aliases: ['sakurabisu']
    }
  ],
  [
    'relicanth',
    {
      abilities: { first: 'swiftswim', second: 'rockhead', hidden: 'sturdy' },
      baseStats: { hp: 100, atk: 90, def: 130, spa: 45, spd: 65, spe: 55 },
      catchRate: { base: 25, percentageWithOrdinaryPokeballAtFullHealth: '7.7%' },
      color: 'Gray',
      eggGroups: ['Water 1', 'Water 2'],
      evYields: { hp: 1, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 369,
      species: 'relicanth',
      types: [TypesEnum.Water, TypesEnum.Rock],
      weightkg: 23.4,
      aliases: ['jiiransu']
    }
  ],
  [
    'luvdisc',
    {
      abilities: { first: 'swiftswim', hidden: 'hydration' },
      baseStats: { hp: 43, atk: 30, def: 55, spa: 40, spd: 65, spe: 97 },
      catchRate: {
        base: 225,
        percentageWithOrdinaryPokeballAtFullHealth: '39.9%'
      },
      color: 'Pink',
      eggGroups: ['Water 2'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      genderRatio: { male: '25%', female: '75%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      num: 370,
      species: 'luvdisc',
      types: [TypesEnum.Water],
      weightkg: 8.7,
      aliases: ['rabukasu']
    }
  ],
  [
    'bagon',
    {
      abilities: { first: 'rockhead', hidden: 'sheerforce' },
      baseStats: { hp: 45, atk: 75, def: 60, spa: 40, spd: 30, spe: 50 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Dragon'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['shelgon'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 371,
      species: 'bagon',
      types: [TypesEnum.Dragon],
      weightkg: 42.1,
      aliases: ['tatsubei']
    }
  ],
  [
    'shelgon',
    {
      abilities: { first: 'rockhead', hidden: 'overcoat' },
      baseStats: { hp: 65, atk: 95, def: 100, spa: 60, spd: 50, spe: 50 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'White',
      eggGroups: ['Dragon'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 30,
      evos: ['salamence'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 372,
      prevo: 'bagon',
      species: 'shelgon',
      types: [TypesEnum.Dragon],
      weightkg: 110.5,
      aliases: ['komoruu']
    }
  ],
  [
    'salamence',
    {
      abilities: { first: 'intimidate', hidden: 'moxie' },
      baseStats: { hp: 95, atk: 135, def: 80, spa: 110, spd: 80, spe: 100 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Dragon'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 50,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 373,
      otherFormes: ['salamencemega'],
      prevo: 'shelgon',
      species: 'salamence',
      types: [TypesEnum.Dragon, TypesEnum.Flying],
      weightkg: 102.6,
      aliases: ['boomanda', 'mence']
    }
  ],
  [
    'salamencemega',
    {
      abilities: { first: 'aerilate' },
      baseSpecies: 'salamence',
      baseStats: { hp: 95, atk: 145, def: 130, spa: 120, spd: 90, spe: 120 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Dragon'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.8,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 373,
      otherFormes: ['salamence'],
      species: 'salamence-mega',
      types: [TypesEnum.Dragon, TypesEnum.Flying],
      weightkg: 112.6,
      aliases: ['megamence']
    }
  ],
  [
    'beldum',
    {
      abilities: { first: 'clearbody', hidden: 'lightmetal' },
      baseStats: { hp: 40, atk: 55, def: 80, spa: 35, spd: 60, spe: 30 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Blue',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['metang'],
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 374,
      species: 'beldum',
      types: [TypesEnum.Steel, TypesEnum.Psychic],
      weightkg: 95.2,
      aliases: ['danbaru']
    }
  ],
  [
    'metang',
    {
      abilities: { first: 'clearbody', hidden: 'lightmetal' },
      baseStats: { hp: 60, atk: 75, def: 100, spa: 55, spd: 80, spe: 50 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Blue',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 20,
      evos: ['metagross'],
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 375,
      prevo: 'beldum',
      species: 'metang',
      types: [TypesEnum.Steel, TypesEnum.Psychic],
      weightkg: 202.5,
      aliases: ['metangu']
    }
  ],
  [
    'metagross',
    {
      abilities: { first: 'clearbody', hidden: 'lightmetal' },
      baseStats: { hp: 80, atk: 135, def: 130, spa: 95, spd: 90, spe: 70 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Blue',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 3, spa: 0, spd: 0, spe: 0 },
      evoLevel: 45,
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 376,
      otherFormes: ['metagrossmega'],
      prevo: 'metang',
      species: 'metagross',
      types: [TypesEnum.Steel, TypesEnum.Psychic],
      weightkg: 550,
      aliases: ['gross', 'metagurosu']
    }
  ],
  [
    'metagrossmega',
    {
      abilities: { first: 'toughclaws' },
      baseSpecies: 'metagross',
      baseStats: { hp: 80, atk: 145, def: 150, spa: 105, spd: 110, spe: 110 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Blue',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 3, spa: 0, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 376,
      otherFormes: ['metagross'],
      species: 'metagross-mega',
      types: [TypesEnum.Steel, TypesEnum.Psychic],
      weightkg: 942.9,
      aliases: ['megagross', 'mgross']
    }
  ],
  [
    'regirock',
    {
      abilities: { first: 'clearbody', hidden: 'sturdy' },
      baseStats: { hp: 80, atk: 100, def: 200, spa: 50, spd: 100, spe: 50 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Brown',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 3, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.7,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 20560,
      num: 377,
      species: 'regirock',
      types: [TypesEnum.Rock],
      weightkg: 230,
      aliases: ['rejirokku'],
      legendary: true
    }
  ],
  [
    'regice',
    {
      abilities: { first: 'clearbody', hidden: 'icebody' },
      baseStats: { hp: 80, atk: 50, def: 100, spa: 100, spd: 200, spe: 50 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 3, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.8,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 20560,
      num: 378,
      species: 'regice',
      types: [TypesEnum.Ice],
      weightkg: 175,
      aliases: ['rejiaisu'],
      legendary: true
    }
  ],
  [
    'registeel',
    {
      abilities: { first: 'clearbody', hidden: 'lightmetal' },
      baseStats: { hp: 80, atk: 75, def: 150, spa: 75, spd: 150, spe: 50 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 1, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.9,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 20560,
      num: 379,
      species: 'registeel',
      types: [TypesEnum.Steel],
      weightkg: 205,
      aliases: ['rejisuchiru'],
      legendary: true
    }
  ],
  [
    'latias',
    {
      abilities: { first: 'levitate' },
      baseStats: { hp: 80, atk: 80, def: 90, spa: 110, spd: 130, spe: 110 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Red',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 3, spe: 0 },
      genderRatio: { male: '0%', female: '100%' },
      heightm: 1.4,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 380,
      otherFormes: ['latiasmega'],
      species: 'latias',
      types: [TypesEnum.Dragon, TypesEnum.Psychic],
      weightkg: 40,
      aliases: ['rateiasu'],
      legendary: true
    }
  ],
  [
    'latiasmega',
    {
      abilities: { first: 'levitate' },
      baseSpecies: 'latias',
      baseStats: { hp: 80, atk: 100, def: 120, spa: 140, spd: 150, spe: 110 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 3, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 1.8,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 380,
      otherFormes: ['latias'],
      species: 'latias-mega',
      types: [TypesEnum.Dragon, TypesEnum.Psychic],
      weightkg: 52,
      legendary: true
    }
  ],
  [
    'latios',
    {
      abilities: { first: 'levitate' },
      baseStats: { hp: 80, atk: 90, def: 80, spa: 130, spd: 110, spe: 110 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      genderRatio: { male: '100%', female: '0%' },
      heightm: 2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 381,
      otherFormes: ['latiosmega'],
      species: 'latios',
      types: [TypesEnum.Dragon, TypesEnum.Psychic],
      weightkg: 60,
      aliases: ['rateiosu'],
      legendary: true
    }
  ],
  [
    'latiosmega',
    {
      abilities: { first: 'levitate' },
      baseSpecies: 'latios',
      baseStats: { hp: 80, atk: 130, def: 100, spa: 160, spd: 120, spe: 110 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '100%', female: '0%' },
      heightm: 2.3,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 381,
      otherFormes: ['latios'],
      species: 'latios-mega',
      types: [TypesEnum.Dragon, TypesEnum.Psychic],
      weightkg: 70,
      legendary: true
    }
  ],
  [
    'kyogre',
    {
      abilities: { first: 'drizzle' },
      baseStats: { hp: 100, atk: 100, def: 90, spa: 150, spd: 140, spe: 90 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 4.5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 382,
      otherFormes: ['kyogreprimal'],
      species: 'kyogre',
      types: [TypesEnum.Water],
      weightkg: 352,
      aliases: ['kaiooga', 'ogre', 'shrek'],
      legendary: true
    }
  ],
  [
    'kyogreprimal',
    {
      abilities: { first: 'primordialsea' },
      baseSpecies: 'kyogre',
      baseStats: { hp: 100, atk: 150, def: 90, spa: 180, spd: 160, spe: 90 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      forme: 'Primal',
      formeLetter: 'P',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 9.8,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 382,
      otherFormes: ['kyogre'],
      species: 'kyogre-primal',
      types: [TypesEnum.Water],
      weightkg: 430,
      aliases: ['pogre', 'primalogre'],
      legendary: true
    }
  ],
  [
    'groudon',
    {
      abilities: { first: 'drought' },
      baseStats: { hp: 100, atk: 150, def: 140, spa: 100, spd: 90, spe: 90 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Red',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 3.5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 383,
      otherFormes: ['groudonprimal'],
      species: 'groudon',
      types: [TypesEnum.Ground],
      weightkg: 950,
      aliases: ['don', 'guraadon'],
      legendary: true
    }
  ],
  [
    'groudonprimal',
    {
      abilities: { first: 'desolateland' },
      baseSpecies: 'groudon',
      baseStats: { hp: 100, atk: 180, def: 160, spa: 150, spd: 90, spe: 90 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Red',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Primal',
      formeLetter: 'P',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 383,
      otherFormes: ['groudon'],
      species: 'groudon-primal',
      types: [TypesEnum.Ground, TypesEnum.Fire],
      weightkg: 999.7,
      aliases: ['pdon', 'primaldon'],
      legendary: true
    }
  ],
  [
    'rayquaza',
    {
      abilities: { first: 'airlock' },
      baseStats: { hp: 105, atk: 150, def: 90, spa: 150, spd: 90, spe: 95 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 1, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 7,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 384,
      otherFormes: ['rayquazamega'],
      species: 'rayquaza',
      types: [TypesEnum.Dragon, TypesEnum.Flying],
      weightkg: 206.5,
      aliases: ['fug', 'ray', 'rekkuuza'],
      legendary: true
    }
  ],
  [
    'rayquazamega',
    {
      abilities: { first: 'deltastream' },
      baseSpecies: 'rayquaza',
      baseStats: { hp: 105, atk: 180, def: 100, spa: 180, spd: 100, spe: 115 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 1, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 10.8,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 384,
      otherFormes: ['rayquaza'],
      species: 'rayquaza-mega',
      types: [TypesEnum.Dragon, TypesEnum.Flying],
      weightkg: 392,
      aliases: ['megaray', 'mray'],
      legendary: true
    }
  ],
  [
    'jirachi',
    {
      abilities: { first: 'serenegrace' },
      baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.3,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 385,
      species: 'jirachi',
      types: [TypesEnum.Steel, TypesEnum.Psychic],
      weightkg: 1.1,
      aliases: ['jiraachi', 'rachi'],
      mythical: true
    }
  ],
  [
    'deoxys',
    {
      abilities: { first: 'pressure' },
      baseForme: 'Normal',
      baseStats: { hp: 50, atk: 150, def: 50, spa: 150, spd: 50, spe: 150 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Red',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 1, spd: 0, spe: 1 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.7,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 386,
      otherFormes: ['deoxysattack', 'deoxysdefense', 'deoxysspeed'],
      species: 'deoxys',
      types: [TypesEnum.Psychic],
      weightkg: 60.8,
      aliases: ['deokishisu', 'deon', 'deoxysnormal'],
      mythical: true
    }
  ],
  [
    'deoxysattack',
    {
      abilities: { first: 'pressure' },
      baseSpecies: 'deoxys',
      baseStats: { hp: 50, atk: 180, def: 20, spa: 180, spd: 20, spe: 150 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Red',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 1, spd: 0, spe: 0 },
      forme: 'Attack',
      formeLetter: 'A',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.7,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 386,
      otherFormes: ['deoxys', 'deoxysdefense', 'deoxysspeed'],
      species: 'deoxys-attack',
      types: [TypesEnum.Psychic],
      weightkg: 60.8,
      aliases: ['deoa', 'deoxysa'],
      mythical: true
    }
  ],
  [
    'deoxysdefense',
    {
      abilities: { first: 'pressure' },
      baseSpecies: 'deoxys',
      baseStats: { hp: 50, atk: 70, def: 160, spa: 70, spd: 160, spe: 90 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Red',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 1, spe: 0 },
      forme: 'Defense',
      formeLetter: 'D',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.7,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 386,
      otherFormes: ['deoxys', 'deoxysattack', 'deoxysspeed'],
      species: 'deoxys-defense',
      types: [TypesEnum.Psychic],
      weightkg: 60.8,
      aliases: ['deod', 'deoxysd', 'deoxysdefence'],
      mythical: true
    }
  ],
  [
    'deoxysspeed',
    {
      abilities: { first: 'pressure' },
      baseSpecies: 'deoxys',
      baseStats: { hp: 50, atk: 95, def: 90, spa: 95, spd: 90, spe: 180 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Red',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      forme: 'Speed',
      formeLetter: 'S',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.7,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 386,
      otherFormes: ['deoxys', 'deoxysattack', 'deoxysdefense'],
      species: 'deoxys-speed',
      types: [TypesEnum.Psychic],
      weightkg: 60.8,
      aliases: ['deos', 'deoxyss'],
      mythical: true
    }
  ]
];

for (const [key, value] of entries) {
  value.key = key;

  Pokedex.set(key, value);
}
