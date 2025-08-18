import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "1-800-916-2459",
      subtitle: "24/7 Emergency Line"
    },
    {
      icon: Mail,
      title: "Email",
      details: "sales@panvatech.com",
      subtitle: "Quick Response"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "14269 Danielson St, Suite 400, Poway, CA 92064",
      subtitle: "Downtown Legal District"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri: 8AM-6PM",
      subtitle: "Emergency consultations available"
    }
  ];

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    matterType: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let valid = true;
    const newErrors: typeof errors = { firstName: "", lastName: "", email: "", message: "" };
    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required.";
      valid = false;
    }
    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
      valid = false;
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
      valid = false;
    }
    if (!form.message.trim()) {
      newErrors.message = "Please tell us about your situation.";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (validate()) {
      // Submit logic here (e.g., API call)
      // Reset form or show success message
      // setForm({ firstName: "", lastName: "", email: "", phone: "", matterType: "", message: "" });
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 bg-secondary"
      aria-labelledby="contact-heading"
    >
      <div className="container px-4">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
          <h2 
            id="contact-heading"
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Get Your Free Consultation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your legal needs? Contact us today for a free, confidential consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-md" data-aos="fade-right" data-aos-delay="300">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Send Us a Message
            </h3>
            
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="400">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name *
                  </label>
                  <Input 
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    value={form.firstName}
                    onChange={handleChange}
                    aria-invalid={!!errors.firstName}
                    aria-describedby={errors.firstName ? "firstName-error" : undefined}
                    required
                  />
                  {errors.firstName && (
                    <p id="firstName-error" className="text-xs text-red-500 mt-1" role="alert">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name *
                  </label>
                  <Input 
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    value={form.lastName}
                    onChange={handleChange}
                    aria-invalid={!!errors.lastName}
                    aria-describedby={errors.lastName ? "lastName-error" : undefined}
                    required
                  />
                  {errors.lastName && (
                    <p id="lastName-error" className="text-xs text-red-500 mt-1" role="alert">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="500">
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <Input 
                  id="email"
                  type="email"
                  name="email"
                  placeholder="john.doe@email.com"
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  required
                />
                {errors.email && (
                  <p id="email-error" className="text-xs text-red-500 mt-1" role="alert">{errors.email}</p>
                )}
              </div>

              <div data-aos="fade-up" data-aos-delay="600">
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input 
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="(555) 123-4567"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div data-aos="fade-up" data-aos-delay="700">
                <label htmlFor="matterType" className="block text-sm font-medium text-foreground mb-2">
                  Legal Matter Type
                </label>
                <select 
                  id="matterType"
                  className="w-full p-3 border border-input rounded-md bg-background"
                  name="matterType"
                  value={form.matterType}
                  onChange={handleChange}
                >
                  <option value="">Select a practice area</option>
                  <option value="family-law">Family Law</option>
                  <option value="personal-injury">Personal Injury</option>
                  <option value="criminal-defense">Criminal Defense</option>
                  <option value="immigration">Immigration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div data-aos="fade-up" data-aos-delay="800">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Tell us about your situation *
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Please provide details about your legal matter..."
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  required
                />
                {errors.message && (
                  <p id="message-error" className="text-xs text-red-500 mt-1" role="alert">{errors.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-accent hover:bg-accent-light text-accent-foreground font-semibold"
                aria-label="Submit consultation request"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                Schedule Free Consultation
              </Button>

              <p className="text-xs text-muted-foreground text-center" data-aos="fade-up" data-aos-delay="1000">
                By submitting this form, you agree to our privacy policy. 
                All consultations are confidential.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8" data-aos="fade-left" data-aos-delay="400">
            {/* Contact Details */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6" role="list" aria-label="Contact information">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex items-start space-x-4" 
                      role="listitem"
                      data-aos="fade-up"
                      data-aos-delay={500 + (index * 100)}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-accent" aria-hidden="true" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">
                          {info.title}
                        </h4>
                        <p className="text-foreground font-medium">
                          {info.details}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg p-8 shadow-md" data-aos="fade-up" data-aos-delay="900">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Our Location
              </h3>
              <div className="h-64 w-full rounded-lg overflow-hidden flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6696.808951040994!2d-117.020342!3d32.940329!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbfb0dfb0bc705%3A0x36702894f19912e1!2s14269%20Danielson%20St%20%23400%2C%20Poway%2C%20CA%2092064%2C%20USA!5e0!3m2!1sen!2sin!4v1753358872621!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RingRemind Legal Services Location - 14269 Danielson St, Suite 400, Poway, CA 92064"
                  aria-label="Map showing RingRemind Legal Services location in Poway, California"
                ></iframe>
              </div>
              <div className="mt-4 text-sm text-muted-foreground" data-aos="fade-up" data-aos-delay="1000">
                <p>Convenient parking available</p>
                <p>Accessible building entrance</p>
                <p>Public transportation nearby</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;