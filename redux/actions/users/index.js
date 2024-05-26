import { GET_USERS } from "../../constants/users";


export const getUsers = () => {
    return {
        type: GET_USERS.GET
    }
}