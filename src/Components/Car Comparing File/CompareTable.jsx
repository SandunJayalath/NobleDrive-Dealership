import PropTypes from 'prop-types'

function CompareTable(props) {
    return(
        <>
        <div className="py-4 overflow-x-auto w-full" style={{overflowX: "auto", maxWidth: "1400px", width: "100%", margin: "0 auto"}}>
            <table id="specification-table">
                <tr style={{textAlign: "center"}}>
                    <th>Specifications</th>
                    <th>{props.car1}</th>
                    <th>{props.car2}</th>
                    <th>{props.car3}</th>
                </tr>
                {props.data}
            </table>
        </div>
        </>
    );
}
export default CompareTable;
