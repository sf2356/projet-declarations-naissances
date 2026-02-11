import Message from "../message";

type Message={
        index:string;
        about:string;
};

type Props={
    message:Message[];
};

function Messages(props:Props) {
    const messages=props.message;
return messages.map((message:Message)=>
<Message key={message.index} firstName={message.about} lastName=""/>)
    
}
export default Messages