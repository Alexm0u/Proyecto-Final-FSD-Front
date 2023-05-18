import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { detailData } from '../detailSlice';
import { userData } from '../userSlice';
import { useNavigate } from 'react-router-dom';
import { getTodosRoles, userUpdateAsAdmin } from '../services/apiCalls';
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import { InputText } from '../../components/InputText/InputText';
import { validate } from '../../helpers/useful';
import './UpdateUserAsAdmin.css'

export const UpdateUserAsAdmin = () => {
    //conexion a RDX en modo lectura
    const detailRedux = useSelector(detailData);
    const params = detailRedux?.choosenObject?.id;
    const email = detailRedux?.choosenObject?.email;

    const credentialsRdx = useSelector(userData);
    const navigate = useNavigate();

    const [roles, setRoles] = useState([
        
    ]);
    useEffect(() => {
        if (roles.length === 0) {
            getTodosRoles(detailRedux.credentials?.token)
                .then((result) => { 
                    setRoles(result.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [roles]);
    const [user, setUser] = useState({

        id: params,
        name: "",
        phone: "",
        email: email,
        role_id: "",
    });

    const inputHandler = (e) => {
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
console.log(roles)
    const [valiuser, setValiuser] = useState({

        nameVali: false,
        phoneVali: false,
        emailVali: true,

    });

    const [userError, setUserError] = useState({

        nameError: "",
        phoneError: "",
        emailError: "",

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
        userUpdateAsAdmin(params, user, credentialsRdx?.credentials?.token);
        setWelcome(`Datos actualizados correctamente`);
        setTimeout(() => {
            navigate("/user/all");
        }, 2500);
    };

    return (
        <div className="divPrincipal minheight">
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
                                            type={"string"}
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
                                            type={"integer"}
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
                                    <Form.Select  name={"role_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
                        <option>Role:</option>

                        {roles.map((role) => {
                            return (
                                <option key={role.id} value={role.id}>{role.name}</option>
                            )
                        })}
                    </Form.Select>
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
    )
}
