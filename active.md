# Active Development: Jordan's Minigame

Github: Sm Kou

Repo: Jordan’s Minigame

- How does it look and move?
- How does it work?
- How is it coded?

Known :: KoudBlue/Jordan’s Minigame

-----------------------------------

Display canvas: 300 x 300

Active area: 96 x 96

-block: 32

-tile: block / 4 = 8

-unit: tile / 8 = 1

Draw fr.

-top-left: (disp - active) / 2

-mid: top-left + block

-----------------------------------

- Animation
    - Contained canvas positioning
    - Canvas redraw
    - Cycle frames visibility

- Map and Collisions
    - Immovable object
    - Movable object
    - Transitory object
    - Passage object
    - Animatable object

- NPC interaction
    - Communication system
    - Geo
        - wild
        - metro
    - Fig
    - Recur

- Information management
    - Contacts
    - Memory
    - Inventory
    - Party
    - Battle

- Designs (grid = spritesheet)
    - Terrains
        - Grass
        - Water
        - Rocky
        - Underground
    - Buildings: interior and exterior
        - Market
        - Shops
        - Clinic
        - Lab
        - Temple
        - Community center
        - House foreach city
    - Geos
        - Meowth
        - Gastly
        - Ditto
        - Eevee
    - Figs
        - Luther/Cassia
        - Mother
        - Friend
        - Rival
        - Professor
        - Mobster
        - Trainer
