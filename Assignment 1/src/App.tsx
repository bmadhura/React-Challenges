import Friend from "./components/Friend/Friend";
import "./App.module.scss"

const App = () => {
  // NOT A STATE VARIABLE
  const friendList = [{
    id: '1',
    name: 'Aniruddha',
    numberOfClicks: 0
  }, {
    id: '2',
    name: 'Akhil',
    numberOfClicks: 0
  },
  {
    id: '3',
    name: 'Indraneel',
    numberOfClicks: 0
  }];

  // const onFriendClick = (id: string) => {
  //   const recordIndex = friendList.findIndex(f => f.id === id);
  //   if(recordIndex === -1) return;

  //   friendList[recordIndex].numberOfClicks += 1;

  //   console.log(friendList);
  // }

  const editHandler = (id:string) =>{
    friendList.map((f, index)=>{
      if(f.id===id){
        console.log('Editing ', f.name);
      }
    })
  }

  const DeleteHandler = (id:string) =>{
    friendList.map((f, index)=>{
      if(f.id===id){
        console.log('Deleting ', f.name);
        friendList.splice(index, 1);
      }
    })
    
    console.log(friendList);
  }

  return (
    <>
    <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {
        friendList.map(f => {
          return <Friend 
            key={f.id}
            id={f.id}
            name={f.name}
            onClickEdit={editHandler}
            onClickDelete={DeleteHandler}
          />
        })
      }
      </table>
    </>
  )
}

export default App;