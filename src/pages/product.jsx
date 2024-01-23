
import React, { useEffect, useState } from 'react'; 
import axios from '../api/axios'; 
import { useProducts } from '../api/products'; 
import backgroundproduct from '../assets/Images/product.jpg'; 
import searchIcon from '../assets/Icons/search.png'; 
 
const categories = [ 
  { 
    value: "3", 
    label: "Children", 
  }, 
  { 
    value: "1", 
    label: "Women", 
  }, 
  { 
    value: "2", 
    label: "Men", 
  }, 
  { 
    value: "4", 
    label: "Pregnant Women", 
  }, 
]; 
 
const Product = () => { 
  
  const [selectedCategory, setSelectedCategory] = useState(""); 
  const [page, setPage] = useState(1); 
   
  const { data, loading } = useProducts({ 
    category: selectedCategory, 
    page: page,
  }); 
 
  const handleChange = (e) => { 
    if (e.target.value === selectedCategory) { 
      setSelectedCategory(""); 
    } else { 
      setSelectedCategory(e.target.value); 
    } 
  }; 

  const handleNext = () =>{
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };
 
  const sectionStyle = { 
    backgroundImage: 'url(${backgroundproduct})', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
  }; 
 
  return ( 
    <div> 
      <section 
      className="h-60 flex flex-col items-center justify-start mb-10 lg:flex-row lg:items-start lg:justify-start" 
      style={sectionStyle} 
    > 
      <div className="lg:px-40 mt-10"> 
        <p className="text-lg">Home/Shop</p> 
        <h2 className="text-2xl font-bold">Shop</h2> 
      </div> 
    </section> 
 
 
 
      <div className="container mx-auto px-10 mt-8 mb-10"> 
        <div className="flex flex-col items-center"> 
          <div className="mb-4"> 
            <h2 className="text-3xl font-bold">Search</h2> 
          </div> 
          <div className="mb-4 text-center"> 
            <p className="text-lg"> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. 
            </p> 
          </div> 
          <div className="flex items-center"> 
            <input 
              type="text" 
              placeholder="Search..." 
              className="border border-gray-300 px-4 py-2 rounded-l w-full" 
            /> 
            <div className="text-white px-4 py-2 rounded-r flex items-center"> 
              <img src={searchIcon} alt="Search Icon" className="h-6 w-6 mr-2" /> 
              <span className="hidden md:inline">Search</span> 
            </div> 
          </div> 
        </div> 
      </div> 
 
      <div className="container mx-auto px-10 mb-8"> 
        <div className="flex flex-col md:flex-row"> 
          <div className="w-full md:w-1/4 md:mr-8"> 
            <h1 className="font-bold mb-5">Categories</h1> 
            {categories.map((category) => ( 
              <div key={category.value}> 
                <label htmlFor={category.value}> 
                  <input 
                    type="checkbox" 
                    name={category.value} 
                    id={category.value} 
                    onChange={handleChange} 
                    value={category.value} 
                    checked={selectedCategory === category.value} 
                  /> 
                  <span> {category.label}</span> 
                </label> 
              </div> 
            ))} 
          </div> 
          <div> 
            <div className='flex gap-4 py-4'> 
              <button onClick={handlePrev}>Prev</button>
              
                
               
              <span className='bg-blue-400 p-1 text-sm rounded-full h-8 w-8 text-white flex items-center justify-center'>{page}</span> 
              <button onClick={handleNext}> 
                Next 
              </button> 
            </div> 
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4"> 
              {loading ? "Ruko zara. Sabar karo ..." : null} 
              {data?.data.map((product) => ( 
                <div key={product.id} className="flex flex-col"> 
                  <img src={product.image} alt="" className="h-40" /> 
                  <div className="mt-2"> 
                    <p>{product.name}</p> 
                    <span>{product.price}</span> 
                  </div>

Roshan Shrestha, [1/23/2024 8:14 AM]
</div> 
              ))} 
          </div> 
          </div> 
        </div> 
      </div> 
 
      <section> 
        <footer className="bg-gray-900 text-white p-8"> 
          <div className="container mx-auto"> 
            <div className="flex flex-col md:flex-row items-center justify-between"> 
              <div className="mb-4 md:mb-0"> 
                <h3 className="text-2xl font-bold">Miralou</h3> 
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
              </div> 
              <div className="flex flex-wrap"> 
                <div className="mr-4 mb-2"> 
                  <a href="#" className="text-sm hover:text-gray-500">Home</a> 
                </div> 
                <div className="mr-4 mb-2"> 
                  <a href="#" className="text-sm hover:text-gray-500">About Us</a> 
                </div> 
                <div className="mr-4 mb-2"> 
                  <a href="#" className="text-sm hover:text-gray-500">Services</a> 
                </div> 
                <div className="mr-4 mb-2"> 
                  <a href="#" className="text-sm hover:text-gray-500">Contact</a> 
                </div> 
              </div> 
            </div> 
          </div> 
        </footer> 
      </section> 
    </div> 
  ); 
}; 
 
export default Product;