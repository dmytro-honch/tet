export type PlayfieldType = number[][];

export interface PlayfieldObjType {
  playfield: PlayfieldType;
  next: PieceType;
}

export type PieceType = {
  x: number;
  y: number;
  blocks?: number[][];
};

export type DrawMessagesType = {
  message: string;
  x: number;
  y: number;
};

export type PointsType = {
  [key: string]: number;
};
