import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState, useRef, useEffect } from "react";
import { Loader2, Upload } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAppSelector } from "@/redux/features/hook";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import {
  useGetSingleUserQuery,
  useUpdateUserProfilePhotoMutation,
} from "@/redux/features/User/userManagementApi";
import { imageUpload } from "@/utils/imageUpload";

const userSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  status: z.string().min(1, "Status is required"),
  shippingAddress: z.string().min(10, "Address must be at least 10 characters"),
  photo: z.string().optional(),
});

type UserFormData = z.infer<typeof userSchema>;

export const UserProfilePage = () => {
  const userInfo = useAppSelector(selectCurrentUser);
  const email = userInfo?.email;

  const fileInputRef = useRef<HTMLInputElement>(null);
  const { data: userData, isLoading: isFetching } = useGetSingleUserQuery(email, {
    skip: !email,
  });

  const user = userData?.data;
  const [previewImage, setPreviewImage] = useState<string | null>(user?.photo);
  const [updateUserProfile, { isLoading: isUpdatingProfile }] = useUpdateUserProfilePhotoMutation();

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

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.includes("image")) return toast.error("Please upload an image file");
    if (file.size > 5 * 1024 * 1024) return toast.error("Max file size is 5MB");

    try {
      const image_data = await imageUpload(file);
      if (image_data.success) {
        const imageUrl = image_data.data.display_url;
        form.setValue("photo", imageUrl);
        setPreviewImage(imageUrl);
        toast.success("Image uploaded successfully!");
      } else toast.error("Image upload failed");
    } catch {
      toast.error("Image upload error");
    }
  };

  const onSubmit: SubmitHandler<UserFormData> = async (data) => {
    try {
      if (user?._id) {
        const res = await updateUserProfile({ id: user._id, userData: data }).unwrap();
        if (res.success) toast.success(res.message);
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Update failed");
    }
  };

  if (isFetching) return <div className="text-center py-10 text-lg">Loading user data...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-slate-900 rounded shadow-md">
      <h2 className="text-3xl font-semibold mb-4">User Profile</h2>

      {/* Optional User Info Display */}
      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md mb-6 text-sm text-slate-700 dark:text-slate-300">
        <p><strong>Email:</strong> {user?.email || "N/A"}</p>
        {user?.role && <p><strong>Role:</strong> {user.role}</p>}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Image Upload */}
            <FormField
              control={form.control}
              name="photo"
              render={() => (
                <FormItem>
                  <FormLabel>Profile Photo</FormLabel>
                  <div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="image/*"
                      className="hidden"
                    />
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="cursor-pointer border-2 border-dashed border-gray-300 dark:border-gray-600 p-6 rounded flex flex-col items-center justify-center hover:border-gray-400 dark:hover:border-gray-500">
                      {previewImage ? (
                        <img
                          src={previewImage}
                          alt="Preview"
                          className="max-h-40 object-contain"
                        />
                      ) : (
                        <>
                          <Upload className="h-10 w-10 text-gray-400" />
                          <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
                            PNG, JPG, GIF (max 5MB)
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Name & Status */}
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name*</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter your name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status*</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value || ""}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
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
          </div>

          {/* Address */}
          <FormField
            control={form.control}
            name="shippingAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Shipping Address*</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Enter your shipping address"
                    className="min-h-[100px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit */}
          <div className="text-end">
            <Button type="submit" disabled={isUpdatingProfile}>
              {isUpdatingProfile && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Update Profile
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default UserProfilePage;
