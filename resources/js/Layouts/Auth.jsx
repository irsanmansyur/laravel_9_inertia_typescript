import { ChartPieIcon, UserIcon, UserPlusIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { Navbar, Footer } from "@/widgets/layout";
import routes from "@/routes";

export function Auth({ children }) {
  const navbarRoutes = [
    {
      name: "dashboard",
      path: "/dashboard/home",
      icon: ChartPieIcon,
    },
    {
      name: "profile",
      path: "/dashboard/home",
      icon: UserIcon,
    },
    {
      name: "sign up",
      path: "/auth/sign-up",
      icon: UserPlusIcon,
    },
    {
      name: "sign in",
      path: "/auth/sign-in",
      icon: ArrowRightOnRectangleIcon,
    },
  ];

  return (
    <div className="relative min-h-screen w-full">
      <div className="container relative z-40 mx-auto p-4">
        <Navbar routes={navbarRoutes} />
      </div>
      {children}
      <div className="container absolute bottom-8 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <Footer />
      </div>
    </div>
  );
}

export default Auth;
