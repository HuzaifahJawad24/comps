import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Select from "./select";
import TextField from "./textfield";
import PlusCircleIcon from "../icons/plus-circle.svg";
import MinusCircleIcon from "../icons/minus-circle.svg";

const RuleConfig = ({onAdd, onRemove, id}) => {

    const populateAddOrRemoveButton = () => {
        if (onAdd) return <img src={PlusCircleIcon} alt="Add More" onClick={() => onAdd()}/>;
        else return <img src={MinusCircleIcon} alt="Remove" onClick={() => onRemove(id)}/>;
    }

    return (
        <Container key={id} className="pb-2 mb-3" style={{border: '1px solid #AAAAAA'}}>
            <Row className="mt-3" style={{
                display: "flex",
                justifyContent: "flex-end",
                marginRight: "10px"
            }}>
                {populateAddOrRemoveButton()}
            </Row>
            <Row>
                <Col><Select
                    id="PracticeSpecific"
                    label="Practice Specific"
                    selectclass="form-control custom-select"
                    holderclass="form-group"
                    values=
                        {[
                            {text: 'Select'},
                            {text: 'Dummy1'},
                            {text: 'Dummy2'}
                        ]}
                /></Col>
                <Col><Select
                    id="PayerSpecific"
                    label="Payer Specific"
                    selectclass="form-control custom-select"
                    holderclass="form-group"
                    values=
                        {[
                            {text: 'Select'},
                            {text: 'Dummy1'},
                            {text: 'Dummy2'}
                        ]}
                /></Col>
            </Row>
            <Row className="align-items-center">
                <Col><Select
                    id="Workflow"
                    label="Workflow"
                    selectclass="form-control custom-select"
                    values=
                        {[
                            {text: 'Select'},
                            {text: 'Dummy1'},
                            {text: 'Dummy2'}
                        ]}
                /></Col>
                <Col><TextField type="text" label="Module" name="module"/></Col>
                <Col><TextField type="text" label="User Type" name="userType"/></Col>
                <Col><TextField type="text" label="Error Severity" name="errorSeverity"/></Col>
            </Row>
        </Container>
    );
};

export default RuleConfig;