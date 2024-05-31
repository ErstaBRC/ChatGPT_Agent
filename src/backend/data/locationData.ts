import { Vec2 } from "../../frontend/infra/LinAlg";

export interface ILocation {
  entrance: Vec2;
  outside: Vec2;
}

const locationData: { [key: string]: ILocation } = {
  ranch: {
    entrance: new Vec2(24, 45),
    outside: new Vec2(24, 48),
  },
  store: {
    entrance: new Vec2(21, 32),
    outside: new Vec2(21, 35),
  },
  "Henry and Caroline's house": {
    entrance: new Vec2(32, 36),
    outside: new Vec2(32, 39),
  },
  "Doctor's office": {
    entrance: new Vec2(15, 43),
    outside: new Vec2(15, 46),
  },
  "Brendan's house": {
    entrance: new Vec2(54, 42),
    outside: new Vec2(54, 45),
  },
  "forest on the plateau": {
    entrance: new Vec2(31, 19),
    outside: new Vec2(31, 19),
  },
  "abandoned shed in the forest": {
    entrance: new Vec2(19, 15),
    outside: new Vec2(19, 18),
  },
};

export interface ILocationContextInfo {
  description: string;
  mapId: number;
}

// starts with time, Then, a few moments later {timeMsg} at {locationDescription}
export const locationContext: { [key: number]: ILocationContextInfo } = {
  222: {
    description: `Located at the northwestern edge of the main island. To the west is the vast ocean, and to the east are the cliffs of the plateau. There are a few trees and a patch of tall grass where monsters roam. To the south is the direction of Chang'an City.`,
    mapId: 222,
  },
  254: {
    description: `Located at the northeastern edge of the main island. To the east is the ocean, and to the west are the cliffs of the plateau. Nearby are a few trees and a patch of tall grass where monsters often appear. Chang'an City is just to the south.`,
    mapId: 254,
  },
  188: {
    description: `A forest area on the plateau. The forest is dense with trees, and there are a few patches of tall grass where monsters often appear. Chang'an City is just to the south.`,
    mapId: 188,
  },
  190: {
    description: `Located in a forest on the plateau. You are standing in front of a well-maintained cabin. The surroundings are dense with trees and grassy areas where monsters often appear. Chang'an City is just to the south.`,
    mapId: 190,
  },
  220: {
    description: `Chang'an City, the town on the main island.`,
    mapId: 220,
  },
  253: {
    description: `The bridge connecting the main island to the small island to the east. The bridge is wooden and very narrow, making it difficult to pass side by side with someone coming from the opposite direction.`,
    mapId: 253,
  },
  221: {
    description: `Located on a small island to the east of the main island. The island houses Brendan's residence. It is full of flowers and well-maintained, connected to the main island by a wooden bridge.`,
    mapId: 221,
  },
  191: {
    description: `A fenced area of the monster ranch. There is a patch of tall grass, a few small trees, and bushes. To leave this area, you must pass through the side gate and the main entrance of the ranch.`,
    mapId: 191,
  },
  219: {
    description: `Chang'an City, right in front of the doctor's office.`,
    mapId: 219,
  },
  189: {
    description: `Chang'an City, right in front of the store.`,
    mapId: 189,
  },
  252: {
    description: `Chang'an City, right in front of Henry and Caroline's house.`,
    mapId: 252,
  },
  251: {
    description: `Chang'an City, directly facing the main entrance of the ranch.`,
    mapId: 251,
  },
};

export default locationData;