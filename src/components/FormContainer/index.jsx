import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import Swal from "sweetalert2";
import { PASSWORD, USERNAME } from "../../utils/constants";
import { ReCaptcha } from "../ReCaptcha";
import { GlobalState } from "../../context";

const FormContainer = () => {
  const { captcha } = useContext(GlobalState);

  const navigate = useNavigate();

  const onFinish = (values) => {
    const { Usuario, Contraseña } = values;
    if (Usuario === USERNAME && Contraseña === PASSWORD) {
      if (captcha) {
        navigate("/marvelcharacters", { replace: true });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Confirma que no eres un robot",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Verifica nombre de usuario o contraseña",
      });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      style={{ maxWidth: 360, marginTop: 60 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="Usuario"
        rules={[
          {
            required: true,
            message: "Por favor ingrese su nombre de usuario!",
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="Contraseña"
        rules={[
          {
            required: true,
            message: "Por favor ingrese su contraseña!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Recordar cuenta</Checkbox>
          </Form.Item>
        </Flex>
      </Form.Item>
      <Form.Item>
        <ReCaptcha />
      </Form.Item>
      <Form.Item>
        <Button block type="primary" htmlType="submit" className="btn-submit">
          Ingresar
        </Button>
      </Form.Item>
    </Form>
  );
};
export { FormContainer };
