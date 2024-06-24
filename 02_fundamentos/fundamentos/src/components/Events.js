const Events = () => {
     /**
     * Função de eventos para o curso de React.
     */

    function handleMyEvent (e) {
        console.log("Ativou o evento!");
        console.log(e);
    };

    function renderSomething (x) {
        if(x){
            return (<h3>Renderize Isso</h3>);
        } else {
            return (<h3>Renderize Aquilo</h3>);
        };
    };

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
                { /* Caso os parêntesis sejam colocados no nome da função dentro do "onClick" acima,
                A função será carregada assim que o código for lido e não quando o botão for clicado. */}
            </div>
            <div>
                <button onClick={() => alert("Olá")}>Clique em mim!</button>
            </div>
            <div>
                {renderSomething(true)} { /*desta forma, a função será executada no carregamento da página */}
                {renderSomething(false)}
            </div>
        </div>
    );
};


export default Events;