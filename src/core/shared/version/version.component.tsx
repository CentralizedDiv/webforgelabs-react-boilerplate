import React, { useState, useEffect } from 'react';
import * as VERSION from 'VERSION';
import axios from 'axios';

export const AppVersion = () => {
  const [version, setVersion] = useState('');
  useEffect(() => {
    axios
      .get(VERSION)
      .then(response => {
        if (response.data) {
          setVersion(response.data);
        }
      })
      .catch(() => {
        setVersion("Couldn't get Version");
      });
  }, []);
  return (
    <div className="st-version" style={{ position: 'absolute', bottom: 0, left: 4 }}>
      {version && <span>{version}</span>}
    </div>
  );
};
