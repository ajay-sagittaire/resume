import React from "react";
import { Button } from "semantic-ui-react";
import ExternalLink from "../ExternalLink";
import "./index.css";

const Contact = ({ phone, email, website }) => {
  return (
    <div>
      {phone && (
        <Button className="contact" size="tiny" icon="phone" content={phone} />
      )}
      {email && (
        <ExternalLink
          className="contact"
          href={`mailto:${email}`}
          text={<Button size="tiny" icon="mail outline" content={email} />}
          color="#A0A0A0"
        />
      )}
      {website && (
        <ExternalLink
          className="contact"
          href={website}
          text={<Button size="tiny" icon="computer" content={website} />}
          color="#A0A0A0"
        />
      )}
    </div>
  );
};
export default Contact;
