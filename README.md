# raycaster-engine

A lightweight, browser based raycasting engine.

## Current Features
 * Rendering and detecting walls
 * Moving with WASD

## In progress/Features being considered
 * Render variable map heights
 * Support on the fly screen size changes
 * Turning with mouse (FPS controls)
 * Allow for optional ceilings and floors
 * Texture map walls, floors, ceilings
    * Still thinking of how this should work, since walls are defined with only a height.
      * Where should a texture start from?
      * Should textures tile?
        * If so, how? From where?
 * support floor height changes
 * detect height changes in map
 * support empty floors
 * Lighting
 * Interactable entities with AI
 * Smart parts of map (animated walls, doors, stuff like that. Totally possible to do doors that swing open or slide up and down, or floors/walls that have holes that slide open/closed)
 * multiplayer??
 * multi level section data??
    * definitely possible, although will need multiple optimization considerations. (for example, how do I know if a section is too high to be visible? How do I know to skip it when searching for visible walls to render?)
 * Exporting and loading level data
 * On the fly map editing/map creator
 * Hub to share/load maps

## Maybes
 * Native port? :grimace:

## Technical considerations for optimization
 * How to optimize rendering multiple walls in the same ray projection, in case of invisible walls?
