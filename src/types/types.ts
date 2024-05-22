import { FC, ReactNode } from "react";

export interface FCWithChildren extends FC {
    children: ReactNode,
}

export interface User {
    name: string,
    phone: string,
    email: string,
    address: string,
    position_name: string,
    department: string,
    hire_date: string
}

export type Users = User[]

export interface UsersState {
    searchQuery: string,
    userModal: boolean,
    actualUser: string,
}