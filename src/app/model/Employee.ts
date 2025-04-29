import { DepartmentType } from "./util/DepartmentType";

export type Employee = {
    id?: number;
    name: string,
    email: string,
    department: DepartmentType;
    createdAt:string;
    updatedAt?:string;
}