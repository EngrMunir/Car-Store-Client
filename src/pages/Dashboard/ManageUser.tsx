
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import Swal from 'sweetalert2'
import { useChangeUserRoleMutation, useDeleteUsersMutation, useGetUsersQuery } from '@/redux/features/User/userManagementApi';

const ManageUsers = () => {
    const [filterRole, setFilterRole] = useState("");
    const { data } = useGetUsersQuery(undefined);
    const [deleteUser] = useDeleteUsersMutation();
    const [changeRole] = useChangeUserRoleMutation();
 
    const users = data?.data || [];
    console.log(users)

    const handleRole=(userId, newRole)=>{
        const info={
            id: userId,
            role: newRole
        }
        Swal.fire({
            title: `Are you sure to make ${newRole} ?`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, make ${newRole}!`
          }).then(async(result) => {
            if (result.isConfirmed) {
                try {
                    const res = await changeRole(info).unwrap();
                    console.log('response',res)
                    if (res.data.success) {
                        Swal.fire({
                            title: "Changed!",
                            text: "Role has been changed",
                            icon: "success"
                        });
                    }
                } catch (err) {
                    Swal.fire({
                        title: "Error",
                        text: "Failed to delete user",
                        icon: "error"
                    });
                }
              
            }
          });
    }

    const handleDelete =(userId: string)=>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async (result) => {
            if (result.isConfirmed) {
                
                try {
                    const response = await deleteUser(userId).unwrap();
                    console.log('response',response)
                    if (response.data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "User has been deleted.",
                            icon: "success"
                        });
                    }
                } catch (err) {
                    Swal.fire({
                        title: "Error",
                        text: "Failed to delete user",
                        icon: "error"
                    });
                }
            }
          });
    }
    return (
        <div className="overflow-x-auto">
            <div className="flex justify-end mb-4">
                <select 
                    value={filterRole} 
                    onChange={(e) => setFilterRole(e.target.value)} 
                    className="select select-bordered w-full max-w-xs"
                >
                    <option value="">All Roles</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
            </div>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    users.map((user,index) =><tr key={user._id} className="bg-base-200">
                        <th>{index+1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <select defaultValue={user.role} onChange={(e)=>handleRole(user._id, e.target.value)}>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </td>
                        <td> <button onClick={()=>handleDelete(user._id)}><FaTrash className="text-red-400 text-3xl"></FaTrash></button> </td>
                </tr>)
                }
                    
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;