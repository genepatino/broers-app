import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import Swal from 'sweetalert2'
import { PASSWORD, USERNAME } from '../../utils/constants';
import { ReCaptcha } from '../ReCaptcha';
import { GlobalState } from '../../context';


const FormContainer = () => {

  const {captcha} = useContext(GlobalState)

  const navigate = useNavigate()

  const onFinish = (values) => {

    const {username, password} = values
    if(username === USERNAME &&  password === PASSWORD){
      if(captcha){
        navigate("/marvelcharacters", { replace: true })
      }else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Confirma que no eres un robot",
        });
      }
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Verifica nombre de usuario o contraseña",
      });
    }
    
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  
  return(
    <Form
      name="basic"
      labelCol={{
        span: 6,
      }}
      className='login-form'
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese su nombre de usuario!',
          },
        ]}
        className='label-item'
        
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese su contraseña!',
          },
        ]}
      >
        <Input.Password/>
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <Checkbox
        >Recordar cuenta</Checkbox>
      </Form.Item>
      
      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <ReCaptcha/>
        
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" className='btn-submit'>
          Ingresar
        </Button>
      </Form.Item>
    </Form>
  )
};
export {FormContainer};