import React ,{useState,useReducer} from "react";
import { images } from "../constants";
import { mockCarsData } from "../utilities/AppUtils";
import CreateDataContext from "./CreateDataContext";



const CarContext = React.createContext();

const blogReducer = (state, action) => {

    switch (action.type)
    {
        case 'add' : 
      return [...state,{name :action.payload.name,
        fuelType : action.payload.fuelType,
        price : action.payload.price,
        safety : action.payload.safety,
        acceleration : action.payload.acceleration,
        range : action.payload.range,
        seats : action.payload.seats,
        booked : false,
        type : action.payload.type,
        transmission : action.payload.transmission,
        type : action.payload.type,
        image : images.car_example_image,
        id : Math.floor(Math.random()*9999 )}];

        case 'edit_original':
            return( state.map((car)=>{
                if(car.id===action.payload.id)
                {
                    //car.booked=action.payload.booked
                    return action.payload
                }
                else
                {
                    return car
                } }))
        case "edit":
            return [...state,{name :action.payload.name,
                fuelType : action.payload.fuelType,
                price : action.payload.price,
                safety : action.payload.safety,
                acceleration : action.payload.acceleration,
                range : action.payload.range,
                seats : action.payload.seats,
                booked : action.payload.booked,
                type : action.payload.type,
                transmission : action.payload.transmission,
                image : action.payload.image,
                id : action.payload.id}];


      case 'delete' : 
      return state.filter((car) =>  car.id !== action.payload)

      case 'getAll' : 
      return  state;

      default : 
      return state;
    }
} ;

const addCarDetail =(dispatch) =>{

    return (name,fuelType,price,
    acceleration,
    range ,
    seats,booked,transmission, type,image )=>{

    
    dispatch ({type : 'add', payload : {name: name ,fuelType : fuelType ,price : price,
    
    acceleration : acceleration,
    range : range,
    seats : seats,
    booked : booked,

    transmission : transmission,
    type : type ,
    image : image
    
    }});
};
}
const deleteCar =(dispatch) =>{

    return (id)=>{

    
    dispatch ({type : 'delete',payload : id});
};
}
const getCars =(dispatch) =>{

    return ()=>{
       
    
    dispatch ({type : 'getAll'});
};
}

const editCar_original=(dispatch) =>
    {
      return (id,name, fuelType,price,acceleration,range,seats,booked,transmission,type,image,callback)=>{

        
        dispatch({type:'edit',payload: {id,name ,fuelType ,price ,
    
            acceleration ,
            range ,
            seats ,
            booked ,
        
            transmission ,
            type ,
            image 
            
            }});
            if ( callback)
            {
                callback();
            }
        
      }
    } 

    const editCar=(dispatch) =>
    {
      return (id,name, fuelType,price,acceleration,range,seats,booked,transmission,type,image,callback)=>{

    
        dispatch({type:'edit',payload: {id,name ,fuelType ,price ,
    
            acceleration ,
            range ,
            seats ,
            booked ,
        
            transmission ,
            type ,
            image 
            
            }});
            if ( callback)
            {
                callback();
            }
        
      }
    }  
  
    




export const {Context, Provider} = CreateDataContext(
    blogReducer,
    {addCarDetail,deleteCar,editCar,getCars},
    mockCarsData)
    ;