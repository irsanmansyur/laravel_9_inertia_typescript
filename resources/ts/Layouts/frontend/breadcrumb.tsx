import { Link } from '@inertiajs/inertia-react';
import { Breadcrumbs } from '@material-tailwind/react';
import styled from 'styled-components';

export default function BreadcrumbsFrontend({ breadcrumb }: { breadcrumb: { text: string; active: boolean; link: string }[] }) {
  return (
    <BreadcrumbsStyled className="w-full overflow-x-auto">
      <Breadcrumbs className="my-3 bg-primary bg-opacity-25 text-white w-full overflow-hidden">
        <Link href="/" className="opacity-60 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </Link>
        {breadcrumb.length == 0 && <>loading..!</>}
        {breadcrumb.map((bread, i) => {
          if (!bread.active)
            return (
              <Link href={bread.link} className="opacity-60 text-clip overflow-hidden" key={i}>
                <span className="truncate">{bread.text}</span>
              </Link>
            );
          return (
            <Link href={bread.link} key={i} className="text-clip overflow-hidden">
              {bread.text}
            </Link>
          );
        })}
      </Breadcrumbs>
    </BreadcrumbsStyled>
  );
}

const BreadcrumbsStyled = styled.div``;
