export interface LoginModel {
    email: string;
    password: string;
}

export type LoginAction = (data: LoginModel) => Promise<any>;
export type LogoutAction = () => Promise<any>;