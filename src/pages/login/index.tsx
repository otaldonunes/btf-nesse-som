import React from 'react';
import { Container, Content, Input } from './styles';
import logo from '@assets/images/logo.svg';
import { api } from '@services/api';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import nookies from 'nookies';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';

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
  const router = useRouter();

  !!errors.user &&
    toast.error(errors.user.message, {
      toastId: 'user-error',
    });

  !!errors.password &&
    toast.error(errors.password.message, {
      toastId: 'password-error',
    });

  const handleLogin: SubmitHandler<LoginFormData> = async (values) => {
    const { user, password } = values;

    try {
      const response = await api.post('/api/login', {
        user,
        password,
      });

      const { token } = response.data;

      nookies.set(null, 'token', token, {
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      });

      toast.success('Login realizado com sucesso!');

      router.push('/adm');
    } catch (err) {
      const { message } = err.response.data;

      toast.error(message, {
        toastId: 'login-error',
      });
    }
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

export async function getStaticProps(context: GetStaticProps) {
  const { token } = nookies.get(context);

  if (token) {
    return {
      redirect: {
        destination: '/adm',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
