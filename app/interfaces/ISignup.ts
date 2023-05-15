export interface ISignup{
username: string
password:string
confirmPassword:string
phoneNumber:string
email:string,
role:string
}
enum Role{
    ADMIN,
    EDITOR

}