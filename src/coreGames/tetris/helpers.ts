import { t_I, t_J, t_L, t_O, t_S, t_T, t_Z } from './tetrominoes';

export function createBlockHelper(blockType: string) {
  switch (blockType) {
    case 'I':
      return t_I;
    case 'J':
      return t_J;
    case 'L':
      return t_L;
    case 'O':
      return t_O;
    case 'S':
      return t_S;
    case 'T':
      return t_T;
    case 'Z':
      return t_Z;
    default:
      break;
  }
  throw new Error('wrong block type');
}
