import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Select from "./select";
import TextField from "./TextField";
import MinusCircleIcon from "../icons/minus-circle.svg";

const RuleConfig = ({onRemove, id}) => {

    return (
        <Container fluid className="pb-2 mb-3" style={{border: '1px solid #AAAAAA'}}>
            <Row className="mt-3" style={{
                display: "flex",
                justifyContent: "flex-end",
                marginRight: "10px"
            }}>
                {<img src={MinusCircleIcon} style={{visibility: onRemove ? "visible" : "hidden"}} alt="Remove"
                      onClick={() => onRemove(id)}/>}
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
                    holderclass="form-group"
                    values=
                        {[
                            {text: 'Select'},
                            {text: 'Dummy1'},
                            {text: 'Dummy2'}
                        ]}
                /></Col>
                <Col><Select
                    id="Module"
                    label="Module"
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
                    id="UserType"
                    label="User Type"
                    selectclass="form-control custom-select"
                    holderclass="form-group"
                    values=
                        {[
                            {text: 'Select'},
                            {text: 'Dummy1'},
                            {text: 'Dummy2'}
                        ]}
                /></Col>
                <Col><TextField type="text" label="Error Severity" name="errorSeverity"/></Col>
            </Row>
        </Container>
    );
};

export default RuleConfig;