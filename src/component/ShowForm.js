
import React from 'react';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import MissingPersonsForm from './AllForms/MissingPersonsForm'
import CrimeReportForm from './AllForms/crimeReportForm'
import ComplainForm from './AllForms/ComplainForm'
// import Home from './Home'

 
const ShowForm = ({typeOfForm}) =>
    <div>
    {typeOfForm ===  'Missingperson' ? <MissingPersonsForm />
       :typeOfForm === 'CrimeReport' ? <CrimeReportForm />
       : typeOfForm === 'Complain' ? <ComplainForm />
       :             <Script /> 
    }
     

</div>
 const Script = () =>
    <p>Please select any field</p>

export default ShowForm

