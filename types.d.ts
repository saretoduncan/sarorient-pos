type Token = {
  access_token: string;
  refresh_token: string;
};
type User = {
  username: string;
  phoneNumber: string | null;
  email: string | null;
  role: string;
  id: string;
};
type TokenVariables = {
  userId: string;
  userRole: string;
};
type LoginData ={
  username:string,
  password:string
}
type Products={
  product:string,
  brand:string,
  buyingPrice:number,
  code:string,
  price:number,
  quantity:number
}