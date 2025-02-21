export interface User {
  email: string;
  fullName: string;
  id: number;
  isActive: boolean;
  isSuperuser: boolean;
  lastActivity: number | null;
  tel: string | null;
  // password: string;
}

export interface UserFormData {
  email: string;
  password: string;
}

export interface OpenPages {
  isOpenCreateUserForm: boolean;
}

export interface UserCreate {
  email: string;
  tel: string | null;
  is_active: boolean;
  is_superuser: boolean;
  fullName: string;
  password: string;
}
