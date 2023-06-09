import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';
import type { IconType } from 'react-icons';


interface ServiceCardProps {
  title: string;
  subtitle: string;
  Icon: IconType;
  color: string;
}

const messages = [
  {
    title: 'Security Guaranteed',
    subtitle: 'Security is guaranteed. We always maintained privacy and maintaining the quality of our products.',
    Icon: BsShieldFillCheck,
    color: 'bg-[#2952E3]'
  },
  {
    title: 'Best exchange rates',
    subtitle: 'Security is guaranteed. We always maintained privacy and maintaining the quality of our products.',
    Icon: BiSearchAlt,
    color: 'bg-[#8945F8]'
  },
  {
    title: 'Fastest transactions',
    subtitle: 'Security is guaranteed. We always maintained privacy and maintaining the quality of our products.',
    Icon: RiHeart2Fill,
    color: 'bg-[#F84550]'
  }
];

const ServiceCard = ({ title, subtitle, Icon, color }: ServiceCardProps): JSX.Element => (
  <div className='flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl'>
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {<Icon fontSize={21} className='text-white' />}
    </div>
    <div className='ml-5 flex flex-col flex-1'>
      <h3 className='mt-2 text-white text-lg'>{title}</h3>
      <p className='mt-2 text-white text-sm md:w-9/12'>{subtitle}</p>
    </div>
  </div>
);

const Services = (): JSX.Element => {
  return (
    <div className='flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services'>
      <div className='flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4'>
        <div className='flex-1 flex flex-col justify-start items-start'>
          <h1 className='text-white text-3xl sm:text-5xl py-2 text-gradient'>
            Services that we
            <br />
            continue to improve
          </h1>
        </div>
      </div>
      <div className='flex-1 flex flex-col justify-start items-center'>
        {messages.map(({ title, subtitle, Icon, color }) => (
          <ServiceCard
            key={title}
            color={color}
            title={title}
            Icon={Icon}
            subtitle={subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
