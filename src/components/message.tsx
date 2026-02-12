type Props={
    firstName?:string;
    lastName?:string;
    phone?:string;
    email?:string;
    about:string;
    index?:string;
}

function Message(props:Props) {
    return(
        <>

        <p>Bonjour {props.index} {props.about}
        </p>


        </>

    )
}

export default Message;

