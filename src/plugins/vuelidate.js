import * as validators from '@vuelidate/validators';
import i18n from '@/plugins/i18n';

// or import { createI18nMessage } from '@vuelidate/validators'
const { createI18nMessage } = validators;

// Create your i18n message instance. Used for vue-i18n
const withI18nMessage = createI18nMessage({ t: i18n.global.t.bind(i18n) });

// wrap each validator.
export const required = withI18nMessage(validators.required);
export const requiredIf = withI18nMessage(validators.requiredIf, { withArguments: true });
export const numeric = withI18nMessage(validators.numeric);
export const integer = withI18nMessage(validators.integer);
export const minLength = withI18nMessage(validators.minLength, { withArguments: true });
export const maxLength = withI18nMessage(validators.maxLength, { withArguments: true });
export const maxValue = withI18nMessage(validators.maxValue, { withArguments: true });
export const minValue = withI18nMessage(validators.minValue, { withArguments: true });
