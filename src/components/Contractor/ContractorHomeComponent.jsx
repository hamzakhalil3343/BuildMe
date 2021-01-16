import React,{useEffect,useState} from 'react';
import HomeTab from './HomeTab';
import ProminentAppBar from './ProminentAppBar';
import axios from 'axios';
import { store } from 'react-notifications-component';
const ContractorHomeComponent = () => {
    const [data,setData]=useState();
  
    const id = localStorage.getItem('id');
    useEffect(() => {
         const fetchData = async () => {
            const result = await axios(
              `http://localhost:3000/contractors/${id}`,
            );
       
            setData(result.data.isAuthenticated);
            console.log('data is ',data)
            if (data==false){
                { store.addNotification({
                    title: "Failed !",
                    message: "You are not Authenticated ! ",
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                      duration: 5000,
                      onScreen: true
                    }
                  })
               }
            }
          };
       
          fetchData();
       
       
        },[]);
    return (
        // <div>{
        //    data!=''?<h3>Not Found </h3>:<div></div>
        //     }
        //        <ProminentAppBar/>
        //        <HomeTab/>
        // </div>
        data !=''?<div>
             <ProminentAppBar/>
             <HomeTab/>
        </div>:<h2>You are not Authenticated </h2>
    );
};

export default ContractorHomeComponent;