/* eslint-disable */ // This is a generated file so we disable linting
import type { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export declare type Maybe<T> = T | null;
export declare type Exact<
  T extends {
    [key: string]: unknown;
  }
> = {
  [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  {
    [SubKey in K]?: Maybe<T[SubKey]>;
  };
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  {
    [SubKey in K]: Maybe<T[SubKey]>;
  };
export declare type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  {
    [P in K]-?: NonNullable<T[P]>;
  };
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: Record<PropertyKey, any>;
};
/** The supported abilities */
export declare const enum Abilities {
  Adaptability = 'adaptability',
  Aerilate = 'aerilate',
  Aftermath = 'aftermath',
  Airlock = 'airlock',
  Analytic = 'analytic',
  Angerpoint = 'angerpoint',
  Anticipation = 'anticipation',
  Arenatrap = 'arenatrap',
  Aromaveil = 'aromaveil',
  Asoneasoneglastrier = 'asoneasoneglastrier',
  Asonespectrier = 'asonespectrier',
  Aurabreak = 'aurabreak',
  Baddreams = 'baddreams',
  Ballfetch = 'ballfetch',
  Battery = 'battery',
  Battlearmor = 'battlearmor',
  Battlebond = 'battlebond',
  Beastboost = 'beastboost',
  Berserk = 'berserk',
  Bigpecks = 'bigpecks',
  Blaze = 'blaze',
  Bulletproof = 'bulletproof',
  Cheekpouch = 'cheekpouch',
  Chillingneigh = 'chillingneigh',
  Chlorophyll = 'chlorophyll',
  Clearbody = 'clearbody',
  Cloudnine = 'cloudnine',
  Colorchange = 'colorchange',
  Comatose = 'comatose',
  Competitive = 'competitive',
  Compoundeyes = 'compoundeyes',
  Contrary = 'contrary',
  Corrosion = 'corrosion',
  Cottondown = 'cottondown',
  Curiousmedicine = 'curiousmedicine',
  Cursedbody = 'cursedbody',
  Cutecharm = 'cutecharm',
  Damp = 'damp',
  Dancer = 'dancer',
  Darkaura = 'darkaura',
  Dauntlessshield = 'dauntlessshield',
  Dazzling = 'dazzling',
  Defeatist = 'defeatist',
  Defiant = 'defiant',
  Deltastream = 'deltastream',
  Desolateland = 'desolateland',
  Disguise = 'disguise',
  Download = 'download',
  Dragonsmaw = 'dragonsmaw',
  Drizzle = 'drizzle',
  Drought = 'drought',
  Dryskin = 'dryskin',
  Earlybird = 'earlybird',
  Effectspore = 'effectspore',
  Electricsurge = 'electricsurge',
  Emergencyexit = 'emergencyexit',
  Fairyaura = 'fairyaura',
  Filter = 'filter',
  Flamebody = 'flamebody',
  Flareboost = 'flareboost',
  Flashfire = 'flashfire',
  Flowergift = 'flowergift',
  Flowerveil = 'flowerveil',
  Fluffy = 'fluffy',
  Forecast = 'forecast',
  Forewarn = 'forewarn',
  Friendguard = 'friendguard',
  Frisk = 'frisk',
  Fullmetalbody = 'fullmetalbody',
  Furcoat = 'furcoat',
  Galewings = 'galewings',
  Galvanize = 'galvanize',
  Gluttony = 'gluttony',
  Gooey = 'gooey',
  Gorillatactics = 'gorillatactics',
  Grasspelt = 'grasspelt',
  Grassysurge = 'grassysurge',
  Grimneigh = 'grimneigh',
  Gulpmissile = 'gulpmissile',
  Guts = 'guts',
  Harvest = 'harvest',
  Healer = 'healer',
  Heatproof = 'heatproof',
  Heavymetal = 'heavymetal',
  Honeygather = 'honeygather',
  Hugepower = 'hugepower',
  Hungerswitch = 'hungerswitch',
  Hustle = 'hustle',
  Hydration = 'hydration',
  Hypercutter = 'hypercutter',
  Icebody = 'icebody',
  Iceface = 'iceface',
  Icescales = 'icescales',
  Illuminate = 'illuminate',
  Illusion = 'illusion',
  Immunity = 'immunity',
  Imposter = 'imposter',
  Infiltrator = 'infiltrator',
  Innardsout = 'innardsout',
  Innerfocus = 'innerfocus',
  Insomnia = 'insomnia',
  Intimidate = 'intimidate',
  Intrepidsword = 'intrepidsword',
  Ironbarbs = 'ironbarbs',
  Ironfist = 'ironfist',
  Justified = 'justified',
  Keeneye = 'keeneye',
  Klutz = 'klutz',
  Leafguard = 'leafguard',
  Levitate = 'levitate',
  Libero = 'libero',
  Lightmetal = 'lightmetal',
  Lightningrod = 'lightningrod',
  Limber = 'limber',
  Liquidooze = 'liquidooze',
  Liquidvoice = 'liquidvoice',
  Longreach = 'longreach',
  Magicbounce = 'magicbounce',
  Magicguard = 'magicguard',
  Magician = 'magician',
  Magmaarmor = 'magmaarmor',
  Magnetpull = 'magnetpull',
  Marvelscale = 'marvelscale',
  Megalauncher = 'megalauncher',
  Merciless = 'merciless',
  Mimicry = 'mimicry',
  Minus = 'minus',
  Mirrorarmor = 'mirrorarmor',
  Mistysurge = 'mistysurge',
  Moldbreaker = 'moldbreaker',
  Moody = 'moody',
  Motordrive = 'motordrive',
  Mountaineer = 'mountaineer',
  Moxie = 'moxie',
  Multiscale = 'multiscale',
  Multitype = 'multitype',
  Mummy = 'mummy',
  Naturalcure = 'naturalcure',
  Neuroforce = 'neuroforce',
  Noability = 'noability',
  Neutralizinggas = 'neutralizinggas',
  Noguard = 'noguard',
  Normalize = 'normalize',
  Oblivious = 'oblivious',
  Overcoat = 'overcoat',
  Overgrow = 'overgrow',
  Owntempo = 'owntempo',
  Parentalbond = 'parentalbond',
  Persistent = 'persistent',
  Pastelveil = 'pastelveil',
  Perishbody = 'perishbody',
  Pickpocket = 'pickpocket',
  Pickup = 'pickup',
  Pixilate = 'pixilate',
  Plus = 'plus',
  Poisonheal = 'poisonheal',
  Poisonpoint = 'poisonpoint',
  Poisontouch = 'poisontouch',
  Powerconstruct = 'powerconstruct',
  Powerofalchemy = 'powerofalchemy',
  Powerspot = 'powerspot',
  Prankster = 'prankster',
  Pressure = 'pressure',
  Primordialsea = 'primordialsea',
  Prismarmor = 'prismarmor',
  Propellertail = 'propellertail',
  Protean = 'protean',
  Psychicsurge = 'psychicsurge',
  Punkrock = 'punkrock',
  Purepower = 'purepower',
  Queenlymajesty = 'queenlymajesty',
  Quickdraw = 'quickdraw',
  Quickfeet = 'quickfeet',
  Rkssystem = 'rkssystem',
  Raindish = 'raindish',
  Rattled = 'rattled',
  Rebound = 'rebound',
  Receiver = 'receiver',
  Reckless = 'reckless',
  Refrigerate = 'refrigerate',
  Regenerator = 'regenerator',
  Ripen = 'ripen',
  Rivalry = 'rivalry',
  Rockhead = 'rockhead',
  Roughskin = 'roughskin',
  Runaway = 'runaway',
  Sandforce = 'sandforce',
  Sandrush = 'sandrush',
  Sandspit = 'sandspit',
  Sandstream = 'sandstream',
  Sandveil = 'sandveil',
  Sapsipper = 'sapsipper',
  Schooling = 'schooling',
  Scrappy = 'scrappy',
  Screencleaner = 'screencleaner',
  Serenegrace = 'serenegrace',
  Shadowshield = 'shadowshield',
  Shadowtag = 'shadowtag',
  Shedskin = 'shedskin',
  Sheerforce = 'sheerforce',
  Shellarmor = 'shellarmor',
  Shielddust = 'shielddust',
  Shieldsdown = 'shieldsdown',
  Simple = 'simple',
  Skilllink = 'skilllink',
  Slowstart = 'slowstart',
  Slushrush = 'slushrush',
  Sniper = 'sniper',
  Snowcloak = 'snowcloak',
  Snowwarning = 'snowwarning',
  Solarpower = 'solarpower',
  Solidrock = 'solidrock',
  Soulheart = 'soulheart',
  Soundproof = 'soundproof',
  Speedboost = 'speedboost',
  Stakeout = 'stakeout',
  Stall = 'stall',
  Stalwart = 'stalwart',
  Stamina = 'stamina',
  Stancechange = 'stancechange',
  Static = 'static',
  Steadfast = 'steadfast',
  Steamengine = 'steamengine',
  Steelworker = 'steelworker',
  Steelyspirit = 'steelyspirit',
  Stench = 'stench',
  Stickyhold = 'stickyhold',
  Stormdrain = 'stormdrain',
  Strongjaw = 'strongjaw',
  Sturdy = 'sturdy',
  Suctioncups = 'suctioncups',
  Superluck = 'superluck',
  Surgesurfer = 'surgesurfer',
  Swarm = 'swarm',
  Sweetveil = 'sweetveil',
  Swiftswim = 'swiftswim',
  Symbiosis = 'symbiosis',
  Synchronize = 'synchronize',
  Tangledfeet = 'tangledfeet',
  Tanglinghair = 'tanglinghair',
  Technician = 'technician',
  Telepathy = 'telepathy',
  Teravolt = 'teravolt',
  Thickfat = 'thickfat',
  Tintedlens = 'tintedlens',
  Torrent = 'torrent',
  Toughclaws = 'toughclaws',
  Toxicboost = 'toxicboost',
  Trace = 'trace',
  Transistor = 'transistor',
  Triage = 'triage',
  Truant = 'truant',
  Turboblaze = 'turboblaze',
  Unaware = 'unaware',
  Unburden = 'unburden',
  Unnerve = 'unnerve',
  Unseenfist = 'unseenfist',
  Victorystar = 'victorystar',
  Vitalspirit = 'vitalspirit',
  Voltabsorb = 'voltabsorb',
  Wanderingspirit = 'wanderingspirit',
  Waterabsorb = 'waterabsorb',
  Waterbubble = 'waterbubble',
  Watercompaction = 'watercompaction',
  Waterveil = 'waterveil',
  Weakarmor = 'weakarmor',
  Whitesmoke = 'whitesmoke',
  Wimpout = 'wimpout',
  Wonderguard = 'wonderguard',
  Wonderskin = 'wonderskin',
  Zenmode = 'zenmode'
}
/** A Pokémon's abilities entry */
export declare type AbilitiesEntry = {
  readonly __typename?: 'AbilitiesEntry';
  /** The first ability of a Pokémon */
  readonly first: Scalars['String'];
  /** The second ability of a Pokémon */
  readonly second?: Maybe<Scalars['String']>;
  /** The hidden ability of a Pokémon */
  readonly hidden?: Maybe<Scalars['String']>;
  /** The special ability of a Pokémon */
  readonly special?: Maybe<Scalars['String']>;
};
/** A single Pokémon ability entry */
export declare type AbilityEntry = {
  readonly __typename?: 'AbilityEntry';
  /** The long description for an ability */
  readonly desc?: Maybe<Scalars['String']>;
  /** The short description for an ability */
  readonly shortDesc: Scalars['String'];
  /** The name for an ability */
  readonly name: Scalars['String'];
  /** Whether this ability has effects outside of battle, and if so what the effect is */
  readonly isFieldAbility?: Maybe<Scalars['String']>;
  /** Bulbapedia page for an ability */
  readonly bulbapediaPage: Scalars['String'];
  /** Serebii page for an ability */
  readonly serebiiPage: Scalars['String'];
  /** Smogon page for an ability */
  readonly smogonPage: Scalars['String'];
};
/** A Pokémon's details entry */
export declare type DexDetails = {
  readonly __typename?: 'DexDetails';
  /** The dex number for a Pokémon */
  readonly num: Scalars['Int'];
  /** The species name for a Pokémon */
  readonly species: Scalars['String'];
  /** The types for a Pokémon */
  readonly types: ReadonlyArray<Scalars['String']>;
  /** The abilities for a Pokémon */
  readonly abilities: AbilitiesEntry;
  /** Base stats for a Pokémon */
  readonly baseStats: StatsEntry;
  /** The colour of a Pokémon as listed in the Pokedex */
  readonly color: Scalars['String'];
  /** The egg groups a Pokémon is in */
  readonly eggGroups?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** The evolution level, or special method, for a Pokémon */
  readonly evolutionLevel?: Maybe<Scalars['String']>;
  /** The raw evos of a Pokémon  */
  readonly evos?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** The raw prevo of a Pokémon  */
  readonly prevo?: Maybe<Scalars['String']>;
  /** The form identifier of a Pokémon  */
  readonly forme?: Maybe<Scalars['String']>;
  /** The single letter identifier of the form */
  readonly formeLetter?: Maybe<Scalars['String']>;
  /** The gender data for a Pokémon  */
  readonly gender: GenderEntry;
  /** The height of a Pokémon in meters */
  readonly height: Scalars['Float'];
  /** The weight of a Pokémon in kilograms */
  readonly weight: Scalars['Float'];
  /** Base form if this entry describes an alternate form */
  readonly baseForme?: Maybe<Scalars['String']>;
  /** Base species if this entry describes a special form */
  readonly baseSpecies?: Maybe<Scalars['String']>;
  /** Any other forms for a Pokémon */
  readonly otherFormes?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Any other *cosmetic* forms for a Pokémon, distinguished from other formes as cosmetic formes only change the look of the Pokémon, while other formes might also change an ability, moveset or other data. */
  readonly cosmeticFormes?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** The total of all base stats for a Pokémon */
  readonly baseStatsTotal: Scalars['Int'];
  /** The evolutions for a Pokémon, if any  */
  readonly evolutions?: Maybe<ReadonlyArray<DexDetails>>;
  /** The preevolutions for a Pokémon, if any  */
  readonly preevolutions?: Maybe<ReadonlyArray<DexDetails>>;
  /** The flavortexts for a Pokémon */
  readonly flavorTexts: ReadonlyArray<FlavorEntry>;
  /** The sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  readonly sprite: Scalars['String'];
  /** The shiny sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  readonly shinySprite: Scalars['String'];
  /** The back sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  readonly backSprite: Scalars['String'];
  /** The shiny back sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  readonly shinyBackSprite: Scalars['String'];
  /** The smogon tier a Pokémon falls under */
  readonly smogonTier: Scalars['String'];
  /** Bulbapedia page for a Pokémon */
  readonly bulbapediaPage: Scalars['String'];
  /** Serebii page for a Pokémon */
  readonly serebiiPage: Scalars['String'];
  /** Smogon page for a Pokémon */
  readonly smogonPage: Scalars['String'];
};
/** A single Pokedex entry */
export declare type DexEntry = {
  readonly __typename?: 'DexEntry';
  /** The dex number for a Pokémon */
  readonly num: Scalars['Int'];
  /** The species name for a Pokémon */
  readonly species: Scalars['String'];
  /** The types for a Pokémon */
  readonly types: ReadonlyArray<Scalars['String']>;
  /** The abilities for a Pokémon */
  readonly abilities: AbilitiesEntry;
  /** Base stats for a Pokémon */
  readonly baseStats: StatsEntry;
  /** The colour of a Pokémon as listed in the Pokedex */
  readonly color: Scalars['String'];
  /** The egg groups a Pokémon is in */
  readonly eggGroups?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** The evolution level, or special method, for a Pokémon */
  readonly evolutionLevel?: Maybe<Scalars['String']>;
  /** The raw evos of a Pokémon  */
  readonly evos?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** The raw prevo of a Pokémon  */
  readonly prevo?: Maybe<Scalars['String']>;
  /** The form identifier of a Pokémon  */
  readonly forme?: Maybe<Scalars['String']>;
  /** The single letter identifier of the form */
  readonly formeLetter?: Maybe<Scalars['String']>;
  /** The gender data for a Pokémon  */
  readonly gender: GenderEntry;
  /** The height of a Pokémon in meters */
  readonly height: Scalars['Float'];
  /** The weight of a Pokémon in kilograms */
  readonly weight: Scalars['Float'];
  /** Base form if this entry describes an alternate form */
  readonly baseForme?: Maybe<Scalars['String']>;
  /** Base species if this entry describes a special form */
  readonly baseSpecies?: Maybe<Scalars['String']>;
  /** Any other forms for a Pokémon */
  readonly otherFormes?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Any other *cosmetic* forms for a Pokémon, distinguished from other formes as cosmetic formes only change the look of the Pokémon, while other formes might also change an ability, moveset or other data. */
  readonly cosmeticFormes?: Maybe<ReadonlyArray<Scalars['String']>>;
};
/** A flavor text entry for a Pokémon */
export declare type FlavorEntry = {
  readonly __typename?: 'FlavorEntry';
  /** The name of the game this flavor text is from */
  readonly game: Scalars['String'];
  /** The flavor text for this entry */
  readonly flavor: Scalars['String'];
};
/** A Pokémon gender ratio entry */
export declare type GenderEntry = {
  readonly __typename?: 'GenderEntry';
  /** The percentage of male occurrences */
  readonly male: Scalars['String'];
  /** The percentage for female occurrences */
  readonly female: Scalars['String'];
};
/** A single item entry */
export declare type ItemEntry = {
  readonly __typename?: 'ItemEntry';
  /** The long description for an item */
  readonly desc: Scalars['String'];
  /** The long description for an item */
  readonly shortDesc?: Maybe<Scalars['String']>;
  /** The name for an item */
  readonly name: Scalars['String'];
  /** Whether an item is non-standard, and if it is why */
  readonly isNonstandard?: Maybe<Scalars['String']>;
  /** The sprite for an item */
  readonly sprite: Scalars['String'];
  /** The generation in which this item was introduced */
  readonly generationIntroduced: Scalars['Int'];
  /** Bulbapedia page for an item */
  readonly bulbapediaPage: Scalars['String'];
  /** Serebii page for an item */
  readonly serebiiPage: Scalars['String'];
  /** Smogon page for an item */
  readonly smogonPage?: Maybe<Scalars['String']>;
};
/** The supported items */
export declare const enum Items {
  Abomasite = 'abomasite',
  Absolite = 'absolite',
  Absorbbulb = 'absorbbulb',
  Adamantorb = 'adamantorb',
  Adrenalineorb = 'adrenalineorb',
  Aerodactylite = 'aerodactylite',
  Aggronite = 'aggronite',
  Aguavberry = 'aguavberry',
  Airballoon = 'airballoon',
  Alakazite = 'alakazite',
  Aloraichiumz = 'aloraichiumz',
  Altarianite = 'altarianite',
  Ampharosite = 'ampharosite',
  Apicotberry = 'apicotberry',
  Armorfossil = 'armorfossil',
  Aspearberry = 'aspearberry',
  Assaultvest = 'assaultvest',
  Audinite = 'audinite',
  Babiriberry = 'babiriberry',
  Banettite = 'banettite',
  Beastball = 'beastball',
  Beedrillite = 'beedrillite',
  Belueberry = 'belueberry',
  Berry = 'berry',
  Berryjuice = 'berryjuice',
  Berrysweet = 'berrysweet',
  Berserkgene = 'berserkgene',
  Bigroot = 'bigroot',
  Bindingband = 'bindingband',
  Bitterberry = 'bitterberry',
  Blackbelt = 'blackbelt',
  Blackglasses = 'blackglasses',
  Blacksludge = 'blacksludge',
  Blastoisinite = 'blastoisinite',
  Blazikenite = 'blazikenite',
  Blueorb = 'blueorb',
  Blukberry = 'blukberry',
  Blunderpolicy = 'blunderpolicy',
  Bottlecap = 'bottlecap',
  Brightpowder = 'brightpowder',
  Buggem = 'buggem',
  Bugmemory = 'bugmemory',
  Buginiumz = 'buginiumz',
  Burndrive = 'burndrive',
  Burntberry = 'burntberry',
  Cameruptite = 'cameruptite',
  Cellbattery = 'cellbattery',
  Charcoal = 'charcoal',
  Charizarditex = 'charizarditex',
  Charizarditey = 'charizarditey',
  Chartiberry = 'chartiberry',
  Cheriberry = 'cheriberry',
  Cherishball = 'cherishball',
  Chestoberry = 'chestoberry',
  Chilanberry = 'chilanberry',
  Chilldrive = 'chilldrive',
  Chippedpot = 'chippedpot',
  Choiceband = 'choiceband',
  Choicescarf = 'choicescarf',
  Choicespecs = 'choicespecs',
  Chopleberry = 'chopleberry',
  Clawfossil = 'clawfossil',
  Cloversweet = 'cloversweet',
  Cobaberry = 'cobaberry',
  Colburberry = 'colburberry',
  Cornnberry = 'cornnberry',
  Coverfossil = 'coverfossil',
  Crucibellite = 'crucibellite',
  Crackedpot = 'crackedpot',
  Custapberry = 'custapberry',
  Damprock = 'damprock',
  Darkgem = 'darkgem',
  Darkmemory = 'darkmemory',
  Darkiniumz = 'darkiniumz',
  Dawnstone = 'dawnstone',
  Decidiumz = 'decidiumz',
  Deepseascale = 'deepseascale',
  Deepseatooth = 'deepseatooth',
  Destinyknot = 'destinyknot',
  Diancite = 'diancite',
  Diveball = 'diveball',
  Domefossil = 'domefossil',
  Dousedrive = 'dousedrive',
  Dracoplate = 'dracoplate',
  Dragonfang = 'dragonfang',
  Dragongem = 'dragongem',
  Dragonmemory = 'dragonmemory',
  Dragonscale = 'dragonscale',
  Dragoniumz = 'dragoniumz',
  Dreadplate = 'dreadplate',
  Dreamball = 'dreamball',
  Dubiousdisc = 'dubiousdisc',
  Durinberry = 'durinberry',
  Duskball = 'duskball',
  Duskstone = 'duskstone',
  Earthplate = 'earthplate',
  Eeviumz = 'eeviumz',
  Ejectbutton = 'ejectbutton',
  Ejectpack = 'ejectpack',
  Electirizer = 'electirizer',
  Electricgem = 'electricgem',
  Electricmemory = 'electricmemory',
  Electricseed = 'electricseed',
  Electriumz = 'electriumz',
  Energypowder = 'energypowder',
  Enigmaberry = 'enigmaberry',
  Eviolite = 'eviolite',
  Expertbelt = 'expertbelt',
  Fairiumz = 'fairiumz',
  Fairygem = 'fairygem',
  Fairymemory = 'fairymemory',
  Fastball = 'fastball',
  Fightinggem = 'fightinggem',
  Fightingmemory = 'fightingmemory',
  Fightiniumz = 'fightiniumz',
  Figyberry = 'figyberry',
  Firegem = 'firegem',
  Firememory = 'firememory',
  Firestone = 'firestone',
  Firiumz = 'firiumz',
  Fistplate = 'fistplate',
  Flameorb = 'flameorb',
  Flameplate = 'flameplate',
  Floatstone = 'floatstone',
  Flowersweet = 'flowersweet',
  Flyinggem = 'flyinggem',
  Flyingmemory = 'flyingmemory',
  Flyiniumz = 'flyiniumz',
  Focusband = 'focusband',
  Focussash = 'focussash',
  Fossilizedbird = 'fossilizedbird',
  Fossilizeddino = 'fossilizeddino',
  Fossilizeddrake = 'fossilizeddrake',
  Fossilizedfish = 'fossilizedfish',
  Friendball = 'friendball',
  Fullincense = 'fullincense',
  Fullrestore = 'fullrestore',
  Galaricacuff = 'galaricacuff',
  Galaricawreath = 'galaricawreath',
  Galladite = 'galladite',
  Ganlonberry = 'ganlonberry',
  Garchompite = 'garchompite',
  Gardevoirite = 'gardevoirite',
  Gengarite = 'gengarite',
  Ghostgem = 'ghostgem',
  Ghostmemory = 'ghostmemory',
  Ghostiumz = 'ghostiumz',
  Glalitite = 'glalitite',
  Goldberry = 'goldberry',
  Goldbottlecap = 'goldbottlecap',
  Grassgem = 'grassgem',
  Grassmemory = 'grassmemory',
  Grassiumz = 'grassiumz',
  Grassyseed = 'grassyseed',
  Greatball = 'greatball',
  Grepaberry = 'grepaberry',
  Gripclaw = 'gripclaw',
  Griseousorb = 'griseousorb',
  Groundgem = 'groundgem',
  Groundmemory = 'groundmemory',
  Groundiumz = 'groundiumz',
  Gyaradosite = 'gyaradosite',
  Habanberry = 'habanberry',
  Hardstone = 'hardstone',
  Healball = 'healball',
  Heatrock = 'heatrock',
  Heavyball = 'heavyball',
  Heavydutyboots = 'heavydutyboots',
  Helixfossil = 'helixfossil',
  Heracronite = 'heracronite',
  Hondewberry = 'hondewberry',
  Houndoominite = 'houndoominite',
  Hyperpotion = 'hyperpotion',
  Iapapaberry = 'iapapaberry',
  Iceberry = 'iceberry',
  Icegem = 'icegem',
  Icememory = 'icememory',
  Icestone = 'icestone',
  Icicleplate = 'icicleplate',
  Iciumz = 'iciumz',
  Icyrock = 'icyrock',
  Inciniumz = 'inciniumz',
  Insectplate = 'insectplate',
  Ironball = 'ironball',
  Ironplate = 'ironplate',
  Jabocaberry = 'jabocaberry',
  Jawfossil = 'jawfossil',
  Kangaskhanite = 'kangaskhanite',
  Kasibberry = 'kasibberry',
  Kebiaberry = 'kebiaberry',
  Keeberry = 'keeberry',
  Kelpsyberry = 'kelpsyberry',
  Kingsrock = 'kingsrock',
  Kommoniumz = 'kommoniumz',
  Laggingtail = 'laggingtail',
  Lansatberry = 'lansatberry',
  Latiasite = 'latiasite',
  Latiosite = 'latiosite',
  Laxincense = 'laxincense',
  Leafstone = 'leafstone',
  Leek = 'leek',
  Leftovers = 'leftovers',
  Leppaberry = 'leppaberry',
  Levelball = 'levelball',
  Liechiberry = 'liechiberry',
  Lifeorb = 'lifeorb',
  Lightball = 'lightball',
  Lightclay = 'lightclay',
  Lopunnite = 'lopunnite',
  Loveball = 'loveball',
  Lovesweet = 'lovesweet',
  Lucarionite = 'lucarionite',
  Luckypunch = 'luckypunch',
  Lumberry = 'lumberry',
  Luminousmoss = 'luminousmoss',
  Lunaliumz = 'lunaliumz',
  Lureball = 'lureball',
  Lustrousorb = 'lustrousorb',
  Luxuryball = 'luxuryball',
  Lycaniumz = 'lycaniumz',
  Machobrace = 'machobrace',
  Magmarizer = 'magmarizer',
  Magnet = 'magnet',
  Magoberry = 'magoberry',
  Magostberry = 'magostberry',
  Mail = 'mail',
  Manectite = 'manectite',
  Marangaberry = 'marangaberry',
  Marshadiumz = 'marshadiumz',
  Masterball = 'masterball',
  Mawilite = 'mawilite',
  Maxpotion = 'maxpotion',
  Meadowplate = 'meadowplate',
  Medichamite = 'medichamite',
  Mentalherb = 'mentalherb',
  Metagrossite = 'metagrossite',
  Metalcoat = 'metalcoat',
  Metalpowder = 'metalpowder',
  Metronome = 'metronome',
  Mewniumz = 'mewniumz',
  Mewtwonitex = 'mewtwonitex',
  Mewtwonitey = 'mewtwonitey',
  Micleberry = 'micleberry',
  Mimikiumz = 'mimikiumz',
  Mindplate = 'mindplate',
  Mintberry = 'mintberry',
  Miracleberry = 'miracleberry',
  Miracleseed = 'miracleseed',
  Mistyseed = 'mistyseed',
  Moonball = 'moonball',
  Moonstone = 'moonstone',
  Muscleband = 'muscleband',
  Mysteryberry = 'mysteryberry',
  Mysticwater = 'mysticwater',
  Nanabberry = 'nanabberry',
  Nestball = 'nestball',
  Netball = 'netball',
  Nevermeltice = 'nevermeltice',
  Nomelberry = 'nomelberry',
  Normalgem = 'normalgem',
  Normaliumz = 'normaliumz',
  Occaberry = 'occaberry',
  Oddincense = 'oddincense',
  Oldamber = 'oldamber',
  Oranberry = 'oranberry',
  Ovalstone = 'ovalstone',
  Przcureberry = 'przcureberry',
  Psncureberry = 'psncureberry',
  Pamtreberry = 'pamtreberry',
  Parkball = 'parkball',
  Passhoberry = 'passhoberry',
  Payapaberry = 'payapaberry',
  Pechaberry = 'pechaberry',
  Persimberry = 'persimberry',
  Petayaberry = 'petayaberry',
  Pidgeotite = 'pidgeotite',
  Pikaniumz = 'pikaniumz',
  Pikashuniumz = 'pikashuniumz',
  Pinapberry = 'pinapberry',
  Pinkbow = 'pinkbow',
  Pinsirite = 'pinsirite',
  Pixieplate = 'pixieplate',
  Plumefossil = 'plumefossil',
  Poisonbarb = 'poisonbarb',
  Poisongem = 'poisongem',
  Poisonmemory = 'poisonmemory',
  Poisoniumz = 'poisoniumz',
  Pokeball = 'pokeball',
  Polkadotbow = 'polkadotbow',
  Pomegberry = 'pomegberry',
  Poweranklet = 'poweranklet',
  Powerband = 'powerband',
  Potion = 'potion',
  Powerbelt = 'powerbelt',
  Powerbracer = 'powerbracer',
  Powerherb = 'powerherb',
  Powerlens = 'powerlens',
  Powerweight = 'powerweight',
  Premierball = 'premierball',
  Primariumz = 'primariumz',
  Prismscale = 'prismscale',
  Protectivepads = 'protectivepads',
  Protector = 'protector',
  Psychicgem = 'psychicgem',
  Psychicmemory = 'psychicmemory',
  Psychicseed = 'psychicseed',
  Psychiumz = 'psychiumz',
  Qualotberry = 'qualotberry',
  Quickball = 'quickball',
  Quickclaw = 'quickclaw',
  Quickpowder = 'quickpowder',
  Rabutaberry = 'rabutaberry',
  Rarebone = 'rarebone',
  Rawstberry = 'rawstberry',
  Razorclaw = 'razorclaw',
  Razorfang = 'razorfang',
  Razzberry = 'razzberry',
  Reapercloth = 'reapercloth',
  Redcard = 'redcard',
  Redorb = 'redorb',
  Repeatball = 'repeatball',
  Ribbonsweet = 'ribbonsweet',
  Rindoberry = 'rindoberry',
  Ringtarget = 'ringtarget',
  Rockgem = 'rockgem',
  Rockincense = 'rockincense',
  Rockmemory = 'rockmemory',
  Rockiumz = 'rockiumz',
  Roseincense = 'roseincense',
  Rockyhelmet = 'rockyhelmet',
  Roomservice = 'roomservice',
  Rootfossil = 'rootfossil',
  Roseliberry = 'roseliberry',
  Rowapberry = 'rowapberry',
  Rustedshield = 'rustedshield',
  Rustedsword = 'rustedsword',
  Sablenite = 'sablenite',
  Sachet = 'sachet',
  Safariball = 'safariball',
  Safetygoggles = 'safetygoggles',
  Sailfossil = 'sailfossil',
  Salacberry = 'salacberry',
  Salamencite = 'salamencite',
  Sceptilite = 'sceptilite',
  Scizorite = 'scizorite',
  Scopelens = 'scopelens',
  Seaincense = 'seaincense',
  Sharpbeak = 'sharpbeak',
  Sharpedonite = 'sharpedonite',
  Shedshell = 'shedshell',
  Shellbell = 'shellbell',
  Shinystone = 'shinystone',
  Shockdrive = 'shockdrive',
  Shucaberry = 'shucaberry',
  Silkscarf = 'silkscarf',
  Silverpowder = 'silverpowder',
  Sitrusberry = 'sitrusberry',
  Skullfossil = 'skullfossil',
  Skyplate = 'skyplate',
  Slowbronite = 'slowbronite',
  Smoothrock = 'smoothrock',
  Snorliumz = 'snorliumz',
  Snowball = 'snowball',
  Softsand = 'softsand',
  Solganiumz = 'solganiumz',
  Souldew = 'souldew',
  Spelltag = 'spelltag',
  Spelonberry = 'spelonberry',
  Splashplate = 'splashplate',
  Spookyplate = 'spookyplate',
  Sportball = 'sportball',
  Starfberry = 'starfberry',
  Steelgem = 'steelgem',
  Steelmemory = 'steelmemory',
  Steeliumz = 'steeliumz',
  Starsweet = 'starsweet',
  Steelixite = 'steelixite',
  Stick = 'stick',
  Stickybarb = 'stickybarb',
  Stoneplate = 'stoneplate',
  Strawberrysweet = 'strawberrysweet',
  Sunstone = 'sunstone',
  Superpotion = 'superpotion',
  Swampertite = 'swampertite',
  Sweetapple = 'sweetapple',
  Tamatoberry = 'tamatoberry',
  Tangaberry = 'tangaberry',
  Tapuniumz = 'tapuniumz',
  Tartapple = 'tartapple',
  Terrainextender = 'terrainextender',
  Thickclub = 'thickclub',
  Throatspray = 'throatspray',
  Thunderstone = 'thunderstone',
  Timerball = 'timerball',
  Toxicorb = 'toxicorb',
  Toxicplate = 'toxicplate',
  Twistedspoon = 'twistedspoon',
  Tyranitarite = 'tyranitarite',
  Ultraball = 'ultraball',
  Ultranecroziumz = 'ultranecroziumz',
  Upgrade = 'upgrade',
  Utilityumbrella = 'utilityumbrella',
  Venusaurite = 'venusaurite',
  Wacanberry = 'wacanberry',
  Watergem = 'watergem',
  Watermemory = 'watermemory',
  Waterstone = 'waterstone',
  Wateriumz = 'wateriumz',
  Watmelberry = 'watmelberry',
  Waveincense = 'waveincense',
  Weaknesspolicy = 'weaknesspolicy',
  Wepearberry = 'wepearberry',
  Whippeddream = 'whippeddream',
  Whiteherb = 'whiteherb',
  Widelens = 'widelens',
  Wikiberry = 'wikiberry',
  Wiseglasses = 'wiseglasses',
  Yacheberry = 'yacheberry',
  Zapplate = 'zapplate',
  Zoomlens = 'zoomlens',
  Acrobike = 'acrobike',
  Adventureguide = 'adventureguide',
  Apricornbox = 'apricornbox',
  Aquasuit = 'aquasuit',
  Auroraticket = 'auroraticket',
  Autograph = 'autograph',
  Azureflute = 'azureflute',
  Bandautograph = 'bandautograph',
  Basementkey = 'basementkey',
  Berrypots = 'berrypots',
  Berrypouch = 'berrypouch',
  Bicycle = 'bicycle',
  Bikevoucher = 'bikevoucher',
  Bluecard = 'bluecard',
  Bluepetal = 'bluepetal',
  Campinggear = 'campinggear',
  Cardkey = 'cardkey',
  Catchingcharm = 'catchingcharm',
  Clearbell = 'clearbell',
  Coincase = 'coincase',
  Colressmchn = 'colressmchn',
  Contestcostume = 'contestcostume',
  Contestpass = 'contestpass',
  Coupon1 = 'coupon1',
  Coupon2 = 'coupon2',
  Coupon3 = 'coupon3',
  Dnasplicers = 'dnasplicers',
  Darkstone = 'darkstone',
  Devongoods = 'devongoods',
  Devonparts = 'devonparts',
  Devonscope = 'devonscope',
  Devonscubagear = 'devonscubagear',
  Dowsingmchn = 'dowsingmchn',
  Dowsingmachine = 'dowsingmachine',
  Dragonskull = 'dragonskull',
  Droppeditem = 'droppeditem',
  Dynamaxband = 'dynamaxband',
  Eggcard = 'eggcard',
  Elevatorkey = 'elevatorkey',
  Endorsement = 'endorsement',
  Enigmastone = 'enigmastone',
  Enigmaticcard = 'enigmaticcard',
  Eonflute = 'eonflute',
  Eonticket = 'eonticket',
  Escaperope = 'escaperope',
  Expshare = 'expshare',
  Explorerkit = 'explorerkit',
  Famechecker = 'famechecker',
  Fashioncase = 'fashioncase',
  Fishingrod = 'fishingrod',
  Foragebag = 'foragebag',
  Gbsounds = 'gbsounds',
  Gsball = 'gsball',
  Galactickey = 'galactickey',
  Gogoggles = 'gogoggles',
  Godstone = 'godstone',
  Goldteeth = 'goldteeth',
  Goodrod = 'goodrod',
  Gracidea = 'gracidea',
  Gram1 = 'gram1',
  Gram2 = 'gram2',
  Gram3 = 'gram3',
  Greenpetal = 'greenpetal',
  Grubbyhanky = 'grubbyhanky',
  Hitechearbuds = 'hitechearbuds',
  Holocaster = 'holocaster',
  Honorofkalos = 'honorofkalos',
  Ilimasnormaliumz = 'ilimasnormaliumz',
  Intriguingstone = 'intriguingstone',
  Itemfinder = 'itemfinder',
  Jadeorb = 'jadeorb',
  Journal = 'journal',
  Keystone = 'keystone',
  Keytoroom1 = 'keytoroom1',
  Keytoroom2 = 'keytoroom2',
  Keytoroom4 = 'keytoroom4',
  Keytoroom6 = 'keytoroom6',
  Leftpokeball = 'leftpokeball',
  Lenscase = 'lenscase',
  Letter = 'letter',
  Libertypass = 'libertypass',
  Liftkey = 'liftkey',
  Lightstone = 'lightstone',
  Lockcapsule = 'lockcapsule',
  Lookerticket = 'lookerticket',
  Lootsack = 'lootsack',
  Lostitem = 'lostitem',
  Lunarwing = 'lunarwing',
  Machbike = 'machbike',
  Machinepart = 'machinepart',
  Magmaemblem = 'magmaemblem',
  Magmastone = 'magmastone',
  Magmasuit = 'magmasuit',
  Makeupbag = 'makeupbag',
  Medalbox = 'medalbox',
  Megabracelet = 'megabracelet',
  Megaring = 'megaring',
  Membercard = 'membercard',
  Meteorite = 'meteorite',
  Meteoriteshard = 'meteoriteshard',
  Moonflute = 'moonflute',
  Mysteryegg = 'mysteryegg',
  Mysticticket = 'mysticticket',
  Nlunarizer = 'nlunarizer',
  Nsolarizer = 'nsolarizer',
  Oaksletter = 'oaksletter',
  Oaksparcel = 'oaksparcel',
  Oldcharm = 'oldcharm',
  Oldletter = 'oldletter',
  Oldrod = 'oldrod',
  Oldseamap = 'oldseamap',
  Orangepetal = 'orangepetal',
  Ovalcharm = 'ovalcharm',
  Pairoftickets = 'pairoftickets',
  Palpad = 'palpad',
  Parcel = 'parcel',
  Pass = 'pass',
  Permit = 'permit',
  Photoalbum = 'photoalbum',
  Pinkpetal = 'pinkpetal',
  Plasmacard = 'plasmacard',
  Poffincase = 'poffincase',
  Pointcard = 'pointcard',
  Pokeradar = 'pokeradar',
  Pokeblockkit = 'pokeblockkit',
  Pokeblockcase = 'pokeblockcase',
  Pokeflute = 'pokeflute',
  Pokemonboxlink = 'pokemonboxlink',
  Powderjar = 'powderjar',
  Powerplantpass = 'powerplantpass',
  Prisonbottle = 'prisonbottle',
  Profsletter = 'profsletter',
  Professorsmask = 'professorsmask',
  Propcase = 'propcase',
  Purplepetal = 'purplepetal',
  Ragecandybar = 'ragecandybar',
  Rainbowflower = 'rainbowflower',
  Rainbowpass = 'rainbowpass',
  Rainbowwing = 'rainbowwing',
  Redchain = 'redchain',
  Redpetal = 'redpetal',
  Redscale = 'redscale',
  Revealglass = 'revealglass',
  Ridepager = 'ridepager',
  Rm1key = 'rm1key',
  Rm2key = 'rm2key',
  Rm4key = 'rm4key',
  Rm6key = 'rm6key',
  Rollerskates = 'rollerskates',
  Rotombike = 'rotombike',
  Rotomcatalog = 'rotomcatalog',
  Ruby = 'ruby',
  Rulebook = 'rulebook',
  Ssticket = 'ssticket',
  Sapphire = 'sapphire',
  Scanner = 'scanner',
  Sealbag = 'sealbag',
  Sealcase = 'sealcase',
  Secretkey = 'secretkey',
  Secretpotion = 'secretpotion',
  Shinycharm = 'shinycharm',
  Silphscope = 'silphscope',
  Silverwing = 'silverwing',
  Slowpoketail = 'slowpoketail',
  Soniasbook = 'soniasbook',
  Sootsack = 'sootsack',
  Sparklingstone = 'sparklingstone',
  Sprayduck = 'sprayduck',
  Sprinklotad = 'sprinklotad',
  Squirtbottle = 'squirtbottle',
  Storagekey = 'storagekey',
  Suitekey = 'suitekey',
  Sunflute = 'sunflute',
  Superrod = 'superrod',
  Surgebadge = 'surgebadge',
  Tmcase = 'tmcase',
  Tmvpass = 'tmvpass',
  Tea = 'tea',
  Teachytv = 'teachytv',
  Tidalbell = 'tidalbell',
  Townmap = 'townmap',
  Traveltrunk = 'traveltrunk',
  Tripass = 'tripass',
  Unownreport = 'unownreport',
  Vsrecorder = 'vsrecorder',
  Vsseeker = 'vsseeker',
  Wailmerpail = 'wailmerpail',
  Wishingstar = 'wishingstar',
  Workskey = 'workskey',
  Xtransceiver = 'xtransceiver',
  Yellowpetal = 'yellowpetal',
  Zpowering = 'zpowering',
  Zring = 'zring',
  Zygardecube = 'zygardecube'
}
/** A learnset entry */
export declare type LearnsetEntry = {
  readonly __typename?: 'LearnsetEntry';
  /** The moves that can be learned through levelling up */
  readonly levelUpMoves?: Maybe<ReadonlyArray<LearnsetLevelUpMove>>;
  /** The moves that can be learned through virtual console transfer */
  readonly virtualTransferMoves?: Maybe<ReadonlyArray<LearnsetMove>>;
  /** The moves that can be learned from a move tutor */
  readonly tutorMoves?: Maybe<ReadonlyArray<LearnsetMove>>;
  /** The moves that can be learned from a Technical Machine or Technical Record */
  readonly tmMoves?: Maybe<ReadonlyArray<LearnsetMove>>;
  /** The moves that can be passed as egg moves */
  readonly eggMoves?: Maybe<ReadonlyArray<LearnsetMove>>;
  /** The moves that are exclusive to event variants of the Pokémon */
  readonly eventMoves?: Maybe<ReadonlyArray<LearnsetMove>>;
  /** The moves that are exclusively learned in the Unova Dream World */
  readonly dreamworldMoves?: Maybe<ReadonlyArray<LearnsetMove>>;
  /** The dex number for a Pokémon */
  readonly num: Scalars['Int'];
  /** The species name for a Pokémon */
  readonly species: Scalars['String'];
  /** The sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  readonly sprite: Scalars['String'];
  /** The shiny sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  readonly shinySprite: Scalars['String'];
  /** The back sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  readonly backSprite: Scalars['String'];
  /** The shiny back sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  readonly shinyBackSprite: Scalars['String'];
  /** The PokéDex colour for the Pokémon */
  readonly color: Scalars['String'];
};
/** A learnset level up move entry */
export declare type LearnsetLevelUpMove = {
  readonly __typename?: 'LearnsetLevelUpMove';
  /** The name of the move */
  readonly name?: Maybe<Scalars['String']>;
  /** The generation in which this pokemon learned the move this way */
  readonly generation?: Maybe<Scalars['Int']>;
  /** The level at which the move is learned */
  readonly level?: Maybe<Scalars['Int']>;
};
/** A learnset move entry */
export declare type LearnsetMove = {
  readonly __typename?: 'LearnsetMove';
  /** The name of the move */
  readonly name?: Maybe<Scalars['String']>;
  /** The generation in which this pokemon learned the move this way */
  readonly generation?: Maybe<Scalars['Int']>;
};
/** A single Pokémon move entry */
export declare type MoveEntry = {
  readonly __typename?: 'MoveEntry';
  /** The name for a move */
  readonly name: Scalars['String'];
  /** The short description for a move */
  readonly shortDesc: Scalars['String'];
  /** The type for a move */
  readonly type: Scalars['String'];
  /** The base power for a move */
  readonly basePower: Scalars['String'];
  /** The power this move will have when used with its Z-move equivalent */
  readonly zMovePower?: Maybe<Scalars['Int']>;
  /** The power this move will have when used with its Max Move equivalent */
  readonly maxMovePower?: Maybe<Scalars['Int']>;
  /** The power points for a move */
  readonly pp: Scalars['Int'];
  /** The category for a move */
  readonly category: Scalars['String'];
  /** The accuracy for a move */
  readonly accuracy: Scalars['Int'];
  /** The priority for a move */
  readonly priority: Scalars['Int'];
  /** The target for a move */
  readonly target: Scalars['String'];
  /** The contest type for a move */
  readonly contestType?: Maybe<Scalars['String']>;
  /** Bulbapedia page for a move */
  readonly bulbapediaPage: Scalars['String'];
  /** Serebii page for a move */
  readonly serebiiPage: Scalars['String'];
  /** Smogon page for a move */
  readonly smogonPage: Scalars['String'];
  /** Whether a move is non-standard, and if it is why */
  readonly isNonstandard?: Maybe<Scalars['String']>;
  /** Whether this move is a Z-Move, and if it is the Z-Crystal required to trigger it */
  readonly isZ?: Maybe<Scalars['String']>;
  /** Whether this move is a G-MAX move, and if it is which Gigantamaxed Pokémon can use it */
  readonly isGMax?: Maybe<Scalars['String']>;
  /** Whether this move can be used outside of battle, and if it can what the effect of the field move is */
  readonly isFieldMove?: Maybe<Scalars['String']>;
  /** The long description for a move */
  readonly desc?: Maybe<Scalars['String']>;
};
/** The supported moves */
export declare const enum Moves {
  Absorb = 'absorb',
  Accelerock = 'accelerock',
  Acid = 'acid',
  Acidarmor = 'acidarmor',
  Aciddownpour = 'aciddownpour',
  Acidspray = 'acidspray',
  Acrobatics = 'acrobatics',
  Acupressure = 'acupressure',
  Aerialace = 'aerialace',
  Aeroblast = 'aeroblast',
  Afteryou = 'afteryou',
  Agility = 'agility',
  Aircutter = 'aircutter',
  Airslash = 'airslash',
  Alloutpummeling = 'alloutpummeling',
  Allyswitch = 'allyswitch',
  Amnesia = 'amnesia',
  Anchorshot = 'anchorshot',
  Ancientpower = 'ancientpower',
  Appleacid = 'appleacid',
  Aquajet = 'aquajet',
  Aquaring = 'aquaring',
  Aquatail = 'aquatail',
  Armthrust = 'armthrust',
  Aromatherapy = 'aromatherapy',
  Aromaticmist = 'aromaticmist',
  Assist = 'assist',
  Assurance = 'assurance',
  Astralbarrage = 'astralbarrage',
  Astonish = 'astonish',
  Attackorder = 'attackorder',
  Attract = 'attract',
  Aurasphere = 'aurasphere',
  Aurawheel = 'aurawheel',
  Aurorabeam = 'aurorabeam',
  Auroraveil = 'auroraveil',
  Autotomize = 'autotomize',
  Avalanche = 'avalanche',
  Babydolleyes = 'babydolleyes',
  Baddybad = 'baddybad',
  Banefulbunker = 'banefulbunker',
  Barrage = 'barrage',
  Barrier = 'barrier',
  Batonpass = 'batonpass',
  Beakblast = 'beakblast',
  Beatup = 'beatup',
  Belch = 'belch',
  Behemothbash = 'behemothbash',
  Behemothblade = 'behemothblade',
  Bellydrum = 'bellydrum',
  Bestow = 'bestow',
  Bide = 'bide',
  Bind = 'bind',
  Bite = 'bite',
  Blackholeeclipse = 'blackholeeclipse',
  Blastburn = 'blastburn',
  Blazekick = 'blazekick',
  Blizzard = 'blizzard',
  Block = 'block',
  Bloomdoom = 'bloomdoom',
  Blueflare = 'blueflare',
  Bodypress = 'bodypress',
  Bodyslam = 'bodyslam',
  Boltbeak = 'boltbeak',
  Boltstrike = 'boltstrike',
  Boneclub = 'boneclub',
  Bonerush = 'bonerush',
  Bonemerang = 'bonemerang',
  Boomburst = 'boomburst',
  Bounce = 'bounce',
  Bouncybubble = 'bouncybubble',
  Bravebird = 'bravebird',
  Branchpoke = 'branchpoke',
  Breakingswipe = 'breakingswipe',
  Breakneckblitz = 'breakneckblitz',
  Brickbreak = 'brickbreak',
  Brine = 'brine',
  Brutalswing = 'brutalswing',
  Bubble = 'bubble',
  Bubblebeam = 'bubblebeam',
  Bugbite = 'bugbite',
  Bugbuzz = 'bugbuzz',
  Bulkup = 'bulkup',
  Bulldoze = 'bulldoze',
  Bulletpunch = 'bulletpunch',
  Bulletseed = 'bulletseed',
  Burningjealousy = 'burningjealousy',
  Burnup = 'burnup',
  Buzzybuzz = 'buzzybuzz',
  Calmmind = 'calmmind',
  Camouflage = 'camouflage',
  Captivate = 'captivate',
  Catastropika = 'catastropika',
  Celebrate = 'celebrate',
  Charge = 'charge',
  Chargebeam = 'chargebeam',
  Charm = 'charm',
  Chatter = 'chatter',
  Chipaway = 'chipaway',
  Circlethrow = 'circlethrow',
  Clamp = 'clamp',
  Clangingscales = 'clangingscales',
  Clangoroussoul = 'clangoroussoul',
  Clangoroussoulblaze = 'clangoroussoulblaze',
  Clearsmog = 'clearsmog',
  Closecombat = 'closecombat',
  Coaching = 'coaching',
  Coil = 'coil',
  Cometpunch = 'cometpunch',
  Confide = 'confide',
  Confuseray = 'confuseray',
  Confusion = 'confusion',
  Constrict = 'constrict',
  Continentalcrush = 'continentalcrush',
  Conversion = 'conversion',
  Conversion2 = 'conversion2',
  Copycat = 'copycat',
  Coreenforcer = 'coreenforcer',
  Corkscrewcrash = 'corkscrewcrash',
  Corrosivegas = 'corrosivegas',
  Cosmicpower = 'cosmicpower',
  Cottonguard = 'cottonguard',
  Cottonspore = 'cottonspore',
  Counter = 'counter',
  Courtchange = 'courtchange',
  Covet = 'covet',
  Crabhammer = 'crabhammer',
  Craftyshield = 'craftyshield',
  Crosschop = 'crosschop',
  Crosspoison = 'crosspoison',
  Crunch = 'crunch',
  Crushclaw = 'crushclaw',
  Crushgrip = 'crushgrip',
  Curse = 'curse',
  Cut = 'cut',
  Darkpulse = 'darkpulse',
  Darkvoid = 'darkvoid',
  Darkestlariat = 'darkestlariat',
  Dazzlinggleam = 'dazzlinggleam',
  Decorate = 'decorate',
  Defendorder = 'defendorder',
  Defensecurl = 'defensecurl',
  Defog = 'defog',
  Destinybond = 'destinybond',
  Detect = 'detect',
  Devastatingdrake = 'devastatingdrake',
  Diamondstorm = 'diamondstorm',
  Dig = 'dig',
  Disable = 'disable',
  Disarmingvoice = 'disarmingvoice',
  Discharge = 'discharge',
  Dive = 'dive',
  Dizzypunch = 'dizzypunch',
  Doomdesire = 'doomdesire',
  Doublehit = 'doublehit',
  Doubleironbash = 'doubleironbash',
  Doublekick = 'doublekick',
  Doubleslap = 'doubleslap',
  Doubleteam = 'doubleteam',
  Doubleedge = 'doubleedge',
  Dracometeor = 'dracometeor',
  Dragonascent = 'dragonascent',
  Dragonbreath = 'dragonbreath',
  Dragonclaw = 'dragonclaw',
  Dragondance = 'dragondance',
  Dragondarts = 'dragondarts',
  Dragonenergy = 'dragonenergy',
  Dragonhammer = 'dragonhammer',
  Dragonpulse = 'dragonpulse',
  Dragonrage = 'dragonrage',
  Dragonrush = 'dragonrush',
  Dragontail = 'dragontail',
  Drainpunch = 'drainpunch',
  Drainingkiss = 'drainingkiss',
  Dreameater = 'dreameater',
  Drillpeck = 'drillpeck',
  Drillrun = 'drillrun',
  Drumbeating = 'drumbeating',
  Dualchop = 'dualchop',
  Dynamicpunch = 'dynamicpunch',
  Dualwingbeat = 'dualwingbeat',
  Dynamaxcannon = 'dynamaxcannon',
  Earthpower = 'earthpower',
  Earthquake = 'earthquake',
  Echoedvoice = 'echoedvoice',
  Eerieimpulse = 'eerieimpulse',
  Eeriespell = 'eeriespell',
  Eggbomb = 'eggbomb',
  Electricterrain = 'electricterrain',
  Electrify = 'electrify',
  Electroball = 'electroball',
  Electroweb = 'electroweb',
  Embargo = 'embargo',
  Ember = 'ember',
  Encore = 'encore',
  Endeavor = 'endeavor',
  Endure = 'endure',
  Energyball = 'energyball',
  Entrainment = 'entrainment',
  Eruption = 'eruption',
  Eternabeam = 'eternabeam',
  Expandingforce = 'expandingforce',
  Explosion = 'explosion',
  Extrasensory = 'extrasensory',
  Extremeevoboost = 'extremeevoboost',
  Extremespeed = 'extremespeed',
  Facade = 'facade',
  Fairylock = 'fairylock',
  Fairywind = 'fairywind',
  Fakeout = 'fakeout',
  Faketears = 'faketears',
  Falsesurrender = 'falsesurrender',
  Falseswipe = 'falseswipe',
  Featherdance = 'featherdance',
  Feint = 'feint',
  Feintattack = 'feintattack',
  Fellstinger = 'fellstinger',
  Fierydance = 'fierydance',
  Fierywrath = 'fierywrath',
  Finalgambit = 'finalgambit',
  Fireblast = 'fireblast',
  Firefang = 'firefang',
  Firelash = 'firelash',
  Firepledge = 'firepledge',
  Firepunch = 'firepunch',
  Firespin = 'firespin',
  Firstimpression = 'firstimpression',
  Fishiousrend = 'fishiousrend',
  Fissure = 'fissure',
  Flail = 'flail',
  Flameburst = 'flameburst',
  Flamecharge = 'flamecharge',
  Flamewheel = 'flamewheel',
  Flamethrower = 'flamethrower',
  Flareblitz = 'flareblitz',
  Flash = 'flash',
  Flashcannon = 'flashcannon',
  Flatter = 'flatter',
  Fleurcannon = 'fleurcannon',
  Fling = 'fling',
  Flipturn = 'flipturn',
  Floatyfall = 'floatyfall',
  Floralhealing = 'floralhealing',
  Flowershield = 'flowershield',
  Fly = 'fly',
  Flyingpress = 'flyingpress',
  Focusblast = 'focusblast',
  Focusenergy = 'focusenergy',
  Focuspunch = 'focuspunch',
  Followme = 'followme',
  Forcepalm = 'forcepalm',
  Foresight = 'foresight',
  Forestscurse = 'forestscurse',
  Foulplay = 'foulplay',
  Freezeshock = 'freezeshock',
  Freezedry = 'freezedry',
  Freezingglare = 'freezingglare',
  Freezyfrost = 'freezyfrost',
  Frenzyplant = 'frenzyplant',
  Frostbreath = 'frostbreath',
  Frustration = 'frustration',
  Furyattack = 'furyattack',
  Furycutter = 'furycutter',
  Furyswipes = 'furyswipes',
  Fusionbolt = 'fusionbolt',
  Fusionflare = 'fusionflare',
  Futuresight = 'futuresight',
  Gastroacid = 'gastroacid',
  Geargrind = 'geargrind',
  Gearup = 'gearup',
  Genesissupernova = 'genesissupernova',
  Geomancy = 'geomancy',
  Gigadrain = 'gigadrain',
  Gigaimpact = 'gigaimpact',
  Gigavolthavoc = 'gigavolthavoc',
  Glaciallance = 'glaciallance',
  Glaciate = 'glaciate',
  Glare = 'glare',
  Glitzyglow = 'glitzyglow',
  Gmaxbefuddle = 'gmaxbefuddle',
  Gmaxcannonade = 'gmaxcannonade',
  Gmaxcentiferno = 'gmaxcentiferno',
  Gmaxchistrike = 'gmaxchistrike',
  Gmaxcuddle = 'gmaxcuddle',
  Gmaxdepletion = 'gmaxdepletion',
  Gmaxdrumsolo = 'gmaxdrumsolo',
  Gmaxfinale = 'gmaxfinale',
  Gmaxtartness = 'gmaxtartness',
  Gmaxvinelash = 'gmaxvinelash',
  Gmaxvolcalith = 'gmaxvolcalith',
  Gmaxvoltcrash = 'gmaxvoltcrash',
  Gmaxwildfire = 'gmaxwildfire',
  Gmaxwindrage = 'gmaxwindrage',
  Gmaxfireball = 'gmaxfireball',
  Gmaxfoamburst = 'gmaxfoamburst',
  Gmaxgoldrush = 'gmaxgoldrush',
  Gmaxgravitas = 'gmaxgravitas',
  Gmaxhydrosnipe = 'gmaxhydrosnipe',
  Gmaxmalodor = 'gmaxmalodor',
  Gmaxmeltdown = 'gmaxmeltdown',
  Gmaxstonesurge = 'gmaxstonesurge',
  Gmaxstunshock = 'gmaxstunshock',
  Gmaxsweetness = 'gmaxsweetness',
  Gmaxterror = 'gmaxterror',
  Gmaxoneblow = 'gmaxoneblow',
  Gmaxrapidflow = 'gmaxrapidflow',
  Gmaxreplenish = 'gmaxreplenish',
  Gmaxresonance = 'gmaxresonance',
  Gmaxsandblast = 'gmaxsandblast',
  Gmaxsmite = 'gmaxsmite',
  Gmaxsnooze = 'gmaxsnooze',
  Gmaxsteelsurge = 'gmaxsteelsurge',
  Grassknot = 'grassknot',
  Grasspledge = 'grasspledge',
  Grasswhistle = 'grasswhistle',
  Grassyglide = 'grassyglide',
  Grassyterrain = 'grassyterrain',
  Gravapple = 'gravapple',
  Gravity = 'gravity',
  Growl = 'growl',
  Growth = 'growth',
  Grudge = 'grudge',
  Guardsplit = 'guardsplit',
  Guardswap = 'guardswap',
  Guardianofalola = 'guardianofalola',
  Guillotine = 'guillotine',
  Gunkshot = 'gunkshot',
  Gust = 'gust',
  Gyroball = 'gyroball',
  Hail = 'hail',
  Hammerarm = 'hammerarm',
  Happyhour = 'happyhour',
  Harden = 'harden',
  Haze = 'haze',
  Headcharge = 'headcharge',
  Headsmash = 'headsmash',
  Headbutt = 'headbutt',
  Healbell = 'healbell',
  Healblock = 'healblock',
  Healorder = 'healorder',
  Healpulse = 'healpulse',
  Healingwish = 'healingwish',
  Heartstamp = 'heartstamp',
  Heartswap = 'heartswap',
  Heatcrash = 'heatcrash',
  Heatwave = 'heatwave',
  Heavyslam = 'heavyslam',
  Helpinghand = 'helpinghand',
  Hex = 'hex',
  Hiddenpower = 'hiddenpower',
  Highhorsepower = 'highhorsepower',
  Highjumpkick = 'highjumpkick',
  Holdback = 'holdback',
  Holdhands = 'holdhands',
  Honeclaws = 'honeclaws',
  Hornattack = 'hornattack',
  Horndrill = 'horndrill',
  Hornleech = 'hornleech',
  Howl = 'howl',
  Hurricane = 'hurricane',
  Hydrocannon = 'hydrocannon',
  Hydropump = 'hydropump',
  Hydrovortex = 'hydrovortex',
  Hyperbeam = 'hyperbeam',
  Hyperfang = 'hyperfang',
  Hypervoice = 'hypervoice',
  Hyperspacefury = 'hyperspacefury',
  Hyperspacehole = 'hyperspacehole',
  Hypnosis = 'hypnosis',
  Iceball = 'iceball',
  Icebeam = 'icebeam',
  Iceburn = 'iceburn',
  Icefang = 'icefang',
  Icehammer = 'icehammer',
  Icepunch = 'icepunch',
  Iceshard = 'iceshard',
  Iciclecrash = 'iciclecrash',
  Iciclespear = 'iciclespear',
  Icywind = 'icywind',
  Imprison = 'imprison',
  Incinerate = 'incinerate',
  Inferno = 'inferno',
  Infernooverdrive = 'infernooverdrive',
  Infestation = 'infestation',
  Ingrain = 'ingrain',
  Instruct = 'instruct',
  Iondeluge = 'iondeluge',
  Irondefense = 'irondefense',
  Ironhead = 'ironhead',
  Irontail = 'irontail',
  Jawlock = 'jawlock',
  Judgment = 'judgment',
  Jumpkick = 'jumpkick',
  Junglehealing = 'junglehealing',
  Karatechop = 'karatechop',
  Kinesis = 'kinesis',
  Kingsshield = 'kingsshield',
  Knockoff = 'knockoff',
  Landswrath = 'landswrath',
  Laserfocus = 'laserfocus',
  Lashout = 'lashout',
  Lastresort = 'lastresort',
  Lavaplume = 'lavaplume',
  Leafblade = 'leafblade',
  Leafstorm = 'leafstorm',
  Leaftornado = 'leaftornado',
  Leafage = 'leafage',
  Leechlife = 'leechlife',
  Leechseed = 'leechseed',
  Leer = 'leer',
  Letssnuggleforever = 'letssnuggleforever',
  Lick = 'lick',
  Lightscreen = 'lightscreen',
  Lightthatburnsthesky = 'lightthatburnsthesky',
  Lifedew = 'lifedew',
  Lightofruin = 'lightofruin',
  Liquidation = 'liquidation',
  Lockon = 'lockon',
  Lovelykiss = 'lovelykiss',
  Lowkick = 'lowkick',
  Lowsweep = 'lowsweep',
  Luckychant = 'luckychant',
  Lunardance = 'lunardance',
  Lunge = 'lunge',
  Lusterpurge = 'lusterpurge',
  Machpunch = 'machpunch',
  Magiccoat = 'magiccoat',
  Magicpowder = 'magicpowder',
  Magicroom = 'magicroom',
  Magicalleaf = 'magicalleaf',
  Magikarpsrevenge = 'magikarpsrevenge',
  Magmastorm = 'magmastorm',
  Magnetbomb = 'magnetbomb',
  Magnetrise = 'magnetrise',
  Magneticflux = 'magneticflux',
  Magnitude = 'magnitude',
  Maliciousmoonsault = 'maliciousmoonsault',
  Matblock = 'matblock',
  Mefirst = 'mefirst',
  Maxairstream = 'maxairstream',
  Maxdarkness = 'maxdarkness',
  Maxflare = 'maxflare',
  Maxflutterby = 'maxflutterby',
  Maxgeyser = 'maxgeyser',
  Maxguard = 'maxguard',
  Meanlook = 'meanlook',
  Maxhailstorm = 'maxhailstorm',
  Maxknuckle = 'maxknuckle',
  Maxlightning = 'maxlightning',
  Maxmindstorm = 'maxmindstorm',
  Maxooze = 'maxooze',
  Maxovergrowth = 'maxovergrowth',
  Maxphantasm = 'maxphantasm',
  Maxquake = 'maxquake',
  Maxrockfall = 'maxrockfall',
  Maxstarfall = 'maxstarfall',
  Maxsteelspike = 'maxsteelspike',
  Maxstrike = 'maxstrike',
  Maxwyrmwind = 'maxwyrmwind',
  Meditate = 'meditate',
  Megadrain = 'megadrain',
  Megakick = 'megakick',
  Megapunch = 'megapunch',
  Megahorn = 'megahorn',
  Memento = 'memento',
  Menacingmoonrazemaelstrom = 'menacingmoonrazemaelstrom',
  Metalburst = 'metalburst',
  Metalclaw = 'metalclaw',
  Metalsound = 'metalsound',
  Meteorassault = 'meteorassault',
  Meteorbeam = 'meteorbeam',
  Meteormash = 'meteormash',
  Metronome = 'metronome',
  Milkdrink = 'milkdrink',
  Mimic = 'mimic',
  Mindblown = 'mindblown',
  Mindreader = 'mindreader',
  Minimize = 'minimize',
  Miracleeye = 'miracleeye',
  Mirrorcoat = 'mirrorcoat',
  Mirrormove = 'mirrormove',
  Mirrorshot = 'mirrorshot',
  Mist = 'mist',
  Mistball = 'mistball',
  Mistyexplosion = 'mistyexplosion',
  Mistyterrain = 'mistyterrain',
  Moonblast = 'moonblast',
  Moongeistbeam = 'moongeistbeam',
  Moonlight = 'moonlight',
  Morningsun = 'morningsun',
  Mudbomb = 'mudbomb',
  Mudshot = 'mudshot',
  Mudsport = 'mudsport',
  Mudslap = 'mudslap',
  Muddywater = 'muddywater',
  Multiattack = 'multiattack',
  Mysticalfire = 'mysticalfire',
  Nastyplot = 'nastyplot',
  Naturalgift = 'naturalgift',
  Naturepower = 'naturepower',
  Naturesmadness = 'naturesmadness',
  Needlearm = 'needlearm',
  Neverendingnightmare = 'neverendingnightmare',
  Nightdaze = 'nightdaze',
  Nightshade = 'nightshade',
  Nightslash = 'nightslash',
  Nightmare = 'nightmare',
  Nobleroar = 'nobleroar',
  Noretreat = 'noretreat',
  Nuzzle = 'nuzzle',
  Oblivionwing = 'oblivionwing',
  Obstruct = 'obstruct',
  Oceanicoperetta = 'oceanicoperetta',
  Octazooka = 'octazooka',
  Octolock = 'octolock',
  Odorsleuth = 'odorsleuth',
  Ominouswind = 'ominouswind',
  Originpulse = 'originpulse',
  Outrage = 'outrage',
  Overdrive = 'overdrive',
  Overheat = 'overheat',
  Painsplit = 'painsplit',
  Paleowave = 'paleowave',
  Paraboliccharge = 'paraboliccharge',
  Partingshot = 'partingshot',
  Payday = 'payday',
  Payback = 'payback',
  Peck = 'peck',
  Perishsong = 'perishsong',
  Petalblizzard = 'petalblizzard',
  Petaldance = 'petaldance',
  Phantomforce = 'phantomforce',
  Photongeyser = 'photongeyser',
  Pikapapow = 'pikapapow',
  Pinmissile = 'pinmissile',
  Plasmafists = 'plasmafists',
  Playnice = 'playnice',
  Playrough = 'playrough',
  Pluck = 'pluck',
  Poisonfang = 'poisonfang',
  Poisongas = 'poisongas',
  Poisonjab = 'poisonjab',
  Poisonpowder = 'poisonpowder',
  Poisonsting = 'poisonsting',
  Poisontail = 'poisontail',
  Pollenpuff = 'pollenpuff',
  Poltergeist = 'poltergeist',
  Pound = 'pound',
  Powder = 'powder',
  Powdersnow = 'powdersnow',
  Powergem = 'powergem',
  Powersplit = 'powersplit',
  Powerswap = 'powerswap',
  Powertrick = 'powertrick',
  Powertrip = 'powertrip',
  Powerwhip = 'powerwhip',
  Poweruppunch = 'poweruppunch',
  Precipiceblades = 'precipiceblades',
  Present = 'present',
  Prismaticlaser = 'prismaticlaser',
  Protect = 'protect',
  Psybeam = 'psybeam',
  Psychup = 'psychup',
  Psychic = 'psychic',
  Psychicfangs = 'psychicfangs',
  Psychicterrain = 'psychicterrain',
  Psychoboost = 'psychoboost',
  Psychocut = 'psychocut',
  Psychoshift = 'psychoshift',
  Psyshock = 'psyshock',
  Psystrike = 'psystrike',
  Psywave = 'psywave',
  Pulverizingpancake = 'pulverizingpancake',
  Punishment = 'punishment',
  Purify = 'purify',
  Pursuit = 'pursuit',
  Pyroball = 'pyroball',
  Quash = 'quash',
  Quickattack = 'quickattack',
  Quickguard = 'quickguard',
  Quiverdance = 'quiverdance',
  Rage = 'rage',
  Ragepowder = 'ragepowder',
  Raindance = 'raindance',
  Rapidspin = 'rapidspin',
  Razorleaf = 'razorleaf',
  Razorshell = 'razorshell',
  Razorwind = 'razorwind',
  Recover = 'recover',
  Recycle = 'recycle',
  Reflect = 'reflect',
  Reflecttype = 'reflecttype',
  Refresh = 'refresh',
  Relicsong = 'relicsong',
  Rest = 'rest',
  Retaliate = 'retaliate',
  Return = 'return',
  Revelationdance = 'revelationdance',
  Revenge = 'revenge',
  Reversal = 'reversal',
  Risingvoltage = 'risingvoltage',
  Roar = 'roar',
  Roaroftime = 'roaroftime',
  Rockblast = 'rockblast',
  Rockclimb = 'rockclimb',
  Rockpolish = 'rockpolish',
  Rockslide = 'rockslide',
  Rocksmash = 'rocksmash',
  Rockthrow = 'rockthrow',
  Rocktomb = 'rocktomb',
  Rockwrecker = 'rockwrecker',
  Roleplay = 'roleplay',
  Rollingkick = 'rollingkick',
  Rollout = 'rollout',
  Roost = 'roost',
  Rototiller = 'rototiller',
  Round = 'round',
  Sacredfire = 'sacredfire',
  Sacredsword = 'sacredsword',
  Safeguard = 'safeguard',
  Sandattack = 'sandattack',
  Sandtomb = 'sandtomb',
  Sandstorm = 'sandstorm',
  Sappyseed = 'sappyseed',
  Savagespinout = 'savagespinout',
  Scald = 'scald',
  Scaleshot = 'scaleshot',
  Scaryface = 'scaryface',
  Scorchingsands = 'scorchingsands',
  Scratch = 'scratch',
  Screech = 'screech',
  Searingshot = 'searingshot',
  Searingsunrazesmash = 'searingsunrazesmash',
  Secretpower = 'secretpower',
  Secretsword = 'secretsword',
  Seedbomb = 'seedbomb',
  Seedflare = 'seedflare',
  Seismictoss = 'seismictoss',
  Selfdestruct = 'selfdestruct',
  Shadowball = 'shadowball',
  Shadowbone = 'shadowbone',
  Shadowclaw = 'shadowclaw',
  Shadowforce = 'shadowforce',
  Shadowpunch = 'shadowpunch',
  Shadowsneak = 'shadowsneak',
  Shadowstrike = 'shadowstrike',
  Sharpen = 'sharpen',
  Shatteredpsyche = 'shatteredpsyche',
  Sheercold = 'sheercold',
  Shellsidearm = 'shellsidearm',
  Shellsmash = 'shellsmash',
  Shelltrap = 'shelltrap',
  Shiftgear = 'shiftgear',
  Shockwave = 'shockwave',
  Shoreup = 'shoreup',
  Signalbeam = 'signalbeam',
  Silverwind = 'silverwind',
  Simplebeam = 'simplebeam',
  Sing = 'sing',
  Sinisterarrowraid = 'sinisterarrowraid',
  Sizzlyslide = 'sizzlyslide',
  Sketch = 'sketch',
  Skillswap = 'skillswap',
  Skittersmack = 'skittersmack',
  Skullbash = 'skullbash',
  Skyattack = 'skyattack',
  Skydrop = 'skydrop',
  Skyuppercut = 'skyuppercut',
  Slackoff = 'slackoff',
  Slam = 'slam',
  Slash = 'slash',
  Sleeppowder = 'sleeppowder',
  Sleeptalk = 'sleeptalk',
  Sludge = 'sludge',
  Sludgebomb = 'sludgebomb',
  Sludgewave = 'sludgewave',
  Smackdown = 'smackdown',
  Smartstrike = 'smartstrike',
  Smellingsalts = 'smellingsalts',
  Smog = 'smog',
  Smokescreen = 'smokescreen',
  Snaptrap = 'snaptrap',
  Snarl = 'snarl',
  Snatch = 'snatch',
  Snipeshot = 'snipeshot',
  Snore = 'snore',
  Soak = 'soak',
  Softboiled = 'softboiled',
  Solarbeam = 'solarbeam',
  Solarblade = 'solarblade',
  Sonicboom = 'sonicboom',
  Soulstealing7starstrike = 'soulstealing7starstrike',
  Spacialrend = 'spacialrend',
  Spark = 'spark',
  Sparklingaria = 'sparklingaria',
  Sparklyswirl = 'sparklyswirl',
  Spectralthief = 'spectralthief',
  Speedswap = 'speedswap',
  Spiderweb = 'spiderweb',
  Spikecannon = 'spikecannon',
  Spikes = 'spikes',
  Spikyshield = 'spikyshield',
  Spiritbreak = 'spiritbreak',
  Spiritshackle = 'spiritshackle',
  Spitup = 'spitup',
  Spite = 'spite',
  Splash = 'splash',
  Splinteredstormshards = 'splinteredstormshards',
  Splishysplash = 'splishysplash',
  Spore = 'spore',
  Spotlight = 'spotlight',
  Stealthrock = 'stealthrock',
  Steameruption = 'steameruption',
  Steamroller = 'steamroller',
  Steelbeam = 'steelbeam',
  Steelroller = 'steelroller',
  Steelwing = 'steelwing',
  Stickyweb = 'stickyweb',
  Stockpile = 'stockpile',
  Stokedsparksurfer = 'stokedsparksurfer',
  Stomp = 'stomp',
  Stompingtantrum = 'stompingtantrum',
  Stoneedge = 'stoneedge',
  Storedpower = 'storedpower',
  Stormthrow = 'stormthrow',
  Strangesteam = 'strangesteam',
  Strength = 'strength',
  Strengthsap = 'strengthsap',
  Stringshot = 'stringshot',
  Struggle = 'struggle',
  Strugglebug = 'strugglebug',
  Stuffcheeks = 'stuffcheeks',
  Stunspore = 'stunspore',
  Submission = 'submission',
  Substitute = 'substitute',
  Subzeroslammer = 'subzeroslammer',
  Suckerpunch = 'suckerpunch',
  Sunnyday = 'sunnyday',
  Sunsteelstrike = 'sunsteelstrike',
  Superfang = 'superfang',
  Superpower = 'superpower',
  Supersonic = 'supersonic',
  Supersonicskystrike = 'supersonicskystrike',
  Surf = 'surf',
  Surgingstrikes = 'surgingstrikes',
  Swagger = 'swagger',
  Swallow = 'swallow',
  Sweetkiss = 'sweetkiss',
  Sweetscent = 'sweetscent',
  Swift = 'swift',
  Switcheroo = 'switcheroo',
  Swordsdance = 'swordsdance',
  Synchronoise = 'synchronoise',
  Synthesis = 'synthesis',
  Tackle = 'tackle',
  Tailglow = 'tailglow',
  Tailslap = 'tailslap',
  Tailwhip = 'tailwhip',
  Tailwind = 'tailwind',
  Takedown = 'takedown',
  Tarshot = 'tarshot',
  Taunt = 'taunt',
  Tearfullook = 'tearfullook',
  Teatime = 'teatime',
  Technoblast = 'technoblast',
  Tectonicrage = 'tectonicrage',
  Teeterdance = 'teeterdance',
  Telekinesis = 'telekinesis',
  Teleport = 'teleport',
  Terrainpulse = 'terrainpulse',
  Thief = 'thief',
  Thousandarrows = 'thousandarrows',
  Thousandwaves = 'thousandwaves',
  Thrash = 'thrash',
  Throatchop = 'throatchop',
  Thunder = 'thunder',
  Thundercage = 'thundercage',
  Thunderfang = 'thunderfang',
  Thunderouskick = 'thunderouskick',
  Thunderpunch = 'thunderpunch',
  Thundershock = 'thundershock',
  Thunderwave = 'thunderwave',
  Thunderbolt = 'thunderbolt',
  Tickle = 'tickle',
  Topsyturvy = 'topsyturvy',
  Torment = 'torment',
  Toxic = 'toxic',
  Toxicspikes = 'toxicspikes',
  Toxicthread = 'toxicthread',
  Transform = 'transform',
  Triattack = 'triattack',
  Trick = 'trick',
  Trickroom = 'trickroom',
  Trickortreat = 'trickortreat',
  Tripleaxel = 'tripleaxel',
  Triplekick = 'triplekick',
  Tropkick = 'tropkick',
  Trumpcard = 'trumpcard',
  Twineedle = 'twineedle',
  Twinkletackle = 'twinkletackle',
  Twister = 'twister',
  Uturn = 'uturn',
  Uproar = 'uproar',
  Vcreate = 'vcreate',
  Vacuumwave = 'vacuumwave',
  Veeveevolley = 'veeveevolley',
  Venomdrench = 'venomdrench',
  Venoshock = 'venoshock',
  Vinewhip = 'vinewhip',
  Visegrip = 'visegrip',
  Vitalthrow = 'vitalthrow',
  Voltswitch = 'voltswitch',
  Volttackle = 'volttackle',
  Wakeupslap = 'wakeupslap',
  Watergun = 'watergun',
  Waterpledge = 'waterpledge',
  Waterpulse = 'waterpulse',
  Watershuriken = 'watershuriken',
  Watersport = 'watersport',
  Waterspout = 'waterspout',
  Waterfall = 'waterfall',
  Weatherball = 'weatherball',
  Whirlpool = 'whirlpool',
  Whirlwind = 'whirlwind',
  Wickedblow = 'wickedblow',
  Wideguard = 'wideguard',
  Wildcharge = 'wildcharge',
  Willowisp = 'willowisp',
  Wingattack = 'wingattack',
  Wish = 'wish',
  Withdraw = 'withdraw',
  Wonderroom = 'wonderroom',
  Woodhammer = 'woodhammer',
  Workup = 'workup',
  Worryseed = 'worryseed',
  Wrap = 'wrap',
  Wringout = 'wringout',
  Xscissor = 'xscissor',
  Yawn = 'yawn',
  Zapcannon = 'zapcannon',
  Zenheadbutt = 'zenheadbutt',
  Zingzap = 'zingzap',
  Zippyzap = 'zippyzap'
}
/** The supported Pokémon */
export declare const enum Pokemon {
  Syclar = 'syclar',
  Syclant = 'syclant',
  Revenankh = 'revenankh',
  Embirch = 'embirch',
  Flarelm = 'flarelm',
  Pyroak = 'pyroak',
  Breezi = 'breezi',
  Fidgit = 'fidgit',
  Rebble = 'rebble',
  Tactite = 'tactite',
  Stratagem = 'stratagem',
  Privatyke = 'privatyke',
  Arghonaut = 'arghonaut',
  Kitsunoh = 'kitsunoh',
  Cyclohm = 'cyclohm',
  Colossoil = 'colossoil',
  Krilowatt = 'krilowatt',
  Voodoll = 'voodoll',
  Voodoom = 'voodoom',
  Scratchet = 'scratchet',
  Tomohawk = 'tomohawk',
  Necturine = 'necturine',
  Necturna = 'necturna',
  Mollux = 'mollux',
  Cupra = 'cupra',
  Argalis = 'argalis',
  Aurumoth = 'aurumoth',
  Brattler = 'brattler',
  Malaconda = 'malaconda',
  Cawdet = 'cawdet',
  Cawmodore = 'cawmodore',
  Volkritter = 'volkritter',
  Volkraken = 'volkraken',
  Snugglow = 'snugglow',
  Plasmanta = 'plasmanta',
  Floatoy = 'floatoy',
  Caimanoe = 'caimanoe',
  Naviathan = 'naviathan',
  Crucibelle = 'crucibelle',
  Crucibellemega = 'crucibellemega',
  Pluffle = 'pluffle',
  Kerfluffle = 'kerfluffle',
  Pajantom = 'pajantom',
  Mumbao = 'mumbao',
  Jumbao = 'jumbao',
  Fawnifer = 'fawnifer',
  Electrelk = 'electrelk',
  Caribolt = 'caribolt',
  Smogecko = 'smogecko',
  Smoguana = 'smoguana',
  Smokomodo = 'smokomodo',
  Swirlpool = 'swirlpool',
  Coribalis = 'coribalis',
  Snaelstrom = 'snaelstrom',
  Justyke = 'justyke',
  Equilibra = 'equilibra',
  Solotl = 'solotl',
  Astrolotl = 'astrolotl',
  Miasmite = 'miasmite',
  Miasmaw = 'miasmaw',
  Chromera = 'chromera',
  Missingno = 'missingno',
  Bulbasaur = 'bulbasaur',
  Ivysaur = 'ivysaur',
  Venusaur = 'venusaur',
  Venusaurgmax = 'venusaurgmax',
  Venusaurmega = 'venusaurmega',
  Charmander = 'charmander',
  Charmeleon = 'charmeleon',
  Charizard = 'charizard',
  Charizardmegax = 'charizardmegax',
  Charizardmegay = 'charizardmegay',
  Charizardgmax = 'charizardgmax',
  Squirtle = 'squirtle',
  Wartortle = 'wartortle',
  Blastoise = 'blastoise',
  Blastoisegmax = 'blastoisegmax',
  Blastoisemega = 'blastoisemega',
  Caterpie = 'caterpie',
  Metapod = 'metapod',
  Butterfree = 'butterfree',
  Butterfreegmax = 'butterfreegmax',
  Weedle = 'weedle',
  Kakuna = 'kakuna',
  Beedrill = 'beedrill',
  Beedrillmega = 'beedrillmega',
  Pidgey = 'pidgey',
  Pidgeotto = 'pidgeotto',
  Pidgeot = 'pidgeot',
  Pidgeotmega = 'pidgeotmega',
  Rattata = 'rattata',
  Rattataalola = 'rattataalola',
  Raticate = 'raticate',
  Raticatealola = 'raticatealola',
  Raticatealolatotem = 'raticatealolatotem',
  Spearow = 'spearow',
  Fearow = 'fearow',
  Ekans = 'ekans',
  Arbok = 'arbok',
  Pikachu = 'pikachu',
  Pikachugmax = 'pikachugmax',
  Pikachucosplay = 'pikachucosplay',
  Pikachurockstar = 'pikachurockstar',
  Pikachubelle = 'pikachubelle',
  Pikachupopstar = 'pikachupopstar',
  Pikachuphd = 'pikachuphd',
  Pikachulibre = 'pikachulibre',
  Pikachuoriginal = 'pikachuoriginal',
  Pikachuhoenn = 'pikachuhoenn',
  Pikachusinnoh = 'pikachusinnoh',
  Pikachuunova = 'pikachuunova',
  Pikachukalos = 'pikachukalos',
  Pikachualola = 'pikachualola',
  Pikachupartner = 'pikachupartner',
  Pikachustarter = 'pikachustarter',
  Pikachuworld = 'pikachuworld',
  Raichu = 'raichu',
  Raichualola = 'raichualola',
  Sandshrew = 'sandshrew',
  Sandshrewalola = 'sandshrewalola',
  Sandslash = 'sandslash',
  Sandslashalola = 'sandslashalola',
  Nidoranf = 'nidoranf',
  Nidorina = 'nidorina',
  Nidoqueen = 'nidoqueen',
  Nidoranm = 'nidoranm',
  Nidorino = 'nidorino',
  Nidoking = 'nidoking',
  Clefairy = 'clefairy',
  Clefable = 'clefable',
  Vulpix = 'vulpix',
  Vulpixalola = 'vulpixalola',
  Ninetales = 'ninetales',
  Ninetalesalola = 'ninetalesalola',
  Jigglypuff = 'jigglypuff',
  Wigglytuff = 'wigglytuff',
  Zubat = 'zubat',
  Golbat = 'golbat',
  Oddish = 'oddish',
  Gloom = 'gloom',
  Vileplume = 'vileplume',
  Paras = 'paras',
  Parasect = 'parasect',
  Venonat = 'venonat',
  Venomoth = 'venomoth',
  Diglett = 'diglett',
  Diglettalola = 'diglettalola',
  Dugtrio = 'dugtrio',
  Dugtrioalola = 'dugtrioalola',
  Meowth = 'meowth',
  Meowthalola = 'meowthalola',
  Meowthgalar = 'meowthgalar',
  Meowthgmax = 'meowthgmax',
  Persian = 'persian',
  Persianalola = 'persianalola',
  Psyduck = 'psyduck',
  Golduck = 'golduck',
  Mankey = 'mankey',
  Primeape = 'primeape',
  Growlithe = 'growlithe',
  Arcanine = 'arcanine',
  Poliwag = 'poliwag',
  Poliwhirl = 'poliwhirl',
  Poliwrath = 'poliwrath',
  Abra = 'abra',
  Kadabra = 'kadabra',
  Alakazam = 'alakazam',
  Alakazammega = 'alakazammega',
  Machop = 'machop',
  Machoke = 'machoke',
  Machamp = 'machamp',
  Machampgmax = 'machampgmax',
  Bellsprout = 'bellsprout',
  Weepinbell = 'weepinbell',
  Victreebel = 'victreebel',
  Tentacool = 'tentacool',
  Tentacruel = 'tentacruel',
  Geodude = 'geodude',
  Geodudealola = 'geodudealola',
  Graveler = 'graveler',
  Graveleralola = 'graveleralola',
  Golem = 'golem',
  Golemalola = 'golemalola',
  Ponyta = 'ponyta',
  Ponytagalar = 'ponytagalar',
  Rapidash = 'rapidash',
  Rapidashgalar = 'rapidashgalar',
  Slowpoke = 'slowpoke',
  Slowpokegalar = 'slowpokegalar',
  Slowbro = 'slowbro',
  Slowbrogalar = 'slowbrogalar',
  Slowbromega = 'slowbromega',
  Magnemite = 'magnemite',
  Magneton = 'magneton',
  Farfetchd = 'farfetchd',
  Farfetchdgalar = 'farfetchdgalar',
  Doduo = 'doduo',
  Dodrio = 'dodrio',
  Seel = 'seel',
  Dewgong = 'dewgong',
  Grimer = 'grimer',
  Grimeralola = 'grimeralola',
  Muk = 'muk',
  Mukalola = 'mukalola',
  Shellder = 'shellder',
  Cloyster = 'cloyster',
  Gastly = 'gastly',
  Haunter = 'haunter',
  Gengar = 'gengar',
  Gengarmega = 'gengarmega',
  Gengarmax = 'gengarmax',
  Onix = 'onix',
  Drowzee = 'drowzee',
  Hypno = 'hypno',
  Krabby = 'krabby',
  Kingler = 'kingler',
  Kinglergmax = 'kinglergmax',
  Voltorb = 'voltorb',
  Electrode = 'electrode',
  Exeggcute = 'exeggcute',
  Exeggutor = 'exeggutor',
  Exeggutoralola = 'exeggutoralola',
  Cubone = 'cubone',
  Marowak = 'marowak',
  Marowakalola = 'marowakalola',
  Marowakalolatotem = 'marowakalolatotem',
  Hitmonlee = 'hitmonlee',
  Hitmonchan = 'hitmonchan',
  Lickitung = 'lickitung',
  Koffing = 'koffing',
  Weezing = 'weezing',
  Weezinggalar = 'weezinggalar',
  Rhyhorn = 'rhyhorn',
  Rhydon = 'rhydon',
  Chansey = 'chansey',
  Tangela = 'tangela',
  Kangaskhan = 'kangaskhan',
  Kangaskhanmega = 'kangaskhanmega',
  Horsea = 'horsea',
  Seadra = 'seadra',
  Goldeen = 'goldeen',
  Seaking = 'seaking',
  Staryu = 'staryu',
  Starmie = 'starmie',
  Mrmime = 'mrmime',
  Mrmimegalar = 'mrmimegalar',
  Scyther = 'scyther',
  Jynx = 'jynx',
  Electabuzz = 'electabuzz',
  Magmar = 'magmar',
  Pinsir = 'pinsir',
  Pinsirmega = 'pinsirmega',
  Tauros = 'tauros',
  Magikarp = 'magikarp',
  Gyarados = 'gyarados',
  Gyaradosmega = 'gyaradosmega',
  Lapras = 'lapras',
  Laprasgmax = 'laprasgmax',
  Ditto = 'ditto',
  Eevee = 'eevee',
  Eeveestarter = 'eeveestarter',
  Eeveegmax = 'eeveegmax',
  Vaporeon = 'vaporeon',
  Jolteon = 'jolteon',
  Flareon = 'flareon',
  Porygon = 'porygon',
  Omanyte = 'omanyte',
  Omastar = 'omastar',
  Kabuto = 'kabuto',
  Kabutops = 'kabutops',
  Aerodactyl = 'aerodactyl',
  Aerodactylmega = 'aerodactylmega',
  Snorlax = 'snorlax',
  Snorlaxgmax = 'snorlaxgmax',
  Articuno = 'articuno',
  Articunogalar = 'articunogalar',
  Zapdos = 'zapdos',
  Zapdosgalar = 'zapdosgalar',
  Moltres = 'moltres',
  Moltresgalar = 'moltresgalar',
  Dratini = 'dratini',
  Dragonair = 'dragonair',
  Dragonite = 'dragonite',
  Mewtwo = 'mewtwo',
  Mewtwomegax = 'mewtwomegax',
  Mewtwomegay = 'mewtwomegay',
  Mew = 'mew',
  Chikorita = 'chikorita',
  Bayleef = 'bayleef',
  Meganium = 'meganium',
  Cyndaquil = 'cyndaquil',
  Quilava = 'quilava',
  Typhlosion = 'typhlosion',
  Totodile = 'totodile',
  Croconaw = 'croconaw',
  Feraligatr = 'feraligatr',
  Sentret = 'sentret',
  Furret = 'furret',
  Hoothoot = 'hoothoot',
  Noctowl = 'noctowl',
  Ledyba = 'ledyba',
  Ledian = 'ledian',
  Spinarak = 'spinarak',
  Ariados = 'ariados',
  Crobat = 'crobat',
  Chinchou = 'chinchou',
  Lanturn = 'lanturn',
  Pichu = 'pichu',
  Pichuspikyeared = 'pichuspikyeared',
  Cleffa = 'cleffa',
  Igglybuff = 'igglybuff',
  Togepi = 'togepi',
  Togetic = 'togetic',
  Natu = 'natu',
  Xatu = 'xatu',
  Mareep = 'mareep',
  Flaaffy = 'flaaffy',
  Ampharos = 'ampharos',
  Ampharosmega = 'ampharosmega',
  Bellossom = 'bellossom',
  Marill = 'marill',
  Azumarill = 'azumarill',
  Sudowoodo = 'sudowoodo',
  Politoed = 'politoed',
  Hoppip = 'hoppip',
  Skiploom = 'skiploom',
  Jumpluff = 'jumpluff',
  Aipom = 'aipom',
  Sunkern = 'sunkern',
  Sunflora = 'sunflora',
  Yanma = 'yanma',
  Wooper = 'wooper',
  Quagsire = 'quagsire',
  Espeon = 'espeon',
  Umbreon = 'umbreon',
  Murkrow = 'murkrow',
  Slowking = 'slowking',
  Slowkinggalar = 'slowkinggalar',
  Misdreavus = 'misdreavus',
  Unown = 'unown',
  Wobbuffet = 'wobbuffet',
  Girafarig = 'girafarig',
  Pineco = 'pineco',
  Forretress = 'forretress',
  Dunsparce = 'dunsparce',
  Gligar = 'gligar',
  Steelix = 'steelix',
  Steelixmega = 'steelixmega',
  Snubbull = 'snubbull',
  Granbull = 'granbull',
  Qwilfish = 'qwilfish',
  Scizor = 'scizor',
  Scizormega = 'scizormega',
  Shuckle = 'shuckle',
  Heracross = 'heracross',
  Heracrossmega = 'heracrossmega',
  Sneasel = 'sneasel',
  Teddiursa = 'teddiursa',
  Ursaring = 'ursaring',
  Slugma = 'slugma',
  Magcargo = 'magcargo',
  Swinub = 'swinub',
  Piloswine = 'piloswine',
  Corsola = 'corsola',
  Corsolagalar = 'corsolagalar',
  Remoraid = 'remoraid',
  Octillery = 'octillery',
  Delibird = 'delibird',
  Mantine = 'mantine',
  Skarmory = 'skarmory',
  Houndour = 'houndour',
  Houndoom = 'houndoom',
  Houndoommega = 'houndoommega',
  Kingdra = 'kingdra',
  Phanpy = 'phanpy',
  Donphan = 'donphan',
  Porygon2 = 'porygon2',
  Stantler = 'stantler',
  Smeargle = 'smeargle',
  Tyrogue = 'tyrogue',
  Hitmontop = 'hitmontop',
  Smoochum = 'smoochum',
  Elekid = 'elekid',
  Magby = 'magby',
  Miltank = 'miltank',
  Blissey = 'blissey',
  Raikou = 'raikou',
  Entei = 'entei',
  Suicune = 'suicune',
  Larvitar = 'larvitar',
  Pupitar = 'pupitar',
  Tyranitar = 'tyranitar',
  Tyranitarmega = 'tyranitarmega',
  Lugia = 'lugia',
  Hooh = 'hooh',
  Celebi = 'celebi',
  Treecko = 'treecko',
  Grovyle = 'grovyle',
  Sceptile = 'sceptile',
  Sceptilemega = 'sceptilemega',
  Torchic = 'torchic',
  Combusken = 'combusken',
  Blaziken = 'blaziken',
  Blazikenmega = 'blazikenmega',
  Mudkip = 'mudkip',
  Marshtomp = 'marshtomp',
  Swampert = 'swampert',
  Swampertmega = 'swampertmega',
  Poochyena = 'poochyena',
  Mightyena = 'mightyena',
  Zigzagoon = 'zigzagoon',
  Zigzagoongalar = 'zigzagoongalar',
  Linoone = 'linoone',
  Linoonegalar = 'linoonegalar',
  Wurmple = 'wurmple',
  Silcoon = 'silcoon',
  Beautifly = 'beautifly',
  Cascoon = 'cascoon',
  Dustox = 'dustox',
  Lotad = 'lotad',
  Lombre = 'lombre',
  Ludicolo = 'ludicolo',
  Seedot = 'seedot',
  Nuzleaf = 'nuzleaf',
  Shiftry = 'shiftry',
  Taillow = 'taillow',
  Swellow = 'swellow',
  Wingull = 'wingull',
  Pelipper = 'pelipper',
  Ralts = 'ralts',
  Kirlia = 'kirlia',
  Gardevoir = 'gardevoir',
  Gardevoirmega = 'gardevoirmega',
  Surskit = 'surskit',
  Masquerain = 'masquerain',
  Shroomish = 'shroomish',
  Breloom = 'breloom',
  Slakoth = 'slakoth',
  Vigoroth = 'vigoroth',
  Slaking = 'slaking',
  Nincada = 'nincada',
  Ninjask = 'ninjask',
  Shedinja = 'shedinja',
  Whismur = 'whismur',
  Loudred = 'loudred',
  Exploud = 'exploud',
  Makuhita = 'makuhita',
  Hariyama = 'hariyama',
  Azurill = 'azurill',
  Nosepass = 'nosepass',
  Skitty = 'skitty',
  Delcatty = 'delcatty',
  Sableye = 'sableye',
  Sableyemega = 'sableyemega',
  Mawile = 'mawile',
  Mawilemega = 'mawilemega',
  Aron = 'aron',
  Lairon = 'lairon',
  Aggron = 'aggron',
  Aggronmega = 'aggronmega',
  Meditite = 'meditite',
  Medicham = 'medicham',
  Medichammega = 'medichammega',
  Electrike = 'electrike',
  Manectric = 'manectric',
  Manectricmega = 'manectricmega',
  Plusle = 'plusle',
  Minun = 'minun',
  Volbeat = 'volbeat',
  Illumise = 'illumise',
  Roselia = 'roselia',
  Gulpin = 'gulpin',
  Swalot = 'swalot',
  Carvanha = 'carvanha',
  Sharpedo = 'sharpedo',
  Sharpedomega = 'sharpedomega',
  Wailmer = 'wailmer',
  Wailord = 'wailord',
  Numel = 'numel',
  Camerupt = 'camerupt',
  Cameruptmega = 'cameruptmega',
  Torkoal = 'torkoal',
  Spoink = 'spoink',
  Grumpig = 'grumpig',
  Spinda = 'spinda',
  Trapinch = 'trapinch',
  Vibrava = 'vibrava',
  Flygon = 'flygon',
  Cacnea = 'cacnea',
  Cacturne = 'cacturne',
  Swablu = 'swablu',
  Altaria = 'altaria',
  Altariamega = 'altariamega',
  Zangoose = 'zangoose',
  Seviper = 'seviper',
  Lunatone = 'lunatone',
  Solrock = 'solrock',
  Barboach = 'barboach',
  Whiscash = 'whiscash',
  Corphish = 'corphish',
  Crawdaunt = 'crawdaunt',
  Baltoy = 'baltoy',
  Claydol = 'claydol',
  Lileep = 'lileep',
  Cradily = 'cradily',
  Anorith = 'anorith',
  Armaldo = 'armaldo',
  Feebas = 'feebas',
  Milotic = 'milotic',
  Castform = 'castform',
  Castformsunny = 'castformsunny',
  Castformrainy = 'castformrainy',
  Castformsnowy = 'castformsnowy',
  Kecleon = 'kecleon',
  Shuppet = 'shuppet',
  Banette = 'banette',
  Banettemega = 'banettemega',
  Duskull = 'duskull',
  Dusclops = 'dusclops',
  Tropius = 'tropius',
  Chimecho = 'chimecho',
  Absol = 'absol',
  Absolmega = 'absolmega',
  Wynaut = 'wynaut',
  Snorunt = 'snorunt',
  Glalie = 'glalie',
  Glaliemega = 'glaliemega',
  Spheal = 'spheal',
  Sealeo = 'sealeo',
  Walrein = 'walrein',
  Clamperl = 'clamperl',
  Huntail = 'huntail',
  Gorebyss = 'gorebyss',
  Relicanth = 'relicanth',
  Luvdisc = 'luvdisc',
  Bagon = 'bagon',
  Shelgon = 'shelgon',
  Salamence = 'salamence',
  Salamencemega = 'salamencemega',
  Beldum = 'beldum',
  Metang = 'metang',
  Metagross = 'metagross',
  Metagrossmega = 'metagrossmega',
  Regirock = 'regirock',
  Regice = 'regice',
  Registeel = 'registeel',
  Latias = 'latias',
  Latiasmega = 'latiasmega',
  Latios = 'latios',
  Latiosmega = 'latiosmega',
  Kyogre = 'kyogre',
  Kyogreprimal = 'kyogreprimal',
  Groudon = 'groudon',
  Groudonprimal = 'groudonprimal',
  Rayquaza = 'rayquaza',
  Rayquazamega = 'rayquazamega',
  Jirachi = 'jirachi',
  Deoxys = 'deoxys',
  Deoxysattack = 'deoxysattack',
  Deoxysdefense = 'deoxysdefense',
  Deoxysspeed = 'deoxysspeed',
  Turtwig = 'turtwig',
  Grotle = 'grotle',
  Torterra = 'torterra',
  Chimchar = 'chimchar',
  Monferno = 'monferno',
  Infernape = 'infernape',
  Piplup = 'piplup',
  Prinplup = 'prinplup',
  Empoleon = 'empoleon',
  Starly = 'starly',
  Staravia = 'staravia',
  Staraptor = 'staraptor',
  Bidoof = 'bidoof',
  Bibarel = 'bibarel',
  Kricketot = 'kricketot',
  Kricketune = 'kricketune',
  Shinx = 'shinx',
  Luxio = 'luxio',
  Luxray = 'luxray',
  Budew = 'budew',
  Roserade = 'roserade',
  Cranidos = 'cranidos',
  Rampardos = 'rampardos',
  Shieldon = 'shieldon',
  Bastiodon = 'bastiodon',
  Burmy = 'burmy',
  Wormadam = 'wormadam',
  Wormadamsandy = 'wormadamsandy',
  Wormadamtrash = 'wormadamtrash',
  Mothim = 'mothim',
  Combee = 'combee',
  Vespiquen = 'vespiquen',
  Pachirisu = 'pachirisu',
  Buizel = 'buizel',
  Floatzel = 'floatzel',
  Cherubi = 'cherubi',
  Cherrim = 'cherrim',
  Cherrimsunshine = 'cherrimsunshine',
  Shellos = 'shellos',
  Gastrodon = 'gastrodon',
  Ambipom = 'ambipom',
  Drifloon = 'drifloon',
  Drifblim = 'drifblim',
  Buneary = 'buneary',
  Lopunny = 'lopunny',
  Lopunnymega = 'lopunnymega',
  Mismagius = 'mismagius',
  Honchkrow = 'honchkrow',
  Glameow = 'glameow',
  Purugly = 'purugly',
  Chingling = 'chingling',
  Stunky = 'stunky',
  Skuntank = 'skuntank',
  Bronzor = 'bronzor',
  Bronzong = 'bronzong',
  Bonsly = 'bonsly',
  Mimejr = 'mimejr',
  Happiny = 'happiny',
  Chatot = 'chatot',
  Spiritomb = 'spiritomb',
  Gible = 'gible',
  Gabite = 'gabite',
  Garchomp = 'garchomp',
  Garchompmega = 'garchompmega',
  Munchlax = 'munchlax',
  Riolu = 'riolu',
  Lucario = 'lucario',
  Lucariomega = 'lucariomega',
  Hippopotas = 'hippopotas',
  Hippowdon = 'hippowdon',
  Skorupi = 'skorupi',
  Drapion = 'drapion',
  Croagunk = 'croagunk',
  Toxicroak = 'toxicroak',
  Carnivine = 'carnivine',
  Finneon = 'finneon',
  Lumineon = 'lumineon',
  Mantyke = 'mantyke',
  Snover = 'snover',
  Abomasnow = 'abomasnow',
  Abomasnowmega = 'abomasnowmega',
  Weavile = 'weavile',
  Magnezone = 'magnezone',
  Lickilicky = 'lickilicky',
  Rhyperior = 'rhyperior',
  Tangrowth = 'tangrowth',
  Electivire = 'electivire',
  Magmortar = 'magmortar',
  Togekiss = 'togekiss',
  Yanmega = 'yanmega',
  Leafeon = 'leafeon',
  Glaceon = 'glaceon',
  Gliscor = 'gliscor',
  Mamoswine = 'mamoswine',
  Porygonz = 'porygonz',
  Gallade = 'gallade',
  Gallademega = 'gallademega',
  Probopass = 'probopass',
  Dusknoir = 'dusknoir',
  Froslass = 'froslass',
  Rotom = 'rotom',
  Rotomheat = 'rotomheat',
  Rotomwash = 'rotomwash',
  Rotomfrost = 'rotomfrost',
  Rotomfan = 'rotomfan',
  Rotommow = 'rotommow',
  Uxie = 'uxie',
  Mesprit = 'mesprit',
  Azelf = 'azelf',
  Dialga = 'dialga',
  Palkia = 'palkia',
  Heatran = 'heatran',
  Regigigas = 'regigigas',
  Giratina = 'giratina',
  Giratinaorigin = 'giratinaorigin',
  Cresselia = 'cresselia',
  Phione = 'phione',
  Manaphy = 'manaphy',
  Darkrai = 'darkrai',
  Shaymin = 'shaymin',
  Shayminsky = 'shayminsky',
  Arceus = 'arceus',
  Arceusbug = 'arceusbug',
  Arceusdark = 'arceusdark',
  Arceusdragon = 'arceusdragon',
  Arceuselectric = 'arceuselectric',
  Arceusfairy = 'arceusfairy',
  Arceusfighting = 'arceusfighting',
  Arceusfire = 'arceusfire',
  Arceusflying = 'arceusflying',
  Arceusghost = 'arceusghost',
  Arceusgrass = 'arceusgrass',
  Arceusground = 'arceusground',
  Arceusice = 'arceusice',
  Arceuspoison = 'arceuspoison',
  Arceuspsychic = 'arceuspsychic',
  Arceusrock = 'arceusrock',
  Arceussteel = 'arceussteel',
  Arceuswater = 'arceuswater',
  Victini = 'victini',
  Snivy = 'snivy',
  Servine = 'servine',
  Serperior = 'serperior',
  Tepig = 'tepig',
  Pignite = 'pignite',
  Emboar = 'emboar',
  Oshawott = 'oshawott',
  Dewott = 'dewott',
  Samurott = 'samurott',
  Patrat = 'patrat',
  Watchog = 'watchog',
  Lillipup = 'lillipup',
  Herdier = 'herdier',
  Stoutland = 'stoutland',
  Purrloin = 'purrloin',
  Liepard = 'liepard',
  Pansage = 'pansage',
  Simisage = 'simisage',
  Pansear = 'pansear',
  Simisear = 'simisear',
  Panpour = 'panpour',
  Simipour = 'simipour',
  Munna = 'munna',
  Musharna = 'musharna',
  Pidove = 'pidove',
  Tranquill = 'tranquill',
  Unfezant = 'unfezant',
  Blitzle = 'blitzle',
  Zebstrika = 'zebstrika',
  Roggenrola = 'roggenrola',
  Boldore = 'boldore',
  Gigalith = 'gigalith',
  Woobat = 'woobat',
  Swoobat = 'swoobat',
  Drilbur = 'drilbur',
  Excadrill = 'excadrill',
  Audino = 'audino',
  Audinomega = 'audinomega',
  Timburr = 'timburr',
  Gurdurr = 'gurdurr',
  Conkeldurr = 'conkeldurr',
  Tympole = 'tympole',
  Palpitoad = 'palpitoad',
  Seismitoad = 'seismitoad',
  Throh = 'throh',
  Sawk = 'sawk',
  Sewaddle = 'sewaddle',
  Swadloon = 'swadloon',
  Leavanny = 'leavanny',
  Venipede = 'venipede',
  Whirlipede = 'whirlipede',
  Scolipede = 'scolipede',
  Cottonee = 'cottonee',
  Whimsicott = 'whimsicott',
  Petilil = 'petilil',
  Lilligant = 'lilligant',
  Basculin = 'basculin',
  Basculinbluestriped = 'basculinbluestriped',
  Sandile = 'sandile',
  Krokorok = 'krokorok',
  Krookodile = 'krookodile',
  Darumaka = 'darumaka',
  Darumakagalar = 'darumakagalar',
  Darmanitan = 'darmanitan',
  Darmanitangalar = 'darmanitangalar',
  Darmanitanzen = 'darmanitanzen',
  Darmanitangalarzen = 'darmanitangalarzen',
  Maractus = 'maractus',
  Dwebble = 'dwebble',
  Crustle = 'crustle',
  Scraggy = 'scraggy',
  Scrafty = 'scrafty',
  Sigilyph = 'sigilyph',
  Yamask = 'yamask',
  Yamaskgalar = 'yamaskgalar',
  Cofagrigus = 'cofagrigus',
  Tirtouga = 'tirtouga',
  Carracosta = 'carracosta',
  Archen = 'archen',
  Archeops = 'archeops',
  Trubbish = 'trubbish',
  Garbodor = 'garbodor',
  Garbodorgmax = 'garbodorgmax',
  Zorua = 'zorua',
  Zoroark = 'zoroark',
  Minccino = 'minccino',
  Cinccino = 'cinccino',
  Gothita = 'gothita',
  Gothorita = 'gothorita',
  Gothitelle = 'gothitelle',
  Solosis = 'solosis',
  Duosion = 'duosion',
  Reuniclus = 'reuniclus',
  Ducklett = 'ducklett',
  Swanna = 'swanna',
  Vanillite = 'vanillite',
  Vanillish = 'vanillish',
  Vanilluxe = 'vanilluxe',
  Deerling = 'deerling',
  Sawsbuck = 'sawsbuck',
  Emolga = 'emolga',
  Karrablast = 'karrablast',
  Escavalier = 'escavalier',
  Foongus = 'foongus',
  Amoonguss = 'amoonguss',
  Frillish = 'frillish',
  Frillishfemale = 'frillishfemale',
  Jellicent = 'jellicent',
  Jellicentfemale = 'jellicentfemale',
  Alomomola = 'alomomola',
  Joltik = 'joltik',
  Galvantula = 'galvantula',
  Ferroseed = 'ferroseed',
  Ferrothorn = 'ferrothorn',
  Klink = 'klink',
  Klang = 'klang',
  Klinklang = 'klinklang',
  Tynamo = 'tynamo',
  Eelektrik = 'eelektrik',
  Eelektross = 'eelektross',
  Elgyem = 'elgyem',
  Beheeyem = 'beheeyem',
  Litwick = 'litwick',
  Lampent = 'lampent',
  Chandelure = 'chandelure',
  Axew = 'axew',
  Fraxure = 'fraxure',
  Haxorus = 'haxorus',
  Cubchoo = 'cubchoo',
  Beartic = 'beartic',
  Cryogonal = 'cryogonal',
  Shelmet = 'shelmet',
  Accelgor = 'accelgor',
  Stunfisk = 'stunfisk',
  Stunfiskgalar = 'stunfiskgalar',
  Mienfoo = 'mienfoo',
  Mienshao = 'mienshao',
  Druddigon = 'druddigon',
  Golett = 'golett',
  Golurk = 'golurk',
  Pawniard = 'pawniard',
  Bisharp = 'bisharp',
  Bouffalant = 'bouffalant',
  Rufflet = 'rufflet',
  Braviary = 'braviary',
  Vullaby = 'vullaby',
  Mandibuzz = 'mandibuzz',
  Heatmor = 'heatmor',
  Durant = 'durant',
  Deino = 'deino',
  Zweilous = 'zweilous',
  Hydreigon = 'hydreigon',
  Larvesta = 'larvesta',
  Volcarona = 'volcarona',
  Cobalion = 'cobalion',
  Terrakion = 'terrakion',
  Virizion = 'virizion',
  Tornadus = 'tornadus',
  Tornadustherian = 'tornadustherian',
  Thundurus = 'thundurus',
  Thundurustherian = 'thundurustherian',
  Reshiram = 'reshiram',
  Zekrom = 'zekrom',
  Landorus = 'landorus',
  Landorustherian = 'landorustherian',
  Kyurem = 'kyurem',
  Kyuremblack = 'kyuremblack',
  Kyuremwhite = 'kyuremwhite',
  Keldeo = 'keldeo',
  Keldeoresolute = 'keldeoresolute',
  Meloetta = 'meloetta',
  Meloettapirouette = 'meloettapirouette',
  Genesect = 'genesect',
  Genesectdouse = 'genesectdouse',
  Genesectshock = 'genesectshock',
  Genesectburn = 'genesectburn',
  Genesectchill = 'genesectchill',
  Chespin = 'chespin',
  Quilladin = 'quilladin',
  Chesnaught = 'chesnaught',
  Fennekin = 'fennekin',
  Braixen = 'braixen',
  Delphox = 'delphox',
  Froakie = 'froakie',
  Frogadier = 'frogadier',
  Greninja = 'greninja',
  Greninjaash = 'greninjaash',
  Bunnelby = 'bunnelby',
  Diggersby = 'diggersby',
  Fletchling = 'fletchling',
  Fletchinder = 'fletchinder',
  Talonflame = 'talonflame',
  Scatterbug = 'scatterbug',
  Spewpa = 'spewpa',
  Vivillon = 'vivillon',
  Vivillonfancy = 'vivillonfancy',
  Vivillonpokeball = 'vivillonpokeball',
  Litleo = 'litleo',
  Pyroar = 'pyroar',
  Flabebe = 'flabebe',
  Floette = 'floette',
  Floetteeternal = 'floetteeternal',
  Florges = 'florges',
  Skiddo = 'skiddo',
  Gogoat = 'gogoat',
  Pancham = 'pancham',
  Pangoro = 'pangoro',
  Furfrou = 'furfrou',
  Espurr = 'espurr',
  Meowstic = 'meowstic',
  Meowsticf = 'meowsticf',
  Honedge = 'honedge',
  Doublade = 'doublade',
  Aegislash = 'aegislash',
  Aegislashblade = 'aegislashblade',
  Spritzee = 'spritzee',
  Aromatisse = 'aromatisse',
  Swirlix = 'swirlix',
  Slurpuff = 'slurpuff',
  Inkay = 'inkay',
  Malamar = 'malamar',
  Binacle = 'binacle',
  Barbaracle = 'barbaracle',
  Skrelp = 'skrelp',
  Dragalge = 'dragalge',
  Clauncher = 'clauncher',
  Clawitzer = 'clawitzer',
  Helioptile = 'helioptile',
  Heliolisk = 'heliolisk',
  Tyrunt = 'tyrunt',
  Tyrantrum = 'tyrantrum',
  Amaura = 'amaura',
  Aurorus = 'aurorus',
  Sylveon = 'sylveon',
  Hawlucha = 'hawlucha',
  Dedenne = 'dedenne',
  Carbink = 'carbink',
  Goomy = 'goomy',
  Sliggoo = 'sliggoo',
  Goodra = 'goodra',
  Klefki = 'klefki',
  Phantump = 'phantump',
  Trevenant = 'trevenant',
  Pumpkaboo = 'pumpkaboo',
  Pumpkaboosmall = 'pumpkaboosmall',
  Pumpkaboolarge = 'pumpkaboolarge',
  Pumpkaboosuper = 'pumpkaboosuper',
  Gourgeist = 'gourgeist',
  Gourgeistsmall = 'gourgeistsmall',
  Gourgeistlarge = 'gourgeistlarge',
  Gourgeistsuper = 'gourgeistsuper',
  Bergmite = 'bergmite',
  Avalugg = 'avalugg',
  Noibat = 'noibat',
  Noivern = 'noivern',
  Xerneas = 'xerneas',
  Xerneasneutral = 'xerneasneutral',
  Yveltal = 'yveltal',
  Zygarde = 'zygarde',
  Zygarde10 = 'zygarde10',
  Zygardecomplete = 'zygardecomplete',
  Diancie = 'diancie',
  Dianciemega = 'dianciemega',
  Hoopa = 'hoopa',
  Hoopaunbound = 'hoopaunbound',
  Volcanion = 'volcanion',
  Rowlet = 'rowlet',
  Dartrix = 'dartrix',
  Decidueye = 'decidueye',
  Litten = 'litten',
  Torracat = 'torracat',
  Incineroar = 'incineroar',
  Popplio = 'popplio',
  Brionne = 'brionne',
  Primarina = 'primarina',
  Pikipek = 'pikipek',
  Trumbeak = 'trumbeak',
  Toucannon = 'toucannon',
  Yungoos = 'yungoos',
  Gumshoos = 'gumshoos',
  Gumshoostotem = 'gumshoostotem',
  Grubbin = 'grubbin',
  Charjabug = 'charjabug',
  Vikavolt = 'vikavolt',
  Vikavolttotem = 'vikavolttotem',
  Crabrawler = 'crabrawler',
  Crabominable = 'crabominable',
  Oricorio = 'oricorio',
  Oricoriopompom = 'oricoriopompom',
  Oricoriopau = 'oricoriopau',
  Oricoriosensu = 'oricoriosensu',
  Cutiefly = 'cutiefly',
  Ribombee = 'ribombee',
  Ribombeetotem = 'ribombeetotem',
  Rockruff = 'rockruff',
  Lycanroc = 'lycanroc',
  Lycanrocmidnight = 'lycanrocmidnight',
  Lycanrocdusk = 'lycanrocdusk',
  Wishiwashi = 'wishiwashi',
  Wishiwashischool = 'wishiwashischool',
  Mareanie = 'mareanie',
  Toxapex = 'toxapex',
  Mudbray = 'mudbray',
  Mudsdale = 'mudsdale',
  Dewpider = 'dewpider',
  Araquanid = 'araquanid',
  Araquanidtotem = 'araquanidtotem',
  Fomantis = 'fomantis',
  Lurantis = 'lurantis',
  Lurantistotem = 'lurantistotem',
  Morelull = 'morelull',
  Shiinotic = 'shiinotic',
  Salandit = 'salandit',
  Salazzle = 'salazzle',
  Salazzletotem = 'salazzletotem',
  Stufful = 'stufful',
  Bewear = 'bewear',
  Bounsweet = 'bounsweet',
  Steenee = 'steenee',
  Tsareena = 'tsareena',
  Comfey = 'comfey',
  Oranguru = 'oranguru',
  Passimian = 'passimian',
  Wimpod = 'wimpod',
  Golisopod = 'golisopod',
  Sandygast = 'sandygast',
  Palossand = 'palossand',
  Pyukumuku = 'pyukumuku',
  Typenull = 'typenull',
  Silvally = 'silvally',
  Silvallybug = 'silvallybug',
  Silvallydark = 'silvallydark',
  Silvallydragon = 'silvallydragon',
  Silvallyelectric = 'silvallyelectric',
  Silvallyfairy = 'silvallyfairy',
  Silvallyfighting = 'silvallyfighting',
  Silvallyfire = 'silvallyfire',
  Silvallyflying = 'silvallyflying',
  Silvallyghost = 'silvallyghost',
  Silvallygrass = 'silvallygrass',
  Silvallyground = 'silvallyground',
  Silvallyice = 'silvallyice',
  Silvallypoison = 'silvallypoison',
  Silvallypsychic = 'silvallypsychic',
  Silvallyrock = 'silvallyrock',
  Silvallysteel = 'silvallysteel',
  Silvallywater = 'silvallywater',
  Minior = 'minior',
  Miniormeteor = 'miniormeteor',
  Komala = 'komala',
  Turtonator = 'turtonator',
  Togedemaru = 'togedemaru',
  Togedemarutotem = 'togedemarutotem',
  Mimikyu = 'mimikyu',
  Mimikyubusted = 'mimikyubusted',
  Mimikyutotem = 'mimikyutotem',
  Mimikyubustedtotem = 'mimikyubustedtotem',
  Bruxish = 'bruxish',
  Drampa = 'drampa',
  Dhelmise = 'dhelmise',
  Jangmoo = 'jangmoo',
  Hakamoo = 'hakamoo',
  Kommoo = 'kommoo',
  Kommoototem = 'kommoototem',
  Tapukoko = 'tapukoko',
  Tapulele = 'tapulele',
  Tapubulu = 'tapubulu',
  Tapufini = 'tapufini',
  Cosmog = 'cosmog',
  Cosmoem = 'cosmoem',
  Solgaleo = 'solgaleo',
  Lunala = 'lunala',
  Nihilego = 'nihilego',
  Buzzwole = 'buzzwole',
  Pheromosa = 'pheromosa',
  Xurkitree = 'xurkitree',
  Celesteela = 'celesteela',
  Kartana = 'kartana',
  Guzzlord = 'guzzlord',
  Necrozma = 'necrozma',
  Necrozmaduskmane = 'necrozmaduskmane',
  Necrozmadawnwings = 'necrozmadawnwings',
  Necrozmaultra = 'necrozmaultra',
  Magearna = 'magearna',
  Magearnaoriginal = 'magearnaoriginal',
  Marshadow = 'marshadow',
  Poipole = 'poipole',
  Naganadel = 'naganadel',
  Stakataka = 'stakataka',
  Blacephalon = 'blacephalon',
  Zeraora = 'zeraora',
  Meltan = 'meltan',
  Melmetal = 'melmetal',
  Melmetalgmax = 'melmetalgmax',
  Grookey = 'grookey',
  Thwackey = 'thwackey',
  Rillaboom = 'rillaboom',
  Rillaboomgmax = 'rillaboomgmax',
  Scorbunny = 'scorbunny',
  Raboot = 'raboot',
  Cinderace = 'cinderace',
  Cinderacegmax = 'cinderacegmax',
  Sobble = 'sobble',
  Drizzile = 'drizzile',
  Inteleon = 'inteleon',
  Inteleongmax = 'inteleongmax',
  Skwovet = 'skwovet',
  Greedent = 'greedent',
  Rookidee = 'rookidee',
  Corvisquire = 'corvisquire',
  Corviknight = 'corviknight',
  Corviknightgmax = 'corviknightgmax',
  Blipbug = 'blipbug',
  Dottler = 'dottler',
  Orbeetle = 'orbeetle',
  Orbeetlegmax = 'orbeetlegmax',
  Nickit = 'nickit',
  Thievul = 'thievul',
  Gossifleur = 'gossifleur',
  Eldegoss = 'eldegoss',
  Wooloo = 'wooloo',
  Dubwool = 'dubwool',
  Chewtle = 'chewtle',
  Drednaw = 'drednaw',
  Drednawgmax = 'drednawgmax',
  Yamper = 'yamper',
  Boltund = 'boltund',
  Rolycoly = 'rolycoly',
  Carkol = 'carkol',
  Coalossal = 'coalossal',
  Coalossalgmax = 'coalossalgmax',
  Applin = 'applin',
  Flapple = 'flapple',
  Flapplegmax = 'flapplegmax',
  Appletun = 'appletun',
  Appletungmax = 'appletungmax',
  Silicobra = 'silicobra',
  Sandaconda = 'sandaconda',
  Sandacondagmax = 'sandacondagmax',
  Cramorant = 'cramorant',
  Cramorantgulping = 'cramorantgulping',
  Cramorantgorging = 'cramorantgorging',
  Arrokuda = 'arrokuda',
  Barraskewda = 'barraskewda',
  Toxel = 'toxel',
  Toxtricity = 'toxtricity',
  Toxtricitylowkey = 'toxtricitylowkey',
  Toxtricitygmax = 'toxtricitygmax',
  Toxtricitylowkeygmax = 'toxtricitylowkeygmax',
  Sizzlipede = 'sizzlipede',
  Centiskorch = 'centiskorch',
  Centiskorchgmax = 'centiskorchgmax',
  Clobbopus = 'clobbopus',
  Grapploct = 'grapploct',
  Sinistea = 'sinistea',
  Sinisteaantique = 'sinisteaantique',
  Polteageist = 'polteageist',
  Polteageistantique = 'polteageistantique',
  Hatenna = 'hatenna',
  Hattrem = 'hattrem',
  Hatterene = 'hatterene',
  Hatterenegmax = 'hatterenegmax',
  Impidimp = 'impidimp',
  Morgrem = 'morgrem',
  Grimmsnarl = 'grimmsnarl',
  Grimmsnarlgmax = 'grimmsnarlgmax',
  Obstagoon = 'obstagoon',
  Perrserker = 'perrserker',
  Cursola = 'cursola',
  Sirfetchd = 'sirfetchd',
  Mrrime = 'mrrime',
  Runerigus = 'runerigus',
  Milcery = 'milcery',
  Alcremie = 'alcremie',
  Alcremiegmax = 'alcremiegmax',
  Falinks = 'falinks',
  Pincurchin = 'pincurchin',
  Snom = 'snom',
  Frosmoth = 'frosmoth',
  Stonjourner = 'stonjourner',
  Eiscue = 'eiscue',
  Eiscuenoice = 'eiscuenoice',
  Indeedee = 'indeedee',
  Indeedeef = 'indeedeef',
  Morpeko = 'morpeko',
  Morpekohangry = 'morpekohangry',
  Cufant = 'cufant',
  Copperajah = 'copperajah',
  Copperajahgmax = 'copperajahgmax',
  Dracozolt = 'dracozolt',
  Arctozolt = 'arctozolt',
  Dracovish = 'dracovish',
  Arctovish = 'arctovish',
  Duraludon = 'duraludon',
  Duraludongmax = 'duraludongmax',
  Dreepy = 'dreepy',
  Drakloak = 'drakloak',
  Dragapult = 'dragapult',
  Zacian = 'zacian',
  Zaciancrowned = 'zaciancrowned',
  Zamazenta = 'zamazenta',
  Zamazentacrowned = 'zamazentacrowned',
  Eternatus = 'eternatus',
  Eternatuseternamax = 'eternatuseternamax',
  Kubfu = 'kubfu',
  Urshifu = 'urshifu',
  Urshifurapidstrike = 'urshifurapidstrike',
  Urshifugmax = 'urshifugmax',
  Urshifurapidstrikegmax = 'urshifurapidstrikegmax',
  Zarude = 'zarude',
  Zarudedada = 'zarudedada',
  Regieleki = 'regieleki',
  Regidrago = 'regidrago',
  Glastrier = 'glastrier',
  Spectrier = 'spectrier',
  Calyrex = 'calyrex',
  Calyrexice = 'calyrexice',
  Calyrexshadow = 'calyrexshadow',
  Pokestarsmeargle = 'pokestarsmeargle',
  Pokestarufo = 'pokestarufo',
  Pokestarufo2 = 'pokestarufo2',
  Pokestarbrycenman = 'pokestarbrycenman',
  Pokestarmt = 'pokestarmt',
  Pokestarmt2 = 'pokestarmt2',
  Pokestartransport = 'pokestartransport',
  Pokestargiant = 'pokestargiant',
  Pokestarhumanoid = 'pokestarhumanoid',
  Pokestarmonster = 'pokestarmonster',
  Pokestarf00 = 'pokestarf00',
  Pokestarf002 = 'pokestarf002',
  Pokestarspirit = 'pokestarspirit',
  Pokestarblackdoor = 'pokestarblackdoor',
  Pokestarwhitedoor = 'pokestarwhitedoor',
  Pokestarblackbelt = 'pokestarblackbelt',
  Pokestarufopropu2 = 'pokestarufopropu2'
}
export declare type Query = {
  readonly __typename?: 'Query';
  /** Gets details on a single ability based on a fuzzy search.You can supply skip and take to paginate the fuzzy search and reverse to show the least likely matched on top.Reversal is applied before pagination! */
  readonly getAbilityDetailsByFuzzy: AbilityEntry;
  /** Gets details on a single ability based on an exact name match. */
  readonly getAbilityDetailsByName: AbilityEntry;
  /** Gets raw entries of multiple ability based on a fuzzy search.You can supply skip and take to limit the amount of flavour texts to return and reverse to show latest games on top.Reversal is applied before pagination! */
  readonly getAbilityByFuzzy: ReadonlyArray<Scalars['JSONObject']>;
  /** Gets the raw entry of a single ability by name. */
  readonly getAbilityByName: Scalars['JSONObject'];
  /**
   * Gets details on a single Pokémon based on National Pokédex number
   * You can supply skip and take to limit the amount of flavour texts to return and reverse to show latest games on top.
   * Reversal is applied before pagination!
   */
  readonly getPokemonDetailsByNumber: DexDetails;
  /** Gets details on a single Pokémon based on species name.You can supply skip and take to limit the amount of flavour texts to return and reverse to show latest games on top.Reversal is applied before pagination! */
  readonly getPokemonDetails: DexDetails;
  /** Gets details on a single Pokémon based on species name.You can supply skip and take to limit the amount of flavour texts to return and reverse to show latest games on top.Reversal is applied before pagination! */
  readonly getPokemonDetailsByName: DexDetails;
  /** Gets details on a single Pokémon based on a fuzzy search.You can supply skip and take to limit the amount of flavour texts to return and reverse to show latest games on top.Reversal is applied before pagination! */
  readonly getPokemonDetailsByFuzzy: DexDetails;
  /** Gets dex entries for Pokémon based on a fuzzy searchYou can supply a skip and take to paginate the results and reverse to show the results least to most well matchesReversal is applied before pagination! */
  readonly getDexEntries: ReadonlyArray<DexEntry>;
  /** Gets the dex entry for a Pokémon based on their species name */
  readonly getDexEntryBySpeciesName: Scalars['JSONObject'];
  /** Gets the dex entry for a Pokémon based on their dex number */
  readonly getDexEntryByDexNumber: Scalars['JSONObject'];
  /** Gets details on a single item based on a fuzzy search.You can supply skip and take to paginate the fuzzy search and reverse to show teh least likely results on topReversal is applied before paginations! */
  readonly getItemDetailsByFuzzy: ItemEntry;
  /** Gets details on a single item based on an exact name match. */
  readonly getItemDetailsByName: ItemEntry;
  /** Gets raw entries of multiple items based on a fuzzy search.You can supply skip and take to limit the amount of flavour texts to return and reverse to show latest games on top.Reversal is applied before pagination! */
  readonly getItemByFuzzy: ReadonlyArray<Scalars['JSONObject']>;
  /** Gets the raw entry of a single item based on name. */
  readonly getItemByName: Scalars['JSONObject'];
  /** Gets the learnsets for a given Pokémon and move.Multiple moves are possible by putting them in an array: [move1, move2].You can also apply a generation filter (only results for the given generation will be returned) with the generation argument */
  readonly getPokemonLearnset: LearnsetEntry;
  /** Gets the learnset for a given Pokémon and move.A fuzzy search is performed to find a matching Pokémon and moveMultiple moves are possible by putting them in an array: [move1, move2].You can also apply a generation filter (only results for the given generation will be returned) with the generation argument */
  readonly getPokemonLearnsetByFuzzy: LearnsetEntry;
  /** Gets details on a single move based on a fuzzy search.You can supply skip and take to paginate the fuzzy search and reverse to show teh least likely results on topReversal is applied before paginations! */
  readonly getMoveDetailsByFuzzy: MoveEntry;
  /** Gets details on a single move based on an exact name match. */
  readonly getMoveDetailsByName: MoveEntry;
  /** Gets raw entries of multiple moves based on a fuzzy search.You can supply skip and take to limit the amount of flavour texts to return and reverse to show latest games on top.Reversal is applied before pagination! */
  readonly getMoveByFuzzy: ReadonlyArray<Scalars['JSONObject']>;
  /** Gets the raw entry of a single move based on name. */
  readonly getMoveByName: Scalars['JSONObject'];
  /** Gets the type matchup data for the given type or types */
  readonly getTypeMatchup: TypeMatchups;
  /** Gets the raw type matchup data for any one given type */
  readonly getTypeByName: Scalars['JSONObject'];
};
export declare type QueryGetAbilityDetailsByFuzzyArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  reverse?: Maybe<Scalars['Boolean']>;
  ability: Scalars['String'];
};
export declare type QueryGetAbilityDetailsByNameArgs = {
  ability: Abilities;
};
export declare type QueryGetAbilityByFuzzyArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  reverse?: Maybe<Scalars['Boolean']>;
  ability: Scalars['String'];
};
export declare type QueryGetAbilityByNameArgs = {
  ability: Abilities;
};
export declare type QueryGetPokemonDetailsByNumberArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  reverse?: Maybe<Scalars['Boolean']>;
  pokemon: Scalars['Int'];
};
export declare type QueryGetPokemonDetailsArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  reverse?: Maybe<Scalars['Boolean']>;
  pokemon: Pokemon;
};
export declare type QueryGetPokemonDetailsByNameArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  reverse?: Maybe<Scalars['Boolean']>;
  pokemon: Pokemon;
};
export declare type QueryGetPokemonDetailsByFuzzyArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  reverse?: Maybe<Scalars['Boolean']>;
  pokemon: Scalars['String'];
};
export declare type QueryGetDexEntriesArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  reverse?: Maybe<Scalars['Boolean']>;
  pokemon: Scalars['String'];
};
export declare type QueryGetDexEntryBySpeciesNameArgs = {
  pokemon: Pokemon;
};
export declare type QueryGetDexEntryByDexNumberArgs = {
  num: Scalars['Float'];
};
export declare type QueryGetItemDetailsByFuzzyArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  reverse?: Maybe<Scalars['Boolean']>;
  item: Scalars['String'];
};
export declare type QueryGetItemDetailsByNameArgs = {
  item: Items;
};
export declare type QueryGetItemByFuzzyArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  reverse?: Maybe<Scalars['Boolean']>;
  item: Scalars['String'];
};
export declare type QueryGetItemByNameArgs = {
  item: Items;
};
export declare type QueryGetPokemonLearnsetArgs = {
  pokemon: Pokemon;
  moves: ReadonlyArray<Moves>;
  generation?: Maybe<Scalars['Int']>;
};
export declare type QueryGetPokemonLearnsetByFuzzyArgs = {
  pokemon: Scalars['String'];
  moves: ReadonlyArray<Scalars['String']>;
  generation?: Maybe<Scalars['Int']>;
};
export declare type QueryGetMoveDetailsByFuzzyArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  reverse?: Maybe<Scalars['Boolean']>;
  move: Scalars['String'];
};
export declare type QueryGetMoveDetailsByNameArgs = {
  move: Moves;
};
export declare type QueryGetMoveByFuzzyArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  reverse?: Maybe<Scalars['Boolean']>;
  move: Scalars['String'];
};
export declare type QueryGetMoveByNameArgs = {
  move: Moves;
};
export declare type QueryGetTypeMatchupArgs = {
  types: ReadonlyArray<Types>;
};
export declare type QueryGetTypeByNameArgs = {
  type: Types;
};
/** A Pokémon's stats */
export declare type StatsEntry = {
  readonly __typename?: 'StatsEntry';
  /** The base HP stat of a pokemon */
  readonly hp: Scalars['Int'];
  /** The base attack stat of a Pokémon */
  readonly attack: Scalars['Int'];
  /** The base defense stat of a Pokémon */
  readonly defense: Scalars['Int'];
  /** The base special attack stat of a Pokémon */
  readonly specialattack: Scalars['Int'];
  /** The base special defense stat of a Pokémon */
  readonly specialdefense: Scalars['Int'];
  /** The base speed stat of a Pokémon */
  readonly speed: Scalars['Int'];
};
/** A type matchup entry */
export declare type TypeEntry = {
  readonly __typename?: 'TypeEntry';
  /** The types with 4x effectiveness */
  readonly doubleEffectiveTypes: ReadonlyArray<Scalars['String']>;
  /** The types with 2x effectiveness */
  readonly effectiveTypes: ReadonlyArray<Scalars['String']>;
  /** The types with 1x effectiveness */
  readonly normalTypes: ReadonlyArray<Scalars['String']>;
  /** The types with 0.5x effectiveness */
  readonly resistedTypes: ReadonlyArray<Scalars['String']>;
  /** The types with 0.25x effectiveness */
  readonly doubleResistedTypes: ReadonlyArray<Scalars['String']>;
  /** The types with 0x effectiveness */
  readonly effectlessTypes: ReadonlyArray<Scalars['String']>;
};
/** The type matchups for any one or two given types */
export declare type TypeMatchups = {
  readonly __typename?: 'TypeMatchups';
  /** The type matchups when attacking */
  readonly attacking: TypeEntry;
  /** The type matchups when defending */
  readonly defending: TypeEntry;
};
/** The types in Pokémon */
export declare const enum Types {
  Bug = 'bug',
  Dark = 'dark',
  Dragon = 'dragon',
  Electric = 'electric',
  Fairy = 'fairy',
  Fighting = 'fighting',
  Fire = 'fire',
  Flying = 'flying',
  Ghost = 'ghost',
  Grass = 'grass',
  Ground = 'ground',
  Ice = 'ice',
  Normal = 'normal',
  Poison = 'poison',
  Psychic = 'psychic',
  Rock = 'rock',
  Steel = 'steel',
  Water = 'water'
}
export declare type ResolverTypeWrapper<T> = Promise<T> | T;
export declare type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export declare type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export declare type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export declare type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;
export declare type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;
export declare type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;
export declare type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;
export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<
    {
      [key in TKey]: TResult;
    },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    {
      [key in TKey]: TResult;
    },
    TContext,
    TArgs
  >;
}
export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}
export declare type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;
export declare type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;
export declare type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;
export declare type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;
export declare type NextResolverFn<T> = () => Promise<T>;
export declare type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;
/** Mapping between all available schema types and the resolvers types */
export declare type ResolversTypes = {
  Abilities: Abilities;
  AbilitiesEntry: ResolverTypeWrapper<AbilitiesEntry>;
  String: ResolverTypeWrapper<Scalars['String']>;
  AbilityEntry: ResolverTypeWrapper<AbilityEntry>;
  DexDetails: ResolverTypeWrapper<DexDetails>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  DexEntry: ResolverTypeWrapper<DexEntry>;
  FlavorEntry: ResolverTypeWrapper<FlavorEntry>;
  GenderEntry: ResolverTypeWrapper<GenderEntry>;
  ItemEntry: ResolverTypeWrapper<ItemEntry>;
  Items: Items;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  LearnsetEntry: ResolverTypeWrapper<LearnsetEntry>;
  LearnsetLevelUpMove: ResolverTypeWrapper<LearnsetLevelUpMove>;
  LearnsetMove: ResolverTypeWrapper<LearnsetMove>;
  MoveEntry: ResolverTypeWrapper<MoveEntry>;
  Moves: Moves;
  Pokemon: Pokemon;
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  StatsEntry: ResolverTypeWrapper<StatsEntry>;
  TypeEntry: ResolverTypeWrapper<TypeEntry>;
  TypeMatchups: ResolverTypeWrapper<TypeMatchups>;
  Types: Types;
};
/** Mapping between all available schema types and the resolvers parents */
export declare type ResolversParentTypes = {
  AbilitiesEntry: AbilitiesEntry;
  String: Scalars['String'];
  AbilityEntry: AbilityEntry;
  DexDetails: DexDetails;
  Int: Scalars['Int'];
  Float: Scalars['Float'];
  DexEntry: DexEntry;
  FlavorEntry: FlavorEntry;
  GenderEntry: GenderEntry;
  ItemEntry: ItemEntry;
  JSONObject: Scalars['JSONObject'];
  LearnsetEntry: LearnsetEntry;
  LearnsetLevelUpMove: LearnsetLevelUpMove;
  LearnsetMove: LearnsetMove;
  MoveEntry: MoveEntry;
  Query: {};
  Boolean: Scalars['Boolean'];
  StatsEntry: StatsEntry;
  TypeEntry: TypeEntry;
  TypeMatchups: TypeMatchups;
};
export declare type AbilitiesEntryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AbilitiesEntry'] = ResolversParentTypes['AbilitiesEntry']
> = {
  first?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  second?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hidden?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  special?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type AbilityEntryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AbilityEntry'] = ResolversParentTypes['AbilityEntry']
> = {
  desc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shortDesc?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isFieldAbility?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bulbapediaPage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  serebiiPage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  smogonPage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type DexDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DexDetails'] = ResolversParentTypes['DexDetails']
> = {
  num?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  species?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  types?: Resolver<ReadonlyArray<ResolversTypes['String']>, ParentType, ContextType>;
  abilities?: Resolver<ResolversTypes['AbilitiesEntry'], ParentType, ContextType>;
  baseStats?: Resolver<ResolversTypes['StatsEntry'], ParentType, ContextType>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  eggGroups?: Resolver<Maybe<ReadonlyArray<ResolversTypes['String']>>, ParentType, ContextType>;
  evolutionLevel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  evos?: Resolver<Maybe<ReadonlyArray<ResolversTypes['String']>>, ParentType, ContextType>;
  prevo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  forme?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formeLetter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['GenderEntry'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  baseForme?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  baseSpecies?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  otherFormes?: Resolver<Maybe<ReadonlyArray<ResolversTypes['String']>>, ParentType, ContextType>;
  cosmeticFormes?: Resolver<Maybe<ReadonlyArray<ResolversTypes['String']>>, ParentType, ContextType>;
  baseStatsTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  evolutions?: Resolver<Maybe<ReadonlyArray<ResolversTypes['DexDetails']>>, ParentType, ContextType>;
  preevolutions?: Resolver<Maybe<ReadonlyArray<ResolversTypes['DexDetails']>>, ParentType, ContextType>;
  flavorTexts?: Resolver<ReadonlyArray<ResolversTypes['FlavorEntry']>, ParentType, ContextType>;
  sprite?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shinySprite?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  backSprite?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shinyBackSprite?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  smogonTier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bulbapediaPage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  serebiiPage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  smogonPage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type DexEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['DexEntry'] = ResolversParentTypes['DexEntry']> = {
  num?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  species?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  types?: Resolver<ReadonlyArray<ResolversTypes['String']>, ParentType, ContextType>;
  abilities?: Resolver<ResolversTypes['AbilitiesEntry'], ParentType, ContextType>;
  baseStats?: Resolver<ResolversTypes['StatsEntry'], ParentType, ContextType>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  eggGroups?: Resolver<Maybe<ReadonlyArray<ResolversTypes['String']>>, ParentType, ContextType>;
  evolutionLevel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  evos?: Resolver<Maybe<ReadonlyArray<ResolversTypes['String']>>, ParentType, ContextType>;
  prevo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  forme?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formeLetter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['GenderEntry'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  baseForme?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  baseSpecies?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  otherFormes?: Resolver<Maybe<ReadonlyArray<ResolversTypes['String']>>, ParentType, ContextType>;
  cosmeticFormes?: Resolver<Maybe<ReadonlyArray<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type FlavorEntryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FlavorEntry'] = ResolversParentTypes['FlavorEntry']
> = {
  game?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  flavor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type GenderEntryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GenderEntry'] = ResolversParentTypes['GenderEntry']
> = {
  male?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  female?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type ItemEntryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ItemEntry'] = ResolversParentTypes['ItemEntry']
> = {
  desc?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isNonstandard?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sprite?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  generationIntroduced?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  bulbapediaPage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  serebiiPage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  smogonPage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}
export declare type LearnsetEntryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LearnsetEntry'] = ResolversParentTypes['LearnsetEntry']
> = {
  levelUpMoves?: Resolver<Maybe<ReadonlyArray<ResolversTypes['LearnsetLevelUpMove']>>, ParentType, ContextType>;
  virtualTransferMoves?: Resolver<Maybe<ReadonlyArray<ResolversTypes['LearnsetMove']>>, ParentType, ContextType>;
  tutorMoves?: Resolver<Maybe<ReadonlyArray<ResolversTypes['LearnsetMove']>>, ParentType, ContextType>;
  tmMoves?: Resolver<Maybe<ReadonlyArray<ResolversTypes['LearnsetMove']>>, ParentType, ContextType>;
  eggMoves?: Resolver<Maybe<ReadonlyArray<ResolversTypes['LearnsetMove']>>, ParentType, ContextType>;
  eventMoves?: Resolver<Maybe<ReadonlyArray<ResolversTypes['LearnsetMove']>>, ParentType, ContextType>;
  dreamworldMoves?: Resolver<Maybe<ReadonlyArray<ResolversTypes['LearnsetMove']>>, ParentType, ContextType>;
  num?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  species?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sprite?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shinySprite?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  backSprite?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shinyBackSprite?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type LearnsetLevelUpMoveResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LearnsetLevelUpMove'] = ResolversParentTypes['LearnsetLevelUpMove']
> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  generation?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type LearnsetMoveResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LearnsetMove'] = ResolversParentTypes['LearnsetMove']
> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  generation?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type MoveEntryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MoveEntry'] = ResolversParentTypes['MoveEntry']
> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortDesc?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  basePower?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zMovePower?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maxMovePower?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  accuracy?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  priority?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contestType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bulbapediaPage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  serebiiPage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  smogonPage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isNonstandard?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isZ?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isGMax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isFieldMove?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  desc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAbilityDetailsByFuzzy?: Resolver<
    ResolversTypes['AbilityEntry'],
    ParentType,
    ContextType,
    RequireFields<QueryGetAbilityDetailsByFuzzyArgs, 'skip' | 'take' | 'reverse' | 'ability'>
  >;
  getAbilityDetailsByName?: Resolver<
    ResolversTypes['AbilityEntry'],
    ParentType,
    ContextType,
    RequireFields<QueryGetAbilityDetailsByNameArgs, 'ability'>
  >;
  getAbilityByFuzzy?: Resolver<
    ReadonlyArray<ResolversTypes['JSONObject']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetAbilityByFuzzyArgs, 'skip' | 'take' | 'reverse' | 'ability'>
  >;
  getAbilityByName?: Resolver<ResolversTypes['JSONObject'], ParentType, ContextType, RequireFields<QueryGetAbilityByNameArgs, 'ability'>>;
  getPokemonDetailsByNumber?: Resolver<
    ResolversTypes['DexDetails'],
    ParentType,
    ContextType,
    RequireFields<QueryGetPokemonDetailsByNumberArgs, 'skip' | 'take' | 'reverse' | 'pokemon'>
  >;
  getPokemonDetails?: Resolver<
    ResolversTypes['DexDetails'],
    ParentType,
    ContextType,
    RequireFields<QueryGetPokemonDetailsArgs, 'skip' | 'take' | 'reverse' | 'pokemon'>
  >;
  getPokemonDetailsByName?: Resolver<
    ResolversTypes['DexDetails'],
    ParentType,
    ContextType,
    RequireFields<QueryGetPokemonDetailsByNameArgs, 'skip' | 'take' | 'reverse' | 'pokemon'>
  >;
  getPokemonDetailsByFuzzy?: Resolver<
    ResolversTypes['DexDetails'],
    ParentType,
    ContextType,
    RequireFields<QueryGetPokemonDetailsByFuzzyArgs, 'skip' | 'take' | 'reverse' | 'pokemon'>
  >;
  getDexEntries?: Resolver<
    ReadonlyArray<ResolversTypes['DexEntry']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetDexEntriesArgs, 'skip' | 'take' | 'reverse' | 'pokemon'>
  >;
  getDexEntryBySpeciesName?: Resolver<
    ResolversTypes['JSONObject'],
    ParentType,
    ContextType,
    RequireFields<QueryGetDexEntryBySpeciesNameArgs, 'pokemon'>
  >;
  getDexEntryByDexNumber?: Resolver<ResolversTypes['JSONObject'], ParentType, ContextType, RequireFields<QueryGetDexEntryByDexNumberArgs, 'num'>>;
  getItemDetailsByFuzzy?: Resolver<
    ResolversTypes['ItemEntry'],
    ParentType,
    ContextType,
    RequireFields<QueryGetItemDetailsByFuzzyArgs, 'skip' | 'take' | 'reverse' | 'item'>
  >;
  getItemDetailsByName?: Resolver<ResolversTypes['ItemEntry'], ParentType, ContextType, RequireFields<QueryGetItemDetailsByNameArgs, 'item'>>;
  getItemByFuzzy?: Resolver<
    ReadonlyArray<ResolversTypes['JSONObject']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetItemByFuzzyArgs, 'skip' | 'take' | 'reverse' | 'item'>
  >;
  getItemByName?: Resolver<ResolversTypes['JSONObject'], ParentType, ContextType, RequireFields<QueryGetItemByNameArgs, 'item'>>;
  getPokemonLearnset?: Resolver<
    ResolversTypes['LearnsetEntry'],
    ParentType,
    ContextType,
    RequireFields<QueryGetPokemonLearnsetArgs, 'pokemon' | 'moves'>
  >;
  getPokemonLearnsetByFuzzy?: Resolver<
    ResolversTypes['LearnsetEntry'],
    ParentType,
    ContextType,
    RequireFields<QueryGetPokemonLearnsetByFuzzyArgs, 'pokemon' | 'moves'>
  >;
  getMoveDetailsByFuzzy?: Resolver<
    ResolversTypes['MoveEntry'],
    ParentType,
    ContextType,
    RequireFields<QueryGetMoveDetailsByFuzzyArgs, 'skip' | 'take' | 'reverse' | 'move'>
  >;
  getMoveDetailsByName?: Resolver<ResolversTypes['MoveEntry'], ParentType, ContextType, RequireFields<QueryGetMoveDetailsByNameArgs, 'move'>>;
  getMoveByFuzzy?: Resolver<
    ReadonlyArray<ResolversTypes['JSONObject']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetMoveByFuzzyArgs, 'skip' | 'take' | 'reverse' | 'move'>
  >;
  getMoveByName?: Resolver<ResolversTypes['JSONObject'], ParentType, ContextType, RequireFields<QueryGetMoveByNameArgs, 'move'>>;
  getTypeMatchup?: Resolver<ResolversTypes['TypeMatchups'], ParentType, ContextType, RequireFields<QueryGetTypeMatchupArgs, 'types'>>;
  getTypeByName?: Resolver<ResolversTypes['JSONObject'], ParentType, ContextType, RequireFields<QueryGetTypeByNameArgs, 'type'>>;
};
export declare type StatsEntryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StatsEntry'] = ResolversParentTypes['StatsEntry']
> = {
  hp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  attack?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  defense?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  specialattack?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  specialdefense?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  speed?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type TypeEntryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TypeEntry'] = ResolversParentTypes['TypeEntry']
> = {
  doubleEffectiveTypes?: Resolver<ReadonlyArray<ResolversTypes['String']>, ParentType, ContextType>;
  effectiveTypes?: Resolver<ReadonlyArray<ResolversTypes['String']>, ParentType, ContextType>;
  normalTypes?: Resolver<ReadonlyArray<ResolversTypes['String']>, ParentType, ContextType>;
  resistedTypes?: Resolver<ReadonlyArray<ResolversTypes['String']>, ParentType, ContextType>;
  doubleResistedTypes?: Resolver<ReadonlyArray<ResolversTypes['String']>, ParentType, ContextType>;
  effectlessTypes?: Resolver<ReadonlyArray<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type TypeMatchupsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TypeMatchups'] = ResolversParentTypes['TypeMatchups']
> = {
  attacking?: Resolver<ResolversTypes['TypeEntry'], ParentType, ContextType>;
  defending?: Resolver<ResolversTypes['TypeEntry'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type Resolvers<ContextType = any> = {
  AbilitiesEntry?: AbilitiesEntryResolvers<ContextType>;
  AbilityEntry?: AbilityEntryResolvers<ContextType>;
  DexDetails?: DexDetailsResolvers<ContextType>;
  DexEntry?: DexEntryResolvers<ContextType>;
  FlavorEntry?: FlavorEntryResolvers<ContextType>;
  GenderEntry?: GenderEntryResolvers<ContextType>;
  ItemEntry?: ItemEntryResolvers<ContextType>;
  JSONObject?: GraphQLScalarType;
  LearnsetEntry?: LearnsetEntryResolvers<ContextType>;
  LearnsetLevelUpMove?: LearnsetLevelUpMoveResolvers<ContextType>;
  LearnsetMove?: LearnsetMoveResolvers<ContextType>;
  MoveEntry?: MoveEntryResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  StatsEntry?: StatsEntryResolvers<ContextType>;
  TypeEntry?: TypeEntryResolvers<ContextType>;
  TypeMatchups?: TypeMatchupsResolvers<ContextType>;
};
/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export declare type IResolvers<ContextType = any> = Resolvers<ContextType>;
//# sourceMappingURL=graphql-pokemon.d.ts.map