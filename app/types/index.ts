import { User } from "@prisma/client";


export type SafeUser = Omit<
User,
"createdAT" | "updatedAt" | "emailVerified"
> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
};