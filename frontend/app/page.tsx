"use client";

import React, { useEffect, useState } from 'react';

export default function Page() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // const res = await fetch('http://api:8000/hello');  // (failed)net::ERR_NAME_NOT_RESOLVED
        // The browser isn't in a container and can't see the Docker-network host names. JS is running in the browser, so it can't see the Docker-network host names.

        const res = await fetch('/api/hello'); // rewrite redirect rule in next.config.js
        // reference: https://www.propelauth.com/post/avoiding-cors-issues-in-react-next-js

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
