import {create} from 'zustand'
interface IProductStore{
    form_open:boolean
    toggleForm:(by:boolean)=>void
}
export const useProductFormStore = create<IProductStore>((set)=>({
    form_open:false,
    toggleForm: (by)=>{set(()=>({form_open:by}))
      
    }
}))