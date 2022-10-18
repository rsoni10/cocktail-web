import React, { useState, useEffect } from "react";
import Layout from "./layouts/Layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktails } from "../redux/features/CocktailSlice";
import SpinnerAnim from "../components/SpinnerAnim"
import { Link } from "react-router-dom";
import SearchBox from "../components/SearchBox";

const HomePage = () => {
  const dispatch = useDispatch();
  const {cocktails,loading,error,status} = useSelector((state)=> state.cocktailsData)
  const [cocktailData ,setcocktailData ] = useState([])
  console.log("cocktails data" ,cocktails)

  // console.log("status data" ,status)
  // console.log("loading data" ,loading)
  // console.log("error data" ,error)
 useEffect(()=>{
 dispatch(fetchCocktails())
 },[])

 useEffect(()=>{
  if(!cocktails){
   setcocktailData([])
  }
  else{
    const newCock = cocktails.drinks && cocktails.drinks.map((item)=>{
       const { idDrink,strAlcoholic,strDrinkThumb,strGlass,strDrink} =item
       return{
        id:idDrink,
        name:strDrink,
        img:strDrinkThumb,
        glass:strGlass,
        info:strAlcoholic
       }
    })
    setcocktailData(newCock)
  }
 },[])
 console.log("cocktailData data" ,cocktailData)
 if(loading===true){
  return <SpinnerAnim />;
 }
else if(error){
  return <p>{error.message}</p>;
}
else if(!cocktails){
  return (
      <Layout>
        <h2>No Cocktail Found With THis Name</h2>
      </Layout>
    );
}
else{
  return (
    <>
      <div className="container">
        <div className="row">
          <SearchBox/>
        </div>
        <div className="row">
         {cocktailData && cocktailData.map((item)=>{
          return(
            <div className="col-md-3 mt-3 m-1" key={item.id}>
            <div className="card" >
              <img src={item.img} className="img-fluid card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h5 className="card-title">{item.glass}</h5>
                <p className="card-text">{item.info}</p>
                <Link to={`/product/${item.id}`} className="btn btn-primary">
                  Details
                </Link>
             </div>
            </div>
          </div>
         
          )
         })}
          
        
        </div>
      </div>
    </>
  );
}
};

export default HomePage;