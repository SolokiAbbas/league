import React from 'react';

class ChampDetail extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modal: false
    };
  }

  render(){
    let title = this.props.title.charAt(0).toUpperCase() + this.props.title.slice(1);
    let loading = this.props.name.replace(/\s/g, '');
    loading = loading.replace(/\'/g, '');
    loading = loading.replace(/\./g, '');
    if(loading === 'Wukong'){
      loading = "MonkeyKing";
    }
    if(loading === "LeBlanc" || loading === "ChoGath" || loading === "KhaZix" || loading === "VelKoz"){
      loading = loading.toLowerCase();
      loading = loading.charAt(0).toUpperCase() + loading.slice(1);
    }

    return(
       <div>
              <div className="modal fade" id={`champmodal${this.props.name}`} tabIndex="-1" role="dialog" aria-labelledby="champmodal" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h3 className="modal-title" id="exampleModalLabel">{this.props.name}</h3>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                          <img className="loading-image" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${loading}_0.jpg`} />
                            <div id={`accordion${this.props.name}`}>
                              <div className="card">
                                <div className="card-header" id="headingOne">
                                  <h5 className="mb-0">
                                    <button className="btn btn-link" style={{width: "47rem"}} data-toggle="collapse" data-target={`#collapseOne${this.props.name}`} aria-expanded="true" aria-controls="collapseOne">
                                      Lore
                                    </button>
                                  </h5>
                                </div>

                                <div id={`collapseOne${this.props.name}`} className="collapse show" aria-labelledby="headingOne" data-parent={`#accordion${this.props.name}`}>
                                  <div className="card-body">
                                    {this.props.lore}
                                  </div>
                                </div>
                              </div>
                              <div className="card">
                                <div className="card-header" id="headingTwo">
                                  <h5 className="mb-0">
                                    <button className="btn btn-link collapsed" style={{width: "47rem"}} data-toggle="collapse" data-target={`#collapseTwo${this.props.name}`} aria-expanded="false" aria-controls="collapseTwo">
                                      Stats
                                    </button>
                                  </h5>
                                </div>
                                <div id={`collapseTwo${this.props.name}`} className="collapse" aria-labelledby="headingTwo" data-parent={`#accordion${this.props.name}`}>
                                  <div className="card-body">
                                    <div className="card-header">
                                      <h5>
                                      Stats
                                      </h5>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                      <li className="list-group-item">Attack: {this.props.info.attack}</li>
                                      <li className="list-group-item">Magic: {this.props.info.magic}</li>
                                      <li className="list-group-item">Defense: {this.props.info.defense}</li>
                                      <li className="list-group-item">Difficulty: {this.props.info.difficulty}</li>
                                    </ul>
                                    <div className="card-header">
                                      <h5>
                                        Base Stats:
                                      </h5>
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
                              <div className="card">
                                <div className="card-header" id="headingThree">
                                  <h5 className="mb-0">
                                    <button className="btn btn-link collapsed" style={{width: "47rem"}} data-toggle="collapse" data-target={`#collapseThree${this.props.name}`} aria-expanded="false" aria-controls="collapseThree">
                                      Skills
                                    </button>
                                  </h5>
                                </div>
                                <div id={`collapseThree${this.props.name}`} className="collapse" aria-labelledby="headingThree" data-parent={`#accordion${this.props.name}`}>
                                  <div className="card-body card-skills">
                                    <div className="card card-body" style={{width: "45rem"}}>
                                      <div className="row">
                                        <div className="card" style={{width: "16rem"}}>
                                          <img className="card-img-top abilities" src={`http://ddragon.leagueoflegends.com/cdn/8.3.1/img/passive/${this.props.passive.image.full}`} alt="Passive"/>
                                          <div className="card-body">
                                            <h5 className="card-title">Passive: {this.props.passive.name}</h5>
                                            <p className="card-text">{this.props.passive.description}</p>
                                          </div>
                                        </div>
                                          <div className="card" style={{width: "14rem"}}>
                                            <img className="card-img-top abilities" src={`http://ddragon.leagueoflegends.com/cdn/8.3.1/img/spell/${this.props.spells["0"].image.full}`} alt="Skill 1"/>
                                            <div className="card-body">
                                              <h5 className="card-title">{this.props.spells["0"].name}</h5>
                                              <p className="card-text">{this.props.spells["0"].description}</p>
                                            </div>
                                          </div>
                                          <div className="card" style={{width: "14rem"}}>
                                        <img className="card-img-top abilities" src={`http://ddragon.leagueoflegends.com/cdn/8.3.1/img/spell/${this.props.spells["1"].image.full}`} alt="Skill 2"/>
                                        <div className="card-body">
                                          <h5 className="card-tile">{this.props.spells["1"].name}</h5>
                                          <p className="card-text">{this.props.spells["1"].description}</p>
                                        </div>
                                      </div>
                                      <div className="card" style={{width: "14rem"}}>
                                        <img className="card-img-top abilities" src={`http://ddragon.leagueoflegends.com/cdn/8.3.1/img/spell/${this.props.spells["2"].image.full}`} alt="Skill 3"/>
                                        <div className="card-body">
                                          <h5 className="card-title">{this.props.spells["2"].name}</h5>
                                          <p className="card-text">{this.props.spells["2"].description}</p>
                                        </div>
                                      </div>
                                      <div className="card" style={{width: "14rem"}}>
                                        <img className="card-img-top abilities" src={`http://ddragon.leagueoflegends.com/cdn/8.3.1/img/spell/${this.props.spells["3"].image.full}`} alt="Ultimate"/>
                                        <div className="card-body">
                                          <h5 className="card-title">Ultimate: {this.props.spells["3"].name}</h5>
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
                  </div>
              </div>
            </div>
        <div className="card item-details" style={{width: '16rem'}}>
          <img className="card-img-top" style={{padding: '50px'}} src={`http://ddragon.leagueoflegends.com/cdn/8.3.1/img/champion/${this.props.image.full}`} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">"{title}"</p>
            <p className="card-text">{this.props.blurb}</p>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#champmodal${this.props.name}`}>Details</button>
          </div>
        </div>
      </div>
      );
    }
}

export default ChampDetail;
