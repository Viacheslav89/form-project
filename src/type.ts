export interface User {
    email: string;
    fullName: string;
    id: number | null;
    isActive: boolean;
    isSuperruser: boolean;
    lastActivity: number | null;
    tel: number | null;
};

export interface UserFormData {
    email: string;
    password: string;
};

