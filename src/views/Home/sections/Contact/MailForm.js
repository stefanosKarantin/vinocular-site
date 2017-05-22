import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  label: {
      color: "#0C2C74",
      float: "left",
  },
  underStyle: {
      borderColor: "#0C2C74",
  },
  button: {
      backgroundColor:"#0C2C74",
      color: "#DAE5FF",
  },
  float: {
      textAlign: "left",
  }
};

class MailForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            subject: '',
            mail: '',
            text:'',
        }
        this.handleMailChange = this.handleMailChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubjChange = this.handleSubjChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event){
        this.setState({name: event.target.value})
    }

    handleMailChange(event){
        this.setState({mail: event.target.value})
    }

    handleSubjChange(event){
        this.setState({subject: event.target.value})
    }

    handleTextChange(event){
        this.setState({text: event.target.value})
    }

    handleSubmit(){
        console.log('yo');
        this.props.onSubmitForm();
    }

    render(){
        return(
            <div className="mailForm">
                <TextField
                    value ={this.state.name}
                    floatingLabelText="Your Name"
                    floatingLabelStyle={style.label}
                    underlineFocusStyle={style.underStyle}
                    onChange={this.handleNameChange}
                    />
                <br />
                <TextField
                    value={this.state.subject}
                    floatingLabelText="Your Subject"
                    floatingLabelStyle={style.label}
                    underlineFocusStyle={style.underStyle}
                    onChange={this.handleSubjChange}
                    />
                <br />
                <TextField
                    value={this.state.mail}
                    floatingLabelText="Your e-mail"
                    floatingLabelStyle={style.label}
                    underlineFocusStyle={style.underStyle}
                    onChange={this.handleMailChange}
                    />
                <br />
                <TextField
                    value={this.state.text}
                    floatingLabelText="Your text"
                    floatingLabelStyle={style.label}
                    underlineFocusStyle={style.underStyle}
                    onChange={this.handleTextChange}
                    style={style.float}
                    multiLine={true}
                    rows={7}
                    />
                <br />
                <a  href={"mailto:info@vinocular.org?subject="+this.state.subject+"&body="+this.state.text}>
                    <RaisedButton
                        label="Submit"
                        className="submit"
                        backgroundColor="#0D41BA"
                        labelColor="#DAE5FF"
                        onClick={this.handleSubmit}/>

                </a>
            </div>
        )
    }
}

export default MailForm;
