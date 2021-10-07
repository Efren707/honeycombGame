I want to create a game based on the honeycomb game from squid games. 
The game would play out with having a user carve out a given shape using the mouse tracing the border. 
To start the game the user will click inside the border and will have drag cursor until it has completely traced the whole shape.
There will also be a timer so a user has to complete the level in a certain given time frame.
A user will lose if the cursor goes out of bounds, or if time is up. 
The game will have 4 levels increasing in difficulty of the shape that needs to be traced out.  
I plan on using MouseEvent, PointerLock, and PointerEvent API for a majority of the game functionality.
These APIs handle a lot of the mouse functions that will be needed for the game to function such as when a user has clicked to start the game.
It also allows to track the coordinates of the mouse pointer and the shapes border.