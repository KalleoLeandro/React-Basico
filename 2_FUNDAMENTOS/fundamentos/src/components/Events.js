const Events = () =>{
    
    const handleMyEvent = ()=> {
        console.log('Teste');
    };
    
const renderSomething = (x) =>{
    if(x){
        return <h1>Renderizando isso!</h1>
    } else {
        return <h1>Também posso renderizar isso!</h1>
    }    
}

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>                    
            </div>
            <br/>
            <div>
                <button onClick={()=> console.log('Clicou aqui')}>Clique aqui para evento inline</button>                                
            </div>
            <br/>
            <div>
                <button onClick={()=> {
                    if(true){
                        console.log('Código sujo');
                    }
                }}>Clique aqui para em bloco</button>                                
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
        
        
    )
}

export default Events;