export type JwtType = 'access' | 'refresh';

export interface JwtPayload {
  userId: string;
  type: JwtType;
  crossToken?: string;
}
