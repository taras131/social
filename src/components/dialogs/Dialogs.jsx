import style from "./Dialogs.module.css";
import Dialogs_items from "./dialogs_items/Dialogs_items";
import Message_items from "./messages_items/Message_items";

const Dialogs = (props) => {
    return (
        <div className = {style.dialogs}>
            <Dialogs_items dialogsData ={props.messagesInformation.dialogsData} />
            <Message_items messagesData ={props.messagesInformation.messagesData} addMessage = {props.addMessage} />
        </div>
    )
}

export default Dialogs;