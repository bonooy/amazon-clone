import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import {ShoppingBasket} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";

function Header() {
    const [{basket}, dispatch] = useStateValue();



    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>

            <div className="header_search">
                <input className="header_searchInput" type="text"/>
                <SearchIcon className="header_searchIcon"/>
            </div>

            <div className="header_nav">

                <div className="header_option">
                    <span className="header_optionLineOne"> 안녕하세요, 로그인 </span>
                    <span className="header_optionLineTwo"> 계정 및 목록</span>
                </div>

                <div className="header_option">
                    <span className="header_optionLineOne"> 반품 </span>
                    <span className="header_optionLineTwo"> & 주문</span>
                </div>

                <div className="header_option">
                    <span className="header_optionLineOne"> 장바구니</span>
                    <span className="header_optionLineTwo"> 장바구니</span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasket/>
                        <span className="header_optionLineTwoheader_basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>

            </div>
        </div>
    );
}

export default Header;