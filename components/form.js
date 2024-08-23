import AddUserForm from './addUserForm';
import UpdateUserForm from './updateUserForm';

const  flag = true;


export default function Form() {
  return(
    <div className="container mx-auto py-3">
      {flag ? <AddUserForm/>: <UpdateUserForm/> }
</div>
  )
  }
