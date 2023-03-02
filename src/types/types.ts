import { User } from 'firebase/auth'

export interface AuthType {
  user: User | null
}

export interface HouseAddType {
  houseProfile: {
    houseId: string
    houseName: string
    location: string
  }
  setHouseProfile: React.Dispatch<
    React.SetStateAction<{
      houseId: string
      houseName: string
      location: string
    }>
  >
}

export interface HouseType {
  houseId: string
  houseName: string
  location: string
}

export interface TenantType {
  tenantId: string
  tenantName: string
  roomId: number
  phone: string
  email: string
  startDate: string
  endDate: string
  fee: number
}
