import { Link } from "@inertiajs/inertia-react";
import { Menu, MenuHandler, MenuList, MenuItem, Button } from "@material-tailwind/react";

export default function ProfileNameButton({ user }) {
  return (
    <Menu
      placement="bottom-end"
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
    >
      <MenuHandler>

        <Button variant="gradient" className="flex p-1 sm:p-2 gap-1 sm:gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clipRule="evenodd"
            />
          </svg>
          {user.name}
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        <MenuItem>
          <Link href={route("logout")} method="post" as="button">
            Log Out
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
