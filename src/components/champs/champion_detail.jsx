import React from 'react';
import ChampModal from './champion_modal';

class ChampDetail extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modal: false
    };

  }

  showModal(){
    this.setState({modal:true});
  }

  hideModal(){
    this.setState({modal:false});
  }

  render(){
    let title = this.props.title.charAt(0).toUpperCase() + this.props.title.slice(1);
    if(this.state.modal){
      return(
          <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">{this.props.name}</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span onClick={()=>this.hideModal()} aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${this.props.name}_0.jpg`} />
                  <div>
                    <a className="btn btn-primary" data-toggle="collapse" href="#lore" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Lore</a>
                    <a className="btn btn-primary" data-toggle="collapse" href="#stats" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Stats</a>
                    <a className="btn btn-primary" data-toggle="collapse" href="#spells" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Skills</a>
                  </div>
                    <div className="col">
                      <div className="collapse multi-collapse" id="lore">
                        <div className="card card-body">
                          {this.props.lore}
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="collapse multi-collapse" id="stats">
                        <div className="card card-body">
                          <div className="card" style={{width: "18rem"}}>
                              <div className="card-header">
                                Stats
                              </div>
                              <ul className="list-group list-group-flush">
                                <li className="list-group-item">Attack: {this.props.info.attack}</li>
                                <li className="list-group-item">Magic: {this.props.info.magic}</li>
                                <li className="list-group-item">Defense: {this.props.info.defense}</li>
                                <li className="list-group-item">Difficulty: {this.props.info.difficulty}</li>
                              </ul>
                              <div className="card-header">
                                Base Stats
                              </div>
                              <ul className="list-group list-group-flush">
                                <li className="list-group-item">Armor: {this.props.stats.armor}</li>
                                <li className="list-group-item">Attack Damage: {this.props.stats.attackdamage}</li>
                                <li className="list-group-item">Health: {this.props.stats.hp}</li>
                                <li className="list-group-item">Mana: {this.props.stats.mp}</li>
                                <li className="list-group-item">Move Speed: {this.props.stats.movespeed}</li>
                              </ul>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="collapse multi-collapse" id="spells">
                        <div className="card card-body">
                            <div className="card" style={{width: "18rem"}}>
                              <img className="card-img-top" src={`http://ddragon.leagueoflegends.com/cdn/8.3.1/img/passive/${this.props.passive.image.full}`} alt="Passive"/>
                              <div className="card-body">
                                <p className="card-title">{this.props.passive.name}</p>
                                <p className="card-text">{this.props.passive.description}</p>
                              </div>
                              <div className="card" style={{width: "18rem"}}>
                                <img className="card-img-top" src={`http://ddragon.leagueoflegends.com/cdn/8.3.1/img/spell/${this.props.spells["0"].image.full}`} alt="Skill 1"/>
                                <div className="card-body">
                                  <p className="card-title">{this.props.spells["0"].name}</p>
                                  <p className="card-text">{this.props.spells["0"].description}</p>
                                </div>
                              </div>
                              <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={`http://ddragon.leagueoflegends.com/cdn/8.3.1/img/spell/${this.props.spells["1"].image.full}`} alt="Skill 2"/>
                            <div className="card-body">
                              <p className="card-tile">{this.props.spells["1"].name}</p>
                              <p className="card-text">{this.props.spells["1"].description}</p>
                            </div>
                          </div>
                          <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={`http://ddragon.leagueoflegends.com/cdn/8.3.1/img/spell/${this.props.spells["2"].image.full}`} alt="Skill 3"/>
                            <div className="card-body">
                              <p className="card-title">{this.props.spells["2"].name}</p>
                              <p className="card-text">{this.props.spells["2"].description}</p>
                            </div>
                          </div>
                          <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={`http://ddragon.leagueoflegends.com/cdn/8.3.1/img/spell/${this.props.spells["3"].image.full}`} alt="Ultimate"/>
                            <div className="card-body">
                              <p className="card-title">{this.props.spells["3"].name}</p>
                              <p className="card-text">{this.props.spells["3"].description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }else{
    return(
        <div className="card item-details" style={{width: '16rem'}}>
          <img className="card-img-top" style={{padding: '50px'}} src={`http://ddragon.leagueoflegends.com/cdn/8.3.1/img/champion/${this.props.image.full}`} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">"{title}"</p>
            <p className="card-text">{this.props.blurb}</p>
            <button onClick={()=>this.showModal()} className="btn btn-primary">Details!</button>
          </div>
        </div>
      );
    }
  }
}

export default ChampDetail;
