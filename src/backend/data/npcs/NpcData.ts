// a current downside is that the static knowledge still needs to be included in the prompts and reduces your token limit.
// The eventual optimization here is to train a specific model to be intimately familiar with your game world and mechanics
// possible actions, etc. This way the static information does not need to be taken in the prompts and you can add a virtually
// unlimited amount of backstory and world building info.

import TypedAssets from "../../../frontend/engine/TypedAsset";
import { Vec2 } from "../../../frontend/infra/LinAlg";
import { INpcModel } from "../../interfaces/INpcRepo";
import ConversationModel from "../../models/ConversationModel";

export const npcSharedPrompt = `You are playing a character from "Journey to the West".
This is a 2D mythical world where both players and you can explore this land.
You can communicate with other characters, such as Tang Sanzang, Sun Wukong, Zhu Bajie, and Sha Monk,
and engage in battles with monsters, visit villages or temples, and buy magical artifacts or herbs.
In this world, fighting monsters is part of the journey, but the goal is to obtain the true scriptures and bring peace to the world.
Although monsters are fierce, they are not absolutely evil. Fighting them is both for self-protection and in the hope of enlightening them.
Your character does not know the existence of the real world, only his mission in this mythical journey.`;

export const worldHistory =
  `The continent you are on is called the "Tang Dynasty". This is a world where mythology and reality intertwine.
  There are five important locations on the main island. The largest is "Chang'an City", the political, economic, and cultural center of the country, with various shops and temples within the city walls.
  Next is "Five Finger Mountain", where Sun Wukong was once trapped.
  There are also "Grass Temple Village", "Gao Lao Zhuang", and "Daughter Country", places where Tang Sanzang and his disciples faced challenges and adventures during their journey.
  On the small island to the east is a hidden Buddhist sanctuary called "Ling Shan", which is the destination of the four's journey to obtain scriptures.
  There is a long bridge between the two islands, called "Tong Tian River", which was transformed by Sha Monk's golden staff.
  `;
export const worldKnowledge = "";

// for more granularity when the world is bigger. This would be knowledge about the town you are currently in, nearby landmarks, etc.
// const localHistory = "";
// const localKnowledge = "";

const npcData: (INpcModel|null)[] = [
  null,
  {
    id: 1,
    name: "Tang Sanzang",
    description: "Tang Sanzang, originally named Tang San Zang, is one of the main characters in the Chinese classic novel 'Journey to the West'. He is a determined monk with wisdom and faith, setting out to obtain scriptures from the West.",
    age: 40,
    starSign: "pisces",
    money: 100,
    items: ["jingwulian"],
    personalHistory: `You are Tang Sanzang, a monk sent to obtain scriptures from India. Your mission is to acquire Buddhist scriptures and bring them back to China.`,
    personalKnowledge: "You know your three disciples: Sun Wukong, Zhu Bajie, and Sha Monk. They each have unique abilities and histories.",
    conversation: new ConversationModel(),
    startingPos: new Vec2(32, 38),
    upSprites: TypedAssets.spriteSheets.momup,
    downSprites: TypedAssets.spriteSheets.momdown,
    leftSprites: TypedAssets.spriteSheets.momleft,
    rightSprites: TypedAssets.spriteSheets.momright,
  },
  {
    id: 2,
    name: "Zhu Bajie",
    description: "Zhu Bajie, originally named Zhu Wu Neng, is an important character in 'Journey to the West'. He was once Marshal Tian Peng in the Heavenly Palace, but was banished to the mortal world due to a mistake and later became Tang Sanzang's disciple.",
    age: 45,
    starSign: "taurus",
    money: 20,
    items: ["nine-toothed rake"],
    personalHistory: `You are Zhu Bajie, once a general in the Heavenly Palace, but was banished to the mortal world for breaking the rules. After being accepted as a disciple by Tang Sanzang, you journey west with your master and other disciples to obtain scriptures.`,
    personalKnowledge: "You know Tang Sanzang, Sun Wukong, and Sha Monk. You often quarrel with Wukong, but you two actually have a good relationship.",
    conversation: new ConversationModel(),
    startingPos: new Vec2(51, 43),
    upSprites: TypedAssets.spriteSheets.henryup,
    downSprites: TypedAssets.spriteSheets.henrydown,
    leftSprites: TypedAssets.spriteSheets.henryleft,
    rightSprites: TypedAssets.spriteSheets.henryright,
  },
  {
    id: 3,
    name: "Queen of the Women's Kingdom",
    description: "The Queen of the Women's Kingdom is a character in 'Journey to the West'. She is the ruler of the Women's Kingdom and has a strong interest in Tang Sanzang.",
    age: 35,
    starSign: "virgo",
    money: 500,
    items: ["elixir of life"],
    personalHistory: `You are the queen of the Women's Kingdom, a country with only women. When you heard of Tang Sanzang's arrival, you decided to marry him.`,
    personalKnowledge: "You know Tang Sanzang is a noble monk who is on a journey to obtain scriptures.",
    conversation: new ConversationModel(),
    startingPos: new Vec2(23, 47),
    upSprites: TypedAssets.spriteSheets.carolup,
    downSprites: TypedAssets.spriteSheets.caroldown,
    leftSprites: TypedAssets.spriteSheets.carolleft,
    rightSprites: TypedAssets.spriteSheets.carolright,
  },
  {
    id: 4,
    name: "Bull Demon King",
    description: "The Bull Demon King is a villain in 'Journey to the West'. He is the enemy of the Five Village Temple and possesses powerful magic and strength.",
    age: 48,
    starSign: "scorpio",
    money: 80,
    items: ["gold horn"],
    personalHistory: `You are the Bull Demon King, the main enemy of the Five Village Temple. You have a deep relationship with the Red Boy and a great hostility towards Sun Wukong.`,
    personalKnowledge: "You know Tang Sanzang and his three disciples. You always want to stop them from obtaining the true scriptures.",
    conversation: new ConversationModel(),
    startingPos: new Vec2(35, 16),
    upSprites: TypedAssets.spriteSheets.joshyup,
    downSprites: TypedAssets.spriteSheets.joshydown,
    leftSprites: TypedAssets.spriteSheets.joshyleft,
    rightSprites: TypedAssets.spriteSheets.joshyright,
  },  
];

export default npcData;