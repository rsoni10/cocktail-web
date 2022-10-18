import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getCocktailDeatils } from "../redux/features/CocktailSlice";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./layouts/Layout";
import SpinnerAnim from "../components/SpinnerAnim";

const ProductDetails = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const {cocktail,loading} = useSelector((state)=>state.cocktailsData)
  console.log("cocktail cocktail",cocktail)

  console.log("param value",param)

//www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
    // return <h2>No Cocktail Details</h2>;

useEffect(()=>{
dispatch(getCocktailDeatils(param.id))
},[])
    return (
      <>
       {loading===true?
          <SpinnerAnim /> 
           :
            <div className="container mt-4">
              <Link to="/" className="btn btn-info">
                GO BACK
              </Link>
              {cocktail.drinks && cocktail.drinks.map((item)=>{
               const strIngredient = [item.strIngredient1,item.strIngredient2,item.strIngredient3,item.strIngredient4,item.strIngredient5,item.strIngredient6,item.strIngredient7,item.strIngredient8,item.strIngredient9,item.strIngredient10]
              //  console.log("strIngredient",strIngredient) 
               return(
               <div className="row mt-4">
                <div className="col-md-5">
                  <img src={item.strDrinkThumb} alt="{name}" height={300} width={400} />
                </div>
                <div className="col-md-5 ms-5">
                  <h2>Name : {item.strGlass}</h2>
                  <p className="mt-1">Category : {item.strCategory}</p>
                  <p>Info : {item.strInstructionsDE}</p>
                  <p>Glass : {item.strGlass}</p>
                  <p>Ingredients : 
                   {strIngredient.map((itm)=>{
                    if(itm != null){ 
                      return(<span>{itm },</span>)
                    }
                   })}

                    {/* {item.strIngredient1 + " , "} */}
                    {/* { + item.strIngredient2 + " , " + item.strIngredient3+ " , " + item.strIngredient4+ " , " + item.strIngredient5+ " , " + item.strIngredient6 && item.strIngredient6} */}
                  </p>
                </div>
              </div>
                )
              })}
              
            </div>
        }
        
      </>
    );
  }


export default ProductDetails;