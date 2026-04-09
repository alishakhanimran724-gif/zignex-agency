import { useState } from 'react';
import './ContactSection.css';

const INITIAL = { name: '', email: '', subject: '', phone: '', message: '' };

export default function ContactSection() {
  const [form,     setForm]     = useState(INITIAL);
  const [errors,   setErrors]   = useState({});
  const [sending,  setSending]  = useState(false);
  const [success,  setSuccess]  = useState(false);
  const [charCount,setCharCount]= useState(0);

  const update = (field) => (e) => {
    setForm(f => ({ ...f, [field]: e.target.value }));
    if (field === 'message') setCharCount(e.target.value.length);
    if (errors[field]) setErrors(er => ({ ...er, [field]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim())                        errs.name    = 'Name required';
    if (!form.email.trim() || !form.email.includes('@')) errs.email = 'Valid email required';
    if (!form.message.trim())                     errs.message = 'Message required';
    return errs;
  };

  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setSending(true);
    await new Promise(r => setTimeout(r, 1800)); // Simulate API call
    setSending(false);
    setSuccess(true);
    setForm(INITIAL);
    setCharCount(0);
  };

  return (
    <section id="contact">
      <div className="contact-card">
        {/* Left info panel */}
        <div className="ct-left rv">
          <div className="ct-tag">
            <span className="ct-tag-star">✦</span> GET IN TOUCH
          </div>
          <h2 className="ct-heading">
            Success is a team effort{' '}
            <span>let's achieve it together</span>
          </h2>
          <div className="ct-info">
            <a href="mailto:hello@zignexdesign.com" className="ct-email">
              hello@zignexdesign.com
            </a>
            <a href="https://wa.me/923409236718" className="ct-phone">
              +92 340 923 6718
            </a>
          </div>
        </div>

        {/* Right form panel */}
        <div className="ct-right rv">
          {success ? (
            <div className="ct-success">
              <h4>Message Sent! 🎉</h4>
              <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <div id="CF">
              <div className="ct-form-row">
                <div className="ct-fg">
                  <label>Name<span className="req">*</span></label>
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    value={form.name}
                    onChange={update('name')}
                    autoComplete="name"
                  />
                  {errors.name && <div className="ferr">{errors.name}</div>}
                </div>
                <div className="ct-fg">
                  <label>Email Address<span className="req">*</span></label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    value={form.email}
                    onChange={update('email')}
                    autoComplete="email"
                  />
                  {errors.email && <div className="ferr">{errors.email}</div>}
                </div>
              </div>

              <div className="ct-form-row">
                <div className="ct-fg">
                  <label>Subject</label>
                  <input
                    type="text"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={update('subject')}
                  />
                </div>
                <div className="ct-fg">
                  <label>Contact Number<span className="req">*</span></label>
                  <input
                    type="tel"
                    placeholder="Contact Number"
                    value={form.phone}
                    onChange={update('phone')}
                  />
                </div>
              </div>

              <div className="ct-fg ct-fg-full">
                <label>
                  Message
                  <span className="char-count" style={{ color: charCount > 550 ? '#ef4444' : '' }}>
                    {' '}({charCount}/600)
                  </span>
                </label>
                <textarea
                  placeholder="Message"
                  maxLength={600}
                  value={form.message}
                  onChange={update('message')}
                />
                {errors.message && <div className="ferr">{errors.message}</div>}
              </div>

              <button
                className="ct-submit"
                onClick={handleSubmit}
                disabled={sending}
              >
                {sending ? 'Sending...' : 'SEND MESSAGE'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
