import style from "./Message_items.module.css";
import Message_item from "./message_item/Message_item";
import NewmessageContainer from "./newmessage/NewmessageContainer";

const Message_items = (props) =>{

    let messagesElements = props.messagesData.map(item => <Message_item text = {item.text} count = {item.likescount} />);
 
    return (
        <div className = {style.messages}>
            <div>
                {messagesElements}
            </div>
           <NewmessageContainer />
        </div>
    );
}


export default Message_items;