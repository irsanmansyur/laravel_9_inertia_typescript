import { Menu, MenuHandler, MenuList, MenuItem, IconButton } from "@material-tailwind/react";
import { AiTwotoneNotification } from "react-icons/ai";
export default function NotificationNavbar({ ...props }: any) {
  return (
    <Menu
      placement="bottom-end"
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
    >
      <MenuHandler>
        <IconButton variant="outlined" size="sm" className="ml-1 p-1">
          <AiTwotoneNotification className=" rotate-180" />
        </IconButton>
      </MenuHandler>
      <MenuList className="p-1">
        <MenuItem>
          <div>
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 mb-1 font-normal">
              <strong>New message</strong> from Laur
            </p>
            <p className="antialiased font-sans text-blue-gray-900 flex items-center gap-1 text-xs font-normal opacity-60">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3.5 w-3.5">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
              </svg>{" "}
              13 minutes ago
            </p>
          </div>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
