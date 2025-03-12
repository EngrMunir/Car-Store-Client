import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useAddCarMutation } from '@/redux/features/Car/carManagementApi';
import { toast } from 'sonner';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectItem, SelectContent } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddCarForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [addCarMutation] = useAddCarMutation();

    const onSubmit = async (data) => {
        const imageFile = new FormData();
        imageFile.append("image", data.image[0]);
        
        const res = await axios.post(image_hosting_api, imageFile, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        
        if (res.data.success) {
            const carInfo = {
                ...data,
                year: Number(data.year),
                price: Number(data.price),
                quantity: Number(data.quantity),
                image: res.data.data.display_url
            };
            
            const res1 = await addCarMutation(carInfo);
            if (res1.data.success) {
                toast.success("Car added successfully", { duration: 1000 });
            }
        }
    };

    return (
        <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
            <h2 className='text-3xl text-center font-bold mb-6'>Add A Car</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Brand & Model */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                        <Label>Brand</Label>
                        <Input type="text" {...register('brand', { required: true })} placeholder='Car Brand' />
                        {errors.brand && <p className="text-red-500 text-sm">Brand is required</p>}
                    </div>
                    <div>
                        <Label>Model</Label>
                        <Input type="text" {...register('model', { required: true })} placeholder='Car Model' />
                        {errors.model && <p className="text-red-500 text-sm">Model is required</p>}
                    </div>
                </div>
                
                {/* Year & Price */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                        <Label>Year</Label>
                        <Input type="number" {...register('year', { required: true, min: 1994 })} placeholder='Manufacturing Year' />
                        {errors.year && <p className="text-red-500 text-sm">Year is required (Min: 1994)</p>}
                    </div>
                    <div>
                        <Label>Price ($)</Label>
                        <Input type="number" {...register('price', { required: true, min: 0 })} placeholder='Price' />
                        {errors.price && <p className="text-red-500 text-sm">Price is required</p>}
                    </div>
                </div>
                
                {/* Category & Quantity */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                        <Label>Category</Label>
                        <Select {...register('category', { required: true })}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Sedan">Sedan</SelectItem>
                                <SelectItem value="SUV">SUV</SelectItem>
                                <SelectItem value="Truck">Truck</SelectItem>
                                <SelectItem value="Coupe">Coupe</SelectItem>
                                <SelectItem value="Convertible">Convertible</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.category && <p className="text-red-500 text-sm">Category is required</p>}
                    </div>
                    <div>
                        <Label>Quantity</Label>
                        <Input type="number" {...register('quantity', { required: true, min: 0 })} placeholder='Quantity' />
                        {errors.quantity && <p className="text-red-500 text-sm">Quantity is required</p>}
                    </div>
                </div>
                
                {/* Image & In Stock */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                        <Label>Image</Label>
                        <Input type="file" {...register('image', { required: true })} />
                        {errors.image && <p className="text-red-500 text-sm">Image is required</p>}
                    </div>
                    <div className='flex items-center gap-2'>
                        <Checkbox {...register('inStock')} defaultChecked />
                        <Label>In Stock</Label>
                    </div>
                </div>
                
                {/* Description */}
                <div>
                    <Label>Description</Label>
                    <Textarea {...register('description', { required: true })} placeholder='Car Description' />
                    {errors.description && <p className="text-red-500 text-sm">Description is required</p>}
                </div>
                
                {/* Submit Button */}
                <div className='text-center'>
                    <Button type="submit" className="w-full">Add Car</Button>
                </div>
            </form>
        </div>
    );
};

export default AddCarForm;