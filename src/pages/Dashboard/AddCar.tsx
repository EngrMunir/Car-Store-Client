import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useAddCarMutation } from '@/redux/features/Car/carManagementApi';
import { toast } from 'sonner';

const image_hosting_key= import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddCarForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [addCarMutation]= useAddCarMutation();

    const onSubmit = async(data)=>{
      const imageFile = { image: data.image[0] };
      const res = await axios.post(image_hosting_api, imageFile, {
        headers:{
          'content-type':'multipart/form-data'
      }
      });
      if(res.data.success){
        const carInfo ={
          ...data,
          year: Number(data.year),
          price: Number(data.price),
          quantity: Number(data.quantity),
          image:res.data.data.display_url
        };
        const res1 = await addCarMutation(carInfo);

        if(res1.data.success){
          toast.success("Car added to database",{duration:1000});
        }
      }
    }

    return (
        <div className="bg-[#F4F3F0] p-24 mb-10">
            <h2 className='text-3xl text-center font-extrabold'>Add A Car</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Brand and Model Row */}
                <div className='md:flex gap-3 mb-8'>
                    <div className='form-control md:w-1/2'>
                        <label className="label">
                            <span className='label-text'>Brand</span>
                        </label>
                        <input type="text" {...register('brand', { required: true })} placeholder='Car Brand' className='input input-bordered w-full' />
                        {errors.brand && <span className="text-red-500">Brand is required</span>}
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className="label">
                            <span className='label-text'>Model</span>
                        </label>
                        <input type="text" {...register('model', { required: true })} placeholder='Car Model' className='input input-bordered w-full' />
                        {errors.model && <span className="text-red-500">Model is required</span>}
                    </div>
                </div>
                
                {/* Year and Price Row */}
                <div className='md:flex gap-3 mb-8'>
                    <div className='form-control md:w-1/2'>
                        <label className="label">
                            <span className='label-text'>Year</span>
                        </label>
                        <input type="number" {...register('year', { required: true, min: 1994, valueAsNumber:true })} placeholder='Manufacturing Year' className='input input-bordered w-full' />
                        {errors.year && <span className="text-red-500">Year is required (Min: 1994)</span>}
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className="label">
                            <span className='label-text'>Price ($)</span>
                        </label>
                        <input type="number" {...register('price', { required: true, min: 0 , valueAsNumber:true})} placeholder='Price' className='input input-bordered w-full' />
                        {errors.price && <span className="text-red-500">Price is required</span>}
                    </div>
                </div>
                
                {/* Category and Quantity Row */}
                <div className='md:flex gap-3 mb-8'>
                    <div className='form-control md:w-1/2'>
                        <label className="label">
                            <span className='label-text'>Category</span>
                        </label>
                        <select {...register('category', { required: true })} className="select select-bordered w-full">
                            <option value="">Select Category</option>
                            <option value="Sedan">Sedan</option>
                            <option value="SUV">SUV</option>
                            <option value="Truck">Truck</option>
                            <option value="Coupe">Coupe</option>
                            <option value="Convertible">Convertible</option>
                        </select>
                        {errors.category && <span className="text-red-500">Category is required</span>}
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className="label">
                            <span className='label-text'>Quantity</span>
                        </label>
                        <input type="number" {...register('quantity', { required: true, min: 0, valueAsNumber:true })} placeholder='Quantity' className='input input-bordered w-full' />
                        {errors.quantity && <span className="text-red-500">Quantity is required</span>}
                    </div>
                </div>
                
                {/* Image and In Stock Row */}
                <div className='md:flex gap-3 mb-8'>
                    <div className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Image</span>
                    </div>
                    <input {...register('image',{required:true})} type="file" className="file-input w-full max-w-xs" />
                    {errors.image && <span className="text-red-500">Image is required</span>}
                </div>

                    <div className='form-control md:w-1/2'>
                        <label className="label cursor-pointer flex items-center gap-2">
                            <span className='label-text'>In Stock</span>
                            <input type="checkbox" {...register('inStock')} className='checkbox' defaultChecked />
                        </label>
                    </div>
                </div>
                
                {/* Description */}
                <div className='mb-8'>
                    <div className='form-control w-full'>
                        <label className="label">
                            <span className='label-text'>Description</span>
                        </label>
                        <textarea {...register('description', { required: true })} placeholder='Car Description' className='textarea textarea-bordered w-full'></textarea>
                        {errors.description && <span className="text-red-500">Description is required</span>}
                    </div>
                </div>
                
                {/* Submit Button */}
                <div className='text-center'>
                    <input className="btn btn-secondary w-1/2 mb-2" type="submit" value="Add Car" />
                </div>
            </form>
        </div>
    );
};

export default AddCarForm;
