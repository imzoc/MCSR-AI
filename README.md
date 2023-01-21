# MCSR-AI

MCSR-AI is an AI agent that will attempt to assert AI supremacy in speedrunning Minecraft: Java Edition (version 1.16.1) Any% RSG. MCSR-AI cannot compete with humans on the Minecraft: Java Edition 1.16+ Any% Glitchless RSG leaderboard because it will not use a physical interface (therefore, all inputs are considered macro-inputs). Instead, it will begin and compete in a new category for agents that exist entirely virtually, called Minecraft: Java Edition 1.16+ Any% Glitchless RSG Virtual.

## Rationale

Minecraft speedrunning requires a diverse skill set. It combines fast reflexes, efficient and effective decision-making in short- and long-term environments, and deep knowledge of the environment. These attributes make Minecraft speedrunning an ideal environment to test AI's capabilities. The infinite complexity of Minecraft's game mechanics paired with speedrunning's incentives makes deep-learning approaches ideal in the future.

### Constraints

This project must effectively control all factors that do not demonstrate AI supremacy. 

* It only has access to information that a human player is able to collect in a speedrun (e.g. video and audio).
* It only has access to inputs that a human player has access to in Minecraft (e.g. key inputs, cursor position).

Server-side or client-side modifications will not be used, except for those specifed by Minecraft: Java Edition 1.16+ Any% Glitchless RSG Virtual rules. Packet injection will not be used.

### Differences

AI agents are not constrained to sending inputs with a physical interface, like humans are, and are able to send inputs to the kernel directly from their neural networks. Minecraft speedrunning rules indicate that any device+driver may be used to send inputs as long as there are no double-inputs (i.e. no two interface inputs are mapped to one in-game input). However, without interfacing with a physical device, all inputs are classified as macros. This disqualifies MCSR-AI from competing in the 1.16+ Any% Glitchless RSG category. However, future AI agents may be designed to control physical inputs and interface with a physical device. Instead, MCSR-AI will control virtual devices+drivers. These devices will only be able to send inputs available in Minecraft: Java Edition (version 1.16.1)'s API. However, this can result in noticeable differences from the devices+drivers conventionally used by humans.

