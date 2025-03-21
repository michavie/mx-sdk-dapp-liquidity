import { decodeBase64 } from './base64Utils';

export interface DecodedLoginTokenType {
  blockHash: string;
  extraInfo?: { timestamp: number };
  origin: string;
  ttl: number;
}

export function decodeLoginToken(
  loginToken: string
): DecodedLoginTokenType | null {
  if (!loginToken) {
    return null;
  }

  const parts = loginToken.split('.');

  if (parts.length !== 4) {
    return null;
  }

  try {
    const [origin, blockHash, ttl, extraInfo] = parts;
    const parsedExtraInfo = JSON.parse(decodeBase64(extraInfo));
    const parsedOrigin = decodeBase64(origin);

    return {
      ttl: Number(ttl),
      extraInfo: parsedExtraInfo,
      origin: parsedOrigin,
      blockHash
    };
  } catch (e) {
    console.error(`Error trying to decode ${loginToken}:`, e);

    return null;
  }
}
