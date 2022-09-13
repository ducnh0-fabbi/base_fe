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
import { PASSWORD_REGEX, EMAIL_REGEX } from '@/constants/regex';

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

      if (value.length !== 8) {
        return false;
      }

      return PASSWORD_REGEX.test(value);
    });

    configure({
      generateMessage: (context) => {
        const messages = {
          required: `${context.field} là bắt buộc`,
          min: `${context.field}は、8文字以上にしてください。`,
          min_value: `${context.field}は、8文字以上にしてください。`,
          email: `${context.field} không hợp lệ`,
          confirmed: `${context.rule.params[1]}と${context.field}が一致しません。`,
          max: `${context.field}は、${context.rule.params[0]}文字以下にしてください。`,
          password: `${context.field} không hợp lệ`,
          numeric: `${context.field}には、数字を指定してください。`,
        };
        const message = messages[context.rule.name]
          ? messages[context.rule.name]
          : `${context.field}は、必ず指定してください。`;
        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: true,
      validateOnModelUpdate: true,
    });
  },
}