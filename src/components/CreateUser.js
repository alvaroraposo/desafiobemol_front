import { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';
import LabelInput from './LabelInput';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import css from './style/modal.module.css'

function CreateUser(props) {
    const emptyUser = {
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        birthdate: "",
        gender: "",
        cpf: "",
        rg: "",
        cellphone: "",
        fixedphone: "",
        fullAddress: {
            type: "",
            owner: "",
            cep: "",
            address: "",
            number: "",
            complement: "",
            district: "",
            city: "",
            state: "",
            reference: ""            
        },
        scopes: [
            "users:access"
        ]
    }

    const [user, setUser] = useState(emptyUser);
    const [birthDateBR, setBirthDateBR] = useState("");
    const [focusedInput, setFocusedInput] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [initialFocus, setInitialFocus] = useState(true);

    const [errorMessages, setErrorMessages] = useState({
        dadosPessoaisErrorMSG: "",
        enderecoErrorMSG: "",
        dadosDeContatoErrorMSG: "",
        dadosDaContaErrorMSG: "",
    })
    
    useEffect(() => {
        function setInputFilter(textbox, inputFilter) {
            ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
              textbox.addEventListener(event, function() {
                if (inputFilter(this.value)) {
                  this.oldValue = this.value;
                  this.oldSelectionStart = this.selectionStart;
                  this.oldSelectionEnd = this.selectionEnd;
                } else if (this.hasOwnProperty("oldValue")) {
                  this.value = this.oldValue;
                  this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                } else {
                  this.value = "";
                }
              });
            });
        }

        function onlyDigits(component) {
            setInputFilter(component, function(value) {
                return /^\d*?\d*$/.test(value);
            });
        }

        const comp = document.querySelector(`[name='cpf']`);
        const comp2 = document.querySelector(`[name='cellphone']`);
        const comp3 = document.querySelector(`[name='fixedphone']`);
        const comp4 = document.querySelector(`[name='rg']`);
        const comp5 = document.querySelector(`[name='cep']`);

        if(comp && comp2 && comp3 && comp4 && comp5) {
            onlyDigits(comp);
            onlyDigits(comp2);
            onlyDigits(comp3);
            onlyDigits(comp4);
            onlyDigits(comp5);
        }            
        
        if(focusedInput !== "")
            return;

    })

    useEffect(() => {
        console.log("nextComponentInput");
        const f = (focusedInput || focusedInput != "") ? focusedInput : "firstname";
        const nextComponent = document.querySelector(`[name=${f}]`);

        if(nextComponent)
            nextComponent.focus();        
    }, [focusedInput])    

    const onBlurCEP = () => {        
        const consultarCEP = async () => {

            let newAddress = {
                address: "",
                district: "",
                city: "",
                state: ""
            }
    
            if(user.fullAddress.cep.length === 8) {
                const result = await axios.get(`https://viacep.com.br/ws/${user.fullAddress.cep}/json/`);
            
                if(!result || !result.data)
                    return;
        
                newAddress = {
                    address: result.data.logradouro,
                    district: result.data.bairro,
                    city: result.data.localidade,
                    state: result.data.uf
                }

                setFocusedInput("number")
            }
                        
            setUser({...user, 
                fullAddress: {
                    ...user.fullAddress,
                    ...newAddress
                }
            });

            inputUpdate(newAddress);    
        }

        consultarCEP();        
    }

    const inputUpdate = (newAddress) => {
        const inputs = document.querySelectorAll("input");

        const nDistrict = newAddress !== "" ? newAddress.district : "";
        const nCity = newAddress !== "" ? newAddress.city : "";
        const nAddress = newAddress !== "" ? newAddress.address : "";
        const nState = newAddress !== "" ? newAddress.state : "";

        document.querySelector(`[name=address]`).value = nAddress;
        document.querySelector(`[name=district]`).value = nDistrict;
        document.querySelector(`[name=city]`).value = nCity;
        document.querySelector(`[name=state]`).value = nState;
    }

    const validateUser = () => {
        function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }

        function configErrorMessages(type, message) {
            if(type === "pessoal") {
                setErrorMessages({
                    dadosDaContaErrorMSG: "",
                    dadosPessoaisErrorMSG: message,
                    enderecoErrorMSG: "",
                    dadosDeContatoErrorMSG: ""
                })  
            }
            else if(type === "endereco") {
                setErrorMessages({
                    dadosDaContaErrorMSG: "",
                    dadosPessoaisErrorMSG: "",
                    enderecoErrorMSG: message,
                    dadosDeContatoErrorMSG: ""
                })                  
            }
            else if(type === "contato") {
                setErrorMessages({
                    dadosDaContaErrorMSG: "",
                    dadosPessoaisErrorMSG: "",
                    enderecoErrorMSG: "",
                    dadosDeContatoErrorMSG: message
                })  
            }
            else if(type === "conta") {
                setErrorMessages({
                    dadosDaContaErrorMSG: message,
                    dadosPessoaisErrorMSG: "",
                    enderecoErrorMSG: "",
                    dadosDeContatoErrorMSG: ""
                })  
            }
        }

        if(!validateEmail(user.username))
        {
            setFocusedInput("username");
            configErrorMessages("conta", "E-Mail inválido");
            return false;
        }

        if(user.password.length < 6 || user.password.length > 10) {
            setFocusedInput("password");
            configErrorMessages("conta", "A senha deve ter no mínimo 6 e no máximo 10 caracteres");
            return false;
        }
        
        if(repeatPassword != user.password) {
            setFocusedInput("repeat");
            configErrorMessages("conta", "Os campos de Senha e Repetir Senha devem possuir valores iguais");
            return false;
        }

        if(user.firstname.length < 2 || user.firstname.length > 30) {
            configErrorMessages("pessoal", "Nome Inválido");
            setFocusedInput("firstname");
            return false;
        }

        if(user.lastname.length < 2 || user.lastname.length > 30) {
            configErrorMessages("pessoal", "Sobrenome Inválido");
            setFocusedInput("lastname");
            return false
        }

        if(user.birthdate.length != 10)
        {
            configErrorMessages("pessoal", "Data de nascimento inválida");
            setFocusedInput("birthdate");
            return false
        }

        console.log("gender", user.gender)
        if(user.gender === "" || user.gender === "default") {
            configErrorMessages("pessoal", "Campo Sexo é obrigatório");
            setFocusedInput("gender");
            return false;
        }

        if(user.cpf.length != 11) {
            configErrorMessages("pessoal", "CPF inválido");
            setFocusedInput("cpf");
            return false;
        }

        if(!user.fullAddress || user.fullAddress.cep.length != 8) {
            configErrorMessages("endereco", "CEP deve ter 8 dígitos");
            setFocusedInput("cep");
            return false;
        }

        if(user.fullAddress.type.length < 2  || user.fullAddress.type.length > 20) {
            configErrorMessages("endereco", "Tipo de Residência inválido");
            setFocusedInput("type");
            return false;
        }

        if(user.fullAddress.owner.length > 100) {            
            setFocusedInput("owner");
            return false;
        }

        if(user.fullAddress.address.length < 5 || user.fullAddress.address.length > 100) {
            configErrorMessages("endereco", "Endereço inválido");
            setFocusedInput("address");
            return false;
        }

        if(user.fullAddress.number.length < 2 || user.fullAddress.number.length > 20) {
            configErrorMessages("endereco", "Número da residência inválido");
            setFocusedInput("number");
            return false;
        }

        if(user.fullAddress.complement.length < 2 || user.fullAddress.complement.length > 100) {
            configErrorMessages("endereco", "Complemento inválido");
            setFocusedInput("complement");
            return false;
        }

        if(user.fullAddress.district.length < 2 || user.fullAddress.district.length > 100) {
            configErrorMessages("endereco", "Bairro inválido");
            setFocusedInput("district");
            return false;
        }

        if(user.fullAddress.city.length < 2 || user.fullAddress.city.length > 100) {
            configErrorMessages("endereco", "Cidade inválida");
            setFocusedInput("city");
            return false;
        }

        if(user.fullAddress.reference.length < 2 || user.fullAddress.reference.length > 100) {
            configErrorMessages("endereco", "Campo referência é obrigatório");
            setFocusedInput("reference");
            return false;
        }

        if(user.cellphone.length < 8 || user.cellphone.length > 20) {
            configErrorMessages("contato", "Telefone celular inválido");
            setFocusedInput("cellphone");
            return false;
        }

        if(user.fixedphone.length > 20) {
            setFocusedInput("fixedphone");
            return false;
        }

        return true;
    }

    const onCreateUserClick = async () => {
        const sendData = async () => {
            console.log("bithdate antes send", birthDateBR);
            const connectionString = "https://5v01jp94bj.execute-api.us-east-1.amazonaws.com/dev/handler"
            let result = ";"
            try {
                result = await axios["post"](connectionString, {...user, birthdate: birthDateBR});
                setUser(emptyUser);
                props.onHide();
            }
            catch(error) {
                if(error.response.status === 501) {
                    setFocusedInput("username");
                    setErrorMessages({
                        dadosDaContaErrorMSG: error.response.data[0].message,
                        dadosPessoaisErrorMSG: "",
                        enderecoErrorMSG: "",
                        dadosDeContatoErrorMSG: ""
                    })                    
                }
            }                                    
        }    
        if(validateUser())
            await sendData();        
    }
    
    const onCloseClick = () => {
        setUser(emptyUser);
        props.onHide();
    }
    
    return (
        
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={css.modal}
        onEntered={() => { 
            document.querySelector(`[name='firstname']`).focus();
        }}
        >
        <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter" className={css.modalTitle}>
                Logar no Site
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <span>Dados Pessoais: </span>
                <span name="dadosPessoaisErrorMSG">{errorMessages.dadosPessoaisErrorMSG}</span>
            </div>

            <LabelInput myLabel="Nome *" myName="firstname" myValue={user.firstname} maxLength="30" onInputChange={(newFirstname) => {setUser({...user, firstname: newFirstname})}}/>
            <LabelInput myLabel="Sobrenome *" myName="lastname" myValue={user.lastname} maxLength="30" onInputChange={(newLastname) => {setUser({...user, lastname: newLastname})}}/>
            <div className="row">
                <div className="col-6">
                    <LabelInput myLabel="Data de Nascimento *" myName="birthdate" myType="date" myValue={user.birthdate} onInputChange={(newBirthdate) => {
                    setUser({...user, birthdate: newBirthdate})                
                    const birthDateBR = newBirthdate.substring(8,10) + "/" + newBirthdate.substring(5,7) + "/" + newBirthdate.substring(0, 4);            
                    setBirthDateBR(birthDateBR)
                    }}/>
                </div>
                <div className="col-6 row">
                    <div className="col-12">
                        <label>Sexo *:</label>
                    </div>
                    <div className="col-12">
                        <select name="gender" defaultValue={"default"} onChange={(newGender) => {setUser({...user, gender: newGender.target.value})}}>
                            <option value="default">Selecione</option>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="outro">Outro</option>
                        </select>
                    </div>                    
                </div>
            </div>            
            <div className="row">
                <div className="col-6">
                    <LabelInput myLabel="CPF *" myName="cpf" maxLength="11" myValue={user.cpf} onInputChange={(newCpf) => {setUser({...user, cpf: newCpf})}}/>            
                </div>
                <div className="col-6">
                    <LabelInput myLabel="RG" myName="rg" maxLength="20" myValue={user.rg} onInputChange={(newRg) => {setUser({...user, rg: newRg})}}/>
                </div>
            </div>            
            <div>
                <span>Endereço: </span>
                <span name="enderecoErrorMSG">{errorMessages.enderecoErrorMSG}</span>
            </div>
            <div className="row">
                <div className="col-6">
                    <LabelInput myLabel="Tipo (Casa, Apartamento, etc..) *" maxLength="20" myName="type" myValue={user.fullAddress.type} onInputChange={(newType) => {setUser({...user, fullAddress: {...user.fullAddress, type: newType}})}}/>
                </div>
                <div className="col-6">
                    <LabelInput myLabel="Nome e Sobrenome Destinatário" maxLength="100" myName="owner" myValue={user.fullAddress.owner} onInputChange={(newOwner) => {setUser({...user, fullAddress: {...user.fullAddress, owner: newOwner}})}}/>  
                </div>
            </div>                        
            <div className="row">
                <div className="col-6">
                    <LabelInput myLabel="CEP *" myName="cep" maxLength="8" myValue={user.fullAddress.cep} onBlur={onBlurCEP} onInputChange={(newCep) => {   
                            setUser({...user, fullAddress: {
                                ...user.fullAddress,
                                cep: newCep
                            }})

                            inputUpdate("");
                        }
                    }/>
                </div>
                <div className="col-6">
                    <LabelInput myLabel="Endereço *" maxLength="100" myName="address" myValue={user.fullAddress.address} onInputChange={(newAddress) => {
                        console.log("address", user.fullAddress.address);
                        setUser({...user, fullAddress: {...user.fullAddress, address: newAddress}})}}/>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <LabelInput myLabel="Número *" maxLength="20" myName="number" myValue={user.fullAddress.number} onInputChange={(newNumber) => {setUser({...user, fullAddress: {...user.fullAddress, number: newNumber}})}}/>
                </div>
                <div className="col-6">
                    <LabelInput myLabel="Complemento *" maxLength="100" myName="complement" myValue={user.fullAddress.complement} onInputChange={(newComplement) => {setUser({...user, fullAddress: {...user.fullAddress, complement: newComplement}})}}/>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <LabelInput myLabel="Bairro *" maxLength="100" myName="district" myValue={user.fullAddress.district} onInputChange={(newDistrict) => {setUser({...user, fullAddress: {...user.fullAddress, district: newDistrict}})}}/>            
                </div>
                <div className="col-6">
                    <LabelInput myLabel="Cidade *" maxLength="100" myName="city" myValue={user.fullAddress.city} onInputChange={(newCity) => {setUser({...user, fullAddress: {...user.fullAddress, city: newCity}})}}/>
                </div>
            </div>                                                
            <div className="row">
                <div className="col-6">
                    <LabelInput myLabel="Estado *" myName="state" maxLength="2" myValue={user.fullAddress.state} onInputChange={(newState) => {setUser({...user, fullAddress: {...user.fullAddress, state: newState}})}}/>
                </div>
                <div className="col-6">
                    <LabelInput myLabel="Referência *" myName="reference" maxLength="100" myValue={user.fullAddress.reference} onInputChange={(newReference) => {setUser({...user, fullAddress: {...user.fullAddress, reference: newReference}})}}/>
                </div>
            </div>                                                                                        
            <div>
                <span>Dados de Contato: </span>
                <span name="dadosDeContatoErrorMSG">{errorMessages.dadosDeContatoErrorMSG}</span>
            </div>
            <div className="row">
                <div className="col-6">
                    <LabelInput myLabel="Telefone Celular *" maxLength="20" myName="cellphone" myValue={user.cellphone} onInputChange={(newCellphone) => {setUser({...user, cellphone: newCellphone})}}/>
                </div>
                <div className="col-6">
                    <LabelInput myLabel="Telefone Fixo" maxLength="20" myName="fixedphone" myValue={user.fixedphone} onInputChange={(newFixedphone) => {setUser({...user, fixedphone: newFixedphone})}}/>
                </div>
            </div>                                 
            
            <div>
                <span>Dados da Conta: </span>
                <span name="dadosDaContaErrorMSG">{errorMessages.dadosDaContaErrorMSG}</span>
            </div>
            <LabelInput myLabel="E-Mail *" myName="username" maxLength="100" myValue={user.username} onInputChange={(newUsername) => {setUser({...user, username: newUsername})}}/>
            <div className="row">
                <div className="col-6">
                    <LabelInput myLabel="Senha *" myType="password" maxLength="10" myName="password" myValue={user.password} onInputChange={(newPassword) => {setUser({...user, password: newPassword})}}/>
                </div>
                <div className="col-6">
                    <LabelInput myLabel="Repetir Senha *" myType="password" maxLength="10" myName="repeat" myValue={repeatPassword} onInputChange={(newRepeatPassword) => { setRepeatPassword(newRepeatPassword) }}/>
                </div>
            </div> 
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={onCreateUserClick}>
                Cadastrar Usuário
            </Button>
            <Button onClick={onCloseClick}>Close</Button>
        </Modal.Footer>
        </Modal>
    );
}

export default CreateUser;
