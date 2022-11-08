import { App, Link, useForm } from "@inertiajs/inertia-react";
import AlertCustom from "@ts/Components/Alert";
import InputGroup from "@ts/Components/form/InputGroup";
import { useEffect } from "react";
import route from "ziggy-js";

interface User extends App.Models.User {
  remember: any;
}
export function Login() {
  const { data, setData, post, processing, errors, reset } = useForm<User>();
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const onHandleChange = (event: React.FormEvent<HTMLInputElement>) => {
    // @ts-expect-error
    setData(event.currentTarget.name, event.currentTarget.type === "checkbox" ? event.currentTarget.checked : event.currentTarget.value);
  };
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    post(route("login"));
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
              <h3 className="block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-white">Sign In</h3>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <AlertCustom color="red" show={Object.keys(errors).length > 0} message="Harap isi dengan benar" />
              <InputGroup label="Email" value={data.email} name="email" error={errors.email} autoComplete="username" onChange={onHandleChange} type="email" />
              <InputGroup type="password" error={errors.password} name="password" value={data.password} autoComplete="current-password" onChange={onHandleChange} label="Password" />
              <div className="-ml-2.5">
                <div className="inline-flex items-center">
                  <label className="relative flex items-center cursor-pointer p-3 rounded-full" htmlFor="checkbox">
                    <input
                      type="checkbox"
                      name="remember"
                      value={data.remember}
                      onChange={onHandleChange}
                      className="peer relative appearance-none w-5 h-5 border rounded-md border-blue-gray-200 cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-blue-500 checked:border-blue-500 checked:before:bg-blue-500"
                      id="checkbox"
                    />
                    <div className="text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth={1}>
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </label>
                  <label className="text-gray-700 font-light select-none cursor-pointer mt-px" htmlFor="checkbox">
                    Remember Me
                  </label>
                </div>
              </div>
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
                Don't have an account?
                <Link href={route("register")}>
                  <span className="block antialiased font-sans text-sm leading-normal text-blue-500 ml-1 font-bold">Sign up</span>
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

export default Login;
