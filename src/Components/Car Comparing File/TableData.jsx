import PropTypes from 'prop-types'

function TableData(props) {
    return (
        <>
        <tr>
            <td style={{color: "black", fontWeight: "bold"}}>{props.specification}</td>
            <td>{props.car1Info}</td>
            <td>{props.car2Info}</td>
            <td>{props.car3Info}</td>
        </tr>
        </>
    );
}
export default TableData;
