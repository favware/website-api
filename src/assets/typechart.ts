import { GraphQLCollection } from '#utils/GraphQLCollection';
import type { Pokemon } from '#utils/pokemon';

/** The type effectiveness typechart in Pokémon */
export default new GraphQLCollection<string, Pokemon.TypeMatchups>([
  [
    'bug',
    {
      damageDealt: {
        bug: 0,
        dark: 1,
        dragon: 0,
        electric: 0,
        fairy: 2,
        fighting: 2,
        fire: 2,
        flying: 2,
        ghost: 2,
        grass: 1,
        ground: 0,
        ice: 0,
        normal: 0,
        poison: 2,
        psychic: 1,
        rock: 0,
        steel: 2,
        water: 0
      },
      damageTaken: {
        bug: 0,
        dark: 0,
        dragon: 0,
        electric: 0,
        fairy: 0,
        fighting: 2,
        fire: 1,
        flying: 1,
        ghost: 0,
        grass: 2,
        ground: 2,
        ice: 0,
        normal: 0,
        poison: 0,
        psychic: 0,
        rock: 1,
        steel: 0,
        water: 0
      }
    }
  ],
  [
    'dark',
    {
      damageDealt: {
        bug: 0,
        dark: 2,
        dragon: 0,
        electric: 0,
        fairy: 2,
        fighting: 2,
        fire: 0,
        flying: 0,
        ghost: 1,
        grass: 0,
        ground: 0,
        ice: 0,
        normal: 0,
        poison: 0,
        psychic: 1,
        rock: 0,
        steel: 0,
        water: 0
      },
      damageTaken: {
        bug: 1,
        dark: 2,
        dragon: 0,
        electric: 0,
        fairy: 1,
        fighting: 1,
        fire: 0,
        flying: 0,
        ghost: 2,
        grass: 0,
        ground: 0,
        ice: 0,
        normal: 0,
        poison: 0,
        psychic: 3,
        rock: 0,
        steel: 0,
        water: 0
      }
    }
  ],
  [
    'dragon',
    {
      damageDealt: {
        bug: 0,
        dark: 0,
        dragon: 1,
        electric: 0,
        fairy: 3,
        fighting: 0,
        fire: 0,
        flying: 0,
        ghost: 0,
        grass: 0,
        ground: 0,
        ice: 0,
        normal: 0,
        poison: 0,
        psychic: 0,
        rock: 0,
        steel: 2,
        water: 0
      },
      damageTaken: {
        bug: 0,
        dark: 0,
        dragon: 1,
        electric: 2,
        fairy: 1,
        fighting: 0,
        fire: 2,
        flying: 0,
        ghost: 0,
        grass: 2,
        ground: 0,
        ice: 1,
        normal: 0,
        poison: 0,
        psychic: 0,
        rock: 0,
        steel: 0,
        water: 2
      }
    }
  ],
  [
    'electric',
    {
      damageDealt: {
        bug: 0,
        dark: 0,
        dragon: 2,
        electric: 2,
        fairy: 0,
        fighting: 0,
        fire: 0,
        flying: 1,
        ghost: 0,
        grass: 2,
        ground: 3,
        ice: 0,
        normal: 0,
        poison: 0,
        psychic: 0,
        rock: 0,
        steel: 0,
        water: 1
      },
      damageTaken: {
        bug: 0,
        dark: 0,
        dragon: 0,
        electric: 2,
        fairy: 0,
        fighting: 0,
        fire: 0,
        flying: 2,
        ghost: 0,
        grass: 0,
        ground: 1,
        ice: 0,
        normal: 0,
        poison: 0,
        psychic: 0,
        rock: 0,
        steel: 2,
        water: 0
      }
    }
  ],
  [
    'fairy',
    {
      damageDealt: {
        bug: 0,
        dark: 1,
        dragon: 1,
        electric: 0,
        fairy: 0,
        fighting: 1,
        fire: 2,
        flying: 0,
        ghost: 0,
        grass: 0,
        ground: 0,
        ice: 0,
        normal: 0,
        poison: 2,
        psychic: 0,
        rock: 0,
        steel: 2,
        water: 0
      },
      damageTaken: {
        bug: 2,
        dark: 2,
        dragon: 3,
        electric: 0,
        fairy: 0,
        fighting: 2,
        fire: 0,
        flying: 0,
        ghost: 0,
        grass: 0,
        ground: 0,
        ice: 0,
        normal: 0,
        poison: 1,
        psychic: 0,
        rock: 0,
        steel: 1,
        water: 0
      }
    }
  ],
  [
    'fighting',
    {
      damageDealt: {
        bug: 2,
        dark: 1,
        dragon: 0,
        electric: 0,
        fairy: 2,
        fighting: 0,
        fire: 0,
        flying: 2,
        ghost: 3,
        grass: 0,
        ground: 0,
        ice: 1,
        normal: 1,
        poison: 2,
        psychic: 2,
        rock: 1,
        steel: 1,
        water: 0
      },
      damageTaken: {
        bug: 2,
        dark: 2,
        dragon: 0,
        electric: 0,
        fairy: 1,
        fighting: 0,
        fire: 0,
        flying: 1,
        ghost: 0,
        grass: 0,
        ground: 0,
        ice: 0,
        normal: 0,
        poison: 0,
        psychic: 1,
        rock: 2,
        steel: 0,
        water: 0
      }
    }
  ],
  [
    'fire',
    {
      damageDealt: {
        bug: 1,
        dark: 0,
        dragon: 2,
        electric: 0,
        fairy: 0,
        fighting: 0,
        fire: 2,
        flying: 0,
        ghost: 0,
        grass: 1,
        ground: 0,
        ice: 1,
        normal: 0,
        poison: 0,
        psychic: 0,
        rock: 2,
        steel: 1,
        water: 2
      },
      damageTaken: {
        bug: 2,
        dark: 0,
        dragon: 0,
        electric: 0,
        fairy: 2,
        fighting: 0,
        fire: 2,
        flying: 0,
        ghost: 0,
        grass: 2,
        ground: 1,
        ice: 2,
        normal: 0,
        poison: 0,
        psychic: 0,
        rock: 1,
        steel: 2,
        water: 1
      }
    }
  ],
  [
    'flying',
    {
      damageDealt: {
        bug: 1,
        dark: 0,
        dragon: 0,
        electric: 2,
        fairy: 0,
        fighting: 1,
        fire: 0,
        flying: 0,
        ghost: 0,
        grass: 1,
        ground: 0,
        ice: 0,
        normal: 0,
        poison: 0,
        psychic: 0,
        rock: 2,
        steel: 2,
        water: 0
      },
      damageTaken: {
        bug: 2,
        dark: 0,
        dragon: 0,
        electric: 1,
        fairy: 0,
        fighting: 2,
        fire: 0,
        flying: 0,
        ghost: 0,
        grass: 2,
        ground: 3,
        ice: 1,
        normal: 0,
        poison: 0,
        psychic: 0,
        rock: 1,
        steel: 0,
        water: 0
      }
    }
  ],
  [
    'ghost',
    {
      damageDealt: {
        bug: 0,
        dark: 2,
        dragon: 0,
        electric: 0,
        fairy: 0,
        fighting: 0,
        fire: 0,
        flying: 0,
        ghost: 1,
        grass: 0,
        ground: 0,
        ice: 0,
        normal: 3,
        poison: 0,
        psychic: 1,
        rock: 0,
        steel: 0,
        water: 0
      },
      damageTaken: {
        bug: 2,
        dark: 1,
        dragon: 0,
        electric: 0,
        fairy: 0,
        fighting: 3,
        fire: 0,
        flying: 0,
        ghost: 1,
        grass: 0,
        ground: 0,
        ice: 0,
        normal: 3,
        poison: 2,
        psychic: 0,
        rock: 0,
        steel: 0,
        water: 0
      }
    }
  ],
  [
    'grass',
    {
      damageDealt: {
        bug: 2,
        dark: 0,
        dragon: 2,
        electric: 0,
        fairy: 0,
        fighting: 0,
        fire: 2,
        flying: 2,
        ghost: 0,
        grass: 2,
        ground: 1,
        ice: 0,
        normal: 0,
        poison: 2,
        psychic: 0,
        rock: 1,
        steel: 2,
        water: 1
      },
      damageTaken: {
        bug: 1,
        dark: 0,
        dragon: 0,
        electric: 2,
        fairy: 0,
        fighting: 0,
        fire: 1,
        flying: 1,
        ghost: 0,
        grass: 2,
        ground: 2,
        ice: 1,
        normal: 0,
        poison: 1,
        psychic: 0,
        rock: 0,
        steel: 0,
        water: 2
      }
    }
  ],
  [
    'ground',
    {
      damageDealt: {
        bug: 2,
        dark: 0,
        dragon: 0,
        electric: 1,
        fairy: 0,
        fighting: 0,
        fire: 1,
        flying: 3,
        ghost: 0,
        grass: 2,
        ground: 0,
        ice: 0,
        normal: 0,
        poison: 1,
        psychic: 0,
        rock: 1,
        steel: 1,
        water: 0
      },
      damageTaken: {
        bug: 0,
        dark: 0,
        dragon: 0,
        electric: 3,
        fairy: 0,
        fighting: 0,
        fire: 0,
        flying: 0,
        ghost: 0,
        grass: 1,
        ground: 0,
        ice: 1,
        normal: 0,
        poison: 2,
        psychic: 0,
        rock: 2,
        steel: 0,
        water: 1
      }
    }
  ],
  [
    'ice',
    {
      damageDealt: {
        bug: 0,
        dark: 0,
        dragon: 1,
        electric: 0,
        fairy: 0,
        fighting: 0,
        fire: 2,
        flying: 1,
        ghost: 0,
        grass: 1,
        ground: 1,
        ice: 2,
        normal: 0,
        poison: 0,
        psychic: 0,
        rock: 0,
        steel: 2,
        water: 2
      },
      damageTaken: {
        bug: 0,
        dark: 0,
        dragon: 0,
        electric: 0,
        fairy: 0,
        fighting: 1,
        fire: 1,
        flying: 0,
        ghost: 0,
        grass: 0,
        ground: 0,
        ice: 2,
        normal: 0,
        poison: 0,
        psychic: 0,
        rock: 1,
        steel: 1,
        water: 0
      }
    }
  ],
  [
    'normal',
    {
      damageDealt: {
        bug: 0,
        dark: 0,
        dragon: 0,
        electric: 0,
        fairy: 0,
        fighting: 0,
        fire: 0,
        flying: 0,
        ghost: 3,
        grass: 0,
        ground: 0,
        ice: 0,
        normal: 0,
        poison: 0,
        psychic: 0,
        rock: 2,
        steel: 2,
        water: 0
      },
      damageTaken: {
        bug: 0,
        dark: 0,
        dragon: 0,
        electric: 0,
        fairy: 0,
        fighting: 1,
        fire: 0,
        flying: 0,
        ghost: 3,
        grass: 0,
        ground: 0,
        ice: 0,
        normal: 0,
        poison: 0,
        psychic: 0,
        rock: 0,
        steel: 0,
        water: 0
      }
    }
  ],
  [
    'poison',
    {
      damageDealt: {
        bug: 0,
        dark: 0,
        dragon: 0,
        electric: 0,
        fairy: 1,
        fighting: 0,
        fire: 0,
        flying: 0,
        ghost: 2,
        grass: 1,
        ground: 2,
        ice: 0,
        normal: 0,
        poison: 2,
        psychic: 0,
        rock: 2,
        steel: 3,
        water: 0
      },
      damageTaken: {
        bug: 2,
        dark: 0,
        dragon: 0,
        electric: 0,
        fairy: 2,
        fighting: 2,
        fire: 0,
        flying: 0,
        ghost: 0,
        grass: 2,
        ground: 1,
        ice: 0,
        normal: 0,
        poison: 2,
        psychic: 1,
        rock: 0,
        steel: 0,
        water: 0
      }
    }
  ],
  [
    'psychic',
    {
      damageDealt: {
        bug: 0,
        dark: 3,
        dragon: 0,
        electric: 0,
        fairy: 0,
        fighting: 1,
        fire: 0,
        flying: 0,
        ghost: 0,
        grass: 0,
        ground: 0,
        ice: 0,
        normal: 0,
        poison: 1,
        psychic: 2,
        rock: 0,
        steel: 2,
        water: 0
      },
      damageTaken: {
        bug: 1,
        dark: 1,
        dragon: 0,
        electric: 0,
        fairy: 0,
        fighting: 2,
        fire: 0,
        flying: 0,
        ghost: 1,
        grass: 0,
        ground: 0,
        ice: 0,
        normal: 0,
        poison: 0,
        psychic: 2,
        rock: 0,
        steel: 0,
        water: 0
      }
    }
  ],
  [
    'rock',
    {
      damageDealt: {
        bug: 1,
        dark: 0,
        dragon: 0,
        electric: 0,
        fairy: 0,
        fighting: 2,
        fire: 1,
        flying: 1,
        ghost: 0,
        grass: 0,
        ground: 2,
        ice: 1,
        normal: 0,
        poison: 0,
        psychic: 0,
        rock: 0,
        steel: 2,
        water: 0
      },
      damageTaken: {
        bug: 0,
        dark: 0,
        dragon: 0,
        electric: 0,
        fairy: 0,
        fighting: 1,
        fire: 2,
        flying: 2,
        ghost: 0,
        grass: 1,
        ground: 1,
        ice: 0,
        normal: 2,
        poison: 2,
        psychic: 0,
        rock: 0,
        steel: 1,
        water: 1
      }
    }
  ],
  [
    'steel',
    {
      damageDealt: {
        bug: 0,
        dark: 0,
        dragon: 0,
        electric: 2,
        fairy: 1,
        fighting: 0,
        fire: 2,
        flying: 0,
        ghost: 0,
        grass: 0,
        ground: 0,
        ice: 1,
        normal: 0,
        poison: 0,
        psychic: 0,
        rock: 1,
        steel: 2,
        water: 2
      },
      damageTaken: {
        bug: 2,
        dark: 0,
        dragon: 2,
        electric: 0,
        fairy: 2,
        fighting: 1,
        fire: 1,
        flying: 2,
        ghost: 0,
        grass: 2,
        ground: 1,
        ice: 2,
        normal: 2,
        poison: 3,
        psychic: 2,
        rock: 2,
        steel: 2,
        water: 0
      }
    }
  ],
  [
    'water',
    {
      damageDealt: {
        bug: 0,
        dark: 0,
        dragon: 2,
        electric: 0,
        fairy: 0,
        fighting: 0,
        fire: 1,
        flying: 0,
        ghost: 0,
        grass: 2,
        ground: 1,
        ice: 0,
        normal: 0,
        poison: 0,
        psychic: 0,
        rock: 1,
        steel: 0,
        water: 2
      },
      damageTaken: {
        bug: 0,
        dark: 0,
        dragon: 0,
        electric: 1,
        fairy: 0,
        fighting: 0,
        fire: 2,
        flying: 0,
        ghost: 0,
        grass: 1,
        ground: 0,
        ice: 2,
        normal: 0,
        poison: 0,
        psychic: 0,
        rock: 0,
        steel: 2,
        water: 2
      }
    }
  ]
]);
