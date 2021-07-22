(this["webpackJsonplearning-react-app"]=this["webpackJsonplearning-react-app"]||[]).push([[0],{42:function(n,e,t){},43:function(n,e,t){},50:function(n,e,t){"use strict";t.r(e),e.default="import React from 'react';\r\n\r\nfunction Columns() {\r\n    return(\r\n        <React.Fragment>\r\n            <td>Columns 1</td>\r\n            <td>Columns 2</td>\r\n        </React.Fragment>\r\n    );\r\n}\r\n\r\nexport default Columns;"},51:function(n,e,t){"use strict";t.r(e),e.default="import React from 'react';\r\nimport Columns from './Columns';\r\n\r\nfunction Table() {\r\n    return(\r\n        <table>\r\n            <thead>\r\n                <tr>\r\n                    <td colSpan=\"2\">Table</td>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <Columns/>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    );\r\n}\r\n\r\nexport default Table;"},52:function(n,e,t){"use strict";t.r(e),e.default="import React, { useState } from 'react';\r\n\r\nfunction State() {\r\n    const initialValue = 5;\r\n    const increment = 5;\r\n\r\n    const [counter, setCounter] = useState(initialValue);\r\n\r\n    const handleClick = () => setCounter(counter + increment);\r\n\r\n    return (\r\n        <button onClick={handleClick}>\r\n            {counter}\r\n        </button>\r\n    );\r\n}\r\n\r\nexport default State;"},53:function(n,e,t){"use strict";t.r(e),e.default="import React from 'react';\r\n\r\nfunction Display() {\r\n    return (\r\n        <div>...display component...</div>\r\n    )\r\n}\r\n\r\nexport default Display;"},54:function(n,e,t){"use strict";t.r(e),e.default='import React, {useState} from \'react\';\r\nimport ReactDOMServer from \'react-dom/server\';\r\nimport {State, Display, Table, CodeSnippet, CodeStrings} from \'../../components/index\';\r\nimport \'./ComponentFragmenting.scss\';\r\nimport {Container, Row, Col, ToggleButtonGroup, ToggleButton, Collapse} from \'react-bootstrap\';\r\nimport reactElementToJSXString from \'react-element-to-jsx-string\';\r\nimport jsBeautifier from \'js-beautify\';\r\n\r\nfunction ComponentFragmenting() {\r\n\r\n    const TableDisplayCodeString = CodeStrings.components.Table;\r\n    const ColumnsCodeString = CodeStrings.components.Columns;\r\n\r\n    const ParentWrappingDivCode = reactElementToJSXString(ParentWrappingDiv(), {useFragmentShortSyntax: false});\r\n    const NoParentWrappingDivCode = reactElementToJSXString(NoParentWrappingDiv(), {useFragmentShortSyntax: false});\r\n    const NoParentWrappingDiv2Code = reactElementToJSXString(NoParentWrappingDiv2());\r\n    const TableDisplayRender = jsBeautifier.html(ReactDOMServer.renderToStaticMarkup(<Table/>));\r\n\r\n    return (\r\n        <div className="ComponentFragmenting">\r\n            <header className="ComponentFragmenting-header">\r\n\r\n                {ChildComponentCodeReveals()}\r\n\r\n                <br></br>\r\n\r\n                <h3>Component Fragmenting</h3>\r\n                <p>Proccess in which you dictatce whether multiple components should have a parent wrapping element or not whilst still having an implicit wrapping</p>\r\n                \r\n                <Container>\r\n                    <Row className="ImplimentationSection" md={2}>\r\n                        <Col>{ParentWrappingDiv()}</Col>\r\n                        <Col>\r\n                            <Container className="ImplimentationCodeSection">\r\n                                <CodeSnippet codestring={ParentWrappingDivCode} withlinenumbers={true}/>\r\n                            </Container>\r\n                        </Col>\r\n                    </Row>\r\n                </Container>\r\n\r\n                <Container>\r\n                    <Row className="ImplimentationSection" md={2}>\r\n                        <Col>{NoParentWrappingDiv()}</Col>\r\n                        <Col>\r\n                            <Container className="ImplimentationCodeSection">\r\n                                <CodeSnippet codestring={NoParentWrappingDivCode} withlinenumbers={true}/>\r\n                            </Container>\r\n                        </Col>\r\n                    </Row>\r\n                </Container>\r\n\r\n                <Container>\r\n                    <Row className="ImplimentationSection" md={2}>\r\n                        <Col>{NoParentWrappingDiv2()}</Col>\r\n                        <Col>\r\n                            <Container className="ImplimentationCodeSection">\r\n                                <CodeSnippet codestring={NoParentWrappingDiv2Code} withlinenumbers={true}/>\r\n                            </Container>\r\n                        </Col>\r\n                    </Row>\r\n                </Container>\r\n\r\n                <br></br>\r\n                <p>Fragments let you group a list of children without adding extra nodes to the DOM.</p>\r\n\r\n                <Container>\r\n                    <Row className="ImplimentationSection" md={2}>\r\n                        <Col>\r\n                            {TableDisplay()}\r\n                            <br></br>\r\n                            <p>Which will render on the DOM as...</p>\r\n                            <CodeSnippet codestring={TableDisplayRender}/>\r\n                        </Col>\r\n                        <Col>\r\n                            <Container className="ImplimentationCodeSection">\r\n                                <CodeSnippet codestring={TableDisplayCodeString} withlinenumbers={true}/>\r\n                                <CodeSnippet codestring={ColumnsCodeString} withlinenumbers={true}/>\r\n                            </Container>\r\n                        </Col>\r\n                    </Row>\r\n                </Container>\r\n\r\n            </header>\r\n        </div>\r\n    );\r\n}\r\n\r\nfunction ParentWrappingDiv() {\r\n    return(\r\n        <div className="ParentWrapping">\r\n            <h3>Parent Wrapping Div</h3>\r\n            <State/>\r\n            <Display/>\r\n        </div>\r\n    );\r\n}\r\n\r\nfunction NoParentWrappingDiv() {\r\n    return(\r\n        <React.Fragment>\r\n            <h3>No Parent Wrapping Div (Componnet Fragmenting)</h3>\r\n            <State/>\r\n            <Display/>\r\n        </React.Fragment>\r\n    );\r\n}\r\n\r\nfunction NoParentWrappingDiv2() {\r\n    return(\r\n        <>\r\n            <h3>No Parent Wrapping Div (Componnet Fragmenting) WITH JSX shortcut</h3>\r\n            <State/>\r\n            <Display/>\r\n        </>\r\n    );\r\n}\r\n\r\nfunction TableDisplay() {\r\n    return(\r\n        <div className="tableChild">\r\n            <p>\r\n                For example: You can split a Table and it\'s Columns into seperate components, and the columns can be fragmented together\r\n                 - such that the final rendered table will not have an uneccessary extra div wrapping the columns within the table.\r\n            </p>\r\n            <br></br>\r\n            <Table/>\r\n        </div>\r\n    );\r\n}\r\n\r\nfunction ChildComponentCodeReveals() {\r\n\r\n    const [showStateComponentCode, toggleStateComponentJS] = useState(false);\r\n    const [showDisplayComponentCode, toggleDisplayComponentJS] = useState(false);\r\n    const [implimentationSectionColCount, changeImplimentationSectionColCount] = useState(0);\r\n\r\n    const changeColCount = (value) => { value ? \r\n        changeImplimentationSectionColCount(implimentationSectionColCount + 1) : \r\n        changeImplimentationSectionColCount(implimentationSectionColCount - 1)\r\n    }\r\n    \r\n    const StateComponentJS = () => {\r\n        toggleStateComponentJS(!showStateComponentCode);\r\n        changeColCount(!showStateComponentCode);\r\n    };\r\n\r\n    const DisplayComponentJS = () =>  {\r\n        toggleDisplayComponentJS(!showDisplayComponentCode);\r\n        changeColCount(!showDisplayComponentCode);\r\n    };\r\n\r\n\r\n    const StateCodeString = CodeStrings.components.State;\r\n    const DisplayCodeString = CodeStrings.components.Display;\r\n\r\n    const stateCompnentString = "<State/>"\r\n    const displayComponentString = "<Display/>"\r\n\r\n    return(\r\n        <div className="childComponentsCode">\r\n            <ToggleButtonGroup type="checkbox" className="mb-2">\r\n                <ToggleButton type="checkbox" id="state-check" value={1} onChange={StateComponentJS} variant="success">\r\n                    {stateCompnentString}\r\n                </ToggleButton>\r\n                <ToggleButton type="checkbox" id="display-check" value={2} onChange={DisplayComponentJS} variant="warning">\r\n                    {displayComponentString}\r\n                </ToggleButton>\r\n            </ToggleButtonGroup>\r\n\r\n            <Container>\r\n                <Row className="ImplimentationSection" md={implimentationSectionColCount}>\r\n                    <Collapse in={showStateComponentCode} unmountOnExit={true} mountOnEnter={true}>\r\n                        <Col><CodeSnippet codestring={StateCodeString} withlinenumbers={true}/></Col>\r\n                    </Collapse>\r\n                    <Collapse in={showDisplayComponentCode} unmountOnExit={true} mountOnEnter={true}>\r\n                        <Col><CodeSnippet codestring={DisplayCodeString} withlinenumbers={true}/></Col>\r\n                    </Collapse>\r\n                </Row>\r\n            </Container>\r\n        </div>\r\n    );\r\n}\r\n\r\nexport default ComponentFragmenting;'},55:function(n,e,t){},61:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(10),i=t.n(a),c=(t(42),t.p+"static/media/logo.6ce24c58.svg"),s=(t(43),t(12)),l=t(25),p=t.n(l),m=t(1);var d=function(){var n=Object(r.useState)(5),e=Object(s.a)(n,2),t=e[0],o=e[1];return Object(m.jsx)("button",{onClick:function(){return o(t+5)},children:t})};var u=function(){return Object(m.jsx)("div",{children:"...display component..."})};var j=function(){return Object(m.jsxs)(o.a.Fragment,{children:[Object(m.jsx)("td",{children:"Columns 1"}),Object(m.jsx)("td",{children:"Columns 2"})]})};var h,b,g,C,O,x=function(){return Object(m.jsxs)("table",{children:[Object(m.jsx)("thead",{children:Object(m.jsx)("tr",{children:Object(m.jsx)("td",{colSpan:"2",children:"Table"})})}),Object(m.jsx)("tbody",{children:Object(m.jsx)("tr",{children:Object(m.jsx)(j,{})})})]})},S=t(4),f=t(13),v=t(14),y=(v.a.div(h||(h=Object(f.a)(["\n  font-family: sans-serif;\n  text-align: center;\n"]))),v.a.pre(b||(b=Object(f.a)(["\n  text-align: left;\n  margin: 1em 0;\n  padding: 0.5em;\n  overflow: scroll;\n\n  & .token-line {\n    line-height: 1.3em;\n    height: 1.3em;\n  }\n"])))),w=v.a.div(g||(g=Object(f.a)(["\n  display: table-row;\n"]))),D=v.a.span(C||(C=Object(f.a)(["\n  display: table-cell;\n  text-align: right;\n  padding-right: 1em;\n  user-select: none;\n  opacity: 0.5;\n"]))),N=v.a.span(O||(O=Object(f.a)(["\n  display: table-cell;\n"]))),T=t(8),k=t(11),F=t(29),P=t(30),W=t(37),R=t(35),I=t(31),J=t.n(I),E={root:Object(S.a)({boxSizing:"border-box",fontFamily:'"Dank Mono", "Fira Code", monospace'},k.a.plain)},B=function(n){Object(W.a)(t,n);var e=Object(R.a)(t);function t(){var n;Object(F.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=e.call.apply(e,[this].concat(a))).state={code:n.props.codestring},n.onValueChange=function(e){n.setState({code:e})},n.highlight=function(n){return Object(m.jsx)(T.a,Object(S.a)(Object(S.a)({},T.b),{},{theme:k.a,code:n,language:"jsx",children:function(n){n.className,n.style;var e=n.tokens,t=n.getLineProps,o=n.getTokenProps;return Object(m.jsx)(r.Fragment,{children:e.map((function(n,e){return Object(m.jsx)("div",Object(S.a)(Object(S.a)({},t({line:n,key:e})),{},{children:n.map((function(n,e){return Object(m.jsx)("span",Object(S.a)({},o({token:n,key:e})))}))}))}))})}}))},n}return Object(P.a)(t,[{key:"render",value:function(){return Object(m.jsx)(J.a,{value:this.state.code,onValueChange:this.onValueChange,highlight:this.highlight,padding:10,style:E.root})}}]),t}(r.Component);var M=function(n){var e=n.codestring.trim(),t=!!n.withlinenumbers,r=!!n.editor;return e?r?Object(m.jsx)(B,{codestring:e}):t?function(n){return Object(m.jsx)(T.a,Object(S.a)(Object(S.a)({},T.b),{},{theme:k.a,code:n,language:"jsx",children:function(n){var e=n.className,t=n.style,r=n.tokens,o=n.getLineProps,a=n.getTokenProps;return Object(m.jsx)(y,{className:e,style:t,children:r.map((function(n,e){return Object(m.jsxs)(w,Object(S.a)(Object(S.a)({},o({line:n,key:e})),{},{children:[Object(m.jsx)(D,{children:e+1}),Object(m.jsx)(N,{children:n.map((function(n,e){return Object(m.jsx)("span",Object(S.a)({},a({token:n,key:e})),e)}))})]}),e)}))})}}))}(e):function(n){return Object(m.jsx)(T.a,Object(S.a)(Object(S.a)({},T.b),{},{theme:k.a,code:n,language:"jsx",children:function(n){var e=n.className,t=n.style,r=n.tokens,o=n.getLineProps,a=n.getTokenProps;return Object(m.jsx)(y,{className:e,style:t,children:r.map((function(n,e){return Object(m.jsx)("div",Object(S.a)(Object(S.a)({},o({line:n,key:e})),{},{children:n.map((function(n,e){return Object(m.jsx)("span",Object(S.a)({},a({token:n,key:e})))}))}))}))})}}))}(e):null},X={components:{Columns:t(50).default,Table:t(51).default,State:t(52).default,Display:t(53).default},basic_tutorials:{ComponentFragmenting:t(54).default}},L=(t(55),t(64)),V=t(65),A=t(66),G=t(68),H=t(36),Y=t(67),z=t(18),_=t.n(z),q=t(32),K=t.n(q);function Q(){return Object(m.jsxs)("div",{className:"ParentWrapping",children:[Object(m.jsx)("h3",{children:"Parent Wrapping Div"}),Object(m.jsx)(d,{}),Object(m.jsx)(u,{})]})}function U(){return Object(m.jsxs)(o.a.Fragment,{children:[Object(m.jsx)("h3",{children:"No Parent Wrapping Div (Componnet Fragmenting)"}),Object(m.jsx)(d,{}),Object(m.jsx)(u,{})]})}function Z(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h3",{children:"No Parent Wrapping Div (Componnet Fragmenting) WITH JSX shortcut"}),Object(m.jsx)(d,{}),Object(m.jsx)(u,{})]})}function $(){var n=Object(r.useState)(!1),e=Object(s.a)(n,2),t=e[0],o=e[1],a=Object(r.useState)(!1),i=Object(s.a)(a,2),c=i[0],l=i[1],p=Object(r.useState)(0),d=Object(s.a)(p,2),u=d[0],j=d[1],h=function(n){j(n?u+1:u-1)},b=X.components.State,g=X.components.Display;return Object(m.jsxs)("div",{className:"childComponentsCode",children:[Object(m.jsxs)(G.a,{type:"checkbox",className:"mb-2",children:[Object(m.jsx)(H.a,{type:"checkbox",id:"state-check",value:1,onChange:function(){o(!t),h(!t)},variant:"success",children:"<State/>"}),Object(m.jsx)(H.a,{type:"checkbox",id:"display-check",value:2,onChange:function(){l(!c),h(!c)},variant:"warning",children:"<Display/>"})]}),Object(m.jsx)(L.a,{children:Object(m.jsxs)(V.a,{className:"ImplimentationSection",md:u,children:[Object(m.jsx)(Y.a,{in:t,unmountOnExit:!0,mountOnEnter:!0,children:Object(m.jsx)(A.a,{children:Object(m.jsx)(M,{codestring:b,withlinenumbers:!0})})}),Object(m.jsx)(Y.a,{in:c,unmountOnExit:!0,mountOnEnter:!0,children:Object(m.jsx)(A.a,{children:Object(m.jsx)(M,{codestring:g,withlinenumbers:!0})})})]})})]})}var nn=function(){var n=X.components.Table,e=X.components.Columns,t=_()(Q(),{useFragmentShortSyntax:!1}),r=_()(U(),{useFragmentShortSyntax:!1}),o=_()(Z()),a=K.a.html(p.a.renderToStaticMarkup(Object(m.jsx)(x,{})));return Object(m.jsx)("div",{className:"ComponentFragmenting",children:Object(m.jsxs)("header",{className:"ComponentFragmenting-header",children:[$(),Object(m.jsx)("br",{}),Object(m.jsx)("h3",{children:"Component Fragmenting"}),Object(m.jsx)("p",{children:"Proccess in which you dictatce whether multiple components should have a parent wrapping element or not whilst still having an implicit wrapping"}),Object(m.jsx)(L.a,{children:Object(m.jsxs)(V.a,{className:"ImplimentationSection",md:2,children:[Object(m.jsx)(A.a,{children:Q()}),Object(m.jsx)(A.a,{children:Object(m.jsx)(L.a,{className:"ImplimentationCodeSection",children:Object(m.jsx)(M,{codestring:t,withlinenumbers:!0})})})]})}),Object(m.jsx)(L.a,{children:Object(m.jsxs)(V.a,{className:"ImplimentationSection",md:2,children:[Object(m.jsx)(A.a,{children:U()}),Object(m.jsx)(A.a,{children:Object(m.jsx)(L.a,{className:"ImplimentationCodeSection",children:Object(m.jsx)(M,{codestring:r,withlinenumbers:!0})})})]})}),Object(m.jsx)(L.a,{children:Object(m.jsxs)(V.a,{className:"ImplimentationSection",md:2,children:[Object(m.jsx)(A.a,{children:Z()}),Object(m.jsx)(A.a,{children:Object(m.jsx)(L.a,{className:"ImplimentationCodeSection",children:Object(m.jsx)(M,{codestring:o,withlinenumbers:!0})})})]})}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:"Fragments let you group a list of children without adding extra nodes to the DOM."}),Object(m.jsx)(L.a,{children:Object(m.jsxs)(V.a,{className:"ImplimentationSection",md:2,children:[Object(m.jsxs)(A.a,{children:[Object(m.jsxs)("div",{className:"tableChild",children:[Object(m.jsx)("p",{children:"For example: You can split a Table and it's Columns into seperate components, and the columns can be fragmented together - such that the final rendered table will not have an uneccessary extra div wrapping the columns within the table."}),Object(m.jsx)("br",{}),Object(m.jsx)(x,{})]}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:"Which will render on the DOM as..."}),Object(m.jsx)(M,{codestring:a})]}),Object(m.jsx)(A.a,{children:Object(m.jsxs)(L.a,{className:"ImplimentationCodeSection",children:[Object(m.jsx)(M,{codestring:n,withlinenumbers:!0}),Object(m.jsx)(M,{codestring:e,withlinenumbers:!0})]})})]})})]})})};t(60);var en=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("header",{className:"App-header",children:[Object(m.jsx)("img",{src:c,className:"App-logo",alt:"logo"}),Object(m.jsx)(nn,{})]})})},tn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,69)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;t(n),r(n),o(n),a(n),i(n)}))};i.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(en,{})}),document.getElementById("root")),tn()}},[[61,1,2]]]);
//# sourceMappingURL=main.03db229e.chunk.js.map