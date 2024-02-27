export type ProductProps = {
  title: string;
  image: string;
  price: number;
  id: number;
};

export interface IProductProps {
  title: string;
  image: string;
  price: number;
  id: number;
}

export type User = {
  name: string;
  email: string;
};

export type EmployeeProps = User & {
  id: number;
  department: string;
};
export type AdminProps = User & {
  adminNo: number;
};
export interface IUser {
  name: string;
  email: string;
}
export interface IEmployeeProps extends IUser {
  id: number;
  department: string;
}
export interface IAdminProps extends IUser {
  adminNo: number;
}
