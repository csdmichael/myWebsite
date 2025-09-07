export class InactiveStation {
  Id: number
  LocationExternalId: string
  Location_Name: string
  Street_Address: string
  City: string
  County: string
  State: string
  Postal_Code: string
  Country: string
  Latitude: number
  Longitude: number
  IsActive: boolean
  LastTransactionDate: string
  MobilePayment: boolean
  SoftwareVersion2: string
  POS_Type: string
  showStationDetails!: boolean;
  showStationStats!: boolean;
  IsToActivate: boolean;
}
