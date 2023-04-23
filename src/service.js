import axios from 'axios';

axios.defaults.baseURL="http://localhost:5126/todoItems"

axios.interceptors.response.use(
  function(response){
    return response;
  },
  function(error){
    console.log('error',error)
  }
)


export default {
  getTasks: async () => {
    const result = await axios.get(axios.defaults.baseURL)    
    return result.data;
  },

  addTask: async(name)=>{
  
    const result= await axios.post(axios.defaults.baseURL,{ name: name, isComplete: false}) 
     return result.data;
    
  },

  setCompleted: async(id, isComplete)=>{
    const result= await axios.put(`/${id}?isComplete=${isComplete}`)
   // console.log('setCompleted', {id, isComplete})
  },

  deleteTask:async(id)=>{
    const result= await axios.delete(`/${id}`)
   // console.log('deleteTask')
    return result.data;
  }

   
   

  
};
