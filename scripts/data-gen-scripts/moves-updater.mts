import type { PokemonTypes } from '#assets/pokemon-source.js';
import { importFileFromWeb } from '#scripts/utils';
import { IsNonStandard } from '#utils/isNonStandardEnum.js';
import { moves as currentMoves } from '../../src/lib/assets/moves.js';
import { dataToClipboard } from './data-to-clipboard.js';
import { sortObjectByKey } from './map-data-key-sorter.js';

// Note that manual checking is still required for "basePower" and "target" properties!

const { Moves } = await importFileFromWeb({
  url: 'https://raw.githubusercontent.com/smogon/pokemon-showdown/master/data/moves.ts',
  temporaryFileName: 'moves.mjs'
});

const { MovesText } = await importFileFromWeb({
  url: 'https://raw.githubusercontent.com/smogon/pokemon-showdown/master/data/text/moves.ts',
  temporaryFileName: 'moves-texts.mjs'
});

const movesDataEntries = Object.entries<MoveData>(Moves);
const movesTextEntries = Object.entries<MoveText>(MovesText);

const newMap = new Map();

for (let [key, data] of currentMoves.entries()) {
  Reflect.deleteProperty(data, 'key');

  const moveFromData = movesDataEntries.find(([moveKey]) => moveKey === key)?.at(1) as MoveData | undefined;
  const moveFromText = movesTextEntries.find(([moveTextKey]) => moveTextKey === key)?.at(1) as MoveText | undefined;

  if (moveFromData) {
    if (moveFromData.isNonstandard === 'Past') {
      data.isNonstandard = IsNonStandard.Past;
    } else if (moveFromData.isNonstandard === 'CAP') {
      data.isNonstandard = IsNonStandard.Cap;
    } else if (moveFromData.isNonstandard === 'Unobtainable') {
      data.isNonstandard = IsNonStandard.Unobtainable;
    } else if (moveFromData.isNonstandard === 'LGPE') {
      data.isNonstandard = IsNonStandard.LetsGoPikachuEevee;
    } else if (moveFromData.isNonstandard === 'Gigantamax') {
      data.isNonstandard = IsNonStandard.Gigantamax;
    } else {
      Reflect.deleteProperty(data, 'isNonstandard');
    }

    if (moveFromData.accuracy === true) {
      data.accuracy = 100;
    } else {
      data.accuracy = moveFromData.accuracy as number;
    }

    if (moveFromData.contestType) {
      data.contestType = moveFromData.contestType;
    }

    data.category = moveFromData.category;
    data.pp = moveFromData.pp;
    data.priority = moveFromData.priority;
    data.name = moveFromData.name;
    data.type = moveFromData.type;
  }

  if (moveFromText) {
    if (key.startsWith('hiddenpower')) {
      data.shortDesc = "Varies in type based on the user's IVs.";
    } else {
      data.shortDesc = moveFromText.shortDesc;
    }

    if (moveFromText.desc) {
      data.desc = moveFromText.desc;
    }
  }

  newMap.set(key, sortObjectByKey(data));
}

for (const [key, moveFromData] of movesDataEntries) {
  // Skip if the move is already in the map, or if the key is 10000000voltthunderbolt (which is named tenmillionvoltthunderbolt)
  if (newMap.has(key) || key === '10000000voltthunderbolt') continue;

  let moveFromText = movesTextEntries.find(([moveTextKey]) => moveTextKey === key)?.at(1) as MoveText | undefined;

  if (!moveFromText) {
    console.error(`Missing move text for ${key}`);
    continue;
  }

  let data: PokemonTypes.Move = {
    shortDesc: moveFromText.shortDesc,
    name: moveFromData.name,
    category: moveFromData.category,
    pp: moveFromData.pp,
    priority: moveFromData.priority,
    type: moveFromData.type
  } as PokemonTypes.Move;

  if (moveFromData.accuracy === true) {
    data.accuracy = 100;
  } else {
    data.accuracy = moveFromData.accuracy as number;
  }

  if (moveFromData.contestType) {
    data.contestType = moveFromData.contestType;
  }

  if (moveFromData.isNonstandard === 'Past') {
    data.isNonstandard = IsNonStandard.Past;
  } else if (moveFromData.isNonstandard === 'CAP') {
    data.isNonstandard = IsNonStandard.Cap;
  } else if (moveFromData.isNonstandard === 'Unobtainable') {
    data.isNonstandard = IsNonStandard.Unobtainable;
  } else if (moveFromData.isNonstandard === 'LGPE') {
    data.isNonstandard = IsNonStandard.LetsGoPikachuEevee;
  } else if (moveFromData.isNonstandard === 'Gigantamax') {
    data.isNonstandard = IsNonStandard.Gigantamax;
  }

  if (moveFromText.desc) {
    data.desc = moveFromText.desc;
  }

  newMap.set(key, sortObjectByKey(data));
}

dataToClipboard([...newMap.entries()]);

interface MoveData {
  num: number;
  accuracy: boolean | number;
  basePower: number;
  category: PokemonTypes.MoveCategoryUnion;
  isNonstandard: string;
  name: string;
  pp: number;
  priority: number;
  flags: never;
  isZ: string;
  critRatio: number;
  secondary: null;
  target: string;
  type: `${Capitalize<keyof PokemonTypes.Types>}`;
  contestType: string;
}

interface MoveText {
  name: string;
  desc: string;
  shortDesc?: string;
}
