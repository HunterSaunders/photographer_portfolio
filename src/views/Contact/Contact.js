import './Contact.scss';

const Contact = () => {
    return (
        <div className = 'contact-page-wrapper'>
            <div className = 'contact-page-container'>

                <div className = 'contact-page-form-container'>
                    <h1 className = 'contact-page-form-title'>SEND A MESSAGE</h1>

                    <form className = 'contact-page-form'>
                        <label className = 'contact-form-label'>Name</label>
                        <input type = 'text' name = 'name' maxlength = '20'  className = 'contact-form-input'/>

                        <label className = 'contact-form-label'>Email</label>
                        <input type = 'text' name = 'email' className = 'contact-form-input'/>

                        <label className = 'contact-form-label'>Subject</label>
                        <input type = 'text' name = 'subject' className = 'contact-form-input'/>

                        <label className = 'contact-form-label'>Message</label>
                        <textarea type = 'text' name = 'message' className = 'contact-form-input'/>
                        

                        <input type = 'submit' value = 'Send Message' className = 'contact-form-btn'/>
                    </form>

                </div>

                <div className = 'contact-page-basic-info'>
                    <div className = 'contact-section'>
                        <h2 className = 'contact-section-title'>Hours</h2>
                        <div className = 'contact-section-line' />
                        <h3 className = 'contact-section-info'>Monday - Friday</h3>
                        <h3 className = 'contact-section-info'>8AM - 4PM</h3>
                    </div>

                    <div className = 'contact-section'>
                        <h2 className = 'contact-section-title'>Contacts</h2>
                        <div className = 'contact-section-line' />
                        <h3 className = 'contact-section-info'>Call: (123) 456 7890</h3>
                        <h3 className = 'contact-section-info'>Email: services@alanaricci.com</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact
