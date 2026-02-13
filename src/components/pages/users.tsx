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
    const users=props.users;
    return( 
        <div className="container text-center">
            <div className="grid md:grid-cols-4 gap-4">
{users.map((user:Users)=>
    <div className="border-4 border-indigo-500" key={user.identifiant}>
        <p className="text-3xl font-bold underline ">{user.name}</p>
        <p>{user.email}</p> 
    </div>
    )}
            </div>

     
    </div>

    )
}

export default Users;