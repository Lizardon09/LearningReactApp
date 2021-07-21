/* eslint import/no-webpack-loader-syntax: off */
const CodeStrings = {
    components: {
        Columns: require('!!raw-loader!../../../../src/components/Columns').default,
        Table: require('!!raw-loader!../../../../src/components/Table').default,
        State: require('!!raw-loader!../../../../src/components/State').default,
        Display: require('!!raw-loader!../../../../src/components/Display').default,
    },
    basic_tutorials: {
        ComponentFragmenting: require('!!raw-loader!../../../../src/basic-tutorials/component-fragmenting/ComponentFragmenting').default,
    },
};
  
export default CodeStrings