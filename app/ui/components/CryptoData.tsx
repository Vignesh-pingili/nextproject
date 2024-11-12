import BarCharts from './BarCharts';
import CustomizedTables from './CryptoTable2';
import WebsiteContent from './WebsiteContent';

interface CoinData {
  id: string;
  market_cap_rank: number;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
}

async function getCryptoData(): Promise<CoinData[]> {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false',
    { next: { revalidate: 60 } } 
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function CryptoPage() {
  const data = await getCryptoData();

  return (
    <div>
        <div style={{margin:"12px,0px",padding:"4px 20px",color:"#606060",boxShadow:"4px 4px 8px 0 rgba(0,0,0,0.2)"}}>
            <marquee> The global crypto market cap is <span style={{color:"orange"}}>$2.9T</span>, a <span style={{color:"#52ca84"}}>4.47%</span> increase over the last day.
                        The total crypto market volume over the last 24 hours is <span style={{color:"orange"}}>$261.08B</span> , which makes a <span style={{color:"#52ca84"}}>37.09%</span> increase.</marquee>
        </div>
        <div>
          <WebsiteContent></WebsiteContent>
        </div>
        {data && <div>
           <BarCharts data={data}/>
        <div>
          <CustomizedTables data={data}/>
        </div>
          </div>}
       
    </div>
  );
}
