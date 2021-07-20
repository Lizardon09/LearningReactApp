/* eslint import/no-webpack-loader-syntax: off */
const CodeStrings = {
    components: {
        Columns: require('!!raw-loader!../../../../src/components/Columns').default,
        Table: require('!!raw-loader!../../../../src/components/Table').default,
    },
};
  
export default CodeStrings