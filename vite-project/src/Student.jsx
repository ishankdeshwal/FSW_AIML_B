import react from 'react'
import './app.css'
function Student(props) {
return(
    <div className="icard">
        {/* <h2>Hi, {props.name}
            <br></br>
            Your Branch Is:{props.branch}
        </h2> */}
        <table>
            <tbody>
                <tr>
<td colspan={2}>{props.college}</td>
                </tr>
                <tr>
<td colspan={2}>{props.pic}</td>
                </tr>
                <tr>
<td colspan={2}>{props.name}</td>
                </tr>
                <tr>
<td> roll: </td><td>{props.roll}</td>
                </tr>
                <tr>
<td> branch: </td><td>{props.branch}</td>
                </tr>
                <tr>
<td> section: </td><td>{props.section}</td>
                </tr>
            </tbody>
        </table>
    </div>
)
}
export default Student