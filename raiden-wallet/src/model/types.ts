import { BigNumberish } from 'ethers/utils';
import { Zero } from 'ethers/constants';

export interface Token {
  readonly balance: BigNumberish;
  readonly decimals: number;
  readonly units: string;
  readonly address: string;
  readonly symbol?: string;
  readonly name?: string;
}

export interface AccTokenModel {
  address: string;
  opening: number;
  open: number;
  closing: number;
  closed: number;
  settling: number;
  settled: number;
}

export interface TokenModel extends AccTokenModel {
  readonly address: string;
  readonly opening: number;
  readonly open: number;
  readonly closing: number;
  readonly closed: number;
  readonly settling: number;
  readonly settled: number;
}

export interface LeaveNetworkResult {
  readonly closed: number;
  readonly failed: number;
}

export interface Progress {
  readonly current: number;
  readonly total: number;
}

export interface StepDescription {
  readonly title: string;
  readonly description: string;
}

export const createEmptyTokenModel = (): AccTokenModel => ({
  address: '',
  opening: 0,
  open: 0,
  closing: 0,
  closed: 0,
  settling: 0,
  settled: 0
});

/**
 * A placeholder token used on the views while awaiting for the actual
 * token information to load.
 */
export const TokenPlaceholder: Token = {
  balance: Zero,
  decimals: 18,
  units: '0.0',
  address: ''
};