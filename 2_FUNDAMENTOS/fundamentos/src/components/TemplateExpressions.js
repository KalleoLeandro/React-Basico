const TemplateExpressions = () =>{
    
    const name = 'Kalleo';
    const data = {
        age: 34,
        job: 'Programador'
    }

    return(
        <div>
            <h1>Olá {name}</h1>
            <p>Você trabalha como: {data.job}</p>            
        </div>
    )
}

export default TemplateExpressions;