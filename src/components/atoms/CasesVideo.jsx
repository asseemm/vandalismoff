import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const CaseVideo = ({ url }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <div>
      {ready && <ReactPlayer url={url} playing controls />}
    </div>
  );
}

export default CaseVideo;