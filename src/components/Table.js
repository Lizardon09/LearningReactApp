import React from 'react';
import Columns from './Columns';

function Table() {
    return(
        <table>
            <thead>
                <tr>
                    <td colSpan="2">Table</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <Columns/>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;