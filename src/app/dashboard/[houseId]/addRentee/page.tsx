'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/components/Input';
import MyButton from '@/components/MyButton';
import useAuth from '@/hooks/useAuth';
import addRentee from '@/firebase/firestore/addRentee';
import { v4 as uuidv4 } from 'uuid';
import { TenantType } from '@/types/types';
import { ToastContainer } from 'react-toastify';
import { successToast, errorToast } from '@/helpers/throwToast';
import BackButton from '@/components/BackButton';

interface IProps {
  params: { houseId: string };
}

const AddRenteePage = ({ params: { houseId } }: IProps) => {
  const [tenantName, setTenantName] = useState<string>('');
  const [roomId, setRoomId] = useState<number>(0);
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [fee, setFee] = useState<number>(0);
  const { user } = useAuth();
  const router = useRouter();

  const handleNameChange = (term: string) => {
    setTenantName(term);
  };

  const handleRoomChange = (term: number) => {
    setRoomId(term);
  };

  const handlePhoneChange = (term: string) => {
    setPhone(term);
  };
  const handleEmailChange = (term: string) => {
    setEmail(term);
  };
  const handleStartDateChange = (term: string) => {
    setStartDate(term);
  };
  const handleEndDateChange = (term: string) => {
    setEndDate(term);
  };

  const handleFeeChange = (term: number) => {
    setFee(term);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!tenantName || !roomId || !phone || !email || !startDate || !endDate || !fee) {
      errorToast('All fields are required.');
      return;
    }

    const tenantId = uuidv4();
    const renteeData: TenantType = {
      tenantId,
      tenantName,
      roomId,
      phone,
      email,
      startDate,
      endDate,
      fee,
      rentCollected: false
    };

    try {
      await addRentee(user!.uid, houseId, tenantId, renteeData).then(() => {
        successToast();
        setTenantName('');
        setRoomId(0);
        setPhone('');
        setEmail('');
        setStartDate('');
        setEndDate('');
        setFee(0);
      });
    } catch (error) {
      console.log(error);
      errorToast();
    }
  };

  const inputFieldInfo = [
    { label: 'Name', value: tenantName, type: 'text', func: handleNameChange },
    {
      label: 'Room Number',
      value: roomId,
      type: 'number',
      func: handleRoomChange
    },
    {
      label: 'Phone',
      value: phone,
      type: 'text',
      func: handlePhoneChange
    },
    {
      label: 'E-mail',
      value: email,
      type: 'text',
      func: handleEmailChange
    },
    {
      label: 'Rent Fee',
      value: fee,
      type: 'number',
      func: handleFeeChange
    },
    {
      label: 'Start Date',
      value: startDate,
      type: 'text',
      func: handleStartDateChange
    },
    {
      label: 'End Date',
      value: endDate,
      type: 'text',
      func: handleEndDateChange
    }
  ];

  return (
    <div className="w-[90%] mx-auto max-w-[600px]">
      <div className="ml-10">
        <BackButton onClick={() => router.back()}>{'< House Detail'}</BackButton>
      </div>
      <h1 className="text-center py-5 ">Add a New Rentee</h1>
      <form onSubmit={handleSubmit}>
        <div className="my-10 space-y-5 w-[90%] mx-auto">
          {inputFieldInfo.map((el) => {
            return (
              <div key={el.label}>
                <Input
                  label={{ labelName: el.label, placeholder: 'Type Here...' }}
                  value={el.value}
                  inputType={el.type}
                  handleChange={el.func}
                />
              </div>
            );
          })}
        </div>
        <div className="w-32 mx-auto">
          <MyButton primary type="submit">
            Add
          </MyButton>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddRenteePage;
