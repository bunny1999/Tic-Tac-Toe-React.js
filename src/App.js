import React,{useState} from 'react'
import Icon from './components/Icon'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Card,CardBody,Container,Row,Col,Button} from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const array = new Array(9).fill("empty")

function App() {

  const [isCross,setIsCross] = useState(false);
  const [winMessage,setWinMessage] = useState("");

  const resetGame = ()=>{
    setIsCross(false);
    setWinMessage("");
    array.fill("empty",0,9);
  }

  const flip = (i)=>{
    if(winMessage){
      return toast(winMessage+"ed", {type:"success"});
    }
    if(array[i]==="empty"){
      array[i]=isCross?"Cross":"Circle";
      setIsCross(!isCross);
    }else{
      return toast("Already Filled!",{type:"error"});
    }
    checkWin();
  }

  const checkWin =()=>{
    if(array[0]!=="empty" && array[0]===array[1] && array[0]===array[2]){
      setWinMessage(array[0]+" Win")
    }
    else if(array[3]!=="empty" && array[3]===array[4] && array[3]===array[5]){
      setWinMessage(array[3]+" Win")
    }
    else if(array[6]!=="empty" && array[6]===array[7] && array[6]===array[8]){
      setWinMessage(array[6]+" Win")
    }
    else if(array[0]!=="empty" && array[0]===array[3] && array[0]===array[6]){
      setWinMessage(array[0]+" Win")
    }
    else if(array[1]!=="empty" && array[1]===array[4] && array[1]===array[7]){
      setWinMessage(array[1]+" Win")
    }
    else if(array[2]!=="empty" && array[2]===array[5] && array[2]===array[8]){
      setWinMessage(array[2]+" Win")
    }
    else if(array[0]!=="empty" && array[0]===array[4] && array[0]===array[8]){
      setWinMessage(array[0]+" Win")
    }
    else if(array[2]!=="empty" && array[2]===array[4] && array[2]===array[6]){
      setWinMessage(array[2]+" Win")
    }
  }

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage 
            ?(
              <div className="m-2">
                <h1 className="text-success text-uppercase text-center">
                  {winMessage}
                </h1>
                <Button
                  color="success"
                  block
                  onClick={resetGame}
                >
                  Reset Game
                </Button>
              </div>
            )
            :(
              <h1 className="text-center text-warning">
                {isCross?"Cross":"Circle"} Turns
              </h1>
            )
          }
          <div className="grid">
            {array.map((item,index)=>(
              <Card color="warning" onClick={()=>flip(index)}>
                <CardBody className="box">
                  <Icon name={item}/>     
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
