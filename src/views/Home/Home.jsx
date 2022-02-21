import React, { useContext, useState } from "react";
import globalContext from "components/Context/global";

function Home() {
    const CTX = useContext(globalContext);

    let [name, setName] = useState("Eduardo");

	const handleClick = () => {
		console.log('cliquei no botão');
		submit()
    };

	const submit = (event) => {
		console.log('event', event, 'o formulário submeteu');
        event?.stopPropagation();
        event?.preventDefault();

        console.log("Submeteu");
    };

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div className="home">
            <h1>Exemplo de App React</h1>
            <span>Seja Bem vindo {name}</span>

            <form name="form" onSubmit={event => submit(event)}>
                <div className="col-12 form-group">
                    <CTX.Input value={name} onChange={handleChange} />
                </div>
                <div className="col-12 form-group">
                    <CTX.Button disabled={true} onClick={handleClick}>click me</CTX.Button>
                </div>
            </form>
        </div>
    );
}

export default Home;
