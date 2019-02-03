const dataUsers = [
	{
    id: new Date(),
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
  },
  {
    id: new Date(),
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv"
  },
  {
    id: new Date(),
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net"
  },
  {
    id: new Date(),
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org"
  },
  {
    id: new Date(),
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca"
  }
]

const reduxCrudReducer = ( state = dataUsers, action ) => {
	switch(action.type){
    case "INPUT_DATA_SUCCESS":
      console.log('INPUT_DATA_SUCCESS')
      return state.concat([action.data]);

    case "DELETE_DATA_SUCCESS":
      console.log("DELETE_DATA_SUCCESS")
      return state.filter((data)=>data.id !== action.id)

    case "UPDATE_DATA_SUCCESS":
      console.log("UPDATE_DATA_SUCCESS")
     return state.map((data)=>{
        if(data.id === action.id){
          return{
            ...data,
            name: action.data.updateName,
            username: action.data.updateUsername,
            email: action.data.updateEmail
          }
        }else{
          return data
        }
     })

    default: 
      return state
  }
} 

export default reduxCrudReducer