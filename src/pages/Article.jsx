import React, { useEffect, useState } from 'react';
import http from './../http.js'

import Main from './../components/Main'

const Article = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await http.get('/api/article', 'json');
                setData(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
          <Main data={data}></Main>
        </>
      );
};

export default Article;