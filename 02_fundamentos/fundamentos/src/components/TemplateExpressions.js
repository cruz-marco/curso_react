import MyComponent from "./MyComponent";

const TemplateExpressions = () => {
    const nome = 'Marco Cruz';

    return (
        <div>
            <h3>Meu nome é {nome}.</h3>
            <MyComponent/>
        </div>
    );
    
};

export default TemplateExpressions;