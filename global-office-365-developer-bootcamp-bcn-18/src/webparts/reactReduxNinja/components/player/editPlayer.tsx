import * as React from 'react';
import IPlayer from '../../model/IPlayer';


export interface IEditPlayerProps {
  loadIdPlayer:(id:string)=>Promise<IPlayer>,
  editPlayer:(player:IPlayer)=>Promise<boolean>,
  player:IPlayer,
  match?: any;
}

export interface IEditPlayerState{
    name:string;
    club:string;
    country:string;
    image:string;
    id:string
}

export class EditPlayer extends React.Component<IEditPlayerProps, any> {    
    constructor(props:IEditPlayerProps) {
        super(props);
        this.onClick.bind(this);
        this.onChangeClub.bind(this);
        this.onChangeCountry.bind(this);
        this.onChangeImage.bind(this);
        this.onChangeName.bind(this);
        this.state={
            name:'',
            club:'',
            country:'',
            image:'',
            id:''
        };
    }
    public componentWillMount(){
      
      this.props.loadIdPlayer(this.props.match.params['id']);
    }

  public componentWillReceiveProps(nextProps:IEditPlayerProps, olldProps:any){
this.setState({
            name:nextProps.player.fullName,
            club:nextProps.player.club,
            country:'',
            image:nextProps.player.image,
            id:this.props.match.params['id']
});
  }

    public onClick(){
        this.props.editPlayer({
            id:this.state.id,
            club:this.state.club,
            fullName:this.state.name,
            image:this.state.image,
            country:{                
                name:this.state.name,
                continent:{                
                name:''
                }
            }
        });
    }


public onChangeName(value:any){
this.setState({name:value.target.value});
}
public onChangeClub(value:any){
    this.setState({club:value.target.value});
    }
    public onChangeCountry(value:any){
        this.setState({country:value.target.value});
        }
        public onChangeImage(value:any){
            this.setState({image:value.target.value});
            }
            
    public render() {    
        
        const handleOnClickName:any = (event: React.MouseEvent<HTMLElement>) => {
      
            this.onChangeName(event);
          
          }

          const handleOnClickClub:any=       (event: React.MouseEvent<HTMLElement>) => {
      
            this.onChangeClub(event);
          
          }

          const handleOnClickCountry:any=       (event: React.MouseEvent<HTMLElement>) => {
      
            this.onChangeCountry(event);
          
          }

          const handleOnClickImage:any=       (event: React.MouseEvent<HTMLElement>) => {
      
            this.onChangeImage(event);
          
          }


          const handleOnClick:any=(evente:any)=>{
              this.onClick();
          }
return (
<div className="container">
	<div className="row">
      <div className="col-md-6 col-md-offset-3">
        <div className="well well-sm">
          <fieldset>
            <legend className="text-center">Edicion</legend>
    
            <div className="form-group">
              <label className="col-md-3 control-label" htmlFor="name">Name</label>
              <div className="col-md-9">
                <input id="name" name="name" type="text" value={this.state.name} placeholder="Your name" onChange={handleOnClickName} className="form-control"/>
              </div>
            </div>
    

            <div className="form-group">
              <label className="col-md-3 control-label" htmlFor="Club">Club</label>
              <div className="col-md-9">
                <input id="club" name="club" type="text" value={this.state.club} placeholder="Club"  onChange={handleOnClickClub} className="form-control"/>
              </div>
            </div>
    
            <div className="form-group">
              <label className="col-md-3 control-label" htmlFor="message">Country</label>
              <div className="col-md-9">
              <input id="country" name="country" type="text" placeholder="Contry" onChange={handleOnClickCountry} className="form-control"/>
                       </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label" htmlFor="message">Image</label>
              <div className="col-md-9">
              <input id="image" name="image" type="text" value={this.state.image} placeholder="Image" onChange={handleOnClickImage} className="form-control"/>
                       </div>
            </div>

            <div className="form-group">
              <div className="col-md-12 text-right">
                <button type="submit" className="btn btn-primary btn-lg" onClick={handleOnClick} >Editar</button>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
	</div>
</div>
);

    }
}