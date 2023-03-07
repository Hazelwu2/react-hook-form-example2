import * as yup from "yup";


const errorMsg = {
  required: '這是必填欄位',
  password: (min, max) => (`限 ${min}-${max} 碼英文數字符號`)
}

export const registerSchema = yup.object({
  name: yup.string().required(errorMsg.required),
  password: yup.string()
    .required(errorMsg.required)
    .min(6, errorMsg.password(6, 10))
    .max(10, errorMsg.password(6, 10)),
  age: yup.number()
    .typeError('必須是數字')
    .positive()
    .min(18, '必須最小年滿18歲')
    .max(99, '不可超過99歲')
    .required(errorMsg.required),
  city: yup.string().required(errorMsg.required),
  district: yup.string().required(errorMsg.required),
})

export const loginSchema = yup.object({
  account: yup.string()
})