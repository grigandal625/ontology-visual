import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import OntologyFlow from "./ontology_flow/OntologyFlow";

const loadOntology = async (setOntology, setLoading) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500)); // тестовое ожидание
    const response = await fetch("/nodes_and_edges.json");
    const json = await response.json();
    setOntology(json);
    setLoading(false);
};

export default () => {
    const [ontology, setOntology] = useState(null);
    const [loading, setLoading] = useState(false);
    // useEffect(() => loadOntology(setOntology, setLoading), [ontology]); // - предварительная загрузка json онтологии
    return (
        <Container>
            <br />
            <p>
                Здесь надо отрисовывать онтологию Например можно использовать{" "}
                <a target="_blank" href="https://reactflow.dev/">
                    reactflow
                </a>
            </p>
            <p>
                <a href="https://reactflow.dev/docs/examples/edges/floating-edges/" target="_blank">
                    Хороший пример
                </a>
            </p>
            <div>
                <Button disabled={loading} onClick={() => loadOntology(setOntology, setLoading)}>
                    <span>Тест загузки json онтологии</span>
                    {loading ? <Spinner className="ms-1" size="sm" /> : null}
                </Button>
            </div>
            <br />
            <OntologyFlow ontology={ontology} />
            <br />
            <p>JSON можно прислать потом другой, как на бэке решится</p>
        </Container>
    );
};
