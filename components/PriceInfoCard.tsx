import Image from 'next/image';

interface Props {
  title: string;
  iconSrc: string;
  value: string;
}

const PriceInfoCard = ({ title, iconSrc, value }: Props) => {
  return (
    <div className="rounded-md bg-white shadow p-4 flex flex-col gap-2 w-full">
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <div className="flex items-center gap-2">
        <Image src={iconSrc} alt={title} width={24} height={24} />
        <p className="text-xl font-bold text-teal-600">{value}</p>
      </div>
    </div>
  );
};

export default PriceInfoCard;