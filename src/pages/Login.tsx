
import { Button, Row } from "antd";
import { useNavigate } from "react-router-dom";
import CarForm from "../components/form/CarForm";
import CarInput from "../components/form/CarInput";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const Login = () => {
    const navigate = useNavigate();

    const defaultValues = {
        email:'smsirajulmonir@gmail.com',
        password:'admin123'
    }

    const onSubmit = async(data:FieldValues) =>{
        const toastId = toast.loading('Logging in');

        try {
            const userInfo ={
                email:data.email,
                password:data.password,
            };
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Row justify="center" align="middle" style={{height:'100vh'}}>
            <CarForm onSubmit={onSubmit} defaultValues={defaultValues}>
                <label htmlFor="email">Email:</label>
                <CarInput type="text" name="email" label="Email:"/>
                <label htmlFor="password">Password:</label>
                <CarInput type="text" name="password" label="Password" />
                <Button htmlType="submit">Login</Button>
            </CarForm>
        </Row>
    );
};

export default Login;