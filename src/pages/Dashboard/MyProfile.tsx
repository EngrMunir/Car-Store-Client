import { useAppSelector } from "@/redux/features/hook";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useState } from "react";
import { toast } from "sonner";
import { useUpdateProfileMutation } from "@/redux/features/User/userManagementApi";

const MyProfile = () => {
    const user = useAppSelector(selectCurrentUser);
    console.log('user ',user);
    const [name, setName] = useState(user?.name || "");
    const [profilePic, setProfilePic] = useState(user?.profilePic || "");
    const [updateProfile, { isLoading }] = useUpdateProfileMutation();

    const handleUpdate = async () => {
        try {
            const updatedUser = await updateProfile({ name, profilePic }).unwrap();
            toast.success("Profile updated successfully!");
        } catch (error) {
            toast.error("Failed to update profile!");
        }
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-md max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
            
            <div className="flex flex-col items-center">
                <img
                    src={profilePic || "/default-avatar.png"}
                    alt="Profile"
                    className="w-24 h-24 rounded-full border mb-4"
                />
                <input
                    type="text"
                    className="border p-2 w-full rounded-md mb-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    className="border p-2 w-full rounded-md mb-2"
                    placeholder="Profile Picture URL"
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2 disabled:opacity-50"
                    onClick={handleUpdate}
                    disabled={isLoading}
                >
                    {isLoading ? "Updating..." : "Update Profile"}
                </button>
            </div>

            <div className="mt-4">
                <p><strong>Email:</strong> {user?.email}</p>
                <p><strong>Role:</strong> {user?.role}</p>
            </div>
        </div>
    );
};

export default MyProfile;
