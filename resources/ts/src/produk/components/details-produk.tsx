import React, { useState } from 'react';

export default function DetailsProduk({ details }: { details: string }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: showMore ? details : details.substring(0, 250) }} />
      <span
        onClick={(e) => {
          setShowMore(!showMore);
        }}
        className={`text-primary cursor-pointer`}
      >
        {showMore ? 'Show less' : 'Show more...'}
      </span>
    </div>
  );
}
