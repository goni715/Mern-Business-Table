import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/settings-slice";
import axios from "axios";
import {SetAllProduct, SetTotal} from "../redux/state-slice/productSlice";
import {ErrorToast} from "../helper/ValidationHelper";



const BaseURL = "http://127.0.0.1:5000/api/v1";

export async function GetProductList(pageNo, perPage, searchKeyword){


    let URL = BaseURL+"/ProductList/"+pageNo+"/"+perPage+"/"+searchKeyword;

    store.dispatch(ShowLoader());

     try {


         const result = await axios.get(URL);
         store.dispatch(HideLoader());

         if(result.status === 200 && result.data['status'] === "success"){
             if(result.data['data'][0]['Rows'].length > 0){


                  store.dispatch(SetAllProduct(result.data['data'][0]['Rows']));
                  store.dispatch(SetTotal(result.data['data'][0]['Total'][0]['count']));

                 
             }
             else{

                 store.dispatch(SetAllProduct([]));
                 store.dispatch(SetTotal(0));
                 ErrorToast("No Data Found");

             }

         }
         else{
             ErrorToast("Something Went Wrong!");
         }



     }
     catch(error){

         store.dispatch(HideLoader);
         ErrorToast("Something Went Wrong!");

     }




}




