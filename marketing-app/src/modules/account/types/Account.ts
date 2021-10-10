import { User } from "shared/marketing-app-core";

export type UpdateUserAction = (user: User) => Promise<boolean>;