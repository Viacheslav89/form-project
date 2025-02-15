export interface User {
  email: string;
  fullName: string;
  id: number | null;
  isActive: boolean;
  isSuperuser: boolean;
  lastActivity: number | null;
  tel: number | null;
}

export interface UserFormData {
  email: string;
  password: string;
}

export interface OpenPages {
  isOpenAccaunt: boolean;
  isOpenUsers: boolean;
  isOpenInfo: boolean;
  isOpenMailing: boolean;
}
