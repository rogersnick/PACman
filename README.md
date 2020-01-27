#   PACman live-code-seed: Level 2

```
┏━━━━━━━━━━━━┓┏━━━━━━━━━━━━┓
┃............┃┃............┃
┃.┏━━┓.┏━━━┓.┃┃.┏━━━┓.┏━━┓.┃
┃O┃  ┃.┃   ┃.┃┃.┃   ┃.┃  ┃O┃
┃.┗━━┛.┗━━━┛.┗┛.┗━━━┛.┗━━┛.┃
┃..........................┃
┃.┏━━┓.┏┓.┏━━━━━━┓.┏┓.┏━━┓.┃
┃.┗━━┛.┃┃.┗━━┓┏━━┛.┃┃.┗━━┛.┃
┃......┃┃....┃┃....┃┃......┃
┗━━━━┓.┃┗━━┓ ┃┃ ┏━━┛┃.┏━━━━┛
     ┃.┃┏━━┛ ┗┛ ┗━━┓┃.┃     
     ┃.┃┃          ┃┃.┃     
     ┃.┃┃ ┏━━━━━━┓ ┃┃.┃     
━━━━━┛.┗┛ ┃      ┃ ┗┛.┗━━━━━
      .   ┃      ┃   .      
━━━━━┓.┏┓ ┃      ┃ ┏┓.┏━━━━━
     ┃.┃┃ ┗━━━━━━┛ ┃┃.┃     
     ┃.┃┃          ┃┃.┃     
     ┃.┃┃ ┏━━━━━━┓ ┃┃.┃     
┏━━━━┛.┗┛ ┗━━┓┏━━┛ ┗┛.┗━━━━┓
┃............┃┃............┃
┃.┏━━┓.┏━━━┓.┃┃.┏━━━┓.┏━━┓.┃
┃.┗━┓┃.┗━━━┛.┗┛.┗━━━┛.┃┏━┛.┃
┃O..┃┃.......  .......┃┃..O┃
┗━┓.┃┃.┏┓.┏━━━━━━┓.┏┓.┃┃.┏━┛
┏━┛.┗┛.┃┃.┗━━┓┏━━┛.┃┃.┗┛.┗━┓
┃......┃┃....┃┃....┃┃......┃
┃.┏━━━━┛┗━━┓.┃┃.┏━━┛┗━━━━┓.┃
┃.┗━━━━━━━━┛.┗┛.┗━━━━━━━━┛.┃
┃..........................┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```
#### usage
1. `git clone https://github.com/rogersnick/PACman.git`
2. `npm install`
3. `npm start`

# Level 2
Added sprite loaders for the backgrounds and the pills, and some basic writing to the screen. The co-ordinates of the game grid range from `[ 0, 4]`, tp `[27, 34]` with the top corner as the origin. The top three rows are reserved for game details.

This commit introduces the `Timer` and `Spritesheet` classes as well as a minimal animation library. 

