// components/CryptoTable.tsx
interface CoinData {
  id: string;
  market_cap_rank: number;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
}

interface CryptoTableProps {
  data: CoinData[];
}

const CryptoTable: React.FC<CryptoTableProps> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Coin</th>
          <th>Price</th>
          <th>24h Change</th>
          <th>Market Cap</th>
        </tr>
      </thead>
      <tbody>
        {data.map((coin) => (
          <tr key={coin.id}>
            <td>{coin.market_cap_rank}</td>
            <td>
              <img src={coin.image} alt={coin.name} width="20" height="20" /> {coin.name}
            </td>
            <td>${coin.current_price.toLocaleString()}</td>
            <td style={{ color: coin.price_change_percentage_24h < 0 ? 'red' : 'green' }}>
              {coin.price_change_percentage_24h.toFixed(2)}%
            </td>
            <td>${coin.market_cap.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CryptoTable;
