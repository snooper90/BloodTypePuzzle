Blood Type Puzzle
======

## Goal
I set out to create a puzzle generator for a puzzle I found on http://inabapuzzle.com/

## Usage
* Import the javascript file and save it to a variable
* The game object is organized   
  * gameBoard
    * This will be what you fill your grid with. It has an array of 5 arrays with 5 alleles in each.
  * bloodTypesRow
    * This will be what goes around the outside of the grid. It has and array of 5 arrays of two blood types each. The 5 arrays are top to bottom and the two blood types are left and right.
  * bloodTypesCol
    * This will be what goes around the outside of the grid. It has and array of 5 arrays of two blood types each. The 5 arrays are left to right and the two blood types are top and bottom.

## Game Rules
* There will be 3 alleles in each row and column

* The blood type on the outside of the grid tells you what the two closest in its row or column are.
### Blood Types
  * AA or AO is blood type A
  * BB or BO is blood type B
  * AB or BA is blood type AB
  * OO can only be blood type O

## Extra Info
click [Here](http://inabapuzzle.com/) to link to the original puzzle I found in PDF format.
