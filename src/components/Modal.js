
import {Button, Modal } from 'react-bootstrap';

export default function MyModal(props){



  const title = props.event.title;
  const summary = props.event.summary;

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
          {title}
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <h4>{summary}</h4>
          <p>


          </p>
        </Modal.Body>
      <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
      </Modal>
  );
    }

