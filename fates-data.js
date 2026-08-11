/* =====================================================================
   THE LUND CODEX — FATE DATA
   =====================================================================
   Edit this file directly to add or change what a drawn Fate card grants.
   character-generation.html reads this file for both the Fate Draw tool
   and the Glossary.

   STRUCTURE
   Each card name (matching the deck defined in character-generation.html)
   maps to an object with four fields:

     jobTitle: a short in-world job/role tied to this card. Use null for
               Major Arcana, which don't carry one.
     spell:    a string — "Name (tags): description". The Name portion
               (before the first ": ") is italicized automatically when
               displayed. Use null if there's no spell.
     gift:     a string, same "Name: description" convention as spell.
               Use null if there's no gift.
     gear:     an ARRAY of { name, desc } objects — one per distinct item,
               so each renders as its own bullet with its name italicized.
               Use an empty array [] if there's no starting gear (e.g.
               every Major Arcana entry).

   Example of adding a new card's gear:

     gear: [
       { name: "Lucky Coin", desc: "Advantage on the next Check made while holding it." },
       { name: "Patched Cloak", desc: "Armor 1, smells faintly of woodsmoke." }
     ]

   RULES REMINDER (see Chapter V, character creation)
   When a Fatekin receives one of these Fates, they choose either the
   Spell OR the Gift — never both. Starting Gear is only received if
   this card is chosen as the character's starting Fate at Level 1;
   Fates kept from later Fate Draws (advancement) grant only a Spell or
   Gift choice, not gear.
   ===================================================================== */

