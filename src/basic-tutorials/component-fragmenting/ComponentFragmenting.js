import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {State, Display, Table, CodeSnippet} from '../../components/index';
import './ComponentFragmenting.scss';
import {Container, Row, Col} from 'react-bootstrap';
import reactElementToJSXString from 'react-element-to-jsx-string';

function ComponentFragmenting() {

    /* eslint import/no-webpack-loader-syntax: off */
    const TableDisplayCodeString = require('!!raw-loader!../../../src/components/Table').default;
    const ColumnsCodeString = require('!!raw-loader!../../../src/components/Columns').default;

    const ParentWrappingDivCode = reactElementToJSXString(ParentWrappingDiv(), {useFragmentShortSyntax: false});
    const NoParentWrappingDivCode = reactElementToJSXString(NoParentWrappingDiv(), {useFragmentShortSyntax: false});
    const NoParentWrappingDiv2Code = reactElementToJSXString(NoParentWrappingDiv2());
    const TableDisplayRender = ReactDOMServer.renderToStaticMarkup(<Table/>);

    return (
        <div className="ComponentFragmenting">
            <header className="ComponentFragmenting-header">
                <h3>Component Fragmenting</h3>
                <p>Proccess in which you dictatce whether multiple components should have a parent wrapping element or not whilst still having an implicit wrapping</p>
                
                <Container>
                    <Row>
                        <Col>{ParentWrappingDiv()}</Col>
                        <Col bsPrefix="ExampleCode"><CodeSnippet codestring={ParentWrappingDivCode} withlinenumbers={true}/></Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col>{NoParentWrappingDiv()}</Col>
                        <Col bsPrefix="ExampleCode"><CodeSnippet codestring={NoParentWrappingDivCode} withlinenumbers={true}/></Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col>{NoParentWrappingDiv2()}</Col>
                        <Col bsPrefix="ExampleCode"><CodeSnippet codestring={NoParentWrappingDiv2Code} withlinenumbers={true}/></Col>
                    </Row>
                </Container>

                <br></br>
                <p>Fragments let you group a list of children without adding extra nodes to the DOM.</p>

                <Container>
                    <Row>
                        <Col>{TableDisplay()}</Col>
                        <Col>
                            <CodeSnippet codestring={TableDisplayCodeString} withlinenumbers={true}/>
                            <CodeSnippet codestring={ColumnsCodeString} withlinenumbers={true}/>
                        </Col>
                    </Row>
                </Container>

                <br></br>
                <p>Which will render on the DOM as...</p>
                <CodeSnippet codestring={TableDisplayRender}/>

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
        <div className="NoParentWrapping">
            <p>
                For example: You can split a Table and it's Columns into seperate components, and the columns can be fragmented together
                 - such that the final rendered table will not have an uneccessary extra div wrapping the columns within the table.
            </p>
            <Table/>
        </div>
    );
}

export default ComponentFragmenting;