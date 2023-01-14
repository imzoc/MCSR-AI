# MCSR-AI

MCSR-AI is an AI agent that will attempt to assert AI supremacy in speedrunning Minecraft 1.16.1 Any% RSG. It will do this by speedrunning Minecraft: Java Edition (Version 1.16.1). MCSR-AI will not compete with humans for the 1.16+ Any% Glitchless RSG leaderboard because it will not use a physical interface (therefore all inputs are considered macros), but will have to begin a new category for agents that exist virtually in their entirety. This is not

## Rationale

Minecraft speedrunning requires a diverse skill set. It combines fast reflexes, efficient and effective decision-making in short- and long-term settings, and a deep knowledge of the environment. These attributes make it an ideal environment to test AI's capabilities.

Its infinite complexity of the game mechanics of minecraft and speedrunning together makes deep-learning approaches ideal in the future. The importance of speed introduces a new element to the study of AI.

### Constraints

This project must effectively control all factors that do not demonstrate AI supremacy. 

* It only has access to information that a human player is able to collect in a speedrun (e.g. video and audio).
* It only has access to inputs that a human player has access to in Minecraft (e.g. key inputs, cursor).

### Differences

There will be noticeable differences betwees human gameplay and AI gameplay. Unlike humans, AIs do not naturally have hands or other physical organs that they must use to send inputs from their brains; instead, they are able to send inputs to the kernel directly from their neural network. Minecraft speedrunning rules indicate that any device+driver may be used to send inputs as long as there are no double-inputs (i.e. no two interface inputs are mapped to one in-game input). 

send these inputs from their neural networks. Consequently, they are not constrained by mouse speed or acceleration limits. They will not, however, be able to explicitly tell the kernel where they want the mouse to be. To keep

Because of this limitation, server-side APIs like the Mineflayer project cannot be used for this. It must be client-side, just as a human player would be.
