
var my_products=[
    {
        id:1,
        pro_name:'banaa',
        pro_price:55,
        pro_image:'product-1.jpg',
        // pro_categori:'fruits',
        cat_id:12
    },

    {
        id:2,
        pro_name:'apple',
        pro_price:66,
        pro_image:'product-2.jpg',
        // pro_categori:'fruits',
        cat_id:13
        
    },

    {
        id:3,
        pro_name:'meshmesh',
        pro_price:77,
        pro_image:'product-3.jpg',
        // pro_categori:'fruits',
        cat_id:14
    },
    {
        id:4,
        pro_name:'watermelon',
        pro_price:99,
        pro_image:'product-4.jpg',
        // pro_categori:'fruits',
        cat_id:15
        
    }
]

// =============================================
// ========= Categorie Data ===========================
// =============================================

var my_categrie=[
    
  
    {
        cat_name:"Oranges ",
        cat_img:"cat-1.jpg",
        id:12
    },

    {
        cat_name:"Fresh Meat",
        cat_img:"cat-2.jpg",
        id:13
    },
    {
        cat_name:"Vegetables ",
        cat_img:"cat-3.jpg",
        id:14
    },
    {
        cat_name:"Fastfood",
        cat_img:"cat-4.jpg",
        id:15
    },


]
// ======================================================================================
// ================== store Data in storage   ===========================================
// ======================================================================================
function store_data_in_storage(name,arr_data){

          localStorage.setItem(name,JSON.stringify(arr_data))

        }

store_data_in_storage('products',my_products)//store products

store_data_in_storage('categories',my_categrie)//store categorie

// ======================================================================================
// ================== Get data from storage   ===========================================
// ======================================================================================

function fetch_data_from_storage(storage_get_item){
    var arr_data=localStorage.getItem(storage_get_item)

    var parse_data=JSON.parse(arr_data)

    return parse_data
}
fetch_data_from_storage('products')//fetch products 

fetch_data_from_storage('categories')//fetch categorie

// ======================================================================================
// ==============    creat product elements                     ==================================
// ======================================================================================
function creat_product_elements(ele){

        // creat div Elements for product 
        var div_products_container=document.getElementById('products_container')
        div_products_container.style.display='block'
        var  div_fastfood=document.createElement('div')
        div_fastfood.setAttribute("id","fastfood");
        div_fastfood.setAttribute("class","fastfood");

        var  div_all_products=document.createElement('div')
        div_all_products.setAttribute("id","all_products");
        div_all_products.setAttribute("class","all_products");


        var div_product=document.createElement('div')
        div_product.setAttribute("id","product");

        var div_product_name=document.createElement('div')
        div_product_name.setAttribute("id","product_name");

        // creat element img & ul & li 
        var ele_img=document.createElement('img')
        var ele_ul_pro=document.createElement('ul')
        var ele_li_pro=document.createElement('li')

        // creat element h6 for product name & h5 for price name 
        var ele_h_six_pro_name=document.createElement('h6')
        var ele_a_pro_name=document.createElement('a')
        var ele_h_five_pro_price=document.createElement('h5')


        // append elements
        div_products_container.append(div_fastfood)//append first child div

        div_fastfood.append(div_all_products)// append second child div

        div_all_products.append(div_product , div_product_name)// append third & fourth child div

        div_product.append(ele_img , ele_ul_pro)// append element img & ul in child div product

        div_product_name.append(ele_h_six_pro_name , ele_h_five_pro_price)

        ele_ul_pro.append(ele_li_pro)
    
        ele_h_six_pro_name.append(ele_a_pro_name)

        ele_h_six_pro_name.append(ele_a_pro_name)

        // show data in page.
        ele_li_pro.innerHTML=`<i class="fa fa-shopping-cart"></i>`
        ele_a_pro_name.innerText=ele.pro_name
        ele_h_five_pro_price.innerText='$ '+ele.pro_price
        ele_img.setAttribute("src","imgs/product/"+ele.pro_image);
}

// ======================================================================================
// ================== show Data to user page  ===========================================
// ======================================================================================

function show_products_data(arr_data){
    
    arr_data.forEach(ele=>{ creat_product_elements(ele)})

}//end function
show_products_data(fetch_data_from_storage('products'))

// ======================================================================================
// ==============   creat categorie name list elements    ==================================
// ======================================================================================
var ele_li;
function creat_categorie_list_elements(ele){

                var cat_list=document.getElementById('cat_list')//get element ul

               ele_li=document.createElement('li')

                ele_li.innerHTML=`<li onclick=filter_product(${ele.id})>${ele.cat_name}</li>`
                
                cat_list.append(ele_li)
                  
}
// ======================================================================================
// ==============    show categorie Data                    ==================================
// ======================================================================================
function show_categorie_data(categorie_data){
    
    categorie_data.forEach(ele=> creat_categorie_list_elements(ele) )
                                    
}//end function
show_categorie_data(fetch_data_from_storage('categories'))

// ======================================================================================
// ==============   filter products by categorie Name                     ==================================
// ======================================================================================

function filter_product(categorie_id){

        var div_products_container=document.getElementById('products_container')
        if( div_products_container.style.display='block'){
            div_products_container.style.display='none'
            var products=fetch_data_from_storage('products')
            var filterd_data= products.filter(ele=>categorie_id==ele.cat_id)
            filterd_data.forEach(ele=>creat_product_elements(ele))
        }else{
            div_products_container.style.display='none'
        }
}

// ======================================================================================
// ==============    Add to cart             ==================================
// ======================================================================================
function add_cart(pri_id){
    

}

// ======================================================================================
// ==============                        ==================================
// ======================================================================================


// ======================================================================================
// ==============                        ==================================
// ======================================================================================


// ======================================================================================
// ==============                        ==================================
// ======================================================================================


// ======================================================================================
// ==============                        ==================================
// ======================================================================================