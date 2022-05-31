import { useQuery } from "react-query";
import { useOutletContext, useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ReactApexChart from "react-apexcharts";

interface IHistorical {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}
interface IChartProps {
    coinId: string;
}

function Chart() {
    const coinId = useOutletContext<IChartProps>();
    const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId.coinId],
        () => fetchCoinHistory(coinId.coinId!)/* ,
        {
            refetchInterval: 10000,
        } */);
    return <div>{isLoading ? "Loding Chart" : <ReactApexChart
        type="candlestick"
        series={[
            {
                 data: data?.map((price) => [
                    new Date(price.time_open), // 날짜
                    price.open.toFixed(3), // 시작가
                    price.high.toFixed(3), // 최고가
                    price.low.toFixed(3), // 최저가
                    price.close.toFixed(3) // 종가
                ]) as any,
               
            },
        ]}
        options={{
            theme: {
              mode: "dark",
            },
            chart: {
              type: "candlestick",
              height: 350,
              width: 500,
              toolbar: {
                show:false,
              },
              background: "transparent",
            },
            stroke: {
              curve: "smooth",
              width: 2,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              type: "datetime",
              categories: data?.map((price) => price.time_close),
              labels: {
                style: {
                  colors: '#7f8fa6'
                }
              }
            },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: '#3C90EB',
                  downward: '#DF7D46'
                }
              }
            }
          }}
    />}</div>
}

export default Chart;