'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import HouseCard from '@/components/HouseCard';
import useAuth from '@/hooks/useAuth';
import { DocumentData } from 'firebase/firestore';
import AddHomeIcon from '@mui/icons-material/AddHome';
import fetchHouse from '@/firebase/firestore/fetchHouse';
import isAuthenticated from '@/firebase/firestore/isAuthenticated';

const DashBoardPage = () => {
  const { user } = useAuth();
  // const router = useRouter();
  const [houses, setHouses] = useState<DocumentData[]>([]);

  useEffect(() => {
    // isAuthenticated() === false && router.push('/');

    const getHouseData = async () => {
      const returnedData = await fetchHouse(user);
      setHouses(returnedData);
    };
    getHouseData();
  }, [user, isAuthenticated()]);

  return (
    <>
      {!user ? (
        <div>Please Login first.</div>
      ) : (
        <>
          <h2 className="pl-5 mb-5">
            Welcome Back, <span className="font-bold">{`${user?.displayName}`}</span>
          </h2>
          <section>
            <h3 className="pl-5">House List</h3>
            <div className="flex flex-wrap align-center">
              {houses.length > 0 &&
                houses.map((house) => {
                  return <HouseCard key={house.houseName} house={house} />;
                })}
              <div className="my-5 mx-auto">
                <Link href={'/dashboard/addhouse'}>
                  <div className="w-80 aspect-square rounded-2xl text-zinc-500 hover:text-customOrange bg-zinc-300 cursor-pointer flex flex-col justify-center items-center">
                    <div className="inline-block">
                      <AddHomeIcon
                        sx={{
                          fontSize: '60px'
                        }}
                      />
                    </div>
                    <h3>Add House</h3>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default DashBoardPage;
