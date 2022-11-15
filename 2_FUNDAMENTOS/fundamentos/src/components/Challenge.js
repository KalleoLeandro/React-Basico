const Challenge = () =>{
    const num1 = 3;
    const num2 = 2;

    const handleNums = ()=> {
        console.log(num1+num2);        
    };

    const renderNums = () =>{
        return (
            <div>
                {num1}
                <br/>
                {num2}                
            </div>
        )
    }

    return (
        <div>
            {renderNums()}
            <br/>
            <button onClick={handleNums}>Clique para somar no console</button>                    
        </div>
    )
}

export default Challenge;