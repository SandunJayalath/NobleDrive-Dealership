import { useState } from "react";
import NavBar from "../Components/NavBar";
import NormalButton from "../Components/NormalButton";
import TheFooter from "../Components/TheFooter";
import { useRef } from 'react'

// Importing the icons in used,
import { Paperclip } from 'lucide-react';
import { Smile } from 'lucide-react';
import { Send } from 'lucide-react';
import { X } from 'lucide-react';
import chatBackground from '../assets/live-chat-background.png'

function LiveChatPage(){

    const fileInputRef = useRef(null);

    const handleFileClick = () => {
        fileInputRef.current.click();
    };

    const handleFilechange = (e) => {
        const file = e.target.files[0];
        console.log("Selected File: ", file)
    }

    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSend = () => {
        if (inputValue.trim() === '') return;

        setMessages([...messages, inputValue]);
        setInputValue('');
    }

    const [errorMEssage, setErrorMessage] = useState(false);
    const [isOpened, setIsOpened] = useState(false);

    
  const handleClick = () => {
    if (!isOpened) {
      setErrorMessage(true);
      setIsOpened(true); 
    }
  };

  const closeLightbox = () => setErrorMessage(false);

    return(
        <>
        <NavBar/>
        <div className="pages">
        <div id="live-chat-page" style={{backgroundImage: "url('https://i.pinimg.com/originals/41/0f/62/410f626360ca81e6098bc96774464e16.jpg')", backgroundPosition: "center", height: "100vh", width: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", backgroundBlendMode: "multiply", zIndex: "1", display: "flex", justifyContent: "center"}}>
           <div className="cotainer-fluid d-flex" style={{width: "100%", maxWidth: "1700px"}}>
           <div className="row d-flex live-chat-container" style={{zIndex: "2", margin: "100px 0px", width: "100%"}}>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-lg-5 live-chat-texts" style={{backgroundColor: "rgba(0, 0, 0, 0.56)", textAlign: "center", color: "white", color: "rgb(214, 214, 214)", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                    <h3>Why Chat With Us?</h3>
                    <p>Got questions about a vehicle, financing, or trade-ins? Our live chat team is here to help in real-time. Whether you're browsing or ready to buy, chatting with us can save you time and get you accurate info faster than ever.</p>                    
                    <h3>Expert Help, Anytime</h3>
                    <p>Our chat agents aren’t just bots — they're trained professionals who know our inventory, pricing, and financing options inside and out. Ask anything, from vehicle availability to service schedules. We're here to make your car buying experience smooth.</p>                    
                    <h3>Need Financing Info? Ask Us!</h3>
                    <p>Curious about payment plans or credit requirements? Get instant details on financing options without the hassle. We’ll guide you through loan approvals, down payments, and everything in between — right in the chat.</p>
                    <h3> Reserve Your Car Online</h3>
                    <p>Found the car you love? Use the chat to reserve it instantly. We’ll hold it for you and help schedule a test drive at your convenience. Don’t miss out — good cars go fast!</p>
                    <h3>Available 24/7</h3>
                    <p>Got questions about a vehicle, financing, or trade-ins? Our live chat team is here to help in real-time. Whether you're browsing or ready to buy, chatting with us can save you time and get you accurate info faster than ever.</p>
                </div>
               
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-lg-5" id="live-chatting-full-container">
                <div className="d-flex" style={{width: "100%", height: "100%", backgroundImage: `url(${chatBackground})`, backgroundRepeat: "repeat", backgroundSize: "330px 330px", backgroundColor: "rgba(0, 0, 0, 0.8)", backgroundBlendMode: "multiply", minHeight: "600px", position: "relative", border: "3px solid rgb(70, 69, 69)", borderRadius: "15px", opacity: "0.8", position: "relative"}}>
                    
                    <div className="d-flex justify-content-start align-items-end sending-msg-area" style={{flexDirection: "column", position: "absolute", right: "0px", overflowY: "scroll", width: "100%", padding: "0px 20px"}}>
                    {messages.map((msg, index) => (
                    <div key={index} className="mb-4 the-message">
                        <strong>{msg}</strong>
                    </div>
                    ))}
                    </div>

                    <div className="chat-components-area">
                        <div className="d-flex chat-component-pattern">
                            <span id="tooltip">
                                <input type="file" ref={fileInputRef} onChange={handleFilechange} style={{display :"none"}}/>
                                <Paperclip  onClick={handleFileClick} className="hovering-get-large paper-clip" size="35px" style={{marginRight: "10px"}}/>
                                <span id="tooltip-text">Attachements</span>
                            </span>
                            <span id="tooltip">
                                <Smile className="hovering-get-large emoji-icon" size="35px" style={{marginRight: "10px"}}/>
                                <span id="tooltip-text">Add Emojis</span>
                            </span>
                            <textarea className="live-messaging-area" type="text" placeholder="Write your message..." value={inputValue} onChange={handleInputChange}/>
                            <span id="tooltip">
                                <button onClick={() => { handleSend(); handleClick(); }} id="live-chat-send-btn"><Send className="send-icon" size="35px"/></button>
                                <span id="tooltip-text">Send</span>
                            </span>
                        </div>
                    </div>
                </div>
                </div>
           </div>
        </div>
        </div>
        </div>

        {errorMEssage && (
            <div className="d-flex justify-content-center align-items-center" style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100vh", height: "100vh", backgroundColor: "rgba(0, 0, 0, 0.25)", zIndex: "2", animation: "popUpError 0.3s forwards ease-in-out"}}>
            <div className="error-message">
                <div className="d-flex" style={{justifyContent: "space-between", width: "100%"}}>
                    <h4 style={{width: "50%"}}>Demo Info</h4>
                    <button className="error-close" onClick={closeLightbox}><X/></button>
                </div>
                <hr />
                <h5>🔧 This is a frontend-only demo. Chat messages are not stored or sent to a server.</h5>
            </div>
            </div>
        )}

        <TheFooter/>
        </>
    );

}
export default LiveChatPage;
