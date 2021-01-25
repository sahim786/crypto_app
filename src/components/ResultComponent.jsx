import React from 'react'

class ResultComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.getThis.id,
            symbol: this.props.getThis.symbol,
            name: this.props.getThis.name,
            description: this.props.getThis.description['en'],
            links: { homepage: this.props.getThis.links.homepage },
            icon: { large: this.props.getThis.image['large'] },
            country_origin: this.props.getThis.country_origin,
            genesis_date: this.props.getThis.genesis_date,
            market_cap_rank: this.props.getThis.market_cap_rank,
            coingecko_rank: this.props.getThis.coingecko_rank,
            coingecko_score: this.props.getThis.coingecko_score,
            developer_score: this.props.getThis.developer_score,
            community_score: this.props.getThis.community_score,
            liquidity_score: this.props.getThis.liquidity_score,
            public_interest_score: this.props.getThis.public_interest_score
        }
    }
    render() {
        return (
            <>
                <div>
                    <h3 id="result"> <a href={this.state.links.homepage} target="_black" id="header_home"> {this.state.name} </a> - <span>{this.state.symbol}</span> </h3>
                    <div id="coin-details">
                        <div id="left">
                            <div>
                                <img src={this.state.icon.large} alt="Icon" />
                            </div>
                            <div>
                                <p>Country Of Origin - {this.state.country_origin} </p>
                                <p>Date Of Appearence - {this.state.genesis_date}</p>
                                <p>Market Cap Rank - {this.state.market_cap_rank} </p>
                                <p>Coin Gecko Rank - {this.state.coingecko_rank} </p>
                                <p>Score - {this.state.coingecko_score}</p>
                                <p>Developer Score - {this.state.developer_score} </p>
                                <p>Liquidity Score - {this.state.liquidity_score} </p>
                                <p>Public Interest - {this.state.public_interest_score} </p>
                            </div>
                        </div>
                        <div id="right" >
                               <div dangerouslySetInnerHTML ={{__html:this.props.getThis.description}}>
                               </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ResultComponent;