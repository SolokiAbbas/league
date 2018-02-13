import React from 'react';
import ChampModal from './champion_modal';

class ChampDetail extends React.Component{
  constructor(props){
    super(props);
    this.modal = false;
  }

  showModal(){
    this.modal = true;
  }

  hideModal(){
    this.modal = false;
  }

  render(){
    let title = this.props.title.charAt(0).toUpperCase() + this.props.title.slice(1);
    if(this.modal){
      return(
          <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                    <div class="col">
                      <div class="collapse multi-collapse" id="lore">
                        <div class="card card-body">
                          {this.props.lore}
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="collapse multi-collapse" id="stats">
                        <div class="card card-body">
                          <div class="card" style="width: 18rem;">
                              <div class="card-header">
                                Stats
                              </div>
                              <ul class="list-group list-group-flush">
                                <li class="list-group-item">Attack: {this.props.info.attack}</li>
                                <li class="list-group-item">Magic: {this.props.info.magic}</li>
                                <li class="list-group-item">Defense: {this.props.info.defense}</li>
                                <li class="list-group-item">Difficulty: {this.props.info.difficulty}</li>
                              </ul>
                              <div class="card-header">
                                Base Stats
                              </div>
                              <ul class="list-group list-group-flush">
                                <li class="list-group-item">Armor: {this.props.stats.armor}</li>
                                <li class="list-group-item">Attack Damage: {this.props.stats.attackdamage}</li>
                                <li class="list-group-item">Health: {this.props.stats.hp}</li>
                                <li class="list-group-item">Mana: {this.props.stats.mp}</li>
                                <li class="list-group-item">Move Speed: {this.props.stats.movespeed}</li>
                              </ul>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="collapse multi-collapse" id="spells">
                        <div class="card card-body">

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
