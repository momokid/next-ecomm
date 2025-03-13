import { GlobeAltIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { lusitana } from './font';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center font-bold leading-none text-white`}
    >
      <ShieldCheckIcon className="h-12 w-12 rotate-[5deg]" />
      <p className="text-[44px]">WeSecure</p>
    </div>
  );
}
