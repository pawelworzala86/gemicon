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
                            <div key={index} className="hero" class="mb-8">
                                <h1 class="text-4xl font-normal mb-4">{item.title}</h1>
                                <Content data={item.content}></Content>
                            </div>
                            )
                    }if(item.type=='block'){
                        return (
                            <div key={index} className="block" class="mb-8">
                                <h1 class="mb-4 text-2xl">{item.title}</h1>
                                <Content data={item.content}></Content>
                            </div>
                            )
                    }else if(item.type=='heading'){
                        return (
                            <div key={index} className="heading" class="mb-8">
                                <h2 class="mb-3 text-2xl">{item.title}</h2>
                                <h4 class="mb-3 text-1xl">{item.subtitle}</h4>
                            </div>
                            )
                    }else{
                        return (
                            <div key={index} className="pre" class="mb-8">
                                <pre class="mb-3">{JSON.stringify(item, null, 2)}</pre>
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