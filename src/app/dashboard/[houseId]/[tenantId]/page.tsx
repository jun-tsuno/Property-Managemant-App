'use client';
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { DocumentData } from 'firebase/firestore';
import fetchTenantInfo from '@/firebase/firestore/fetchTenantInfo';
import updateRentCollect from '@/firebase/firestore/updateRentCollect';
import useAuth from '@/hooks/useAuth';
import BackButton from '@/components/BackButton';
import MyDialog, { DialogProps } from '@/components/MyDialog';
import MyButton from '@/components/MyButton';
import deleteTenant from '@/firebase/firestore/deleteTenant';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import PaidTwoToneIcon from '@mui/icons-material/PaidTwoTone';
import PriceCheckTwoToneIcon from '@mui/icons-material/PriceCheckTwoTone';

interface IProps {
  params: { tenantId: string; houseId: string };
}

const resetRentCollection = async (userId: string | undefined, houseId: string, tenantId: string) => {
  await updateRentCollect(false, userId, houseId, tenantId);
  return;
};

const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const TenantPage = ({ params: { tenantId, houseId } }: IProps) => {
  const { user } = useAuth();
  const router = useRouter();
  const [tenantData, setTenantData] = useState<DocumentData>();
  const [modalConfig, setModalConfig] = useState<DialogProps | undefined>();
  const [currentMonth, _setCurrentMonth] = useState<number>(new Date().getMonth());
  const [isCollected, setIsCollected] = useState<boolean>(tenantData?.rentCollected ?? false);
  const isFirstRender = useRef(false);
  const currentMonthString = monthArr[currentMonth];

  // restrain useEffect at the first render
  useEffect(() => {
    isFirstRender.current = true;
  }, []);

  // initialize the rentCollected state when month is changed
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      console.log('fffffffff');
      resetRentCollection(user?.uid, houseId, tenantId);
      setIsCollected(false);
    }
  }, [currentMonth]);

  useEffect(() => {
    const getTenantData = async () => {
      const returnedData = await fetchTenantInfo(user?.uid, houseId, tenantId);
      setTenantData(returnedData);
      setIsCollected(returnedData?.rentCollected);
    };
    getTenantData();
  }, [user]);

  const handleRentCollect = async () => {
    setIsCollected(!isCollected);
    await updateRentCollect(!isCollected, user!.uid, houseId, tenantId);
    return;
  };

  const handleDelete = async () => {
    const res = await new Promise<string>((resolve) => {
      setModalConfig({
        onClose: resolve,
        title: 'Confirm',
        message: 'Are you sure to remove this rentee from your rentee list?'
      });
    });
    setModalConfig(undefined);

    if (res === 'ok') {
      deleteTenant(user!.uid, houseId, tenantId);
      router.push(`/dashboard/${houseId}`);
    }
    return;
  };

  return (
    <>
      <div className="ml-10 mb-10">
        <BackButton onClick={() => router.push(`/dashboard/${houseId}`)}>{'< House Detail'}</BackButton>
      </div>
      <div className="w-[90%] max-w-[500px] mx-auto space-y-10">
        <div
          className={`bg-slate-200 drop-shadow-lg rounded-2xl px-5 py-10  text-secondary border-4 ${
            isCollected ? 'border-collected' : 'border-unCollected'
          }`}
        >
          <div className="text-center pb-4 text-primary">
            <AccountBoxIcon sx={{ width: '130px', height: 'auto' }} />
          </div>
          <h2 className="text-center font-bold text-2xl">{tenantData?.tenantName}</h2>
          <div className="w-[90%] mx-auto pt-10 text-lg">
            <p>
              <span className="mr-2 italic font-bold text-slate">Room :</span> {tenantData?.roomId}
            </p>
            <p>
              <span className="mr-2 italic font-bold text-slate">Tel :</span> {tenantData?.phone}
            </p>
            <p>
              <span className="mr-2 italic font-bold text-slate">Contact :</span> {tenantData?.email}
            </p>
          </div>
          <div className="bg-white rounded-xl py-10 mt-14">
            <div className="space-y-5 w-[90%] sm:w-3/5 mx-auto text-lg">
              <p>
                <CalendarMonthTwoToneIcon />
                <span className="mx-2 italic font-bold text-slate">From :</span> {tenantData?.startDate}
              </p>
              <p>
                <CalendarMonthTwoToneIcon />
                <span className="mx-2 italic font-bold text-slate">To :</span> {tenantData?.endDate}
              </p>
              <p>
                <PaidTwoToneIcon />
                <span className="mx-2 italic font-bold text-slate">Rent(month) :</span> ${tenantData?.fee}
              </p>
              <div>
                <PriceCheckTwoToneIcon />
                <span className="mx-2 italic font-bold text-slate">{currentMonthString} :</span>
                {isCollected ? (
                  <span className="text-collected font-semibold italic">Collected</span>
                ) : (
                  <span className="text-unCollected font-semibold italic">Not Collected</span>
                )}
                <input type="checkbox" checked={isCollected} onChange={handleRentCollect} className="scale-150 ml-5" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[60%] mx-auto">
          <MyButton danger onClick={handleDelete}>
            Remove
          </MyButton>
        </div>
      </div>
      {modalConfig && <MyDialog {...modalConfig} />}
    </>
  );
};

export default TenantPage;
