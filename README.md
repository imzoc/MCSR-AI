# MCSR-AI

MCSR-AI is an AI agent that will attempt to assert AI supremacy in speedrunning Minecraft.

MCSR-AI will simulate physical inputs that a human would be able to make.

## Motivation

Minecraft speedrunning requires a diverse skill set in humans. It combines fast reflexes, efficient and effective decision-making in short- and long-term environments, and deep knowledge of the game. These attributes make Minecraft speedrunning an ideal environment to test AI's capabilities.

### Constraints

This project must control all factors that do not demonstrate AI supremacy. 

* The agent has video and audio sensors.
* The agent has mouse and keyboard actuators.

Server-side or client-side modifications will not be used, except for those specifed by Minecraft: Java Edition 1.16+ Any% Glitchless RSG Virtual rules. Packet injection will not be used.

### Limitations

Our agent will not be constrained to sending inputs with keyboard and mouse. Instead, it will interact with virtual keyboard and mouse.

## Design

### Performance Measures

The ultimate goal is to complete the game quickly. Thus, the simplest and ultimate performance measures are:

1. Game completion
2. Speed of game completion

We will borrow from current Minecraft speedrunning practices in order to break the ultimate goal down into manageable pieces. 

#### Performance measures in different environments

An agent's goals will change as it progresses towards its ultimate goal of completing the game quickly. Later on, we will define different environments with different performance measures.

### Environments

Single-player Minecraft has three dimensions: overworld, nether, and end. Each dimension has different resources and threats.

#### Overworld

The agent spawns in the overworld. The agent should do several things in this specific stage:

1. Get to the nether
2. Gather sufficient food

1. Wood
2. Iron
3. Obsidian
4. Food

 

1. partially observable
2. single-agent
3. stochastic
4. dynamic/semi-dynamic
5. continuous


To complete Minecraft, an agent will distinct, partially-observable environments. 

1. 



#### Splits

It will be beneficial to include other benchmarks to measure performance. Considering the distinct phases of the game, we can measure performance in __splits__.

Split 1. From game start until first nether entry.
Split 2. From first nether entry until bastion entry
Split 3. From bastion exit until nether fortress entry.
Split 4. From nether fortress entry until first blind travel.
Split 5. From first blind travel until second nether re-entry.
Split 6. From second nether re-entry until second blind travel.
Split 7. From second blind travel until end dimension entry.
Split 8. From end dimension entry until game completion screen.

Splits allow us to measure the agent's performance in different environments and determine where the agent struggles.
