import React from 'react';
import { Container, Content, Input } from './styles';
import logo from '@assets/images/logo.svg';
import { api } from '@services/api';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

type LoginFormData = {
  user: string;
  password: string;
};

const LoginSchema = yup.object().shape({
  user: yup.string().required('O campo usuário é obrigatório!'),
  password: yup.string().required('O campo senha é obrigatório!'),
});

export default function Login(): JSX.Element {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(LoginSchema),
  });
  const { errors } = formState;

  !!errors.user &&
    toast.error(errors.user.message, {
      toastId: 'user-error',
    });

  !!errors.password &&
    toast.error(errors.password.message, {
      toastId: 'password-error',
    });

  const handleLogin: SubmitHandler<LoginFormData> = (values) => {
    console.log(values);
  };

  return (
    <Container>
      <Content>
        <img
          className="logo"
          src={logo}
          alt="Pra cego ver: Logo Boto Fé Nesse Som"
        />
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="formContainer">
            <div>
              <Input
                name="user"
                type="text"
                placeholder="usuário"
                autoComplete="off"
                isInvalid={!!errors?.user}
                {...register('user')}
              />
              <Input
                name="password"
                type="password"
                placeholder="senha"
                autoComplete="off"
                isInvalid={!!errors?.password}
                {...register('password')}
              />
            </div>
            <button type="submit">Entrar</button>
          </div>
        </form>
      </Content>
    </Container>
  );
}
