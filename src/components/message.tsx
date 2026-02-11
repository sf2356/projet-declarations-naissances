type Props={
    firstName:string;
    lastName:string;
    phone?:string;
    email?:string;
}

function Message(props:Props) {
    return(
        <>

        <p>Bonjour {props.firstName} {props.lastName}
        </p>
        <p>
        {props?.phone && <span>{props.phone}</span>}
        {props?.email ? <span>{props.email}</span>:null}
        </p>

        </>

    )
}

export default Message;

