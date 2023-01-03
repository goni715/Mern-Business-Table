import React, {Fragment, useEffect, useState} from 'react';
import {GetProductList} from "../ApiServices/ApiServices";
import {useSelector} from "react-redux";
import {selectAllProduct, selectTotal} from "../redux/state-slice/productSlice";
import ReactPaginate from "react-paginate";

const ProductListPage = () => {

    let [searchKeyword, setSearchKeyword] = useState(0);
    let [perPage, setPerPage] = useState(5);
    let [pageNo, setPageNo] = useState(1);

    useEffect(()=>{
        GetProductList(pageNo,perPage,searchKeyword);
    },[]);


    let Total = useSelector(selectTotal);
    let AllProduct = useSelector(selectAllProduct);


    //PageNumberClick
    const handlePageClick = (event) => {
        let selectPageNo = event.selected;
        setPageNo(selectPageNo+1);//Add 1 for actual PageNumber
        GetProductList(selectPageNo+1, perPage, searchKeyword);
    }


    const handlePerPage = (e) => {

        let selectPerPage = parseInt(e.target.value);
        setPerPage(selectPerPage);

        GetProductList(pageNo,selectPerPage,searchKeyword);

    }



    const searchKeywordOnChange = (e) => {

        let inputValue = e.target.value;
         setSearchKeyword(inputValue);

          if(inputValue.length ===0){

              setSearchKeyword("0");
              GetProductList(pageNo,perPage,"0");

          }

    }


    const searchData = () => {
        GetProductList(pageNo,perPage,searchKeyword);
    }




    return (
        <Fragment>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-6">
                                            <h5>My Product List</h5>
                                        </div>
                                        <div className="col-2">
                                            <select onChange={handlePerPage} className="form-control mx-2 form-select-sm form-select form-control-sm">
                                                <option value="5">5 Per Page</option>
                                                <option value="10">10 Per Page</option>
                                                <option value="20">20 Per Page</option>
                                                <option value="30">30 Per Page</option>
                                                <option value="50">50 Per Page</option>
                                                <option value="100">100 Per Page</option>
                                            </select>
                                        </div>
                                        <div className="col-4">
                                            <div className="input-group mb-3">
                                                <input onChange={searchKeywordOnChange} type="text" className="form-control form-control-sm" placeholder="Search.." aria-label/>
                                                <button onClick={searchData} className="btn btn-outline-primary btn-sm mb-0" type="button">Search</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="table-responsive data-table">
                                                <table className="table">
                                                    <thead className="sticky-top bg-white">
                                                    <tr>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">PRODUCT</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">PRICE</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">STOCK</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">CODE</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        AllProduct.map((item,i)=>{

                                                            return(
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex px-2 py-1">
                                                                        <div>
                                                                            <img src={item.image} className="avatar me-3" />
                                                                        </div>
                                                                        <div className="d-flex flex-column justify-content-center">
                                                                            <h6 className="mb-0 text-xs">{item.title}</h6>
                                                                            <p className="text-xs text-secondary mb-0">{item.category}</p>
                                                                        </div>

                                                                    </div>

                                                                </td>
                                                                <td>
                                                                    <p className="text-xs font-weight-bold mb-0">{item.brand}</p>
                                                                    <p className="text-xs text-secondary mb-0">{item.price} Taka</p>
                                                                </td>
                                                                <td>
                                                                    <p className="badge bg-gradient-success">{item.stock}</p>
                                                                </td>
                                                                <td>
                                                                    <span className="text-secondary text-xs font-weight-bold">{item.product_code}</span>
                                                                </td>
                                                            </tr>
                                                            );

                                                        })
                                                    }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-5">
                                            <nav aria-label="Page navigation example">
                                                <ReactPaginate
                                                    previousLabel="Previous"
                                                    nextLabel="Next"
                                                    pageClassName="page-item"
                                                    pageLinkClassName="page-link"
                                                    //previousClassName="page-item"
                                                    previousLinkClassName="page-link"
                                                    //nextClassName="page-item"
                                                    nextLinkClassName="page-link"
                                                    breakLabel="..."
                                                    breakClassName="page-item"
                                                    breakLinkClassName="page-link"
                                                    pageCount={Total/perPage}
                                                    marginPagesDisplayed={2}
                                                    pageRangeDisplayed={5}
                                                    containerClassName="pagination justify-content-end"
                                                    activeClassName="active"
                                                    onPageChange={handlePageClick}

                                                />
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ProductListPage;