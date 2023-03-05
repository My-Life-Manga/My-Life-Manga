import React from "react";
import { Container } from "react-bootstrap";
import { Navbar, Footer } from "../../components";
import { NavLink } from "react-router-dom";
import "./css/style.css";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <Container className="PrivacyPolicy my-5 ">
        <h1>Privacy Policy</h1>

        <p>This privacy policy ("policy") will help you understand how we collect, use, and protect your personal information. By using our services or registering for an account with us, you accept and agree to our policy.</p>

        <h3>Information We Collect</h3>

        <p>We may collect the following information:</p>

        <ul>
          <li>Name and contact information, such as email address, phone number, and postal address.</li>
          <li>Payment information, such as credit card details or other payment information.</li>
          <li>Information about your use of our services, such as the pages you visit, the products you view, and the frequency and duration of your visits.</li>
          <li>Information you provide when you communicate with us, such as support inquiries, feedback, or other messages.</li>
          <li>Information you provide when you participate in surveys or promotional activities.</li>
        </ul>

        <h3>How We Use Your Information</h3>

        <p>We may use your information in the following ways:</p>

        <ul>
          <li>To provide, maintain, and improve our services and products.</li>
          <li>To process transactions and deliver products and services.</li>
          <li>To communicate with you about your account, orders, or other inquiries.</li>
          <li>To personalize your experience and provide tailored content and advertising.</li>
          <li>To conduct research and analysis to improve our services and products.</li>
          <li>To send you newsletters, promotions, and other marketing materials.</li>
        </ul>

        <h3>How We Protect Your Information</h3>

        <p>We take the security of your personal information seriously and use industry-standard measures to protect it from unauthorized access, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>

        <h3>How We Share Your Information</h3>

        <p>We may share your information with the following third parties:</p>

        <ul>
          <li>Service providers, such as payment processors, shipping providers, and hosting providers, who help us deliver our services and products.</li>
          <li>Business partners, such as sponsors or advertisers, who may offer products or services that may be of interest to you.</li>
          <li>Legal and regulatory authorities, as required by law or to protect our legal rights.</li>
        </ul>

        <h3>Changes to This Policy</h3>

        <p>We may update this policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on our website.</p>

        <h3>
          <NavLink to="/contact">Contact Us</NavLink>
        </h3>

        <p>If you have any questions or concerns about this policy, please contact us at privacy@mywebsite.com.</p>
      </Container>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
