const Total = ({ cart }) => {

// const [counts, setCounts] = useState([]);
// //.....
// const countTotalPrice = function(price){
//  let newCounts = counts
//         newCounts.push(price);
//         setCounts(newCounts );
//         console.log(counts);
//     };
    
return (
    <div className='cart-total'>
      <span className='cart-total-label'>
        Total:
      </span>
      <span className='cart-total-value'>
        ${cart.length ? cart.reduce((acc, item) => (
          acc + item.price * item.count
        ), 0).toFixed(2) : Number(0).toFixed(2)}
      </span>
    </div>
  )};

  export default Total;