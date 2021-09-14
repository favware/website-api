import { FuzzyPokemonArgs } from '#arguments/FuzzyArgs/FuzzyPokemonArgs';
import { PokemonArgs } from '#arguments/PokemonArgs/PokemonArgs';
import { PokemonNumberArgs } from '#arguments/PokemonArgs/PokemonNumberArgs';
import { DexService } from '#services/DexService';
import { DexDetails } from '#structures/DexDetails';
import { getRequestedFields } from '#utils/getRequestedFields';
import { GraphQLSet } from '#utils/GraphQLSet';
import { Args, Query, Resolver } from 'type-graphql';

@Resolver(DexDetails)
export class DexResolver {
  public getPokemonByName = this.getPokemon.bind(this);
  public getPokemonBySpecies = this.getPokemon.bind(this);

  @Query(() => DexDetails, {
    description: [
      'Gets details on a single Pokémon based on National Pokédex number',
      'You can provide "takeFlavorTexts" to limit the amount of flavour texts to return, set the offset of where to start with "offsetFlavorTexts", and reverse the entire array with "reverseFlavorTexts".',
      'Reversal is applied before pagination!'
    ].join('\n')
  })
  public async getPokemonByDexNumber(
    @Args() args: PokemonNumberArgs,
    @getRequestedFields() requestedFields: GraphQLSet<keyof DexDetails>
  ): Promise<DexDetails> {
    const pokemonData = DexService.getByNationalDexNumber(args);

    if (!pokemonData) {
      throw new Error(`No Pokémon found for ${args.number}`);
    }

    const graphqlObject = await DexService.mapPokemonDataToPokemonGraphQL({
      data: pokemonData,
      offsetFlavorTexts: args.offsetFlavorTexts,
      reverseFlavorTexts: args.reverseFlavorTexts,
      takeFlavorTexts: args.takeFlavorTexts,
      requestedFields
    });

    if (!graphqlObject) {
      throw new Error(`Failed to get data for Pokémon: ${args.number}`);
    }

    return graphqlObject;
  }

  @Query(() => DexDetails, {
    description: [
      'Gets details on a single Pokémon based on species name',
      'You can provide "takeFlavorTexts" to limit the amount of flavour texts to return, set the offset of where to start with "offsetFlavorTexts", and reverse the entire array with "reverseFlavorTexts".',
      'Reversal is applied before pagination!'
    ].join('\n')
  })
  public async getPokemon(@Args() args: PokemonArgs, @getRequestedFields() requestedFields: GraphQLSet<keyof DexDetails>): Promise<DexDetails> {
    const pokemonData = DexService.getBySpecies(args);

    if (!pokemonData) {
      throw new Error(`No Pokémon found for ${args.pokemon}`);
    }

    const graphqlObject = await DexService.mapPokemonDataToPokemonGraphQL({
      data: pokemonData,
      offsetFlavorTexts: args.offsetFlavorTexts,
      reverseFlavorTexts: args.reverseFlavorTexts,
      takeFlavorTexts: args.takeFlavorTexts,
      requestedFields
    });

    if (!graphqlObject) {
      throw new Error(`Failed to get data for Pokémon: ${args.pokemon}`);
    }

    return graphqlObject;
  }

  @Query(() => [DexDetails], {
    description: [
      'Gets details on one or more Pokémon based on species name',
      'You can provide "take" to limit the amount of Pokémon to return (default: 1), set the offset of where to start with "offset", and reverse the entire array with "reverse".',
      'You can provide "takeFlavorTexts" to limit the amount of flavour texts to return (default: 1), set the offset of where to start with "offsetFlavorTexts", and reverse the entire array with "reverseFlavorTexts".',
      'Reversal is applied before pagination!'
    ].join('\n')
  })
  public async getFuzzyPokemon(
    @Args() args: FuzzyPokemonArgs,
    @getRequestedFields() requestedFields: GraphQLSet<keyof DexDetails>
  ): Promise<DexDetails[]> {
    const fuzzyEntry = DexService.findByFuzzy(args);

    if (!fuzzyEntry.length) {
      throw new Error(`No Pokémon found for: ${args.pokemon}`);
    }

    const DexDetailPromises: Promise<DexDetails>[] = [];

    for (const pokemonData of fuzzyEntry) {
      DexDetailPromises.push(
        DexService.mapPokemonDataToPokemonGraphQL({
          data: pokemonData.item,
          requestedFields,
          offsetFlavorTexts: args.offsetFlavorTexts,
          reverseFlavorTexts: args.reverseFlavorTexts,
          takeFlavorTexts: args.takeFlavorTexts
        })
      );
    }

    const graphqlObjects = await Promise.all(DexDetailPromises);

    if (!graphqlObjects.length) {
      throw new Error(`Failed to get data for Pokémon: ${args.pokemon}`);
    }

    return graphqlObjects;
  }
}
