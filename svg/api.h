notic 
- AccessToken Format  == "bearer token"
- Params Format == Object 
example for Send SMS api
let data = {mobile : 09164524864}




#AUTH-API

Send SMS
{
    api:"http://localhost:7240/auth/getOtp"
    header:AccessToken
    params : {'mobile'}
    method : POST
}

Check Code
{
    api:"http://localhost:7240/auth/checkOtp"
    params:{"mobile","code"}
    method : POST
}

Is Login
{
    api:"http://localhost:7240/auth/isLogin"
    header:AccessToken
    method : POST
}

--------------------------------------------------
#CATEGORY-API

Add Category(Admin)
{
    api:"http://localhost:7240/admin/category/addCategory"
    header:AccessToken
    params:{"title(STRING)","parent(OBJECTID)"}
    method : POST 
}

Edit Category(Admin)
{
    api:"http://localhost:7240/admin/category/editCategory"
    header:AccessToken
    params:{"title(STRING)","parent(OBJECTID)","id(OBJECTID)"}
    method : POST 
}

Edit Category(Admin)
{
    api:"http://localhost:7240/admin/category/deleteCategory"
    header:AccessToken
    params:{"id(OBJECTID)"}
    method : POST 
}

Get All Category(Public)
{
    api:"http://localhost:7240/user/category/getAllCategory1"
    method : GET 
}

Get Category By Id(Public)
{
    api:"http://localhost:7240/user/category/getCategoryById"
    params:{"id(OBJECTID)"}
    method : POST 
}

Get Category By Id 1 (Public)
{
    api:"http://localhost:7240/user/category/getCategoryById"
    params:{"id(OBJECTID)"}
    method : POST 
}

-----------------------------------------------
#PRODUCT-API

Add Product(admin)
{
    api:"http://localhost:7240/admin/product/addProduct"
    header:AccessToken
    params:{
        "p_name(STRING)['Persian Name']"
        "e_name(STRING)['English Name']"
        "category(OBJECTID)"
        "modes(OBJECT['Example1'])"
        "vishegiha(ARRAY OF OBJECT['Example2])"
        "images(ARRAY OF STRING[Example3])"
        "priceasli(INTEGER)"
        "description(STRING)"
    }
    method : POST 
}

******************************************************
Example1 : 
{
    "colors" : [
        {"name":"green","price":"15000","value":"green"}
        ],
    "garanty" : [
        {"name":"samservice","price":"7000","value":""}
        ]
}

Example2 : 
[
    {"ram":"4gig"},
    {"hafeze":"2gig"},
    {"battery":"3000"},
    {"doorbin":"24mega"}
]

Example3 : ["sadsd.jpg","asdas.jpg"]

***************************************************

Delete Product(admin)
{
    api:"http://localhost:7240/admin/product/deleteProductOne"
    header:AccessToken
    params:{"id(OBGECTID)"}
    method : POST 
}

Delete Many Product(admin)
{
    api:"http://localhost:7240/admin/product/deleteManyProducts"
    header:AccessToken
    params:{"ids(ARRAY OF OBJECTID)"}
    method : POST 
}

Get All Products(admin)
{
    api:"http://localhost:7240/admin/product/getAllProducts"
    header:AccessToken
    params:{"page(INTEGER)","size(INTEGER)"}
    method : POST 
}

Get All Products(public)
{
    api:"http://localhost:7240/user/product/getAllProducts"
    params:{"page(INTEGER)","size(INTEGER)"}
    method : POST 
}

Get Product By Id(public)
{
    api:"http://localhost:7240/user/product/getProductById"
    params:{"id(OBJECTID)"}
    method : POST 
}

Get Most Sale Products(public)
{
    api:"http://localhost:7240/user/product/getMostSaleProduct"
    method : GET 
}

-----------------------------------------------
#CART-API

Add To Cart(public)
{
    api:"http://localhost:7240/user/cart/addToCart"
    header:AccessToken
    params:{
        "p_name(STRING)"
        "e_name(STRING)"
        "priceAsli(INTEGER)"
        "modes(ARRAY OF OBJECT['Example4'])"
        "count(INTEGER)"
        "productId(OBJECTID)"
    }
    method : POST 
}

Get Cart By User(public)
{
    api:"http://localhost:7240/cart/getCart"
    header:AccessToken
    method : POST 
}

Delete One Item Of Cart(public)
{
    api:"http://localhost:7240/cart/deleteItemCart"
    header:AccessToken
    params:{"id(OBJECTID)"}
    method : POST 
}

Delete All Item Of Cart(public)
{
    api:"http://localhost:7240/cart/deleteAllItems"
    header:AccessToken
    method : POST 
}

*********************************

Example4 : 
[
    {"name":"bime","value":"","price":"7000","title":"bime1"}
    {"name":"garanti","value":"","price":"5400","title":"garanti1"}
    {"name":"Rang","value":"#000","price":"5400","title":"Meshki"}
]

*********************************

-----------------------------------------------
#PEYMENT-API

Send Request Payment(public)
{
    api:"http://localhost:7240/api/peyment/peyCartNextPay"
    header:AccessToken
    params:{"amount(INTEGER)"}
    method : POST 
}

Verify Request Payment(public)
{
    api:"http://localhost:7240/peyment/verifyNextPay"
    header:AccessToken
    params:{"amount(INTEGER)","trans_id(STRING)","order_id(STRING)"}
    method : POST 
}

-----------------------------------------------
#POST PRICE-API

Get Post Price(public)
{
    api:"https://public.api.tapin.ir/api/v1/post-office/check-price/"
    header:AccessToken
    params:{
        "price(INTEGER)"
        "weight(INTEGER)"
        "order_type(INTEGER)"
        "pay_type(INTEGER)"
        "to_province(INTEGER)"
        "from_province(INTEGER)"
        "to_city(INTEGER)"
        "from_city(INTEGER)"
        }
    method : POST 
}

Get Ostan And Shahr(public)
{
    api:"https://public.api.tapin.ir/api/v1/public/state/tree/"
    method : GET 
}

-----------------------------------------------
#ADDRESS-API

Add Address User(public)
{
    api:"http://localhost:7240/user/address/addAddress"
    header:AccessToken
    params:{
        "ostanCode(INTEGER)"
        "cityCode(INTEGER)"
        "ostanName(STRING)"
        "cityName(STRING)"
        "name(STRING)"
        "mobile(INTEGER)"
        "postalCode(INTEGER)"
        "plak(INTEGER)"
        "description(STRING)"
        }
    method : POST 
}

Get Addresses By Id(public)
{
    api:"http://localhost:7240/user/address/getAddressById"
    header:AccessToken
    method : POST 
}

Delete Addresses By Id(public)
{
    api:"http://localhost:7240/user/address/deleteAddress"
    header:AccessToken
    params:{"id(OBJECTID)"}
    method : POST 
}
