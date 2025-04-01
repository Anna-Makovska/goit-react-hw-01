import s from '../TransactionHistory/TransactionHistory.module.css'
const TransactionHistory = ({ items }) => 
{
    return (
      <table className={s.table}>
  <thead >
    <tr className={s.head}>
      <th className={s.headline}>Type</th>
      <th className={s.headline}>Amount</th>
      <th className={s.headline}>Currency</th>
    </tr>
            </thead>
            
            <tbody>
                {items.map(transaction => (
                     <tr key={transaction.id}>
      <td className={s.props}>{transaction.type}</td>
      <td className={s.props}>{transaction.amount}</td>
      <td className={s.props}>{transaction.currency}</td>
    </tr>
   
                ))}
   
  </tbody>
            </table>

    )
}
export default TransactionHistory;