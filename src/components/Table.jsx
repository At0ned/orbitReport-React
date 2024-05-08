import satData from "./satData";
import './styling.css';
const Table = ({ sat }) => {
  return (
    <table>
    <thead>
      
        <tr>
          <th value="name">Name</th>
          <th value="type">Type of Satellites</th>
          <th value="launchDate">Launch Date</th>
          <th value="status">Status</th>
        </tr>
     </thead>
     <tbody >
     
    {sat.map((data) => {
     return(
     
      <tr>
      <td value="name">{data.name}</td>
      <td value="type">{data.type}</td>
      <td value="launchDate">{data.launchDate}</td>
      {(data.operational) ?
      <td value="status">active</td> :
      <td>inactive</td>
      }
      </tr>
      
     )
    }
    )}
    

     </tbody>
   </table>
  );
};

export default Table;