import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Menu = () => (
    <Navbar variant="dark" bg="dark" expand="lg" className="px-4">
        <Navbar.Brand>Средства визуальной поддержки</Navbar.Brand>
        <Nav>
            <NavDropdown title="Онтологии">
                <NavDropdown.Item>Загрузить онтологию</NavDropdown.Item>
                <NavDropdown.Item>Удалить онтологию</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Элементы курса">
                <NavDropdown.Item>Создать элемент курса</NavDropdown.Item>
                <NavDropdown.Item>Поиск элементов курса</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Обучающие воздействия">
                <NavDropdown.Item>Создать УТЗ</NavDropdown.Item>
                <NavDropdown.Item>Поиск УТЗ</NavDropdown.Item>
                <NavDropdown.Divider></NavDropdown.Divider>
                <NavDropdown.Item>Создать главу ГТ-учебника</NavDropdown.Item>
                <NavDropdown.Item>Поиск глав ГТ-учебника</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
            <Nav>
                <Nav.Link href="/">На главную</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Menu;
