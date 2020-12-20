import React, { useState } from "react";
import Select from "../components/select";
import TextArea from "../components/textarea";
import ToggleSwitch from "../components/toggleswitch";
import CommentSection from "../components/commentsection";
import RuleConfigurations from "../components/RuleConfigurations";


const RuleRequest = () => {


    return (
        <form class="m-5">
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="InputRequestId">Request ID</label>
                        <input type="text" class="form-control" id="InputRequestId" placeholder="Request ID"/>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="InputReferenceNumber">Reference Number</label>
                        <input type="text" class="form-control" id="InputRequestId" placeholder="Reference Number"/>
                    </div>
                </div>
                <div class="col">
                    <Select
                        id = "RequestStatus" 
                        label = "Request Status" 
                        selectclass = "form-control custom-select" 
                        holderclass = "form-group" 
                        values= 
                        {[
                            { text: 'Select' },
                            { text: 'Dummy1' },
                            { text: 'Dummy2' }
                        ]}
                    />
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <Select
                        id = "Priority" 
                        label = "Priority" 
                        selectclass = "form-control custom-select" 
                        holderclass = "form-group" 
                        values= 
                        {[
                            { text: 'Select' },
                            { text: 'Dummy1' },
                            { text: 'Dummy2' }
                        ]}
                    />
                </div>
                <div class="col">
                    <Select
                        id = "AssignedTo" 
                        label = "Assigned To" 
                        selectclass = "form-control custom-select" 
                        holderclass = "form-group" 
                        values= 
                        {[
                            { text: 'Select' },
                            { text: 'Dummy1' },
                            { text: 'Dummy2' }
                        ]}
                    />
                </div>
                <div class="col">
                    <Select
                        id = "AssignedBy" 
                        label = "Assigned By" 
                        selectclass = "form-control custom-select" 
                        holderclass = "form-group" 
                        values= 
                        {[
                            { text: 'Select' },
                            { text: 'Dummy1' },
                            { text: 'Dummy2' }
                        ]}
                    />
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="RequestTitle">Request Title</label>
                        <input type="text" class="form-control" id="InputRequestId" placeholder="Request Title"/>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <ToggleSwitch 
                        id = "ClientSpecific"
                        label = "Client Specific"
                        inputclass = "custom-control-input"
                        labelclass = "custom-control-label"
                        switchclass = "custom-control custom-switch"
                    />
                </div>
                <div class="col">
                    <ToggleSwitch 
                        id = "RCMSpecific"
                        label = "RCM Specific"
                        inputclass = "custom-control-input"
                        labelclass = "custom-control-label"
                        switchclass = "custom-control custom-switch"
                    />
                </div>
                <div class="col">
                    <ToggleSwitch 
                        id = "PayerSpecific"
                        label = "Payer Specific"
                        inputclass = "custom-control-input"
                        labelclass = "custom-control-label"
                        switchclass = "custom-control custom-switch"
                    />
                </div>
                <div class="col">
                    <ToggleSwitch 
                        id = "Status"
                        label = "Status"
                        inputclass = "custom-control-input"
                        labelclass = "custom-control-label"
                        switchclass = "custom-control custom-switch"
                    />
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <TextArea
                        holderclass = "form-group"
                        textareaclass = "form-control"
                        id = "RequestDescription"
                        label = "Request Description"
                    />
                 </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="ErrorText">Error Text</label>
                        <input type="text" class="form-control" id="ErrorText" placeholder="Error Text"/>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <Select
                        id = "ActionMethod" 
                        label = "Action Method" 
                        selectclass = "form-control" 
                        holderclass = "form-group" 
                        values= 
                        {[
                            { text: 'Select' },
                            { text: 'Dummy1' },
                            { text: 'Dummy2' }
                        ]}
                    />
                </div>
            </div> 
            <div class="row">
                <CommentSection
                    comments = 
                    {[
                        { id: 1, avatar: '/images/avatar1.png', name: 'Person 1', comment: "First Comment", time:'1May 27, 2015 at 3:14am'},
                        { id: 2, avatar: '/images/avatar2.png', name: 'Person 2', comment: "Second Comment",time:'1May 27, 2015 at 3:14am'},
                        { id: 3, avatar: '/images/avatar3.png', name: 'Person 3', comment: "Third Comment",time:'1May 27, 2015 at 3:14am'}
                    ]}
                />
            </div> 
            <RuleConfigurations/>
        </form>
    );
    
}

export default RuleRequest


