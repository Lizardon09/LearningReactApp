import React, {useState} from 'react';
import ReactDOMServer from 'react-dom/server';
import {State, Display, Table, CodeSnippet, CodeStrings} from '../../components/index';
import './ComponentFragmenting.scss';
import {Container, Row, Col, ToggleButtonGroup, ToggleButton, Collapse} from 'react-bootstrap';
import reactElementToJSXString from 'react-element-to-jsx-string';
import jsBeautifier from 'js-beautify';

function ComponentFragmenting() {

    const TableDisplayCodeString = CodeStrings.components.Table;
    const ColumnsCodeString = CodeStrings.components.Columns;

    const ParentWrappingDivCode = reactElementToJSXString(ParentWrappingDiv(), {useFragmentShortSyntax: false});
    const NoParentWrappingDivCode = reactElementToJSXString(NoParentWrappingDiv(), {useFragmentShortSyntax: false});
    const NoParentWrappingDiv2Code = reactElementToJSXString(NoParentWrappingDiv2());
    const TableDisplayRender = jsBeautifier.html(ReactDOMServer.renderToStaticMarkup(<Table/>));

    return (
        <div className="ComponentFragmenting">
            <header className="ComponentFragmenting-header">

                {ChildComponentCodeReveals()}

                <br></br>

                <h3>Component Fragmenting</h3>
                <p>Proccess in which you dictatce whether multiple components should have a parent wrapping element or not whilst still having an implicit wrapping</p>
                
                <Container>
                    <Row className="ImplimentationSection" md={2}>
                        <Col>{ParentWrappingDiv()}</Col>
                        <Col>
                            <Container className="ImplimentationCodeSection">
                                <CodeSnippet codestring={ParentWrappingDivCode} withlinenumbers={true}/>
                            </Container>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row className="ImplimentationSection" md={2}>
                        <Col>{NoParentWrappingDiv()}</Col>
                        <Col>
                            <Container className="ImplimentationCodeSection">
                                <CodeSnippet codestring={NoParentWrappingDivCode} withlinenumbers={true}/>
                            </Container>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row className="ImplimentationSection" md={2}>
                        <Col>{NoParentWrappingDiv2()}</Col>
                        <Col>
                            <Container className="ImplimentationCodeSection">
                                <CodeSnippet codestring={NoParentWrappingDiv2Code} withlinenumbers={true}/>
                            </Container>
                        </Col>
                    </Row>
                </Container>

                <br></br>
                <p>Fragments let you group a list of children without adding extra nodes to the DOM.</p>

                <Container>
                    <Row className="ImplimentationSection" md={2}>
                        <Col>
                            {TableDisplay()}
                            <br></br>
                            <p>Which will render on the DOM as...</p>
                            <CodeSnippet codestring={TableDisplayRender}/>
                        </Col>
                        <Col>
                            <Container className="ImplimentationCodeSection">
                                <CodeSnippet codestring={TableDisplayCodeString} withlinenumbers={true}/>
                                <CodeSnippet codestring={ColumnsCodeString} withlinenumbers={true}/>
                            </Container>
                        </Col>
                    </Row>
                </Container>

            </header>
        </div>
    );
}

function ParentWrappingDiv() {
    return(
        <div className="ParentWrapping">
            <h3>Parent Wrapping Div</h3>
            <State/>
            <Display/>
        </div>
    );
}

function NoParentWrappingDiv() {
    return(
        <React.Fragment>
            <h3>No Parent Wrapping Div (Componnet Fragmenting)</h3>
            <State/>
            <Display/>
        </React.Fragment>
    );
}

function NoParentWrappingDiv2() {
    return(
        <>
            <h3>No Parent Wrapping Div (Componnet Fragmenting) WITH JSX shortcut</h3>
            <State/>
            <Display/>
        </>
    );
}

function TableDisplay() {
    return(
        <div className="tableChild">
            <p>
                For example: You can split a Table and it's Columns into seperate components, and the columns can be fragmented together
                 - such that the final rendered table will not have an uneccessary extra div wrapping the columns within the table.
            </p>
            <br></br>
            <Table/>
        </div>
    );
}

function ChildComponentCodeReveals() {

    const [showStateComponentCode, toggleStateComponentJS] = useState(false);
    const [showDisplayComponentCode, toggleDisplayComponentJS] = useState(false);
    const [implimentationSectionColCount, changeImplimentationSectionColCount] = useState(0);

    const changeColCount = (value) => { value ? 
        changeImplimentationSectionColCount(implimentationSectionColCount + 1) : 
        changeImplimentationSectionColCount(implimentationSectionColCount - 1)
    }
    
    const StateComponentJS = () => {
        toggleStateComponentJS(!showStateComponentCode);
        changeColCount(!showStateComponentCode);
    };

    const DisplayComponentJS = () =>  {
        toggleDisplayComponentJS(!showDisplayComponentCode);
        changeColCount(!showDisplayComponentCode);
    };


    const StateCodeString = CodeStrings.components.State;
    const DisplayCodeString = CodeStrings.components.Display;

    const stateCompnentString = "<State/>"
    const displayComponentString = "<Display/>"

    return(
        <div className="childComponentsCode">
            <ToggleButtonGroup type="checkbox" className="mb-2">
                <ToggleButton type="checkbox" id="state-check" value={1} onChange={StateComponentJS} variant="success">
                    {stateCompnentString}
                </ToggleButton>
                <ToggleButton type="checkbox" id="display-check" value={2} onChange={DisplayComponentJS} variant="warning">
                    {displayComponentString}
                </ToggleButton>
            </ToggleButtonGroup>

            <Container>
                <Row className="ImplimentationSection" md={implimentationSectionColCount}>
                    <Collapse in={showStateComponentCode} unmountOnExit={true} mountOnEnter={true}>
                        <Col><CodeSnippet codestring={StateCodeString} withlinenumbers={true}/></Col>
                    </Collapse>
                    <Collapse in={showDisplayComponentCode} unmountOnExit={true} mountOnEnter={true}>
                        <Col><CodeSnippet codestring={DisplayCodeString} withlinenumbers={true}/></Col>
                    </Collapse>
                </Row>
            </Container>
        </div>
    );
}

export default ComponentFragmenting;