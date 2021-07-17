import React from 'react';

function CodeSnippet(codeDirectory) {
    const directory = codeDirectory.name;
    return(
        <pre class="line-numbers">
            <code class="js">
                {
                    console.log()
                }
            </code>
        </pre>
    );
}

export default CodeSnippet;