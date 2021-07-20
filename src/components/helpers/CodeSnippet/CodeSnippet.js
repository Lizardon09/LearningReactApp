import React from 'react';
import { Pre, Line, LineNo, LineContent } from "./CodeSnippet.style";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import CodeEditor from './CodeEditor';

function CodeSnippet(props) {

    /*
        Cannot use raw-loader for file bellow generically by appending directory with rawloader.
        Thats why we require the file on the parent component and pass down the default property to this component
        to generate snippet
    */ 

    /* eslint import/no-webpack-loader-syntax: off */

    /*
    var htmlModule = require('!!raw-loader!' + '../../../src/components/State');
                                    OR
    var htmlModule = import('!!raw-loader!../../../src/components/State').then((module) => {console.log(module.default.toString())});
    */

    var codestring = props.codestring.trim();
    var withlinenumbers = !!props.withlinenumbers;
    var editor = !!props.editor;

    if(!codestring) return null;

    if(editor) return <CodeEditor codestring={codestring}/>;

    return (withlinenumbers) ? LineNumberSnippet(codestring) : BasicSnippet(codestring);

}

function BasicSnippet(codestring) {
    return (
        <Highlight {...defaultProps} theme={theme} code={codestring} language="jsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <Pre className={className} style={style}>
                {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                    ))}
                    </div>
                ))}
                </Pre>
            )}
        </Highlight>
    );
}

function LineNumberSnippet(codestring) {
    return (
        <Highlight {...defaultProps} theme={theme} code={codestring} language="jsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={style}>
                {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({ line, key: i })}>
                    <LineNo>{i + 1}</LineNo>
                    <LineContent>
                    {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                    </LineContent>
                </Line>
                ))}
            </Pre>
            )}
        </Highlight>
    );
}

export default CodeSnippet;