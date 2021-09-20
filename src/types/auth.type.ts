export interface AuthSlice {
  id: string;
  email: string;
  verified_email: boolean | null;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  locale: string;
}
