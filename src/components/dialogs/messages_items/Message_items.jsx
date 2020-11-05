import style from "./Message_items.module.css";
import Message_item from "./message_item/Message_item";
import Newmessage from "./newmessage/Newmessage";

const Message_items = (props) =>{

    let messagesElements = props.messagesData.map(item => <Message_item text = {item.text} count = {item.likescount} />);
 
    return (
        <div className = {style.messages}>
            <div>
                {messagesElements}
            </div>
           <Newmessage addMessage = {props.addMessage} />
        </div>
    );
}

export default Message_items;