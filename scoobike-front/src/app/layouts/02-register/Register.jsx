import React, { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { validate } from "../../helpers/useful";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Register.css";
import { newUser } from "../services/apiCalls";
import { useNavigate } from "react-router-dom";
import { InputText } from "../../components/InputText/InputText";


export function Register() {
    const navigate = useNavigate();
    const [credenciales, setCredenciales] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [credencialesError, setCredencialesError] = useState({
        nameError: "",
        emailError: "",
        passwordError: "",
    });

    const [valiUser, setValiUser] = useState({
        nameVali: false,
        emailVali: false,
        passwordVali: false,
    });

    const [registerAct, setRegisterAct] = useState(false);

    const inputHandler = (e) => {
        setCredenciales((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    useEffect(() => {
        for (let error in credencialesError) {
            if (credencialesError[error] !== "") {
                setRegisterAct(false);
                return;
            }
        }
        for (let vacio in credenciales) {
            if (credenciales[vacio] === "") {
                setRegisterAct(false);
                return;
            }
        }
        for (let validated in valiUser) {
            if (valiUser[validated] === false) {
                setRegisterAct(false);
                return;
            }
        }
        setRegisterAct(true);
    });

    const checkError = (e) => {
        let error = "";
        const checked = validate(
            e.target.name,
            e.target.value,
            e.target.required
        );
        error = checked.message;

        setValiUser((prevState) => ({
            ...prevState,
            [e.target.name + "Vali"]: checked.validated,
        }));

        setCredencialesError((prevState) => ({
            ...prevState,
            [e.target.name + "Error"]: error,
        }));
    };

    const registerUser = () => {
        newUser(credenciales)
            .then(() => {
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            })
            .catch((error) => console.log(error));
    };

    return (
        <>

            <Container className="container minheight">

                {/* <Row className="registerForm">

                    <Form className="general-form">
                        <Form.Group className="register-form">
                            <Form.Label>
                                Nombre:
                            </Form.Label>
                            <InputText
                                className={
                                    credencialesError.nameError ===
                                        ""
                                        ? "inputBasicDesign"
                                        : "inputBasicDesign inputErrorDesign"
                                }
                                type={"text"}
                                name={"name"}
                                placeholder={"Nombre completo..."}
                                required={true}
                                changeFunction={(e) => inputHandler(e)}
                                blurFunction={(e) => checkError(e)}
                            />
                        </Form.Group>
                        <div>{credencialesError.nameError}</div>
                        <Form.Group className="register-form">
                            <Form.Label>
                                Email:
                            </Form.Label>
                            <InputText
                                className={
                                    credencialesError.emailError === ""
                                        ? "inputBasicDesign"
                                        : "inputBasicDesign inputErrorDesign"
                                }
                                type={"email"}
                                name={"email"}
                                placeholder={"Email..."}
                                required={true}
                                changeFunction={(e) => inputHandler(e)}
                                blurFunction={(e) => checkError(e)}
                            />
                        </Form.Group>
                        <div>{credencialesError.emailError}</div>
                        <Form.Group className="register-form">
                            <Form.Label>
                                Teléfono:
                            </Form.Label>
                            <InputText
                                className={
                                    credencialesError.nameError ===
                                        ""
                                        ? "inputBasicDesign"
                                        : "inputBasicDesign inputErrorDesign"
                                }
                                type={"text"}
                                name={"phone"}
                                placeholder={"Teléfono..."}
                                required={true}
                                changeFunction={(e) => inputHandler(e)}
                                blurFunction={(e) => checkError(e)}
                            />
                        </Form.Group>
                        <div>{credencialesError.nameError}</div>
                        <Form.Group className="register-form">
                            <Form.Label>
                                Password:
                            </Form.Label>
                            <InputText
                                className={
                                    credencialesError.passwordError ===
                                        ""
                                        ? "inputBasicDesign"
                                        : "inputBasicDesign inputErrorDesign"
                                }
                                type={"password"}
                                name={"password"}
                                placeholder={"Password..."}
                                required={true}
                                changeFunction={(e) => inputHandler(e)}
                                blurFunction={(e) => checkError(e)}
                            />
                        </Form.Group>
                        <div>{credencialesError.passwordError}</div>
                        <br />
                        <Button
                            className={
                                registerAct
                                    ? "registerSendDeac registerSendAct"
                                    : "registerSendDeac"
                            }
                            variant="primary"
                            onClick={registerUser}
                        >
                            Crear usuario
                        </Button>
                    </Form>

                </Row> */}
                <Col>
                    <div className='formulario'>
                        <Form className="login-Form">
                            <Form.Group className='nameReg-form'>
                                <Form.Label className='Label-form'>Nombre:</Form.Label>
                                <InputText
                                    className={
                                        credencialesError.nameError ===
                                            ""
                                            ? "inputBasicDesign"
                                            : "inputBasicDesign inputErrorDesign"
                                    }
                                    type={"text"}
                                    name={"name"}
                                    placeholder={"Nombre completo..."}
                                    required={true}
                                    changeFunction={(e) => inputHandler(e)}
                                    blurFunction={(e) => checkError(e)}
                                />
                            </Form.Group>
                            <div>{credencialesError.nameError}</div>
                            <Form.Group className='mailReg-form'>
                                <Form.Label className='Label-form'>Email:</Form.Label>
                                <InputText
                                    className={
                                        credencialesError.emailError === ""
                                            ? "inputBasicDesign"
                                            : "inputBasicDesign inputErrorDesign"
                                    }
                                    type={"email"}
                                    name={"email"}
                                    placeholder={"Email..."}
                                    required={true}
                                    changeFunction={(e) => inputHandler(e)}
                                    blurFunction={(e) => checkError(e)}
                                />
                            </Form.Group>
                            <div>{credencialesError.emailError}</div>
                            <Form.Group className='phoneReg-form'>
                                <Form.Label className='Label-form'>Teléfono:</Form.Label>
                                <InputText
                                    className={
                                        credencialesError.nameError ===
                                            ""
                                            ? "inputBasicDesign"
                                            : "inputBasicDesign inputErrorDesign"
                                    }
                                    type={"text"}
                                    name={"phone"}
                                    placeholder={"Teléfono..."}
                                    required={true}
                                    changeFunction={(e) => inputHandler(e)}
                                    blurFunction={(e) => checkError(e)}
                                />
                            </Form.Group>
                            <div>{credencialesError.nameError}</div>
                            <Form.Group className='passwordReg-form'>
                                <Form.Label className='Label-form'>Password:</Form.Label>
                                <InputText
                                    className={
                                        credencialesError.passwordError ===
                                            ""
                                            ? "inputBasicDesign"
                                            : "inputBasicDesign inputErrorDesign"
                                    }
                                    type={"password"}
                                    name={"password"}
                                    placeholder={"Password..."}
                                    required={true}
                                    changeFunction={(e) => inputHandler(e)}
                                    blurFunction={(e) => checkError(e)}
                                />
                            </Form.Group>
                            <div>{credencialesError.passwordError}</div>
                            <br />
                            <div className='botones'>
                                <Button
                                    className={
                                        registerAct
                                            ? "registerSendDeac registerSendAct"
                                            : "registerSendDeac"
                                    }
                                    variant="primary"
                                    onClick={registerUser}
                                >
                                    Crear usuario
                                </Button>


                            </div>

                        </Form>
                    </div>
                </Col>

            </Container>
        </>
    );
}

