import { useState } from "react";
import { useUpdatePasswordMutation } from "@/redux/features/User/userManagementApi";
import { useAppSelector } from "@/redux/features/hook";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";

const MyProfile = () => {
    const user = useAppSelector(selectCurrentUser);
    console.log('user in profile', user)

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [updatePassword, { isLoading }] = useUpdatePasswordMutation();

    const handlePasswordChange = async () => {
        if (!oldPassword || !newPassword) {
            toast.error("Please fill in both password fields.",{
                position:"top-center"
            });
            return;
        }

        try {
            await updatePassword({ email: user?.email, oldPassword, newPassword }).unwrap();
            toast.success("Password updated successfully!",{position:"top-center"});
            setOldPassword("");
            setNewPassword("");
        } catch (error) {
            toast.error(error.data?.message || "Failed to update password.");
        }
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-md max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Change Password</h2>

            <div className="flex flex-col space-y-3">
                <input
                    type="password"
                    className="border p-2 w-full rounded-md"
                    placeholder="Old Password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                />
                <input
                    type="password"
                    className="border p-2 w-full rounded-md"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-md disabled:opacity-50"
                    onClick={handlePasswordChange}
                    disabled={isLoading}
                >
                    {isLoading ? "Updating..." : "Update Password"}
                </button>
            </div>
        </div>
    );
};

export default MyProfile;