const Events = () => {
     /**
     * Função de eventos para o curso de React.
     */

    function handleMyEvent (e) {
        console.log("Ativou o evento!");
        console.log(e);
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
        </div>
    );
};


export default Events;