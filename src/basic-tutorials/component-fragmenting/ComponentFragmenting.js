import React from 'react';
import {State, Display, Table, CodeSnippet} from '../../components/index';
import './ComponentFragmenting.scss';

function ComponentFragmenting() {
    return (
        <div className="ComponentFragmenting">
            <header className="ComponentFragmenting-header">
                <h3>Component Fragmenting</h3>
                <p>Proccess in which you dictatce whether multiple components should have a parent wrapping element or not whilst still having an implicit wrapping</p>
                {ParentWrappingDiv()}
                {NoParentWrappingDiv()}
                {NoParentWrappingDiv2()}
                <br></br>
                <p>Fragments let you group a list of children without adding extra nodes to the DOM.</p>
                {TableDisplay()}
                <CodeSnippet name="./ComponentFragmenting.scss"/>
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
        <React.Fragment className="NoParentWrapping">
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