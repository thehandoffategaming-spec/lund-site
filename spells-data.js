/* =====================================================================
   WELCOME TO LUND — SPELL DATA
   =====================================================================
   Edit this file directly to add, remove, or change spells. arcana-tables.html
   reads this file and builds its tables from it automatically — you never
   need to touch the HTML.

   STRUCTURE
   Each suit (wands / cups / swords / pentacles) is an array of spell
   objects. Each spell object has exactly four fields:

     name:   the spell's name ONLY — no qualities in parentheses here.
     tags:   an array of short quality strings, e.g. ["Medium-Range", "Blast (Small)"].
             This is where Range, Blast, Curse, targeting, and similar
             qualities go — they render as their own badges in the table,
             separate from the name. Use [] if a spell has none.
     cost:   the Virtue-point cost to cast it. Must be one of: 0, 2, 4, 8.
             (0 displays as "Free". See Chapter I, Spellcasting, for what
             each tier implies about a spell's power level.)
     effect: a one- or two-sentence description of what the spell does.

   Example of adding a new spell:

     { name: "New Spell Name", tags: ["Long-Range", "Blast (Large)"], cost: 4, effect: "What it does, in plain terms." },

   A few tags (Self, Target, Touch, Medium-Range, Long-Range, Extreme-Range,
   Blast, Curse, Attack, Virtue Loss) match terms already defined in
   Chapter I and get a hover tooltip automatically — just spell them the
   same way shown above and it'll be picked up.
   Any other tag (Line, Curse/Cure, etc.) still displays as a badge, just
   without a tooltip.

   IMPORTANT — SYSTEM COMPATIBILITY
   This system has no DCs and no flat "+X to a check" bonuses. All Checks
   and Saves are roll-under-your-Virtue (see Chapter I, Saves & Checks).
   When writing a new spell's effect, avoid:
     - "DC 15" or any fixed difficulty number
     - "+2 to your next check" or similar flat bonuses
     - skills that don't exist in this system (only Vigor, Grace, and
       Spirit exist — there is no "Craft" or similar skill)
   Instead, lean on mechanics the system already has:
     - Advantage / Disadvantage (roll 2d20, keep the lower/higher)
     - A named Virtue Save or Check (Vigor / Grace / Spirit)
     - An Opposed Check against the caster's own Virtue
     - Virtue Loss, Enhanced attacks, Blast, or Curse — all
       defined in Chapter I
   ===================================================================== */

