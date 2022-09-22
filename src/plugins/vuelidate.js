import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from 'vee-validate';

import {
  required,
  min,
  max,
  min_value as minVal,
  confirmed,
  numeric,
} from '@vee-validate/rules';
import { EMAIL_REGEX } from '@/constants/regex';
import i18n from '@/plugins/i18n';

export default {
  install: function (app) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('min', min);
    defineRule('min_value', minVal);
    defineRule('max', max);
    defineRule('email', (value) => EMAIL_REGEX.test(value));
    defineRule('confirmed', confirmed);
    defineRule('numeric', numeric);
    defineRule('password', (value) => {
      if (!value || !value.length) {
        return true;
      }

      if (value.length < 6 || value.length > 255) {
        return false;
      }

      return true;
    });

    configure({
      generateMessage: (context) => {
        const messages = {
          required: `${context.field} ${i18n.global.t('validations.required')}`,
          min: `${context.field}は、8文字以上にしてください。`,
          min_value: `${context.field}は、8文字以上にしてください。`,
          email: `${context.field} ${i18n.global.t('validations.email')}`,
          confirmed: `${context.rule.params[1]}と${context.field}が一致しません。`,
          max: `${context.field}は、${context.rule.params[0]}文字以下にしてください。`,
          password: `${context.field} ${i18n.global.t('validations.password')}`,
          numeric: `${context.field}には、数字を指定してください。`,
        };
        const message = messages[context.rule.name]
          ? messages[context.rule.name]
          : `${context.field} ${i18n.global.t('validations.required')}`;
        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: true,
      validateOnModelUpdate: true,
    });
  },
}