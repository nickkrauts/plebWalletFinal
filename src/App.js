import React from "react";
import "./App.css";

function App() {
 return (
   <div className="App">
     <header>
       <h1>pleb wallet</h1>
     </header>
     {/* <Buttons /> */}
     <div className="row">
       <div className="balance-card">
         <h2>Balance</h2>
         {/* <p>{balance} sats</p> */}
       </div>
       <div className="balance-card">
         <h2>Price</h2>
         {/* <p>${price}</p> */}
       </div>
     </div>
     <div className="row">
       <div className="row-item">
         {/* <Transactions transactions={transactions} /> */}
       </div>
       <div className="row-item">{/* <Chart chartData={chartData} /> */}</div>
     </div>
     <footer>
       <p>Made by plebs, for plebs.</p>
     </footer>
   </div>
 );
}

export default App;