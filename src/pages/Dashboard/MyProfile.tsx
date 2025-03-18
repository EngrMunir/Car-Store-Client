/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState, useRef, useEffect } from "react";
import { Loader2, Upload } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAppSelector } from "@/redux/features/hook";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetSingleUserQuery, useUpdateUserProfilePhotoMutation } from "@/redux/features/User/userManagementApi";
import { imageUpload } from "@/utils/imageUpload";

// Define the form validation schema using Zod
const userSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  status: z.string().min(1, "Status is required"),
  shippingAddress: z.string().min(10, "Bio must be at least 10 characters"),
  photo: z.string().optional(),
});

// Type for the form data
type UserFormData = z.infer<typeof userSchema>;

export const UserProfilePage = () => {
  const userInfo = useAppSelector(selectCurrentUser);

  const email = userInfo?.email;

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Fetch the user data
  const { data: userData, isLoading: isFetching } = useGetSingleUserQuery(
    email,
    {
      skip: !email,
    }
  );

  const user = userData?.data;

  const [previewImage, setPreviewImage] = useState<string | null>(user?.photo);

  // Mutations
  const [updateUserProfile, { isLoading: isUpdatingProfile }] =
    useUpdateUserProfilePhotoMutation();

  const form = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    mode: "onBlur",
    defaultValues: {
      name: user?.name || "",
      photo: user?.photo || "",
      status: user?.status || "",
      shippingAddress: user?.shippingAddress || "",
    },
  });

  // Set initial form values when user data is fetched
  useEffect(() => {
    if (user) {
      form.reset({
        name: user.name,
        photo: user.photo,
        status: user.status,
        shippingAddress: user.shippingAddress,
      });
      setPreviewImage(user.photo);
    }
  }, [user, form]);

  // Handle file change for image upload
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file type
    if (!file.type.includes("image")) {
      toast.error("Please upload an image file");
      return;
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size should be less than 5MB");
      return;
    }

    // Upload the image to ImgBB
    try {
      const image_data = await imageUpload(file);

      if (image_data.success) {
        const imageUrl = image_data.data.display_url;
        form.setValue("photo", imageUrl);
        setPreviewImage(imageUrl);
        toast.success("Image uploaded to ImgBB successfully!");
      } else {
        toast.error("Image upload failed, please try again.");
      }
    } catch (error) {
      toast.error("Image upload error, please try again.");
    }
  };

  // Handle form submission
  const onSubmit: SubmitHandler<UserFormData> = async (data) => {
    try {
      if (user?._id) {
        // Update profile
        const res = await updateUserProfile({
          id: user._id,
          userData: data,
        }).unwrap();

        if (res.success) {
          toast.success(res.message);
        }
      }
    } catch (error: any) {
      console.error("Failed to update profile:", error);
      toast.error(error?.data?.message || "Failed to update profile");
    }
  };

  if (isFetching) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">User Profile</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Profile Photo */}
            <FormField
              control={form.control}
              name="photo"
              render={() => (
                <FormItem>
                  <FormLabel>Profile Photo</FormLabel>
                  <div className="flex flex-col gap-4">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="image/*"
                      className="hidden"
                    />
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="cursor-pointer border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 flex flex-col items-center justify-center hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
                      {previewImage ? (
                        <div className="w-full">
                          <img
                            src={previewImage}
                            alt="Profile preview"
                            className="mx-auto max-h-48 object-contain"
                          />
                          <p className="text-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                            Click to change image
                          </p>
                        </div>
                      ) : (
                        <>
                          <Upload className="h-12 w-12 text-gray-400" />
                          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            Click to upload profile photo
                          </p>
                          <p className="text-xs text-gray-400 dark:text-gray-500">
                            PNG, JPG, GIF up to 5MB
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name*</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your name"
                          {...field}
                          className="dark:bg-slate-200 placeholder:dark:text-slate-400 dark:text-slate-900 font-medium"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Status */}
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status*</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value || ""}>
                        <FormControl>
                          <SelectTrigger className="dark:bg-slate-200 dark:text-slate-900">
                            <SelectValue placeholder="Select a status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="inactive">Inactive</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* ShippingAddress */}
              <FormField
                control={form.control}
                name="shippingAddress"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Shipping Address*</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your bio"
                        {...field}
                        className="dark:bg-slate-200 placeholder:dark:text-slate-400 dark:text-slate-900 font-medium"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-4 mt-6">
            <Button type="submit" disabled={isUpdatingProfile}>
              {isUpdatingProfile ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              Update Profile
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default UserProfilePage;

// ------------------------------
// import { useState } from "react";
// import { useUpdatePasswordMutation } from "@/redux/features/User/userManagementApi";
// import { useAppSelector } from "@/redux/features/hook";
// import { selectCurrentUser } from "@/redux/features/auth/authSlice";
// import { toast } from "sonner";

// const MyProfile = () => {
//     const user = useAppSelector(selectCurrentUser);
//     console.log('user in profile', user)

//     const [oldPassword, setOldPassword] = useState("");
//     const [newPassword, setNewPassword] = useState("");
//     const [updatePassword, { isLoading }] = useUpdatePasswordMutation();

//     const handlePasswordChange = async () => {
//         if (!oldPassword || !newPassword) {
//             toast.error("Please fill in both password fields.",{
//                 position:"top-center"
//             });
//             return;
//         }

//         try {
//             await updatePassword({ email: user?.email, oldPassword, newPassword }).unwrap();
//             toast.success("Password updated successfully!",{position:"top-center"});
//             setOldPassword("");
//             setNewPassword("");
//         } catch (error) {
//             toast.error(error.data?.message || "Failed to update password.");
//         }
//     };

//     return (
//         <div className="p-6 bg-white shadow-md rounded-md max-w-md mx-auto">
//             <h2 className="text-2xl font-semibold mb-4">Change Password</h2>

//             <div className="flex flex-col space-y-3">
//                 <input
//                     type="password"
//                     className="border p-2 w-full rounded-md"
//                     placeholder="Old Password"
//                     value={oldPassword}
//                     onChange={(e) => setOldPassword(e.target.value)}
//                 />
//                 <input
//                     type="password"
//                     className="border p-2 w-full rounded-md"
//                     placeholder="New Password"
//                     value={newPassword}
//                     onChange={(e) => setNewPassword(e.target.value)}
//                 />
//                 <button
//                     className="bg-blue-500 text-white py-2 px-4 rounded-md disabled:opacity-50"
//                     onClick={handlePasswordChange}
//                     disabled={isLoading}
//                 >
//                     {isLoading ? "Updating..." : "Update Password"}
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default MyProfile;