const FATE_FLAVOR = {
  "The Fool": { jobTitle: null, spell: "Foresight (4): Lasts from dawn to dusk. Before you make any save, roll a d20 — if it's below 10, you pass the save. A foe's first attack against you is always Impaired. Your first attack against a foe is always Enhanced +1d8.", gift: "Empty Mind: You are oblivious to danger, and become immune to any and all mental effects.", gear: [] },
  "The Magician": { jobTitle: null, spell: "Infinity Knot (4): Holds any one spell for use at a later time of your choosing (you must cast both). Uses a simple command word or triggering effect and lasts for its full duration without cost to you.", gift: "Student of Fate: Gain another Feat of your choosing.", gear: [] },
  "The High Priestess": { jobTitle: null, spell: "Divine Clarity (4): Lasts for an hour after a short meditation. While active, your Grace cannot be reduced, and you cannot become Fatigued by Grace Saves.", gift: "Intuition: You always know when someone is lying to you.", gear: [] },
  "The Empress": { jobTitle: null, spell: "Ensorcell (8, Curse): For the next hour, creatures who can understand you become your most ardent followers — they will serve you in any way you please. Inflicting pain on them, directly or indirectly, ends the spell.", gift: "Throne of Bounty: You are able to produce a meal capable of restoring Vigor if you have ingredients at hand.", gear: [] },
  "The Emperor": { jobTitle: null, spell: "Regalia of Fate (4): You conjure a mystical set of armor (Helm and Layers) that forms around your body. It grants Guard 12, restores up to 12 Guard, Armor 3, and makes you invulnerable to non-rare armaments.", gift: "Denier of Doom: You can Deny attacks made against allies without making a fatigue save. You also learn Deny if you don't know it already — if you already know Deny, you instead learn any Feat of your choice.", gear: [] },
  "The Hierophant": { jobTitle: null, spell: "Divine Gate (4): You carve a window into the realm beyond, entreat with the beings there, and seek answers, aid, or succor. Ask and you shall receive.", gift: "Fateful Strike: You learn the Divine Smite feat. When attacking an enemy of your faith, you can use it freely, without a fatigue save.", gear: [] },
  "The Lovers": { jobTitle: null, spell: "Desire (4, Curse, Short-Range): You cause a single target to desire affection, an outcome, or any object of your choosing until dispelled. While affected by this curse, any damage you take, the Cursed creature also takes.", gift: "Guided Hearts: You can focus on your goals, and receive visions, gentle nudges, and premonitions of how to best acquire them — usually resulting in a message received in poetic verse.", gear: [] },
  "The Chariot": { jobTitle: null, spell: "Blade Like Wind (4, Long-Range, Blast): You make a melee attack against any creatures of your choice within the Blast area. Add an additional 1d12 to each attack made.", gift: "Swift Feet: You can move twice a turn. You can always move away from an enemy, even if you lack Guard.", gear: [] },
  "Strength": { jobTitle: null, spell: "Lion's Roar (4, Short-Range, Blast): 2d12 thunder damage attack to each creature in the Blast. Then, for the next minute, your Vigor becomes 20, returning to its previous value after the minute passes.", gift: "Mighty Grip: You can wield two separate Hefty weapons.", gear: [] },
  "The Hermit": { jobTitle: null, spell: "Sanctuary (4): You are shielded from becoming the target of spells or attacks, for as long as you do not attack.", gift: "Guarded Spirit: When you would lose Spirit from effects other than casting spells, you lose half that Spirit and round down instead.", gear: [] },
  "Wheel of Fortune": { jobTitle: null, spell: "Evolved Mind (8): You cause your mind to grow through time rapidly, gaining enhanced Virtue scores for the next hour. Your current Grace and Spirit Virtues temporarily increase by 6, and can go no higher than 19.", gift: "Vizar’s Guard - Once before the start of your next turn, When you deny a melee attack made against you, the enemy attacking takes the Denied dice as an attack after dealing damage. You learn the Deny feat if you do not already know it, if you already know the Deny feat, you learn a feat of your choice. ", gear: [] },
  "Justice": { jobTitle: null, spell: "Avenging Blade (8): For the rest of the day, you can conjure a magical Greatsword (2d10) that can be held with one hand (Hefty).", gift: "Karmic Aura: Allies next to you gain 1 Armor if you attack on your turn. Enemies next to you cannot cast spells.", gear: [] },
  "The Hanged Man": { jobTitle: null, spell: "Time Stop (8, Long-Range, Blast): You stop time for creatures of your choice within the Blast. Time resumes normally after one minute has passed, or if you take an action that would directly harm a creature affected by the Time Stop.", gift: "Shift: You can change the direction of gravity for yourself at a whim. This allows you to fly in an imprecise manner, walk on walls and ceilings, and other such things.", gear: [] },
  "Death": { jobTitle: null, spell: "Word of Ending (8, Single-Target, Short-Range): With a word, you kill one living being. Upon uttering this word, they simply fall dead.", gift: "Soul Ward: You cannot die. When you would die, instead you become a disembodied spirit. You can re-enter your body if it is repaired, but otherwise your body regenerates after an age.", gear: [] },
  "Temperance": { jobTitle: null, spell: "Tempering Chains (4, Single-Target, Short-Range): You chain yourself to another creature. Any Virtue damage they take is halved — you take the other half. This damage cannot be reduced in any way and does not count as an attack. You can also use this to curse an enemy, causing them to take half of the Virtue damage you receive.", gift: "Tempered Vessels: You gain a set of magical chalices. From one stems Suffering, and the other Succor.", gear: [] },
  "The Devil": { jobTitle: null, spell: "Infernal Visage (4): For the next minute you take on a devilish appearance. You gain wings and can fly, as well as natural claw attacks (1d8 each), and take no damage from Fire or Heat sources.", gift: "Dark Inspiration: When you fail a Virtue check, you can choose to attempt it again. Once you have used this feature 3 times, you gain a permanent mark of darkness.", gear: [] },
  "The Tower": { jobTitle: null, spell: "Bolt of Destruction (4, Long-Range): You conjure a devastating bolt of lightning on a single target, dealing 3d10 lightning damage to a creature and 3d12 to an object. Any creature directly adjacent to a target creature also takes this attack.", gift: "Ruin: Your attacks deal double damage to objects, unless they already do so. You can easily break through wooden doors and structures with sheer might.", gear: [] },
  "The Star": { jobTitle: null, spell: "The Living Star (4, Self): For the next hour, you become ethereal, composed of Starlight. At the end of your turns, you can choose to phase out of existence into another realm, returning at the beginning of your next turn. While made of starlight this way, you are immune to non-magical damage.", gift: "Starblessed Mind: You are immune to Psychic damage, cannot be charmed in any way, and always see through illusions.", gear: [] },
  "The Moon": { jobTitle: null, spell: "Azure Radiance (8, Long-Range, Blast): You conjure a glimpse of a mighty Blue Moon. Every creature of your choice in a large-radius Blast takes a 3d12 radiant damage attack. This spell adds an extra 1d12 when attacking Fey or Shapechangers.", gift: "Moonblade: From your arm, at will, you can extend a blade made of Moonlight. It can attack at range, is Hefty, and deals 2d8 radiant damage.", gear: [] },
  "The Sun": { jobTitle: null, spell: "The Aurum-Star (8, Short-Range): You begin to glow with bright sunlight for the next minute. Allies next to you restore 1 Vigor at the start of their turn, and enemies make a Vigor save or become permanently blinded at the start of their turns.", gift: "Fist of Gold: Your fists now deal 1d8 damage each. If you wound an enemy with your fist, you can attempt to Impair them as a free gambit.", gear: [] },
  "Judgement": { jobTitle: null, spell: "Soul's Mirror (4, Self): For the next hour, any magical effect that targets you is reflected back at the source.", gift: "Song of Ending: You can mark a target for death at the beginning of your turn. If they die before the start of your next turn, you become Impassioned.", gear: [] },
  "The World": { jobTitle: null, spell: "Beseech the Outer World (8, Short-Range): You speak a sentence of truth into existence. Your wish then comes true, yet is subject to interpretation from the powers of the outer world.", gift: "The Inner World: You can choose to end any one magical effect on yourself at the start of your turn.", gear: [] },

  "Ace of Wands": {
    jobTitle: "Full-Focus Wandmaker's Apprentice",
    spell: "Spirit-Arrow (Long-Range, Target, Attack): You conjure a magical dart of force from your mind, causing it to strike a target and ignore its armor, making a 1d6 force damage attack.",
    gift: "Wand-Mastery: You can re-roll damage rolls of 1 on your Wand attacks, but must use the new roll.",
    gear: [
      { name: "Custom Wand", desc: "Wielding it in one hand automatically Bolsters your damaging spell attacks by 1. It's also a ranged weapon — pick one: 1d10 Force damage at Long-Range, or 1d8 Force damage in a Short-Range Blast." },
      { name: "Full-Focus Spectacles", desc: "Let you see the flow of magic upon inspection from very short range." }
    ]
  },
  "Two of Wands": {
    jobTitle: "Lundish Foreign Travel Agent",
    spell: "Farview (Touch): For a turn you can conjure a window to a place you have cast this spell before. You can hold the window open so other creatures may enter from either side — but you can never do so yourself without severe complications.",
    gift: "Pilot's License: You are proficient and capable of piloting flying vehicles, both extra- and inter-planar.",
    gear: [
      { name: "Traveler's Guidebook", desc: "You know of three distinct locations where you can receive quality rest, healing, and gear without trouble, at a discounted rate (20%)." },
      { name: "Exotic Gear", desc: "Exotic clothing offering protection (Armor 1) and an interesting foreign item usable as a weapon (1d8)." }
    ]
  },
  "Three of Wands": {
    jobTitle: "Trader Giovanni's Grocery Sourcer",
    spell: "Miraclefruit (Touch): You conjure a delicious, nourishing fruit that restores 1 lost Vigor for whoever eats it within the next hour. Eating more than 3 fruits a day causes toxicity.",
    gift: "You can lick anything and know if it's edible or not — letting you discern the effects of things you imbibe, such as potions, poisons, and toxins.",
    gear: [
      { name: "Preserving Basket", desc: "Keeps anything inside it from spoiling." },
      { name: "Strange Fruits", desc: "Once per Full Rest you gain 2 Uncommon Consumables of your choice, but they take the form of fruits grown in your personal garden." }
    ]
  },
  "Four of Wands": {
    jobTitle: "Grand Illusion Event Planner",
    spell: "Figment (Short-Range, Targeted): You produce a realistic visual, auditory, and sensory illusion within a small Blast. Until the end of your next turn, creatures within it are entranced until harmed or shaken from their stupor.",
    gift: "You are expertly proficient in some sort of performance — choose one: Insult Comedy, Acting, a Musical Instrument, Singing, Acrobatics, or Mock Combat.",
    gear: [
      { name: "Spellkeeper", desc: "An illusion cast with this portable metal box is amplified, lasting up to an hour." },
      { name: "Mindblade", desc: "An illusory dagger (1d6) dealing Grace damage to creatures who believe they're being stabbed by it." }
    ]
  },
  "Five of Wands": {
    jobTitle: "Groupwork Start-Up Founder",
    spell: "Spellfuel: A creature of your choice that you can see can take two actions on their next turn. They cannot move or take any actions on the turn after.",
    gift: "Business License: Spoke-authority to run and conduct a business in Lund. You can access cut-rate business loans, business resources, and most bureaucratic buildings.",
    gear: [
      { name: "G4RD-D0G", desc: "Personal protection armor (Armor 1) — if you take a Mortal Wound it's destroyed and you're left with 1 Vigor if you would have gone lower." },
      { name: "Pen-Wand", desc: "(Hidden, Petty, Short-Range) Delivers a devastating blow with its magically sharpened tip, 1d6 (+1d8 against Outnumbered or Vulnerable foes)." }
    ]
  },
  "Six of Wands": {
    jobTitle: "Needful Things Curio Collector",
    spell: "Magehound: You gain the ability to see and smell magical items and effects for the next hour.",
    gift: "Curse-Resistant: Whenever a Curse is cast on you, roll a Spirit save — if you pass, the Curse has no effect.",
    gear: [
      { name: "Manylocks", desc: "A small, weightless chest that cannot be lockpicked, holding up to 3 non-Bulky items." },
      { name: "Curseblade", desc: "(Cursed — drains 1d6 Vigor on attacks) 2d8, Hefty, drinks blood from wounds." },
      { name: "Curseglove", desc: "(Petty) 1x. Lets the wearer ignore cursed item effects in the gloved hand." }
    ]
  },
  "Seven of Wands": {
    jobTitle: "Marvo's College of the Conscious Coin Academy Debater",
    spell: "Thundermaw: Your voice becomes deep and booming. As an attack, you can scream, dealing 1d6 damage to all creatures within a Blast centered on you.",
    gift: "Intimidation Training: You can win most arguments through sheer intimidation. When you make social checks, you can use Vigor to do so.",
    gear: [
      { name: "Whip-Cane", desc: "2d6, Long, but one-handed." },
      { name: "Debater's Thick Flowing Robes", desc: "(Armor 1) Becomes extremely heavy when wet, making it hard to move." }
    ]
  },
  "Eight of Wands": {
    jobTitle: "Lundish News Network Physical Delivery Courier",
    spell: "Sending: For 10 minutes you can send short messages to another creature you've met before on this plane of existence. They can immediately respond with their own short messages during that period.",
    gift: "Slippery: When you attack, you can always generate one free Move gambit.",
    gear: [
      { name: "Rail-Pass", desc: "Lets you ride any of the Mage-Trams for free." },
      { name: "Swift Boots", desc: "You can always move out of combat, even if you lack Guard." },
      { name: "PPW", desc: "(Personal Protection Weapon) 1d8." }
    ]
  },
  "Nine of Wands": {
    jobTitle: "Critic in Hiding",
    spell: "Disguise: You create an illusory form for yourself lasting up to 8 hours. You can change any visual aspect of your appearance, limited in size change to a couple of inches.",
    gift: "Chameleon: You've developed a near-perfect second identity — with an outfit change and a wig, you can convincingly become this other person. Changing identity takes a Full Rest (one week).",
    gear: [
      { name: "Wizard's Palate Star Guide", desc: "Has information on all the best places in Lund; consulting it lets you locate any specialist service you need or want." },
      { name: "Lockjaw Stilettos", desc: "2x. 1d6, Hidden — if it wounds an enemy, they can't move until the stiletto is removed." }
    ]
  },
  "Ten of Wands": {
    jobTitle: "Rugrunner Transporter",
    spell: "Rugslave: You conjure a magical rug for an hour. It floats up to 10 feet above the ground and can carry up to 500 lb before collapsing, moving at walking speed.",
    gift: "Master-Transporter: You ignore the Bulky property of Armaments (weapons).",
    gear: [
      { name: "Rugrunner Transpo-Suit", desc: "Built-in exoskeleton and hoist straps (Armor 1) — lets you hold a full inventory without losing Guard." },
      { name: "Rugrunner Tinted Bug-Visor", desc: "Protects the face from vermin at high speed (Armor 1) — you take half radiant damage and can't be blinded by light sources." }
    ]
  },
  "Page of Wands": {
    jobTitle: "Starfinder Eldritch Astronomer",
    spell: "Mindlock (Touch): Lasting a day, you can connect up to 5 creatures telepathically, tethered to your mind. While tethered, as an action, you can attempt to psychically influence other creatures — but they can do the same to you. A contested Spirit check lets a creature influence another via a single-sentence command that must be followed, or they take 1d12 Spirit damage.",
    gift: "Star-Blessed Mind: You can move light, unattended objects (up to 5 lb) within Short-Range purely with your mind.",
    gear: [
      { name: "Starfinder's Scopus", desc: "A brass tube of magical glass lenses that let a viewer peer into another reality layered atop the current one." },
      { name: "Robe of Worms", desc: "A robe whose threads are long, silky worms that move constantly, shifting its appearance (Armor 1); destroyed by fire, nourished by magical auras." }
    ]
  },
  "Knight of Wands": {
    jobTitle: "College of Enlightenment Teaching Assistant",
    spell: "Spellmark: Your finger can shoot a stream of colored paint, visible only to you, seen at any distance — even through solid objects — until you dismiss it.",
    gift: "Quick-Study: You can easily discern the nature of magical traps, devices, and auras if you spend time investigating them.",
    gear: [
      { name: "Unfinished Thesis", desc: "Takes 3 weeks to finish; when complete, becomes an Arcana or Oddity of your choice from a list provided by the GM." },
      { name: "Ringshield", desc: "A spectral shield stored within a class ring (Armor 1)." },
      { name: "Staff-Stave", desc: "A wizard staff given to College staff — 1d8, Bulky, usable as a ranged weapon that returns to your hand after striking its target." }
    ]
  },
  "Queen of Wands": {
    jobTitle: "Familyarit Store Manager",
    spell: "Spirit Bell: Conjures a small spiritual version of a mundane beast for a day. It obeys your commands, can share information with you telepathically, and remembers your actions.",
    gift: "Spirit-Tuned: You're in tune with the spirit world — spiritual creatures respect your presence so long as you respect theirs. You roll twice and use the better roll when resisting effects from spirits.",
    gear: [
      { name: "Spirit Cage", desc: "Traps a spiritual creature — like a ghost, specter, or wraith — when it would be destroyed. You can destroy a spirit in the cage to generate a gambit on a turn in which you attack." },
      { name: "Spirit Barb", desc: "This silver spear damages spiritual creatures — 1d8, Hefty, 1d12 versus spirits." }
    ]
  },
  "King of Wands": {
    jobTitle: "Demisign Corpo Estate Lawyer",
    spell: "Appraise-Hole: You can place an item in a small demiplane and receive gold coins of commensurate value in exchange.",
    gift: "Perfect Recall: Your memory is impeccable — you can recall even the most minute details of events within the past month.",
    gear: [
      { name: "Random Arcana & Oddity", desc: "A random Arcana and a random Oddity from a past sale." },
      { name: "Ultralight SVAROG-brand Mailvest", desc: "(Armor 1)" }
    ]
  },

  "Ace of Cups": {
    jobTitle: "Wetwork Janitor",
    spell: "Scentser: Conjures a cloud of thick, opaque smoke that removes grime and noxious fumes, leaving creatures and objects clean and scented. You choose the scent on cast.",
    gift: "Frogman: You have a swim speed and can hold your breath for up to 5 minutes.",
    gear: [
      { name: "Janitor's Scoop", desc: "(1d8, Long) Sends liquids it scoops into a demiplane somewhere." },
      { name: "Union Coveralls", desc: "(Armor 1) No liquid can penetrate your wetwork suit." }
    ]
  },
  "Two of Cups": {
    jobTitle: "Experimental Barista",
    spell: "Dead-Water: Transmutes a thimble's worth of normal water. It's indistinguishable from water, but a mouthful (or similar volume injected) causes death within seconds (1d6 poison).",
    gift: "Alchemical Savant: You can produce any Common Consumable item for half the cost — the process takes one day.",
    gear: [
      { name: "Test Tube of Magic Adhesive", desc: "Sovereign glue, 1 use." },
      { name: "Steam-Wand", desc: "1d6, Short-Range Blast of hot steam." }
    ]
  },
  "Three of Cups": {
    jobTitle: "High-Class Mixologist",
    spell: "Befuddling Cruor: Transmuted from aniseed liquor, wild strawberry moonshine, and a bit of blood. Imbibed, it causes long-lasting Confusion; ignited, it creates a Blast of fire (1d6) that temporarily blinds — and Impairs — anyone it wounds.",
    gift: "Slinger: Adept in the art of the toss. When you attack with a thrown weapon, such as a bomb, you re-roll 1s and 2s on damage rolls, but must use the new rolls.",
    gear: [
      { name: "Muddler's Club", desc: "1d4 — if it causes a wound, the target is Impaired on their next turn." },
      { name: "Barfight Experience", desc: "1d6 damage with fists (each)." },
      { name: "Corpse Reviver", desc: "Aged Cocktail — lemon, sweet wine, gin. Brings back the dead, literally. One use, restored at the end of an Age." },
      { name: "Golden Serpent", desc: "Aged Cocktail — cinnamon liqueur, gold leaf, mint, apple juice, absinthe. Causes powerful hallucinations. Restored at the end of an Age." },
      { name: "Navigation", desc: "Aged Cocktail — black rum, lime, orange liqueur, cacao bitters. The drinker can always find their way home, no matter how drunk they get. Restored at the end of an Age." }
    ]
  },
  "Four of Cups": {
    jobTitle: "Material Mystic",
    spell: "Break (Long-Range, Blast): A sudden, loud ringing noise painfully erupts — 1d10 force damage (2d10 to inorganic targets like stone or metal).",
    gift: "Bludgeoner: When you deal damage with a blunt weapon or the force damage type, you physically hurl the target backward a short distance.",
    gear: [
      { name: "Ceramic Longstaff", desc: "1d10, Bulky." },
      { name: "Cerakote Bandolier", desc: "(Armor 1) Holds up to 10 bombs or flasks, safe from damage or accidental triggering while stored." },
      { name: "Metalminded", desc: "You can telekinetically manipulate unheld magnetic items." }
    ]
  },
  "Five of Cups": {
    jobTitle: "Fringe Investigator",
    spell: "Thoughtsight: If you concentrate, you can visibly see people's emotions and thoughts. While doing so, you see into another realm, cannot see the physical world, and are blind to it.",
    gift: "Sharpened Mind: You instinctively notice hidden traps, secret doors, and active illusions within Short-Range. Your saves against mental manipulation gain Advantage.",
    gear: [
      { name: "Collapsible Wand", desc: "1d6 range, Hidden, requires a Grace save to open under pressure." },
      { name: "Shadowcloak", desc: "While worn, you can pass strangers unnoticed — though anyone who's already met you can still notice you." },
      { name: "Hunger Clamp", desc: "Interrogation Device. Clips onto loose skin, causing the victim ceaseless hunger they'll do anything to sate; no ill effect from over-eating, but they don't starve faster than normal." }
    ]
  },
  "Six of Cups": {
    jobTitle: "Lundercity Smuggler",
    spell: "Choking Grasp (Short-Range, Target): Silent, 1d6, ignores Armor. Requires the target to need air to live.",
    gift: "Bomb Savant: You pay half price for bombs, since you only need the ingredients. Start with 1 Sparkbomb, 1 Haywire Bomb, and 1 Magebomb.",
    gear: [
      { name: "Streetwise", desc: "Skilled at procuring and selling, and can always find a contact in Lund." },
      { name: "Lord of Pies-branded Clowning-Gun", desc: "Good for launching pies, better at launching bombs — can use bombs at Long-Range." }
    ]
  },
  "Seven of Cups": {
    jobTitle: "Wizard Milk Gum Chef",
    spell: "Gumbuster (Short-Range, Target): You conjure a thick gummy blob at a point you can see; it can stick people and objects in place until the end of your next turn. Quite delicious to chew. You choose the color and flavor on cast.",
    gift: "Hearty Feast: Three times per day you can spend an hour cooking a hearty meal that restores 1d6 Spirit to up to 6 companions.",
    gear: [
      { name: "Chef Hands", desc: "Enchanted with fire resistance — can't be harmed by normal cooking temperatures." },
      { name: "Sauce Pan", desc: "(Armor 1) 1d4 as a shield or 1d6 as a weapon." },
      { name: "Wizardglass Stock Pot", desc: "(Armor 1) Used as a helm." },
      { name: "Chef-Knife", desc: "Razor sharp, 1d8." }
    ]
  },
  "Eight of Cups": {
    jobTitle: "Pudding Pit Deepcleaner",
    spell: "Gills (Self): You can breathe and swim underwater as if it were natural to you.",
    gift: "Tough Hide: You gain resistance to an elemental damage type of your choice. ",
    gear: [
      { name: "Pudding Glove", desc: "1d6 acidic slime, ignores Armor — but destroys it." },
      { name: "Pudding Pouch", desc: "A bag that opens to a demiplane full of caustic puddings that eat anything tossed in; the opening can stretch to about 3 ft in diameter with effort." }
    ]
  },
  "Nine of Cups": {
    jobTitle: "(LAMP) Lake Arcane Magic Police",
    spell: "Heartwrench (Touch): Make an unarmed attack (1d4) — if it wounds the enemy, you rip one of their hearts out, if they have one.",
    gift: "Mage-Defense: When a creature casts a spell within touch range, you can strike them reactively (once a turn). If you deal Virtue damage, their spell's cost is doubled.",
    gear: [
      { name: "Out-of-Service LAMP Badge", desc: "Still convincing, though technically illegal to use while suspended; gets you into places you shouldn't be." },
      { name: "LAMP Baton", desc: "1d8, can light up a bit or emit a high-pitched whistle." },
      { name: "LAMP Uniform", desc: "(Armor 1) You look like police." }
    ]
  },
  "Ten of Cups": {
    jobTitle: "Violet Crown Performer",
    spell: "Glammer: You can produce a convincing visible and auditory illusion big enough to fill a stage, lasting up to a minute.",
    gift: "Inspiring Presence: Once per encounter, you can force an ally to re-roll any one die.",
    gear: [
      { name: "Starsong", desc: "An excellent singing voice, and can adeptly play an instrument of your choice — your voice is enchanting to people and animals." },
      { name: "Celebrity", desc: "People know you, and admire you; favors are easy to get." }
    ]
  },
  "Page of Cups": {
    jobTitle: "Noble in Waiting",
    spell: "Noble Guard (Self): You conjure spectral armor granting +1 Armor for the next minute. If you take Virtue damage while this spell is active, it ends.",
    gift: "Duel Training: You and your team always go first in Duels. Additionally, your first Bolster gambit of an encounter counts as +2 to damage.",
    gear: [
      { name: "Landowner", desc: "You own property somewhere, but haven't been able to find it on a map." },
      { name: "A Proper Sword", desc: "2d10, Bulky." }
    ]
  },
  "Knight of Cups": {
    jobTitle: "Museum of Oddities Docent",
    spell: "Chalice of Oil (Short-Range, Blast): Pour forth a blood-like oil covering a Blast. Anyone moving or standing on it makes a Grace save or falls and can't move next turn.",
    gift: "Odd-Minded: You can discern the effects of most any Oddity with ample time to investigate — but there's always a chance it gets set off.",
    gear: [
      { name: "Ruby Rod of the Forge", desc: "Sends a short-range ruby laser at a metal object, making it instantly hot to the touch — 1d8 damage, ignoring Armor, if it can't be dropped. The Ruby Rod also heats up the same way." },
      { name: "Good-Stuff", desc: "An extremely satisfying but dangerous backscratcher, 1d8." }
    ]
  },
  "Queen of Cups": {
    jobTitle: "Grand Illusion Model",
    spell: "Glowmist (Long-Range, Blast): You conjure a Blast of glowing spores. Creatures and objects affected glow in the dark and cannot be invisible.",
    gift: "True Beauty: You're attractive without illusions or magic, with an easier time getting what you want from people who are interested in you. All Charms have Advantage/Disadvantage where applicable.",
    gear: [
      { name: "Blademate", desc: "A fabulous outfit with a twin set of hidden retractable blades (1d8 each, used in tandem)." },
      { name: "Dastardly Heels", desc: "Built-in jumping capability allows a 10 ft vertical leap; also functions as a weapon, 1d6, Hidden." }
    ]
  },
  "King of Cups": {
    jobTitle: "Cleric of Salt",
    spell: "Agitation (Long-Range, Blast): Compel enemies within sight to attack you until the end of your next turn. They lose 1d6 Spirit if they choose to attack someone else instead.",
    gift: "Captain: You command, or have commanded, a sailing vessel in your past or present — you sail adeptly, and your attacks are Enhanced (+1d8) on sailing vessels.",
    gear: [
      { name: "Sceptre of Saltstone", desc: "1d8, Hefty, 1d12 against freshwater creatures." },
      { name: "Mariner's Grit", desc: "Armor 2 when not wearing any armor, Armor 4 when it's storming." }
    ]
  },

  "Ace of Swords": {
    jobTitle: "DOLA — Avant Guardsman",
    spell: "Insulate Flesh (Self): Take half Vigor damage from Heat, Ice, Acid, or Electricity for the next minute.",
    gift: "Battle-Pose: You can use a gambit to strike a Battle Pose until the end of your next turn — while posed you can't use your Move, but all your attacks increase by one die size, to a maximum of 1d12.",
    gear: [
      { name: "Avant Guard Edge", desc: "2d6, Hefty, crafted from ceramics and shaped to match exquisite new fashion." },
      { name: "Avant Guard Wargown", desc: "(Armor 1) A fanciful ball gown or similar style outfit; not magnetic." }
    ]
  },
  "Two of Swords": {
    jobTitle: "Unnatural Enhancements Walking Advertisement",
    spell: "Black Nimbus (Blast): Conjure a roiling cloud of dark fog that envelops all creatures in a Blast centered on you, rendering them Blind and Deafened.",
    gift: "Truesight-Upgrade: Your enhancement has been enhanced. You now see through illusions, can see magic auras, and can briefly see into other planes if you focus.",
    gear: [
      { name: "Augmental Blindeyes", desc: "Grants Blindsight when you couldn't normally see, plus limited zoom capability." },
      { name: "Augmented Blade", desc: "Grants a 1d8 hidden weapon; you can't be disarmed, but your appendage is considered magnetic." }
    ]
  },
  "Three of Swords": {
    jobTitle: "Bleeding Hearts Gang Member",
    spell: "Spellflare (Long-Range, Target): A bright ball of energy fires a trail of light into the sky, revealing your location to friend or foe. If fired at an enemy, it counts as a 1d6 radiant attack.",
    gift: "Skirmisher: If you move and attack in the same turn, your Armor becomes 3 (if not already higher) until the start of your next turn.",
    gear: [
      { name: "Fancy Hat", desc: "(Armor 1) Can be used as a weapon (losing its Armor if you do), has metal plates sewn in, 1d6 Hidden." },
      { name: "Bottle of Orphan-Ruin", desc: "6 oz of a sweet, milky drink — 1 oz pacifies any unease, 2 oz causes deep sleep, 3 oz causes eternal sleep." }
    ]
  },
  "Four of Swords": {
    jobTitle: "Thrallmart Corpsekeeper",
    spell: "Extract Essence (Touch): Drains a corpse of blood, creating a pill that grants a single use of one randomly determined special property the being had in life.",
    gift: "Death-Ward: When you would die outright, you instead receive a Mortal Wound. If you'd receive a Mortal Wound from an attack, you ignore it until the end of combat.",
    gear: [
      { name: "Auto-Auger", desc: "Digs holes quickly, maims quickly as well — 2d6, Bulky." },
      { name: "Sixth Sense", desc: "You can sense a corpse or other dead/undead thing up to a room away." }
    ]
  },
  "Five of Swords": {
    jobTitle: "Iron-Instinct Bladepicker",
    spell: "Smeltshield (Self): You manifest a shield of flame for the next minute (Armor 1, 1d6) — fire can't hurt you while the shield is active.",
    gift: "Tempered Strikes: Each time you wound an enemy with a weapon attack, add +1d6 when using that weapon — this stacks until the end of combat.",
    gear: [
      { name: "Iron-Instinct Gauntlets", desc: "Usable as a weapon, 1d6 each." },
      { name: "Faintly Magnetic", desc: "You can sense magnetic metal and magnetic fields; magnetic effects are difficult for you to resist." }
    ]
  },
  "Six of Swords": {
    jobTitle: "Lundercity Resource Hunter",
    spell: "Godsgrip (Self): For an hour, you can't be caused to lose your grip unless you choose to, and can climb sheer surfaces using your hands.",
    gift: "Salvager: You can use nearly any object as an improvised weapon (1d6 base, varies by item). When you wound with an improvised weapon, you generate a free gambit of your choice.",
    gear: [
      { name: "Navigator's Instinct", desc: "You are a skilled navigator and cannot get lost through non-magical means." },
      { name: "Squidhook", desc: "1d8, Hefty, 1d12 against cephalopods." },
      { name: "Salvage Kit", desc: "50 ft of steel cable worn around the body (Armor 1), tie-downs, and SVAROG-brand salvage hooks." }
    ]
  },
  "Seven of Swords": {
    jobTitle: "Sevenswords Salesman",
    spell: "Charm (Short-Range, Target): A creature you can see treats you as a friend for the next hour. When the hour is up, you become their hated enemy.",
    gift: "Silver-Tongue: An adept salesman — your eloquent lies are nearly always believed, no matter how ludicrous they might seem.",
    gear: [
      { name: "Strongwands WandBlaster", desc: "(PPW) 1d6, +1d6 at point-blank, silent." },
      { name: "Sevenswords Uniform", desc: "(Armor 1) Armor sewn in, can hide up to 3 non-Bulky weapons. People don't like you." }
    ]
  },
  "Eight of Swords": {
    jobTitle: "Bailed Lundish Prisoner",
    spell: "Filch (Short-Range): A visible item that isn't held or worn teleports to your hands, with a loud popping noise.",
    gift: "Pickpocket: Especially gifted at picking pockets, nearly always going unnoticed by common people.",
    gear: [
      { name: "Hooch Recipe", desc: "Make 1 flask of strong, disgusting hooch per day — restores 1d4 lost Spirit, also functions as a firebomb, 1d6 Blast." },
      { name: "Shiv", desc: "(Petty) 1d6, Hidden." },
      { name: "Stolen Parts", desc: "You've crafted your own prototype Oddity — it doesn't always work properly." }
    ]
  },
  "Nine of Swords": {
    jobTitle: "Haunted Lundish Prison Guard",
    spell: "Erupted Limb (Self, Touch): You gain an extra arm for the next minute, usable against other limbed creatures to cause a limb to erupt somewhere unpleasant, leaving them Exposed until the end of your next turn, when the limb withers and falls off.",
    gift: "Haunted Touch: You've touched some great, monstrous thing, granting you strange power. If you touch a limb, you can break the bone beneath — you can break necks the same way.",
    gear: [
      { name: "Velvet Gloves", desc: "(Petty)" },
      { name: "Tactile Phrenology", desc: "An enhanced sense of touch, letting you sense moral and mental qualities by feeling a person's head." },
      { name: "Guard-Baton", desc: "1d8, non-lethal, very painful." }
    ]
  },
  "Ten of Swords": {
    jobTitle: "Gorescrubber",
    spell: "Devilbreath (Short-Range, Blast): You breathe a cloud of acrid smoke that melts away organic matter before quickly dissipating — 1d10 necrotic Blast.",
    gift: "Gorespiration: When your attack results in a critical wound, you can immediately make another attack against any creature in range. (Feats that say 'attacks this round' still apply.)",
    gear: [
      { name: "Long-Handled Wirebrush Gorescrubber", desc: "1d10, Bulky." },
      { name: "Safebreather", desc: "Protects from airborne toxins." },
      { name: "Egodeath Protective Suit", desc: "(Armor 1) Immune to attacks from Simulacra." }
    ]
  },
  "Page of Swords": {
    jobTitle: "Realflesh Duellist",
    spell: "Bodyswap (Touch): You switch bodies with a creature you touch. If one body dies, the other dies as well.",
    gift: "Battlerage: Choose to enter Battlerage on your turn — lasting the entire combat, you now deal double Virtue damage, but also receive double Virtue damage.",
    gear: [
      { name: "Vigor Pills", desc: "A prescription for 3x; taking one in the morning increases your Vigor for the day by 1d6 (more than one isn't recommended; refills available from a specialized pharmacy)." },
      { name: "Adrenal Augmentation", desc: "Once per day, ignore the effects (but not the damage) of a Mortal Wound — going to 0 Vigor still kills you." }
    ]
  },
  "Knight of Swords": {
    jobTitle: "Debt Collector",
    spell: "Babbler: A creature must loudly and clearly repeat everything they think until you sever the connection.",
    gift: "Treasure-Sense: You can smell the presence of objects you'd find valuable, up to a room away.",
    gear: [
      { name: "Repo-Man's Friend", desc: "(Armor 1) A suit of plate armor with anti-debt-dodger properties — can't be harmed by citizens of Lund delinquent on debt payments." },
      { name: "Debt-Dodger's Foe", desc: "An ornate club with anti-debt-dodger properties, 1d8, strikes fear into debt-dodgers — wounding one leaves them helpless and immobilized." }
    ]
  },
  "Queen of Swords": {
    jobTitle: "Licensed Executioner",
    spell: "Shroud (Touch): A creature you touch is invisible until they move. Staying invisible longer than a day causes the creature to fade into a shadowy realm.",
    gift: "Crackshot: Your ranged weapon and spell attacks ignore any cover that isn't full cover; ranged attacks can be made through full cover, but at one lower damage die.",
    gear: [
      { name: "License to Kill", desc: "One person per day, non-transferable." },
      { name: "Strongwands Executioner-MkIII", desc: "2d10, Bulky, Long-Range, Slow — held with two hands, fires a concentrated blast of magic at high speed." },
      { name: "Haunted Dependency", desc: "Terrible dreams, hard to sleep without a sedative; continued use grants high tolerance to sedative effects." }
    ]
  },
  "King of Swords": {
    jobTitle: "Veterans of Old Wars Advocate",
    spell: "Soulmelter (Short-Range, Blast): 1d8 Blast — creatures killed by this spell have their souls destroyed as their entire being melts into an oily, mucilaginous goo.",
    gift: "Warblooded: Your immune system and physical body are hardened — completely immune to mundane diseases and paralyzing toxins, and your Guard increases by 3.",
    gear: [
      { name: "Old War Gear", desc: "Lead Vest (Armor 1), Cerakote Helmet (Armor 1), Trenchwand (1d8, Bulky, Blast, Short-Range)." },
      { name: "Old War Bond", desc: "Access to Veterans' Benefits from VOW, SVAROG, and Strongwands." },
      { name: "Old War Pocket-Rocket", desc: "2d10, single target, ranged, one-shot." }
    ]
  },

  "Ace of Pentacles": {
    jobTitle: "Daliance Dealer",
    spell: "Lightdie: Your die emits bright light until you dismiss it. You can choose which creatures perceive this light when you cast it.",
    gift: "Lucky Charm: Once per day, per player — when you or an ally fails a Save, you can force them to re-roll it.",
    gear: [
      { name: "Gambler's Gift", desc: "A magic die that grants you favor — at sunset, choose a number; when a die rolls that number, adjust it to any other value on that die, a number of times equal to the chosen number (a new number is chosen each sunset)." },
      { name: "Gambler's Farewell", desc: "Turn any roll into a 50/50 chance of success or failure — fail, and you immediately suffer a Mortal Wound and your Vigor is set to 0; a second Mortal Wound while you already have one kills you." }
    ]
  },
  "Two of Pentacles": {
    jobTitle: "Trove Pawnbroker",
    spell: "Sling (Short-Range, Target): Telekinetically throw any melon-sized or smaller object with enough force to injure — 2d6 single-target attack.",
    gift: "Haggler : You always pay at least 10% less than listed prices. Sometimes even less.",
    gear: [
      { name: "X-Ray Monocle", desc: "Sees through walls if pressed against one." },
      { name: "Ornate Sword", desc: "2d10, Bulky." },
      { name: "Crank Bombs", desc: "3x." }
    ]
  },
  "Three of Pentacles": {
    jobTitle: "Cleric of the Gilded Rose",
    spell: "Golden Prayer (Self, Blast): Until the end of your next turn, you and allies within a Blast add an extra 1d8 to all attacks.",
    gift: "Golden-Aura: Allies adjacent to you add an extra 1d4 to all attacks. When you receive a Mortal Wound, all adjacent allies gain 6 Guard, and your aura's bonus die changes to 1d12 for the rest of the combat.",
    gear: [
      { name: "Gildguarders", desc: "Gilded Helm (Armor 1), Gilded Shield (Armor 1), and a Golden Rose-Head Mace (1d8, Hefty). Your items attract attention from strangers." }
    ]
  },
  "Four of Pentacles": {
    jobTitle: "Family Copper Manager",
    spell: "Alarm Snare (Touch): Place an invisible magical snare over a doorway or entrance that mentally alerts you when it catches a creature — unavoidable unless seen, and Impairs and immobilizes anyone caught for a turn.",
    gift: "Perceptive: It's very difficult for common people to hide or steal from you — you generally notice traps and hidden creatures before anyone else.",
    gear: [
      { name: "Self-Defender", desc: "A magic shield (Armor 1) that emits paralytic bolts of static (1d6) — if it wounds an enemy, they lose 1d8 Grace." },
      { name: "Menacing Aura", desc: "You can intimidate most people capable of being intimidated." }
    ]
  },
  "Five of Pentacles": {
    jobTitle: "Automaton Dodgerguide",
    spell: "Beastsense (Self): You gain extraordinarily keen senses until dismissed — smell, sight, and hearing enhanced, but you take on animalistic features that persist for as long as the spell is active.",
    gift: "Streetwise: You can't be caught by surprise or ambushed. Your movement speed is unmatched — you can automatically outrun any foe in a footrace unless cornered.",
    gear: [
      { name: "Coldcloak", desc: "(Armor 1) Thick, rubbery cloak made from Salamandrake hide, making you appear cold-blooded to the heat-seeking automatons of Lund." },
      { name: "Magshiv", desc: "1d6, Hidden, +1d12 extra against a helpless target — wounding a construct disables it for the next minute so long as the Magshiv stays lodged in it." }
    ]
  },
  "Six of Pentacles": {
    jobTitle: "Dungeon Kings Bookie",
    spell: "Pocket (Self): You open a tiny demiplane capable of holding 3 inventory slots' worth of items, freely moved in or out while it's open.",
    gift: "Dungeon-Veteran: You have darkvision, and become Impassioned when surviving a dungeon or dungeon-like expedition.",
    gear: [
      { name: "EotM Gold Shield Gauntlet", desc: "(Armor 1, 1d6) Engraved with your name and signed by your ex-coworkers." },
      { name: "Dark Dice", desc: "Two skull-marked dice of bone that produce a random Arcana effect when rolled — excellent entertainment." },
      { name: "Spare Cash", desc: "An extra 200x." }
    ]
  },
  "Seven of Pentacles": {
    jobTitle: "Lundish Arboretum Goldbush Tender",
    spell: "Nourishing Syrup (Touch): You conjure a thick, sweet syrup that causes plants to grow rapidly and suddenly within seconds, wherever it's spread. Imbibed, it causes 1d6 Vigor loss and the drinker coughs up moss.",
    gift: "Green-Seer: You innately understand plants' needs and desires.",
    gear: [
      { name: "Master-Rake", desc: "(1d10, Long, Bulky) Adds 1d12 against plants or plantlike creatures." },
      { name: "GardenGear Coveralls, Gloves, and Boots", desc: "(Armor 1) Protects from thorns, nettles, poisons, and other plant hazards." }
    ]
  },
  "Eight of Pentacles": {
    jobTitle: "Tool School Professor",
    spell: "Mend (Touch): Fixes any broken inorganic object smaller than a suit of armor within seconds — but always leaves it weaker than before.",
    gift: "Skilled Laborer: Capable of using nearly all mundane tools, with Advantage on checks made using tools to accomplish tasks.",
    gear: [
      { name: "Tool School Tools", desc: "Hammer (1d8), Chisel (1d6)." },
      { name: "Spellsaw", desc: "Settings for different materials — cuts organic matter in seconds, harder materials in minutes; usable as a weapon, 2d8, Slow, Bulky." }
    ]
  },
  "Nine of Pentacles": {
    jobTitle: "Wylderness Zookeeper",
    spell: "Speak with Animals (Self): While active, you cannot speak with non-animals.",
    gift: "Beast-Handler: You have a way with beasts and animals — generally calm around you, and typically coaxed into desired behaviors.",
    gear: [
      { name: "Tranquilizing Blowdart", desc: "1d6; if it wounds, the target makes a Vigor save or falls asleep." },
      { name: "Feeding Hand", desc: "A steel claw in place of a hand, 1d6, very strong grip." }
    ]
  },
  "Ten of Pentacles": {
    jobTitle: "Copper Paddock Franchise Owner",
    spell: "Wizard-Eyes (Self): Translocate your eyes to another place you've been before — they function without detriment, but are effectively in the other place until dismissed.",
    gift: "Profitable Enterprise: You gain an Uncommon item of your choice every season. (gain one when receiving this gift)",
    gear: [
      { name: "Franchise Stake", desc: "You're a stakeholder in a Copper Paddock franchise; it makes you money so long as you keep up with its affairs (100x per week)." },
      { name: "Copper Paddock Thiefpaddle", desc: "1d6; ignores non-insulated armor. An electrified paddle for smacking thieves." }
    ]
  },
  "Page of Pentacles": {
    jobTitle: "Magimart Manager-in-Training",
    spell: "Recall: You can translocate yourself, anyone you're touching, and your possessions to a specified Recall Center you've seen before. (You automatically know your Magimart Training Recall Center.)",
    gift: "Magimart Manager Defense Training: You're immune to fear effects — you've seen it all.",
    gear: [
      { name: "We're a Family Here", desc: "A 40% Magimart discount so long as you continue your training program." }
    ]
  },
  "Knight of Pentacles": {
    jobTitle: "Wump Guard",
    spell: "Animation Wax (Touch): You rub a magically conjured oil into objects, bringing them to life for the next hour — they serve you, unless there's more than one alive at once.",
    gift: "Mockery: You're not entirely human — you don't require air, food, water, or sleep, but can still put on a convincing imitation of such things.",
    gear: [
      { name: "Salvaged Wump Gear", desc: "Rough-Shod Mail (Armor 1), Recycled Plate (Armor 1), Bent Helm (Armor 1), and a Maul (2d10, Slow) — all pulled from the Wump." }
    ]
  },
  "Queen of Pentacles": {
    jobTitle: "Lundish Traders Outpost Brand Ambassador",
    spell: "Slowfall (Self, Targets): For up to an hour, you and up to 3 other creatures you can see descend at a safe rate while this spell is active.",
    gift: "Natural Climber: A climb speed equal to your walking speed, and can climb near-sheer surfaces with effort.",
    gear: [
      { name: "LTO Climber's Gear", desc: "Shell-Helm (Armor 1), Rock-Spike Gloves (Armor 1, 1d6), and a Vinehook — usable as a whip (1d6) or a sturdy climbing rope that secures itself or others and can move on its own." }
    ]
  },
  "King of Pentacles": {
    jobTitle: "Demimanors Real-Estate Agent",
    spell: "Manykey (Touch): Opens any non-magical lock.",
    gift: "Legal Acumen: Trained in the Laws of Lund's many Spokes — you know what is and isn't legally acceptable, and can often find a loophole to get out of a precarious legal jumble.",
    gear: [
      { name: "Magnificent Sceptre of Real-Estate Licensure", desc: "2d8, Hefty; can deal Spirit damage to the unhoused." },
      { name: "Magnificent Commissions", desc: "Fine robes with inlaid plates (Armor 1) — everyone wants to touch your robe." }
    ]
  }
};
