import React from 'react';

import dompurify from 'dompurify';

type Props = {
  children: string;
};

const SafeHtmlParser: React.FC<Props> = (props) => {
  const purifiedHtml = dompurify.sanitize(props.children, {}).toString();

  return (
    <div dangerouslySetInnerHTML={{ __html: purifiedHtml }} />
  )
};

export default React.memo(SafeHtmlParser);
