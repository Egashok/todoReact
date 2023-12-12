import { $host} from "./index";

export const createTask = async (task) => {
    const {data} = await $host.post('api/task', task)
    return data
}
export const remove = async (id) => {
    
     await $host.delete('api/task/item/'+id)
    
}
export const fetchTask = async (date) => {
    const {data} = await $host.get('api/task/'+date)
    return data
}
