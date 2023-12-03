import * as yup from 'yup';

const passwordStrengthMessage =
  'Password must contain at least 1 number, 1 uppercase, 1 lowercase and 1 special character';

const formSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password too short')
    .matches(/\d+/, passwordStrengthMessage)
    .matches(/[a-z]+/, passwordStrengthMessage)
    .matches(/[A-Z]+/, passwordStrengthMessage)
    .matches(/[!@#$%^&*()-+]+/, {
      message: passwordStrengthMessage,
    })
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], "Passwords don't match!")
    .required('Password is required'),
  country: yup.string().required('Country is required'),
  age: yup
    .number()
    .required('Age is required')
    .min(18, 'You must be older 18 years old'),
  gender: yup.string().required('Select your gender'),
  tc: yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});

export default formSchema;
