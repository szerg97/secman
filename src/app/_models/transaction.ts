import { Gsec } from './gsec';
import { Security } from './security';

export interface Transaction{
  id: string;
  faceValue: number;
  realValue: number;
  security: Security;
}
