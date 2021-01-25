import '../css/App.css'
import React, { useState } from 'react'
import axios from 'axios'
import ResultComponent from './ResultComponent'

const SearchBox = () => {

    const [load, setLoad] = useState(false)
    const [coinSearch, setCoinSearch] = useState("");
    const [dataArr, setDataArr] = useState({
        id: '',
        symbol: '',
        name: '',
        description: '',
        links: { homepage: '' },
        image: { large: '' },
        country_origin: '',
        genesis_date: '',
        market_cap_rank: 0,
        coingecko_rank: 0,
        coingecko_score: 0,
        developer_score: 0,
        community_score: 0,
        liquidity_score: 0,
        public_interest_score: 0
    });
    const clickHandler = async () => {
        setLoad(false);
        const data = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinSearch.toLowerCase().toString()}`)
            .then(res => {
                setDataArr({
                    id: res.data.id,
                    symbol: res.data.symbol,
                    name: res.data.name,
                    description: res.data.description['en'],
                    links: { homepage: res.data.links.homepage[0] },
                    image: { large: res.data.image['large'] },
                    country_origin: res.data.country_origin,
                    genesis_date: res.data.genesis_date,
                    market_cap_rank: res.data.market_cap_rank,
                    coingecko_rank: res.data.coingecko_rank,
                    coingecko_score: res.data.coingecko_score,
                    developer_score: res.data.developer_score,
                    community_score: res.data.community_score,
                    liquidity_score: res.data.liquidity_score,
                    public_interest_score: res.data.public_interest_score
                });
                setLoad(true)
            })
            console.log(data)
        }

    return (
            <>
                <h1 style={{ fontSize: 50 }}>Crypto Wiki</h1>
                <input type="text" placeholder="Enter the Crypto Currency Name" value={coinSearch} onChange={(e) => setCoinSearch( e.target.value )} />
                <button onClick={clickHandler}>Get Info About Coin</button>
                {
                    load ? <ResultComponent getThis={dataArr} /> : null
                }
            </>
        )
    }

    export default SearchBox;