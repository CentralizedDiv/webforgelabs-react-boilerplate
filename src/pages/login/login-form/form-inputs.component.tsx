import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Checkbox, Form, Icon, Input, Modal, notification } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { UserCredentials } from 'core/services/auth/auth.models';
import axios from 'axios';

export interface LoginFormProps extends UserCredentials, FormComponentProps {}

export const FormInputs = props => {
  const { getFieldDecorator } = props.form;
  const { t } = useTranslation();
  const [recover, setRecoverState] = useState({
    modal: false,
    loading: false,
  });
  // State Hooks
  const [passwordIsVisible, togglePasswordVisibility] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleVisibleClick = () => {
    togglePasswordVisibility(!passwordIsVisible);
  };

  const handleToggleRecoverModal = () => {
    setRecoverState({
      ...recover,
      modal: !recover.modal,
    });
  };

  const sendRecoverMail = () => {
    setRecoverState({
      ...recover,
      loading: true,
    });
    props.form.validateFields((_err: any, values: any) => {
      if (values.email_recover) {
        axios
          .post(``, { emailAddress: values.email_recover, language: 'en' })
          .then(() => {
            setRecoverState({
              ...recover,
              modal: false,
              loading: false,
            });
            notification.success({ message: 'Link de redefinição de senha enviado ao seu e-mail' });
          })
          .catch(() => {
            setRecoverState({
              ...recover,
              loading: false,
            });
            notification.error({ message: 'Ocorreu um problema ao recuperar sua senha.' });
          });
      }
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // tslint:disable-next-line: variable-name
    // props.form.validateFields((_err: any, values: UserCredentials) => {
    //   if (!values.username) {
    //     setUsernameError(true);
    //   } else {
    //     setUsernameError(false);
    //   }
    //   if (!values.password) {
    //     setPasswordError(true);
    //   } else {
    //     setPasswordError(false);
    //   }
    //   localStorage.setItem('remember', values.remember.toString());
    //   if (values.username && values.password) {
    //     props.LoginRequest(values);
    //   }
    // });
    props.LoginRequest({ username: 'asd', password: 'asd' });
  };

  return (
    <Form layout="vertical" onSubmit={handleSubmit} className="form__inputs">
      <Form.Item
        label="Username"
        hasFeedback={false}
        validateStatus={usernameError || props.error ? 'error' : 'validating'}
      >
        {getFieldDecorator('username')(<Input />)}
      </Form.Item>
      <Form.Item
        label="Password"
        hasFeedback={false}
        validateStatus={passwordError || props.error ? 'error' : 'validating'}
      >
        {getFieldDecorator('password')(
          <Input
            className="inputs__password"
            suffix={<Icon type={passwordIsVisible ? 'eye-invisible' : 'eye'} onClick={handleVisibleClick} />}
            type={passwordIsVisible ? 'text' : 'password'}
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(<Checkbox className="inputs__remember">{t('form.remember_me')}</Checkbox>)}
        <span className="inputs__forgot" onClick={handleToggleRecoverModal}>
          <span>{t('form.forgot_password')}</span>
        </span>
        <Button loading={props.isLoading} type="primary" htmlType="submit" className="inputs__button">
          {t('form.signin_button')}
        </Button>
      </Form.Item>
      <Modal
        centered={true}
        visible={recover.modal}
        onCancel={handleToggleRecoverModal}
        onOk={sendRecoverMail}
        okButtonProps={{ loading: recover.loading }}
      >
        <Form.Item label="Email">{getFieldDecorator('email_recover')(<Input />)}</Form.Item>
      </Modal>
    </Form>
  );
};

export default Form.create<LoginFormProps>({
  name: 'login_form',
})(FormInputs);
