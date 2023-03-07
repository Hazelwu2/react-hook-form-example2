import './App.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from './utils/form-schema'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(registerSchema)
  });

  const onSubmit = data => {
    console.log(data);
  }

  console.log(watch('name'))


  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}

        <div>
          <label htmlFor="name">姓名</label>
          <input
            type="text"
            id="name"
            {...register('name')}
          />

          {errors?.name?.message && <p>{errors?.name?.message}</p>}
        </div>

        <div>
          <label htmlFor="password">密碼</label>

          <input
            id="password"
            type="password"
            {...register('password')}
          />

          {errors?.password?.message && <p>{errors?.password?.message}</p>}
        </div>

        <div>
          <label for="">縣市</label>
          <input
            type="text"
            {...register('city')}
          />

          {errors?.city?.message && <p>{errors?.city?.message}</p>}
        </div>

        <div>
          <label htmlFor="age">年齡</label>
          <input
            id="age"
            type="number"
            {...register('age')}
          />
          {errors?.age?.message && <p>{errors?.age?.message}</p>}
        </div>

        <input
          type="submit"
        />
      </form>
    </div>
  );
}

export default App;