const SPELLS_DATA = {
  wands: [
    { name: "Colorflame", tags: ["Medium-Range", "Blast (Small)", "Attack", "Self"], cost: 2, effect: "d8 Blast of fire, medium-range fan, from self. Anything it wounds is blinded until the end of combat. Flames created are vibrantly colored, short-lived, and spiteful of the caster if not given fuel." },
    { name: "Stygian Mist", tags: ["Long-Range", "Blast (Large)", "Target", "Virtue Loss"], cost: 2, effect: "Blast, at long range, causes 1d4 Spirit loss to any creature breathing within. The mist lingers for a round after cast." },
    { name: "Heat Sponge", tags: ["Long-Range", "Blast (Small)", "Attack", "Target"], cost: 2, effect: "Remove heat from an area in a Blast at range; 1d8 cold attack to anything within; anything it wounds suffers a STOP gambit automatically. You become very sweaty after casting — continued use could lead to heatstroke." },
    { name: "Thunderclap", tags: ["Medium-Range", "Blast (Small)", "Attack", "Self"], cost: 2, effect: "1d8 thunder Blast directly in front of you, throws objects and wounded creatures backwards. Very loud — continued use could lead to hearing loss." },
    { name: "Stormblade", tags: ["Long-Range", "Blast (Small)", "Attack"], cost: 2, effect: "1d8 lightning Blast on a target. Can be cast on a weapon with a touch, adding this spell's effect to its next attack. The wielder becomes the target of all lightning effects while active." },
    { name: "Witherwave", tags: ["Long-Range", "Blast (Large)", "Self", "Attack"], cost: 2, effect: "Emit a warbling undulation that causes flesh to slough from bone. Make an Attack dealing 1d6 necrotic damage to creatures within a large radial Blast emanating from you. If this damage would cause a Mortal Wound, the creature's flesh and muscle fall away from their skeleton, which turns black and brittle." },
    { name: "Knitting of Bone", tags: ["Touch"], cost: 2, effect: "With a touch you forcefully fuse someone's bones together, healing a break." },
    { name: "Bonelock", tags: ["Touch", "Attack", "Curse"], cost: 2, effect: "Make a 1d8 Attack with a touch. If you wound, you fuse a target's joints (elbows, knees) so they can no longer move until the Curse is lifted." },
    { name: "Osteous Maw", tags: ["Long-Range", "Curse", "Target"], cost: 4, effect: "A target at range feels their teeth begin to grow at an uncontrollable rate for the next minute, curling back into their own jaw. They take an extra 1d6 on attacks made against them and cannot speak or cast verbal spells." },
    { name: "Strikethief", tags: ["Medium-Range", "Curse", "Target"], cost: 2, effect: "You steal the momentum from an enemy's attack. Remove one Attack die from their next melee attack, and your next melee attack adds the Attack die they would have used, until you cast this spell again." },
    { name: "Blood Crystals", tags: ["Touch", "Curse", "Virtue Loss"], cost: 4, effect: "With a touch, you seed a target's bloodstream with growing crystal shards. They immediately lose 1d6 Vigor, then lose 1d4 more at the start of each of their turns until the Curse is lifted." },
    { name: "Cthuggic Bolt", tags: ["Long-Range", "Attack"], cost: 2, effect: "A writhing bolt of impossible geometry lances toward your target. Make an Attack using 1d10; any creature it damages must pass a Spirit save or become Shaken." },
    { name: "Charging Flame", tags: [], cost: 2, effect: "Wreathe an ally's weapon in fire. Their next three Attacks are Enhanced with a fire d8." },
    { name: "Fire Bolt", tags: ["Long-Range", "Attack"], cost: 0, effect: "A mote of crackling flame leaps from your hand. Make an Attack dealing 1d8 fire damage. If it wounds, the target is set alight." },
    { name: "Light", tags: ["Long-Range"], cost: 0, effect: "An object you can see glows brightly like a torch for 1 hour, or you create up to four torch-sized floating lights that move at your command to illuminate paths." },
    { name: "Shocking Grasp", tags: ["Touch", "Attack"], cost: 0, effect: "Lightning delivers a shock. Make an Attack dealing 1d10 lightning damage." },
    { name: "Eldritch Blast", tags: ["Long-Range", "Attack"], cost: 0, effect: "A beam of crackling purple energy streaks toward a creature. Make an Attack dealing 1d8 force damage. If it wounds, the target is pushed a Short distance away." },
    { name: "Thaumaturgy", tags: ["Medium-Range"], cost: 0, effect: "Manifest minor wonders: boom your voice 3x louder flicker flames or slam doors shut." },
    { name: "Sacred Flame", tags: ["Long-Range", "Attack"], cost: 0, effect: "Bright radiance descends upon a target. Make an Attack dealing 1d8 damage that completely ignores the target's physical cover." },
    { name: "Guidance", tags: ["Touch"], cost: 0, effect: "Touch an ally blessing them with luck. Their next save has advantage." },
    { name: "Produce Flame", tags: ["Self", "Attack"], cost: 0, effect: "A flickering flame appears in your hand shedding light. It can light a candle or set unattended kindling alight from anywhere in your zone, or be hurled at medium range as an Attack dealing 2d6 fire damage." },
    { name: "Magic Missile", tags: ["Long-Range", "Attack"], cost: 2, effect: "Three glowing darts of force unerringly strike targets. Each dart is an Attack dealing 1d4 force damage, ignores armor, and can be split to multiple targets." },
    { name: "Thunderwave", tags: ["Short-Range", "Blast (Small)", "Attack"], cost: 2, effect: "A wave of booming force sweeps outward. Make an Attack dealing 1d8 damage to everything in the Blast and physically repel all standard-sized creatures." },
    { name: "Fireball", tags: ["Long-Range", "Blast (Large)", "Attack"], cost: 4, effect: "A flaming bead explodes in a roar. Make an Attack dealing 2d10 fire damage to everything in the target zone." },
    { name: "Lightning Bolt", tags: ["Long-Range", "Blast (Small)", "Attack"], cost: 2, effect: "A bolt of lightning arcs to a target of your choice. Make an Attack dealing 2d6 damage." },
    { name: "Burning Hands", tags: ["Short-Range", "Blast (Small)", "Attack"], cost: 2, effect: "A thin sheet of roaring flame shoots from your fingers. Make an Attack dealing 1d10 damage to all caught in front of you." },
    { name: "Guiding Bolt", tags: ["Long-Range", "Curse", "Attack"], cost: 2, effect: "A flash of divine light streaks toward a target. Make an Attack dealing 2d6 damage. The next physical attack on them is enhanced (+1d6)." },
    { name: "Scorching Ray", tags: ["Long-Range", "Attack"], cost: 2, effect: "Hurl three rays of fire at targets within range. Each ray is its own Attack dealing 1d6 fire damage." },
    { name: "Wall of Fire", tags: ["Medium-Range", "Virtue Loss"], cost: 4, effect: "A blazing wall of fire fills the border between two zones, or splits one zone in two, for the remainder of the encounter. Passing through the wall causes 1d8 Vigor loss automatically. This is not an Attack." },
    { name: "Flame Strike", tags: ["Long-Range", "Blast (Large)", "Attack"], cost: 4, effect: "A vertical column of divine fire roars down from the sky. Make an Attack dealing 2d6 fire and 2d6 radiant damage to the zone." },
    { name: "Chain Lightning", tags: ["Long-Range", "Attack"], cost: 4, effect: "A massive bolt arcs into a primary target then forks into up to 3 more targets within that zone. Make an Attack dealing 2d8 lightning damage to each." },
    { name: "Fire Shield", tags: ["Self", "Attack"], cost: 4, effect: "Flames wreathe your body. You take half Vigor damage from cold and fire, and when an attacker Engaged with you strikes you, you make an Attack against them dealing 1d8 fire damage." },
    { name: "Sickening Radiance", tags: ["Long-Range", "Blast (Large)", "Curse", "Attack"], cost: 4, effect: "Dim greenish light fills an area until the end of the encounter. Targets caught are hit by an Attack dealing 2d6 radiant damage and grow physically exhausted- becoming Impaired while within." },
    { name: "Sunburst", tags: ["Long-Range", "Blast (Large)", "Curse", "Attack"], cost: 8, effect: "Brilliant light flashes in a massive area. Make an Attack dealing 4d6 radiant damage to all within, permanently blinding any target it wounds." },
    { name: "Meteor Swarm", tags: ["Extreme-Range", "Blast (Large)", "Attack"], cost: 8, effect: "Blazing orbs of fire plunge to earth. Make an Attack dealing 5d10 damage to all creatures and structures within 3 target zones." },
    { name: "Delayed Blast Fireball", tags: ["Long-Range", "Blast (Large)", "Attack"], cost: 8, effect: "Create a flaming bead that can be held, kept in a pocket, or otherwise maneuvered until you wish to detonate it. The explosion is an Attack dealing 4d6 fire damage, increasing by +1d6 for every round you wait to detonate- up to a maximum of 10d6 total." },
    { name: "Prismatic Spray", tags: ["Medium-Range", "Blast (Small)", "Curse"], cost: 8, effect: "Eight multi-colored beams flash. Roll 1d8 per target. 1 - 4d8 Fire, 2 - 4d8 Acid, 3 - 4d8 Lightning, 4 - 4d8 Poison, 5 - 4d8 Cold, 6 - Target is Petrified, 7 - Target is Permanently Blinded, 8 - Target is hit by two rays." },
    { name: "Crown of Stars", tags: ["Self", "Long-Range", "Attack"], cost: 8, effect: "Seven star-like motes orbit your head. When cast, and on your turns you can launch one at long range as an Attack dealing 2d12 radiant damage." },
    { name: "Storm of Vengeance", tags: ["Extreme-Range", "Blast (Large)"], cost: 8, effect: "A churning black storm cloud cloaks the sky raining acid, lightning, and freezing hail over a massive territory. Eventually destroying everything underneath." }
  ],
  cups: [
    { name: "Tide's First Whisper", tags: [], cost: 0, effect: "Draw drinkable water from the air, damp stone, or a nearby source." },
    { name: "Vicious Mockery", tags: ["Medium-Range", "Curse"], cost: 0, effect: "Unleash enchanted insults. Target's next attack is impaired if they carry pride or vanity." },
    { name: "Minor Illusion", tags: ["Medium-Range"], cost: 0, effect: "Create a static sound or visual illusion no larger than a human. Physical touch reveals it as fake." },
    { name: "Message", tags: ["Long-Range"], cost: 0, effect: "Point and whisper. Your voice travels directly to their ears and they can whisper a reply privately." },
    { name: "Friends", tags: ["Touch", "Curse"], cost: 0, effect: "Gain Advantage on SPIRIT checks against a creature for 1 minute. Afterwards they realize they were manipulated." },
    { name: "Mind Sliver", tags: ["Long-Range", "Curse", "Virtue Loss"], cost: 0, effect: "Drive a disorienting spike of psychic energy into a mind causing 1d4 GRACE loss." },
    { name: "Shape Water", tags: ["Medium-Range"], cost: 0, effect: "Manipulate water: change its flow change its color/opacity or freeze it into ice for 1 hour." },
    { name: "Cure Wounds", tags: ["Touch"], cost: 2, effect: "Healing warmth floods the target. Restores 1d4 VIGOR." },
    { name: "Sleep", tags: ["Long-Range", "Blast (Small)"], cost: 2, effect: "Enchanted slumber falls over a group affecting 3d8 total VIGOR starting with the lowest current VIGOR." },
    { name: "Misty Step", tags: ["Long-Range"], cost: 2, effect: "Briefly surrounded by silvery mist you instantly teleport to an unoccupied space you can see." },
    { name: "Hold Person", tags: ["Medium-Range", "Curse"], cost: 2, effect: "An unwilling humanoid is paralyzed by rigid bands. GRACE Save to resist; failure means complete immobilization until the end of combat, or for 1 minute outside combat." },
    { name: "Invisibility", tags: ["Touch"], cost: 2, effect: "A creature you touch becomes completely unseen. Breaks instantly if they attack or cast another spell." },
    { name: "Calm Emotions", tags: ["Medium-Range", "Blast (Large)", "Curse"], cost: 2, effect: "Suppress strong feelings in a room for a minute. Can end charm/fright effects or render aggressive foes completely passive. Doesn't work on creatures immune to charm." },
    { name: "Suggestion", tags: ["Medium-Range", "Curse"], cost: 2, effect: "Whisper a reasonable course of action. Target follows the command until completed or broken." },
    { name: "Fear", tags: ["Medium-Range", "Blast (Small)", "Curse"], cost: 2, effect: "Project an image of worst fears. All in a cone must make a SPIRIT Save or drop what they hold and flee in panic." },
    { name: "Major Image", tags: ["Long-Range"], cost: 2, effect: "Create a massive realistic illusion of an object creature or phenomenon complete with sound and smell." },
    { name: "Mirror Image", tags: ["Self"], cost: 2, effect: "An illusory duplicate appears around you. When you are hit, the illusion pops instead of you getting hit." },
    { name: "Polymorph", tags: ["Medium-Range", "Curse"], cost: 4, effect: "Transform a creature into a harmless beast. SPIRIT Save to negate. Snaps back instantly if the beast takes damage." },
    { name: "Greater Invisibility", tags: ["Touch"], cost: 4, effect: "Target becomes completely transparent for 1 minute. Attacks are enhanced (+1d8), enemy attacks are impaired; ends early if dispelled." },
    { name: "Scrying", tags: ["Self"], cost: 4, effect: "Peer into a smooth surface to spy on any creature in the world." },
    { name: "Heal", tags: ["Touch"], cost: 4, effect: "Divine energy restores 2d6 VIGOR and cleanses blindness deafness and poisons." },
    { name: "Mass Cure Wounds", tags: ["Long-Range", "Blast (Small)"], cost: 4, effect: "A wave of positive energy restores 1d4+3 VIGOR in a BLAST." },
    { name: "Eyebite", tags: ["Self", "Curse"], cost: 4, effect: "Your eyes carve out dread. Choose one creature within Medium range at a time; each round you look at them to force sleep, panic, or sickness." },
    { name: "Modify Memory", tags: ["Medium-Range", "Curse"], cost: 4, effect: "Exert control over a target's mind. Rewrite up to 10 minutes of memory from their recent past." },
    { name: "Dream", tags: ["Special", "Curse"], cost: 4, effect: "Enter the dreamscape of a target you know to shape an illusory message or twist it into a terrifying nightmare." },
    { name: "Mass Suggestion", tags: ["Long-Range", "Blast (Large)", "Curse"], cost: 4, effect: "Influence a crowd. Give a single reasonable command to up to 12 targets who follow it implicitly for a day. Targets make a SPIRIT Save to resist." },
    { name: "Mind Blank", tags: ["Touch"], cost: 8, effect: "Guard a mind against intrusion. For 24 hours, the target has complete immunity to psychic damage, mind-reading, scrying and mental curses." },
    { name: "Power Word: Stun", tags: ["Medium-Range", "Curse"], cost: 8, effect: "Speak a word of absolute authority. Target with 15 VIGOR or fewer is completely stunned and immobilized until the end of combat." }
  ],
  swords: [
    { name: "Restless Inquiry", tags: [], cost: 0, effect: "Ask one yes-or-no question of the nearest sentient mind within earshot. You hear their instinctual, truthful response telepathically." },
    { name: "First Cut of Truth", tags: [], cost: 0, effect: "The next lie spoken in your presence rings audibly false to you." },
    { name: "Crossing Wind", tags: [], cost: 2, effect: "A gust carries you and one Engaged ally, generating a free Move gambit for each of you and ignoring difficult terrain." },
	{ name: "Iron Mind", tags: ["Self"], cost: 2, effect: "Lasting for 8 hours, While this spell is active, you are immune to mental enchantments." },
    { name: "Loosened Bindings", tags: [], cost: 2, effect: "Any non-magical restraint on the target falls open." },
    { name: "Silent Retreat", tags: [], cost: 2, effect: "You and up to three allies move without sound for one minute." },
    { name: "Sword Burst", tags: ["Self", "Blast (Small)", "Attack"], cost: 0, effect: "Create a momentary circle of spectral blades that sweep outward. Make an Attack dealing 1d6 force damage to all around you." },
    { name: "Gust", tags: ["Medium-Range"], cost: 0, effect: "Seize control of the wind to push a small creature, hurl light objects, or generate a sudden draft." },
    { name: "Ray of Frost", tags: ["Long-Range", "Attack"], cost: 0, effect: "A frigid beam of light strikes a creature. Make an Attack dealing 1d6 cold damage, performing a STOP gambit automatically." },
    { name: "Blade Ward", tags: ["Self"], cost: 0, effect: "Trace a protective sigil in the air to reinforce your stance. Restores up to 2 Guard." },
    { name: "True Strike", tags: ["Medium-Range"], cost: 0, effect: "Point at a target to instantly calculate their vulnerabilities. The next attack made on that enemy adds a d8." },
    { name: "Chill Touch", tags: ["Touch", "Curse", "Attack"], cost: 0, effect: "A ghostly skeletal hand assails a target. Make an Attack dealing 1d4 necrotic damage and block all VIRTUE recovery for 1 round." },
    { name: "Shield", tags: ["Self"], cost: 2, effect: "An invisible barrier blocks incoming attacks. Restore up to 3 Guard and gain 1 Armor until the start of your next turn." },
    { name: "Feather Fall", tags: ["Medium-Range"], cost: 2, effect: "Reactively slow down up to 5 falling creatures. They float safely down and take zero falling damage." },
    { name: "Gust of Wind", tags: ["Long-Range", "Blast (Small)"], cost: 2, effect: "A line of strong gale-force wind blasts from you. Pushes targets away and prevents them from moving closer." },
    { name: "Spiritual Weapon", tags: ["Medium-Range", "Attack"], cost: 2, effect: "Create a floating spectral weapon of raw force that makes an Attack each round against a target of your choice, dealing 1d8 damage, until the end of combat." },
    { name: "Levitate", tags: ["Medium-Range"], cost: 2, effect: "Lift an object or an unwilling creature up to 20 feet into the air for the next minute." },
    { name: "Warding Wind", tags: ["Self", "Blast (Small)"], cost: 2, effect: "A howling vortex of wind surrounds you. Deafens creatures inside, extinguishes torches, and impairs ranged weapon, and projectile spell attacks." },
    { name: "Cloud of Daggers", tags: ["Medium-Range", "Blast (Small)", "Attack"], cost: 2, effect: "Fill a small space with a swirling storm of razor-sharp daggers. Make an Attack dealing 2d4 slashing damage to all who enter or are inside when it appears. Lasts for a minute." },
    { name: "Dispel Magic", tags: ["Medium-Range"], cost: 2, effect: "Instantly end any active Cost-2 spell or spell effect of your choice on a target creature, item, or immediate location." },
    { name: "Fly", tags: ["Touch"], cost: 4, effect: "The target cuts through the air gaining the ability to fly at normal walking speed for 10 minutes." },
    { name: "Disintegrate", tags: ["Long-Range", "Attack"], cost: 4, effect: "A thin green ray shoots from your finger. Make an Attack dealing 3d8 force damage. Slain targets are completely reduced to ash." },
    { name: "Dimension Door", tags: ["Long-Range"], cost: 4, effect: "Instantly teleport yourself and up to 3 other creatures Engaged with you to any space within Long-Range, seen or unseen." },
    { name: "Cloudkill", tags: ["Long-Range", "Blast (Large)", "Virtue Loss"], cost: 4, effect: "Rolling yellow-green poisonous gas flows out causing 1d4 VIGOR loss each round to any creature caught within. Disapates after a minute." },
    { name: "Cone of Cold", tags: ["Long-Range", "Blast (Small)", "Attack"], cost: 4, effect: "Blast frigid air from your hands. Make an Attack dealing 2d10 cold damage, freezing slain targets solid into ice." },
    { name: "Wind Walk", tags: ["Touch"], cost: 4, effect: "You and up to 10 companions dissolve into gaseous cloud-like forms for the next hour- or earlier if the caster chooses to end the spell. Movement speed is incredibly fast." },
    { name: "Reverse Gravity", tags: ["Long-Range", "Blast (Large)"], cost: 8, effect: "Reverse gravity in a massive area. Targets fall upward 100 feet into the air until the spell ends after a minute." },
    { name: "Whirlwind", tags: ["Long-Range", "Blast (Large)"], cost: 8, effect: "Summon a 30ft tall howling tornado. Sucks up objects and traps creatures inside its vortex. You can move it at the start of your turn. Disapates after a minute." },
    { name: "Blade of Disaster", tags: ["Medium-Range", "Attack"], cost: 8, effect: "Manifest a planar tear shaped like a black sword. It attacks any target of your choice once per round, making an Attack dealing 3d12 force damage. Lasts until the end of combat." },
    { name: "Psychic Scream", tags: ["Long-Range", "Blast (Large)", "Virtue Loss"], cost: 8, effect: "Unleash a wave of overwhelming intellectual pressure. Targets in BLAST make a Spirit save, losing 3d6 SPIRIT on a failure, or half as much on a success. If this reduces them to 0 SPIRIT their head explodes." }
  ],
  pentacles: [
    { name: "Seed of Fortune", tags: [], cost: 0, effect: "Bless a single coin; the next Check made while holding it gains Advantage." },
    { name: "Patient Harvest", tags: [], cost: 2, effect: "Accelerate a season's growth into a single day for a small plot of land, yielding enough food to feed a party. Provides everything needed for a Night's Rest, wherever you are." },
	{ name: "Curse Ward", tags: ["Touch"], cost: 2, effect: "Lasting for 24 hours, While this spell is active, any time you would become Cursed- you instead ignore the curse and this spell then ends." },
    { name: "Craftsman's Focus", tags: [], cost: 4, effect: "Complete a piece of skilled work in a quarter of the usual time, or repair a Wrecked Structure or Vehicle in a day." },
    { name: "Golden Foundation", tags: [], cost: 8, effect: "Raise a permanent ward over a structure, protecting it from fire and rot." },
    { name: "Druidcraft", tags: ["Medium-Range"], cost: 0, effect: "Whisper to nature to predict weather for 24 hours, bloom a flower bud, or snuff a tiny campfire." },
    { name: "Thorn Whip", tags: ["Long-Range", "Attack"], cost: 0, effect: "Create a long vine whip covered in thorns. Make an Attack dealing 1d6 piercing damage and pull the target into your zone. You may choose to have them become Engaged with you." },
    { name: "Mending", tags: ["Touch"], cost: 0, effect: "Repairs a single break or tear in an object you touch like a key, cloak, or leaking container." },
    { name: "Shillelagh", tags: ["Touch"], cost: 0, effect: "Imbue a wooden club or staff with nature's power. For the next minute, its base damage becomes 1d8 and its damage type is force." },
    { name: "Mold Earth", tags: ["Medium-Range"], cost: 0, effect: "Exert control over loose earth. Excavate it, shift its color, or create a wall large enough for you to hide behind for a turn." },
    { name: "Resistance", tags: ["Touch"], cost: 2, effect: "Touch a creature to bolster their physical resilience for the next minute. They reduce the next source of damage or Virtue Loss they take by 1d6, then the spell ends." },
    { name: "Entangle", tags: ["Medium-Range", "Blast (Small)", "Curse"], cost: 2, effect: "Grasping weeds sprout from the ground. Targets must make a VIGOR Save or be restrained and anchored until cut free, or the curse ends." },
    { name: "Barkskin", tags: ["Touch"], cost: 2, effect: "The target's skin hardens like old oak. For the next minute, their Armor cannot be lower than 2 regardless of gear worn." },
    { name: "Spike Growth", tags: ["Long-Range", "Blast (Large)", "Virtue Loss"], cost: 2, effect: "The ground twists into sharp thorns. Walking through the zone causes 1d4 VIGOR loss for every move taken." },
    { name: "Plant Growth", tags: ["Long-Range", "Blast (Large)"], cost: 2, effect: "All plants in a massive area thicken instantly. Movement through the zone becomes severely choked and slow." },
    { name: "Spider Climb", tags: ["Touch"], cost: 2, effect: "Gain the ability to move up down and across vertical surfaces or upside down along ceilings leaving hands free." },
    { name: "Animate Dead", tags: ["Touch"], cost: 2, effect: "Infuse bones or a fresh corpse with dark vitality. It rises as a skeleton or zombie loyal to your commands." },
    { name: "Grease", tags: ["Long-Range", "Blast (Large)"], cost: 2, effect: "Slick grease covers the ground for the rest of the encounter. Entering or ending your turn inside causes targets to fall prone." },
    { name: "False Life", tags: ["Self"], cost: 2, effect: "Bolster your vitality with a facsimile of life. Gain 1d4 temporary Guard for the next hour. (Temporary Guard does not stack)." },
    { name: "Inflict Wounds", tags: ["Touch", "Virtue Loss"], cost: 2, effect: "Make contact with a target causing necrotic energy to seep into their flesh. Automatically causes 1d8 VIGOR loss." },
    { name: "Stoneskin", tags: ["Touch"], cost: 4, effect: "Target's flesh becomes hard as granite. Gain an additional 2 Armor against physical attacks for the next minute." },
    { name: "Wall of Stone", tags: ["Long-Range"], cost: 4, effect: "A long wall of solid stone springs forth from a surface becoming a permanent architectural fixture. It can be used to block access to a zone." },
    { name: "Blight", tags: ["Touch", "Attack"], cost: 4, effect: "Necrotic energy drains moisture and vitality from a target. Make an Attack dealing 3d8 necrotic damage; plant creatures die instantly." },
    { name: "Insect Plague", tags: ["Long-Range", "Blast (Large)", "Attack"], cost: 4, effect: "A swarming cloud of biting locusts fills a zone and lasts until the end of the encounter or 1 minute. Each round, make an Attack dealing 2d6 physical damage to living things inside. The cloud is quite loud, and fully opaque for targeting reasons." },
    { name: "Flesh to Stone", tags: ["Medium-Range", "Curse"], cost: 4, effect: "Attempt to turn a creature to marble. Target is restrained; failing 3 VIGOR Saves before the curse ends makes it permanently petrified." },
    { name: "Death Ward", tags: ["Touch"], cost: 4, effect: "Ward a target against fatal trauma. The first time they would die they instead receive a critical wound and are left stabilized- but unconscious." },
    { name: "Raise Dead", tags: ["Touch"], cost: 4, effect: "Return a soul to a corpse dead no longer than 10 days. Fully closes lethal wounds but target's VIRTUES are set to 1 until they complete a Full-Rest." },
    { name: "Finger of Death", tags: ["Medium-Range", "Attack"], cost: 8, effect: "Negative energy courses through a target. Make an Attack dealing 4d10 necrotic damage. If slain they rise as a loyal Zombie." },
    { name: "Earthquake", tags: ["Extreme-Range", "Blast (Large)"], cost: 8, effect: "Trigger an intense seismic tremor. Fissures open, structures collapse, and all standing targets are pinned prone until the start of the caster's next turn." },
    { name: "Regenerate", tags: ["Touch"], cost: 8, effect: "Stimulate cellular recovery. Restores 3d4 VIGOR, and severed body parts re-grow completely over the next hour. The target then regains 1 VIGOR every hour for the next 8 hours. Cures the Mutilation and Organ Failure Scars." },
    { name: "Clone", tags: ["Special"], cost: 8, effect: "Grows an inert identical duplicate of a living creature- which is complete after the passing of an age. If the original dies their soul transfers safely to the clone." },
    { name: "Mighty Fortress", tags: ["Long-Range"], cost: 8, effect: "Command stone and wood to erupt from the soil constructing a massive fully provisioned defensive castle." },
    { name: "True Resurrection", tags: ["Touch"], cost: 8, effect: "Touch a creature dead up to a century. Restores them to life replacing missing parts and sets all Virtues to 1 until they complete a Full-Rest." },
    { name: "Bless", tags: ["Medium-Range"], cost: 4, effect: "Bless up to 3 allies. Their attacks are enhanced (+1d6) for the duration of the encounter." },
    { name: "Daylight", tags: ["Long-Range"], cost: 2, effect: "A sphere of actual sunlight fills a zone, shedding from an object, suppressing any magical darkness. Creatures susceptible to sunlight are harmed by it." }
  ]
};