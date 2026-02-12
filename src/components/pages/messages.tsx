import Message from "../message";

type Message={
        index:string;
        about:string;
};

type Prop={
    message:Message[];
};

function Messages(prop:Prop) {
    const messages=prop.message;
return messages.map((message:Message)=>
<Message about={message.about} index={message.index}/>)
    
}
export default Messages