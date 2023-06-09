import './App.css';
import MainNav from './component/MainNav';
import AddName from './component/AddName';
import { Route, Routes } from 'react-router-dom';
import AddToCart from './component/AddToCart';
import axios from 'axios';
// import NameAdded from './component/addName/NameAdded';
// import NameList from './component/addName/NameList';

function App() {

  // const axios = require('axios');

  axios.get('http://localhost:2000/productList')
    .then((response) => {
      // console.log(response.data);
      const productList = response.data
      console.log(productList);
    })
    .catch((err) => {
      console.log(err.data)
    })

  // axios.post('http://localhost:2000/productList', {
  //   name: "sepeda",
  //   price: 7000000,
  //   src: "https://cf.shopee.co.id/file/95b9f8c008674067f25d0b71fd7356ed",
  //   qty: 1,
  //   stock: 10,
  //   id: 6
  // })
  // .then((response) => {
  //   console.log(response.data);
  // })
  // .catch((err) => {
  //   console.log(err.data);
  // })


  // const namesURL = "http://localhost:1000/nameList";

  // axios.post(namesURL, {
  //   id: 5,
  //   name: "anya"
  // })
  //   .then((response) => {
  //     console.log(response.data)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })

  return (
    <div className="container">
      <MainNav />
      <Routes>
        <Route exact path='/*' element={<AddName />} />
        <Route exact path='/addToCart/*' element={<AddToCart />} />
      </Routes>
      {/* <Routes>
        <Route exact path="/" element={<NameList />} />
        <Route path="/nameAdded" element={<NameAdded />} />
      </Routes> */}
      {/* <AddName /> */}
    </div>
  );
}

export default App;
