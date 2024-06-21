import MyComponent from "./MyComponent";

const FirstComponent = () => {
    // Esta função é um componente que gosta de imprimir coisas.
    const texto = `Os códigos de JavaScript que vão ser interpretados pelo
    react devem ser colocados entre chaves "{}" para quem sejam corretamente
    assimilados.`
    return (
        <div>
            { /*Exemplo de comentário no component*/}


            { /*Os códigos javascript devem ser colocados
              sepre entre chaves para que possam ser executados pelo
              react.!!!!! */ }

            <MyComponent />
            <h2>Meu primeiro componente</h2>
            <p>{texto}</p>
        </div>
    );

};

export default FirstComponent;