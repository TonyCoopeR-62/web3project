import logo from '../../images/logo.png';

const Footer = (): JSX.Element => {
  return (
      <div className='w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer'>
        <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4'>
          <div className='flex flex-[0.5] justify-center items-center'>
            <img src={logo} alt= 'logo' className='w-32'/>
          </div>
          <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full'>
            <p className='text-white text-base text-center mx-2 cursor-pointer'>
              Market
            </p>
            <p className='text-white text-base text-center mx-2 cursor-pointer'>
              Exchange
            </p>
            <p className='text-white text-base text-center mx-2 cursor-pointer'>
              Tutorial
            </p>
            <p className='text-white text-base text-center mx-2 cursor-pointer'>
              Wallet
            </p>
          </div>
        </div>
        <div className='flex justify-center items-center flex-col mt-5 mb-5'>
          <p className='text-small text-white text-center'>
            Come join us
          </p>
          <p className='text-small text-white text-center'>
            jar1991@mail.ru
          </p>
        </div>
        <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400'/>
        <div className='sm:w-[90%] w-full flex justify-between items-center mt-3'>
        <p className='text-small text-white text-center'>
            @TonyCoopeR-62
          </p>
        </div>
      </div>
  );
};

export default Footer;
