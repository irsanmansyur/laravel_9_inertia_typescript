import { PageProps } from "@inertiajs/inertia";

interface AuthInterface {
  user: App.Models.User | null;
}
export interface InertiaBaseInterface extends PageProps {
  auth: AuthInterface;
}
