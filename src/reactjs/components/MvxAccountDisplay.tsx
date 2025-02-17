import { faPowerOff } from '@fortawesome/free-solid-svg-icons/faPowerOff';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AccountAddress } from './AccountAddress';
import { CopyButton } from './CopyButton';
import { MxLink } from './MxLink';

export const MvxAccountDisplay = ({
  accountExplorerUrl,
  chainIcon,
  accountAddress,
  username,
  showTag,
  TrimAddressComponent,
  onDisconnect
}: {
  accountExplorerUrl: string;
  chainIcon: string;
  accountAddress?: string;
  username?: string;
  showTag?: boolean;
  TrimAddressComponent: (props: {
    text: string;
    color?: 'muted' | 'secondary' | string;
    className?: string;
  }) => JSX.Element;
  onDisconnect?: () => void;
}) => {
  const handleDisconnect = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onDisconnect?.();
  };

  return (
    <>
      <img src={chainIcon} alt="" className="liq-w-6" />
      <span className="">MultiversX:</span>
      {accountAddress && (
        <div className="liq-flex liq-items-center liq-justify-between">
          <div className="liq-flex liq-max-w-[10rem] liq-items-center liq-gap-1">
            <MxLink
              to={`${accountExplorerUrl}`}
              target="_blank"
              showExternalIcon={false}
            >
              <AccountAddress
                address={accountAddress}
                username={username}
                showTag={showTag}
                TrimAddressComponent={TrimAddressComponent}
              />
            </MxLink>

            <CopyButton text={accountAddress} className="liq-text-sm" />
          </div>
        </div>
      )}
      {accountAddress && (
        <div className="liq-ml-auto liq-mr-0 liq-flex liq-items-center liq-gap-1">
          <button
            className="focus-primary liq-flex liq-items-center liq-gap-1 liq-rounded-xl liq-px-0 liq-py-2 liq-text-sm liq-font-semibold liq-text-neutral-400 liq-transition-colors liq-duration-200 hover:enabled:liq-text-white disabled:liq-opacity-50"
            onClick={handleDisconnect}
          >
            <FontAwesomeIcon icon={faPowerOff} />
          </button>
        </div>
      )}
    </>
  );
};
