import { ExactPokemonPaginatedArgs } from '#arguments/ExactPokemonPaginatedArgs';
import { PokemonNumberPaginatedArgs } from '#arguments/PokemonNumberPaginatedArgs';
import { PokemonPaginatedArgs } from '#arguments/PokemonPaginatedArgs';
import { pokedexAliases } from '#assets/aliases';
import { DexService } from '#services/DexService';
import { DexDetails } from '#structures/DexDetails';
import { getRequestedFields } from '#utils/getRequestedFields';
import { GraphQLSet } from '#utils/GraphQLSet';
import { preParseInput, toLowerSingleWordCase } from '#utils/util';
import { Args, Query, Resolver } from 'type-graphql';

@Resolver(DexDetails)
export class DexResolver {
  private dexService: DexService;

  public constructor() {
    this.dexService = new DexService();
  }

  @Query(() => DexDetails, {
    description: [
      'Gets details on a single Pokémon based on National Pokédex number',
      'You can supply skip and take to limit the amount of flavour texts to return and reverse to show latest games on top.',
      'Reversal is applied before pagination!'
    ].join('\n')
  })
  public async getPokemonDetailsByNumber(
    @Args() { pokemon, skip, take, reverse }: PokemonNumberPaginatedArgs,
    @getRequestedFields() requestedFields: GraphQLSet<unknown>
  ): Promise<DexDetails> {
    const entry = this.dexService.findByNum(pokemon);

    if (!entry) {
      throw new Error(`No Pokémon found for ${pokemon}`);
    }

    const detailsEntry = await this.dexService.findBySpeciesWithDetails(entry, skip, take, requestedFields, reverse);

    if (detailsEntry === undefined) {
      throw new Error(`Failed to get data for Pokémon: ${pokemon}`);
    }

    return detailsEntry;
  }

  @Query(() => DexDetails, {
    description: [
      'Gets details on a single Pokémon based on species name.',
      'You can supply skip and take to limit the amount of flavour texts to return and reverse to show latest games on top.',
      'Reversal is applied before pagination!'
    ].join('')
  })
  public async getPokemonDetails(
    @Args() { pokemon, skip, take, reverse }: ExactPokemonPaginatedArgs,
    @getRequestedFields() requestedFields: GraphQLSet<unknown>
  ): Promise<DexDetails> {
    const entry = this.dexService.findBySpecies(pokemon);

    if (!entry) {
      throw new Error(`No Pokémon found for ${pokemon}`);
    }

    const detailsEntry = await this.dexService.findBySpeciesWithDetails(entry, skip, take, requestedFields, reverse);

    if (detailsEntry === undefined) {
      throw new Error(`Failed to get data for Pokémon: ${pokemon}`);
    }

    return detailsEntry;
  }

  @Query(() => DexDetails, {
    description: [
      'Gets details on a single Pokémon based on species name.',
      'You can supply skip and take to limit the amount of flavour texts to return and reverse to show latest games on top.',
      'Reversal is applied before pagination!'
    ].join('')
  })
  public getPokemonDetailsByName(
    @Args() { pokemon, skip, take, reverse }: ExactPokemonPaginatedArgs,
    @getRequestedFields() requestedFields: GraphQLSet<keyof DexDetails>
  ): Promise<DexDetails> {
    return this.getPokemonDetails(
      {
        pokemon,
        skip,
        take,
        reverse
      },
      requestedFields
    );
  }

  @Query(() => DexDetails, {
    description: [
      'Gets details on a single Pokémon based on a fuzzy search.',
      'You can supply skip and take to limit the amount of flavour texts to return and reverse to show latest games on top.',
      'Reversal is applied before pagination!'
    ].join('')
  })
  public async getPokemonDetailsByFuzzy(
    @Args() { pokemon, skip, take, reverse }: PokemonPaginatedArgs,
    @getRequestedFields() requestedFields: GraphQLSet<unknown>
  ): Promise<DexDetails> {
    const preParsedPokemon = preParseInput(pokemon);
    let entry = this.dexService.findBySpecies(pokedexAliases.get(preParsedPokemon) ?? preParsedPokemon);

    // If there is no entry from a direct match then try a fuzzy match
    if (!entry) {
      const fuzzyEntry = this.dexService.getByFuzzy({ pokemon, skip, take });

      if (fuzzyEntry === undefined) {
        throw new Error(`Failed to get data for Pokémon: ${pokemon}`);
      }

      entry = this.dexService.findBySpecies(toLowerSingleWordCase(fuzzyEntry[0].item.species));

      // If there is still no entry then throw an error
      if (!entry) {
        throw new Error(`No Pokémon found for ${pokemon}`);
      }
    }

    // Get all the details
    const detailsEntry = await this.dexService.findBySpeciesWithDetails(entry, skip, take, requestedFields, reverse);

    if (detailsEntry === undefined) {
      throw new Error(`Failed to get data for Pokémon: ${pokemon}`);
    }

    return detailsEntry;
  }
}
