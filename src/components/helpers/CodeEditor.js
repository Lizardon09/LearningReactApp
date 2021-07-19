import React, { Fragment, Component } from 'react'

import Editor from 'react-simple-code-editor'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'

const styles = {
    root: {
      boxSizing: 'border-box',
      fontFamily: '"Dank Mono", "Fira Code", monospace',
      ...theme.plain
    }
  }
  
class CodeEditor extends Component {

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
    
    state = { code: this.props.codestring }
  
    onValueChange = code => {
      this.setState({ code })
    }
  
    highlight = code => (
      <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Fragment>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
              </div>
            ))}
          </Fragment>
        )}
      </Highlight>
    )
  
    render() {
      return (
        <Editor
          value={this.state.code}
          onValueChange={this.onValueChange}
          highlight={this.highlight}
          padding={10}
          style={styles.root}
        />
      )
    }
  }
  export default CodeEditor