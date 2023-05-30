type Token = {
  access_token: string;
  refresh_token: string;
};
type User ={
    username: string;
    phoneNumber: string | null;
    email: string | null;
    role: string;
    id: string;
}