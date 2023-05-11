import {create} from 'zustand'
interface IProductStore{
    form_open:boolean
    toggleForm:(by:boolean)=>void,
        
}
interface IFormPurpose{
    productId:number
    isUpdate:boolean
    toggleForm:(by:boolean)=>void
    addProductId:(by:number)=>void
}
interface IPaymentMethod{
    isMpesa:boolean
    togglePaymentMethod:(by:boolean)=>void
}
export const useProductFormStore = create<IProductStore>((set)=>({
    form_open:false,
    toggleForm: (by)=>{set(()=>({form_open:by}))
      
    }
}))
export const useStoreChangeFormPurpose= create<IFormPurpose>((set)=>({
    isUpdate:true,
    productId:0,
    toggleForm:(by)=>{set(()=>({isUpdate:by}))},
    addProductId:(by)=>{set(()=>({productId:by}))}
}))
export const usePaymentMethodStore = create<IPaymentMethod>((set)=>({
    isMpesa:false,
    togglePaymentMethod:(by)=>{set(()=>({isMpesa:by}))}
}))
