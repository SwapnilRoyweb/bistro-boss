import { useQuery } from "@tanstack/react-query";
import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"

const useAdmin = () => {
    const {user, loading} = useContext(AuthContext);

    const token = localStorage.getItem('access-token');

    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/users/admin/${user?.email}`, {
                headers: {
                    authorization : `bearer ${token}`
                }
            }
            )
            // console.log(response);
            return response.json();
        },
    })
    // console.log(isAdmin);
    return [isAdmin?.admin, isAdminLoading]
}

export default useAdmin;