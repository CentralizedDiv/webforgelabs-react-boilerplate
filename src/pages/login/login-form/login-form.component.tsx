import React from 'react';
import { useTranslation } from 'react-i18next';
import FormInputs from './form-inputs.component';

const LoginForm = props => {
  const { t } = useTranslation();
  return (
    <div className="st-login-page__login-form-container">
      <div className="login-form-container__form">
        <div className="form__title">
          <span>{t('pages.login.title')}</span>
        </div>
        <div className="form__subtitle">
          <span>{t('pages.login.subtitle')}</span>
        </div>
        <FormInputs {...props} />
      </div>
    </div>
  );
};

export default LoginForm;
