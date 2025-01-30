import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";

import Content from './../components/Content'

const Home = ({data}) => {
    return (
        <>
        {data.length > 0 ? (
                data.map((item, index) => {
                    if(item.type=='meta'){
                        return (
                            <Helmet key={index}>
                                <meta name="description" content={item.description} />
                                <meta name="keywords" content={item.keywords} />
                                <title>{item.title}</title>
                            </Helmet>
                            )
                    }else if(item.type=='hero'){
                        return (
                            <div key={index} className="hero mb-16 mt-8">
                                <h1 className="text-4xl font-normal mb-4">{item.title}</h1>
                                <Content data={item.content}></Content>
                            </div>
                            )
                    }if(item.type=='block'){
                        return (
                            <div key={index} className="block mb-16 mt-8">
                                <h1 className="mb-4 text-2xl">{item.title}</h1>
                                <Content data={item.content}></Content>
                            </div>
                            )
                    }else if(item.type=='heading'){
                        return (
                            <div key={index} className="heading mb-16 mt-8">
                                <h2 className="mb-3 text-2xl">{item.title}</h2>
                                <h4 className="mb-3 text-1xl">{item.subtitle}</h4>
                            </div>
                            )
                    }else{
                        return (
                            <div key={index} className="pre mb-16 mt-8">
                                <pre className="mb-3">{JSON.stringify(item, null, 2)}</pre>
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