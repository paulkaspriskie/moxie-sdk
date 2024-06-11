import React, { useEffect, useState } from 'react';


const Icon = ({name}) => {

  const [icon, setIcon] = useState('');

  useEffect(() => {

    (async () => {
      let importIcon = await import(`../../assets/icons/${name}.svg`);
      setIcon(importIcon.default);
    })();

  }, [name]);

  return (
    <>{icon}</>
  );

}

export default Icon;
