/* =====================================================================
   WELCOME TO LUND — LOCATIONS DATA
   =====================================================================
   Edit this file directly to add, remove, or change businesses and
   locations. world-information.html reads this file and builds the
   Business Ventures tables from it automatically.

   STRUCTURE
   Each street (this / that / the / my / your / our / another / thenext)
   is an array of location objects. Each object has two fields:

     name: the business or location's name.
     desc: a description. Leave as an empty string "" for a name-only
           entry (no description available yet).

   Example of adding a new location to This Street:

     { name: "New Shop Name", desc: "What it does, in plain terms." },

   Just add a new line inside the correct street's array, following the
   same { name: ..., desc: ... } shape. Order within a street doesn't
   matter — locations display in the order they're listed here.
   ===================================================================== */

const LOCATIONS_DATA = {
  this: [
    { name: "Lundish Foreign Travel", desc: "Plane shifts and teleports to other planes, extremely expensive, favored by the lavish elite visiting Sigil, Arborea, and other such places. Also sells celestial cruises through the Astral Sea." },
    { name: "Violet Crown", desc: "The best, most historic theater in Lund. Real performers augmented with illusion magic create visceral entertainment — like watching a movie while being inside it as it happens. Performing on its stage is an extreme honor." },
    { name: "Odineye", desc: "Tarot readings, divinations, and other such fun stuff." },
    { name: "Egodeath", desc: "Creates a simulacrum for you to fight and kill. Very popular with teenagers. Premium packages let you pay to attack politicians or other specific individuals." },
    { name: "BBB", desc: "Broken Baubles Bettered. Can fix anything, for a price. Staffed by no shortage of gnomes." },
    { name: "Duelhut", desc: "Proxy wizard spellduels using mind-controlled golems and automatons. Actual duels are also available, with a provided waiver and an upfront resurrection-cost down payment." },
    { name: "Bigby's Bounty Flagship", desc: "The flagship grocery store; only sells the truly outlandish stuff at this location — monster meat, tinctures, candy, everything themed to a spot on the Entertainment street." },
    { name: "DALIANCE", desc: "A casino run by a Devil-summoning, Devil-worshipping Warlock, in league with the Church of Fortune and the Theological Market. You can bet on nearly anything — including your soul, or your body." },
    { name: "NEEDFUL THINGS", desc: "Attached to Daliance; a pawn shop and brokerage service for anything you want to buy or sell. Keeps a back-alley shop for less reputable transactions." },
    { name: "Unnatural Enhancements", desc: "Magical prosthetics, plus temporary enhancements — tattoos, alter self, illusions for the day. Basically magical face-painting. Popular with kids." },
    { name: "Leomund's Tiny Bank of Large Sums", desc: "A demiplane bank, much larger on the inside, run by Leomundus the Gnome. Favors gnomes." },
    { name: "Mag-Pies", desc: "Pizza and pasta shop known for enormous servings and its signature dishes: the bright-blue \"Weave Pasta,\" \"Baba Lasagna,\" and \"Strahdghetti.\"" },
    { name: "Strongwands", desc: "Rugged, no-nonsense magic gear and weaponry, run by ex-Lundish military — from back when Lund actually had one." },
    { name: "The Grand Illusion", desc: "Illusory clothing services. Always discounted, always popular." },
    { name: "Ambrosia", desc: "A fancy restaurant and rooftop bar with good potions and prices to match. Rumored shady ties to a corporate office angling into the Pharma trade." },
    { name: "9 Circles Bank and Casino", desc: "" },
    { name: "Magelofts", desc: "Real, honest-to-goodness apartments, located right on the Strip." },
    { name: "Trader Giovanni's Exotic Grocer", desc: "Fancy groceries for Lund's high-end clientele." },
    { name: "Wishing Well", desc: "A magic-genie bar and casino." },
    { name: "Mighty Djinn Bank", desc: "Connected to the Wishing Well. The owner isn't actually a djinn — he's just bound every djinn who works there." },
    { name: "TROVE", desc: "High-end magic items for sale. Trades welcome." }
  ],
  that: [
    { name: "Magnifique", desc: "Art gallery: magic art, moving paintings, antipathy/sympathy sculptures, Gorgon art, emotional visages, living spells. Very expensive art." },
    { name: "Pigment", desc: "Otherworldly clothing store: magic robes, fabrics, dyes, pigments, fashion-based magic items. Runs an after-hours runway and drag shows, plus a disco — and quietly serves as a drug-distribution hub via specially curated fashion boxes." },
    { name: "MMD", desc: "Magnificent Mansions, by Design. An architecture firm that doesn't build demi-homes, only real, state-of-the-art construction. Also handles event planning for weddings and graduations, with regular deals on graduation packages." },
    { name: "Fabrique", desc: "Weird, avant-garde invention art — magic made to look like it isn't. Popular with the contrarian hipster crowd." },
    { name: "Moonbeam", desc: "A lycanthrope bar: snuff-art, feral savagery, fight clubs, blood paintings. Connects directly into the Lundercity." },
    { name: "Wonder", desc: "The most fashionable bar in Lund, magical in every sense. Any desire can be found here, for the right price. Redecorates with the seasons." },
    { name: "Nouveau", desc: "Strictly hipsters. No magical art allowed." }
  ],
  the: [
    { name: "Illythck Inc.", desc: "A warehouse and storage facility that abducts poor tenants via access codes to Demiminiums who fall behind on rent. Illegal. Nobody really minds." },
    { name: "Magimart", desc: "A warehouse where most of Lund's poor work, using Modrons and automatons for the bulk of the labor, with humans supervising and handling mass information-sifting tasks. Deliveries go out via its own courier arm, Flyboys — drones, flying rugs, automatons, and flight spells reaching every corner of the city." },
    { name: "Flyboys Acquisitions and Exploration (FAE)", desc: "Magimart sources goods from local vendors who'd rather not go to market, and outsources cheaper acquisition from other planes to FAE, an arm of Flyboys that also serves as a questgiver." },
    { name: "Demivisions", desc: "Cheap demiplane vacations. Sometimes people get lost." },
    { name: "Demiminiums", desc: "Demiplane condos. Sometimes access gets lost." },
    { name: "Demidorms", desc: "Demiplane dormitories. Sometimes entire classes of students get lost." },
    { name: "Lundish Telepath Station", desc: "Access telepathic news on demand from these booths, or have it delivered straight to an implant — earning royalties and ad revenue for every invasive message received." },
    { name: "Orphanage Arcane", desc: "" },
    { name: "Lundish Domestic Travel", desc: "" },
    { name: "Awesomely Discounted Wizard Goods #2", desc: "Sells college surplus and recalled items. No refunds. Most of it doesn't work, but it's cheap: back-to-school bundles, failed senior projects, uncharged wands and staves, spellbook theses (half of them gibberish). A franchise, run here by a thick-accented Svartish merchant." },
    { name: "Smokehausen", desc: "Magical barbecue, regenerated meat, dirt cheap. Delivers via Rug Runners. Long-term consumption has been known to cause magical oddities." },
    { name: "2-Star Bigby Beans", desc: "The worst-reviewed Bigby Beans in Lund. A frequent hangout for the homeless and vagrants who buy one cup of coffee and sleep there, since it's open 24 hours." },
    { name: "A-HA!", desc: "Codename for Anti-Humans Anonymous, a group dedicated to reducing human power in Lund. Meetings are signaled by magical graffiti on an abandoned building." },
    { name: "Lundish Prison", desc: "Time-Cells hold inmates in a time warp, so most sentences are served and released the same day they're booked. Prisoners on probation must complete dangerous tasks for the city." },
    { name: "Saint Nurbaeshra's Hospital", desc: "A secret clone factory and research laboratory, doubling as a cheap hospital." },
    { name: "Mortimorgue", desc: "Attached to Saint Nurbaeshra's; runs Necromancer's Anonymous and tries very hard to keep a clean reputation, under Proprietor Einar Goetz." },
    { name: "Family Copper", desc: "Everything's one copper. Standard stuff, dirt cheap, constantly robbed." },
    { name: "Copper Paddock", desc: "Think Golden Corral, but far worse. Every dish is a Magically Modified Organism with dire side effects — eat here and get a coupon for a free health screening at Magimend, the \"Amazon\" of Lund's healthcare." },
    { name: "The Magimend", desc: "Adjacent to Magimart: prescriptions, checkups, minor surgery, rehab, and therapy, with discount rates for Magimart employees. Also tests experimental treatments on them." }
  ],
  my: [
    { name: "Lundish Arboretum", desc: "A forest scaled down to fit the city, full of monstrous plants; essentially an out-of-city adventure without leaving town. Sells adventure packages, and keeps close ties with Wylderness." },
    { name: "EZKAPE", desc: "An escape room full of traps; the standard dungeon experience, packaged for tourists." },
    { name: "Dungeon Kings", desc: "Top-golf, Draft-Kings-style betting, arena pit fighting, and dungeon diving all under one roof — bet, gamble, dive, all of it." },
    { name: "Museum of Oddities", desc: "The graffiti out front has been altered to read \"graffiti titties.\"" },
    { name: "Church of Old Lund", desc: "" },
    { name: "The Big (Potato)", desc: "" },
    { name: "Astral Tavern", desc: "" },
    { name: "Wylderness", desc: "Also scaled down: the Lundish Zoo, where nothing is off-limits — monsters, dinosaurs, sentient creatures, polymorphed people. Also runs safaris and hunting expeditions into demiplanes." },
    { name: "Bigby Beans Flagship", desc: "The true flagship: real employees, paid well, mascots that look like Hamburger Helper, and Bigby himself occasionally appearing as a hologram. Basically Buc-ee's, but wizard." }
  ],
  your: [
    { name: "Groupwork", desc: "Cheap shared magic-library space — payment accepted in mental energy." },
    { name: "Grand Illusion Corporate", desc: "Fully illusioned clothing, cheap." },
    { name: "RISE", desc: "A terribly inefficient memory-deletion service." },
    { name: "Fly-Boys Station", desc: "" },
    { name: "Quick-Fix", desc: "\"We'll solve any problem — for as long as a day!\"" },
    { name: "Manywears", desc: "A used wizard-fashion mall, housed in a demiplane." },
    { name: "Butcher of None", desc: "Regenerative meat and other weird monster foods." },
    { name: "Lundish Traders Outpost", desc: "Basically wizard REI." },
    { name: "Auto-Zone", desc: "Automaton repair shop; sells used constructs and breaks the rest down for scrap, with ties to the Lundercity's robo-fighting circuit." },
    { name: "Full-Focus", desc: "Spellcasting focus manufacturer, selling licensed wands and other magic items — prone to bribes, and known to run a black market on the side." },
    { name: "Demisign", desc: "A demiplane housing agency." }
  ],
  another: [
    { name: "WUMPUS", desc: "The wizard dump. Started as \"Wizard Dump,\" became \"WUMP,\" then \"WUMPISS,\" then \"WUMPUSSY,\" and finally settled on WUMPUS. Sells whatever people threw away." },
    { name: "Tool-School", desc: "The sign's been graffitied to read \"FOOL school.\" A college for manual laborers." },
    { name: "Rent-A-Hand", desc: "Automaton service rentals." },
    { name: "Rug Runners Warehouse", desc: "" },
    { name: "Bigby Warehouse", desc: "" },
    { name: "Trove Warehouse", desc: "" },
    { name: "Pudding Pit", desc: "A waste-removal service that uses black puddings to do the dirty work." },
    { name: "Workers Guilds", desc: "Masons, carpenters, chefs." },
    { name: "Necrostruction", desc: "Undead construction services." },
    { name: "Fresh Servitude", desc: "Skeleton servants for sale, two-for-one special, wand of command sold separately." },
    { name: "Cheap Residences", desc: "Demiments, Demiminiums, Demimanors." },
    { name: "Arcane Innovations", desc: "High-tech magic that needs test subjects. Produced right here." }
  ],
  our: [
    { name: "Illusiolife Corporate Office", desc: "" },
    { name: "Lex Maga", desc: "Life insurance." },
    { name: "Ambrosia Corporate Office", desc: "" },
    { name: "Trove Corporate Office", desc: "" },
    { name: "Illythck Corporate Office", desc: "" },
    { name: "Element", desc: "Corporate water, power, heat, and cooling, drawn through elemental portals." },
    { name: "Spellfinder Corporate Office", desc: "Gig work for spellcasters." },
    { name: "SVAROG Corporate Office", desc: "" },
    { name: "Church of Fortune", desc: "" },
    { name: "Theologians' Choir", desc: "" }
  ],
  thenext: [
    { name: "Sevenswords", desc: "Its forgemaster is a Marilith — a demon, but an extraordinarily skilled one. Long waitlist. Recently acquired by SVAROG." },
    { name: "SVAROG Prime Forge", desc: "Bulk weapons and automaton parts, licensed out, with scouting parties for Deep Dives and Edge-Raids." },
    { name: "Wizard Milk Living-Sugar School", desc: "" },
    { name: "Cheesehead", desc: "" },
    { name: "Geldermans", desc: "" },
    { name: "Vainglory", desc: "Cosmetic crafters: paints, makeup, skin tonics, age treatments. Witches, mostly." },
    { name: "Holy Grail", desc: "A flea market and thrift store sponsored by the Church of Fortune, selling donations from its parishioners." },
    { name: "Lord of Pie", desc: "An arm of the Baker's Guild: magic pie-makers, and occasional smugglers out of the Lundercity." },
    { name: "Muff-Master", desc: "Also an arm of the Baker's Guild: magical muffins and a solid breakfast menu." },
    { name: "Metalmorphose", desc: "An arm of SVAROG that crafts armor through eccentric means — harvesting dead creatures for weapons and armor, Monster Hunter–style." },
    { name: "Iron-Instinct", desc: "Refuses the SVAROG coalition entirely. A mom-and-pop shop run by Old Lunders — Dwarf Deep Divers. Pricier, but nothing here is magic, so nothing here can be manipulated by spells." },
    { name: "Tinkertimbs", desc: "Works with Lum's Depot to manufacture furniture and wooden armaments — bows, shields, arrows." },
    { name: "Glitterbug", desc: "Magically manufactured jewelry, popular with poorer folk and young women. Rock Gnomes and \"Time Safe\" tech sourced from the Prison." },
    { name: "Cauldron", desc: "The Brewers and Alchemists' Guild, selling reagents for Transmutation spells." },
    { name: "WONKERS", desc: "Discount spellcrafters, building spells out of recycled materials. Rarely has anything good — but always has good things to trade." },
    { name: "Boobles", desc: "A secondhand magic-item shop, mom-and-pop style. Rarely has anything good, but plenty worth trading for favors. Its owner is a very old, very senile wizard — once a cult leader down in the Lundercity." },
    { name: "The Usual Place", desc: "General store, bar, lodging, and item repair, all in one. Frequently the source of a quest or two." },
    { name: "Sew It Is", desc: "Tailor." },
    { name: "The Wall Mart", desc: "Up against the Wall. Literally." },
    { name: "Sir Burlington's Coats", desc: "A coat factory. Its subsidiary, Horsche, sells mundane travel horses and their magical counterparts." }
  ]
};
