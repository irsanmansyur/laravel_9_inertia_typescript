import AlertCustom from '@ts/Components/Alert';
import InputGroup from '@ts/Components/form/InputGroup';
import { Link, useForm } from '@inertiajs/inertia-react';
import { useEffect } from 'react';
import route from 'ziggy-js';

export function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation');
    };
  }, []);
  const onHandleChange = (event) => {
    setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
  };
  const submit = (e: any) => {
    e.preventDefault();
    post(route('register'));
  };

  return (
    <>
      <div className="relative min-h-screen w-full">
        {/* <Header /> */}
        <img src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" className="absolute inset-0 z-0 h-full w-full object-cover" />
        <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
        <div className="container mx-auto p-4">
          <form onSubmit={submit} className="flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
            <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg -mt-6 mb-4 grid h-28 place-items-center">
              <h3 className="block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-white">Register</h3>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <AlertCustom color="red" show={Object.keys(errors).length} message="Harap isi dengan benar" />

              <InputGroup label="Name" value={data.name} name="name" error={errors.name} onChange={onHandleChange} required />
              <InputGroup label="Email" value={data.email} name="email" error={errors.email} autoComplete="username" required onChange={onHandleChange} type="email" />
              <InputGroup type="password" error={errors.password} name="password" value={data.password} autoComplete="current-password" required onChange={onHandleChange} label="Password" />
              <InputGroup type="password" error={errors.password_confirmation} name="password_confirmation" value={data.password_confirmation} required onChange={onHandleChange} label="Confirm Password" />
            </div>
            <div className="p-6 pt-0">
              <button
                type="submit"
                // disabled={processing}
                className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] block w-full"
              >
                Sign In
              </button>
              <p className="antialiased font-sans text-sm font-light leading-normal text-inherit mt-6 flex justify-center">
                Already have an account?
                <Link href={route('login')}>
                  <span className="block antialiased font-sans text-sm leading-normal text-blue-500 ml-1 font-bold">Login</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Register;
