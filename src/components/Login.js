import React, { Fragment, useState } from 'react';

import Container from './styled-components/Container';
import TextField from './styled-components/TextField';
import Main from './styled-components/Main';
import Sidebar from './styled-components/Sidebar';
import Button from './styled-components/Button';
import useFormInput from '../utils/useFormInput';
import Alert from './Alerts';

export default function Login() {
  const [form, setForm] = useState('login');

  const email = useFormInput('');
  const password = useFormInput('');
  const passwordVerification = useFormInput('');

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackBarSettings, setSnackBarSettings] = useState({
    severity: '',
    message: '',
  });

  const validationRules = {
    email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
  };

  const validateForm = () => {
    let errorCounter = 0;

    if (password.value === '') {
      errorCounter++;
      setSnackBarSettings({
        severity: 'error',
        message: 'Precisa de senha.',
      });
      setOpenSnackbar(true);
    }
    if (email.value === '') {
      errorCounter++;
      setSnackBarSettings({
        severity: 'error',
        message: 'Insira seu e-mail primeiro.',
      });
      setOpenSnackbar(true);
    }

    if (email.value) {
      const regex = validationRules.email;
      if (!regex.test(email.value)) {
        errorCounter++;
        setSnackBarSettings({
          severity: 'error',
          message: 'Email inválido.',
        });
        setOpenSnackbar(true);
      }
    }
    if (password.value) {
      const regex = validationRules.password;
      if (!regex.test(password.value)) {
        errorCounter++;
        setSnackBarSettings({
          severity: 'error',
          message: 'Senha inválida.',
        });
        setOpenSnackbar(true);
      } else if (passwordVerification.value !== password.value) {
        errorCounter++;
        setSnackBarSettings({
          severity: 'error',
          message: 'Senhas não são iguais.',
        });
        setOpenSnackbar(true);
      }
    }

    if (errorCounter === 0) {
      setSnackBarSettings({
        severity: 'success',
        message: 'Você fez login com sucesso.',
      });
      setOpenSnackbar(true);
      setForm('login');
    }
  };

  const onSignUp = async () => {
    const isValidForm = await validateForm();
    if (!isValidForm) return;

    const formData = new FormData();

    if (email.value) {
      formData.append('Email', email.value);
    }
    if (password.value) {
      formData.append('Password', password.value);
    }
  };

  const onSignIn = () => {
    console.log('Entrar');
  };

  return (
    <Container>
      <Main>
        <h1>{form === 'login' ? 'Tela de Login' : 'Tela de Cadastro'}</h1>
        <p>
          Lorem ipsum dolor sit amet consetetur voluptua elitr, diam nonumy
          eirmod tempor.
        </p>
        <TextField
          autoFocus
          label="Endereço de Email"
          variant="outlined"
          onChange={email.onChange}
        />
        <TextField
          label="Senha"
          type="password"
          variant="outlined"
          onChange={password.onChange}
        />
        {form === 'signup' && password.value !== '' && (
          <TextField
            label="Repetir senha"
            type="password"
            variant="outlined"
            onChange={passwordVerification.onChange}
          />
        )}

        {form === 'login' ? (
          <Button onClick={onSignIn}>Entrar</Button>
        ) : (
          <Button onClick={onSignUp}>Cadastrar</Button>
        )}

        <p className="form-change">
          {form === 'login' ? (
            <Fragment>
              Criar uma nova conta.{' '}
              <span onClick={() => setForm('signup')}>Cadastrar</span>
            </Fragment>
          ) : (
            <Fragment>
              Já possui uma conta?{' '}
              <span onClick={() => setForm('login')}>Entrar</span>
            </Fragment>
          )}
        </p>
        {openSnackbar && (
          <Alert
            open={true}
            setOpen={setOpenSnackbar}
            severity={snackBarSettings.severity}
            message={snackBarSettings.message}
          />
        )}
      </Main>
      <Sidebar />
    </Container>
  );
}
