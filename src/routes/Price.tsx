import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinToday } from "../api";

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

interface IPriceProps{
    coinId : string;
}

function Price(){
    const coinId = useOutletContext<IPriceProps>();
    const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId.coinId],
        () => fetchCoinToday(coinId.coinId!),
        {
            //refetchInterval: 10000,
        });
    return <h1>price</h1>
}

export default Price;