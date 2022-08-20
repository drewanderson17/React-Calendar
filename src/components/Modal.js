
import {Button, Modal } from 'react-bootstrap';

export default function MyModal(props){



  const title = props.event.title;
  const summary = props.event.summary;

   const StartDate = props.event.StartDate;
  //  const endDate = prp
  //  const key
  //  const summary:
  //  const netsTicketNumber
  //  const wirelessTicketNumber
  //  const assignee
  //  const tenantType
  //  const stackType
  //  const site
  //  const impactDevices
  //  const assetName
  //  const wirelessRisk
  //  const wirelineRisk

    return (
      <Modal
      {...props}
      animation={false}
      centered
      backdrop = {false}
      aria-labelledby="contained-modal-title-vcenter"
      style={{opacity:1}}
      >


      <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
          <bold> {title} </bold>
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <h4>{summary}</h4>

            <ul>

              <li> NetsTicketNumber: {props.event.netsTicketNumber} </li>
              <li> WirelessTicketNumber : {props.event.wirelessTicketNumber}</li>

              <li> Assignee: {props.event.assignee} </li>
              <li> TenantType: {props.event.tenantType}</li>

              <li> Stack Type: {props.event.stackType} </li>
              <li>  Site: {props.event.site}</li>
              <li> Asset Name: {props.event.impactDevices} </li>
              <li>  Wireless Risk: {props.event.wirelessRisk}</li>
              <li> WirelineRisk: {props.event.wirelineRisk}</li>

            </ul>

        </Modal.Body>
      <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
      </Modal>
  );
    }

