import './quotepage.css';
import data from './data.js';


const QuotePage = () => {
    console.log(data);
    return(
        <div className='quotepage'>
            {
                data.map((item) => {
                    return(
                    <div className='card' key={item.author}>
                        <p>{item.quote}</p>
                        <span>{item.author}</span>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default QuotePage;