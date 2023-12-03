import React from 'react';

import dompurify from 'dompurify';

type Props = {
  children: string;
};

const SafeHtmlParser: React.FC<Props> = (props) => {
  const purifiedHtml = dompurify.sanitize(props.children, {}).toString();

  if (purifiedHtml) {
    return (
      <div dangerouslySetInnerHTML={{ __html: purifiedHtml }} />
    )
  }

  return <div>POTENTIAL XSS ATACK!</div>
};

export default React.memo(SafeHtmlParser);
