export interface ProfileData {
  id: number;
  email: string;
  login: string;
  first_name: string;
  last_name: string;
  location?: string;
  usual_full_name: string;
  image: {
    link: string;
    versions: {
      large: string;
      medium: string;
      small: string;
      micro: string;
    };
  };
  cursus_users?: {
    grade?: string;
    level?: number;
    skills?: {
      id?: number;
      name: string;
      level: number;
    }[];
  }[];
  staff?: boolean;
  correction_point: number;
  pool_month: string;
  wallet: number;
}
