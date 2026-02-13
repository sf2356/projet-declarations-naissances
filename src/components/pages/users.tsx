import 'bootstrap/dist/js/bootstrap.bundle.min.js'
type Users ={
    identifiant?:string;
    name?:string;
    phone?:string;
    email?:string;
}
type Props={
    users:Users[];
}
function Users (props:Props) {
    //const users=props.users;
    //Destructurer les elements de props pour retirer que les users
    const {users}=props;
    return( 
        <div className="container text-center">
            <div className="grid md:grid-cols-4 gap-4">
{users.map(({name,email="Indisponible"})=>
    <div className="border-4 border-indigo-500" key={name}>
        <p className="text-3xl font-bold underline ">{name}</p>
        <p>{email}</p> 
    </div>
    )}
            </div>

     
    </div>

    )
}

export default Users;