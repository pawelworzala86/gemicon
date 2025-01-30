import React, { useEffect, useState } from 'react';
import http from './../http.js'

import Content from './../components/Content'

const Home = ({data}) => {
    return (
        <>
        {data.length > 0 ? (
                data.map((item, index) => {
                    if(item.type=='meta'){
                        return (
                            <Helmet>
                                <meta name="description" content="{item.description}" />
                                <meta name="keywords" content="{item.keywords}" />
                                <title>{item.title}</title>
                            </Helmet>
                            )
                    }else if(item.type=='hero'){
                        return (
                            <div key={index} className="hero">
                                <h1>{item.title}</h1>
                                <Content data={item.content}></Content>
                            </div>
                            )
                    }if(item.type=='block'){
                        return (
                            <div key={index} className="block">
                                <h1>{item.title}</h1>
                                <Content data={item.content}></Content>
                            </div>
                            )
                    }else if(item.type=='heading'){
                        return (
                            <div key={index} className="heading">
                                <h2>{item.title}</h2>
                                <h4>{item.subtitle}</h4>
                            </div>
                            )
                    }else{
                        return (
                            <div key={index} className="pre">
                                <pre>{JSON.stringify(item, null, 2)}</pre>
                            </div>
                        )
                    }
                })
            ) : (
                <p>Loading...</p>
        )}
        </>
    )
};

export default Home;