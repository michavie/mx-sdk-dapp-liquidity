interface WalletTruncateProps {
  address: string;
  startLength?: number;
  endLength?: number;
  className?: string;
}

export const TrimAddress = ({
  address,
  startLength = 4,
  endLength = 5,
  className = ''
}: WalletTruncateProps) => {
  if (!address) {
    return null;
  }

  return (
    <div
      className={`liq-truncate liq-text-left liq-text-neutral-100 uppercase liq-flex liq-gap-1 ${className}`}
    >
      <span>{address.slice(0, startLength)}</span>
      <span>...</span>
      <span>{address.slice(-endLength)}</span>
    </div>
  );
};
