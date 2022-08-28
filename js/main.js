
var my_products=[
    {
        id:1,
        pro_name:'Mobile-1',
        pro_price:55,
        pro_image:'product-1.jpg',
        // pro_categori:'fruits',
        cat_id:12
    },

    {
        id:2,
        pro_name:'Mobile-2',
        pro_price:66,
        pro_image:'product-2.jpg',
        // pro_categori:'fruits',
        cat_id:12
        
    },

    {
        id:3,
        pro_name:'Mobile-3',
        pro_price:77,
        pro_image:'product-3.jpg',
        // pro_categori:'fruits',
        cat_id:12
    },
    {
        id:4,
        pro_name:'Mobile-4',
        pro_price:99,
        pro_image:'product-4.jpg',
        // pro_categori:'fruits',
        cat_id:12
        
    },

    // =============================
    {
        id:5,
        pro_name:'laptop-1',
        pro_price:55,
        pro_image:'product-8.jpg',
        // pro_categori:'fruits',
        cat_id:13
    },

    {
        id:6,
        pro_name:'laptop-2',
        pro_price:66,
        pro_image:'product-9.jpg',
        // pro_categori:'fruits',
        cat_id:13
        
    },

    {
        id:7,
        pro_name:'laptop-3',
        pro_price:77,
        pro_image:'product-10.jpg',
        // pro_categori:'fruits',
        cat_id:13
    },
    {
        id:8,
        pro_name:'laptop-4',
        pro_price:99,
        pro_image:'product-11.jpg',
        // pro_categori:'fruits',
        cat_id:13
        
    },
    // =============== tablet===============
    {
        id:9,
        pro_name:'Tablet-1',
        pro_price:55,
        pro_image:'product-18.jpg',
        // pro_categori:'fruits',
        cat_id:14
    },

    {
        id:10,
        pro_name:'Tablet-2',
        pro_price:66,
        pro_image:'product-19.jpg',
        // pro_categori:'fruits',
        cat_id:14
        
    },

    {
        id:11,
        pro_name:'Tablet-3',
        pro_price:77,
        pro_image:'product-20.jpg',
        // pro_categori:'fruits',
        cat_id:14
    },
    {
        id:12,
        pro_name:'Tablet-4',
        pro_price:99,
        pro_image:'product-21.jpg',
        // pro_categori:'fruits',
        cat_id:14
        
    },
     // =============== samrt watch===============
     {
        id:13,
        pro_name:'samert Watch-1',
        pro_price:55,
        pro_image:'product-24.jpg',
        // pro_categori:'fruits',
        cat_id:15
    },

    {
        id:14,
        pro_name:'samert Watch-2',
        pro_price:66,
        pro_image:'product-25.jpg',
        // pro_categori:'fruits',
        cat_id:15
        
    },

    {
        id:15,
        pro_name:'samert Watch-3',
        pro_price:77,
        pro_image:'product-26.jpg',
        // pro_categori:'fruits',
        cat_id:15
    },
    {
        id:16,
        pro_name:'samert Watch-4',
        pro_price:99,
        pro_image:'product-27.jpg',
        // pro_categori:'fruits',
        cat_id:15
        
    }

]

// =============================================
// ========= Categorie Data ===========================
// =============================================

var my_categrie=[
    
  
    {
        cat_name:"Moble-Phone ",
        cat_img:"cat-1.jpg",
        id:12
    },

    {
        cat_name:"Laptop",
        cat_img:"cat-2.jpg",
        id:13
    },
    {
        cat_name:"Tablet",
        cat_img:"cat-3.jpg",
        id:14
    },
    {
        cat_name:"Samrt-Watch",
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
        // div_products_container.style.display='none'
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
        // ele_img.style.display='none'
        var ele_ul_pro=document.createElement('ul')
        // ele_ul_pro.style.display='none'
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
        ele_li_pro.innerHTML=`<i onclick='add_to_cart(${ele.id})' class="fa fa-shopping-cart"></i>`
        ele_a_pro_name.innerText=ele.pro_name
        ele_h_five_pro_price.innerText='$ '+ele.pro_price
        ele_img.setAttribute("src","imgs/product/"+ele.pro_image);
}

// ======================================================================================
// ================== show Data to user page  ===========================================
// ======================================================================================

function show_products_data(products_data){
    
            var div_products_container=document.getElementById('products_container')
            div_products_container.innerHTML=''

            var pro_data=fetch_data_from_storage(products_data)

            pro_data.forEach(elett=>{
                creat_product_elements(elett)
            })


}//end function
show_products_data('products')

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
    div_products_container.innerHTML=''

    var pro_data=fetch_data_from_storage('products')

    var filterd_data= pro_data.filter(elet=>elet.cat_id==categorie_id)

    filterd_data.forEach(elett=>{
        creat_product_elements(elett)
    })
  
}

// ======================================================================================
// ==============    Add to cart             ==================================
// ======================================================================================
users=[{
        user_name:'khalid',
        email:'example@gmail.com',
        user_id:70
}]

// document.cookie=`users=${JSON.stringify(users)}`

function add_to_cart(pr_id){

                    var qty=1;
                    var cart_data=[{
                        pro_id:pr_id,
                        quntity:qty
                    }]

                    var stored_cart_data=fetch_data_from_storage('carts')
                            
                    if(stored_cart_data===null){
                        
                        store_data_in_storage('carts',cart_data)
                    }else{
                        stored_cart_data.push(cart_data)
                        store_data_in_storage('carts',stored_cart_data)
                    }
       
                            
}
// add_to_cart()
// ======================================================================================
// ==============       get cookie                 ==================================
// ======================================================================================
function getCookie(name) {
    var nameEQ = name + "=";

    var ca = document.cookie.split(';');

    // console.log(ca);

    for(var i=0;i < ca.length;i++) {

        var c = ca[i];

        while (c.charAt(0)==' ') c = c.substring(1,c.length);

        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        
    }
    return null;
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