import Image from 'next/image';
import MyButton from '@/components/MyButton';
import Link from 'next/link';

const HomePage = () => {
  return (
    <>
      <div className="mt-20 max-w-[1200px] mx-auto flex flex-col md:flex-row-reverse md:justify-center">
        <div className="p-3 pr-7 text-center md:self-center">
          <h1 className="font-bold">Manage your Properties</h1>
          <p className="pt-1">Tenant & Property Management with this app.</p>
          <div className="py-5 w-36 mx-auto">
            <Link href={'/account/register'}>
              <MyButton primary>Get Started</MyButton>
            </Link>
          </div>
        </div>
        <div className="w-[80%] aspect-square mx-auto relative md:max-w-[550px] md:mx-0">
          <Image src={'/image/hero.png'} priority alt="hero-pic" fill className="object-cover" />
        </div>
      </div>
      <section className="pt-20 space-y-10 mx-auto max-w-[1000px]">
        <div className="flex flex-col text-center sm:flex-row sm:justify-end sm:space-x-5">
          <h2 className="font-semibold pt-16">Manage your tenants by house.</h2>
          <div className="w-[30%] min-w-[300px] aspect-[4/5] relative mx-auto md:max-w-[345px] md:mx-0">
            <Image src={'/image/house-dashboard.png'} priority alt="example-1" fill className="object-cover" />
          </div>
        </div>
        <div className="flex flex-col text-center sm:flex-row-reverse sm:justify-end sm:space-x-5">
          <h2 className="font-semibold pt-16">See the current payment at one sight</h2>
          <div className="w-[30%] min-w-[300px] aspect-[5/7] mx-auto relative md:max-w-[345px] md:mx-0">
            <Image src={'/image/tenant-dashboard.png'} priority alt="example-2" fill className="object-cover" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
