import { Link } from '@inertiajs/inertia-react';
import { Tooltip } from '@material-tailwind/react';
import React from 'react';

export default function LinkBelanja({ links }: { links: App.Models.ProdukLink[] }) {
  return (
    <div className="link-belanja mt-5">
      <div className="title">Dapatkan segera</div>
      <div className="link-list flex gap-2 flex-wrap">
        {links.map((link, i) => {
          return (
            <a key={i} target="_blank" href={link.link}>
              <Tooltip content={link.toko.name}>
                <img src={link.toko.logo_url} className="w-[200px] h-[50px] rounded shadow" />
              </Tooltip>
            </a>
          );
        })}
      </div>
    </div>
  );
}
