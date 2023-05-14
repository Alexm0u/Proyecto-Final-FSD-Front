import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { userData } from "../../userSlice";
import { InputText } from "../../../components/InputText/InputText";
import { userUpdate } from "../../services/apiCalls";
import { validate } from "../../../helpers/useful";
import { useNavigate } from "react-router-dom";

export const ProfileUpdate = () => {
    const credentialsRdx = useSelector(userData);
    let email = credentialsRdx.credentials.email;
    const navigate = useNavigate();

    const [user, setUser] = useState({

        name: "",
        phone: "",
        email: email,
        password: "",
    });

    const inputHandler = (e) => {
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const [valiuser, setValiuser] = useState({

        nameVali: false,
        phoneVali: false,
        emailVali: true,
        passwordVali: false,
    });

    const [userError, setUserError] = useState({

        nameError: "",
        phoneError: "",
        emailError: "",
        passwordError: "",
    });

    const [registerAct, setRegisterAct] = useState(false);
    const [welcome, setWelcome] = useState("");

    useEffect(() => {
        for (let error in userError) {
            if (userError[error] != "") {
                setRegisterAct(false);
                return;
            }
        }

        for (let empty in user) {
            if (user[empty] === "") {
                setRegisterAct(false);
                return;
            }
        }

        for (let validated in valiuser) {
            if (valiuser[validated] === false) {
                setRegisterAct(false);
                return;
            }
        }
        setRegisterAct(true);
    });

    const checkError = (e) => {
        let error = "";
        let checked = validate(
            e.target.name,
            e.target.value,
            e.target.required
        );

        error = checked.message;
        setValiuser((prevState) => ({
            ...prevState,
            [e.target.name + "Vali"]: checked.validated,
        }));

        setUserError((prevState) => ({
            ...prevState,
            [e.target.name + "Error"]: error,
        }));
    };

    const updateUser = () => {
        userUpdate(user, credentialsRdx.credentials.token);
        setWelcome(`Datos actualizados correctamente`);
        setTimeout(() => {
            navigate("/user/profile");
        }, 2500);
    };


    return (
        <>
            <div className="divPrincipal">
                <div className="loginDesign">
                    <div>
                            <Container>
                                <Row className="LoginForm">
                                    <Col lg={6}>
                                        <Form>
                                        
                                            <Form.Group>
                                                <Form.Label>
                                                    NOMBRE:
                                                </Form.Label>
                                                <InputText
                                                    className={"inputLogin"}
                                                    type={"text"}
                                                    name={"name"}
                                                    maxLength={70}
                                                    placeholder={"Nombre..."}
                                                    changeFunction={(e) =>
                                                        inputHandler(e)
                                                    }
                                                    blurFunction={(e) =>
                                                        checkError(e)
                                                    }
                                                />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>
                                                    TELÉFONO:
                                                </Form.Label>
                                                <InputText
                                                    className={"inputLogin"}
                                                    type={"number"}
                                                    name={"phone"}
                                                    maxLength={70}
                                                    placeholder={"phone..."}
                                                    changeFunction={(e) =>
                                                        inputHandler(e)
                                                    }
                                                    blurFunction={(e) =>
                                                        checkError(e)
                                                    }
                                                />
                                            </Form.Group>
                                            <div>{userError.phoneError}</div>
                                            <br />
                                            <Button
                                                className="botonLog"
                                                variant="primary"
                                                onClick={() => updateUser()}
                                            >
                                                {" "}
                                                Actualizar
                                            </Button>
                                        </Form>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    
                </div>
            </div>
        </>
    );
};
