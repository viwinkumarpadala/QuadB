import React from 'react'
import { useState,useEffect } from 'react'
import Axios from 'axios'
import './Home.css'
import Loader from '../components/Loader'

const Home = () => {
    const [selecteditem, setSelecteditem] = useState({base_unit: "btc",quote_unit: "inr"})
    const [items,setItems]=useState([]);
    const [load,setLoad]=useState(true);

    

    const getallitems= async ()=>{
        setLoad(true)
        const result= await Axios.post('http://localhost:5000/getitems', selecteditem);
        console.log(result);
        setItems(result)
        setLoad(false) 
    }

    useEffect(()=>{
        getallitems()
    },[selecteditem])



    const handleSelectItem1 = (event) => {
        setSelecteditem((prevState) => {
            return {...prevState, quote_unit:event.target.value}
        });
    }

    const handleSelectItem2 = (event) => {
        setSelecteditem((prevState) => {
            return { ...prevState, base_unit: event.target.value }
        });
    } 

 


  return (
    <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between" style={{ "padding-right": "2%" }}>
              <a className="navbar-brand" href="#" style={{ fontSize: "2.5rem", "color": "cyan", "padding-left": "1%", "fontFamily":"Audiowide"}}>   HODLINFO</a>

              <div className="collapse navbar-collapse" style={{"alignContent":"center","alignItems":"center"}} id="navbarNavDropdown">

                  <form className="d-flex form-inline my-2 my-lg-0 nav-item dropdown">
                      <select className="form-select" aria-label="Default select example" value={selecteditem.quote_unit} onChange={handleSelectItem1}>
                          <option value="inr" selected><b>INR</b></option>
                      </select>
                  </form>
                  <form className="d-flex form-inline my-2 my-lg-0 nav-item dropdown" style={{"padding":"1%"}}>
                      <select className="form-select" aria-label="Default select example" value={selecteditem.base_unit} onChange={handleSelectItem2}>
                          <option value="btc" selected><b>BTC</b></option>
                          <option value="eth" selected><b>ETH</b></option>
                          <option value="usdt" selected><b>USDT</b></option>
                          <option value="xrp" selected><b>XRP</b></option>
                          <option value="trx" selected><b>TRX</b></option>
                          <option value="dash" selected><b>DASH</b></option>
                          <option value="zec" selected><b>ZEC</b></option>
                          <option value="xem" selected><b>XEM</b></option>
                          <option value="iost" selected><b>IOST</b></option>
                          <option value="win" selected><b>WIN</b></option>
                          <option value="btt" selected><b>BTT</b></option>
                          <option value="wrx" selected><b>WRX</b></option>

                      </select>
                  </form>
              </div>
              <a href='https://wazirx.com/' target='_blank'><button className="btn btn-outline-primary my-2 my-sm-0"  style={{ "color": "cyan", "fontSize": "1.5rem" }}><b>Buy BTC</b></button></a>
              
          </nav>

          <h1 style={{"color":"cyan", "padding":"1%"}}>Results:</h1>
              <div className="alcenter2 table-wrapper">
                  <table border="2px black" className="table-sd table-hover fl-table" style={{ width: "100%" }}>
                      <tr className="tr-sd">
                          <th className="th-sd">
                              <b className="b-sd" style={{ "font-size": "1.75rem" }}>#</b>
                          </th>
                          <th className="th-sd">
                              <b className="b-sd" style={{ "font-size": "1.75rem" }}>name</b>
                          </th>
                          <th className="th-sd">
                              <b className="b-sd" style={{ "font-size": "1.75rem" }}>Last</b>
                          </th>
                          <th className="th-sd">
                              <b className="b-sd" style={{ "font-size": "1.75rem" }}>Buy</b>
                          </th>
                          <th className="th-sd">
                              <b className="b-sd" style={{ "font-size": "1.75rem" }}>Sell</b>
                          </th>
                          <th className="th-sd">
                              <b className="b-sd" style={{ "font-size": "1.75rem" }}>volume</b>
                          </th>
                          <th className="th-sd">
                              <b className="b-sd" style={{ "font-size": "1.75rem" }}>base_unit</b>
                          </th>
                      </tr>

                      {
                        load ? <></> : 
                        <>
                              {items.length !== 0 &&
                                  items.map((item, indx) => {
                                      return (
                                          <tr className="tr-sd">
                                              <th className="th-sd" style={{ "font-size": "1.5rem" }}>{indx + 1}</th>
                                              {/* {count=count+1} */}
                                              <th className="th-sd" style={{ "font-size": "1.5rem" }}>{item.name}</th>

                                              <th className="th-sd" style={{ "font-size": "1.5rem" }}>₹{item.last}</th>

                                              <th className="th-sd" style={{ "font-size": "1.5rem" }}>₹{item.buy}</th>

                                              <th className="th-sd" style={{ "font-size": "1.5rem" }}>₹{item.sell}</th>

                                              <th className="th-sd" style={{ "font-size": "1.5rem" }}>{item.volume}</th>

                                              <th className="th-sd" style={{ "font-size": "1.5rem" }}>{item.base_unit}</th>
                                          </tr>
                                      );
                                  })}
                        </>
                      }
                  </table>
                  
              </div>
          {
              load ? <Loader /> : <></>
          }


          
    </>
  )
}

export default Home
