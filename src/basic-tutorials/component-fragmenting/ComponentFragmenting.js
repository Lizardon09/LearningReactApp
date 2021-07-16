import React from 'react';
import {State, Display} from '../../components/index';
import './ComponentFragmenting.scss';

function ComponentFragmenting() {
    return (
        <div className="ComponentFragmenting">
            <header className="ComponentFragmenting-header">
                <h3>Component Fragmenting</h3>
                <p>Proccess in which you dictatce whether multiple components should have a parent wrapping element or not whilst still having an implicit wrapping</p>
                {ParentWrappingDiv()}
                {NoParentWrappingDiv()}
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

export default ComponentFragmenting;