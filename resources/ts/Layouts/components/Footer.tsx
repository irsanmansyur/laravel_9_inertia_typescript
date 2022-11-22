import { Link } from '@inertiajs/inertia-react';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
interface PropsFooter {
  time_render: number;
}
export default function Footer({ time_render = 0 }: PropsFooter) {
  return (
    <>
      <div className="text-blue-gray-600">
        <footer className="">
          <div className="flex w-full flex-wrap items-center justify-center px-2 md:justify-between">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-inherit">
              © 2022, made with
              <a target="_blank" href="https://github.com/tantangin" className="ml-3">
                <AiFillGithub className="-mt-1 inline-block h-3.5 w-3.5" />
                Tantangin
              </a>
            </p>
            <ul className="flex items-center gap-4">
              <li>
                <span className="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500">Render in : {time_render.toPrecision(2)}s</span>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}
