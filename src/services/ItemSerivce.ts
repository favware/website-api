import { FuzzyItemArgs } from '#arguments/FuzzyArgs/FuzzyItemArgs';
import { ItemArgs } from '#arguments/ItemArgs';
import items from '#assets/items';
import { Item } from '#structures/Item';
import { addPropertyToClass } from '#utils/addPropertyToClass';
import { FuzzySearch } from '#utils/FuzzySearch';
import type { GraphQLSet } from '#utils/GraphQLSet';
import type Pokemon from '#utils/pokemon';
import { preParseInput, toLowerHyphenCase, toLowerSingleWordCase, toTitleSnakeCase } from '#utils/util';
import type Fuse from 'fuse.js';
import { Args } from 'type-graphql';

export class ItemService {
  public static getByItemName(@Args(() => ItemArgs) { item }: ItemArgs): Pokemon.Item | undefined {
    return items.get(item);
  }

  public static mapItemDataToItemGraphQL({ data, requestedFields }: MapItemDataToItemGraphQLParameters): Item {
    const item = new Item();

    addPropertyToClass(item, 'desc', data.desc, requestedFields);
    addPropertyToClass(item, 'name', data.name, requestedFields);
    addPropertyToClass(item, 'shortDesc', data.shortDesc, requestedFields);
    addPropertyToClass(item, 'isNonstandard', data.isNonstandard, requestedFields);
    addPropertyToClass(item, 'generationIntroduced', data.gen, requestedFields);
    addPropertyToClass(
      item,
      'sprite',
      data.specialSprite ?? `https://play.pokemonshowdown.com/sprites/itemicons/${toLowerHyphenCase(data.name)}.png`,
      requestedFields
    );
    addPropertyToClass(item, 'bulbapediaPage', `https://bulbapedia.bulbagarden.net/wiki/${toTitleSnakeCase(data.name)}`, requestedFields);
    addPropertyToClass(item, 'serebiiPage', `https://www.serebii.net/itemdex/${toLowerSingleWordCase(data.name)}.shtml`, requestedFields);
    if (!data.keyItem) {
      addPropertyToClass(item, 'smogonPage', `https://www.smogon.com/dex/ss/items/${toLowerHyphenCase(data.name)}`, requestedFields);
    }

    return item;
  }

  public static findByFuzzy(@Args(() => FuzzyItemArgs) { item, offset, reverse, take }: FuzzyItemArgs): Fuse.FuseResult<Pokemon.Item>[] {
    item = preParseInput(item);

    const fuzzyResult = new FuzzySearch(items, ['name', 'aliases'], { threshold: 0.3 }).runFuzzy(item);

    if (reverse) {
      fuzzyResult.reverse();
    }

    return fuzzyResult.slice(offset, offset + take);
  }
}

interface MapItemDataToItemGraphQLParameters {
  data: Pokemon.Item;
  requestedFields: GraphQLSet<keyof Item>;
}
