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
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">{this.props.name}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span onClick={()=>this.hideModal()} aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">

                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
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
