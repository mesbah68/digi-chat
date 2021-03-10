import React, { useRef, useState } from 'react';
import {Document3Icon, Location4Icon} from "@iconbox/iconly";
import {useSelector} from "react-redux";
import {MessageSelectors, useMessageActions} from "../../@redux";
import {StyledFooter} from "./styles";
import {uuid} from "uuidv4";

const FAKE_RESPONSES = [
  'واقعا؟',
  'باشه بهش خبر میدم :)',
  'ندیدی مگه؟',
  'آره خییییلی وقته!!',
  'حله',
  'قربونت',
  'سلامتی',
  'چی؟',
  'متوجه نشدم!؟',
  'اره خدا رو شکر'
]

const Send = () => {
  const [answer, setAnswer] = useState('');
  const { sendMessage } = useMessageActions();
  const activeMessage = useSelector(MessageSelectors.getActiveMessage);
  const messages = useSelector(MessageSelectors.getMessagesList);

  const inputFile = useRef(null);
  const sendAnswer = (answer, byMe = true) => {
    const myAnswer = {
      id: uuid(),
      text: answer,
      date: new Date().getTime(),
      byMe
    };


    const newMessages = messages.map(message => {
      if(message.id === activeMessage.id) {
        message.messages = [...message.messages, myAnswer];
      }
      return message;
    })

    sendMessage(newMessages);
    setAnswer('');
  };

  const handleSendAnswer = e => {
    e.preventDefault();
    sendAnswer(answer);

    setTimeout(() => {
      const res = FAKE_RESPONSES[Math.floor(Math.random() * FAKE_RESPONSES.length)];

      sendAnswer(res, false)
    }, 2000);
  }

  const handleFileSelect = () => {
    // inputFile.current.click();
  }

  return (
    <StyledFooter onSubmit={handleSendAnswer}>
      <input value={answer} onChange={e => setAnswer(e.target.value)} type="text" />
      <input type="file" id="file" ref={inputFile} style={{display: 'none'}} />
      <button className="action-r"><Location4Icon /></button>
      <button className="action-r" onClick={handleFileSelect}><Document3Icon /></button>
      <button type="submit" className="send" >ارسال</button>
    </StyledFooter>
  );
};

export default Send;