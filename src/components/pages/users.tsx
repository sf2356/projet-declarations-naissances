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
            <div className="row row-cols-2 ">
{users.map((user:Users)=>
    <div className=" g-col-6 border border-3 border-primary grid_contains" key={user.identifiant}>
        <p>{user.name}</p>
        <p>{user.email}</p> 
    </div>
    )}
            </div>

     
    </div>

    )
}

export default Users;