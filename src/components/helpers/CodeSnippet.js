import React from 'react';
import { Pre } from "./CodeSnippet.style";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import * as fs from 'fs';

function CodeSnippet(props) {

    var directory = props.directory;
    
    /* eslint import/no-webpack-loader-syntax: off */
    var htmlModule = require('!!raw-loader!../../../src/components/State');

    console.log(directory);
    console.log(htmlModule.default.toString());

    //var file = require(props.directory);
    // var file = props.file;
    // var reader = new FileReader();
    // reader.onload = function(event) {
    // // The file's text will be printed here
    //     console.log(event.target.result)
    // };



    return null;

}

export default CodeSnippet;