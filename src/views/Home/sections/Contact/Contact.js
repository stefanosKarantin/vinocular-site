import React from 'react';
import styles from './Contact.css';
import MailForm from './MailForm';

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            form: true,
        }

        this.handleFormChange = this.handleFormChange.bind(this);
    }

    handleFormChange(){
        this.setState({ form: !this.state.form,});
    }
    render() {
        return (
            <div id="contact" className="contact">
                <h2>Contact us</h2>
                {this.state.form?<MailForm onSubmitForm={this.handleFormChange}/>:<h2>Thank you for your email!</h2>}
                <div className="info">
                    <ul>
                      <li>e-mail: info@vinocular.org</li>
                      <li>Telephone: 6948205612</li>
                      <li>Address: 2ος όροφος, Κεφαλληνίας 46, Αθήνα 112 51</li>
                    </ul>
                </div>
                <div>
                    <a href="https://acein.aueb.gr/" >
                        <div className="acein">
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default Contact;
