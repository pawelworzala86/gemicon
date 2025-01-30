const Content = ({data}) => {
    return (
        <>
            {
                data.map((content, index) => {
                    if(content.type=='text'){
                        return (<div key={index}>
                            <p class="mb-3">{content.text}</p>
                        </div>);
                    }else if(content.type=='code'){
                        return (<div key={index}>
                            <pre class="mb-3">{content.text}</pre>
                        </div>);
                    }else{
                        return (<div key={index}>
                            Unknow content
                        </div>);
                    }
                })
            }
        </>
    )
};
  
export default Content;