import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Menu from "./components/menu/Menu";
import OntologyViewer from "./components/ontology_viewer/OntologyViewer";

const App = () => (
    <>
        <Menu></Menu>
        <OntologyViewer></OntologyViewer>
    </>
);

export default App;
