export interface User{
    firstName:string;
    lastName:string;
    email:string;
    dateOfBirth:Date;
    id:number;
    password:string;
    userType: string;
  }

enum Type {
  Pharmacist,
  Patient
}