import React, { useEffect, useState } from 'react';
import http from './../http.js'

const Home = () => {

    // Użyj useState do przechowywania danych
    const [data, setData] = useState({});

    // Użyj useEffect do wykonywania asynchronicznych operacji
    //useEffect(() => {
        const fetchData = async () => {
            //try {
                const response = await http.get('/api/landing', 'json');
                setData(response);
            //} catch (error) {
             //   console.error('Error fetching data:', error);
            //}
        };

        fetchData();
    //}, []);

    return (
        <div>
          <h1>Home</h1>
          <pre>{data ? JSON.stringify(data, null, 2) : 'Loading...'}</pre>
        </div>
      );
};

export default Home;