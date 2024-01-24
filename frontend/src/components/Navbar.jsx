import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/userRedux";
import { logoutUser } from "../redux/apiCalls";

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "40px" })}
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;
const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    border-radius: 5px;
    width: 80%;
    ${mobile({ padding: "3px" })}
`;
const Input = styled.input`
    border: none;
    outline: none;
    width: 100%;
    color: #575759;
    ${mobile({ width: "50px" })}
`;
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "22px" })}
`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "9px", marginLeft: "10px" })}
`;
const MenuUser = styled.div`
    font-weight: 700;
    margin-left: 25px;
    color: teal;
`;

const Navbar = () => {
    const user = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { quantity } = useSelector((state) => state.cart);

    const handleLogout = () =>{
       logoutUser(dispatch)
    }

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <SearchIcon style={{ color: "grey", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>VASTRA.</Logo>
                </Center>
                <Right>
                    {user ? (
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    ) : (
                        <>
                            <MenuItem onClick={() => navigate("/signup")}>REGISTER</MenuItem>
                            <MenuItem onClick={() => navigate("/login")}>SIGN IN</MenuItem>
                        </>
                    )}

                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <Link to="/cart">
                                <ShoppingCartOutlinedIcon />
                            </Link>
                        </Badge>
                    </MenuItem>
                    <MenuUser>{user?.firstname}</MenuUser>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
